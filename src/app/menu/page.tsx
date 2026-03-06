import type { Metadata } from "next";
import HomeNavbar from "@/components/home/HomeNavbar";
import MainFooter from "@/components/layout/MainFooter";
import StoreInfoBar from "@/components/layout/StoreInfoBar";
import CategoryNavContainer from "@/components/menu/CategoryNavContainer"; // Neuer Client-Wrapper
import MenuHero from "@/components/menu/MenuHero";
import MenuSection from "@/components/menu/MenuSection";
import { categories } from "@/lib/constants/categories";
import { products } from "@/lib/constants/products";
export const metadata: Metadata = {
  title: "Speisekarte | PointPizza Flensburg",
  description:
    "Entdecke unsere große Auswahl an handgemachten Pizzen und hausgemachten Smoothies. Frische Zutaten und echte Handarbeit.",
  alternates: {
    canonical: "https://www.point-pizza-flensburg.de/menu",
  },
  openGraph: {
    title: "Speisekarte | PointPizza Flensburg",
    description:
      "Entdecke unsere große Auswahl an handgemachten Pizzen und hausgemachten Smoothies.",
    url: "https://www.point-pizza-flensburg.de/menu",
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 flex flex-col">
        {/* StoreInfoBar wird intern zur Client-Insel für den Status */}
        <StoreInfoBar />
        <HomeNavbar />
        {/* Diese Komponente übernimmt jetzt die Client-Logik für ScrollSpy */}
        <CategoryNavContainer categories={categories} />
      </header>

      <div className="pt-52 pb-32">
        <MenuHero />
        <div className="max-w-7xl mx-auto px-6">
          {categories.map((cat) => (
            <MenuSection
              key={typeof cat === "string" ? cat : cat.name}
              category={cat}
              allProducts={products}
            />
          ))}
        </div>
      </div>
      <MainFooter />
    </main>
  );
}
