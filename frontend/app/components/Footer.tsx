import Link from "next/link";
import BrandLogo from "./BrandLogo";
import type { Locale, LocaleDictionary } from "../lib/i18n";

export default function Footer({
    locale,
    content,
}: {
    locale: Locale;
    content: LocaleDictionary["footer"];
}) {
    const localizedHref = (href: string) => `/${locale}${href}`;

    const sectionTitleClass =
        "text-xs font-semibold uppercase tracking-[0.18em] text-white/90";

    const sectionLinkClass =
        "block rounded-xl px-3 py-3 text-sm text-brand-muted transition-all duration-200 hover:bg-white/5 hover:text-white active:scale-[0.99] sm:px-0 sm:py-0 sm:hover:bg-transparent";

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-2 py-4 sm:px-2 sm:py-14">
                <div className=" shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-8">
                    {/* Top section */}
                    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-10">
                        {/* Brand */}
                        <div className="flex justify-center lg:col-span-4 sm:px-24 lg:block lg:px-0">
                            <div className="flex items-center justify-center gap-4 sm:gap-5 lg:justify-start">
                                <BrandLogo size="footer" />
                            
                            </div>
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:border-0 sm:bg-transparent sm:p-0">
                                <h3 className={sectionTitleClass}>{content.navigationTitle}</h3>
                                <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-3">
                                    {content.navigationLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={localizedHref(link.href)}
                                                className={sectionLinkClass}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:border-0 sm:bg-transparent sm:p-0">
                                <h3 className={sectionTitleClass}>{content.servicesTitle}</h3>
                                <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-3">
                                    {content.serviceLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={localizedHref(link.href)}
                                                className={sectionLinkClass}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 sm:border-0 sm:bg-transparent sm:p-0 sm:col-span-2 lg:col-span-1">
                                <h3 className={sectionTitleClass}>{content.contactTitle}</h3>
                                <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-3">
                                    {content.contactLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={localizedHref(link.href)}
                                                className={sectionLinkClass}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-8 border-t border-white/10 pt-5 sm:mt-10 sm:pt-6 ">
                        <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
                            <p className="text-center text-xs leading-5 text-brand-muted sm:text-left sm:text-sm">
                                &copy; {new Date().getFullYear()} Gloyoo. {content.rights}
                            </p>

                            <ul className="flex flex-wrap items-center justify-center gap-2 sm:justify-start lg:justify-end">
                                {content.legalLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={localizedHref(link.href)}
                                            className="inline-flex min-h-[40px] items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-brand-muted transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
