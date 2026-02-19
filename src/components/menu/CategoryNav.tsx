"use client";
import { useEffect, useRef } from 'react';
import CategoryItem from '@/components/CategoryItem';

interface Props {
    categories: any[];
    activeCategory: string;
    onCategoryClick: (id: string) => void;
}

export default function CategoryNav({ categories, activeCategory, onCategoryClick }: Props) {
    // Referenz für den Container, der gescrollt werden soll
    const navRef = useRef<HTMLDivElement>(null);

    // DIESER EFFEKT SORGT FÜR DAS AUTOMATISCHE SCROLLEN
    useEffect(() => {
        if (navRef.current) {
            // Wir suchen das Element mit dem Attribut data-category="Name"
            // Anführungszeichen sind wichtig, falls Kategorien Leerzeichen haben (z.B. "Soft Drinks")
            const activeElement = navRef.current.querySelector(`[data-category="${activeCategory}"]`);

            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth', // Weiches Scrollen
                    block: 'nearest',   // Vertikal: Nichts tun
                    inline: 'center'    // Horizontal: In die Mitte schieben
                });
            }
        }
    }, [activeCategory]); // Feuert jedes Mal, wenn sich die aktive Kategorie ändert

    return (
        <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-[HEADER_HEIGHT] z-40">
            <div
                ref={navRef}
                className="max-w-5xl mx-auto flex justify-start md:justify-center overflow-x-auto no-scrollbar py-2 px-4 gap-1 scroll-smooth"
            >
                {categories.map((cat) => {
                    const name = typeof cat === 'string' ? cat : cat.name;
                    const image = typeof cat === 'string' ? undefined : cat.image;

                    return (
                        <div
                            key={name}
                            data-category={name} // WICHTIG: Dies wird vom useEffect gesucht
                            className="flex-shrink-0"
                        >
                            <CategoryItem
                                name={name}
                                isActive={activeCategory === name}
                                onClick={() => onCategoryClick(name)}
                            />
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}