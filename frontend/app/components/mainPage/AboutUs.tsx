import type { LocaleDictionary } from "../../lib/i18n";

export default function AboutUs({
    content, locale
}: {
    content: LocaleDictionary["home"]["about"];
    locale: string;
}) {
    return (
        <section id="about-us" className="scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24" aria-labelledby="about-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="order-2 overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-xl lg:order-1">
                        <div className="relative h-72 w-full overflow-hidden bg-black sm:h-80 lg:h-[520px]">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "url('/Hero2.jpg') center center / cover no-repeat",
                                }}
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent"
                            />
                            <div className="absolute bottom-5 left-5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white">
                                AutoAnders
                            </div>
                        </div>
                    </div>

                    <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-xs font-semibold text-red-400">
                            {content.eyebrow}
                        </div>

                        <h2 id="about-heading" className="my-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            {content.title}
                        </h2>

                        <p className="max-w-xl text-base leading-7 text-brand-muted sm:text-lg sm:leading-8 lg:text-xl">
                            {content.paragraphs[0]}
                        </p>
                        <p className="mt-4 max-w-xl text-base leading-7 text-brand-muted sm:text-lg sm:leading-8 lg:text-xl">
                            {content.paragraphs[1]}
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                            <a
                                href={`/${locale}/form`}
                                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                            >
                                {content.cta}
                            </a>
                            <a
                                className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                                href={`/${locale}/about`}
                            >
                                {content.more}
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
                </div>
            </div>
        </section>
    );
}
