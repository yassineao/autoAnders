import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Andvatages from "@/app/components/andvatages/Andvatages";
import { getDictionary, isValidLocale, locales } from "@/app/lib/i18n";
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

  const dictionary = getDictionary(locale);
  const advantages = dictionary.home.advantages;

  return {
    title: advantages.title,
    description: advantages.description,
    alternates: {
      canonical: `/${locale}/advantages`,
      languages: {
        de: "/de/advantages",
        en: "/en/advantages",
        nl: "/nl/advantages",
        "x-default": "/de/advantages",
      },
    },
    openGraph: {
      type: "website",
      locale: dictionary.home.metadata.locale,
      url: `/${locale}/advantages`,
      siteName: siteConfig.name,
      title: advantages.title,
      description: advantages.description,
      images: [
        {
          url: "/Logo.png",
          width: 1200,
          height: 630,
          alt: "Gloyoo Logo",
        },
      ],
    },
  };
}

export default async function AdvantagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <Andvatages
      locale={locale}
      content={dictionary.home.advantages}
      services={dictionary.home.services}
      contactLabel={dictionary.nav.contactLabel}
    />
  );
}
