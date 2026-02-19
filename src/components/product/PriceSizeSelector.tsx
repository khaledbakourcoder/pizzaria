interface Props {
    prices: Record<string, number>;
    onSelect: (size: string, price: number) => void;
}

export default function PriceSizeSelector({ prices, onSelect }: Props) {
    return (
        <div className="flex gap-2">
            {Object.entries(prices).map(([size, price]) => (
                <button
                    key={size}
                    onClick={() => onSelect(size, price)}
                    className="flex-1 bg-surface p-3 rounded-xl border border-border hover:border-primary/50 transition-all group"
                >
          <span className="block text-[10px] text-muted uppercase group-hover:text-primary transition-colors">
            Größe {size}
          </span>
                    <span className="text-foreground font-bold">{price.toFixed(2)} €</span>
                </button>
            ))}
        </div>
    );
}