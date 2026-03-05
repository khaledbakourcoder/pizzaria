import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLd from "@/components/SEO/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.point-pizza-flensburg.de/"),
  verification: {
    google: "goZiAjtqBySq-rR3ndQ2Y2MEop1rvHo3v9VCMwxHPAE",
  },
  title: "PointPizza Flensburg | Goldener Genuss - Beste Pizza & Pasta",
  description:
    "Erlebe den Gold-Standard der Pizza in Flensburg. Frische Zutaten, 72h Teigruhe und hausgemachte Smoothies am Holm 123. Jetzt Speisekarte ansehen!",
  keywords: [
    "Point Pizza Flensburg",
    "PointPizza Flensburg",
    "Pizza Flensburg",
    "Pasta Flensburg",
    "PointPizza",
    "Lieferservice Flensburg",
    "Essen gehen Flensburg",
  ],
  openGraph: {
    title: "PointPizza Flensburg | Goldener Genuss",
    description:
      "Die beste Pizza der Stadt direkt an der Förde. Frische Zutaten, 72h Teigruhe und echte Leidenschaft.",
    url: "https://www.point-pizza-flensburg.de/",
    siteName: "PointPizza",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "PointPizza Flensburg - Goldener Genuss",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PointPizza Flensburg",
    description: "Die beste Pizza der Stadt direkt an der Förde.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>

      <body className="antialiased">
        <JsonLd />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
