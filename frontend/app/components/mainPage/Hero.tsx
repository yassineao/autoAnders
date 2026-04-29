
import type { LocaleDictionary } from "../../lib/i18n";

export default function Hero({
  content,
}: {
  content: LocaleDictionary["home"]["hero"];
}) {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen scroll-mt-24 px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-26"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat brightness-50 " />


      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-1 mt-10">
          <div className="flex max-w-3xl flex-col items-start text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-graySoft">
              {content.eyebrow}
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              {content.titleFirst}
              <span className="block ">
                {content.titleSecond}
              </span>
            </h1>

            <div className="mb-6 h-1 w-20 rounded bg-gradient-to-r from-brand-purple to-brand-teal shadow-brand-glow sm:w-24" />

            <p className="max-w-xl text-base font-bold leading-7 text-brand-graySoft sm:text-lg sm:leading-8 lg:text-xl">
              {content.description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/form"
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-gradient-to-r from-brand-purple to-brand-teal px-5 py-2 text-sm font-medium text-white shadow-brand-cta transition-all hover:brightness-110 sm:w-auto"
              >
                {content.primaryCta}
              </a>

              <a
                href="#services"
                className="inline-flex h-11 w-full items-center justify-center rounded-md border border-white/12 bg-white/6 px-5 py-2 text-sm font-medium text-white transition-all hover:border-brand-petalPink/40 hover:bg-brand-petalPink/12 sm:w-auto "
              >
                {content.secondaryCta}
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
                  className="ml-2 size-4"
                >
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[320px] justify-center  lg:max-w-[520px] lg:ml-4">

          </div>
        </div>
      </div>
    </section>
  );
}
