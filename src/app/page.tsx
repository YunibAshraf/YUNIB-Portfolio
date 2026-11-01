import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] flex flex-col selection:bg-[#941D27] selection:text-white">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <ContactCTA />
      <Footer />
    </main>
  );
}
