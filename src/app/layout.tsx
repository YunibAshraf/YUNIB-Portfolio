import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yunib Ashraf — Video Editor & Visual Storyteller",
  description: "A video editor passionate about storytelling, visual rhythm and creating engaging content that connects with audiences.",
  keywords: ["Video Editor", "Visual Storyteller", "Showreel", "Cinematic", "Commercial Editing", "Color Grading", "Yunib Ashraf"],
  openGraph: {
    title: "Yunib Ashraf — Video Editor & Visual Storyteller",
    description: "I turn ideas into visual stories. End-to-end video editing services to bring your vision to life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F5F4F0] text-[#111111] font-sans antialiased selection:bg-[#941D27] selection:text-white">
        {children}
      </body>
    </html>
  );
}
