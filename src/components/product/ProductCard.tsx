"use client";
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { categories } from '@/lib/constants/categories'; // Dein Array mit doughs/toppings
import PriceSizeSelector from './PriceSizeSelector';
import CustomizationModal from './CustomizationModal';

export default function ProductCard({ product }: { product: Product }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 1. Finde die Kategorie-Daten für dieses Produkt
    const categoryData = useMemo(() =>
        categories.find(cat => cat.name === product.category),
        [product.category]
    );

    // 2. States initialisieren
    const [selectedSize, setSelectedSize] = useState<{ size: string; price: number } | null>(null);
    const [selectedDough, setSelectedDough] = useState(categoryData?.doughs?.[0] || null);
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    const handleOpen = (size: string, price: number) => {
        setSelectedSize({ size, price });
        // Falls wir die Kategorie wechseln, Reset auf Standard-Teig der neuen Kategorie
        setSelectedDough(categoryData?.doughs?.[0] || null);
        setSelectedExtras([]);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    // 3. Dynamische Berechnung basierend auf categoryData
    const calculateTotal = () => {
        const base = selectedSize?.price || 0;
        const doughPrice = selectedDough?.price || 0;
        const extrasPrice = selectedExtras.reduce((sum, name) => {
            const extra = categoryData?.toppings?.find(t => t.name === name);
            console.log(extra)
            return sum + (extra?.price || 0);
        }, 0);
        return (base + doughPrice + extrasPrice).toFixed(2);
    };

    return (
        <div className="bg-surface border border-border rounded-2xl overflow-hidden mb-8 flex flex-col md:flex-row shadow-2xl transition-transform hover:scale-[1.01]">
            {/* Bild-Bereich */}
            <div className="relative w-full md:w-1/3 h-64 md:h-80">
                <Image
                    src={product.imageUrl}
                    alt={`Produktbild von ${product.imageAlt}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                />
            </div>

            {/* Info-Bereich */}
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2 italic">
                        {product.name}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                        {product.description}
                    </p>
                </div>

                <PriceSizeSelector prices={product.prices} onSelect={handleOpen} />
            </div>

            {/* Modal - Erhält nun categoryData als Prop für dynamische Felder */}
            {isModalOpen && selectedSize && (
                <CustomizationModal
                    productName={product.name}
                    productPrices={product.prices}
                    categoryData={categoryData} // Übergebe die kompletten Kategorie-Optionen
                    selectedSize={selectedSize}
                    selectedDough={selectedDough}
                    selectedExtras={selectedExtras}
                    total={calculateTotal()}
                    onClose={handleClose}
                    onSetSize={(size, price) => setSelectedSize({ size, price })}
                    onSetDough={setSelectedDough}
                    onToggleExtra={(name) => setSelectedExtras(prev =>
                        prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
                    )}
                />
            )}
        </div>
    );
}