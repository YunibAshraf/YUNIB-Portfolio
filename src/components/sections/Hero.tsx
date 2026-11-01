"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ArrowUpRight, Film, Calendar, Target } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_SHOWREEL } from "@/data/projects";
import { VideoModal } from "@/components/portfolio/VideoModal";

// 1. Adobe Premiere Pro (Pr) Icon
const PremiereIcon = () => (
  <svg className="w-8 h-8 rounded-lg shadow-sm" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="20" fill="#00005B" />
    <text
      x="50%"
      y="65%"
      textAnchor="middle"
      fill="#9999FF"
      fontSize="46"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="bold"
    >
      Pr
    </text>
  </svg>
);

// 2. DaVinci Resolve Icon
const ResolveIcon = () => (
  <svg className="w-8 h-8 drop-shadow-sm" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#1A1A1A" />
    {/* Top Petal - Red */}
    <path
      d="M50 16 C57 16 68 32 50 48 C32 32 43 16 50 16 Z"
      fill="#FF3344"
    />
    {/* Bottom Left Petal - Blue */}
    <path
      d="M20 68 C16 62 26 46 48 50 C44 70 24 74 20 68 Z"
      fill="#00B4D8"
    />
    {/* Bottom Right Petal - Yellow */}
    <path
      d="M80 68 C84 62 74 46 52 50 C56 70 76 74 80 68 Z"
      fill="#FFB703"
    />
  </svg>
);

// 3. Final Cut Pro Icon
const FinalCutIcon = () => (
  <svg className="w-8 h-8 drop-shadow-sm" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="fcpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A80F0" />
        <stop offset="50%" stopColor="#E032A0" />
        <stop offset="100%" stopColor="#F9A825" />
      </linearGradient>
    </defs>
    {/* Clapperboard Body */}
    <rect x="10" y="32" width="80" height="58" rx="10" fill="url(#fcpGrad)" />
    {/* Clapperboard Top Slanted Bar */}
    <path
      d="M10 24 L86 16 L90 28 L14 36 Z"
      fill="#222222"
    />
    {/* White Stripes on Top Bar */}
    <polygon points="26,22 36,21 32,33 22,34" fill="#FFFFFF" />
    <polygon points="48,19 58,18 54,30 44,31" fill="#FFFFFF" />
    <polygon points="70,16 80,15 76,27 66,28" fill="#FFFFFF" />
  </svg>
);

// Subtle curved underline for "STORIES."
const CurvedUnderline = () => (
  <svg
    className="absolute left-0 -bottom-2 w-full h-3 text-[#941D27]/40 pointer-events-none"
    viewBox="0 0 200 16"
    fill="none"
    preserveAspectRatio="none"
  >
    <path
      d="M4 11C45 4 155 4 196 11"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="pt-6 sm:pt-10 md:pt-14 pb-16 md:pb-24 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column (48–52% Desktop Width) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow Label with Maroon Accent Line */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5 sm:mb-6"
            >
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#171717] font-heading">
                VIDEO EDITOR &amp; VISUAL STORYTELLER
              </span>
              <div className="h-[2px] w-8 bg-[#941D27]" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-[54px] xl:text-[60px] font-black uppercase tracking-tight text-[#171717] font-heading leading-[1.08] mb-5 sm:mb-6"
            >
              I TURN IDEAS INTO<br />
              VISUAL{" "}
              <span className="relative inline-block text-[#941D27]">
                STORIES.
                <CurvedUnderline />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#777777] text-sm sm:text-base max-w-lg leading-relaxed mb-7 sm:mb-8 font-normal font-sans"
            >
              A video editor passionate about storytelling, visual rhythm and creating engaging content that connects with audiences.
            </motion.p>

            {/* Two Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3.5 mb-8 sm:mb-9"
            >
              {/* 1. Watch Showreel (Maroon Pill) */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center justify-center bg-[#941D27] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#7D161F] transition-all duration-300 active:scale-95 shadow-[0_4px_14px_rgba(148,29,39,0.25)] hover:shadow-[0_6px_20px_rgba(148,29,39,0.35)] cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current mr-2 transition-transform duration-300 group-hover:scale-115" />
                <span>Watch Showreel</span>
              </button>

              {/* 2. Explore Work (White Pill with Black Border) */}
              <a
                href="#work"
                className="group inline-flex items-center justify-center bg-white text-[#171717] border border-[#171717] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 active:scale-95 hover:bg-[#171717]/5 cursor-pointer shadow-xs"
              >
                <span>Explore Work</span>
                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Exactly Three Video Editing Software Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 sm:gap-5 mb-8 sm:mb-9"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                {/* 1. Adobe Premiere Pro */}
                <div className="flex items-center justify-center transition-transform duration-200 hover:scale-108" title="Adobe Premiere Pro">
                  <PremiereIcon />
                </div>

                <div className="h-6 w-[1px] bg-[#DAD9D4]" />

                {/* 2. DaVinci Resolve */}
                <div className="flex items-center justify-center transition-transform duration-200 hover:scale-108" title="DaVinci Resolve">
                  <ResolveIcon />
                </div>

                <div className="h-6 w-[1px] bg-[#DAD9D4]" />

                {/* 3. Final Cut Pro */}
                <div className="flex items-center justify-center transition-transform duration-200 hover:scale-108" title="Final Cut Pro">
                  <FinalCutIcon />
                </div>
              </div>
            </motion.div>

            {/* Light-Pink/Off-White Statistics Panel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg rounded-2xl bg-[#F6EFEF]/80 border border-[#EADBDB] p-4 sm:p-5 shadow-[0_4px_16px_rgba(148,29,39,0.04)]"
            >
              <div className="grid grid-cols-3 divide-x divide-[#E5D7D7]">
                {/* 50+ Projects Edited */}
                <div className="flex items-center gap-2.5 sm:gap-3 px-2 sm:px-3 first:pl-1">
                  <Film className="w-5 h-5 sm:w-6 sm:h-6 text-[#941D27] shrink-0 stroke-[1.75]" />
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-black text-[#171717] font-heading leading-tight">
                      50+
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#777777] font-medium leading-tight mt-0.5">
                      Projects Edited
                    </span>
                  </div>
                </div>

                {/* 2+ Years Experience */}
                <div className="flex items-center gap-2.5 sm:gap-3 px-2 sm:px-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#941D27] shrink-0 stroke-[1.75]" />
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-black text-[#171717] font-heading leading-tight">
                      2+
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#777777] font-medium leading-tight mt-0.5">
                      Years Experience
                    </span>
                  </div>
                </div>

                {/* 100% Client Focused */}
                <div className="flex items-center gap-2.5 sm:gap-3 px-2 sm:px-3">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#941D27] shrink-0 stroke-[1.75]" />
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-black text-[#171717] font-heading leading-tight">
                      100%
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#777777] font-medium leading-tight mt-0.5">
                      Client Focused
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Premium Introduction Video Card (48–52% Desktop Width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center w-full"
          >
            <div className="w-full max-w-[560px] rounded-[22px] bg-white p-3.5 sm:p-4 border border-[#941D27]/40 shadow-[0_12px_32px_rgba(148,29,39,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(148,29,39,0.12)] hover:border-[#941D27]/70 group">
              {/* Top Card Bar / Header */}
              <div className="flex items-center justify-between px-2 pt-1 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#941D27]" />
                  <span className="text-[11px] sm:text-xs font-bold font-heading tracking-[0.2em] text-[#171717] uppercase">
                    INTRODUCTION
                  </span>
                </div>
                {/* Three small grey decorative dots */}
                <div className="flex items-center gap-1.5 opacity-40">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#171717]" />
                </div>
              </div>

              {/* 16:9 Video Thumbnail with YouTube Red Play Button */}
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="relative w-full aspect-video rounded-xl sm:rounded-[16px] overflow-hidden bg-black shadow-inner cursor-pointer group/video"
              >
                {/* Original Introduction Thumbnail Artwork & Text */}
                <Image
                  src="/images/hero-intro-thumb.jpg"
                  alt="Yunib Ashraf — Introduction Video"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 ease-out group-hover/video:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-black/15 group-hover/video:bg-black/25 transition-colors duration-300" />

                {/* Official Red YouTube Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-10 sm:w-16 sm:h-11 rounded-xl bg-[#FF0000] flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover/video:scale-115">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="flex items-center justify-between px-2 pt-3.5 pb-1">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#171717] font-heading tracking-tight">
                    Yunib Ashraf
                  </h4>
                  <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#941D27] mt-0.5 font-heading">
                    VIDEO EDITOR · VISUAL STORYTELLER
                  </p>
                </div>
                {/* Circular Play Button on the right */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label="Play Introduction Video"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-transparent border border-[#171717]/30 flex items-center justify-center text-[#171717] transition-all duration-300 group-hover:bg-[#941D27] group-hover:text-white group-hover:border-[#941D27] cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        youtubeId={HERO_SHOWREEL.youtubeId}
        title="Yunib Ashraf — Introduction Video"
      />
    </>
  );
};
