import Image from 'next/image';

export default function BackgroundFixed() {
    return (
        <div className="fixed inset-0 z-0">
            {/* Gradient nutzt nun die Hintergrund-Variable */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background z-10" />
            <Image
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070"
                alt="Hintergrund"
                fill
                className="object-cover object-center opacity-40 scale-105"
                priority
            />
        </div>
    );
}