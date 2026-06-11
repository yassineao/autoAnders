import { Component, computed, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormsModule, NgForm } from "@angular/forms";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map } from "rxjs";
import { getDictionary, isValidLocale } from "../../core/lib/i18n";
import type { Locale } from "../../core/interfaces/locale";

@Component({
  imports: [FormsModule, RouterLink],
  templateUrl: "./form-page.component.html",
})
export class FormPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly localeParam = toSignal(
    (this.route.parent?.paramMap ?? this.route.paramMap).pipe(
      map((params) => params.get("locale") ?? "de"),
    ),
    { initialValue: "de" },
  );

  protected readonly locale = computed<Locale>(() => {
    const value = this.localeParam();
    return isValidLocale(value) ? value : "de";
  });
  protected readonly content = computed(() => getDictionary(this.locale()).form.content);
  protected readonly sending = signal(false);
  protected readonly sent = signal(false);

  protected submit(form: NgForm): void {
    if (form.invalid) return;
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.sent.set(true);
      form.resetForm();
    }, 400);
  }
}
