import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/SEO/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: 'PointPizza Flensburg | Goldener Genuss - Beste Pizza & Pasta',
    description: 'Erlebe den Gold-Standard der Pizza in Flensburg. Frische Zutaten, 72h Teigruhe und hausgemachte Smoothies am Holm 123. Jetzt Speisekarte ansehen!',
    keywords: ['Pizza Flensburg', 'Pasta Flensburg', 'PointPizza', 'Lieferservice Flensburg', 'Essen gehen Flensburg'],
    openGraph: {
        title: 'PointPizza Flensburg',
        description: 'Die beste Pizza der Stadt direkt an der Förde.',
        url: 'https://pointpizza.de',
        siteName: 'PointPizza',
        images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
        locale: 'de_DE',
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
        <body className="antialiased">
            <JsonLd />
        {children}
        </body>
        </html>
    );
}