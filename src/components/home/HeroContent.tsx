import Link from "next/link";

export default function HeroContent() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 z-20 pt-20">
      <div className="space-y-8">
        <div className="inline-block px-4 py-1 border border-primary rounded-full bg-primary/10 backdrop-blur-md">
          <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase">
            Premium Quality
          </span>
        </div>

        <h2 className="text-7xl md:text-9xl font-serif leading-[0.85] drop-shadow-2xl text-foreground">
          Goldener <br />
          <span className="text-primary italic font-light">Genuss</span>
        </h2>

        <p className="max-w-xl mx-auto text-gray-200 text-lg font-light drop-shadow-md">
          Die beste Pizza der Stadt. Frische Zutaten, 72h Teigruhe und echte
          Leidenschaft.
        </p>

        <div className="pt-6">
          <Link
            href="/menu"
            className="bg-primary text-primary-fg px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all shadow-2xl active:scale-95 text-sm"
          >
            Menü ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
