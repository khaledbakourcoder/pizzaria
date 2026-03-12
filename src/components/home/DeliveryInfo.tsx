"use client";

import { Euro, Clock, MapPin } from "lucide-react";

export default function DeliveryInfo({ zones }: { zones: any[] }) {
  if (!zones || zones.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-[10px] font-black tracking-[0.5em] uppercase mb-3 block">
            Lieferservice
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4 tracking-tight text-foreground">
            Wohin wir liefern
          </h2>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <div
              key={zone.id}
              className="bg-surface/50 backdrop-blur-xl border border-border rounded-3xl p-8 transition-all hover:border-primary/40 group h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-black">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif italic text-white leading-none mb-1">
                    {zone.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {zone.postal_codes.map((plz: string) => (
                      <span
                        key={plz}
                        className="text-[9px] font-black uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md text-muted"
                      >
                        {plz}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex items-center justify-between text-sm py-3 border-b border-white/5">
                  <span className="text-muted flex items-center gap-2">
                    <Euro size={14} className="text-primary" /> Mindestbestellwert
                  </span>
                  <span className="text-foreground font-bold font-serif italic">
                    {zone.min_order_value.toFixed(2)} €
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm py-3 border-b border-white/5">
                  <span className="text-muted flex items-center gap-2">
                    <Euro size={14} className="text-primary" /> Liefergebühr
                  </span>
                  <span className="text-foreground font-bold font-serif italic">
                    {zone.delivery_fee.toFixed(2)} €
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm pt-3">
                  <span className="text-muted flex items-center gap-2">
                    <Clock size={14} className="text-primary" /> Lieferzeit ca.
                  </span>
                  <span className="text-foreground font-bold font-serif italic text-lg pr-1">
                    {zone.delivery_time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-muted text-xs leading-relaxed max-w-xl mx-auto italic">
                Sollte dein Wohnort nicht aufgeführt sein, ruf uns gerne an. <br className="hidden md:block" /> 
                Bei größeren Bestellungen finden wir oft eine Lösung!
            </p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]" />
      </div>
    </section>
  );
}
