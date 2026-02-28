import { categories } from '@/lib/constants/categories';
import { products } from "@/lib/constants/products";
import StoreInfoBar from '@/components/layout/StoreInfoBar';
import MainFooter from '@/components/layout/MainFooter';
import BackgroundFixed from '@/components/home/BackgroundFixed';
import HomeNavbar from '@/components/home/HomeNavbar';
import HeroContent from '@/components/home/HeroContent';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedSection from '@/components/home/FeaturedSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://pointpizza.de',
    }
};

export default function Home() {

    return (
        <main className="relative min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
            <header className="fixed top-0 w-full z-50">
                <StoreInfoBar />
                <HomeNavbar />
            </header>
            <BackgroundFixed />
            <HeroContent />
            <CategoryGrid categories={categories} />
            <FeaturedSection products={products} />
            <MainFooter />
        </main>
    );
}