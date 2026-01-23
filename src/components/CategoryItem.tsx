// src/components/CategoryItem.tsx
interface CategoryItemProps {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

export default function CategoryItem({ name, isActive, onClick }: CategoryItemProps) {
    return (
        <button
            onClick={onClick}
            className={`
        relative px-6 py-3 text-sm uppercase tracking-[0.2em] transition-all duration-300
        ${isActive
                ? 'text-yellow-500 font-bold'
                : 'text-gray-400 hover:text-white'}
      `}
        >
            {name}
            {/* Eleganter Unterstrich für den aktiven Status */}
            {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-yellow-500 shadow-[0_0_8px_#eab308]"></span>
            )}
        </button>
    );
}