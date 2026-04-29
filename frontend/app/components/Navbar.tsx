import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import MobileNav from "./MobileNav";
import LocaleSwitchLink from "./LocaleSwitchLink";
import { type Locale, type LocaleDictionary } from "../lib/i18n";

// Load Space Grotesk for logo
const logoFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function Navbar({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleDictionary["nav"];
}) {
  const localizedHref = (href: string) => `/${locale}${href}`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-brand-navyDark/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label={content.ariaLabel}
          className="flex h-16 items-center justify-between lg:h-20"
        >
          {/* Logo */}
          <Link
            href={`/${locale}#home`}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label={content.homeAriaLabel}
          >
            <div className="relative flex h-10 items-center gap-2.5 overflow-hidden    px-4  sm:h-11 sm:px-5 lg:h-12">
              <Image
                src="/Logo.png"
                alt="Autoanders Logo"
                width={288}
                height={70}
                quality={90}
                priority
                className="h-6 w-auto sm:h-7 lg:h-8"
              />
              <span 
                className={`${logoFont.className} text-xs font-bold tracking-widest text-white sm:text-sm lg:text-base`}
              >
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {content.items.map((item, itemIndex) => (
              <li key={`${item.href}-${item.label}-${itemIndex}`} className="group relative">
                {/* here auf Link wenn funktioniert */}
                <div
                  className="inline-flex h-10 items-center gap-1 rounded-lg px-4 text-sm font-medium text-brand-graySoft transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                  {item.children?.length && (
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m19 9-7 7-7-7" 
                      />
                    </svg>
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.children?.length && (
                  <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 translate-y-2 rounded-xl border border-white/10 bg-brand-navyDark/95 p-1.5 opacity-0 shadow-xl backdrop-blur-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="space-y-0.5">
                      {item.children.map((child, childIndex) => (
                        <li key={`${child.href}-${child.label}-${childIndex}`}>
                          <Link
                            href={localizedHref(child.href)}
                            className="block rounded-lg px-3 py-2.5 text-sm text-brand-graySoft transition-colors hover:bg-white/8 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Language Switcher */}
            <LocaleSwitchLink
              currentLocale={locale}
              label={content.switchLabel}
              className="inline-flex h-10 items-center rounded-lg px-4 text-sm font-medium text-brand-graySoft transition-colors hover:bg-white/5 hover:text-white"
            />

            {/* CTA Button */}
            <Link
              href={`/${locale}/form`}
              className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg border border-brand-petalPink bg-brand-petalPink/10 px-5 text-sm font-semibold text-brand-petalPink transition-all duration-300 hover:border-brand-purple hover:bg-brand-purple hover:text-white hover:shadow-lg hover:shadow-brand-purple/25"
            >
              <span className="relative z-10">{content.contactLabel}</span>
            </Link>
          </div>

          <div className="lg:hidden">
            <MobileNav locale={locale} content={content} />
          </div>
        </nav>
      </div>
    </header>
  );
}
