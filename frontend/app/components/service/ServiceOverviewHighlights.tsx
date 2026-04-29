import type { LocaleDictionary } from "@/app/lib/i18n";

type ServiceOverviewHighlightsProps = {
  items: LocaleDictionary["servicePage"]["features"]["items"];
};

export default function ServiceOverviewHighlights({
  items,
}: ServiceOverviewHighlightsProps) {
  return (
    <section className="border-y border-white/8 bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              {item.statLabel ? (
                <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  {item.statLabel}
                </span>
              ) : null}
              <h2 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h2>
                <p className="mt-3 text-sm leading-7 text-brand-muted sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
