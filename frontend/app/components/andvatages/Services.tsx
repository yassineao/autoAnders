import type { AndvatagesServices } from "./types";

type ServicesProps = {
  services: AndvatagesServices;
};

export default function Services({
  services,
}: ServicesProps) {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gray sm:text-sm">
              {services.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              {services.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-muted sm:text-base sm:leading-8">
              {services.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 "
              >
                <h3 className="text-lg font-semibold text-brand-gray">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
