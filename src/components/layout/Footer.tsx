"use client";

import React from "react";
import { motion } from "framer-motion";
import { CONTACT_DATA } from "@/data/projects";

// Official Brand Icons matching the reference precisely
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <defs>
      <radialGradient id="ig-grad-footer" cx="20%" cy="105%" r="130%">
        <stop offset="0%" stopColor="#ffdb55"/>
        <stop offset="10%" stopColor="#ffdd55"/>
        <stop offset="50%" stopColor="#ff543e"/>
        <stop offset="85%" stopColor="#c837ab"/>
        <stop offset="100%" stopColor="#4158d0"/>
      </radialGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="url(#ig-grad-footer)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="url(#ig-grad-footer)" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad-footer)"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5 fill-[#FF0000]" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const socials = [
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon />,
      url: CONTACT_DATA.socials.whatsapp,
      hoverClass: "hover:border-[#25D366] hover:shadow-[0_8px_20px_rgba(37,211,102,0.2)]",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: CONTACT_DATA.socials.linkedin,
      hoverClass: "hover:border-[#0A66C2] hover:shadow-[0_8px_20px_rgba(10,102,194,0.2)]",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      url: CONTACT_DATA.socials.instagram,
      hoverClass: "hover:border-[#C13584] hover:shadow-[0_8px_20px_rgba(193,53,132,0.2)]",
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon />,
      url: CONTACT_DATA.socials.youtube,
      hoverClass: "hover:border-[#FF0000] hover:shadow-[0_8px_20px_rgba(255,0,0,0.2)]",
    },
  ];

  return (
    <footer className="w-full bg-[#F5F4F0] pt-12 pb-14 sm:pb-20 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        
        {/* 1. Socials Section */}
        <div className="mb-6 sm:mb-8">
          <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase text-[#111111]/85 font-heading mb-4">
            SOCIALS
          </span>

          <div className="flex items-center gap-3 sm:gap-3.5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#DAD9D4] flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-108 active:scale-95 ${social.hoverClass}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 2. Divider */}
        <div className="w-full h-[1px] bg-[#DAD9D4] my-6 sm:my-7" />

        {/* 3. Copyright and Design Credit */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-[13px] text-[#777777] gap-2 mb-10 sm:mb-16 font-normal">
          <p>© 2026 Yunib Ashraf. All rights reserved.</p>
       
        </div>

        {/* 4. Oversized Personal Branding with Smooth Masked Text Animation */}
        <div className="text-center pt-2 sm:pt-4 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold uppercase text-[#D0CFCC] tracking-tight leading-none pointer-events-none transition-colors duration-400 hover:text-[#941D27]/30"
            style={{
              fontSize: "clamp(2.75rem, 11.5vw, 10.5rem)",
              letterSpacing: "-0.035em",
            }}
          >
            YUNIB ASHRAF
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 sm:mt-5 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#777777] font-heading"
          >
            VIDEO EDITOR · VISUAL STORYTELLER
          </motion.p>
        </div>

      </div>
    </footer>
  );
};
