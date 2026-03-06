"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import CustomizationModal from "./CustomizationModal";
import { useCart } from "@/lib/context/CartContext";

export default function DrinkListItem({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState<{
        size: string;
        price: number;
    } | null>(null);

    // Get the first size/price to display as default
    const pricesArray = Object.entries(product.prices);
    const firstSize = pricesArray[0][0];
    const firstPrice = pricesArray[0][1];
    const hasMultipleSizes = pricesArray.length > 1;

    const handleAction = () => {
        if (hasMultipleSizes) {
            setSelectedSize({ size: firstSize, price: firstPrice });
            setIsModalOpen(true);
            document.body.style.overflow = "hidden";
        } else {
            addToCart({
                name: product.name,
                size: firstSize,
                dough: "N/A",
                extras: [],
                price: firstPrice,
            });
        }
    };

    const handleClose = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "unset";
    };

    const calculateTotal = () => {
        return (selectedSize?.price || 0).toFixed(2);
    };

    return (
        <>
            <div className="flex items-center justify-between py-4 border-b border-white/5 hover:border-primary/30 transition-colors group gap-4">
                <div className="flex-1 pr-2 truncate">
                    <h3 className="text-lg font-serif italic text-white group-hover:text-primary transition-colors truncate">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 truncate">
                        {product.description && (
                            <p className="text-xs text-gray-400 font-sans">
                                {product.description}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-end">
                        {hasMultipleSizes && (
                            <span className="text-[10px] text-muted uppercase tracking-widest leading-none mb-1">
                                Ab
                            </span>
                        )}
                        <p className="text-lg font-bold text-white whitespace-nowrap leading-none">
                            {firstPrice.toFixed(2)} €
                        </p>
                    </div>
                    <button
                        onClick={handleAction}
                        className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary flex-shrink-0 hover:bg-primary hover:text-black transition-all shadow-md active:scale-95"
                        aria-label={hasMultipleSizes ? `${product.name} konfigurieren` : `${product.name} in den Warenkorb`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {isModalOpen && selectedSize && (
                <CustomizationModal
                    productName={product.name}
                    productPrices={product.prices}
                    categoryData={null} // Drinks have no doughs/toppings
                    selectedSize={selectedSize}
                    selectedDough={null}
                    selectedExtras={[]}
                    total={calculateTotal()}
                    onClose={handleClose}
                    onSetSize={(size, price) => setSelectedSize({ size, price })}
                    onSetDough={() => { }}
                    onToggleExtra={() => { }}
                />
            )}
        </>
    );
}
