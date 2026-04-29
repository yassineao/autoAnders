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
      className="overflow-hidden bg-black"
      aria-labelledby="advantages-heading"
    >
      <div className="flex justify-center pt-8">
                <Image
            src="/LogoBG.png"
            alt="Autoanders Logo"
            width={2172}
            height={724}
            className="h-30 w-auto"
            />
      </div>

      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
            {content.eyebrow}
          </p>

          <h2
            id="advantages-heading"
            className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {content.items.map((item, index) => {
            const Icon = icons[index] ?? Eye;

            return (
              <article
                key={item.title}
                className="group relative min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-brand-soft backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:bg-white/[0.07] sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-primary/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

                <div className="relative z-10 flex h-full flex-col items-center justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-primary/25 bg-black/40 text-brand-primary shadow-lg shadow-brand-primary/10 transition duration-300 group-hover:border-brand-secondary/60 group-hover:text-brand-secondary">
                    <Icon
                      aria-hidden="true"
                      className="h-7 w-7"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="text-4xl font-bold tracking-tight text-brand-primary sm:text-5xl lg:text-6xl">
                      {item.value}
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mx-auto max-w-xs text-sm leading-6 text-brand-muted sm:text-base">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}