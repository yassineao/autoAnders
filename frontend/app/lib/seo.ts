const fallbackSiteUrl = "https://autoanders.nl";

export const siteConfig = {
  name: "AutoAnders",
  defaultTitle: "AutoAnders | Autos kaufen und verkaufen",
  defaultDescription:
    "AutoAnders hilft Fahrern, geprüfte Fahrzeuge zu vergleichen, Autos fair zu verkaufen und den nächsten Fahrzeugkauf klar zu planen.",
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
