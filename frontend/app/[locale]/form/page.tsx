import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Form from "../../components/Form";
import {
  getAlternateLocale,
  getDictionary,
  getLanguageTag,
  isValidLocale,
  locales,
  type Locale,
} from "../../lib/i18n";
import { getSiteUrl, siteConfig } from "../../lib/seo";

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
  const form = dictionary.form;
  const alternateLocale = getAlternateLocale(locale as Locale);

  return {
    title: form.metadata.title,
    description: form.metadata.description,
    keywords: form.metadata.keywords,
    alternates: {
      canonical: `/${locale}/form`,
      languages: {
        de: "/de/form",
        en: "/en/form",
        nl: "/nl/form",
        "x-default": "/de/form",
      },
    },
    openGraph: {
      type: "website",
      locale: form.metadata.locale,
      url: `/${locale}/form`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${form.metadata.title}`,
      description: form.metadata.description,
      images: [
        {
          url: "/Logo.png",
          width: 1200,
          height: 630,
          alt: "AutoAnders Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${form.metadata.title}`,
      description: form.metadata.description,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function FormPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const form = dictionary.form;
  const siteUrl = getSiteUrl();
  const localizedUrl = `${siteUrl}/${locale}/form`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: localizedUrl,
    description: form.metadata.description,
    inLanguage: getLanguageTag(locale),
    areaServed: form.seo.areaServed,
    image: `${siteUrl}/Logo.png`,
    knowsAbout: form.seo.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: form.seo.offerCatalogName,
      itemListElement: form.seo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
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
      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden bg-[#0B0B0F]/30 font-sans mt-16">
        <Form content={form.content} />
      </div>
      
    </main>
  );
}
