import { Component, computed, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormsModule, NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { isValidLocale } from "../../core/lib/i18n";
import type { Locale } from "../../core/interfaces/locale";

const copy = {
  de: { eyebrow: "Auto verkaufen", title: "Fahrzeugdaten senden", description: "Teilen Sie uns die wichtigsten Details zu Ihrem Auto mit. Wir melden uns mit einer fairen Einschätzung.", send: "Anfrage senden" },
  en: { eyebrow: "Sell your car", title: "Send vehicle details", description: "Share the key details of your car. We will contact you with a fair estimate.", send: "Send request" },
  nl: { eyebrow: "Auto verkopen", title: "Voertuiggegevens versturen", description: "Deel de belangrijkste details van uw auto. Wij nemen contact op met een eerlijke inschatting.", send: "Aanvraag versturen" },
};

@Component({
  imports: [FormsModule],
  templateUrl: "./sell-page.component.html",
})
export class SellPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly localeParam = toSignal(
    (this.route.parent?.paramMap ?? this.route.paramMap).pipe(
      map((params) => params.get("locale") ?? "de"),
    ),
    { initialValue: "de" },
  );

  private readonly locale = computed<Locale>(() => {
    const value = this.localeParam();
    return isValidLocale(value) ? value : "de";
  });
  protected readonly content = computed(() => copy[this.locale()]);
  protected readonly sent = signal(false);
  protected readonly fields = [
    { name: "firstName", label: "First name", type: "text", required: true },
    { name: "lastName", label: "Last name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: false },
    { name: "brand", label: "Brand", type: "text", required: true },
    { name: "model", label: "Model", type: "text", required: true },
    { name: "mileage", label: "Mileage", type: "number", required: true },
    { name: "price", label: "Expected price", type: "number", required: false },
  ];
  protected submit(form: NgForm): void {
    if (!form.invalid) {
      this.sent.set(true);
      form.resetForm();
    }
  }
}
