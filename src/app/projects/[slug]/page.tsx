"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Play, Calendar, User, Film, Clock, ExternalLink, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { VideoModal } from "@/components/portfolio/VideoModal";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [unwrappedParams, setUnwrappedParams] = useState<{ slug: string } | null>(null);

  React.useEffect(() => {
    params.then(setUnwrappedParams);
  }, [params]);

  if (!unwrappedParams) {
    return <div className="min-h-screen bg-[#F5F4F0] flex items-center justify-center">Loading...</div>;
  }

  const project = PROJECTS.find((p) => p.slug === unwrappedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5F4F0] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-extrabold font-heading text-[#111111] mb-4">Project Not Found</h1>
        <p className="text-[#777777] mb-6">The requested project could not be located.</p>
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold bg-[#111111] text-white px-6 py-2.5 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#111111] selection:bg-[#941D27] selection:text-white pb-20">
      {/* Top Header */}
      <header className="py-6 border-b border-[#DAD9D4] sticky top-0 bg-[#F5F4F0]/90 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-[#111111] hover:text-[#941D27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider text-[#777777] font-heading">
            {project.categoryLabel}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 pt-10 sm:pt-16">
        {/* Category & Title */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-md bg-[#111111] text-white text-[11px] font-bold tracking-[0.16em] uppercase font-heading mb-4">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111111] font-heading leading-tight mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-[#777777] font-normal">{project.subtitle}</p>
        </div>

        {/* Hero Video Media / Thumbnail */}
        <div
          onClick={() => setIsVideoModalOpen(true)}
          className="group relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-black shadow-xl cursor-pointer mb-12"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-5 left-5 text-white/90 text-xs font-mono bg-black/60 px-3 py-1.5 rounded-md backdrop-blur-sm">
            Click to Play Full Video
          </div>
        </div>

        {/* Project Meta Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-[#DAD9D4] mb-12">
          {project.client && (
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#777777] font-heading block mb-1">
                Client
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#111111]">
                {project.client}
              </span>
            </div>
          )}
          {project.role && (
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#777777] font-heading block mb-1">
                Role
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#111111]">
                {project.role}
              </span>
            </div>
          )}
          {project.duration && (
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#777777] font-heading block mb-1">
                Duration
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#111111]">
                {project.duration}
              </span>
            </div>
          )}
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#777777] font-heading block mb-1">
              Year
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#111111]">
              {project.year}
            </span>
          </div>
        </div>

        {/* Story & Editing Approach */}
        <div className="prose max-w-none text-[#111111]">
          <h2 className="text-2xl font-bold uppercase font-heading tracking-tight mb-4">
            Project Overview &amp; Storytelling Approach
          </h2>
          <p className="text-base sm:text-lg text-[#777777] leading-relaxed mb-8">
            {project.description}
          </p>

          {project.tools && project.tools.length > 0 && (
            <div className="mb-12">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111] font-heading mb-4">
                Software &amp; Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-[#DAD9D4] text-xs font-medium text-[#111111]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#111111] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase font-heading mb-1">
              Need a similar edit?
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Let&apos;s collaborate to transform your raw footage into unforgettable stories.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center text-xs sm:text-sm font-bold px-6 py-3 rounded-full bg-white text-[#111111] hover:bg-white/90 transition-all shrink-0"
          >
            Get In Touch
          </Link>
        </div>
      </article>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        youtubeId={project.youtubeId}
        title={`${project.title} — ${project.subtitle}`}
      />
    </main>
  );
}

