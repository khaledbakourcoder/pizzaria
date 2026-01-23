import Image from 'next/image';
import { Product } from '@/types/product';

export default function FeaturedProductCard({ product }: { product: Product }) {
    // Ermittelt den kleinsten Preis für die Anzeige
    const startingPrice = Math.min(...Object.values(product.prices).filter(v => typeof v === 'number') as number[]);

    return (
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-yellow-500/30">
            {/* Bild-Container mit Zoom-Effekt */}
            <div className="relative h-72 w-full overflow-hidden">
                <Image
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay für bessere Lesbarkeit */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1218] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content - Zentriert und minimalistisch */}
            <div className="p-8 text-center relative">
                <span className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-bold">
                    {product.category}
                </span>
                <h3 className="text-2xl font-serif italic text-white mt-2 mb-4">
                    {product.name}
                </h3>

                <div className="flex items-center justify-center gap-4">
                    <div className="h-[1px] w-8 bg-white/20"></div>
                    <span className="text-xl font-light text-gray-300">
                        {startingPrice.toFixed(2)} €
                    </span>
                    <div className="h-[1px] w-8 bg-white/20"></div>
                </div>

                {/* Ein einfacher, eleganter Button-Ersatz */}
                <div className="mt-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-yellow-500 text-xs uppercase tracking-widest border-b border-yellow-500 pb-1">
                        Details ansehen
                    </span>
                </div>
            </div>
        </div>
    );
}