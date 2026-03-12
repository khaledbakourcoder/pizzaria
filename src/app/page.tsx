import type { Metadata } from "next";
import BackgroundFixed from "@/components/home/BackgroundFixed";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroContent from "@/components/home/HeroContent";
import HomeNavbar from "@/components/home/HomeNavbar";
import StorySection from "@/components/home/StorySection";
import MainFooter from "@/components/layout/MainFooter";
import StoreInfoBar from "@/components/layout/StoreInfoBar";
import DeliveryInfo from "@/components/home/DeliveryInfo";

import { dataService } from "@/services/dataService";
import { products as staticProducts } from "@/lib/constants/products";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.point-pizza-flensburg.de/",
  },
};

export default async function Home() {
  // Fetch dynamic data on the server for best SEO/Performance
  let dynamicHero = null;
  let storySections: any[] = [];
  let dynamicProducts = null;
  let settings = null;
  let openingHours = null;
  let deliveryZones: any[] = [];

  try {
    const [hero, sections, prods, sets, hours, zones] = await Promise.all([
      dataService.getHeroContent(),
      dataService.getStorySections(),
      dataService.getProducts(),
      dataService.getSettings(),
      dataService.getOpeningHours(),
      dataService.getDeliveryZones()
    ]);
    dynamicHero = hero;
    storySections = sections;
    dynamicProducts = prods;
    settings = sets;
    openingHours = hours;
    deliveryZones = zones;
  } catch (error) {
    console.error("Error fetching dynamic data:", error);
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <header className="absolute top-0 left-0 right-0 z-[100]">
        <HomeNavbar settings={settings} />
      </header>
      <BackgroundFixed heroImageUrl={settings?.hero_image_url} />
      <HeroContent content={dynamicHero} />
      {storySections.length > 0 ? (
        storySections.map((section) => (
          <StorySection key={section.id} section={section} />
        ))
      ) : (
        <StorySection section={null} />
      )}
      <FeaturedSection products={dynamicProducts || staticProducts} />
      <DeliveryInfo zones={deliveryZones} />
      <MainFooter settings={settings} openingHours={openingHours} />
    </main>
  );
}
