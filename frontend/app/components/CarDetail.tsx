"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  CarFront,
  CircleGauge,
  DoorOpen,
  Fuel,
  Gauge,
  Palette,
  Settings,
  Sparkles,
  X,
} from "lucide-react";
import type { Car } from "../types/Car";

type CarDetailProps = {
  car: Car;
  locale: "de" | "en" | "nl";
  onClose: () => void;
};

const formatPrice = (value: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value: number) => value.toLocaleString("nl-NL");

const copy = {
  de: {
    close: "Schliessen",
    overview: "Uebersicht",
    request: "Anfragen",
    highlights: "Highlights",
    year: "Baujahr",
    mileage: "Kilometer",
    transmission: "Getriebe",
    fuel: "Kraftstoff",
    colour: "Farbe",
    doors: "Tueren",
    condition: "Zustand",
    engine: "Hubraum",
    gears: "Gaenge",
    vat: "MwSt.",
    vehicle: "Fahrzeugart",
  },
  en: {
    close: "Close",
    overview: "Overview",
    request: "Request",
    highlights: "Highlights",
    year: "Year",
    mileage: "Mileage",
    transmission: "Transmission",
    fuel: "Fuel",
    colour: "Colour",
    doors: "Doors",
    condition: "Condition",
    engine: "Engine",
    gears: "Gears",
    vat: "VAT",
    vehicle: "Vehicle type",
  },
  nl: {
    close: "Sluiten",
    overview: "Overzicht",
    request: "Aanvragen",
    highlights: "Highlights",
    year: "Bouwjaar",
    mileage: "Kilometerstand",
    transmission: "Transmissie",
    fuel: "Brandstof",
    colour: "Kleur",
    doors: "Deuren",
    condition: "Staat",
    engine: "Cilinderinhoud",
    gears: "Versnellingen",
    vat: "BTW",
    vehicle: "Voertuigtype",
  },
};

export default function CarDetail({
  car,
  locale,
  onClose,
}: CarDetailProps) {
  const text = copy[locale];
  const localizedTags = car.tags[locale] ?? car.tags.en;
  const specs = [
    { label: text.year, value: car.year, icon: Calendar },
    { label: text.mileage, value: `${formatNumber(car.mileage)} km`, icon: Gauge },
    { label: text.transmission, value: car.transmission, icon: CircleGauge },
    { label: text.fuel, value: car.fuel, icon: Fuel },
    { label: text.colour, value: car.colour, icon: Palette },
    { label: text.doors, value: car.numberOfDoors, icon: DoorOpen },
    { label: text.condition, value: car.condition, icon: CarFront },
    { label: text.engine, value: `${car.engineCapacity} cc`, icon: Settings },
    { label: text.gears, value: car.numberOfGears, icon: Settings },
    { label: text.vat, value: car.vat, icon: Sparkles },
    { label: text.vehicle, value: car.vehicle, icon: CarFront },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 text-white backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${car.brand} ${car.model}`}
      onMouseDown={onClose}
    >
      <section
        className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-2xl lg:grid-cols-[1.1fr_0.9fr]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* <button
          type="button"
          onClick={onClose}
          aria-label={text.close}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/70 text-white transition hover:bg-white hover:text-black"
        >
          <X className="h-5 w-5" />
        </button> */}

        <div className="relative min-h-72 bg-black lg:min-h-[620px]">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="h-full max-h-[42vh] w-full object-cover lg:max-h-none"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-5 sm:p-7">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
                {car.vehicle}
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
                {car.condition}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              {car.brand} {car.model}
            </h2>
            <p className="mt-2 text-2xl font-black text-emerald-400">
              {formatPrice(car.price)}
            </p>
          </div>
        </div>

        <div className="overflow-y-auto p-5 sm:p-7">
          <div className="grid grid-cols-2 gap-3">
            {specs.slice(0, 4).map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <Icon className="mb-3 h-5 w-5 text-red-500" />
                <p className="text-xs font-semibold uppercase text-zinc-500">{label}</p>
                <p className="mt-1 truncate font-bold text-zinc-100">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-black">{text.overview}</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {specs.slice(4).map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-3 border-b border-white/10 py-3 text-sm"
                >
                  <span className="text-zinc-500">{label}</span>
                  <span className="min-w-0 truncate text-right font-semibold text-zinc-100">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-black">{text.highlights}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {localizedTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-red-600/15 px-3 py-1.5 text-sm font-semibold text-red-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row">
            <Link
              href={`/${locale}/form`}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-red-600 px-5 text-sm font-black text-white transition hover:bg-red-700"
            >
              {text.request}
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-lg border border-white/10 px-5 text-sm font-black text-zinc-200 transition hover:bg-white/10"
            >
              {text.close}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
