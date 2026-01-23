"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

const TOPPINGS = [
    { name: 'Extra Käse', price: 1.50 },
    { name: 'Salami', price: 2.00 },
    { name: 'Champignons', price: 1.00 },
    { name: 'Zwiebeln', price: 0.50 },
    { name: 'Knoblauchöl', price: 0.00 },
];

const DOUGHS = [
    { name: 'Klassik (Weizen)', price: 0.00 },
    { name: 'Vollkorn', price: 1.50 },
    { name: 'Dinkel', price: 1.50 },
];

export default function ProductCard({ product }: { product: Product }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState<{ size: string, price: number } | null>(null);
    const [selectedDough, setSelectedDough] = useState(DOUGHS[0]);
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

    const openCustomization = (size: string, price: number) => {
        setSelectedSize({ size, price });
        setSelectedDough(DOUGHS[0]);
        setSelectedExtras([]);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const calculateTotal = () => {
        const basePrice = selectedSize?.price || 0;
        const doughExtra = selectedDough.price;
        const extrasPrice = selectedExtras.reduce((sum, name) => {
            const topping = TOPPINGS.find(t => t.name === name);
            return sum + (topping?.price || 0);
        }, 0);
        return (basePrice + doughExtra + extrasPrice).toFixed(2);
    };

    return (
        <div className="bg-[#1a2228] border border-white/5 rounded-2xl overflow-hidden mb-8 flex flex-col md:flex-row shadow-2xl">
            {/* Produkt Anzeige */}
            <div className="relative w-full md:w-1/3 h-64 md:h-80 overflow-hidden">
                <Image src={product.imageUrl} alt={product.imageAlt} fill className="object-cover" />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-serif font-bold text-yellow-500 mb-2 italic">{product.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{product.description}</p>
                </div>

                <div className="flex gap-2">
                    {Object.entries(product.prices).map(([size, price]) => (
                        <button
                            key={size}
                            onClick={() => openCustomization(size, price as number)}
                            className="flex-1 bg-white/5 p-3 rounded-lg text-center border border-white/10 hover:border-yellow-500/50 transition-all"
                        >
                            <span className="block text-[10px] text-gray-500 uppercase">Größe {size}</span>
                            <span className="text-white font-bold">{(price as number).toFixed(2)} €</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Das Bottom-Sheet Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm">
                    <div className="absolute inset-0" onClick={closeModal}></div>

                    <div className="relative w-full max-w-lg bg-[#0b1218] h-auto max-h-[90vh] rounded-t-[2rem] border-t border-white/10 shadow-2xl flex flex-col animate-slide-up overflow-hidden">

                        <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mt-3 mb-1"></div>

                        {/* Modal Header */}
                        <div className="px-6 py-4 flex justify-between items-center border-b border-white/5 bg-[#0b1218] z-10">
                            <div>
                                <h4 className="text-xl font-serif italic text-white leading-tight">{product.name} anpassen</h4>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest uppercase">Konfiguration</p>
                            </div>
                            <button onClick={closeModal} className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/10">✕</button>
                        </div>

                        {/* Scrollbarer Inhalt */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8">

                            {/* SEKTION 1: GRÖSSE ÄNDERN */}
                            <div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">Größe wählen:</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.entries(product.prices).map(([size, price]) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize({ size, price: price as number })}
                                            className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                                                selectedSize?.size === size
                                                    ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
                                                    : 'border-white/5 bg-white/5 text-gray-400'
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* SEKTION 2: TEIG WÄHLEN */}
                            <div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">Teigart wählen:</p>
                                <div className="flex flex-col gap-2">
                                    {DOUGHS.map((dough) => (
                                        <button
                                            key={dough.name}
                                            onClick={() => setSelectedDough(dough)}
                                            className={`flex justify-between items-center px-4 py-3 rounded-xl border transition-all ${
                                                selectedDough.name === dough.name
                                                    ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
                                                    : 'border-white/5 bg-white/5 text-gray-400'
                                            }`}
                                        >
                                            <span className="text-sm">{dough.name}</span>
                                            <span className="text-[10px]">{dough.price > 0 ? `+${dough.price.toFixed(2)} €` : 'Inklusive'}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* SEKTION 3: EXTRAS */}
                            <div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-4">Extras hinzufügen:</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {TOPPINGS.map((topping) => (
                                        <button
                                            key={topping.name}
                                            onClick={() => {
                                                setSelectedExtras(prev =>
                                                    prev.includes(topping.name) ? prev.filter(i => i !== topping.name) : [...prev, topping.name]
                                                );
                                            }}
                                            className={`flex justify-between items-center px-4 py-3 rounded-xl border transition-all ${
                                                selectedExtras.includes(topping.name)
                                                    ? 'border-yellow-500/50 bg-yellow-500/5 text-yellow-500'
                                                    : 'border-white/5 bg-white/5 text-gray-400'
                                            }`}
                                        >
                                            <span className="text-sm font-medium">{topping.name}</span>
                                            <span className="text-xs text-gray-500">+{topping.price.toFixed(2)} €</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-[#161d23] border-t border-white/10 rounded-t-2xl flex items-center justify-between gap-4">
                            <div className="text-left">
                                <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Gesamtbetrag</p>
                                <p className="text-2xl font-bold text-white leading-none">{calculateTotal()} €</p>
                            </div>

                            <div className="flex-1 max-w-[200px]">
                                <button disabled className="w-full py-3 bg-white/5 border border-white/10 text-gray-500 rounded-xl text-xs font-bold cursor-not-allowed italic">
                                    Bald verfügbar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}