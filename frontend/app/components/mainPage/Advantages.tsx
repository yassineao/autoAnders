import Image from "next/image";
import { Clock3, Eye, MessagesSquare } from "lucide-react";
import type { LocaleDictionary } from "../../lib/i18n";

export default function Advantages({
  content,
}: {
  content: LocaleDictionary["home"]["advantages"];
}) {
  const icons = [Eye, MessagesSquare, Clock3];

  return (
    <section
      id="advantages"
      className="overflow-hidden bg-black "
      aria-labelledby="advantages-heading"
    >
      <div className="flex justify-center px-4 pt-6 sm:pt-8">
        <Image
          src="/LogoBG.png"
          alt="Autoanders Logo"
          width={2172}
          height={724}
          className="h-auto w-40 sm:w-56 lg:w-64"
        />
      </div>

      <div className="container mx-auto px-3 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted sm:text-sm">
            {content.eyebrow}
          </p>

          <h2
            id="advantages-heading"
            className="mt-3 text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-brand-muted sm:mt-4 sm:text-lg sm:leading-7">
            {content.description}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-14 sm:gap-5 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {content.items.map((item, index) => {
            const Icon = icons[index] ?? Eye;

            return (
              <article
                key={item.title}
                className="group relative min-h-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center shadow-brand-soft backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:bg-white/[0.07] sm:min-h-72 sm:rounded-3xl sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-primary/20 blur-3xl transition-transform duration-500 group-hover:scale-125 sm:-right-12 sm:-top-12 sm:h-36 sm:w-36" />

                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

                <div className="relative z-10 flex h-full flex-row items-center gap-4 text-left sm:flex-col sm:justify-between sm:gap-6 sm:text-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-primary/25 bg-black/40 text-brand-primary shadow-lg shadow-brand-primary/10 transition duration-300 group-hover:border-brand-secondary/60 group-hover:text-brand-secondary sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6 sm:h-7 sm:w-7"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1 sm:space-y-2">
                    <p className="text-3xl font-bold tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
                      {item.value}
                    </p>

                    <h3 className="text-lg font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-5 text-brand-muted sm:mx-auto sm:max-w-xs sm:leading-6 md:text-base">
                      {item.subtitle}
                    </p>
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
