
import Image from "next/image";
import Link from "next/link";
import type { Locale, LocaleDictionary } from "../../lib/i18n";

export default function Hero({
  content,
  locale,
}: {
  content: LocaleDictionary["home"]["hero"];
  locale: Locale;
}) {
  return (
    <section
      id="home"
      className="hero-section relative z-10 min-h-screen scroll-mt-24 overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-28"
    >
      <div className="hero-photo absolute inset-0 -z-10 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat" />
      <div className="hero-shade absolute inset-0 -z-10 bg-black/55" />
      <div className="hero-side-gradient absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.78)_42%,rgba(0,0,0,0.24)_100%)]" />
      <div className="hero-bottom-gradient absolute inset-x-0 bottom-0 -z-10 h-44 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#020202_88%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mt-8 grid min-h-[calc(100vh-11rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex max-w-3xl flex-col items-start text-left">
            {/* <Image
              src="/Logo.png"
              alt="AutoAnders in- & verkoop"
              width={288}
              height={70}
              priority
              className="mb-8 h-auto w-52 sm:w-64"
            /> */}

            <p className="hero-eyebrow mb-4 border-l-2 border-red-600 pl-4 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-200">
              {content.eyebrow}
            </p>
            <h1 className="hero-title max-w-4xl text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {content.titleFirst}
              <span className="block text-red-500">
                {content.titleSecond}
              </span>
            </h1>

            <div className="my-7 h-1 w-24 rounded-full bg-red-600 shadow-[0_0_28px_rgba(220,38,38,0.5)] sm:w-32" />

            <p className="hero-description max-w-2xl text-base font-semibold leading-7 text-zinc-200 sm:text-lg sm:leading-8 lg:text-xl">
              {content.description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={`/${locale}/Catalogue`}
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-red-600 px-6 py-2 text-sm font-bold text-white shadow-[0_18px_40px_rgba(220,38,38,0.3)] transition-all hover:bg-red-700 sm:w-auto"
              >
                {content.primaryCta}
              </Link>

              <Link
                href={`/${locale}/Sell`}
                className="hero-secondary-cta inline-flex h-12 w-full items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-2 text-sm font-bold text-white backdrop-blur transition-all hover:border-red-500/50 hover:bg-red-600/15 sm:w-auto "
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
              </Link>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[560px] justify-center lg:flex">
            <div className="hero-logo-accent absolute -left-10 top-8 h-40 w-1 bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.75)]" />
            <div className="relative w-full py-16">
              <div className="hero-logo-frame absolute inset-y-6 left-8 right-0 border-y border-white/15" />
              <Image
                src="/LogoBG.png"
                alt="AutoAnders"
                width={2880}
                height={890}
                priority
                className="hero-logo relative z-10 h-auto w-full drop-shadow-[0_28px_70px_rgba(0,0,0,0.75)]"
              />
              <div className="absolute bottom-10 right-8 h-1 w-40 bg-red-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
