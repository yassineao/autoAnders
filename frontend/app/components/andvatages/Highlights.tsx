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
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${accents[index % accents.length]} p-6 shadow-brand-panel sm:p-8`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">
                {content.eyebrow}
              </p>
              <div className="mt-8">
                <p className="text-4xl font-semibold text-white sm:text-5xl">
                  {item.value}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-brand-grayLight sm:text-base">
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
