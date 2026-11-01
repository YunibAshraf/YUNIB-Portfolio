"use client";

import React from "react";
import { Film, Smartphone, Palette, Mic } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/projects";

// Stylized brush underline beneath heading matching reference
const ServicesUnderline = () => (
  <svg
    className="w-full max-w-[280px] sm:max-w-[340px] h-3.5 text-[#941D27] mt-1.5"
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
  </svg>
);

// Faint Filmstrip Decorative Graphic (Upper-Right)
const FilmstripDecoration = () => (
  <svg
    className="absolute -top-12 -right-8 w-64 h-64 sm:w-80 sm:h-80 text-[#DAD9D4]/45 pointer-events-none -rotate-12 select-none -z-10"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 30 C 60 10, 140 10, 190 30 L 180 180 C 130 160, 50 160, 0 180 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
    <rect x="30" y="45" width="22" height="18" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="65" y="40" width="22" height="18" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="100" y="38" width="22" height="18" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="135" y="40" width="22" height="18" rx="2" fill="currentColor" fillOpacity="0.25" />
    
    <rect x="25" y="145" width="22" height="18" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="60" y="140" width="22" height="18" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="95" y="138" width="22" height="18" rx="2" fill="currentColor" fillOpacity="0.25" />
    <rect x="130" y="140" width="22" height="18" rx="2" fill="currentColor" fillOpacity="0.25" />
  </svg>
);

// Faint Clapperboard Decorative Graphic (Lower-Left)
const ClapperboardDecoration = () => (
  <svg
    className="absolute -bottom-10 -left-10 w-44 h-44 sm:w-56 sm:h-56 text-[#DAD9D4]/40 pointer-events-none rotate-6 select-none -z-10"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="20" y="60" width="140" height="95" rx="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M15 50 L165 30 L160 55 L10 75 Z" stroke="currentColor" strokeWidth="1.8" />
    <line x1="45" y1="46" x2="60" y2="68" stroke="currentColor" strokeWidth="1.8" />
    <line x1="85" y1="41" x2="100" y2="63" stroke="currentColor" strokeWidth="1.8" />
    <line x1="125" y1="36" x2="140" y2="58" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full border-t border-[#DAD9D4]/60 py-16 sm:py-20 lg:py-24 scroll-mt-28 overflow-hidden"
    >
      {/* Decorative film production elements in background */}
      <FilmstripDecoration />
      <ClapperboardDecoration />

      {/* Main Full-Width Responsive Container: 92% width, max 1600px */}
      <div className="w-[92%] max-w-[1600px] mx-auto">
        
        {/* Top Header Grid: Title on Left with Underline, Supporting Text with Divider on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 sm:mb-14 items-end">
          
          {/* Left Column: Services Tag + Heading + Maroon Brush Underline */}
          <div className="lg:col-span-7">
            {/* Label */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase text-[#111111]/85 font-heading">
                SERVICES
              </span>
              <div className="h-[2.5px] w-8 bg-[#941D27] rounded-full" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111] font-heading leading-[1.06]">
              FROM RAW FOOTAGE<br />
              TO POLISHED STORIES.
            </h2>
            <ServicesUnderline />
          </div>

          {/* Right Column: Thin Vertical Divider + Supporting Text */}
          <div className="lg:col-span-5 flex items-center lg:pl-6">
            <div className="hidden lg:block w-[1.5px] h-12 bg-[#DAD9D4] mr-6 shrink-0" />
            <p className="text-sm sm:text-base text-[#777777] font-normal leading-relaxed">
              End-to-end video editing services to bring your vision to life.
            </p>
          </div>

        </div>

        {/* Four Large Cinematic Service Cards Arranged Horizontally with Section-Specific Hover Styles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {SERVICES.map((service, index) => {
            const isVideoEditing = service.id === "video-editing";
            const isShortForm = service.id === "short-form";
            const isColorGrading = service.id === "color-grading";
            const isVoiceOver = service.id === "voice-over";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[360px] sm:h-[370px] lg:h-[380px] rounded-2xl overflow-hidden bg-[#141414] shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border border-transparent hover:border-[#941D27]/40 cursor-pointer flex flex-col justify-end p-6"
              >
                {/* Background Image with Unique Shift / Zoom Behavior */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out ${
                    isVideoEditing
                      ? "group-hover:scale-110"
                      : isShortForm
                      ? "group-hover:scale-106 group-hover:-translate-y-1"
                      : isColorGrading
                      ? "group-hover:scale-108 group-hover:contrast-115"
                      : "group-hover:scale-107"
                  }`}
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                />

                {/* Dark Gradient Overlay with Color Grading Warm Tone Transition */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-all duration-400 ${
                    isColorGrading
                      ? "from-black/95 via-black/55 to-black/25 group-hover:from-black/90 group-hover:via-[#941D27]/20 group-hover:to-transparent"
                      : "from-black/95 via-black/55 to-black/25 group-hover:from-black/90"
                  }`}
                />

                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col items-start transition-transform duration-300 group-hover:-translate-y-1">
                  
                  {/* Section-Specific Animated Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-[#941D27] flex items-center justify-center shadow-lg mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(148,29,39,0.5)]">
                    {isVideoEditing && (
                      <Film className="w-5 h-5 text-white stroke-[2] transition-transform duration-400 group-hover:rotate-6" />
                    )}
                    {isShortForm && (
                      <Smartphone className="w-5 h-5 text-white stroke-[2] transition-transform duration-400 group-hover:-translate-y-1" />
                    )}
                    {isColorGrading && (
                      <Palette className="w-5 h-5 text-white stroke-[2] transition-transform duration-500 group-hover:rotate-45" />
                    )}
                    {isVoiceOver && (
                      <Mic className="w-5 h-5 text-white stroke-[2] transition-transform duration-300 group-hover:scale-115" />
                    )}
                  </div>

                  {/* Bold White Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight mb-2 group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Exact Description with smooth upward slide */}
                  <p className="text-xs sm:text-[13px] text-white/75 font-normal leading-relaxed mb-4 transition-colors duration-300 group-hover:text-white/90">
                    {service.description}
                  </p>

                  {/* Short Maroon Accent Line that Expands on Hover */}
                  <div className="h-[2.5px] w-9 bg-[#941D27] rounded-full transition-all duration-400 ease-out group-hover:w-16 group-hover:bg-[#ff3b47]" />

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
