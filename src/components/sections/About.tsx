"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ABOUT_DATA } from "@/data/projects";

// Stylized hand-drawn brush underline matching the reference image exactly
const HandDrawnUnderline = () => (
  <motion.svg
    initial={{ strokeDashoffset: 350, strokeDasharray: 350 }}
    whileInView={{ strokeDashoffset: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="w-full max-w-[340px] sm:max-w-[440px] h-4 text-[#941D27] mt-2"
    viewBox="0 0 320 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 11.5C45 9.2 125 5.5 210 7.2C255 8.1 295 10.8 317 11.8C314 12.8 245 13.5 185 13.2C110 12.8 35 14.2 8 15"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export const About: React.FC = () => {
  // Subtle Mouse-Follow Parallax for Portrait & Maroon Box
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  // Separate parallax layers
  const boxX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const boxY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);
  const portraitX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const portraitY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      className="w-full border-t border-[#DAD9D4]/60 py-10 sm:py-16 lg:py-20 scroll-mt-28 overflow-hidden"
    >
      {/* Main Container: 92% width, max 1500px */}
      <div className="w-[92%] max-w-[1500px] mx-auto">

        {/* Three-Column Desktop Grid Layout / Reordered Mobile Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(360px,390px)_minmax(0,1fr)_minmax(250px,290px)] gap-8 sm:gap-10 lg:gap-10 xl:gap-12 items-start">

          {/* 1. Left Column on Desktop (Portrait Card)
              - On Mobile (<1024px): hidden, because portrait card is placed directly below the headline
              - On Desktop (lg: 1024px+): displayed in Column 1
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex w-full justify-start shrink-0 lg:pt-1 min-w-0"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[380px] h-[530px] flex items-center justify-center cursor-pointer group shrink-0"
            >
              {/* Deep Maroon Rounded Background Card (360–390px wide, 500–540px tall, 28–32px radius) */}
              <motion.div
                style={{ x: boxX, y: boxY }}
                className="absolute inset-0 rounded-[32px] bg-[#941D27] shadow-[0_16px_36px_rgba(148,29,39,0.25)] -z-10 transition-shadow duration-300 group-hover:shadow-[0_24px_50px_rgba(148,29,39,0.38)]"
              />

              {/* Tight-cutout Portrait with Hand-drawn White Sketch Outline occupying ~92-95% of card height and overlapping slightly */}
              <motion.div
                style={{ x: portraitX, y: portraitY }}
                className="relative w-[106%] h-[106%] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              >
                <Image
                  src="/images/about/yunib-portrait-tight.png"
                  alt="Yunib Ashraf — Video Editor & Visual Storyteller"
                  fill
                  priority
                  sizes="390px"
                  className="object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.28)] select-none pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* 2. Center Column — About Me Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0 flex flex-col justify-start"
          >
            {/* 1. Small Label: ABOUT ME */}
            <div className="flex items-center gap-3 h-5 mb-2.5 sm:mb-3">
              <div className="h-[2px] w-6 bg-[#941D27]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase text-[#111111]/85 font-heading">
                ABOUT ME
              </span>
            </div>

            {/* 2. Main Heading: GOOD EDITING IS INVISIBLE. GREAT EDITING IS UNFORGETTABLE. */}
            <div className="mb-4 sm:mb-5">
              <h2 className="text-[22px] xs:text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-black uppercase tracking-tight text-[#111111] font-heading leading-[1.08] sm:leading-[1.05] break-words">
                GOOD EDITING IS INVISIBLE.<br />
                GREAT EDITING IS<br />
                UNFORGETTABLE.
              </h2>
              <HandDrawnUnderline />
            </div>

            {/* 3. Mobile-only Portrait Image placed immediately below the headline */}
            <div className="flex lg:hidden w-full justify-center my-6 sm:my-8">
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full max-w-[320px] xs:max-w-[340px] sm:max-w-[360px] h-[440px] xs:h-[470px] sm:h-[500px] flex items-center justify-center cursor-pointer group shrink-0"
              >
                {/* Deep Maroon Background Card */}
                <motion.div
                  style={{ x: boxX, y: boxY }}
                  className="absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-[#941D27] shadow-[0_16px_36px_rgba(148,29,39,0.25)] -z-10"
                />

                {/* Tight-cutout Portrait with Hand-drawn White Sketch Outline */}
                <motion.div
                  style={{ x: portraitX, y: portraitY }}
                  className="relative w-[106%] h-[106%] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                >
                  <Image
                    src="/images/about/yunib-portrait-tight.png"
                    alt="Yunib Ashraf — Video Editor & Visual Storyteller"
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, 360px"
                    className="object-contain object-center drop-shadow-[0_15px_30px_rgba(0,0,0,0.28)] select-none pointer-events-none"
                  />
                </motion.div>
              </div>
            </div>

            {/* 4. Exact Five Paragraphs with Refined Editorial Typography (15-16px, 1.65 line-height) */}
            <div className="space-y-3 mb-6 sm:mb-7 text-[14px] sm:text-[15px] lg:text-[15.5px] text-[#555555] leading-[1.65] font-normal">
              {/* Paragraph 1 — Professional Introduction */}
              <p>
                I&apos;m a video editor and visual storyteller passionate about turning raw footage into compelling visual experiences. I specialize in creative editing, cinematic color grading, sound design, and voice-over integration, bringing together visuals and audio to create stories that resonate with audiences.
              </p>

              {/* Paragraph 2 — Content Specialization */}
              <p>
                From cinematic long-form productions to engaging short-form content, including Instagram Reels and YouTube Shorts, I focus on crafting videos with strong storytelling, seamless pacing, and a distinctive visual identity.
              </p>

              {/* Paragraph 3 — Professional Experience */}
              <p>
                With nearly two years of professional experience as a full-time Video Editor at <strong className="text-[#111111] font-semibold">IMDH Trust</strong>, I have managed and developed the social media presence of both the organization and its director. From creating content to managing digital platforms, I have played an active role in building their online presence from the ground up.
              </p>

              {/* Paragraph 4 — Educational Qualification */}
              <p>
                I hold a <strong className="text-[#111111] font-semibold">Bachelor of Computer Applications (BCA)</strong> degree from <strong className="text-[#111111] font-semibold">Chitkara University</strong>, combining my technical understanding with a creative approach to visual storytelling.
              </p>

              {/* Paragraph 5 — Personal Closing Statement */}
              <p>
                For me, video editing goes beyond arranging clips and adding effects. It&apos;s about crafting meaningful experiences through powerful storytelling, where every frame, sound, and transition comes together to create stories that people can see, hear, and feel.
              </p>
            </div>

            {/* 5. Rounded Black CTA Button */}
            <div>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center bg-[#111111] text-white text-xs sm:text-sm font-semibold px-7 sm:px-8 py-3.5 min-h-[44px] rounded-full hover:bg-black transition-all duration-300 active:scale-95 shadow-md hover:shadow-xl overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Let&apos;s Work Together</span>
                <ArrowUpRight className="relative z-10 ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
              </a>
            </div>
          </motion.div>

          {/* 3. Right Column — Tools & Skills Column (Top-aligned, header on same horizontal line) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full shrink-0 flex flex-col justify-start pt-6 lg:pt-0 lg:pl-8 xl:pl-9 lg:border-l border-[#DAD9D4] self-start min-w-0"
          >
            {/* Tools Heading — exactly matching ABOUT ME label line-height and alignment */}
            <div className="flex items-center h-5 mb-4 sm:mb-5">
              <h3 className="text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase text-[#111111] font-heading">
                TOOLS I USE
              </h3>
            </div>

            {/* Software Icons Row: 60-66px with individual hover effects & tooltips */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-7 shrink-0">
              {/* Adobe Premiere Pro */}
              <div className="group relative shrink-0">
                <div className="w-[60px] h-[60px] sm:w-[64px] sm:h-[64px] rounded-2xl bg-[#00005b] text-[#9999ff] font-heading font-black text-xl flex items-center justify-center shadow-md border border-white/10 hover:scale-110 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shrink-0">
                  Pr
                </div>
                {/* Tooltip */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#111111] text-white text-[11px] font-medium py-1 px-2.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                  Premiere Pro
                </div>
              </div>

              {/* DaVinci Resolve */}
              <div className="group relative shrink-0">
                <div className="w-[60px] h-[60px] sm:w-[64px] sm:h-[64px] rounded-2xl bg-gradient-to-br from-[#1c1c24] to-[#0a0a0f] flex items-center justify-center shadow-md border border-white/10 hover:scale-110 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden cursor-pointer shrink-0">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center relative">
                    <div className="absolute top-0 w-3.5 h-3.5 rounded-full bg-[#ff3b30]" />
                    <div className="absolute bottom-0 left-0 w-3.5 h-3.5 rounded-full bg-[#34c759]" />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#007aff]" />
                  </div>
                </div>
                {/* Tooltip */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#111111] text-white text-[11px] font-medium py-1 px-2.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                  DaVinci Resolve
                </div>
              </div>

              {/* Adobe Photoshop */}
              <div className="group relative shrink-0">
                <div className="w-[60px] h-[60px] sm:w-[64px] sm:h-[64px] rounded-2xl bg-[#001e36] text-[#31a8ff] font-heading font-black text-xl flex items-center justify-center shadow-md border border-white/10 hover:scale-110 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shrink-0">
                  Ps
                </div>
                {/* Tooltip */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#111111] text-white text-[11px] font-medium py-1 px-2.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                  Photoshop
                </div>
              </div>
            </div>

            {/* Checklist with Maroon Checkmarks: 15-16px, comfortable line spacing */}
            <div className="space-y-3.5">
              {ABOUT_DATA.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.3 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <Check className="w-5 h-5 text-[#941D27] stroke-[3.2] shrink-0 transition-transform duration-250 group-hover:scale-120" />
                  <span className="text-[14px] sm:text-[15.5px] font-medium text-[#111111] transition-colors duration-250 group-hover:text-[#941D27]">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
