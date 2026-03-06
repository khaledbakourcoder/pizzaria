import type { Metadata } from 'next';
import HomeNavbar from '@/components/home/HomeNavbar';
import MainFooter from '@/components/layout/MainFooter';

export const metadata: Metadata = {
    title: 'Impressum | PointPizza Flensburg',
    description: 'Impressum der PointPizza Flensburg.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <header className="fixed top-0 w-full z-50">
                <HomeNavbar />
            </header>

            <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif italic text-primary mb-12 border-b border-primary/20 pb-6">Impressum</h1>

                <div className="space-y-8 font-light text-muted leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <p>
                            PointPizza Flensburg<br />
                            Holm 59<br />
                            24937 Flensburg<br />
                            Deutschland
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
                        <p>
                            Telefon: +49 171 6003785<br />
                            E-Mail: moin@pointpizza.de
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                            DE XXX XXX XXX (Bitte eintragen)
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>
                </div>
            </div>

            <MainFooter />
        </main>
    );
}
