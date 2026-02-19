import FeaturedProductCard from "@/components/FeaturedProductCard";

export default function FeaturedSection({ products }: { products: any[] }) {
    const bestSellers = products.filter(p => p.isBestSeller);

    return (
        <section className="py-32 max-w-7xl mx-auto px-6 relative z-20">
            <div className="flex flex-col items-center mb-20 text-center">
                <h3 className="text-primary text-[10px] font-black tracking-[0.5em] uppercase mb-4">
                    Selection
                </h3>
                <h2 className="text-6xl font-serif italic text-foreground leading-tight">
                    I Nostri Hits
                </h2>
                <div className="w-12 h-[1px] bg-primary mt-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {bestSellers.map((product) => (
                    <FeaturedProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}