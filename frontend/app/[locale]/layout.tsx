import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getDictionary, isValidLocale, type Locale } from "../lib/i18n";
import { notFound } from "next/navigation";
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <Navbar locale={locale as Locale} content={dictionary.nav} />
      {children}
      <Footer locale={locale as Locale} content={dictionary.footer} />
    </>
  );
}
