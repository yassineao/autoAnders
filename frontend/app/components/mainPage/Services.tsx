import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale, LocaleDictionary } from "../../lib/i18n";

export default function Services({
    content,
    locale,
}: {
    content: LocaleDictionary["home"]["services"];
    locale: Locale;
}) {
    const serviceArt = [
        { src: "/new-car.png", alt: "New car" },
        { src: "/loan.png", alt: "Loan" },
        { src: "/deal.png", alt: "Deal" },
    ];
    const serviceHrefs = [
        `/${locale}/Catalogue`,
        `/${locale}/form`,
        `/${locale}/Sell`,
    ];

    return (
        <div
            id="services"
            className="services-section flex flex-1 flex-col items-center justify-center overflow-hidden bg-black py-10 sm:py-14 lg:py-20"
        >
            <section
                id="services-list"
                className="mx-auto w-full max-w-7xl"
                aria-labelledby="services-heading"
            >
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-500 sm:text-sm">
                                {content.eyebrow}
                            </p>

                            <h2
                                id="services-heading"
                                className="services-heading mt-3  text-3xl font-black leading-[1.05] text-white sm:text-4xl lg:text-5xl"
                            >
                                {content.title}
                            </h2>
                        </div>

                        <p className="services-description mt-10 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-8 lg:ml-auto lg:text-lg">
                            {content.description}
                        </p>
                    </div>

                    <div className="mt-8 grid gap-3 lg:hidden">
                        {content.items.map((item, index) => {
                            const art = serviceArt[index] ?? serviceArt[0];
                            const href = serviceHrefs[index] ?? `/${locale}/Catalogue`;

                            return (
                                <Link
                                    key={item.title}
                                    href={href}
                                    className="service-card relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 p-4 shadow-xl shadow-black/30"
                                >
                                    <div className="service-card-glow absolute -right-8 -top-8 h-28 w-28 rounded-full bg-red-600/15 blur-3xl" />

                                    <div className="relative flex gap-4">
                                        <div className="service-icon-box flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-red-500/30 bg-red-600/10">
                                            <Image
                                                src={art.src}
                                                alt={art.alt}
                                                className="service-icon h-auto w-8 object-contain invert"
                                                width={64}
                                                height={64}
                                                loading="lazy"
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="mb-2 flex items-center justify-between gap-3">
                                                <span className="service-index text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                                                    0{index + 1}
                                                </span>
                                                <span className="service-divider h-px flex-1 bg-white/10" />
                                            </div>

                                            <h3 className="service-title text-xl font-black leading-tight text-white">
                                                {item.title}
                                            </h3>

                                            <p className="service-copy mt-2 text-sm leading-6 text-zinc-400">
                                                {item.description}
                                            </p>

                                            <span
                                                className="mt-4 inline-flex h-10 items-center gap-2 rounded-lg font-bold text-red-500 transition-colors hover:text-white"
                                            >
                                                {content.cta}
                                                <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mx-auto mt-12 hidden max-w-6xl justify-items-center gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
                        {content.items.map((item, index) => {
                            const art = serviceArt[index] ?? serviceArt[0];
                            const href = serviceHrefs[index] ?? `/${locale}/Catalogue`;

                            return (
                                <Link
                                    key={item.title}
                                    href={href}
                                    className="service-card group w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-zinc-900"
                                >
                                    <div className="service-art-panel relative flex h-56 w-full items-center justify-center overflow-hidden">
                                        <div className="service-art-gradient absolute inset-0 bg-gradient-to-br from-red-600/20 via-black to-white/10 transition-opacity duration-300 group-hover:opacity-90" />
                                        <div className="service-card-glow absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-600/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                                        <div className="service-top-line absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />

                                        <Image
                                            src={art.src}
                                            alt={art.alt}
                                            className="service-icon relative z-10 h-auto w-40 max-w-[70%] object-contain invert transition duration-300 group-hover:scale-105"
                                            width={144}
                                            height={144}
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-5 flex items-center justify-between gap-4">
                                            <span className="service-index text-xs font-black uppercase tracking-[0.25em] text-white/25">
                                                0{index + 1}
                                            </span>
                                            <span className="service-divider h-px flex-1 bg-white/10" />
                                        </div>

                                        <h3 className="service-title text-2xl font-black leading-tight text-white">
                                            {item.title}
                                        </h3>

                                        <p className="service-copy mt-3 text-base leading-7 text-zinc-400">
                                            {item.description}
                                        </p>

                                        <span
                                            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg font-bold text-red-500 transition-colors hover:text-white"
                                        >
                                            {content.cta}
                                            <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
