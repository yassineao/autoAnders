import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AutoCatalogue from "@/app/components/AutoCatalogue";
import {
  getAlternateLocale,
  getDictionary,
  isValidLocale,
  locales,
  type Locale,
} from "@/app/lib/i18n";
import { siteConfig } from "@/app/lib/seo";

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
  const catalogue = dictionary.home.catalogue;
  const alternateLocale = getAlternateLocale(locale as Locale);

  return {
    title: `${catalogue.title} | ${siteConfig.name}`,
    description: dictionary.home.metadata.description,
    alternates: {
      canonical: `/${locale}/Catalogue`,
      languages: {
        de: "/de/Catalogue",
        en: "/en/Catalogue",
        nl: "/nl/Catalogue",
        "x-default": "/de/Catalogue",
      },
    },
    openGraph: {
      type: "website",
      locale: dictionary.home.metadata.locale,
      url: `/${locale}/Catalogue`,
      siteName: siteConfig.name,
      title: `${catalogue.title} | ${siteConfig.name}`,
      description: dictionary.home.metadata.description,
      images: [
        {
          url: "/Logo.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${catalogue.title} | ${siteConfig.name}`,
      description: dictionary.home.metadata.description,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function CataloguePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  const catalogue = dictionary.home.catalogue;

  return (
    <main className="overflow-x-hidden bg-black pt-16 lg:pt-20">
      <AutoCatalogue
        cars={catalogue.cars}
        locale={locale as Locale}
        title={catalogue.title}
        subtitle={catalogue.subtitle}
        labels={catalogue.labels}
        showMoreButton={false}
      />
    </main>
  );
}
