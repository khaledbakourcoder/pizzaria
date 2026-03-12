// src/components/layout/MainFooter.tsx
import Link from "next/link";
import OpeningHoursList from "@/components/OpeningHoursList";

interface MainFooterProps {
  settings?: any;
  openingHours?: any[] | null;
}

export default function MainFooter({ settings, openingHours }: MainFooterProps) {
  const restaurantName = settings?.restaurant_name || "POINTPIZZA";
  const slogan = settings?.slogan || "Der Gold-Standard für Pizza in Flensburg. Traditionelles Handwerk trifft auf modernes Design.";
  const instagramUrl = settings?.instagram_url || "https://www.instagram.com/pointpizza_flensburg/";
  const address = settings?.address || "Holm 59";
  const city = settings?.city || "24937 Flensburg";
  const phone = settings?.phone || "+49 171 6003785";
  const email = settings?.email || "moin@pointpizza.de";

  // Split restaurant name for styling
  const nameParts = restaurantName.toUpperCase().split("PIZZA");
  const hasPizza = restaurantName.toUpperCase().includes("PIZZA");

  return (
    <footer
      id="about"
      className="relative z-20 bg-black pt-24 pb-12 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        {/* Brand Story */}
        <div className="space-y-6">
          <h4 className="text-2xl font-black italic tracking-tighter uppercase text-foreground">
            {hasPizza ? (
              <>
                {nameParts[0]}<span className="text-primary">PIZZA</span>{nameParts[1]}
              </>
            ) : (
              restaurantName
            )}
          </h4>
          <p className="text-muted text-sm leading-relaxed max-w-xs font-light">
            {slogan}
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              aria-label="Folge uns auf Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Kontakt mit semantischem Tag */}
        <div>
          <h5 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Kontakt
          </h5>
          <address className="space-y-4 text-sm text-muted font-light not-italic">
            <div className="flex flex-col">
              <span className="text-foreground font-bold">{address}</span>
              <span>{city}</span>
            </div>
            <p>
              Tel:{" "}
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary">
                {phone}
              </a>
            </p>
            <p>
              Mail:{" "}
              <a
                href={`mailto:${email}`}
                className="hover:text-primary"
              >
                {email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h5 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Öffnungszeiten
          </h5>
          <OpeningHoursList hours={openingHours} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-muted uppercase tracking-widest">
        <p>© {new Date().getFullYear()} {restaurantName.toUpperCase()} {city.toUpperCase()}.</p>
        <div className="flex gap-8">
          <Link
            href="/impressum"
            className="hover:text-primary transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-foreground transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
