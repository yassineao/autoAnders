"use client";

import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import Link from "next/link";
import {
  Calendar,
  CarFront,
  CircleGauge,
  DoorOpen,
  Fuel,
  Gauge,
  Palette,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import CarDetail from "./CarDetail";
import type { AutoCatalogueProps, Car } from "../types/Car";

const allValue = "All";

type FilterState = {
  search: string;
  brand: string;
  transmission: string;
  firstRegistrationDate: string;
  maxMileage: string;
  maxPrice: string;
  colour: string;
  fuel: string;
  engineCapacity: string;
  numberOfDoors: string;
  condition: string;
  numberOfGears: string;
  vat: string;
  vehicle: string;
};

type SelectFilterProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  formatOption?: (value: string) => string;
};

const initialFilters: FilterState = {
  search: "",
  brand: allValue,
  transmission: allValue,
  firstRegistrationDate: allValue,
  maxMileage: allValue,
  maxPrice: allValue,
  colour: allValue,
  fuel: allValue,
  engineCapacity: allValue,
  numberOfDoors: allValue,
  condition: allValue,
  numberOfGears: allValue,
  vat: allValue,
  vehicle: allValue,
};

const inputClass =
  "rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 outline-none focus:border-red-500";


const formatPrice = (value: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value: number) => value.toLocaleString("nl-NL");

const getUniqueOptions = (values: Array<string | number>) =>
  Array.from(new Set(values.map(String))).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }),
  );

const selectOptions = (values: Array<string | number>) => [
  allValue,
  ...getUniqueOptions(values),
];

const updateFilter =
  (setFilters: Dispatch<SetStateAction<FilterState>>, key: keyof FilterState) =>
    (value: string) => {
      setFilters((current) => ({ ...current, [key]: value }));
    };

function SelectFilter({
  label,
  value,
  options,
  onChange,
  formatOption,
}: SelectFilterProps) {
  return (
    <select
      aria-label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={inputClass}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option === allValue ? label : formatOption?.(option) ?? option}
        </option>
      ))}
    </select>
  );
}

function carMatchesFilters(car: Car, filters: FilterState, locale: "de" | "en" | "nl") {
  const localizedTags = car.tags[locale] ?? car.tags.en;
  const query = [
    car.brand,
    car.model,
    car.transmission,
    car.firstRegistrationDate,
    car.mileage,
    car.price,
    car.colour,
    car.fuel,
    car.engineCapacity,
    car.numberOfDoors,
    car.condition,
    car.numberOfGears,
    car.vat,
    car.vehicle,
    ...localizedTags,
  ]
    .join(" ")
    .toLowerCase();

  return (
    query.includes(filters.search.toLowerCase()) &&
    (filters.brand === allValue || car.brand === filters.brand) &&
    (filters.transmission === allValue || car.transmission === filters.transmission) &&
    (filters.firstRegistrationDate === allValue ||
      car.firstRegistrationDate === filters.firstRegistrationDate) &&
    (filters.maxMileage === allValue || car.mileage <= Number(filters.maxMileage)) &&
    (filters.maxPrice === allValue || car.price <= Number(filters.maxPrice)) &&
    (filters.colour === allValue || car.colour === filters.colour) &&
    (filters.fuel === allValue || car.fuel === filters.fuel) &&
    (filters.engineCapacity === allValue ||
      car.engineCapacity === Number(filters.engineCapacity)) &&
    (filters.numberOfDoors === allValue ||
      car.numberOfDoors === Number(filters.numberOfDoors)) &&
    (filters.condition === allValue || car.condition === filters.condition) &&
    (filters.numberOfGears === allValue ||
      car.numberOfGears === Number(filters.numberOfGears)) &&
    (filters.vat === allValue || car.vat === filters.vat) &&
    (filters.vehicle === allValue || car.vehicle === filters.vehicle)
  );
}

export default function AutoCatalogue({
  cars,
  locale,
  title,
  subtitle,
  labels,
  showMoreButton = true,
  onViewDetails,
}: AutoCatalogueProps) {
  const [draftFilters, setDraftFilters] = useState<FilterState>(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>(initialFilters);
  const [advancedFiltersVisible, setAdvancedFiltersVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const options = useMemo(
    () => ({
      brands: selectOptions(cars.map((car) => car.brand)),
      transmissions: selectOptions(cars.map((car) => car.transmission)),
      firstRegistrationDates: selectOptions(
        cars.map((car) => car.firstRegistrationDate),
      ),
      colours: selectOptions(cars.map((car) => car.colour)),
      fuels: selectOptions(cars.map((car) => car.fuel)),
      engineCapacities: selectOptions(cars.map((car) => car.engineCapacity)),
      doorCounts: selectOptions(cars.map((car) => car.numberOfDoors)),
      conditions: selectOptions(cars.map((car) => car.condition)),
      gearCounts: selectOptions(cars.map((car) => car.numberOfGears)),
      vatOptions: selectOptions(cars.map((car) => car.vat)),
      vehicles: selectOptions(cars.map((car) => car.vehicle)),
    }),
    [cars],
  );

  const activeFilterCount = useMemo(
    () =>
      Object.entries(draftFilters).filter(([key, value]) =>
        key === "search" ? value.trim().length > 0 : value !== allValue,
      ).length,
    [draftFilters],
  );

  const filteredCars = useMemo(
    () => cars.filter((car) => carMatchesFilters(car, appliedFilters, locale)),
    [cars, appliedFilters, locale],
  );

  const setFilter = (key: keyof FilterState) => updateFilter(setDraftFilters, key);

  const resetFilters = () => {
    setDraftFilters(initialFilters);
    setAppliedFilters(initialFilters);
  };

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    onViewDetails?.(car);
  };

  const maxMileageOptions = [allValue, "50000", "75000", "100000", "150000"];
  const maxPriceOptions = [allValue, "15000", "25000", "40000"];

  return (
    <section className="w-full bg-black px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-semibold text-red-500">{subtitle}</p>
            <h2 className="mt-1 text-3xl font-black sm:text-4xl">{title}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300">
              {filteredCars.length} {labels.vehiclesFound}
            </p>
            {showMoreButton ? (
              <Link
                href={`/${locale}/Catalogue`}
                className="rounded-lg bg-red-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
              >
                {labels.moreButton}
              </Link>
            ) : null}
          </div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setAppliedFilters(draftFilters);
          }}
          className="mb-10 rounded-lg border border-white/10 bg-zinc-900 p-4"
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
         
              <input
                value={draftFilters.search}
                onChange={(event) =>
                  setDraftFilters((current) => ({
                    ...current,
                    search: event.target.value,
                  }))
                }
                className={`${inputClass}`}
                placeholder={labels.searchPlaceholder}
              />
            
            <SelectFilter
              label={labels.allVehicles}
              value={draftFilters.vehicle}
              options={options.vehicles}
              onChange={setFilter("vehicle")}
            />
            <SelectFilter
              label={labels.allBrands}
              value={draftFilters.brand}
              options={options.brands}
              onChange={setFilter("brand")}
            />
            <SelectFilter
              label={labels.allTransmissions}
              value={draftFilters.transmission}
              options={options.transmissions}
              onChange={setFilter("transmission")}
            />
            <SelectFilter
              label={labels.maxPrice}
              value={draftFilters.maxPrice}
              options={maxPriceOptions}
              onChange={setFilter("maxPrice")}
              formatOption={(value) => `EUR ${formatNumber(Number(value))}`}
            />
          </div>
          {advancedFiltersVisible ? (
            <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <SelectFilter
                label={labels.firstRegistrationDate}
                value={draftFilters.firstRegistrationDate}
                options={options.firstRegistrationDates}
                onChange={setFilter("firstRegistrationDate")}
              />
              <SelectFilter
                label={labels.maxMileage}
                value={draftFilters.maxMileage}
                options={maxMileageOptions}
                onChange={setFilter("maxMileage")}
                formatOption={(value) => `${formatNumber(Number(value))} km`}
              />
              <SelectFilter
                label={labels.allColours}
                value={draftFilters.colour}
                options={options.colours}
                onChange={setFilter("colour")}
              />
              <SelectFilter
                label={labels.allFuels}
                value={draftFilters.fuel}
                options={options.fuels}
                onChange={setFilter("fuel")}
              />
              <SelectFilter
                label={labels.engineCapacity}
                value={draftFilters.engineCapacity}
                options={options.engineCapacities}
                onChange={setFilter("engineCapacity")}
                formatOption={(value) => `${value} cc`}
              />
              <SelectFilter
                label={labels.allDoorCounts}
                value={draftFilters.numberOfDoors}
                options={options.doorCounts}
                onChange={setFilter("numberOfDoors")}
              />
              <SelectFilter
                label={labels.allConditions}
                value={draftFilters.condition}
                options={options.conditions}
                onChange={setFilter("condition")}
              />
              <SelectFilter
                label={labels.allGearCounts}
                value={draftFilters.numberOfGears}
                options={options.gearCounts}
                onChange={setFilter("numberOfGears")}
              />
              <SelectFilter
                label={labels.allVatOptions}
                value={draftFilters.vat}
                options={options.vatOptions}
                onChange={setFilter("vat")}
              />

            </div>
          ) : null}
          <div className=" mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setAdvancedFiltersVisible((visible) => !visible)}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-bold text-zinc-200 transition hover:bg-white/10"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filter
              {activeFilterCount > 0 ? (
                <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs text-white">
                  {activeFilterCount}
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm font-bold text-zinc-300 transition hover:bg-white/10 lg:ml-auto"
            >
              <RotateCcw className="h-4 w-4" />
              {labels.resetButton}
            </button>
            <button
              type="submit"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-red-600 px-5 text-sm font-bold text-white transition hover:bg-red-700 "
            >
              <Search className="h-4 w-4" />
              {labels.searchButton}
            </button>
          </div>


        </form>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car) => {
            const localizedTags = car.tags[locale] ?? car.tags.en;
            const headlineDetails = [
              {
                icon: Calendar,
                value: car.firstRegistrationDate,
              },
              {
                icon: Gauge,
                value: `${formatNumber(car.mileage)} km`,
              },
              {
                icon: CircleGauge,
                value: car.transmission,
              },
              {
                icon: Fuel,
                value: car.fuel,
              },
            ];
            const secondaryDetails = [
              { icon: Palette, value: car.colour },
              { icon: DoorOpen, value: `${car.numberOfDoors}` },
              { icon: CarFront, value: car.condition },
              { value: `${car.engineCapacity} cc` },
              { value: `${car.numberOfGears} gears` },
              { value: car.vat },
              { value: car.vehicle },
            ];

            return (
              <article
                key={car.id}
                className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-xl transition hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="h-56 w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {car.vehicle}
                  </span>
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black">
                        {car.brand} {car.model}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">{car.condition}</p>
                    </div>
                    <span className="shrink-0 font-bold text-emerald-400">
                      {formatPrice(car.price)}
                    </span>
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-3 text-sm text-zinc-300">
                    {headlineDetails.map(({ icon: Icon, value }) => (
                      <span key={value} className="flex min-w-0 items-center gap-2">
                        <Icon className="h-4 w-4 shrink-0 text-zinc-500" />
                        <span className="truncate">{value}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2 text-xs text-zinc-300">
                    {secondaryDetails.map(({ icon: Icon, value }) => (
                      <span
                        key={value}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                      >
                        {Icon ? <Icon className="h-3.5 w-3.5 text-zinc-500" /> : null}
                        {value}
                      </span>
                    ))}
                    {localizedTags.map((tag) => (
                      <span key={tag} className="rounded-full bg-red-600/15 px-3 py-1 text-red-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleViewDetails(car)}
                    className="w-full rounded-lg bg-white py-3 font-bold text-black transition hover:bg-zinc-200 "
                  >
                    {labels.viewDetails}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedCar ? (
        <CarDetail
          car={selectedCar}
          locale={locale}
          onClose={() => setSelectedCar(null)}
        />
      ) : null}
    </section>
  );
}
