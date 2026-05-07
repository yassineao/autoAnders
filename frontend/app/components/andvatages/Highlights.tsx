import type { AndvatagesContent } from "./types";

const accents = [
  "from-brand-purple/20 to-brand-teal/10",
  "from-brand-teal/20 to-brand-petalPink/10",
  "from-brand-petalPink/20 to-brand-purple/10",
] as const;

type HighlightsProps = {
  content: AndvatagesContent;
};

export default function Highlights({
  content,
}: HighlightsProps) {
  return (
    <section className="px-3 py-6 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-3 sm:gap-5 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${accents[index % accents.length]} p-4 shadow-brand-panel sm:rounded-[2rem] sm:p-8`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal sm:text-sm sm:tracking-[0.22em]">
                {content.eyebrow}
              </p>
              <div className="mt-4 sm:mt-8">
                <p className="text-3xl font-semibold leading-none text-white sm:text-5xl">
                  {item.value}
                </p>
                <h2 className="mt-2 text-xl font-semibold leading-tight text-white sm:mt-3 sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-brand-grayLight sm:mt-5 sm:text-base sm:leading-7">
                  {item.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
