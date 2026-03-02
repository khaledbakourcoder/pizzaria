import Image from "next/image";
import Link from "next/link";

interface Props {
  categories: any[];
}

export default function CategoryGrid({ categories }: Props) {
  return (
    <section className="relative z-20 py-24 bg-background/80 backdrop-blur-md border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/menu#${cat.name}`}
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-yellow-500 transition-all duration-500 shadow-2xl p-1 bg-black">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={`Kategorie ${cat.name}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 16vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
