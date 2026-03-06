import type { Metadata } from "next";
import BackgroundFixed from "@/components/home/BackgroundFixed";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroContent from "@/components/home/HeroContent";
import HomeNavbar from "@/components/home/HomeNavbar";
import StorySection from "@/components/home/StorySection";
import MainFooter from "@/components/layout/MainFooter";
import StoreInfoBar from "@/components/layout/StoreInfoBar";

import { products } from "@/lib/constants/products";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.point-pizza-flensburg.de/",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <header className="fixed top-0 w-full z-50">
        <StoreInfoBar />
        <HomeNavbar />
      </header>
      <BackgroundFixed />
      <HeroContent />
      <StorySection />
      <FeaturedSection products={products} />
      <MainFooter />
    </main>
  );
}
