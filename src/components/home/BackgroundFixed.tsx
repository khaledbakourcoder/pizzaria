import Image from "next/image";

export default function BackgroundFixed({ heroImageUrl }: { heroImageUrl?: string | null }) {
  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient nutzt nun die Hintergrund-Variable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background z-10" />
      <Image
        src={heroImageUrl || "/background.webp"}
        alt="Pizza Hintergrundbild"
        fill
        sizes="100vw"
        quality={60}
        className="object-cover object-center opacity-40 scale-105"
        priority
      />
    </div>
  );
}
