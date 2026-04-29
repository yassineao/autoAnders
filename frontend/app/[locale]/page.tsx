import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainPage from "../components/mainPage/MainPage";
import {
  getAlternateLocale,
  getDictionary,
  isValidLocale,
  locales,
  type Locale,
} from "../lib/i18n";
import { siteConfig } from "../lib/seo";

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
  const home = dictionary.home;
  const alternateLocale = getAlternateLocale(locale as Locale);

  return {
    title: home.metadata.title,
    description: home.metadata.description,
    keywords: home.metadata.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: "/de",
        en: "/en",
        nl: "/nl",
        "x-default": "/de",
      },
    },
    openGraph: {
      type: "website",
      locale: home.metadata.locale,
      url: `/${locale}`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${home.metadata.title}`,
      description: home.metadata.description,
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
      title: `${siteConfig.name} | ${home.metadata.title}`,
      description: home.metadata.description,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);
  return (
    <MainPage
      home={dictionary.home}
      faq={dictionary.faq}
      locale={locale as Locale}
    />
  );
}
