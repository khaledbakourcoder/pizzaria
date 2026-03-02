export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "PointPizza Flensburg",
    image: "https://pointpizza.de/logo.png",
    "@id": "https://pointpizza.de",
    url: "https://pointpizza.de",
    telephone: "+4946112345678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Holm 123",
      addressLocality: "Flensburg",
      postalCode: "24937",
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:30",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "21:00",
      },
    ],
    servesCuisine: ["Italian", "Pizza"],
    priceRange: "$$",
    hasMenu: "https://pointpizza.de/menu",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
