import ProductCard from '@/components/product/ProductCard';

export default function MenuSection({ category, allProducts }: any) {
    const name = typeof category === 'string' ? category : category.name;
    const categoryProducts = allProducts.filter(p => p.category === name);
    if (categoryProducts.length === 0) return null;

    return (
        <section id={name} className="mb-24 scroll-mt-52">
            <div className="flex items-center gap-6 mb-12">
                <h2 className="text-3xl font-serif italic text-primary whitespace-nowrap">
                    {name}
                </h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <div className="grid grid-cols-1 gap-10">
                {categoryProducts.map((product:any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}