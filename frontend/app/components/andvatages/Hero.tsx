import Link from "next/link";
import BrandLogo from "../BrandLogo";
import type { AndvatagesContent, AndvatagesServices } from "./types";

type HeroProps = {
  locale: string;
  content: AndvatagesContent;
  services: AndvatagesServices;
  contactLabel: string;
};

export default function Hero({
  locale,
  content,
  services,
  contactLabel,
}: HeroProps) {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden  ">
          <div className="grid gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-petalPink sm:text-sm">
                {content.eyebrow}
              </p>
              <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
                {content.description}
              </p>

              {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${locale}/form`}
                  className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg border border-brand-petalPink bg-brand-petalPink/10 px-5 text-sm font-semibold text-brand-petalPink transition-all duration-300 hover:border-brand-purple hover:bg-brand-purple hover:text-white hover:shadow-lg hover:shadow-brand-purple/25"
                >
                  {contactLabel}
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg border border-brand-petalPink bg-brand-petalPink/10 px-5 text-sm font-semibold text-brand-petalPink transition-all duration-300 hover:border-brand-purple hover:bg-brand-purple hover:text-white hover:shadow-lg hover:shadow-brand-purple/25"
                >
                  {services.title}
                </Link>
              </div> */}
            </div>

            <div className="relative flex items-center justify-center sm:hidden lg:block hidden">
              <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.24),transparent_36%),radial-gradient(circle_at_70%_60%,rgba(37,99,235,0.2),transparent_38%)]" />
              <div className="relative flex h-full min-h-[280px] w-full items-center justify-center rounded-[1.75rem] border border-white/10 bg-black/20 p-8">
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
