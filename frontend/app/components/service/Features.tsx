import type { LocaleDictionary } from "../../lib/i18n";

type FeaturesProps = {
  content: LocaleDictionary["servicePage"]["features"];
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-4 w-4 shrink-0 text-sky-400"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Features({ content }: FeaturesProps) {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-32 lg:px-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4 sm:gap-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:text-xs">
            {content.badge}
          </div>
          <h2 className="mb-1 text-center text-2xl font-semibold leading-tight text-balance sm:text-3xl lg:mb-2 lg:text-4xl">
            {content.title}
          </h2>
          <p className="max-w-2xl text-center text-sm leading-7 text-brand-petalPink sm:text-base lg:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center sm:mt-14">
          {content.sections.map((section, index) => (
            <div key={section.title} className="w-full">
              <div
                data-orientation="horizontal"
                role="none"
                className={`hidden h-[1px] w-full shrink-0 bg-border lg:block ${
                  index === 0 ? "mb-12" : "my-16"
                }`}
              />
              <div className="mx-auto w-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:grid lg:grid-cols-4 lg:gap-x-10 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
                <h3 className="mb-5 text-xl font-semibold leading-tight text-white sm:text-2xl lg:mb-0 lg:text-3xl">
                  {section.title}
                </h3>
                <ul className="col-span-3 grid gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-x-10">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-white/[0.04] p-3 text-sm leading-6 text-zinc-300 sm:text-base lg:rounded-none lg:bg-transparent lg:p-0"
                    >
                      <CheckIcon />
                      <span className="min-w-0">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
