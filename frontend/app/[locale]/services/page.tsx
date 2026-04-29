import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceOverview from "@/app/components/service/ServiceOverview";
import { serviceSlugs } from "@/app/components/service/serviceOverviewConfig";
import {
  getAlternateLocale,
  getDictionary,
  getLanguageTag,
  isValidLocale,
  locales,
  type Locale,
} from "@/app/lib/i18n";
import { getSiteUrl, siteConfig } from "@/app/lib/seo";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale as Locale);
  const servicePage = dictionary.servicePage;
  const alternateLocale = getAlternateLocale(locale as Locale);

  return {
    title: servicePage.metadata.title,
    description: servicePage.metadata.description,
    keywords: servicePage.metadata.keywords,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        de: "/de/services",
        en: "/en/services",
        nl: "/nl/services",
        "x-default": "/de/services",
      },
    },
    openGraph: {
      type: "website",
      locale: servicePage.metadata.locale,
      url: `/${locale}/services`,
      siteName: siteConfig.name,
      title: servicePage.metadata.title,
      description: servicePage.metadata.description,
      images: [
        {
          url: "/Logo.png",
          width: 1200,
          height: 630,
          alt: "Gloyoo Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: servicePage.metadata.title,
      description: servicePage.metadata.description,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function ServicesOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const servicePage = dictionary.servicePage;
  const siteUrl = getSiteUrl();
  const localizedUrl = `${siteUrl}/${locale}/services`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: localizedUrl,
    description: servicePage.metadata.description,
    inLanguage: getLanguageTag(locale),
    areaServed: servicePage.seo.areaServed,
    image: `${siteUrl}/Logo.png`,
    knowsAbout: servicePage.seo.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: servicePage.seo.offerCatalogName,
      itemListElement: serviceSlugs.map((slug) => ({
        "@type": "Offer",
        url: `${siteUrl}/${locale}/services/${slug}`,
        itemOffered: {
          "@type": "Service",
          name: servicePage.hero[slug].badge,
          description: servicePage.hero[slug].description,
        },
      })),
    },
  };

  return (
    <main className="overflow-x-hidden bg-[#0B0B0F] pt-16 lg:pt-0 mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceOverview content={servicePage} locale={locale as Locale} />
    </main>
  );
}
