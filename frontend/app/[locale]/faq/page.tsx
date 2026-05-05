import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Faq from "@/app/components/Faq";
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

  const faq = getDictionary(locale).faq;
  const alternateLocale = getAlternateLocale(locale);

  return {
    title: faq.metadata.title,
    description: faq.metadata.description,
    keywords: faq.metadata.keywords,
    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        de: "/de/faq",
        en: "/en/faq",
        nl: "/nl/faq",
        "x-default": "/de/faq",
      },
    },
    openGraph: {
      type: "website",
      locale: faq.metadata.locale,
      url: `/${locale}/faq`,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${faq.metadata.title}`,
      description: faq.metadata.description,
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
      title: `${siteConfig.name} | ${faq.metadata.title}`,
      description: faq.metadata.description,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const faq = getDictionary(locale as Locale).faq;
  const siteUrl = getSiteUrl();
  const localizedUrl = `${siteUrl}/${locale}/faq`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: getLanguageTag(locale),
    url: localizedUrl,
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-[#0B0B0F] px-4 pt-24 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pt-28 xl:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Faq content={faq} />
    </main>
  );
}
