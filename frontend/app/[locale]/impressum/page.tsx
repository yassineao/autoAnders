import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/app/components/legal/LegalPage";
import { getDictionary, isValidLocale, locales } from "@/app/lib/i18n";

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

  const page = getDictionary(locale).pages.impressum;

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: `/${locale}/impressum`,
      languages: {
        de: "/de/impressum",
        en: "/en/impressum",
        nl: "/nl/impressum",
        "x-default": "/de/impressum",
      },
    },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getDictionary(locale).pages.impressum;

  return (
    <LegalPage
      eyebrow={page.eyebrow}
      title={page.title}
      intro={page.intro}
      heroMeta={page.heroMeta}
      sections={page.sections}
      note={page.note}
    />
  );
}
