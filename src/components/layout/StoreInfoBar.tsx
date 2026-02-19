import OpeningStatus from './OpeningStatus'; // Die Client-Insel

export default function StoreInfoBar() {
    return (
        <div className="w-full bg-primary py-1.5 px-8 flex justify-center md:justify-between items-center border-b border-black/5">
            <div className="hidden md:flex items-center gap-4 text-primary-fg">
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                    📍 Holm 123, Flensburg
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