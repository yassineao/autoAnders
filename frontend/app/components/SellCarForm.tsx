"use client";

import Image from "next/image";
import {
  Calendar,
  CarFront,
  CircleGauge,
  DoorOpen,
  Fuel,
  Gauge,
  Mail,
  Palette,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/app/lib/i18n";

type SellCarFormProps = {
  locale: Locale;
};

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
};

type SelectProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
};

const copy = {
  de: {
    eyebrow: "Auto verkaufen",
    title: "Fahrzeugdaten senden",
    description:
      "Teilen Sie uns die wichtigsten Details zu Ihrem Auto mit. Wir prüfen die Angaben und melden uns mit einer fairen Einschätzung.",
    contactTitle: "Kontaktdaten",
    vehicleTitle: "Fahrzeugdaten",
    send: "Anfrage senden",
    sending: "Wird gesendet...",
    successTitle: "Anfrage gesendet",
    successMessage: "Vielen Dank. Wir melden uns schnellstmöglich bei Ihnen.",
    errorTitle: "Anfrage nicht gesendet",
    errorMessage: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    close: "OK",
    labels: {
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      phone: "Telefonnummer",
      brand: "Marke",
      model: "Modell",
      transmission: "Getriebe",
      firstRegistrationDate: "Erstzulassung",
      mileage: "Kilometerstand",
      price: "Preisvorstellung",
      colour: "Farbe",
      keyword: "Keyword / Ausstattung",
      fuel: "Kraftstoff",
      engineCapacity: "Hubraum",
      numberOfDoors: "Anzahl Türen",
      condition: "Neu / Gebraucht",
      numberOfGears: "Anzahl Gänge",
      vat: "MwSt.",
      vehicle: "Fahrzeugart",
      message: "Zusätzliche Informationen",
    },
  },
  en: {
    eyebrow: "Sell your car",
    title: "Send vehicle details",
    description:
      "Share the key details of your car. We will review them and contact you with a fair estimate.",
    contactTitle: "Contact details",
    vehicleTitle: "Vehicle details",
    send: "Send request",
    sending: "Sending...",
    successTitle: "Request sent",
    successMessage: "Thank you. We will get back to you as soon as possible.",
    errorTitle: "Request not sent",
    errorMessage: "Something went wrong. Please try again.",
    close: "OK",
    labels: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone number",
      brand: "Brand",
      model: "Model",
      transmission: "Transmission",
      firstRegistrationDate: "First registration",
      mileage: "Mileage",
      price: "Expected price",
      colour: "Colour",
      keyword: "Keyword / equipment",
      fuel: "Fuel",
      engineCapacity: "Engine capacity",
      numberOfDoors: "Number of doors",
      condition: "New / used",
      numberOfGears: "Number of gears",
      vat: "VAT",
      vehicle: "Vehicle type",
      message: "Additional information",
    },
  },
  nl: {
    eyebrow: "Auto verkopen",
    title: "Voertuiggegevens versturen",
    description:
      "Deel de belangrijkste details van uw auto. Wij bekijken de gegevens en nemen contact op met een eerlijke inschatting.",
    contactTitle: "Contactgegevens",
    vehicleTitle: "Voertuiggegevens",
    send: "Aanvraag versturen",
    sending: "Versturen...",
    successTitle: "Aanvraag verstuurd",
    successMessage: "Bedankt. Wij nemen zo snel mogelijk contact met u op.",
    errorTitle: "Aanvraag niet verstuurd",
    errorMessage: "Er is iets misgegaan. Probeer het opnieuw.",
    close: "OK",
    labels: {
      firstName: "Voornaam",
      lastName: "Achternaam",
      email: "E-mail",
      phone: "Telefoonnummer",
      brand: "Merk",
      model: "Model",
      transmission: "Transmissie",
      firstRegistrationDate: "Eerste registratie",
      mileage: "Kilometerstand",
      price: "Verwachte prijs",
      colour: "Kleur",
      keyword: "Trefwoord / uitrusting",
      fuel: "Brandstof",
      engineCapacity: "Cilinderinhoud",
      numberOfDoors: "Aantal deuren",
      condition: "Nieuw / gebruikt",
      numberOfGears: "Aantal versnellingen",
      vat: "BTW",
      vehicle: "Voertuigtype",
      message: "Extra informatie",
    },
  },
} satisfies Record<Locale, unknown>;

const inputClass =
  "w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500";

const labelClass = "mb-2 block text-sm font-medium text-zinc-300";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  icon: Icon,
}: FieldProps) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="relative">
        {Icon ? (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
        ) : null}
        <input
          name={name}
          type={type}
          placeholder={placeholder ?? label}
          required={required}
          className={`${inputClass} ${Icon ? "pl-11" : ""}`}
        />
      </div>
    </div>
  );
}

function SelectField({ label, name, options, required, icon: Icon }: SelectProps) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="relative">
        {Icon ? (
          <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
        ) : null}
        <select
          name={name}
          required={required}
          defaultValue=""
          className={`${inputClass} ${Icon ? "pl-11" : ""}`}
        >
          <option value="" disabled>
            {label}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function SellCarForm({ locale }: SellCarFormProps) {
  const content = copy[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const showPopup = status === "sent" || status === "error";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch("/api/sell-car", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    formElement.reset();
    setStatus("sent");
  }

  return (
    <section className="w-full bg-black px-4 py-12 text-white sm:px-6 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-stretch">
        <div className="rounded-lg border border-white/10 bg-zinc-900 p-5 shadow-xl sm:p-6 lg:p-8">
          <div className="mb-8 max-w-2xl">
            <p className="font-semibold text-red-500">{content.eyebrow}</p>
            <h1 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {content.title}
            </h1>
            <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
              {content.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="locale" value={locale} />
            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold text-white">
                {content.contactTitle}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={content.labels.firstName} name="firstName" required icon={UserRound} />
                <Field label={content.labels.lastName} name="lastName" required icon={UserRound} />
                <Field label={content.labels.email} name="email" type="email" required icon={Mail} />
                <Field label={content.labels.phone} name="phone" type="tel" icon={Phone} />
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-bold text-white">
                {content.vehicleTitle}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={content.labels.brand} name="brand" required icon={CarFront} />
                <Field label={content.labels.model} name="model" required />
                <SelectField
                  label={content.labels.transmission}
                  name="transmission"
                  required
                  icon={CircleGauge}
                  options={["Automatic", "Manual", "Semi-automatic"]}
                />
                <Field
                  label={content.labels.firstRegistrationDate}
                  name="firstRegistrationDate"
                  type="month"
                  required
                  icon={Calendar}
                />
                <Field label={content.labels.mileage} name="mileage" type="number" required icon={Gauge} />
                <Field label={content.labels.price} name="price" type="number" />
                <Field label={content.labels.colour} name="colour" required icon={Palette} />
                <Field label={content.labels.keyword} name="keyword" />
                <SelectField
                  label={content.labels.fuel}
                  name="fuel"
                  required
                  icon={Fuel}
                  options={["Petrol", "Diesel", "Hybrid", "Electric", "LPG"]}
                />
                <Field label={content.labels.engineCapacity} name="engineCapacity" type="number" />
                <SelectField
                  label={content.labels.numberOfDoors}
                  name="numberOfDoors"
                  required
                  icon={DoorOpen}
                  options={["2", "3", "4", "5"]}
                />
                <SelectField
                  label={content.labels.condition}
                  name="condition"
                  required
                  options={["New", "Used"]}
                />
                <Field label={content.labels.numberOfGears} name="numberOfGears" type="number" />
                <SelectField
                  label={content.labels.vat}
                  name="vat"
                  options={["VAT deductible", "VAT not deductible", "Margin car"]}
                />
                <SelectField
                  label={content.labels.vehicle}
                  name="vehicle"
                  required
                  icon={CarFront}
                  options={["Saloon", "Estate", "SUV", "Coupe", "Convertible", "Van"]}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>{content.labels.message}</label>
              <textarea
                name="message"
                rows={5}
                placeholder={content.labels.message}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? content.sending : content.send}
            </button>
          </form>
        </div>

        <aside className="relative hidden min-h-[760px] overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-xl lg:block">
          <Image
            src="/Hero2.jpg"
            alt={content.title}
            className="absolute inset-0 h-full w-full object-cover"
            width={720}
            height={960}
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/10" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8">
            <div className="mb-6 inline-flex w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
              AutoAnders
            </div>
            <p className="max-w-sm text-lg font-semibold leading-7 text-white">
              {content.description}
            </p>
          </div>
        </aside>
      </div>

      {showPopup ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm rounded-lg border border-white/10 bg-zinc-900 p-6 text-center shadow-2xl">
            <h2
              className={`mb-3 text-xl font-bold ${
                status === "sent" ? "text-emerald-300" : "text-red-300"
              }`}
            >
              {status === "sent" ? content.successTitle : content.errorTitle}
            </h2>
            <p className="mb-6 text-sm leading-6 text-zinc-300">
              {status === "sent" ? content.successMessage : content.errorMessage}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="w-full cursor-pointer rounded-lg bg-red-600 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              {content.close}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
