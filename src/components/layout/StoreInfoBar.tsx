import OpeningStatus from "./OpeningStatus"; // Die Client-Insel

interface StoreInfoBarProps {
  settings?: any;
  openingHours?: any[] | null;
}

export default function StoreInfoBar({ settings, openingHours }: StoreInfoBarProps) {
  const address = settings?.address || "Holm 59";
  const city = settings?.city || "Flensburg";
  const infoText = settings?.store_info_text || "Online-Bestellung bald verfügbar";

  // Get today's opening time
  const today = new Date().getDay();
  const todayHours = openingHours?.find(h => h.day_of_week === today);
  const openingTime = todayHours?.open_time ? `ab ${todayHours.open_time.substring(0, 5)} Uhr` : "ab 11:30 Uhr";

  return (
    <div className="w-full bg-primary py-1.5 px-8 flex flex-col md:flex-row justify-center md:justify-between items-center border-b border-black/5 gap-2 md:gap-0">
      <div className="hidden md:flex items-center gap-4 text-primary-fg">
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">
          📍 {address}, {city}
        </span>
      </div>

      {/* Zentraler Hinweis - Auf Handy am Ende (order-last) */}
      <div className="flex items-center gap-2 px-3 py-0.5 bg-black/10 rounded-full border border-black/5 order-last md:order-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-black/60"></span>
        </span>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-fg">
          {infoText}
        </span>
      </div>

      <div className="flex items-center gap-3 text-primary-fg">
        {/* Nur dieser Teil ist interaktiv und läuft auf dem Client */}
        <OpeningStatus openingHours={openingHours} />
        <span className="text-[9px] font-black uppercase tracking-[0.3em]">
          {openingTime}
        </span>
      </div>
    </div>
  );
}
