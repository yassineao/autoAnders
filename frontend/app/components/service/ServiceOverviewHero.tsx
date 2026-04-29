import Link from "next/link";
import type { LocaleDictionary } from "@/app/lib/i18n";
import type { ServiceSlug } from "@/app/types/Service";

type ServiceOverviewHeroProps = {
  formHref: string;
  locale: string;
  content: LocaleDictionary["servicePage"]["overview"]["hero"];
  services: Array<{
    slug: ServiceSlug;
    badge: string;
  }>;
};

export default function ServiceOverviewHero({
  formHref,
  locale,
  content,
  services,
}: ServiceOverviewHeroProps) {
  return (
      <section className="flex min-h-[600px] items-center">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
                {content.eyebrow}
              </span>
              <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
                {content.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href={formHref}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navyDark transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {content.primaryCta}
                </Link>
              </div>
            </div>

            <div className="flex max-w-2xl flex-wrap justify-center gap-3 lg:justify-end">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${locale}/services/${service.slug}`}
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/90 transition-all duration-200 hover:border-white/25 hover:bg-white/10"
                >
                  {service.badge}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
