interface Props {
  prices: Record<string, number>;
  onSelect: (size: string, price: number) => void;
}

export default function PriceSizeSelector({ prices, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(prices).map(([size, price]) => (
        <button
          type={"button"}
          key={size}
          onClick={() => onSelect(size, price)}
          className="flex-1 min-w-[60px] bg-surface p-2 rounded-xl border border-border hover:border-primary/50 transition-all group"
        >
          <span className="block text-[9px] text-muted uppercase group-hover:text-primary transition-colors">
            Größe {size}
          </span>
          <span className="text-foreground font-bold text-sm">
            {price.toFixed(2)} €
          </span>
        </button>
      ))}
    </div>
  );
}
