const fallbackSiteUrl = "https://autoanders.nl";

export const siteConfig = {
  name: "AutoAnders",
  defaultTitle: "AutoAnders | Autos kaufen, verkaufen und finanzieren",
  defaultDescription:
    "AutoAnders hilft Fahrern, geprüfte Gebrauchtwagen zu finden, Fahrzeuge fair zu verkaufen, Inzahlungnahme anzufragen und passende Finanzierung zu verstehen.",
};

export function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!envUrl) {
    return fallbackSiteUrl;
  }

  return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
}

export function getMetadataBase() {
  return new URL(getSiteUrl());
}
