"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { locales, type Locale } from "../lib/i18n";

type LocaleSwitchLinkProps = {
  currentLocale: Locale;
  label: string;
  className: string;
};

const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  nl: "Nederlands",
};

export default function LocaleSwitchLink({
  currentLocale,
  label,
  className,
}: LocaleSwitchLinkProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const basePath = pathname?.replace(/^\/(de|en|nl)(?=\/|$)/, "") || "/";
  const normalizedPath = basePath === "" ? "/" : basePath;

  const localeLinks = locales.map((locale) => ({
    locale,
    href: `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`,
  }));

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className={`${className} gap-1.5`}
      >
        <span>{currentLocale.toUpperCase()}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        id={menuId}
        className={`absolute right-0 top-full z-[60] mt-2 min-w-[11rem] origin-top-right transition-all duration-200 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0F]/95 p-1.5 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl">
          <ul className="space-y-1">
            {localeLinks.map(({ locale, href }) => (
              <li key={locale}>
                <Link
                  href={href}
                  aria-current={locale === currentLocale ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    locale === currentLocale
                      ? "bg-white/8 text-white"
                      : "text-brand-muted hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <span className="font-semibold tracking-wide">{locale.toUpperCase()}</span>
                  <span
                    className={`text-xs ${
                      locale === currentLocale ? "text-brand-muted" : "text-brand-grayMuted"
                    }`}
                  >
                    {localeLabels[locale]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
