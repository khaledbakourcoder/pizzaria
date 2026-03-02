import Link from "next/link";

export default function BrandHeader() {
  return (
    <div className="bg-background py-5 px-8 flex justify-center border-b border-border">
      <Link
        href="/"
        className="flex flex-col items-center group transition-transform active:scale-95"
      >
        <div className="flex items-center gap-2">
          {/* Shadow nutzt Variable via arbitrary values */}
          <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_12px_var(--color-primary)]" />
          <h1 className="text-2xl font-black tracking-tighter italic uppercase text-foreground">
            POINT<span className="text-primary">PIZZA</span>
          </h1>
        </div>
        <span className="text-[9px] text-muted tracking-[0.6em] uppercase mt-0.5">
          Flensburg
        </span>
      </Link>
    </div>
  );
}
