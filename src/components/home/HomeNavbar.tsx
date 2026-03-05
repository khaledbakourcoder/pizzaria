import Link from "next/link";

export default function HomeNavbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_var(--color-primary)]" />
          <h1 className="text-2xl font-black tracking-tighter italic uppercase text-foreground">
            POINT<span className="text-primary">PIZZA</span>
          </h1>
        </div>
        <p className="text-[10px] text-muted tracking-[0.4em] uppercase pl-5">
          Flensburg
        </p>
      </div>

      <div className="hidden md:flex gap-10 items-center text-[10px] font-black uppercase tracking-[0.3em] text-foreground">
        <Link href="/menu" className="hover:text-primary transition-all">
          Speisekarte
        </Link>
        <Link href="#about" className="hover:text-primary transition-all">
          Story
        </Link>
        <Link
          href="/menu"
          className="bg-primary text-primary-fg px-6 py-2 rounded-full hover:bg-foreground hover:text-background transition-all shadow-lg font-black uppercase"
        >
          Bestellen
        </Link>
      </div>
    </nav>
  );
}
