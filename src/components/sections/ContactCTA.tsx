"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTACT_DATA } from "@/data/projects";

export const ContactCTA: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="w-full relative overflow-hidden my-6 sm:my-10 scroll-mt-28">
      {/* Full-width container with border radius on desktop */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="group relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center justify-center p-6 sm:p-12 md:p-16 shadow-2xl">
          
          {/* Mountain Silhouette Sunset Background with slow cinematic zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-100 group-hover:scale-105"
            style={{
              backgroundImage: `url(${CONTACT_DATA.bgImage})`,
            }}
          />

          {/* Dark Overlay with Warm Sunset Highlights */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/75 group-hover:from-black/80 transition-colors duration-500" />

          {/* Foreground Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Top Label with horizontal lines */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-5"
            >
              <div className="h-[1px] w-8 sm:w-16 bg-white/30" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] uppercase text-white/90 font-heading">
                {CONTACT_DATA.label}
              </span>
              <div className="h-[1px] w-8 sm:w-16 bg-white/30" />
            </motion.div>

            {/* Oversized Cinematic Heading with Entrance Animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-heading leading-tight mb-8 drop-shadow-md"
            >
              {CONTACT_DATA.headline}
            </motion.h2>

            {/* Actions: Get In Touch Button with Light Sweep Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href={`mailto:${CONTACT_DATA.email}?subject=Project%20Inquiry%20-%20Video%20Editing`}
                className="group/btn relative inline-flex items-center justify-center bg-white text-[#111111] hover:bg-white text-xs sm:text-sm font-bold px-7 sm:px-8 py-3.5 rounded-full transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer"
              >
                {/* Light sweep animation on button */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform ease-in-out pointer-events-none" />

                <Mail className="relative z-10 w-4 h-4 mr-2.5 text-[#111111] transition-transform duration-300 group-hover/btn:scale-115" />
                <span className="relative z-10">{CONTACT_DATA.ctaText}</span>
                <ArrowUpRight className="relative z-10 ml-1.5 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 hover:border-white/40 text-xs sm:text-sm font-medium px-5 sm:px-6 py-3.5 rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />
                    <span>Copied Email!</span>
                  </>
                ) : (
                  <span>Copy: {CONTACT_DATA.email}</span>
                )}
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
