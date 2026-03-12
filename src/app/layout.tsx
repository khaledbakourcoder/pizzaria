import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLd from "@/components/SEO/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await dataService.getSettings().catch(() => null) as any;
  const name = settings?.restaurant_name || "PointPizza Flensburg";
  const slogan = settings?.slogan || "Goldener Genuss - Beste Pizza & Pasta";
  const description = settings?.store_info_text || "Erlebe den Gold-Standard der Pizza & Pasta in Flensburg. Frische Zutaten, 72h Teigruhe und echte Leidenschaft.";

  return {
    metadataBase: new URL("https://www.point-pizza-flensburg.de/"),
    verification: {
      google: "goZiAjtqBySq-rR3ndQ2Y2MEop1rvHo3v9VCMwxHPAE",
    },
    title: `${name} | ${slogan}`,
    description: description,
    alternates: {
      canonical: "/",
    },
    keywords: [
      name,
      "PointPizza Flensburg",
      "Pizza Flensburg",
      "Pasta Flensburg",
      "Lieferservice Flensburg",
      "Essen gehen Flensburg",
    ],
    openGraph: {
      title: `${name} | Goldener Genuss`,
      description: description,
      url: "https://www.point-pizza-flensburg.de/",
      siteName: name,
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: `${name} - Goldener Genuss`,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description: description,
      images: ["/og-image.webp"],
    },
  };
}

import { Providers } from "@/components/Providers";
import { dataService } from "@/services/dataService";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let settings = null;
  let openingHours = null;

  try {
    const [sets, hours] = await Promise.all([
      dataService.getSettings(),
      dataService.getOpeningHours(),
    ]);
    settings = sets;
    openingHours = hours;
  } catch (error) {
    console.error("Error fetching layout data:", error);
  }

  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <JsonLd settings={settings} openingHours={openingHours} />
        <Providers settings={settings}>{children}</Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
