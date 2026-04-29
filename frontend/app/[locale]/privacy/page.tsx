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

  const page = getDictionary(locale).pages.privacy;

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        de: "/de/privacy",
        en: "/en/privacy",
        nl: "/nl/privacy",
        "x-default": "/de/privacy",
      },
    },
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getDictionary(locale).pages.privacy;

  return (
    <LegalPage
      eyebrow={page.eyebrow}
      title={page.title}
      intro={page.intro}
      heroMeta={page.heroMeta}
      contents={page.contents}
      sections={page.sections}
      note={page.note}
    />
  );
}
