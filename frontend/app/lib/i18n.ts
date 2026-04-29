import type { LocaleDictionary } from "../types/LocaleDictionary";
import { deDictionary } from "./i18n/locales/de";
import { enDictionary } from "./i18n/locales/en";
import { nlDictionary } from "./i18n/locales/nl";

export const locales = ["de", "en", "nl"] as const;

export type Locale = (typeof locales)[number];
export type { LocaleDictionary };

export const dictionaries: Record<Locale, LocaleDictionary> = {
  de: deDictionary,
  en: enDictionary,
  nl: nlDictionary, 
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locales.find((candidate) => candidate !== locale) ?? locale;
}

export function getLanguageTag(locale: Locale | "nl"): string {
  switch (locale) {
    case "de":
      return "de-DE";
    case "nl":
      return "nl-NL";
    case "en":
    default:
      return "en-US";
  }
}
