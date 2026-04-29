import type { LocaleDictionary } from "@/app/lib/i18n";

type ServiceOverviewSectionsProps = {
  content: LocaleDictionary["servicePage"]["features"];
};

export default function ServiceOverviewSections({
  content,
}: ServiceOverviewSectionsProps) {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
            {content.badge}
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-brand-muted sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6"
            >
              <h3 className="text-xl font-semibold text-white">
                {section.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {section.points.slice(0, 4).map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-brand-muted"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] text-white">
                      +
                    </span>
                    <span className="leading-6">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
