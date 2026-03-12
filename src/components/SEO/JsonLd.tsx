export default function JsonLd({ settings, openingHours }: { settings: any, openingHours: any[] | null }) {
  const restaurantName = settings?.restaurant_name || "PointPizza Flensburg";
  const address = settings?.address || "Holm 59";
  const city = settings?.city || "Flensburg";
  const phone = settings?.phone || "+49 171 6003785";
  const baseUrl = "https://www.point-pizza-flensburg.de";

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

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${baseUrl}/#restaurant`,
    name: restaurantName,
    image: `${baseUrl}/logo.webp`,
    url: baseUrl,
    telephone: phone,
    priceRange: "€ - €€",
    servesCuisine: ["Italian", "Pizza", "Pasta"],
    hasMenu: `${baseUrl}/menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Flensburg",
      postalCode: "24937",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "54.783047",
      longitude: "9.436274",
    },
    openingHoursSpecification: openingHoursSpec,
    sameAs: [
      settings?.instagram_url || "https://www.instagram.com/pointpizza_flensburg/",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Menü",
        "item": `${baseUrl}/menu`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
