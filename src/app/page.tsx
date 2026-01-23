"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { categories } from '@/lib/categories';
import { products } from "@/lib/products";
import FeaturedProductCard from "@/components/FeaturedProductCard";

export default function Home() {
    const [currentTimeInfo, setCurrentTimeInfo] = useState({
        status: "Lade...",
        color: "bg-gray-500",
        timeRange: "11:30 — 22:00"
    });

    const bestSellers = products.filter(p => p.isBestSeller);

    // Live-Status Logik
    useEffect(() => {
        const updateStatus = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();
            const min = now.getMinutes();
            const currentTime = hour + min / 60;

            let open = 11.5;
            let close = 22;

            if (day === 5 || day === 6) close = 23;
            if (day === 0) { open = 12; close = 21; }

            const timeString = `${open === 11.5 ? "11:30" : "12:00"} — ${close}:00 Uhr`;

            if (currentTime >= open && currentTime < close) {
                setCurrentTimeInfo({
                    status: "Jetzt Geöffnet",
                    color: "bg-green-500",
                    timeRange: timeString
                });
            } else {
                setCurrentTimeInfo({
                    status: "Geschlossen",
                    color: "bg-red-500",
                    timeRange: timeString
                });
            }
        };

        updateStatus();
        const interval = setInterval(updateStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative min-h-screen bg-[#0b1218] text-white font-sans overflow-x-hidden selection:bg-yellow-500 selection:text-black">

            {/* FIXIERTER HEADER-BLOCK (Bar + Nav) */}
            <header className="fixed top-0 w-full z-50">
                {/* 1. TOP-BAR: ÖFFNUNGSZEITEN (Bleibt immer oben) */}
                <div className="w-full bg-yellow-500 py-1.5 px-8 flex justify-center md:justify-between items-center border-b border-black/5">
                    <div className="hidden md:flex items-center gap-4">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black">
                            📍 Holm 123, 24937 Flensburg
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-black/10 px-2 py-0.5 rounded-full">
                            <span className={`w-1.5 h-1.5 rounded-full ${currentTimeInfo.color} animate-pulse`}></span>
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black italic">
                                {currentTimeInfo.status}
                            </span>
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black">
                            {currentTimeInfo.timeRange}
                        </span>
                    </div>
                </div>

                {/* 2. NAVIGATION (Unter der Top-Bar) */}
                <nav className="w-full flex justify-between items-center px-8 py-5 bg-[#0b1218]/80 backdrop-blur-md border-b border-white/5">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_15px_#eab308]" />
                            <h1 className="text-2xl font-black tracking-tighter italic uppercase">
                                POINT<span className="text-yellow-500">PIZZA</span>
                            </h1>
                        </div>
                        <span className="text-[10px] text-gray-400 tracking-[0.4em] uppercase pl-5">Flensburg</span>
                    </div>

                    <div className="hidden md:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.3em]">
                        <Link href="/menu" className="hover:text-yellow-500 transition-all">Speisekarte</Link>
                        <a href="#about" className="hover:text-yellow-500 transition-all">Story</a>
                        <Link href="/menu" className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-white transition-all shadow-lg font-black uppercase">
                            Bestellen
                        </Link>
                    </div>
                </nav>
            </header>

            {/* FIXIERTER HINTERGRUND */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b1218]/90 via-[#0b1218]/40 to-[#0b1218] z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070"
                    alt="POINTPIZZA Flensburg Hintergrund"
                    fill
                    className="object-cover object-center opacity-40 scale-105"
                    priority
                />
            </div>

            {/* HERO CONTENT (Padding-Top um Platz für fixed Header zu schaffen) */}
            <section className="relative h-screen flex items-center justify-center text-center px-4 z-20 pt-20">
                <div className="space-y-8">
                    <div className="inline-block px-4 py-1 border border-yellow-500 rounded-full bg-yellow-500/10 backdrop-blur-md">
                        <span className="text-yellow-500 text-[10px] font-bold tracking-[0.5em] uppercase">Premium Quality </span>
                    </div>

                    <h2 className="text-7xl md:text-9xl font-serif leading-[0.85] drop-shadow-2xl">
                        Goldener <br />
                        <span className="text-yellow-500 italic font-light">Genuss</span>
                    </h2>

                    <p className="max-w-xl mx-auto text-gray-200 text-lg font-light drop-shadow-md">
                        Die beste Pizza der Stadt. Frische Zutaten, 72h Teigruhe und echte Leidenschaft direkt an der Flensburger Förde.
                    </p>

                    <div className="pt-6">
                        <Link href="/menu" className="bg-yellow-500 text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl active:scale-95 text-sm">
                            Menü ansehen
                        </Link>
                    </div>
                </div>
            </section>

            {/* KATEGORIEN SEKTION */}
            <section className="relative z-20 py-24 bg-[#0b1218]/80 backdrop-blur-md border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
                        {categories.map((cat) => (
                            <Link key={cat.name} href={`/menu#${cat.name}`} className="group flex flex-col items-center gap-4">
                                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-yellow-500 transition-all duration-500 shadow-2xl p-1 bg-black">
                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                        <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors">
                                    {cat.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS SECTION */}
            <section className="py-32 max-w-7xl mx-auto px-6 relative z-20">
                <div className="flex flex-col items-center mb-20 text-center">
                    <h3 className="text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">Selection</h3>
                    <h2 className="text-6xl font-serif italic text-white leading-tight">I Nostri Hits</h2>
                    <div className="w-12 h-[1px] bg-yellow-500 mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {bestSellers.map((product) => (
                        <FeaturedProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* FOOTER SECTION */}
            <footer id="about" className="relative z-20 bg-black pt-24 pb-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                    <div className="space-y-6">
                        <h4 className="text-2xl font-black italic tracking-tighter uppercase">
                            POINT<span className="text-yellow-500">PIZZA</span>
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
                            Der Gold-Standard für Pizza in Flensburg. Traditionelles Handwerk trifft auf modernes Design.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Kontakt</h5>
                        <ul className="space-y-4 text-sm text-gray-400 font-light">
                            <li className="flex flex-col">
                                <span className="text-white font-bold">Holm 123</span>
                                <span>24937 Flensburg</span>
                            </li>
                            <li>Tel: +49 461 123 456 78</li>
                            <li>Mail: moin@pointpizza.de</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Öffnungszeiten</h5>
                        <ul className="space-y-3 text-sm text-gray-400 font-light text-[11px]">
                            <li className="flex justify-between border-b border-white/5 pb-1">
                                <span>Mo - Do:</span> <span className="text-white">11:30 - 22:00</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-1 font-bold">
                                <span className="text-yellow-500">Fr - Sa:</span> <span className="text-white">11:30 - 23:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>So:</span> <span className="text-white">12:00 - 21:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/5 flex justify-between items-center text-[9px] text-gray-600 uppercase tracking-widest">
                    <p>© 2026 POINTPIZZA FLENSBURG.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-yellow-500">Impressum</a>
                        <a href="#" className="hover:text-white">Datenschutz</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}