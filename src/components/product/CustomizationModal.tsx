"use client";

interface Props {
  productName: string;
  productPrices: Record<string, number>; // Neu: Alle verfügbaren Preise/Größen
  categoryData: any;
  selectedSize: { size: string; price: number };
  selectedDough: any;
  selectedExtras: string[];
  total: string;
  onClose: () => void;
  onSetSize: (size: string, price: number) => void; // Jetzt aktiv genutzt
  onSetDough: (dough: any) => void;
  onToggleExtra: (name: string) => void;
}

export default function CustomizationModal({
  productName,
  productPrices, // Von der ProductCard übergeben
  categoryData,
  selectedSize,
  selectedDough,
  selectedExtras,
  total,
  onClose,
  onSetSize, // Hier hinzugefügt
  onSetDough,
  onToggleExtra,
}: Props) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm p-0 md:p-4">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-background max-h-[90vh] rounded-t-[2rem] md:rounded-[2rem] border-t md:border border-border shadow-2xl flex flex-col animate-slide-up overflow-hidden">
        <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mt-3 mb-1 md:hidden" />

        {/* Header */}
        <div className="px-6 py-4 flex justify-between items-center border-b border-border">
          <div>
            <h4 className="text-xl font-serif italic text-foreground">
              {productName}
            </h4>
            <p className="text-[10px] text-muted uppercase tracking-widest">
              Konfiguration
            </p>
          </div>
          <button
            type={"button"}
            onClick={onClose}
            className="w-8 h-8 bg-surface rounded-full flex items-center justify-center text-foreground hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
          {/* SEKTION 0: GRÖSSE WÄHLEN (Neu) */}
          <div>
            <p className="text-[10px] text-muted font-bold uppercase tracking-widest mb-4">
              Größe wählen:
            </p>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(productPrices).map(([size, price]) => (
                <button
                  type={"button"}
                  key={size}
                  onClick={() => onSetSize(size, price)}
                  className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                    selectedSize.size === size
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-surface text-muted"
                  }`}
                >
                  <span className="block">{size}</span>
                  <span className="block opacity-60">
                    {(price as number).toFixed(2)} €
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SEKTION 1: TEIGART */}
          {categoryData?.doughs && categoryData.doughs.length > 0 && (
            <div>
              <p className="text-[10px] text-muted font-bold uppercase tracking-widest mb-4">
                Teigart:
              </p>
              <div className="space-y-2">
                {categoryData.doughs.map((dough: any) => (
                  <button
                    key={dough.name}
                    onClick={() => onSetDough(dough)}
                    className={`w-full flex justify-between p-4 rounded-xl border transition-all ${
                      selectedDough?.name === dough.name
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-surface text-muted"
                    }`}
                  >
                    <span className="text-sm font-medium">{dough.name}</span>
                    <span className="text-xs">
                      {dough.price > 0
                        ? `+${dough.price.toFixed(2)} €`
                        : "Inklusive"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SEKTION 2: EXTRAS */}
          {categoryData?.toppings && categoryData.toppings.length > 0 && (
            <div>
              <p className="text-[10px] text-muted font-bold uppercase tracking-widest mb-4">
                Extras & Zusätze:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {categoryData.toppings.map((topping: any) => (
                  <button
                    key={topping.name}
                    onClick={() => onToggleExtra(topping.name)}
                    className={`w-full flex justify-between items-center p-4 rounded-xl border transition-all ${
                      selectedExtras.includes(topping.name)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-surface text-muted"
                    }`}
                  >
                    <span className="text-sm font-medium">{topping.name}</span>
                    <span className="text-xs">
                      +{topping.price.toFixed(2)} €
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-surface border-t border-border flex items-center justify-between gap-4">
          <div>
            <p className="text-[9px] text-muted uppercase tracking-widest font-bold">
              Gesamt
            </p>
            <p className="text-2xl font-bold text-foreground leading-none">
              {total} €
            </p>
          </div>
          <button
            disabled
            className="px-8 py-3 bg-white/5 border border-border text-muted rounded-xl text-xs font-bold cursor-not-allowed italic"
          >
            Bald verfügbar
          </button>
        </div>
      </div>
    </div>
  );
}
