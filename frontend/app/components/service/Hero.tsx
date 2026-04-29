import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/app/lib/i18n";
import type { ServiceHero } from "@/app/types/Service";

type HeroProps = {
  content: ServiceHero;
  locale: Locale;
};

export default function Hero({ content, locale }: HeroProps) {
  return (
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 hidden justify-center md:flex lg:order-1 lg:justify-end">
            <Image
              src={content.imageUrl}
              alt={content.imageAlt}
              width={960}
              height={1200}
              priority
              className="max-h-[400px] w-full max-w-xl rounded-3xl object-cover lg:max-h-[800px] "
            />
          </div>

          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:max-w-3xl lg:items-start lg:text-left">
           

            <h1 className="my-6 text-pretty text-4xl font-bold text-white lg:text-6xl xl:text-7xl">
              {content.title}
            </h1>

            <p className="mb-8 max-w-xl text-base text-[#A1A1AA] lg:text-2xl">
              {content.description}
            </p>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link
                href={`/${locale}/form`}
                className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-900/90 sm:w-auto"
              >
                {content.primaryCta}
              </Link>
              {/* <button
                type="button"
                className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-input bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-800 sm:w-auto text-black "
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
              </button> */}
            </div>
          </div>
        </div>
      </section>
  );
}
