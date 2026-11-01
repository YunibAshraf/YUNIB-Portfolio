"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { VideoModal } from "@/components/portfolio/VideoModal";

interface ProjectCardProps {
  project: Project;
  onOpenVideo: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenVideo }) => {
  return (
    <div className="group flex flex-col cursor-pointer" onClick={() => onOpenVideo(project)}>
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-md transition-all duration-500 ease-out group-hover:shadow-xl">
        {/* Thumbnail Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 transition-opacity duration-300" />

        {/* Top-Left Category Badge */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
          <span className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-white border border-white/10 font-heading">
            {project.categoryLabel}
          </span>
        </div>

        {/* Top-Right Play Indicator */}
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Centered Hover Play Icon Animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </div>
        </div>

        {/* Bottom Details Overlaid as shown in reference */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10 flex items-end justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading tracking-tight drop-shadow-sm group-hover:text-white/95">
              {project.title}
            </h3>
            <p className="text-xs sm:text-[13px] text-white/75 mt-0.5 font-normal">
              {project.subtitle}
            </p>
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-xs font-semibold text-white/90">
            <span>Watch</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

