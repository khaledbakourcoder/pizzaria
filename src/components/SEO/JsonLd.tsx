export default function JsonLd({ settings, openingHours }: { settings: any, openingHours: any[] | null }) {
  const restaurantName = settings?.restaurant_name || "PointPizza Flensburg";
  const address = settings?.address || "Holm 59";
  const city = settings?.city || "Flensburg";
  const phone = settings?.phone || "+491716003785";

  // Format opening hours for schema.org
  const openingHoursSpec = openingHours ? openingHours.map((oh: any) => {
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days[oh.day_of_week],
      opens: oh.open_time || "00:00",
      closes: oh.close_time || "00:00",
      ...(oh.is_closed && { opens: "00:00", closes: "00:00" })
    };
  }) : [
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
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurantName,
    image: "https://www.point-pizza-flensburg.de/logo.webp",
    "@id": "https://www.point-pizza-flensburg.de/",
    url: "https://www.point-pizza-flensburg.de/",
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      postalCode: city.split(" ")[0] || "24937",
      addressCountry: "DE",
    },
    openingHoursSpecification: openingHoursSpec,
    servesCuisine: ["Italian", "Pizza"],
    priceRange: "€ - €€",
    hasMenu: "https://www.point-pizza-flensburg.de/menu",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "54.783047",
      longitude: "9.436274",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
