"use client";

import {
  useMemo,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  CarFront,
  CircleGauge,
  Fuel,
  Gauge,
  Palette,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Users,
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
  className?: string;
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
  "h-12 w-full min-w-0 rounded-lg border border-white/10 bg-zinc-950 px-3 text-base outline-none transition focus:border-red-500 sm:px-4 sm:text-sm";

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
  className = "",
}: SelectFilterProps) {
  return (
    <select
      aria-label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`${inputClass} ${className}`}
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
  const [activeMobileCarIndex, setActiveMobileCarIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    setActiveMobileCarIndex(0);
    carouselRef.current?.scrollTo({ left: 0 });
  }, [filteredCars.length]);

  const setFilter = (key: keyof FilterState) => updateFilter(setDraftFilters, key);

  const resetFilters = () => {
    setDraftFilters(initialFilters);
    setAppliedFilters(initialFilters);
  };

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    onViewDetails?.(car);
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;
    const cards = Array.from(carousel.children) as HTMLElement[];
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - carouselCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveMobileCarIndex(closestIndex);
  };

  const scrollToMobileCar = (index: number) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index] as HTMLElement | undefined;

    if (!carousel || !card) {
      return;
    }

    carousel.scrollTo({
      left: card.offsetLeft - (carousel.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const maxMileageOptions = [allValue, "50000", "75000", "100000", "150000"];
  const maxPriceOptions = [allValue, "15000", "25000", "40000"];

  return (
    <section className="w-full bg-black px-3 py-8 text-white sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-red-500 sm:text-base">{subtitle}</p>
            <h2 className="mt-1 text-2xl font-black leading-tight sm:text-4xl">{title}</h2>
          </div>
          <div className="flex items-center gap-2 sm:flex-wrap sm:gap-3">
            <p className="min-w-0 flex-1 rounded-lg border border-white/10 px-3 py-2 text-center text-sm text-zinc-300 sm:flex-none sm:px-4">
              {filteredCars.length} {labels.vehiclesFound}
            </p>
            {showMoreButton ? (
              <Link
                href={`/${locale}/Catalogue`}
                className="inline-flex h-10 shrink-0 items-center rounded-lg bg-red-600 px-4 text-sm font-bold text-white transition hover:bg-red-700 sm:px-6"
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
          className="mb-7 rounded-xl border border-white/10 bg-zinc-900 p-3 shadow-2xl shadow-black/25 sm:mb-10 sm:p-4"
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-2 xl:grid-cols-5">
            <label className="col-span-2 xl:col-span-1">
              <span className="sr-only">{labels.searchPlaceholder}</span>
              <input
                value={draftFilters.search}
                onChange={(event) =>
                  setDraftFilters((current) => ({
                    ...current,
                    search: event.target.value,
                  }))
                }
                className={inputClass}
                placeholder={labels.searchPlaceholder}
              />
            </label>
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
              className="col-span-2 sm:col-span-1"
            />
          </div>
          {advancedFiltersVisible ? (
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3 sm:mt-4 sm:gap-3 sm:pt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                className="col-span-2 sm:col-span-1"
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
          <div className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            <button
              type="button"
              onClick={() => setAdvancedFiltersVisible((visible) => !visible)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-sm font-bold text-zinc-200 transition hover:bg-white/10 sm:h-11 sm:px-4"
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
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-sm font-bold text-zinc-300 transition hover:bg-white/10 sm:h-11 sm:px-4 lg:ml-auto"
            >
              <RotateCcw className="h-4 w-4" />
              {labels.resetButton}
            </button>
            <button
              type="submit"
              className="col-span-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-sm font-bold text-white transition hover:bg-red-700 sm:col-span-1 sm:h-11"
            >
              <Search className="h-4 w-4" />
              {labels.searchButton}
            </button>
          </div>
        </form>

        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className="-mx-auto flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-3 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-7 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        >
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
              { value: `${car.engineCapacity} cc` },
              { value: `${car.numberOfGears} gears` },
            ];
            const technicalSpecs = [
              { icon: Users, value: `${car.numberOfSeats} seats` },
              { icon: CarFront, value: car.condition },
            ];

            return (
              <article
                key={car.id}
                className="w-[88vw] max-w-[24rem] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-xl transition hover:-translate-y-1 sm:w-auto sm:max-w-none sm:shrink sm:rounded-lg"
              >
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur sm:left-4 sm:top-4">
                    {car.vehicle}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-black">
                        {car.brand} {car.model}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">{car.condition}</p>
                    </div>
                    <span className="shrink-0 text-lg font-bold text-emerald-400 sm:text-base">
                      {formatPrice(car.price)}
                    </span>
                  </div>

                  <div className="mb-4 grid gap-2 text-sm text-zinc-300 min-[380px]:grid-cols-2 min-[380px]:gap-x-3">
                    {headlineDetails.map(({ icon: Icon, value }) => (
                      <span key={value} className="flex min-w-0 items-center gap-2">
                        <Icon className="h-4 w-4 shrink-0 text-zinc-500" />
                        <span className="min-w-0 break-words leading-snug">{value}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mb-3 flex flex-wrap gap-1.5 text-xs text-zinc-300 sm:gap-2">
                    {localizedTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-red-600/15 px-2.5 py-1 text-red-100 sm:px-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-3 flex flex-wrap gap-1.5 text-xs text-zinc-300 sm:gap-2">
                    {secondaryDetails.map(({ icon: Icon, value }) => (
                      <span
                        key={value}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                      >
                        {Icon ? <Icon className="h-3.5 w-3.5 text-zinc-500" /> : null}
                        <span className="break-words leading-snug">{value}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mb-5 flex flex-wrap gap-1.5 text-xs text-zinc-300 sm:gap-2">
                    {technicalSpecs.map(({ icon: Icon, value }) => (
                      <span
                        key={value}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1"
                      >
                        <Icon className="h-3.5 w-3.5 text-zinc-500" />
                        <span className="break-words leading-snug">{value}</span>
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleViewDetails(car)}
                    className="h-12 w-full rounded-lg bg-white font-bold text-black transition hover:bg-zinc-200"
                  >
                    {labels.viewDetails}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        {filteredCars.length > 1 ? (
          <div className="mt-3 flex items-center justify-center gap-2 sm:hidden">
            {filteredCars.map((car, index) => (
              <button
                key={car.id}
                type="button"
                aria-label={`Show ${car.brand} ${car.model}`}
                onClick={() => scrollToMobileCar(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeMobileCarIndex === index
                    ? "w-6 bg-white"
                    : "w-2.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        ) : null}
        {filteredCars.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-10 text-center text-sm text-zinc-300">
            0 {labels.vehiclesFound}
          </div>
        ) : null}
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
