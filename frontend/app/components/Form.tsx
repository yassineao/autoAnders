"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageSquare, Phone, Send, UserRound } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Infos } from "@/app/types/Infos";

type FormProps = {
  content: Infos;
};

const inputClass =
  "w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500";

const labelClass = "mb-2 block text-sm font-medium text-zinc-300";

export default function Form({ content }: FormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const showPopup = status === "sent" || status === "error";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const response = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({
        companyName: form.get("companyName"),
        lastName: form.get("lastName"),
        email: form.get("email"),
        phoneNumber: form.get("phoneNumber"),
        message: form.get("message"),
        website: form.get("website"),
      }),
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
            <p className="font-semibold text-red-500">AutoAnders</p>
            <h1 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {content.title}
            </h1>
            <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
              {content.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>{content.fields.companyName}</label>
                <input
                  name="companyName"
                  type="text"
                  placeholder={content.placeholders.companyName}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>{content.fields.lastName}</label>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={content.placeholders.lastName}
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>{content.fields.email}</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
                  <input
                    type="email"
                    name="email"
                    placeholder={content.placeholders.email}
                    required
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>{content.fields.phoneNumber}</label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder={content.placeholders.phoneNumber}
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>{content.fields.message}</label>
              <div className="relative">
                <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-zinc-600" />
                <textarea
                  name="message"
                  rows={5}
                  placeholder={content.placeholders.message}
                  required
                  className={`${inputClass} resize-y pl-11`}
                />
              </div>
            </div>

            <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-zinc-950 p-4 text-sm leading-6 text-zinc-300">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 cursor-pointer rounded border-white/20 bg-zinc-900 accent-red-600"
              />
              <span>
                {content.consent.prefix}{" "}
                <Link href="./terms" className="font-medium text-white underline decoration-red-500 underline-offset-4">
                  {content.consent.terms}
                </Link>{" "}
                {content.consent.and}{" "}
                <Link href="./privacy" className="font-medium text-white underline decoration-red-500 underline-offset-4">
                  {content.consent.privacyPolicy}
                </Link>
                {content.consent.suffix}
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." : content.submitLabel}
            </button>
          </form>
        </div>

        <aside className="relative hidden min-h-[620px] overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-xl lg:block">
          <Image
            src="/hero.jpg"
            alt={content.testimonial.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            width={720}
            height={900}
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-black/10" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8">
            <div className="mb-6 inline-flex w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
              AutoAnders
            </div>
            <p className="max-w-sm text-lg font-semibold leading-7 text-white">
              {content.testimonial.quote}
            </p>
            <p className="mt-5 text-sm font-medium text-zinc-300">
              {content.testimonial.author}
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
              {status === "sent"
                ? content.popup.successTitle
                : content.popup.errorTitle}
            </h2>
            <p className="mb-6 text-sm leading-6 text-zinc-300">
              {status === "sent"
                ? content.popup.successMessage
                : content.popup.errorMessage}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="w-full cursor-pointer rounded-lg bg-red-600 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              {content.popup.closeLabel}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
