import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ServiceSlug } from "@/app/types/Service";
import Service from "../../../components/service/Service";
import {
  getAlternateLocale,
  getDictionary,
  getLanguageTag,
  isValidLocale,
  locales,
  type Locale,
} from "../../../lib/i18n";
import { getSiteUrl, siteConfig } from "../../../lib/seo";

const serviceSlugs = [
  "social-media",
  "content-creation",
  "performance-marketing",
  "webdesign",
] as const;

function isValidServiceSlug(service: string): service is ServiceSlug {
  return serviceSlugs.includes(service as ServiceSlug);
}

export async function generateStaticParams() {
  return locales.reduce<Array<{ locale: Locale; service: ServiceSlug }>>(
    (params, locale) => {
      serviceSlugs.forEach((service) => {
        params.push({ locale, service });
      });

      return params;
    },
    [],
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;

  if (!isValidLocale(locale) || !isValidServiceSlug(service)) {
    return {};
  }

  const dictionary = getDictionary(locale as Locale);
  const servicePage = dictionary.servicePage;
  const serviceHero = servicePage.hero[service];
  const alternateLocale = getAlternateLocale(locale as Locale);

  return {
    title: `${siteConfig.name} | ${serviceHero.title}`,
    description: serviceHero.description,
    keywords: servicePage.metadata.keywords,
    alternates: {
      canonical: `/${locale}/services/${service}`,
      languages: {
        de: `/de/services/${service}`,
        en: `/en/services/${service}`,
        nl: `/nl/services/${service}`,
        "x-default": `/de/services/${service}`,
      },
    },
    openGraph: {
      type: "website",
      locale: servicePage.metadata.locale,
      url: `/${locale}/services/${service}`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${serviceHero.title}`,
      description: serviceHero.description,
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
      title: `${siteConfig.name} | ${serviceHero.title}`,
      description: serviceHero.description,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function LocalizedServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;

  if (!isValidLocale(locale) || !isValidServiceSlug(service)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const servicePage = dictionary.servicePage;
  const serviceHero = servicePage.hero[service];
  const siteUrl = getSiteUrl();
  const localizedUrl = `${siteUrl}/${locale}/services/${service}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: localizedUrl,
    description: serviceHero.description,
    inLanguage: getLanguageTag(locale),
    areaServed: servicePage.seo.areaServed,
    image: `${siteUrl}/Logo.png`,
    knowsAbout: servicePage.seo.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: servicePage.seo.offerCatalogName,
      itemListElement: servicePage.seo.services.map((serviceName) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName,
        },
      })),
    },
  };

  return (
    <main className="overflow-x-hidden bg-[#0B0B0F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <div className=" overflow-hidden  font-sans">
          <Service content={servicePage} locale={locale} service={service} />
        </div>
    </main>
  );
}
