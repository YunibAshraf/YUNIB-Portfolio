export interface ReelProject {
  id: string;
  slug: string;
  title: string;
  videoSrc: string;
  aspectRatio: "9:16" | "16:9";
  category?: string;
  duration?: string;
  thumbnailUrl?: string;
  driveUrl?: string;
  youtubeId?: string;
}

export interface YouTubeProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string;
  thumbnailUrl: string;
  youtubeId: string;
  description?: string;
  client?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'COMMERCIAL' | 'CINEMATIC' | 'YOUTUBE' | 'SOCIAL MEDIA' | 'ALL';
  categoryLabel: string;
  subtitle: string;
  year: string;
  thumbnailUrl: string;
  youtubeId: string;
  description: string;
  client?: string;
  duration?: string;
  tools?: string[];
  role?: string;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  bgImage?: string;
}

export interface Stat {
  value: string;
  label: string;
}
