"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_DATA } from "@/data/projects";

// Clean minimal SVG social icons matching the reference image header pills
const HeaderYoutubeIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const HeaderInstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const HeaderLinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.7a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
  </svg>
);

interface NavbarProps {
  onOpenTalkModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTalkModal }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver Scrollspy
  useEffect(() => {
    const sectionIds = ["work", "services", "about", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        } else if (window.scrollY < 180) {
          setActiveSection("");
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.4, 0.7],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Work", id: "work", href: "#work", hasDropdown: false },
    { name: "Services", id: "services", href: "#services", hasDropdown: true },
    { name: "About", id: "about", href: "#about", hasDropdown: false },
    { name: "Contact", id: "contact", href: "#contact", hasDropdown: false },
  ];

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full px-3 sm:px-6 md:px-8 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <header
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 pointer-events-auto border border-[#DAD9D4]/80 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            : "bg-white/90 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.03)]"
        }`}
      >
        {/* Left Section: Personal Logo with subtle pulsing maroon dot */}
        <div className="flex items-center shrink-0">
          <a
            href="#"
            onClick={handleScrollToTop}
            className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#111111] font-heading flex items-center group cursor-pointer"
          >
            <span>Yunib Ashraf</span>
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.85, 1],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#941D27] ml-0.5 inline-block"
            />
          </a>
        </div>

        {/* Center Section: Navigation Links with Sliding Underline & Scrollspy */}
        <nav
          onMouseLeave={() => setHoveredTab(null)}
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-sm font-medium relative"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredTab === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredTab(item.id)}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 flex items-center transition-colors duration-250 cursor-pointer ${
                  isActive
                    ? "text-[#941D27] font-semibold"
                    : "text-[#111111] hover:text-[#941D27]"
                }`}
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70 transition-transform duration-250 group-hover:rotate-180" />
                )}

                {/* Smooth Animated Sliding Maroon Underline */}
                {(isActive || isHovered) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#941D27] rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 32,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Social Icons + Separator + Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-3.5 shrink-0">
          {/* Social Media Icons */}
          <div className="flex items-center gap-1.5">
            <a
              href={CONTACT_DATA.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#111111] hover:text-[#FF0000] hover:bg-black/[0.04] transition-all duration-250 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <HeaderYoutubeIcon />
            </a>

            <a
              href={CONTACT_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#111111] hover:text-[#C13584] hover:bg-black/[0.04] transition-all duration-250 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <HeaderInstagramIcon />
            </a>

            <a
              href={CONTACT_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#111111] hover:text-[#0A66C2] hover:bg-black/[0.04] transition-all duration-250 hover:scale-110 active:scale-95 cursor-pointer"
            >
              <HeaderLinkedinIcon />
            </a>
          </div>

          {/* Thin Vertical Separator */}
          <div className="h-4 w-[1px] bg-[#DAD9D4]" />

          {/* Let's Talk Button with diagonal arrow animation */}
          <a
            href="#contact"
            onClick={(e) => {
              handleNavClick(e, "#contact");
              if (onOpenTalkModal) onOpenTalkModal();
            }}
            className="group relative inline-flex items-center justify-center bg-[#111111] text-white text-xs font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-black hover:shadow-md transition-all duration-300 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Let&apos;s Talk</span>
            <ArrowUpRight className="relative z-10 ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2 pointer-events-auto">
          <a
            href="#contact"
            onClick={(e) => {
              handleNavClick(e, "#contact");
              if (onOpenTalkModal) onOpenTalkModal();
            }}
            className="inline-flex items-center justify-center bg-[#111111] text-white text-xs font-semibold px-3.5 py-2 min-h-[40px] rounded-full hover:bg-black transition-all active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#111111] hover:text-[#941D27] transition-colors rounded-full hover:bg-black/5 active:scale-95 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop for closing when tapping outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-40 pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden relative z-50 mt-2 max-w-7xl mx-auto pointer-events-auto rounded-2xl bg-white/98 backdrop-blur-md border border-[#DAD9D4] p-5 shadow-2xl"
            >
              <nav className="flex flex-col gap-1.5 text-base font-medium">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl min-h-[46px] transition-colors ${
                        isActive
                          ? "text-[#941D27] font-semibold bg-[#941D27]/8"
                          : "text-[#111111] hover:bg-black/5 active:bg-black/5"
                      }`}
                    >
                      <span className="font-heading">{item.name}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-[#941D27]" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-[#777777] opacity-60" />
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-4 border-t border-[#DAD9D4] flex items-center justify-between">
                <span className="text-xs text-[#777777] font-semibold tracking-wider uppercase font-heading">Connect</span>
                <div className="flex items-center gap-2">
                  <a
                    href={CONTACT_DATA.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full border border-[#DAD9D4] flex items-center justify-center text-[#111111] hover:text-[#FF0000] active:scale-95 transition-colors"
                  >
                    <HeaderYoutubeIcon />
                  </a>
                  <a
                    href={CONTACT_DATA.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full border border-[#DAD9D4] flex items-center justify-center text-[#111111] hover:text-[#C13584] active:scale-95 transition-colors"
                  >
                    <HeaderInstagramIcon />
                  </a>
                  <a
                    href={CONTACT_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full border border-[#DAD9D4] flex items-center justify-center text-[#111111] hover:text-[#0A66C2] active:scale-95 transition-colors"
                  >
                    <HeaderLinkedinIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
