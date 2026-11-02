"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { REELS_PROJECTS, YOUTUBE_PROJECTS, CONTACT_DATA } from "@/data/projects";
import { ReelProject, YouTubeProject } from "@/types/project";
import { VideoModal } from "@/components/portfolio/VideoModal";

// YouTube red badge icon
const YouTubeBadgeIcon = () => (
  <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const SelectedWork: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{
    urlOrId: string;
    title: string;
    aspectRatio: "16:9" | "9:16";
    rotate90Clockwise?: boolean;
  } | null>(null);

  return (
    <>
      <section
        id="work"
        className="w-full border-t border-[#DAD9D4]/60 pt-12 pb-16 sm:pb-20 scroll-mt-28"
      >
        {/* Main Full-Width Responsive Container (92% viewport width, max 1440px) */}
        <div className="w-[92%] max-w-[1440px] mx-auto">
          
          {/* 1. Section Header: PORTFOLIO / 2026 + SELECTED WORK + View All Projects */}
          <div className="mb-8 sm:mb-12">
            {/* Label with horizontal line: 12px margin to heading */}
            <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
              <div className="h-[2px] w-6 bg-[#941D27]" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase text-[#111111]/80 font-heading">
                PORTFOLIO / 2026
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111111] font-heading leading-tight sm:leading-none">
                SELECTED WORK
              </h2>

              <a
                href="#contact"
                className="group inline-flex items-center text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#941D27] transition-colors self-start sm:self-auto border-b border-[#941D27] pb-0.5 cursor-pointer min-h-[36px]"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* 2. Short-Form Video Gallery (SHORT-FORM / INSTAGRAM REELS) */}
          <div className="mb-10 sm:mb-12">
            {/* Subheading stretching across with thin grey divider extending to the right */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-2.5 sm:pb-3 border-b border-[#DAD9D4]/80 w-full">
              <div className="w-[3px] h-4 bg-[#941D27]" />
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] uppercase text-[#111111] font-heading shrink-0">
                  SHORT-FORM / INSTAGRAM REELS
                </h3>
                <a
                  href={CONTACT_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram Profile (opens in new tab)"
                  title="Visit Instagram Profile"
                  className="text-[#777777] hover:text-[#941D27] transition-all duration-200 hover:scale-115 p-0.5 rounded-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </a>
              </div>
            </div>

            {/* Reels Grid:
                - On mobile (<768px): exactly 2 columns grid (grid-cols-2)
                  Row 1: Reel 1 & Reel 2 (9:16 portrait)
                  Row 2: Reel 3 & Reel 4 (9:16 portrait YouTube Shorts)
                  Row 3: Reel 5 & Reel 6 (16:9 landscape)
                - On desktop (lg: 1024px+): 5-column layout (lg:grid-cols-[1fr_1fr_1fr_1fr_1.4fr])
                  4 portrait columns + 1 stacked landscape column
            */}
            <div className="grid grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.4fr] gap-3 sm:gap-4 md:gap-5 w-full items-stretch">
              {/* Column 1 — Reel 1 (Portrait 9:16) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
                onClick={() =>
                  setActiveModal({
                    urlOrId: REELS_PROJECTS[0]?.videoSrc || "/videos/reel-1.mp4",
                    title: REELS_PROJECTS[0]?.title || "Short-Form Video 1",
                    aspectRatio: "9:16",
                  })
                }
                className="group relative w-full aspect-[9/16] max-h-[320px] xs:max-h-[360px] sm:max-h-[420px] lg:max-h-none rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-[#DAD9D4]/60 hover:border-[#941D27]/50 flex items-center justify-center cursor-pointer min-w-0 mx-auto"
              >
                {/* HTML5 Video element */}
                <video
                  src={REELS_PROJECTS[0]?.videoSrc || "/videos/reel-1.mp4"}
                  preload="metadata"
                  playsInline
                  muted
                  className="w-full h-full object-contain pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                {/* Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-115 group-hover:bg-[#941D27] group-hover:border-[#941D27] shadow-xl">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="text-[9px] sm:text-[10px] font-bold font-mono tracking-widest text-white/80 uppercase">
                    VIDEO 1
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/90 bg-white/15 px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Play
                  </span>
                </div>
              </motion.div>

              {/* Column 2 — Reel 2 (Portrait 9:16) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                onClick={() =>
                  setActiveModal({
                    urlOrId: REELS_PROJECTS[1]?.videoSrc || "/videos/reel-2.mp4",
                    title: REELS_PROJECTS[1]?.title || "Short-Form Video 2",
                    aspectRatio: "9:16",
                  })
                }
                className="group relative w-full aspect-[9/16] max-h-[320px] xs:max-h-[360px] sm:max-h-[420px] lg:max-h-none rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-[#DAD9D4]/60 hover:border-[#941D27]/50 flex items-center justify-center cursor-pointer min-w-0 mx-auto"
              >
                {/* HTML5 Video element */}
                <video
                  src={REELS_PROJECTS[1]?.videoSrc || "/videos/reel-2.mp4"}
                  preload="metadata"
                  playsInline
                  muted
                  className="w-full h-full object-contain pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                {/* Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-115 group-hover:bg-[#941D27] group-hover:border-[#941D27] shadow-xl">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="text-[9px] sm:text-[10px] font-bold font-mono tracking-widest text-white/80 uppercase">
                    VIDEO 2
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/90 bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Play
                  </span>
                </div>
              </motion.div>

              {/* Column 3 — Reel 3 (New YouTube Short - Portrait 9:16) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                onClick={() =>
                  setActiveModal({
                    urlOrId: REELS_PROJECTS[2]?.videoSrc || "https://www.youtube-nocookie.com/embed/F2cjpTnLQbA",
                    title: REELS_PROJECTS[2]?.title || "Short-Form Video 3",
                    aspectRatio: "9:16",
                  })
                }
                className="group relative w-full aspect-[9/16] max-h-[320px] xs:max-h-[360px] sm:max-h-[420px] lg:max-h-none rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-[#DAD9D4]/60 hover:border-[#941D27]/50 flex items-center justify-center cursor-pointer min-w-0 mx-auto"
              >
                {/* YouTube Thumbnail */}
                <Image
                  src={REELS_PROJECTS[2]?.thumbnailUrl || "https://img.youtube.com/vi/F2cjpTnLQbA/hqdefault.jpg"}
                  alt={REELS_PROJECTS[2]?.title || "Short-Form Video 3"}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                {/* Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-115 group-hover:bg-[#941D27] group-hover:border-[#941D27] shadow-xl">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="text-[9px] sm:text-[10px] font-bold font-mono tracking-widest text-white/80 uppercase">
                    VIDEO 3
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/90 bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Play
                  </span>
                </div>
              </motion.div>

              {/* Column 4 — Reel 4 (New YouTube Short - Portrait 9:16) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                onClick={() =>
                  setActiveModal({
                    urlOrId: REELS_PROJECTS[3]?.videoSrc || "https://www.youtube-nocookie.com/embed/Ya-Kcx0h9Ao",
                    title: REELS_PROJECTS[3]?.title || "Short-Form Video 4",
                    aspectRatio: "9:16",
                  })
                }
                className="group relative w-full aspect-[9/16] max-h-[320px] xs:max-h-[360px] sm:max-h-[420px] lg:max-h-none rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-[#DAD9D4]/60 hover:border-[#941D27]/50 flex items-center justify-center cursor-pointer min-w-0 mx-auto"
              >
                {/* YouTube Thumbnail */}
                <Image
                  src={REELS_PROJECTS[3]?.thumbnailUrl || "https://img.youtube.com/vi/Ya-Kcx0h9Ao/hqdefault.jpg"}
                  alt={REELS_PROJECTS[3]?.title || "Short-Form Video 4"}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                {/* Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-115 group-hover:bg-[#941D27] group-hover:border-[#941D27] shadow-xl">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="text-[9px] sm:text-[10px] font-bold font-mono tracking-widest text-white/80 uppercase">
                    VIDEO 4
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/90 bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    Play
                  </span>
                </div>
              </motion.div>

              {/* Column 5 on Desktop (1.4fr) / Row 3 on Mobile (col-span-2 on mobile with internal 2-column grid, lg:col-span-1 with flex-col on desktop) */}
              <div className="col-span-2 lg:col-span-1 grid grid-cols-2 lg:flex lg:flex-col justify-between gap-3 sm:gap-4 md:gap-5 w-full h-full min-w-0">
                {/* Reel 5 (Landscape 16:9 Google Drive Video) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() =>
                    setActiveModal({
                      urlOrId: REELS_PROJECTS[4]?.videoSrc || "https://drive.google.com/file/d/1dUC3zh6HX2EuiBFJQDQuK6Zv9irJ0rjq/preview",
                      title: REELS_PROJECTS[4]?.title || "Short-Form Video 5",
                      aspectRatio: "16:9",
                    })
                  }
                  className="group relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-[#DAD9D4]/60 hover:border-[#941D27]/50 flex items-center justify-center flex-1 cursor-pointer min-w-0"
                >
                  {/* Google Drive Preview Iframe (16:9 landscape) */}
                  <iframe
                    src="https://drive.google.com/file/d/1dUC3zh6HX2EuiBFJQDQuK6Zv9irJ0rjq/preview"
                    title="Short-Form Video 5"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300 pointer-events-none" />

                  {/* Centered Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-115 group-hover:bg-[#941D27] group-hover:border-[#941D27] shadow-xl">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="text-[9px] sm:text-[10px] font-bold font-mono tracking-widest text-white/80 uppercase">
                      VIDEO 5
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/90 bg-white/15 px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                      Play
                    </span>
                  </div>
                </motion.div>

                {/* Reel 6 (Landscape 16:9 Google Drive Video with Custom Cinematic Thumbnail) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() =>
                    setActiveModal({
                      urlOrId: REELS_PROJECTS[5]?.videoSrc || "https://drive.google.com/file/d/1OEtBixubZys4wb5-_kBJ8RQjvS3gKWYg/preview",
                      title: REELS_PROJECTS[5]?.title || "Short-Form Video 6",
                      aspectRatio: "16:9",
                    })
                  }
                  className="group relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-[#DAD9D4]/60 hover:border-[#941D27]/50 flex items-center justify-center flex-1 cursor-pointer min-w-0"
                >
                  {/* Cinematic Image Thumbnail (object-fit: cover) */}
                  <Image
                    src={REELS_PROJECTS[5]?.thumbnailUrl || "/videos/reel-4-thumb.jpg"}
                    alt={REELS_PROJECTS[5]?.title || "Short-Form Video 6 Thumbnail"}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300 pointer-events-none" />

                  {/* Centered Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-115 group-hover:bg-[#941D27] group-hover:border-[#941D27] shadow-xl">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="text-[9px] sm:text-[10px] font-bold font-mono tracking-widest text-white/80 uppercase">
                      VIDEO 6
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/90 bg-white/15 px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                      Play
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 3. YouTube Gallery (LONG-FORM / YOUTUBE FILMS) */}
          <div>
            {/* Subheading stretching across with thin grey divider extending to the right */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-2.5 sm:pb-3 border-b border-[#DAD9D4]/80 w-full">
              <div className="w-[3px] h-4 bg-[#941D27]" />
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] uppercase text-[#111111] font-heading shrink-0">
                  LONG-FORM / YOUTUBE FILMS
                </h3>
                <a
                  href={CONTACT_DATA.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit YouTube Channel (opens in new tab)"
                  title="Visit YouTube Channel"
                  className="text-[#777777] hover:text-[#941D27] transition-all duration-200 hover:scale-115 p-0.5 rounded-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                </a>
              </div>
            </div>

            {/* 4 Responsive YouTube Video Cards:
                - On mobile (<768px): exactly 2 columns grid (grid-cols-2)
                - On tablet/desktop (sm: 640px+ / md: 768px+): 2-column grid
            */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full">
              {YOUTUBE_PROJECTS.map((yt, idx) => (
                <motion.div
                  key={yt.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() =>
                    setActiveModal({
                      urlOrId: yt.youtubeId,
                      title: `${yt.title} — YouTube Video`,
                      aspectRatio: "16:9",
                    })
                  }
                  className="group relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0A0A] shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-[#DAD9D4]/70 hover:border-[#941D27]/50 flex flex-col cursor-pointer min-w-0"
                >
                  {/* YouTube high-resolution Thumbnail with object-fit: cover */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url(https://img.youtube.com/vi/${yt.youtubeId}/hqdefault.jpg), url(${yt.thumbnailUrl})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 group-hover:from-black/90 transition-colors duration-300" />

                  {/* Centered Play Indicator with YouTube badge hover transition */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-115 group-hover:bg-[#FF0000] group-hover:border-[#FF0000] shadow-xl">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Bar with Video Title and Tag */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="text-[9px] sm:text-[10px] font-bold font-mono tracking-widest text-white/80 uppercase">
                      VIDEO {idx + 1}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-white/90 bg-white/15 px-2 sm:px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF0000]" />
                      Watch
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Video Playback Modal */}
      {activeModal && (
        <VideoModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          videoUrlOrId={activeModal.urlOrId}
          title={activeModal.title}
          aspectRatio={activeModal.aspectRatio}
          rotate90Clockwise={activeModal.rotate90Clockwise}
        />
      )}
    </>
  );
};
