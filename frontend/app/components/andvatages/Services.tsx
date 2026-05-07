import type { AndvatagesServices } from "./types";

type ServicesProps = {
  services: AndvatagesServices;
};

export default function Services({
  services,
}: ServicesProps) {
  return (
    <section className="px-3 py-8 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4 sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gray sm:text-sm sm:tracking-[0.28em]">
              {services.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-xl font-semibold leading-tight text-white sm:mt-4 sm:text-3xl lg:text-4xl">
              {services.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted sm:mt-4 sm:text-base sm:leading-8">
              {services.description}
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
            {services.items.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.5rem] sm:p-5"
              >
                <h3 className="text-base font-semibold leading-tight text-brand-gray sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted sm:mt-3 sm:text-base sm:leading-7">
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
