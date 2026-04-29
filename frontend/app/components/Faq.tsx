import Link from "next/link";
import type { FaqContent } from "../types/LocaleDictionary";

type FaqProps = {
  content: FaqContent;
  items?: FaqContent["items"];
  ctaHref?: string;
};

export default function Faq({ content, items, ctaHref }: FaqProps) {
  const faqItems = items ?? content.items;

  return (
    <section className="w-full bg-black pt-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
       
          <h2 className="mt-5 text-balance text-2xl font-semibold text-white sm:mt-6 sm:text-3xl lg:text-4xl">
            {content.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300 sm:mt-4 sm:leading-7 lg:text-base">
            {content.description}
          </p>
        </div>

        <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4 px-2">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-brand-panel transition-colors open:bg-white/[0.05] sm:p-5 lg:p-6 "
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-start justify-between gap-3 text-left text-base font-medium leading-6 text-white [&::-webkit-details-marker]:hidden sm:min-h-14 sm:items-center sm:gap-4 sm:text-lg">
                <span className="flex-1 pr-2">{item.question}</span>
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl leading-none text-brand-petalPink transition-transform group-open:rotate-45 sm:mt-0 sm:h-10 sm:w-10 sm:text-2xl">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl pr-1 text-sm leading-6 text-brand-gray sm:mt-4 sm:leading-7 lg:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {ctaHref ? (
          <div className="mt-8 flex justify-center sm:mt-10">
            
            <Link
              href={ctaHref}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-brand-petalPink px-5 py-3 text-center text-sm font-semibold text-brand-petalPink transition-colors hover:border-brand-teal hover:text-white"
            >
              {content.ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
