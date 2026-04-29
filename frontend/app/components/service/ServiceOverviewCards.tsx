import Image from "next/image";
import Link from "next/link";
import type { LocaleDictionary } from "@/app/lib/i18n";
import type { ServiceHero, ServiceSlug } from "@/app/types/Service";
import { serviceOverviewVisuals } from "./serviceOverviewConfig";

type ServiceOverviewCardsProps = {
  formHref: string;
  locale: string;
  content: LocaleDictionary["servicePage"]["overview"]["cards"];
  services: Array<{
    slug: ServiceSlug;
    hero: ServiceHero;
  }>;
};

export default function ServiceOverviewCards({
  formHref,
  locale,
  content,
  services,
}: ServiceOverviewCardsProps) {
  return (
    <section
      id="service-cards"
      className="border-t border-white/8 bg-[#0B0B0F] py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
            {content.eyebrow}
          </span>
          <p className="mt-6 text-base leading-8 text-brand-muted sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map(({ slug, hero }) => {
            const visual = serviceOverviewVisuals[slug];

            return (
              <article
                key={slug}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                      {hero.badge}
                    </span>
                  </div>

                  <div className="relative mt-6 flex h-52 items-center justify-center overflow-hidden rounded-[28px] border border-white/10">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{ background: visual.panelBackground }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-25"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 48%, transparent 100%)",
                      }}
                    />
                    <Image
                      src={visual.artSrc}
                      alt={content.imageAlts[slug]}
                      width={160}
                      height={160}
                      className="relative z-10 h-auto w-28 object-contain transition-transform duration-300 group-hover:scale-105 sm:w-32"
                    />
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-white">
                    {hero.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-brand-muted sm:text-base">
                    {hero.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/${locale}/services/${slug}`}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/25 hover:bg-white/10"
                    >
                      {hero.secondaryCta}
                    </Link>
                    <Link
                      href={formHref}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-brand-purple px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {hero.primaryCta}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
