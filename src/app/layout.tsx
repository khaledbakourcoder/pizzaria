import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Cucina D'Oro | Moderne Pizzeria Berlin",
    description: "Authentische neapolitanische Pizza in Berlin. Entdecken Sie unsere moderne Speisekarte und reservieren Sie online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
        <body className="antialiased">{children}</body>
        </html>
    );
}