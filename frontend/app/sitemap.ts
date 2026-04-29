import type { MetadataRoute } from "next";
import { getSiteUrl } from "./lib/seo";
import { locales } from "./lib/i18n";
import type { ServiceSlug } from "./types/Service";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();
  const serviceSlugs: ServiceSlug[] = [
    "social-media",
    "content-creation",
    "performance-marketing",
    "webdesign",
  ];

  const buildAlternateLanguages = (path = "") =>
    Object.fromEntries(
      locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`]),
    );

  const localizedPages = locales.flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: buildAlternateLanguages(),
      },
    },
    {
      url: `${siteUrl}/${locale}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: buildAlternateLanguages("/about"),
      },
    },
    {
      url: `${siteUrl}/${locale}/faq`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: buildAlternateLanguages("/faq"),
      },
    },
    {
      url: `${siteUrl}/${locale}/privacy`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4,
      alternates: {
        languages: buildAlternateLanguages("/privacy"),
      },
    },
    {
      url: `${siteUrl}/${locale}/impressum`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: buildAlternateLanguages("/impressum"),
      },
    },
    {
      url: `${siteUrl}/${locale}/terms`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: buildAlternateLanguages("/terms"),
      },
    },
    {
      url: `${siteUrl}/${locale}/cookie`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: {
        languages: buildAlternateLanguages("/cookie"),
      },
    },
    {
      url: `${siteUrl}/${locale}/form`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: buildAlternateLanguages("/form"),
      },
    },
    ...serviceSlugs.map((service) => ({
      url: `${siteUrl}/${locale}/services/${service}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: buildAlternateLanguages(`/services/${service}`),
      },
    })),
  ]);

  return localizedPages;
}
