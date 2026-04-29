import type { MetadataRoute } from "next";
import { getSiteUrl } from "./lib/seo";
import { locales } from "./lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

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
      url: `${siteUrl}/${locale}/Catalogue`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: {
        languages: buildAlternateLanguages("/Catalogue"),
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
  ]);

  return localizedPages;
}
