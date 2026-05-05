const fallbackSiteUrl = "https://autoanders.nl";

export const siteConfig = {
  name: "Gloyoo",
  defaultTitle: "Gloyoo | Social Media Agency and modern websites",
  defaultDescription:
    "Gloyoo helps companies in Germany grow online visibility through social media management, content creation, performance marketing, and modern websites.",
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
