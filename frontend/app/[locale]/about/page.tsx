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

  const page = getDictionary(locale).pages.about;

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        de: "/de/about",
        en: "/en/about",
        nl: "/nl/about",
        "x-default": "/de/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const page = getDictionary(locale).pages.about;

  return (
    <LegalPage
      eyebrow={page.eyebrow}
      title={page.title}
      intro={page.intro}
      sections={page.sections}
      ctaHref={`/${locale}/form`}
      ctaLabel={page.ctaLabel}
    />
  );
}
