import { Component, computed, inject, signal, effect } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map } from "rxjs";
import { getDictionary, isValidLocale } from "../../core/lib/i18n";
import type { Locale } from "../../core/interfaces/locale";
import { CatalogueComponent } from "../catalogue/catalogue.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: "app-home",
  imports: [RouterLink, CatalogueComponent, FaqComponent],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT, { optional: true });
  private readonly localeParam = toSignal(
    (this.route.parent?.paramMap ?? this.route.paramMap).pipe(
      map((params) => params.get("locale") ?? "de"),
    ),
    { initialValue: "de" },
  );
  protected readonly theme = signal<string>("dark");

  constructor() {
    if (this.document) {
      const el = (this.document as Document).documentElement;
      this.theme.set(el.dataset["theme"] ?? "dark");
      
      const observer = new MutationObserver(() => {
        this.theme.set(el.dataset["theme"] ?? "dark");
      });
      observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    }
  }

  protected readonly locale = computed<Locale>(() => {
    const value = this.localeParam();
    return isValidLocale(value) ? value : "de";
  });
   
  protected readonly dictionary = computed(() => getDictionary(this.locale()));
  protected readonly home = computed(() => this.dictionary().home);
}
