import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Falls es interne API-Routen gibt, die nicht gecrawlt werden sollen
    },
    sitemap: "https://pointpizza.de/sitemap.xml",
  };
}
