import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SellCarForm from "@/app/components/SellCarForm";
import {
  getAlternateLocale,
  getDictionary,
  isValidLocale,
  locales,
  type Locale,
} from "@/app/lib/i18n";
import { siteConfig } from "@/app/lib/seo";

const sellMetadata = {
  de: {
    title: "Auto verkaufen | Faires Angebot von AutoAnders",
    description:
      "Verkaufen Sie Ihr Auto mit AutoAnders. Senden Sie Fahrzeugdaten, Kilometerstand, Ausstattung und Zustand und erhalten Sie eine faire Einschätzung.",
  },
  en: {
    title: "Sell Your Car | Fair Offer from AutoAnders",
    description:
      "Sell your car with AutoAnders. Send vehicle details, mileage, equipment, and condition to receive a fair estimate.",
  },
  nl: {
    title: "Auto verkopen | Eerlijk bod van AutoAnders",
    description:
      "Verkoop uw auto via AutoAnders. Stuur voertuiggegevens, kilometerstand, uitrusting en staat voor een eerlijke inschatting.",
  },
} satisfies Record<Locale, { title: string; description: string }>;

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
  const alternateLocale = getAlternateLocale(locale as Locale);
  const metadata = sellMetadata[locale as Locale];

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/${locale}/Sell`,
      languages: {
        de: "/de/Sell",
        en: "/en/Sell",
        nl: "/nl/Sell",
        "x-default": "/de/Sell",
      },
    },
    openGraph: {
      type: "website",
      locale: dictionary.home.metadata.locale,
      url: `/${locale}/Sell`,
      siteName: siteConfig.name,
      title: metadata.title,
      description: metadata.description,
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
      title: metadata.title,
      description: metadata.description,
      images: ["/Logo.png"],
    },
    other: {
      "content-language": locale,
      "x-alternate-locale": alternateLocale,
    },
  };
}

export default async function SellPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden bg-black pt-16 lg:pt-20">
      <SellCarForm locale={locale as Locale} />
    </main>
  );
}
