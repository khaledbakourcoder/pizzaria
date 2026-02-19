// app/menu/page.tsx
import { categories } from '@/lib/constants/categories';
import { products } from '@/lib/constants/products';
import StoreInfoBar from '@/components/layout/StoreInfoBar';
import BrandHeader from '@/components/layout/BrandHeader';
import CategoryNavContainer from '@/components/menu/CategoryNavContainer'; // Neuer Client-Wrapper
import MenuHero from '@/components/menu/MenuHero';
import MenuSection from '@/components/menu/MenuSection';
import SimpleFooter from '@/components/layout/SimpleFooter';

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <header className="fixed top-0 w-full z-50">
                {/* StoreInfoBar wird intern zur Client-Insel für den Status */}
                <StoreInfoBar />
                <BrandHeader />
                {/* Diese Komponente übernimmt jetzt die Client-Logik für ScrollSpy */}
                <CategoryNavContainer categories={categories} />
            </header>

            <div className="pt-52 pb-32">
                <MenuHero />
                <div className="max-w-4xl mx-auto px-6">
                    {categories.map((cat) => (
                        <MenuSection
                            key={typeof cat === 'string' ? cat : cat.name}
                            category={cat}
                            allProducts={products}
                        />
                    ))}
                </div>
            </div>
            <SimpleFooter />
        </main>
    );
}