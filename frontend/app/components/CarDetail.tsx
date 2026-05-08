"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Users,
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
    seats: "Sitze",
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
    seats: "Seats",
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
    seats: "Zitplaatsen",
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
    { label: text.seats, value: car.numberOfSeats, icon: Users },
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
      className="car-detail-overlay fixed inset-0 z-50 flex items-end justify-center bg-black/80 px-0 pt-8 text-white backdrop-blur-sm sm:items-center sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${car.brand} ${car.model}`}
      onMouseDown={onClose}
    >
      <section
        className="car-detail-shell relative grid max-h-[94dvh] w-full max-w-6xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-t-2xl border border-white/10 bg-zinc-950 shadow-2xl sm:max-h-[92vh] sm:rounded-lg lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-1"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={text.close}
          className="car-detail-close absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/75 text-white transition hover:bg-white hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="car-detail-media relative h-[30dvh] min-h-56 max-h-80 bg-black sm:h-auto sm:min-h-72 sm:max-h-none lg:min-h-[620px]">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="car-detail-media-caption absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-4 pr-16 sm:p-7">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold">
                {car.vehicle}
              </span>
              <span className="car-detail-condition rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
                {car.condition}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-black leading-tight sm:mt-4 sm:text-5xl">
              {car.brand} {car.model}
            </h2>
            <p className="mt-1 text-xl font-black text-emerald-400 sm:mt-2 sm:text-2xl">
              {formatPrice(car.price)}
            </p>
          </div>
        </div>

        <div className="car-detail-body min-h-0 overflow-y-auto p-4 sm:p-7">
          <div className="grid gap-2 min-[380px]:grid-cols-2 sm:gap-3">
            {specs.slice(0, 4).map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="car-detail-stat flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 min-[380px]:block sm:p-4"
              >
                <Icon className="h-5 w-5 shrink-0 text-red-500 min-[380px]:mb-2 sm:mb-3" />
                <div className="min-w-0">
                  <p className="car-detail-label text-[11px] font-semibold uppercase leading-tight text-zinc-500 sm:text-xs">
                    {label}
                  </p>
                  <p className="car-detail-value mt-0.5 break-words font-bold leading-snug text-zinc-100 min-[380px]:mt-1">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 sm:mt-6">
            <h3 className="car-detail-section-title text-lg font-black">{text.overview}</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {specs.slice(4).map(({ label, value }) => (
                <div
                  key={label}
                  className="car-detail-row grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-3 border-b border-white/10 py-3 text-sm"
                >
                  <span className="car-detail-label min-w-0 text-zinc-500">{label}</span>
                  <span className="car-detail-value min-w-0 break-words text-right font-semibold text-zinc-100">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="car-detail-section-title text-lg font-black">{text.highlights}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {localizedTags.map((tag) => (
                <span
                  key={tag}
                  className="car-detail-tag rounded-full bg-red-600/15 px-3 py-1.5 text-sm font-semibold text-red-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="car-detail-actions sticky bottom-0 -mx-4 mt-7 flex flex-col gap-3 border-t border-white/10 bg-zinc-950/95 px-4 pb-1 pt-4 backdrop-blur sm:static sm:mx-0 sm:flex-row sm:bg-transparent sm:px-0 sm:pb-0 sm:pt-5 sm:backdrop-blur-none">
           <div className="grid grid-cols-2 gap-3">
              <Link
              href={`/${locale}/form`}
              className="inline-flex h-12 flex-1 items-center justify-center rounded-lg bg-red-600 px-5 text-sm font-black text-white transition hover:bg-red-700"
            >
              {text.request}
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="car-detail-secondary inline-flex h-12 flex-1 items-center justify-center rounded-lg border border-white/10 px-5 text-sm font-black text-zinc-200 transition hover:bg-white/10"
            >
              {text.close}
            </button>


           </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}
