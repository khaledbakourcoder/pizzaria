import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

export default function FeaturedProductCard({ product }: { product: Product }) {
  // Ermittelt den kleinsten Preis für die Anzeige
  const startingPrice = Math.min(
    ...(Object.values(product.prices).filter(
      (v) => typeof v === "number",
    ) as number[]),
  );

  return (
    <Link
      href={`/menu#${product.category}`}
      className="group block relative bg-[#0d151c]/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
    >
      {/* Bild-Container mit Zoom-Effekt */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={`Angebot: ${product.imageAlt}`}
          fill
          loading="lazy"
          className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
        />

        {/* Subtle Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Floating Price Tag */}
        <div className="absolute top-6 right-6">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full transform group-hover:-translate-y-1 transition-transform duration-500">
            <span className="text-primary text-sm font-bold tracking-wider">
              ab {startingPrice.toFixed(2)} €
            </span>
          </div>
        </div>
      </div>

      {/* Content - Editorial Style */}
      <div className="p-10 text-center relative z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-primary text-[9px] uppercase tracking-[0.4em] font-black opacity-70">
            {product.category}
          </span>
          <h3 className="text-3xl font-serif italic text-white leading-tight tracking-tight">
            {product.name}
          </h3>

          <div className="w-8 h-[1px] bg-primary/30 mt-4 group-hover:w-16 transition-all duration-700" />
        </div>

        {/* Discovery Action */}
        <div className="mt-8 flex justify-center items-center gap-2 opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
            Details ansehen
          </span>
          <span className="text-xs transform group-hover:translate-x-1 transition-transform duration-500">→</span>
        </div>
      </div>

      {/* Hover Light Effect */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </Link>
  );
}
