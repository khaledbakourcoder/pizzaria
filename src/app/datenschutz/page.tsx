import type { Metadata } from 'next';
import HomeNavbar from '@/components/home/HomeNavbar';
import MainFooter from '@/components/layout/MainFooter';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung | PointPizza Flensburg',
    description: 'Datenschutzerklärung der PointPizza Flensburg.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <header className="fixed top-0 w-full z-50">
                <HomeNavbar />
            </header>

            <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-serif italic text-primary mb-12 border-b border-primary/20 pb-6">Datenschutzerklärung</h1>

                <div className="space-y-8 font-light text-muted leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-lg font-bold text-primary mb-2 mt-6">Allgemeine Hinweise</h3>
                        <p className="mb-4">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                        <h3 className="text-lg font-bold text-primary mb-2 mt-6">Datenerfassung auf dieser Website</h3>
                        <h4 className="font-bold text-white mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                        <p className="mb-4">
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
                        <p className="mb-4">
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                        </p>
                        <h3 className="text-lg font-bold text-primary mb-2 mt-6">Vercel</h3>
                        <p className="mb-4 font-bold text-white">Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                        <p className="mb-4">
                            Vercel ist eine Cloud-Plattform, über die wir unsere Website zur Verfügung stellen. Bei der Nutzung unserer Website werden technisch notwendige Daten (wie z.B. Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs) kurzzeitig in den Logfiles des Servers verarbeitet, um die Sicherheit und Stabilität des Dienstes zu gewährleisten.
                        </p>
                        <p>
                            Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3 className="text-lg font-bold text-primary mb-2 mt-6">Datenschutz</h3>
                        <p className="mb-4">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <h3 className="text-lg font-bold text-primary mb-2 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="mb-4">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                            PointPizza Flensburg<br />
                            Holm 59<br />
                            24937 Flensburg<br />
                            <br />
                            Telefon: +49 171 6003785<br />
                            E-Mail: moin@pointpizza.de
                        </p>
                        <p>
                            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Analyse-Tools und Analytics</h2>
                        <h3 className="text-lg font-bold text-primary mb-2 mt-6">Vercel Web Analytics & Speed Insights</h3>
                        <p className="mb-4">
                            Diese Website nutzt Analyse-Dienste der Vercel Inc., um die Performance unserer Seite zu messen und das Nutzererlebnis zu verbessern (Vercel Web Analytics und Speed Insights).
                        </p>
                        <p className="mb-4">
                            Diese Dienste erfassen ausschließlich **anonymisierte Daten** über die Nutzung unserer Website. Es werden dabei:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Keine Cookies auf Ihrem Endgerät gespeichert.</li>
                            <li>Keine personenbezogenen Daten (wie IP-Adressen in Klarschrift) dauerhaft gespeichert, die Rückschlüsse auf Ihre Identität zulassen.</li>
                            <li>Keine Profile über Ihr Nutzerverhalten erstellt.</li>
                        </ul>
                        <p>
                            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Optimierung unseres Online-Angebots).
                        </p>
                    </section>

                </div>
            </div>

            <MainFooter />
        </main>
    );
}
