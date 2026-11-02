"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrlOrId?: string;
  youtubeId?: string;
  title?: string;
  aspectRatio?: "16:9" | "9:16";
  rotate90Clockwise?: boolean;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrlOrId,
  youtubeId,
  title = "Video Playback",
  aspectRatio,
  rotate90Clockwise = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Playback control states for MP4 videos
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [detectedRatio, setDetectedRatio] = useState<"16:9" | "9:16">(
    aspectRatio || "16:9"
  );

  // Close on Escape & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Sync initial aspectRatio prop
  useEffect(() => {
    if (aspectRatio) {
      setDetectedRatio(aspectRatio);
    }
  }, [aspectRatio, isOpen]);

  // Reset playback states when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setCurrentTime(0);
    }
  }, [isOpen]);

  const activeSource = videoUrlOrId || youtubeId || "";
  const isMp4 = activeSource.endsWith(".mp4") || (activeSource.includes("/videos/") && !activeSource.includes("drive.google.com"));
  const isDrive = activeSource.includes("drive.google.com");

  let embedSrc = "";
  if (!isMp4) {
    if (isDrive) {
      embedSrc = activeSource.includes("/preview")
        ? activeSource
        : activeSource.replace(/\/view(\?.*)?$/, "/preview");
    } else if (activeSource.includes("instagram.com")) {
      embedSrc = activeSource.endsWith("/embed/")
        ? activeSource
        : `${activeSource.replace(/\/$/, "")}/embed/`;
    } else if (activeSource.includes("youtube.com") || activeSource.includes("youtube-nocookie.com")) {
      embedSrc = activeSource.includes("autoplay=1")
        ? activeSource
        : `${activeSource}${activeSource.includes("?") ? "&" : "?"}autoplay=1&rel=0&modestbranding=1`;
    } else if (activeSource.startsWith("http")) {
      embedSrc = activeSource;
    } else if (activeSource) {
      embedSrc = `https://www.youtube-nocookie.com/embed/${activeSource}?autoplay=1&rel=0&modestbranding=1`;
    }
  }

  // Handle video metadata to dynamically auto-detect aspect ratio
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      setDuration(videoRef.current.duration || 0);
      if (videoWidth && videoHeight) {
        if (videoHeight > videoWidth * 1.2) {
          setDetectedRatio("9:16");
        } else {
          setDetectedRatio("16:9");
        }
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const isVertical = detectedRatio === "9:16";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 md:p-8">
          {/* Backdrop with soft dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Dynamic Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            ref={containerRef}
            className={`relative z-10 flex flex-col rounded-2xl sm:rounded-[20px] bg-[#181818] border border-[#2A2A2A] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 w-full ${
              isVertical
                ? "max-w-[340px] xs:max-w-[380px] sm:max-w-[410px] max-h-[92dvh]"
                : "max-w-[920px] xl:max-w-[1000px] max-h-[92dvh]"
            }`}
          >
            {/* Common Header: Title on the left, Close button on the right */}
            <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-[#262626] bg-[#141414] shrink-0">
              <div className="flex items-center gap-2 truncate pr-2">
                <span className="w-2 h-2 rounded-full bg-[#941D27] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#EEEEEE] font-heading tracking-wide truncate">
                  {title}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#941D27] text-white/70 hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0 cursor-pointer min-w-[32px] min-h-[32px]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Display Area */}
            <div
              className={`relative w-full bg-[#0D0D0D] flex items-center justify-center overflow-hidden ${
                isVertical
                  ? "aspect-[9/16] max-h-[65dvh] sm:max-h-[74vh]"
                  : "aspect-video"
              }`}
            >
              {isMp4 ? (
                rotate90Clockwise ? (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <video
                      ref={videoRef}
                      src={activeSource}
                      autoPlay
                      playsInline
                      onLoadedMetadata={handleLoadedMetadata}
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={() => setIsPlaying(false)}
                      onClick={togglePlay}
                      className="absolute w-[177.78%] h-[56.25%] object-contain cursor-pointer select-none rotate-90 origin-center"
                    />
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    src={activeSource}
                    autoPlay
                    playsInline
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    onClick={togglePlay}
                    className="w-full h-full object-contain cursor-pointer select-none"
                  />
                )
              ) : (
                <iframe
                  className="w-full h-full border-0 select-none"
                  src={embedSrc}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Custom Control Bar for MP4 Videos */}
            {isMp4 && (
              <div className="flex flex-col gap-2 px-4 py-3 bg-[#141414] border-t border-[#262626] shrink-0">
                {/* Scrubbing Bar with Maroon Accent */}
                <div className="relative flex items-center w-full group">
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-[#333333] rounded-lg appearance-none cursor-pointer accent-[#941D27] focus:outline-none transition-all"
                  />
                </div>

                {/* Bottom Row Controls */}
                <div className="flex items-center justify-between gap-3 text-white/90">
                  {/* Left: Play/Pause & Time */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause" : "Play"}
                      className="p-1 text-white/80 hover:text-[#941D27] transition-colors cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>
                    <span className="text-[11px] sm:text-xs font-mono font-medium text-white/70">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right: Volume & Fullscreen (no speed selector) */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute" : "Mute"}
                        className="p-1 text-white/80 hover:text-[#941D27] transition-colors cursor-pointer"
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-14 sm:w-16 h-1 bg-[#333333] rounded appearance-none cursor-pointer accent-[#941D27] focus:outline-none hidden xs:inline-block"
                      />
                    </div>

                    <button
                      onClick={toggleFullscreen}
                      aria-label="Toggle Fullscreen"
                      className="p-1 text-white/80 hover:text-[#941D27] transition-colors cursor-pointer"
                    >
                      {isFullscreen ? (
                        <Minimize className="w-4 h-4" />
                      ) : (
                        <Maximize className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
