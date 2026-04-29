import type { Locale, LocaleDictionary } from "@/app/lib/i18n";
import Features from "./Features";
import ServiceOverviewCards from "./ServiceOverviewCards";
import ServiceOverviewCta from "./ServiceOverviewCta";
import ServiceOverviewHero from "./ServiceOverviewHero";
import { serviceSlugs } from "./serviceOverviewConfig";

type ServiceOverviewProps = {
  content: LocaleDictionary["servicePage"];
  locale: Locale;
};

export default function ServiceOverview({
  content,
  locale,
}: ServiceOverviewProps) {
  const formHref = `/${locale}/form`;
  const services = serviceSlugs.map((slug) => ({
    slug,
    hero: content.hero[slug],
  }));

  return (
    <>
      <ServiceOverviewHero
        formHref={formHref}
        locale={locale}
        content={content.overview.hero}
        services={services.map(({ slug, hero }) => ({
          slug,
          badge: hero.badge,
        }))}
      />
      <ServiceOverviewCards
        formHref={formHref}
        locale={locale}
        content={content.overview.cards}
        services={services}
      />
      <div className="flex items-center justify-center bg-black">
        <Features content={content.features} />
      </div>
      <ServiceOverviewCta
        actionLabel={content.overview.hero.primaryCta}
        content={content.hero2}
        formHref={formHref}
      />
    </>
  );
}
