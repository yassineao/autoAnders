import Link from "next/link";
import Background from "@/app/components/Background";
import type { LocaleDictionary } from "@/app/lib/i18n";

type ServiceOverviewCtaProps = {
  actionLabel: string;
  content: LocaleDictionary["servicePage"]["hero2"];
  formHref: string;
};

export default function ServiceOverviewCta({
  actionLabel,
  content,
  formHref,
}: ServiceOverviewCtaProps) {
  return (
      <section className="flex min-h-[600px] items-center py-20 bg-[#0B0B0F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[36px] border border-white/10 bg-black/35 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-12">
            <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
              {content.badge}
            </span>
            <h2 className="mt-6 text-balance text-brand-gray text-3xl font-semibold  sm:text-4xl lg:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-muted sm:text-lg">
              {content.description}
            </p>
            <p className="mt-4 text-sm leading-7 text-white sm:text-base">
              <span className="font-semibold text-brand-gray">
                {content.subtitle}
              </span>{" "}
              {content.subdescription}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={formHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navyDark transition-transform duration-200 hover:-translate-y-0.5"
              >
                {actionLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}
