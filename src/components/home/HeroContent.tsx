import Link from "next/link";

interface HeroContentProps {
  content?: any;
}

export default function HeroContent({ content }: HeroContentProps) {
  const badgeText = content?.badge_text || "Premium Quality";
  const title1 = content?.title_line1 || "Goldener";
  const title2 = content?.title_line2 || "Genuss";
  const description = content?.description || "Die beste Pizza der Stadt. Frische Zutaten, 72h Teigruhe und echte Leidenschaft.";
  const ctaText = content?.cta_text || "Menü ansehen";

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 z-20 pt-20">
      <div className="space-y-8">
        <div className="inline-block px-4 py-1 border border-primary rounded-full bg-primary/10 backdrop-blur-md">
          <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase">
            {badgeText}
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] drop-shadow-2xl text-foreground">
          {title1} <br />
          <span className="text-primary italic font-light">{title2}</span>
        </h1>

        <p className="max-w-xl mx-auto text-gray-200 text-lg font-light drop-shadow-md">
          {description}
        </p>

        <div className="pt-6">
          <Link
            href="/menu"
            className="bg-primary text-primary-fg px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all shadow-2xl active:scale-95 text-sm"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
