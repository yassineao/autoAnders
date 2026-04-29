"use client"
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Calendar, Fuel, Gauge, Search, SlidersHorizontal } from "lucide-react";
import type { AutoCatalogueProps } from "../types/Car";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export default function AutoCatalogue({
  cars,
  locale,
  title,
  subtitle,
  labels,
  showMoreButton = true,
  onViewDetails,
}: AutoCatalogueProps) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [maxPrice, setMaxPrice] = useState("All");

  const brands = useMemo(() => {
    return ["All", ...Array.from(new Set(cars.map((car) => car.brand)))];
  }, [cars]);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const query = `${car.brand} ${car.model}`.toLowerCase();
      const matchesSearch = query.includes(search.toLowerCase());
      const matchesBrand = brand === "All" || car.brand === brand;
      const matchesPrice = maxPrice === "All" || car.price <= Number(maxPrice);

      return matchesSearch && matchesBrand && matchesPrice;
    });
  }, [cars, search, brand, maxPrice]);

  return (
    <section className="w-full bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold text-red-500">{subtitle}</p>
            <h2 className="text-4xl font-black">{title}</h2>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-zinc-400">
              {filteredCars.length} {labels.vehiclesFound}
            </p>
            {showMoreButton ? (
              <Link
                href={`/${locale}/Catalogue`}
                className="rounded-xl bg-red-600 px-8 py-3 font-bold text-white transition hover:bg-red-700"
              >
                {labels.moreButton}
              </Link>
            ) : null}
          </div>
          
        </div>
     

        <div className="mb-10 grid gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-4 md:grid-cols-4">
          <label className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-zinc-950 py-3 pl-11 pr-4 outline-none focus:border-red-500"
              placeholder={labels.searchPlaceholder}
            />
          </label>

          <select
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-red-500"
          >
            {brands.map((brandOption) => (
              <option key={brandOption} value={brandOption}>
                {brandOption === "All" ? labels.allBrands : brandOption}
              </option>
            ))}
          </select>

          <select
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-red-500"
          >
            <option value="All">{labels.maxPrice}</option>
            <option value="15000">€15,000</option>
            <option value="25000">€25,000</option>
            <option value="40000">€40,000</option>
          </select>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-bold hover:bg-red-700">
            <SlidersHorizontal className="h-4 w-4" />
            {labels.searchButton}
          </button>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => {
            const localizedTags = car.tags[locale] ?? car.tags.en;

            return (
              <article
                key={car.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-xl transition hover:-translate-y-1"
              >
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="h-56 w-full object-cover"
                />

              <div className="p-5">
                <div className="mb-3 flex justify-between gap-4">
                  <h3 className="text-xl font-black">
                    {car.brand} {car.model}
                  </h3>
                  <span className="font-bold text-green-700">
                    {formatPrice(car.price)}
                  </span>
                </div>

                <div className="mb-4 grid grid-cols-2 gap-3 text-sm text-zinc-400">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {car.year}
                  </span>

                  <span className="flex items-center gap-2">
                    <Gauge className="h-4 w-4" />
                    {car.km.toLocaleString("nl-NL")} km
                  </span>

                  <span>{car.transmission}</span>

                  <span className="flex items-center gap-2">
                    <Fuel className="h-4 w-4" />
                    {car.fuel}
                  </span>
                </div>

                <div className="mb-5 flex flex-wrap gap-2 text-xs text-zinc-300">
                  {localizedTags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onViewDetails?.(car)}
                  className="w-full rounded-xl bg-white py-3 font-bold text-black hover:bg-zinc-200"
                >
                  {labels.viewDetails}
                </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
