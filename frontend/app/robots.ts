import type { MetadataRoute } from "next";
import { getSiteUrl } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // ✅ ADD: Disallow paths you don't want indexed
        disallow: [
          "/api/",           // API routes
          "/_next/",         // Next.js internal files
          "/private/",       // If you have private pages
          "/thank-you",      // Thank you pages (no SEO value)
          "/form-success",   // Form success pages
        ],
      },
      {
        // ✅ ADD: Specific rules for major search engines
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}