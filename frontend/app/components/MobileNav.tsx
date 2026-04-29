"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import LocaleSwitchLink from "./LocaleSwitchLink";
import { type Locale, type LocaleDictionary } from "../lib/i18n";

type MobileNavProps = {
  locale: Locale;
  content: LocaleDictionary["nav"];
};

export default function MobileNav({ locale, content }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const localizedHref = (href: string) => `/${locale}${href}`;
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <div className="flex items-center gap-2">
        <LocaleSwitchLink
          currentLocale={locale}
          label={content.switchLabel}
          className="inline-flex h-10 items-center rounded-full border border-white/10 bg-white/5 px-3 text-sm font-medium text-brand-muted transition-colors hover:border-white/20 hover:text-white"
        />

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={content.mobileMenuLabel}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-white transition-all duration-300 ${
            open
              ? "border-brand-petalPink/50 bg-brand-petalPink/15 shadow-lg shadow-brand-purple/20"
              : "border-white/12 bg-white/6 hover:border-white/20 hover:bg-white/10"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            {open ? (
              <>
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 top-16 z-40 bg-brand-navyDark/45 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id={menuId}
        className={`absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(24rem,calc(100vw-2rem))] origin-top-right transition-all duration-300 ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-brand-navyDark/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/5 backdrop-blur-xl">
          <div className="border-b border-white/8 bg-white/[0.03] px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-grayMuted">
              {content.mobileMenuLabel}
            </p>
          </div>

          <div className="max-h-[calc(100vh-7rem)] overflow-y-auto p-3">
            <ul className="space-y-2">
              {content.items.map((item) => (
                <li
                  key={item.href}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-2"
                >
                  <Link
                    href={localizedHref(item.href)}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/6"
                  >
                    <span>{item.label}</span>
                    <span className="text-brand-grayMuted transition-colors group-hover:text-brand-petalPink">
                      {item.children?.length ? (
                        <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs font-semibold text-brand-muted">
                          {item.children.length}
                        </span>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="size-4"
                        >
                          <path d="m9 6 6 6-6 6" />
                        </svg>
                      )}
                    </span>
                  </Link>

                  {item.children?.length ? (
                    <div className="mt-2 rounded-xl border border-white/6 bg-black/20 p-2">
                      <ul className="space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={localizedHref(child.href)}
                              onClick={closeMenu}
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-brand-muted transition-colors hover:bg-white/6 hover:text-white"
                            >
                              <span>{child.label}</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="size-3.5"
                              >
                                <path d="m9 6 6 6-6 6" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/form`}
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-purple to-brand-teal px-4 py-3 text-sm font-semibold text-white shadow-brand-cta transition-all duration-300 hover:brightness-110"
            >
              {content.contactLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
