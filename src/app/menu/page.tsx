import type { Metadata } from "next";
import HomeNavbar from "@/components/home/HomeNavbar";
import MainFooter from "@/components/layout/MainFooter";
import StoreInfoBar from "@/components/layout/StoreInfoBar";
import CategoryNavContainer from "@/components/menu/CategoryNavContainer"; // Neuer Client-Wrapper
import MenuHero from "@/components/menu/MenuHero";
import MenuSection from "@/components/menu/MenuSection";
import { dataService } from "@/services/dataService";
import { categories as staticCategories } from "@/lib/constants/categories";
import { products as staticProducts } from "@/lib/constants/products";

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

export default async function MenuPage() {
  let dynamicCategories = null;
  let dynamicProducts = null;
  let settings = null;
  let openingHours = null;
  let extras = null;

  try {
    const [cats, prods, sets, hours, ex] = await Promise.all([
      dataService.getCategories(),
      dataService.getProducts(),
      dataService.getSettings(),
      dataService.getOpeningHours(),
      dataService.getExtras(),
    ]);
    dynamicCategories = cats;
    dynamicProducts = prods;
    settings = sets;
    openingHours = hours;
    extras = ex;
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  const finalCategories = dynamicCategories || staticCategories;
  const finalProducts = dynamicProducts || staticProducts;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <header className="fixed top-0 w-full z-50 flex flex-col">
        {/* StoreInfoBar wird intern zur Client-Insel für den Status */}
        <StoreInfoBar settings={settings} openingHours={openingHours} />
        <HomeNavbar settings={settings} />
        {/* Diese Komponente übernimmt jetzt die Client-Logik für ScrollSpy */}
        <CategoryNavContainer categories={finalCategories} />
      </header>

      <div className="pt-52 pb-32">
        <MenuHero />
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse gap-12">
          {finalCategories.map((cat: any) => (
            <MenuSection
              key={typeof cat === "string" ? cat : (cat.id || cat.name)}
              category={cat}
              allProducts={finalProducts}
              extras={extras}
            />
          ))}
        </div>
      </div>
      <MainFooter settings={settings} openingHours={openingHours} />
    </main>
  );
}
