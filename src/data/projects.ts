import { Project, Service, Stat, ReelProject, YouTubeProject } from '@/types/project';

export const HERO_SHOWREEL = {
  title: "Showreel 2026",
  subtitle: "A collection of my best work",
  duration: "01:00",
  thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
  youtubeId: "jSy4YyUj890",
};

export const HERO_STATS: Stat[] = [
  { value: "50+", label: "Projects Edited" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Focused" },
];

// Short-form / Reel Videos (4 local MP4 video files)
export const REELS_PROJECTS: ReelProject[] = [
  {
    id: "reel-1",
    slug: "short-form-video-1",
    title: "Short-Form Video 1",
    videoSrc: "/videos/reel-1.mp4",
    aspectRatio: "9:16",
    category: "Short-Form",
    duration: "9:16",
    thumbnailUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "reel-2",
    slug: "short-form-video-2",
    title: "Short-Form Video 2",
    videoSrc: "/videos/reel-2.mp4",
    aspectRatio: "9:16",
    category: "Short-Form",
    duration: "9:16",
    thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "reel-3",
    slug: "short-form-video-3",
    title: "Short-Form Video 3",
    videoSrc: "https://drive.google.com/file/d/1dUC3zh6HX2EuiBFJQDQuK6Zv9irJ0rjq/preview",
    driveUrl: "https://drive.google.com/file/d/1dUC3zh6HX2EuiBFJQDQuK6Zv9irJ0rjq/view?usp=drivesdk",
    aspectRatio: "16:9",
    category: "Landscape",
    duration: "16:9",
  },
  {
    id: "reel-4",
    slug: "short-form-video-4",
    title: "Short-Form Video 4",
    videoSrc: "https://drive.google.com/file/d/1OEtBixubZys4wb5-_kBJ8RQjvS3gKWYg/preview",
    driveUrl: "https://drive.google.com/file/d/1OEtBixubZys4wb5-_kBJ8RQjvS3gKWYg/view?usp=drivesdk",
    aspectRatio: "16:9",
    category: "Landscape",
    duration: "16:9",
    thumbnailUrl: "/videos/reel-4-thumb.jpg",
  },
];

// Long-form / YouTube Films (Exact 4 videos in specified order)
export const YOUTUBE_PROJECTS: YouTubeProject[] = [
  {
    id: "yt-1",
    slug: "youtube-ers-z94oiza",
    title: "YouTube Video 1",
    category: "Long-Form",
    duration: "16:9",
    thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "eRS_z94oiZA",
  },
  {
    id: "yt-2",
    slug: "youtube-ybpkypm9xea",
    title: "YouTube Video 2",
    category: "Commercial",
    duration: "16:9",
    thumbnailUrl: "https://img.youtube.com/vi/YBpKYPm9XEA/hqdefault.jpg",
    youtubeId: "YBpKYPm9XEA",
  },
  {
    id: "yt-3",
    slug: "youtube-v8x1xpuqzju-2",
    title: "YouTube Video 3",
    category: "Cinematic",
    duration: "16:9",
    thumbnailUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "v8x1XPUqzjU",
  },
  {
    id: "yt-4",
    slug: "youtube-lgreccaywna",
    title: "YouTube Video 4",
    category: "Documentary",
    duration: "16:9",
    thumbnailUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "LgreCcaYWnA",
  },
];

// Retain general PROJECTS for legacy slug routing & fallback
export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "watch-commercial",
    title: "Watch Commercial",
    category: "COMMERCIAL",
    categoryLabel: "COMMERCIAL",
    subtitle: "Product Film · 2026",
    year: "2026",
    thumbnailUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "EngW7tLk6R8",
    description: "Cinematic product advertisement emphasizing micro-details, precision mechanics, and sleek lighting transitions.",
    client: "Chronos Haute Horlogerie",
    duration: "0:28",
    tools: ["DaVinci Resolve", "Adobe Premiere Pro"],
    role: "Lead Editor & Colorist"
  },
  {
    id: "2",
    slug: "travel-reel",
    title: "Travel Reel",
    category: "CINEMATIC",
    categoryLabel: "CINEMATIC",
    subtitle: "Cinematic Edit · 2026",
    year: "2026",
    thumbnailUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "ScMzIvxBSi4",
    description: "An evocative visual journey through high-altitude alpine passes.",
    client: "Wanderlust Expedition Co.",
    duration: "0:32",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve"],
    role: "Editor, Sound Designer & Colorist"
  },
  {
    id: "3",
    slug: "creator-edit",
    title: "Creator Edit",
    category: "YOUTUBE",
    categoryLabel: "YOUTUBE",
    subtitle: "Social Media · 2025",
    year: "2025",
    thumbnailUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "dQw4w9WgXcQ",
    description: "High-retention storytelling for a tech and creative entrepreneur series.",
    client: "Creator Studio Tech",
    duration: "0:41",
    tools: ["Adobe Premiere Pro", "Photoshop"],
    role: "Lead Video Editor"
  },
  {
    id: "4",
    slug: "fitness-lifestyle",
    title: "Fitness Lifestyle",
    category: "SOCIAL MEDIA",
    categoryLabel: "SOCIAL MEDIA",
    subtitle: "Short-form Edit · 2025",
    year: "2025",
    thumbnailUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    youtubeId: "kJQP7kiw5Fk",
    description: "Fast-paced dynamic short-form fitness campaign synchronized to heavy rhythmic bass.",
    client: "Aura Athletics",
    duration: "0:29",
    tools: ["Adobe Premiere Pro"],
    role: "Short-form Content Editor"
  }
];

export const SERVICES: Service[] = [
  {
    id: "video-editing",
    iconName: "film",
    title: "Video Editing",
    description: "Long-form videos, YouTube and storytelling.",
    bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "short-form",
    iconName: "smartphone",
    title: "Short-form Content",
    description: "Reels, Shorts and social media content.",
    bgImage: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "color-grading",
    iconName: "palette",
    title: "Color Grading",
    description: "Cinematic looks and visual consistency.",
    bgImage: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "voice-over",
    iconName: "mic",
    title: "Voice Over",
    description: "Clear narration, expressive tone and audio presence.",
    bgImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
  }
];

export const ABOUT_DATA = {
  quoteMain: "Good editing is invisible.",
  quoteHighlight: "Great editing is unforgettable.",
  description: "I'm a video editor focused on storytelling, pacing and visual impact. I love transforming raw footage into videos that feel cinematic, engaging and meaningful.",
  portraitUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
  skills: [
    "Storytelling & Pacing",
    "Cut & Flow",
    "Sound Design",
    "Color Grading",
    "Voice Over"
  ],
  tools: [
    { name: "Adobe Premiere Pro", abbr: "Pr", color: "#00005b", text: "#9999ff" },
    { name: "Adobe After Effects", abbr: "Ae", color: "#00005b", text: "#d291ff" },
    { name: "DaVinci Resolve", abbr: "Dr", isCustom: true },
    { name: "Adobe Photoshop", abbr: "Ps", color: "#001e36", text: "#31a8ff" },
  ]
};

export const socialLinks = {
  youtube: "https://youtube.com/@yunib.a",
  instagram: "https://www.instagram.com/yunibashraf_/",
  linkedin: "https://www.linkedin.com/in/yunibashraf",
  whatsapp: "https://wa.me/917417775116",
};

export const CONTACT_DATA = {
  label: "HAVE A PROJECT IN MIND?",
  headline: "LET’S MAKE SOMETHING GREAT.",
  ctaText: "Get In Touch",
  email: "yunibashraf2581@gmail.com",
  bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800&auto=format&fit=crop",
  socials: socialLinks,
};
