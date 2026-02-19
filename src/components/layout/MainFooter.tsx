// src/components/layout/MainFooter.tsx
import Link from 'next/link';
import OpeningHoursList from "@/components/OpeningHoursList";

export default function MainFooter() {
    return (
        <footer id="about" className="relative z-20 bg-black pt-24 pb-12 border-t border-border">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

                {/* Brand Story */}
                <div className="space-y-6">
                    <h4 className="text-2xl font-black italic tracking-tighter uppercase text-foreground">
                        POINT<span className="text-primary">PIZZA</span>
                    </h4>
                    <p className="text-muted text-sm leading-relaxed max-w-xs font-light">
                        Der Gold-Standard für Pizza in Flensburg. Traditionelles Handwerk trifft auf modernes Design.
                    </p>
                </div>

                {/* Kontakt mit semantischem Tag */}
                <div>
                    <h5 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">Kontakt</h5>
                    <address className="space-y-4 text-sm text-muted font-light not-italic">
                        <div className="flex flex-col">
                            <span className="text-foreground font-bold">Holm 123</span>
                            <span>24937 Flensburg</span>
                        </div>
                        <p>Tel: <a href="tel:+4946112345678" className="hover:text-primary">+49 461 123 456 78</a></p>
                        <p>Mail: <a href="mailto:moin@pointpizza.de" className="hover:text-primary">moin@pointpizza.de</a></p>
                    </address>
                </div>

                <div>
                    <h5 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        Öffnungszeiten
                    </h5>
                    <OpeningHoursList />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-muted uppercase tracking-widest">
                <p>© 2026 POINTPIZZA FLENSBURG.</p>
                <div className="flex gap-8">
                    <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
                    <Link href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
                </div>
            </div>
        </footer>
    );
}