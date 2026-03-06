import Image from "next/image";

export default function BackgroundFixed() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient nutzt nun die Hintergrund-Variable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background z-10" />
      <Image
        src="/background.webp"
        alt="Pizza Hintergrundbild"
        decoding="async"
        data-nimg="fill"
        fill
        sizes="100vw"
        quality={75}
        className="object-cover object-center opacity-40 scale-105"
        priority
      />
    </div>
  );
}
