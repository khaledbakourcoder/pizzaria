import Image from "next/image";

const staticPillars = [
    {
        id: 1,
        title: "72h Leidenschaft",
        subtitle: "Der Teig als Fundament",
        text: "Zeit ist unsere kostbarste Zutat. Unser Teig ruht volle 72 Stunden in kühler Perfektion. Diese lange Gärung sorgt für die unverwechselbaren Luftblasen im Rand und eine Bekömmlichkeit, die man bei jeder Pizza schmeckt.",
        image: "/story/dough.png",
        icon: "⏳",
    },
    {
        id: 2,
        title: "Frische & Herkunft",
        subtitle: "Ehrliche Zutaten",
        text: "Von den sonnengereiften San Marzano Tomaten bis hin zum original italienischen Tipo 00 Mehl — wir gehen keine Kompromisse ein. Wir beziehen unsere Produkte direkt von Erzeugern, die unsere Leidenschaft für Qualität teilen.",
        image: "/story/ingredients.png",
        icon: "🌿",
    },
    {
        id: 3,
        title: "Das Steinofen-Geheimnis",
        subtitle: "Vollendung bei 450 Grad",
        text: "Jede Pizza wird bei extremer Hitze im traditionellen Steinofen gebacken. In weniger als 90 Sekunden entsteht die perfekte Verbindung aus krossem Boden und saftigem Belag — der Gold-Standard, den wir jeden Tag anstreben.",
        image: "/story/oven.png",
        icon: "🔥",
    }
];

interface StorySectionProps {
    section: any;
}

export default function StorySection({ section }: StorySectionProps) {
    const pillarsData = section?.story_pillars || section?.pillars || [];
    
    const pillars = pillarsData.length > 0 ? pillarsData.map((p: any) => ({
        id: p.id,
        title: p.title,
        subtitle: p.subtitle,
        text: p.text,
        image: p.image_url || "/story/dough.png",
        icon: p.icon || "⭐"
    })) : staticPillars;

    const badgeText = section?.badge_text || "Unsere Philosophie";
    const quoteText = section?.quote_text || "„Wir machen Pizza, wie sie sein sollte — mit Geduld und den besten Zutaten.“";
    const subtitleText = section?.subtitle_text || "— Seit 2024 in Flensburg";

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#05080b] border-t border-white/5">
            {/* --- Advanced Background Layers --- */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Part */}
                <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32 space-y-8 md:space-y-10">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-primary/20 px-4 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <h2 className="text-primary text-[9px] font-black tracking-[0.4em] uppercase">
                            {badgeText}
                        </h2>
                    </div>

                    <blockquote className="text-4xl md:text-7xl font-serif italic text-white leading-[1.05] tracking-tight">
                        {quoteText.includes('<span') ? (
                            <div dangerouslySetInnerHTML={{ __html: quoteText }} />
                        ) : quoteText}
                    </blockquote>

                    <div className="flex flex-col items-center gap-6">
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <p className="text-gray-400 font-light tracking-[0.3em] uppercase text-[11px]">
                            {subtitleText}
                        </p>
                    </div>
                </div>

                {/* Narrative Grid */}
                <div className="space-y-32 md:space-y-48">
                    {pillars.map((pillar: any, index: number) => (
                        <div
                            key={pillar.id}
                            className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                                }`}
                        >
                            {/* Image Part */}
                            <div className="w-full md:w-1/2 group relative">
                                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-3xl border border-white/10 group-hover:border-primary/30 transition-all duration-700 shadow-2xl">
                                    <Image
                                        src={pillar.image}
                                        alt={pillar.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-80 group-hover:opacity-100"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080b] via-transparent to-transparent opacity-60 md:opacity-0" />
                                </div>
                                {/* Decorative elements behind image */}
                                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl -z-10 group-hover:-top-6 group-hover:-left-6 transition-all duration-500" />
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-3xl -z-10 group-hover:-bottom-6 group-hover:-right-6 transition-all duration-500" />
                            </div>

                            {/* Text Part */}
                            <div className="w-full md:w-1/2 space-y-6 md:px-12">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">{pillar.icon}</span>
                                        <span className="h-[1px] w-8 bg-primary/30" />
                                    </div>
                                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                                        {pillar.subtitle}
                                    </p>
                                    <h3 className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
                                        {pillar.title}
                                    </h3>
                                </div>
                                <p className="text-muted/80 text-lg md:text-xl font-light leading-relaxed">
                                    {pillar.text}
                                </p>
                                <div className="pt-4">
                                    <div className="h-[1px] w-full bg-white/5 relative">
                                        <div className="absolute top-0 left-0 h-full w-0 group-hover:w-full bg-primary/30 transition-all duration-1000" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
