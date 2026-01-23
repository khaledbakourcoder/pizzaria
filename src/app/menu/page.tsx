"use client";
import { useState, useEffect, useRef } from 'react';
import { categories } from '@/lib/categories';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import CategoryItem from '@/components/CategoryItem';
import Link from 'next/link';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(
        typeof categories[0] === 'string' ? categories[0] : categories[0].name
    );

    const [currentTimeInfo, setCurrentTimeInfo] = useState({
        status: "Lade...",
        color: "bg-gray-500",
        timeRange: "11:30 — 22:00"
    });

    const isScrollingRef = useRef(false);
    const navRef = useRef<HTMLDivElement>(null);

    // Automatisches Mitscrollen der Navbar
    useEffect(() => {
        if (navRef.current) {
            const activeElement = navRef.current.querySelector(`[data-category="${activeCategory}"]`);
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeCategory]);

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
                setCurrentTimeInfo({ status: "Jetzt Geöffnet", color: "bg-green-500", timeRange: timeString });
            } else {
                setCurrentTimeInfo({ status: "Geschlossen", color: "bg-red-500", timeRange: timeString });
            }
        };
        updateStatus();
        const interval = setInterval(updateStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    // Scroll-Spy Logik
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-220px 0px -70% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (isScrollingRef.current) return;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveCategory(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        categories.forEach((cat) => {
            const name = typeof cat === 'string' ? cat : cat.name;
            const element = document.getElementById(name);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToCategory = (id: string) => {
        isScrollingRef.current = true;
        setActiveCategory(id);

        const element = document.getElementById(id);
        if (element) {
            const offset = 210;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
            setTimeout(() => { isScrollingRef.current = false; }, 800);
        }
    };

    return (
        <main className="min-h-screen bg-[#0b1218] text-white selection:bg-yellow-500 selection:text-black">

            <header className="fixed top-0 w-full z-50">
                {/* 1. TOP-BAR: ÖFFNUNGSZEITEN */}
                <div className="w-full bg-yellow-500 py-1.5 px-8 flex justify-center md:justify-between items-center border-b border-black/5">
                    <div className="hidden md:flex items-center gap-4 text-black">
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">📍 Holm 123, Flensburg</span>
                    </div>
                    <div className="flex items-center gap-3 text-black">
                        <div className="flex items-center gap-2 bg-black/10 px-2 py-0.5 rounded-full font-black text-[9px] uppercase tracking-widest">
                            <span className={`w-1.5 h-1.5 rounded-full ${currentTimeInfo.color} animate-pulse`}></span>
                            {currentTimeInfo.status}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Heute: {currentTimeInfo.timeRange}</span>
                    </div>
                </div>

                {/* 2. BRANDING BAR: POINTPIZZA FLENSBURG */}
                <div className="bg-[#0b1218] py-5 px-8 flex justify-center border-b border-white/5">
                    <Link href="/" className="flex flex-col items-center group transition-transform active:scale-95">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_12px_#eab308]" />
                            <h1 className="text-2xl font-black tracking-tighter italic uppercase">
                                POINT<span className="text-yellow-500">PIZZA</span>
                            </h1>
                        </div>
                        <span className="text-[9px] text-gray-500 tracking-[0.6em] uppercase mt-0.5">Flensburg</span>
                    </Link>
                </div>

                {/* 3. NAVIGATION (KATEGORIEN) */}
                <nav className="bg-[#0b1218]/95 backdrop-blur-md border-b border-white/5">
                    <div ref={navRef} className="max-w-5xl mx-auto flex justify-start md:justify-center overflow-x-auto scrollbar-hide py-2 px-4 gap-1">
                        {categories.map((cat) => {
                            const name = typeof cat === 'string' ? cat : cat.name;
                            const image = typeof cat === 'string' ? undefined : cat.image;
                            return (
                                <div key={name} data-category={name} className="flex-shrink-0">
                                    <CategoryItem
                                        name={name}
                                        image={image}
                                        isActive={activeCategory === name}
                                        onClick={() => scrollToCategory(name)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </nav>
            </header>

            {/* MAIN CONTENT */}
            <div className="pt-52 pb-32">
                {/* Titel-Sektion */}
                <div className="pb-16 text-center">
                    <span className="text-yellow-500 text-[10px] font-black tracking-[0.5em] uppercase mb-3 block">Premium Selection</span>
                    <h1 className="text-6xl md:text-7xl font-serif italic mb-2 tracking-tight">La Carta</h1>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mx-auto mt-6"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6">
                    {categories.map((cat) => {
                        const name = typeof cat === 'string' ? cat : cat.name;
                        const categoryProducts = products.filter(p => p.category === name);

                        if (categoryProducts.length === 0) return null;

                        return (
                            <section key={name} id={name} className="mb-24 scroll-mt-52">
                                {/* Elegante Trennlinie für Kategorien */}
                                <div className="flex items-center gap-6 mb-12">
                                    <h2 className="text-3xl font-serif italic text-yellow-500 whitespace-nowrap">
                                        {name}
                                    </h2>
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-yellow-500/20 to-transparent" />
                                </div>

                                <div className="grid grid-cols-1 gap-10">
                                    {categoryProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            {/* Dezenter Footer-Hinweis */}
            <footer className="pb-20 text-center opacity-30">
                <p className="text-[10px] uppercase tracking-[0.3em]">PointPizza Flensburg • Holm 123</p>
            </footer>
        </main>
    );
}