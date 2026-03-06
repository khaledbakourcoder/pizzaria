import ProductCard from "@/components/product/ProductCard";
import DrinkListItem from "@/components/product/DrinkListItem";

export default function MenuSection({ category, allProducts }: any) {
  const name = typeof category === "string" ? category : category.name;
  const categoryProducts = allProducts.filter(
    (p: { category: any }) => p.category === name,
  );
  if (categoryProducts.length === 0) return null;

  const isDrinks = name === "Kalte Getränke";

  return (
    <section id={name} className="mb-24 scroll-mt-52">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-3xl font-serif italic text-primary whitespace-nowrap">
          {name}
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      {isDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-2 mx-auto max-w-5xl">
          {categoryProducts.map((product: any) => (
            <DrinkListItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categoryProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
