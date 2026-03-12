"use client";
import Image from "next/image";

import { useMemo, useState } from "react";
import { categories } from "@/lib/constants/categories"; // Dein Array mit doughs/toppings
import { Product } from "@/types/product";
import CustomizationModal from "./CustomizationModal";
import PriceSizeSelector from "./PriceSizeSelector";

export default function ProductCard({ product, categoryExtras }: { product: any; categoryExtras?: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Finde die Kategorie-Daten für dieses Produkt
  const categoryData = useMemo(() => {
    // Falls static data, nutze .name
    const catName = product.category_name || product.category;
    const staticData = categories.find((cat) => cat.name === catName);

    if (categoryExtras && categoryExtras.length > 0) {
      return {
        ...staticData,
        doughs: categoryExtras.filter(e => e.type === 'teig' && e.is_available),
        toppings: categoryExtras.filter(e => (e.type === 'topping' || e.type === 'sosse') && e.is_available)
      };
    }
    return staticData;
  }, [product, categoryExtras]);

  // Handle dynamic URLs
  const imageUrl = product.image_url || product.imageUrl || "/images/placeholder-pizza.jpg";
  const imageAlt = product.image_alt || product.imageAlt || product.name;

  // 2. States initialisieren
  const [selectedSize, setSelectedSize] = useState<{
    size: string;
    price: number;
  } | null>(null);
  const [selectedDough, setSelectedDough] = useState(
    categoryData?.doughs?.[0] || null,
  );
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const handleOpen = (size: string, price: number) => {
    setSelectedSize({ size, price });
    // Falls wir die Kategorie wechseln, Reset auf Standard-Teig der neuen Kategorie
    setSelectedDough(categoryData?.doughs?.[0] || null);
    setSelectedExtras([]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // 3. Dynamische Berechnung basierend auf categoryData
  const calculateTotal = () => {
    const base = selectedSize?.price || 0;
    const doughPrice = selectedDough?.price || 0;
    const extrasPrice = selectedExtras.reduce((sum, name) => {
      const extra = categoryData?.toppings?.find((t) => t.name === name);
      return sum + (extra?.price || 0);
    }, 0);
    return (base + doughPrice + extrasPrice).toFixed(2);
  };

  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden flex flex-col shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl">
      {/* Bild-Bereich (Jetzt kompakter und immer oben) */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={imageUrl}
          alt={`Produktbild von ${imageAlt}`}
          fill
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Info-Bereich */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold text-primary mb-1 italic">
            {product.name}
          </h3>
          <p className="text-muted text-xs leading-relaxed mb-6 line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className={!product.is_available ? "opacity-50 pointer-events-none grayscale" : ""}>

        <PriceSizeSelector prices={product.prices || { [product.size || "Standard"]: product.price }} onSelect={handleOpen} />
        
        {!product.is_available && (
          <div className="mt-4 p-2 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
            <p className="text-red-400 text-[10px] uppercase font-bold tracking-widest">
              Aktuell nicht verfügbar
            </p>
          </div>
        )}
      </div>
    </div>

      {/* Modal - Erhält nun categoryData als Prop für dynamische Felder */}
      {isModalOpen && selectedSize && (
        <CustomizationModal
          productName={product.name}
          productPrices={product.prices || { [product.size || "Standard"]: product.price }}
          categoryData={categoryData} // Übergebe die kompletten Kategorie-Optionen
          selectedSize={selectedSize}
          selectedDough={selectedDough}
          selectedExtras={selectedExtras}
          total={calculateTotal()}
          onClose={handleClose}
          onSetSize={(size, price) => setSelectedSize({ size, price })}
          onSetDough={setSelectedDough}
          onToggleExtra={(name) =>
            setSelectedExtras((prev) =>
              prev.includes(name)
                ? prev.filter((i) => i !== name)
                : [...prev, name],
            )
          }
        />
      )}
    </div>
  );
}
