import Image from "next/image";
import type { LocaleDictionary } from "../../lib/i18n";

export default function Services({
    content,
}: {
    content: LocaleDictionary["home"]["services"];
}) {
    const serviceArt = [
        { src: "/new-car.png", alt: "New car" },
        { src: "/loan.png", alt: "Loan" },
        { src: "/deal.png", alt: "Deal" },
    ];

    return (
        <div
            id="services"
            className="flex flex-1 flex-col items-center justify-center overflow-hidden bg-gray lg:py-16"
        >
            <section
                id="services-list"
                className="mx-auto w-full max-w-7xl"
                aria-labelledby="services-heading"
            >
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:gap-6">
                        {/* <div className="inline-flex items-center rounded-full border border-brand-primary/25 bg-white/[0.04] px-3 py-1 text-xs font-semibold tracking-wide text-brand-muted">
                            {content.eyebrow}
                        </div> */}

                        <h2
                            id="services-heading"
                            className="text-balance text-3xl font-medium text-white sm:text-4xl lg:text-5xl"
                        >
                            {content.title}
                        </h2>

                        <p className="max-w-2xl text-sm leading-7 text-brand-muted sm:text-base sm:leading-8 lg:text-lg">
                            {content.description}
                        </p>
                    </div>

                    <div className="mx-auto mt-10 grid max-w-6xl justify-items-center gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-3 lg:gap-8">
                        {content.items.map((item, index) => {
                            const art = serviceArt[index] ?? serviceArt[0];

                            return (
                                <article
                                    key={item.title}
                                    className="group w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-brand-soft backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:bg-white/[0.07]"
                                >
                                    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden sm:h-56">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-black to-brand-secondary/25 transition-opacity duration-300 group-hover:opacity-90" />

                                        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-primary/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                                        <div className="absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-brand-secondary/20 blur-3xl" />

                                        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

                                        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_48%,transparent_100%)] opacity-25" />

                                        <Image
                                            src={art.src}
                                            alt={art.alt}
                                            className="absolute z-10 h-auto w-36 max-w-[70%] object-contain invert transition duration-300 group-hover:scale-105 sm:w-40"
                                            width={144}
                                            height={144}
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="p-5 text-center sm:p-6">
                                        <h3 className="mb-2 text-lg font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm leading-7 text-brand-muted sm:text-base">
                                            {item.description}
                                        </p>

                                        <a
                                            href="#about-us"
                                            className="mt-4 inline-flex items-center justify-center gap-2 font-medium text-brand-primary transition-colors hover:text-brand-secondary"
                                        >
                                            {content.cta}
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
                                                className="w-4"
                                            >
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}