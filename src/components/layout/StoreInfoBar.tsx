import OpeningStatus from "./OpeningStatus"; // Die Client-Insel

export default function StoreInfoBar() {
  return (
    <div className="w-full bg-primary py-1.5 px-8 flex flex-col md:flex-row justify-center md:justify-between items-center border-b border-black/5 gap-2 md:gap-0">
      <div className="hidden md:flex items-center gap-4 text-primary-fg">
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">
          📍 Holm 59, Flensburg
        </span>
      </div>

      {/* Zentraler Hinweis - Auf Handy am Ende (order-last) */}
      <div className="flex items-center gap-2 px-3 py-0.5 bg-black/10 rounded-full border border-black/5 order-last md:order-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-black/60"></span>
        </span>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-fg">
          Online-Bestellung bald verfügbar
        </span>
      </div>

      <div className="flex items-center gap-3 text-primary-fg">
        {/* Nur dieser Teil ist interaktiv und läuft auf dem Client */}
        <OpeningStatus />
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">
          ab 11:30 Uhr
        </span>
      </div>
    </div>
  );
}
