import type { LocaleDictionary } from "../../../types/LocaleDictionary";

export const deDictionary: LocaleDictionary = {
  localeName: "Deutsch",
  nav: {
    ariaLabel: "Hauptnavigation",
    homeAriaLabel: "Zur Startseite von AutoAnders",
    items: [
      {
          label: "Auto kaufen",
          href: "/Catalogue",
        // children: [
        //   {
        //     label: "Verfuegbare Autos",
        //     href: "/Catalogue",
        //   },
        //   {
        //     label: "Finanzierung",
        //     href: "/Catalogue",
        //   },
        //   {
        //     label: "Inzahlungnahme",
        //     href: "/Catalogue",
        //   },
        //   { label: "Fahrzeugcheck", href: "/Catalogue" },
        // ],
      },
     
      { label: "Auto verkaufen", href: "/Sell" },
       { label: "FAQ", href: "/faq" },
      { label: "Über uns", href: "/about" },
    ],
    contactLabel: "Kontakt",
    mobileMenuLabel: "Menü",
    switchLabel: "EN",
  },
  footer: {
    tagline: "Autos finden, kaufen oder verkaufen - einfach und transparent.",
    navigationTitle: "Navigation",
    servicesTitle: "Autos",
    contactTitle: "Kontakt",
    navigationLinks: [
      { label: "Startseite", href: "/" }, // ✅ Fixed: was "#home"
      { label: "Vorteile", href: "/advantages" },
      { label: "Auto kaufen", href: "/Catalogue" },
      { label: "Über uns", href: "/about" },
    ],
    serviceLinks: [
      { label: "Verfuegbare Autos", href: "/Catalogue" },
      { label: "Finanzierung", href: "/Catalogue" },
      { label: "Inzahlungnahme", href: "/Catalogue" },
      { label: "Fahrzeugcheck", href: "/Catalogue" },
    ],
    contactLinks: [
      { label: "Auto verkaufen", href: "/form" },
      { label: "Angebot anfragen", href: "/form" },
      { label: "Autos ansehen", href: "#services" },
    ],
    rights: "Alle Rechte vorbehalten.",
    legalLinks: [
      { label: "Datenschutz", href: "/privacy" }, // ✅ Fixed: was "#about-us"
      { label: "Impressum", href: "/impressum" }, // ✅ Fixed: was "#about-us"
      { label: "Bedingungen", href: "/terms" },
      { label: "Cookies", href: "/cookie" },
    ],
  },
  home: {
    metadata: {
      // ✅ IMPROVED: More specific, keyword-rich title
      title: "Autos kaufen und verkaufen | AutoAnders",

      // ✅ IMPROVED: Removed "aus Deutschland", added remote positioning, more compelling
      description:
        "Finden Sie geprüfte Gebrauchtwagen, erhalten Sie faire Angebote für Ihr Auto und kaufen Sie Ihr nächstes Fahrzeug mit klaren Informationen.",

      locale: "de_DE",

      // ✅ IMPROVED: Updated keywords (removed generic ones, added specific services)
      keywords: [
        "auto kaufen",
        "gebrauchtwagen",
        "auto verkaufen",
        "autohaus",
        "fahrzeugmarkt",
        "autofinanzierung",
        "inzahlungnahme",
        "fahrzeugcheck",
      ],
    },
    hero: {
      // ✅ IMPROVED: Removed "aus Deutschland" - focus on value
      eyebrow: "Autos kaufen und verkaufen mit Vertrauen",

      titleFirst: "Finden Sie Ihr naechstes Auto",
      titleSecond: "oder verkaufen Sie Ihres zum fairen Preis",

      // ✅ IMPROVED: Removed location, added remote benefit
      description:
        "AutoAnders hilft Ihnen, verfuegbare Autos zu vergleichen, jedes wichtige Detail zu verstehen und den Kauf oder Verkauf ohne Druck abzuschliessen.",

      primaryCta: "Autos ansehen",
      secondaryCta: "Auto verkaufen",
      videoAlt: "Video-Vorschau verfuegbarer Fahrzeuge bei AutoAnders",
      imageAlt: "Modernes Auto bei AutoAnders",
    },
    advantages: {
      eyebrow: "Ihre Vorteile",
      title: "Darum entscheiden sich Fahrer fuer AutoAnders",
      description:
        "Wir machen den Autokauf und Autoverkauf klarer, schneller und einfacher - mit geprueften Fahrzeugen, fairen Angeboten und persoenlicher Unterstuetzung.",
      items: [
        {
          value: "Mehr",
          title: "Auswahl",
          subtitle:
            "Vergleichen Sie ausgewaehlte Fahrzeuge mit den Informationen, die Sie vor dem Kauf brauchen.",
        },
        {
          value: "Faire",
          title: "Preise",
          subtitle:
            "Erhalten Sie transparente Preise und realistische Angebote beim Kaufen, Verkaufen oder Tauschen.",
        },
        {
          value: "Weniger",
          title: "Stress",
          subtitle:
            "Fahrzeugcheck, Unterlagen und Beratung begleiten wir gemeinsam mit Ihnen bis zum Abschluss.",
        },
      ],
    },
    services: {
      eyebrow: "Unsere Services",
      title: "Alles, was Sie zum Kaufen oder Verkaufen eines Autos brauchen",
      description:
        "Sehen Sie verfügbare Fahrzeuge, erhalten Sie Unterstützung bei der Finanzierung und bekommen Sie ein faires Angebot für Ihr aktuelles Auto.",
      cta: "Loslegen",
      items: [
        {
          title: "Verfuegbare Autos",
          description:
            "Entdecken Sie geprüfte Fahrzeuge mit klaren Fotos, wichtigen Details, Kilometerstand, Ausstattung und Preis.",
        },
        {
          title: "Finanzierung",
          description:
            "Finden Sie eine passende Zahlungsmoeglichkeit mit verständlicher Beratung und ohne Druck.",
        },
        {
          title: "Verkaufen oder eintauschen",
          description:
            "Senden Sie uns Ihre Fahrzeugdaten und erhalten Sie ein faires Angebot für Verkauf oder Inzahlungnahme.",
        },
      ],
    },
    about: {
      eyebrow: "Über AutoAnders",
      title: "Der einfachere Weg, Autos zu kaufen und zu verkaufen",

      // ✅ IMPROVED: Added remote positioning, removed generic filler
      paragraphs: [
        "AutoAnders ist für Fahrer gemacht, die beim Autokauf klare Informationen, faire Preise und eine angenehme Beratung wollen.",
        "Ob Sie Ihr nächstes Auto suchen oder Ihr aktuelles Fahrzeug verkaufen möchten: Wir helfen Ihnen, Optionen zu verstehen, fair zu vergleichen und sicher zu entscheiden.",
      ],

      cta: "Kontakt aufnehmen",
      more: "Mehr"
    },
    scrollTexts: ["Verfuegbare Autos", "Faire Angebote"],
    catalogue: {
      title: "Unsere Fahrzeuge",
      subtitle: "Verfügbare Autos",
      labels: {
        vehiclesFound: "Fahrzeuge gefunden",
        searchPlaceholder: "Keyword suchen",
        allBrands: "Alle Marken",
        allTransmissions: "Alle Getriebe",
        firstRegistrationDate: "Erstzulassung",
        maxMileage: "Max. Kilometerstand",
        maxPrice: "Maximaler Preis",
        allColours: "Alle Farben",
        allFuels: "Alle Kraftstoffe",
        engineCapacity: "Hubraum",
        allDoorCounts: "Anzahl Tueren",
        allConditions: "Neu / Gebraucht",
        allGearCounts: "Anzahl Gaenge",
        allVatOptions: "MwSt.",
        allVehicles: "Fahrzeugart",
        searchButton: "Suchen",
        resetButton: "Zuruecksetzen",
        viewDetails: "Details ansehen",
        moreButton: "Mehr",
      },
      cars: [
        {
          id: 1,
          brand: "BMW",
          model: "320i",
          price: 24950,
          year: 2019,
          firstRegistrationDate: "03/2019",
          mileage: 82000,
          transmission: "Automatik",
          fuel: "Benzin",
          engineCapacity: 1998,
          numberOfDoors: 4,
          condition: "Gebraucht",
          numberOfGears: 8,
          vat: "MwSt. ausweisbar",
          vehicle: "Limousine",
          colour: "Schwarz",
          image: "/cars/BMW.jpg",
          tags: {
            de: ["Navigation", "Leder", "Garantie"],
            en: ["Navigation", "Leather", "Warranty"],
            nl: ["Navigatie", "Leder", "Garantie"],
          },
        },
        {
          id: 2,
          brand: "Audi",
          model: "A4 Avant",
          price: 21750,
          year: 2018,
          firstRegistrationDate: "07/2018",
          mileage: 96000,
          transmission: "Schaltung",
          fuel: "Diesel",
          engineCapacity: 1968,
          numberOfDoors: 5,
          condition: "Gebraucht",
          numberOfGears: 6,
          vat: "MwSt. ausweisbar",
          vehicle: "Kombi",
          colour: "Grau",
          image: "/cars/audi.jpg",
          tags: {
            de: ["LED", "Kamera", "Tempomat"],
            en: ["LED", "Camera", "Cruise Control"],
            nl: ["LED", "Camera", "Cruise control"],
          },
        },
        {
          id: 3,
          brand: "Mercedes",
          model: "C-Klasse",
          price: 29900,
          year: 2020,
          firstRegistrationDate: "11/2020",
          mileage: 61000,
          transmission: "Automatik",
          fuel: "Hybrid",
          engineCapacity: 1991,
          numberOfDoors: 4,
          condition: "Gebraucht",
          numberOfGears: 9,
          vat: "MwSt. ausweisbar",
          vehicle: "Limousine",
          colour: "Weiss",
          image: "/cars/mercedes.jpg",
          tags: {
            de: ["AMG Line", "PDC", "Sitzheizung"],
            en: ["AMG Line", "PDC", "Heated Seats"],
            nl: ["AMG Line", "PDC", "Stoelverwarming"],
          },
        },
      ],
    },
    seo: {
      // ✅ IMPROVED: Updated for schema (consistent with metadata)
      areaServed: ["Germany", "Austria", "Switzerland"],
      knowsAbout: [
        "Gebrauchtwagen",
        "Autoverkauf",
        "Inzahlungnahme",
        "Autofinanzierung",
        "Fahrzeugcheck",
        "Fahrzeugbewertung",
        "Autohaus",
      ],
      offerCatalogName: "Unsere Auto-Services",
      services: [
        "Verfuegbare Autos",
        "Finanzierung",
        "Inzahlungnahme",
        "Fahrzeugcheck",
      ],
    },

  },
  faq: {
    metadata: {
      title: "FAQ | Auto kaufen & verkaufen | AutoAnders",
      description:
        "Antworten auf häufige Fragen rund um Gebrauchtwagen, Autoankauf, Inzahlungnahme, Finanzierung und den Fahrzeugkauf bei AutoAnders.",
      locale: "de_DE",
      keywords: [
        "auto faq",
        "gebrauchtwagen fragen",
        "auto verkaufen faq",
        "fahrzeug finanzierung",
        "autoankauf fragen",
      ],
    },
    badge: "FAQ",
    title: "Häufige Fragen rund um AutoAnders",
    description:
      "Ein kompakter Überblick über Fragen, die Kunden vor dem Kauf, Verkauf oder der Finanzierung eines Fahrzeugs besonders oft stellen.",
    ctaLabel: "Alle FAQs ansehen",
    items: [
      {
        question: "Welche Autos bietet AutoAnders an?",
        answer:
          "Wir bieten geprüfte Gebrauchtwagen verschiedener Marken und Modelle an. Unser Bestand ändert sich regelmäßig, daher lohnt sich ein häufiger Blick in unseren Fahrzeugbestand.",
      },
      {
        question: "Sind die Fahrzeuge geprüft?",
        answer:
          "Ja, unsere Fahrzeuge werden vor dem Verkauf geprüft und mit transparenten Informationen zu Zustand, Kilometerstand und Ausstattung angeboten.",
      },
      {
        question: "Kann ich mein aktuelles Auto verkaufen?",
        answer:
          "Ja, Sie können Ihr Fahrzeug direkt an uns verkaufen. Senden Sie uns einfach die wichtigsten Fahrzeugdaten und wir erstellen ein faires Angebot.",
      },
      {
        question: "Ist auch eine Inzahlungnahme möglich?",
        answer:
          "Ja, wir nehmen Ihr aktuelles Fahrzeug gerne in Zahlung und verrechnen den Wert mit Ihrem nächsten Auto.",
      },
      {
        question: "Bietet AutoAnders Finanzierung an?",
        answer:
          "Ja, wir unterstützen Sie bei passenden Finanzierungsmöglichkeiten, damit Sie Ihr Wunschfahrzeug flexibel bezahlen können.",
      },
      {
        question: "Kann ich eine Probefahrt machen?",
        answer:
          "Ja, nach Terminvereinbarung können Sie Ihr Wunschfahrzeug besichtigen und eine Probefahrt durchführen.",
      },
      {
        question: "Wie schnell bekomme ich ein Angebot für mein Auto?",
        answer:
          "Nach Übermittlung der Fahrzeugdaten erhalten Sie in der Regel schnellstmöglich eine Rückmeldung mit einem realistischen Angebot.",
      },
      {
        question: "Welche Unterlagen brauche ich beim Verkauf?",
        answer:
          "In der Regel benötigen Sie Fahrzeugschein, Fahrzeugbrief, TÜV-Unterlagen, Serviceheft sowie vorhandene Schlüssel und Zubehör.",
      },
      {
        question: "Kann ich mein Auto auch ohne TÜV verkaufen?",
        answer:
          "Ja, auch Fahrzeuge ohne gültigen TÜV können je nach Zustand angefragt und bewertet werden.",
      },
      {
        question: "Warum AutoAnders wählen?",
        answer:
          "Wir stehen für transparente Preise, persönliche Beratung, geprüfte Fahrzeuge und einen einfachen Ablauf beim Kaufen oder Verkaufen.",
      },
    ],
  },
  servicePage: {
    metadata: {
      // ✅ IMPROVED: More specific, keyword-rich
      title: "Autoservices | Kaufen, verkaufen, finanzieren | AutoAnders",

      // ✅ IMPROVED: Better flow, removed "fuer" typo
      description:
        "Entdecken Sie die AutoAnders Services: gepruefte Gebrauchtwagen, Auto verkaufen, Inzahlungnahme, Finanzierung und transparente Fahrzeugchecks.",

      locale: "de_DE",

      keywords: [
        "autoservices",
        "gebrauchtwagen kaufen",
        "auto verkaufen",
        "auto inzahlung geben",
        "autofinanzierung",
        "fahrzeugcheck",
        "autohaus",
      ],
    },
    overview: {
      hero: {
        eyebrow: "Unsere Auto-Services",
        title:
          "Alles rund um Ihr naechstes Auto an einem Ort",
        description:
          "Entdecken Sie, wie AutoAnders Ihnen hilft, das passende Fahrzeug zu finden, klar zu finanzieren oder Ihr aktuelles Auto fair zu verkaufen.",
        primaryCta: "Autos ansehen",
      },
      cards: {
        eyebrow: "Optionen entdecken",
        description:
          "Waehlen Sie, was Sie als Naechstes brauchen, und sehen Sie, wie wir Sie beim Kaufen, Verkaufen oder Inzahlunggeben unterstuetzen.",
        imageAlts: {
          "available-cars":
            "Illustration fuer verfuegbare Autos",
          financing: "Illustration fuer Autofinanzierung",
          tradein:
            "Illustration fuer Inzahlungnahme",
          "vehicle-check": "Illustration fuer Fahrzeugcheck",
        },
      },
    },
    hero: {
      "available-cars": {
        imageUrl: "/bg.jpg",
        badge: "Verfuegbare Autos",
        title: "Finden Sie einen geprueften Gebrauchtwagen, der zu Ihnen passt",
        description:
          "Sehen Sie verfuegbare Autos mit klaren Fotos, Kilometerstand, Ausstattung und transparenten Preisen.",
        primaryCta: "Autos ansehen",
        secondaryCta: "Mehr erfahren",
        imageAlt: "Verfuegbare Autos bei AutoAnders",
      },
      financing: {
        badge: "Finanzierung",
        imageUrl: "/bg.jpg",
        title: "Finanzierung mit klaren Bedingungen",
        description:
          "Wir helfen Ihnen, eine passende Zahlungsoption zu finden, die zu Ihrem Budget passt.",
        primaryCta: "Beratung anfragen",
        secondaryCta: "Mehr erfahren",
        imageAlt: "Autofinanzierung bei AutoAnders",
      },
      tradein: {
        imageUrl: "/bg.jpg",
        badge: "Inzahlungnahme",
        title: "Geben Sie Ihr aktuelles Auto einfach in Zahlung",
        description:
          "Senden Sie uns Ihre Fahrzeugdaten und erhalten Sie ein faires Angebot fuer Verkauf oder Inzahlungnahme.",
        primaryCta: "Angebot anfragen",
        secondaryCta: "Auto verkaufen",
        imageAlt: "Auto in Zahlung geben bei AutoAnders",
      },
      "vehicle-check": {
        imageUrl: "/bg.jpg",
        badge: "Fahrzeugcheck",
        title: "Klare Informationen, bevor Sie entscheiden",
        description:
          "Wir pruefen wichtige Fahrzeugdaten, damit Sie mit Vertrauen kaufen koennen.",
        primaryCta: "Fahrzeuge ansehen",
        secondaryCta: "Kontakt aufnehmen",
        imageAlt: "Fahrzeugcheck bei AutoAnders",
      },
    },
    features: {
      badge: "Warum AutoAnders",
      title: "Eine bessere Autoentscheidung beginnt mit klaren Informationen.",
      description:
        "Von der ersten Suche bis zur Uebergabe halten wir den Prozess transparent, praktisch und auf das passende Fahrzeug fuer Sie ausgerichtet.",

      items: [
        {
          title: "Klare Fahrzeugdetails",
          description:
            "Sehen Sie die wichtigsten Informationen, bevor Sie eine Besichtigung planen oder entscheiden.",
          imageAlt: "Klare Fahrzeugdetails",
          statLabel: "100%",
        },
        {
          title: "Faire Angebote",
          description:
            "Erhalten Sie realistische Preise beim Kaufen, Verkaufen oder Inzahlunggeben Ihres aktuellen Fahrzeugs.",
          imageAlt: "Faire Fahrzeugbewertung",
        },
        {
          title: "Einfacher Ablauf",
          description:
            "Wir helfen bei Fragen, Unterlagen, Terminen und dem naechsten Schritt zur richtigen Zeit.",
          imageAlt: "Einfacher Autokauf-Prozess",
        },
      ],
      sections: [
        {
          title: "Waehlen Sie Ihr naechstes Auto mit Vertrauen",
          points: [
            "Vergleichen Sie Autos nach Preis, Kilometerstand, Zustand und Ausstattung",
            "Stellen Sie Fragen, bevor Sie eine Besichtigung planen",
            "Verstehen Sie, was fuer Budget und Alltag wichtig ist",
            "Pruefen Sie vorhandene Informationen vor der Entscheidung",
            "Planen Sie den naechsten Schritt mit persoenlicher Unterstuetzung",
            "Vermeiden Sie Druck und unklare Versprechen",
            "Halten Sie den Prozess von Suche bis Uebergabe einfach",
            "Erhalten Sie transparente Antworten zum Fahrzeug",
            "Gehen Sie erst weiter, wenn das Auto wirklich passt",
          ],
        },
        {
          title: "Verkaufen oder in Zahlung geben ohne Verwirrung",
          points: [
            "Senden Sie die wichtigsten Daten zu Ihrem Auto",
            "Teilen Sie Kilometerstand, Zustand, Dokumente und Fotos",
            "Erhalten Sie eine realistische erste Einschaetzung",
            "Klaeren Sie das finale Angebot nach der Pruefung",
            "Nutzen Sie den Wert fuer Ihr naechstes Fahrzeug",
            "Verstehen Sie jeden Schritt, bevor Sie zusagen",
            "Reduzieren Sie Rueckfragen durch einen klaren Ablauf",
            "Bereiten Sie Unterlagen vor der Uebergabe vor",
            "Verkaufen Sie mit weniger Zeitaufwand und weniger Stress",
          ],
        },
        {
          title: "Verstehen Sie das Fahrzeug vor dem Kauf",
          points: [
            "Pruefen Sie Kilometerstand, Ausstattung und Zustand",
            "Fragen Sie nach Servicehistorie, wenn vorhanden",
            "Klaeren Sie, was beim Fahrzeug enthalten ist",
            "Besprechen Sie Finanzierung oder Zahlungsoptionen",
            "Vereinbaren Sie Besichtigung oder Probefahrt",
            "Wissen Sie, welche Dokumente benoetigt werden",
            "Erhalten Sie Unterstuetzung vor der Unterschrift",
            "Treffen Sie Entscheidungen auf Basis von Fakten",
            "Fahren Sie mit Vertrauen los",
          ],
        },
      ],
    },
    hero2: {
      badge: "Warum AutoAnders?",
      title: "Ein Auto zu kaufen oder zu verkaufen sollte vom ersten Schritt an klar sein.",
      description:
        "Jeder Fahrer, jedes Budget und jedes Fahrzeug ist anders. Deshalb nehmen wir uns Zeit, Optionen verstaendlich zu erklaeren und den passenden Weg zu finden.",
      subtitle: "Lassen Sie uns gemeinsam die richtige Auto-Loesung finden.",
      subdescription:
        "Ob Sie kaufen, verkaufen, in Zahlung geben oder Finanzierung besprechen moechten: AutoAnders haelt den Ablauf praktisch und transparent.",
      imageAlt: "Fahrzeugdetails im Hintergrund",
      imageUrl: "/bg.jpg",
    },
    seo: {
      areaServed: ["Germany", "Austria", "Switzerland"],
      knowsAbout: [
        "Gebrauchtwagen",
        "Autoverkauf",
        "Inzahlungnahme",
        "Autofinanzierung",
        "Fahrzeugcheck",
      ],
      offerCatalogName: "AutoAnders Autoservices",
      services: [
        "Verfuegbare Autos",
        "Auto verkaufen",
        "Inzahlungnahme",
        "Finanzierung",
      ],
    },
  },
  form: {
    metadata: {
      // ✅ IMPROVED: More action-oriented title
      title: "Kontakt AutoAnders | Auto kaufen oder verkaufen",

      description:
        "Kontaktieren Sie AutoAnders fuer Fragen zu Fahrzeugen, Autoverkauf, Inzahlungnahme, Finanzierung oder einem fairen Angebot.",

      locale: "de_DE",

      keywords: [
        "autoanders kontakt",
        "auto kaufen anfrage",
        "auto verkaufen anfrage",
        "inzahlungnahme anfragen",
        "autofinanzierung beratung",
      ],
    },
    content: {
      title: "Kontakt aufnehmen",

      // ✅ IMPROVED: Fixed typo "Gespraech" → "Gespräch"
      description:
        "Sie haben eine Frage zu einem Fahrzeug, zum Verkauf Ihres Autos oder zur Finanzierung? Unser Team hilft Ihnen gerne weiter.",

      fields: {
        companyName: "Fahrzeug oder Thema",
        lastName: "Nachname",
        email: "E-Mail",
        phoneNumber: "Telefonnummer",
        message: "Nachricht",
      },
      placeholders: {
        companyName: "BMW 320i, Inzahlungnahme, Finanzierung...",
        lastName: "Mustermann",
        email: "hallo@unternehmen.de",
        phoneNumber: "+49 123 456789",

        // ✅ IMPROVED: Fixed typo "Erzaehlen" → "Erzählen"
        message: "Erzählen Sie uns, welches Auto Sie interessiert oder welches Fahrzeug Sie verkaufen möchten",
      },
      consent: {
        prefix: "Sie stimmen unseren",
        terms: "Bedingungen",
        and: "und der",

        // ✅ IMPROVED: Fixed typo "Datenschutzerklaerung" → "Datenschutzerklärung"
        privacyPolicy: "Datenschutzerklärung",
        suffix: "zu.",
      },
      submitLabel: "Nachricht senden",
      popup: {
        successTitle: "Nachricht gesendet",
        successMessage: "Vielen Dank. Ihre Nachricht wurde gesendet. Pruefen Sie Ihre E-Mail.",
        errorTitle: "Nachricht nicht gesendet",
        errorMessage: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
        closeLabel: "OK",
      },
      testimonial: {
        quote:
          "Eine gute Autoentscheidung beginnt mit klaren Informationen, fairen Preisen und jemandem, der Ihre Fragen ernst nimmt.",
        author: "AutoAnders Team",
        imageAlt: "Auto im Hintergrund des Kontaktformulars",
        imageUrl: "/bg.jpg",
      },
    },
    seo: {
      areaServed: ["Germany", "Austria", "Switzerland"],
      knowsAbout: [
        "Gebrauchtwagen",
        "Autoverkauf",
        "Inzahlungnahme",
        "Autofinanzierung",
      ],
      offerCatalogName: "Kontakt und Fahrzeugberatung",
      services: [
        "Fahrzeuganfrage",
        "Auto verkaufen",
        "Inzahlungnahme",
        "Finanzierung",
      ],
    },
  },
  pages: {
    about: {
      metadata: {
        title: "Über uns | AutoAnders",
        description:
          "Erfahren Sie mehr über AutoAnders und wie wir Fahrer beim Autokauf, Autoverkauf, bei Inzahlungnahme und Finanzierung klar begleiten.",
        locale: "de_DE",
        keywords: [
          "über autoanders",
          "auto kaufen",
          "auto verkaufen",
          "gebrauchtwagen",
          "inzahlungnahme",
        ],
      },
      eyebrow: "Über AutoAnders",
      title: "Der klare Weg, Autos zu kaufen oder zu verkaufen",
      intro:
        "AutoAnders hilft Fahrern, Fahrzeuge besser zu verstehen, fair zu vergleichen und Entscheidungen ohne Druck zu treffen.",
      sections: [
        {
          title: "Unser Ansatz",
          paragraphs: [
            "Wir konzentrieren uns auf ausgewählte Fahrzeuge, transparente Informationen und eine Beratung, die verständlich bleibt.",
            "Ob Sie ein Auto kaufen, verkaufen oder in Zahlung geben möchten: Wir machen den Ablauf übersichtlich und erklären die nächsten Schritte klar.",
          ],
        },
        {
          title: "Wie wir arbeiten",
          bullets: [
            "Wir beantworten wichtige Fragen zu Zustand, Kilometerstand, Ausstattung und Preis.",
            "Wir vergleichen Fahrzeuge und Angebote mit realistischem Blick auf den Markt.",
            "Wir begleiten den Prozess vom ersten Kontakt bis zur Übergabe oder Bewertung.",
          ],
        },
        {
          title: "Worauf wir Wert legen",
          bullets: [
            "Ehrliche Beratung und nachvollziehbare Fahrzeugdaten.",
            "Faire Angebote beim Verkauf oder bei der Inzahlungnahme.",
            "Ein Autokauf, der ruhig, professionell und transparent abläuft.",
          ],
        },
      ],
      ctaLabel: "AutoAnders kontaktieren",
    },
    privacy: {
      metadata: {
        title: "Datenschutz | AutoAnders",
        description:
          "Informationen darueber, wie personenbezogene Daten auf der AutoAnders-Website und bei Anfragen zu Autokauf, Autoverkauf und Finanzierung verarbeitet werden.",
        locale: "de_DE",
        keywords: [
          "autoanders datenschutz",
          "datenschutzerklaerung",
          "dsgvo datenschutz",
          "datenschutzhinweis",
          "kontaktformular datenschutz",
        ],
      },
      eyebrow: "Datenschutz",
      title: "Datenschutzerklaerung",
      intro:
        "Auf dieser Seite wird erklaert, wie personenbezogene Daten auf dieser Website sowie waehrend der Kundenkommunikation und Leistungserbringung erhoben, verwendet, gespeichert, weitergegeben und geschuetzt werden.",
      heroMeta: [
        "Zuletzt aktualisiert: [DATE]",
        "Konform mit GDPR Art. 13 & 14",
        "Version 1.0",
      ],
      contents: [
        "Verantwortlicher",
        "Welche Daten wir erheben",
        "Rechtsgrundlagen der Verarbeitung",
        "Zwecke der Verarbeitung",
        "Datenweitergabe & Transfers",
        "Speicherdauer",
        "Ihre GDPR-Rechte",
        "Datensicherheit",
        "Datenschutz von Kindern",
        "Aenderungen dieser Richtlinie",
        "Kontakt & Beschwerden",
      ],
      sections: [
        {
          title: "Verantwortlicher",
          paragraphs: [
            "Fuer die Zwecke der Verordnung (EU) 2016/679 (GDPR) ist der fuer die Verarbeitung Ihrer personenbezogenen Daten verantwortliche Datenverantwortliche:",
            "Wir verpflichten uns, Ihre personenbezogenen Daten zu schuetzen und sie fair, rechtmaessig und transparent zu verarbeiten.",
          ],
          note:
            "AutoAnders\n[Vollstaendige registrierte Anschrift]\nUSt-ID: [EU VAT number]\nE-Mail: privacy@autoanders.com\n[Datenschutzbeauftragter (falls vorhanden): dpo@autoanders.com]",
        },
        {
          title: "Welche Daten wir erheben",
          subsections: [
            {
              title: "Daten, die Sie direkt bereitstellen",
              bullets: [
                "Identitaetsdaten: Vorname, Nachname, Berufsbezeichnung, Firmenname.",
                "Kontaktdaten: E-Mail-Adresse, Telefonnummer, Postanschrift.",
                "Vertrags- und Abrechnungsdaten: Rechnungsanschrift, USt-ID, Bankdaten ausschliesslich fuer die Rechnungsstellung.",
                "Kommunikationsdaten: Inhalte von E-Mails, Nachrichten und Besprechungsnotizen, die mit uns ausgetauscht werden.",
                "Fahrzeug- und Kontaktdaten: Angaben zu Ihrem Fahrzeug, Dokumenten, Fotos und Kontaktwegen, soweit fuer Anfrage, Kauf, Verkauf oder Inzahlungnahme erforderlich.",
              ],
            },
            {
              title: "Automatisch erhobene Daten",
              bullets: [
                "Technische Daten: IP-Adresse, Browsertyp und -version, Betriebssystem, Geraetetyp.",
                "Nutzungsdaten: besuchte Seiten, Verweildauer, Referrer-Quelle und Klicks.",
                "Cookie-Daten: siehe unsere Cookie-Richtlinie fuer vollstaendige Details.",
              ],
            },
            {
              title: "Daten von Dritten",
              bullets: [
                "Daten aus Fahrzeugplattformen, Inseraten oder Bewertungsdiensten, soweit sie fuer Ihre Anfrage oder Fahrzeugbewertung erforderlich sind.",
                "Analysedaten aus Werbeplattformen wie Google Ads und Meta Ads Manager.",
                "Geschaeftsinformationen aus oeffentlichen Registern oder LinkedIn ausschliesslich zu Akquisezwecken.",
              ],
            },
          ],
          note:
            "Wir erheben keine besonderen Kategorien personenbezogener Daten wie Gesundheitsdaten, Religion, Ethnizitaet, politische Meinungen oder biometrische Daten, es sei denn, Sie stellen uns diese ausdruecklich in der Kommunikation zur Verfuegung. In diesem Fall behandeln wir sie mit erhoehtem Schutz.",
        },
        {
          title: "Rechtsgrundlagen der Verarbeitung",
          paragraphs: [
            "Die Rechtsgrundlage haengt von der jeweiligen Verarbeitungstaetigkeit ab.",
            "Soweit wir uns auf berechtigte Interessen stuetzen, haben wir geprueft, dass diese Interessen nicht von Ihren Rechten und Freiheiten ueberwogen werden. Sie koennen unsere Interessenabwaegung anfordern, indem Sie uns kontaktieren.",
          ],
          table: {
            columns: ["Verarbeitungstaetigkeit", "Rechtsgrundlage (GDPR Art. 6)"],
            rows: [
              ["Erbringung vertraglich vereinbarter Leistungen und Projektmanagement", "Art. 6(1)(b) — Vertragserfuellung"],
              ["Rechnungsstellung, Buchhaltung und steuerliche Pflichten", "Art. 6(1)(c) — Rechtliche Verpflichtung"],
              ["Versand von Marketing-E-Mails an bestehende Kunden", "Art. 6(1)(f) — Berechtigte Interessen"],
              ["Betrugspraevention, Sicherheit und Portfolio-Darstellung", "Art. 6(1)(f) — Berechtigte Interessen"],
              ["Marketing-E-Mails an Interessenten und nicht notwendige Cookies", "Art. 6(1)(a) — Einwilligung"],
              ["Analytics und Verbesserung der Website", "Art. 6(1)(a) — Einwilligung (Cookie) oder Art. 6(1)(f)"],
            ],
          },
        },
        {
          title: "Zwecke der Verarbeitung",
          paragraphs: [
            "Wir verwenden Ihre personenbezogenen Daten fuer die folgenden Zwecke.",
            "Wir werden Ihre Daten nicht fuer einen mit den oben genannten Zwecken unvereinbaren Zweck verwenden, ohne Sie zuvor zu informieren und, soweit erforderlich, Ihre Einwilligung einzuholen.",
          ],
          bullets: [
            "Zur Bereitstellung und Verwaltung unserer Fahrzeugservices rund um Kauf, Verkauf, Inzahlungnahme und Finanzierung.",
            "Zur Kommunikation mit Ihnen ueber Fahrzeuganfragen, Angebote und Rechnungen.",
            "Zur Erfuellung unserer buchhalterischen und rechtlichen Pflichten.",
            "Zum Versand von Service-Updates, Newslettern und relevanten Marketinginformationen, soweit eine Einwilligung erforderlich ist.",
            "Zur Verbesserung unserer Website und Dienstleistungen durch Analytics.",
            "Zum Schutz vor Betrug und zur Gewaehrleistung von Sicherheit.",
            "Zur Darstellung ausgewaehlter Fahrzeugangebote und Kundenreferenzen mit Einwilligung oder auf Grundlage berechtigter Interessen.",
          ],
        },
        {
          title: "Datenweitergabe & Transfers",
          subsections: [
            {
              title: "Auftragsverarbeiter",
              paragraphs: [
                "Wir teilen Daten mit vertrauenswuerdigen Auftragsverarbeitern auf Grundlage DSGVO-konformer Auftragsverarbeitungsvertraege (DPAs). Dazu koennen gehoeren:",
              ],
              bullets: [
                "Cloud- und Hosting-Anbieter wie OVH, Hetzner oder AWS Europe.",
                "Projektmanagement-Tools wie Notion, Trello oder Asana.",
                "Kommunikationstools wie Google Workspace oder Slack.",
                "Buchhaltungssoftware wie Pennylane oder QuickBooks.",
                "Zahlungsdienstleister wie Stripe.",
                "Fahrzeugplattformen, Bewertungsdienste, Zahlungs- oder Finanzierungspartner, soweit dies fuer Ihre Anfrage erforderlich ist.",
              ],
            },
            {
              title: "Gesetzliche Offenlegungen",
              paragraphs: [
                "Wir koennen Ihre Daten an zustaendige gesetzliche oder aufsichtsrechtliche Behoerden offenlegen, wenn dies nach anwendbarem Recht oder aufgrund einer gerichtlichen Anordnung erforderlich ist.",
              ],
            },
            {
              title: "Internationale Transfers",
              paragraphs: [
                "Einige unserer Auftragsverarbeiter koennen Daten ausserhalb des EWR verarbeiten, zum Beispiel in den USA. In diesem Fall stellen wir geeignete Garantien gemaess Kapitel V GDPR sicher.",
                "Wir verkaufen Ihre personenbezogenen Daten nicht an Dritte.",
              ],
              bullets: [
                "Angemessenheitsbeschluesse der Europaeischen Kommission nach Art. 45.",
                "Standardvertragsklauseln (SCCs) nach Art. 46.",
                "Binding Corporate Rules, soweit anwendbar.",
              ],
            },
          ],
        },
        {
          title: "Speicherdauer",
          paragraphs: [
            "Personenbezogene Daten werden nur so lange gespeichert, wie es fuer den jeweiligen Zweck erforderlich ist, und anschliessend sicher geloescht oder anonymisiert.",
          ],
          table: {
            columns: ["Datenkategorie", "Aufbewahrungsdauer", "Grund"],
            rows: [
              ["Vertrags- und Abrechnungsdaten von Kunden", "10 Jahre nach Vertragsende", "Buchhaltung und rechtliche Verpflichtung"],
              ["Daten von Interessenten oder Anfragen", "3 Jahre ab letztem Kontakt", "Berechtigte Interessen"],
              ["Nachweise ueber Marketing-Einwilligungen", "Bis zum Widerruf + 3 Jahre", "Rechtlicher Nachweis der Einwilligung"],
              ["Website-Analytics-Daten", "Maximal 13 Monate", "CNIL / EDPB-Leitlinien"],
              ["Fahrzeug- und Kontaktdaten", "Loeschung oder Archivierung nach gesetzlichen Fristen", "Datenminimierung"],
              ["E-Mail-Kommunikation", "5 Jahre nach Projektende", "Streitbeilegung"],
            ],
          },
        },
        {
          title: "Ihre GDPR-Rechte",
          paragraphs: [
            "Unter der GDPR stehen Ihnen die folgenden Rechte in Bezug auf Ihre personenbezogenen Daten zu.",
            "Um Ihre Rechte auszuueben, kontaktieren Sie privacy@autoanders.com. Wir werden innerhalb von 30 Kalendertagen antworten. Vor der Bearbeitung Ihres Antrags koennen wir eine Identitaetspruefung verlangen.",
          ],
          rights: [
            { article: "Art. 15", title: "Auskunft", description: "Erhalten Sie eine Kopie der personenbezogenen Daten, die wir ueber Sie gespeichert haben." },
            { article: "Art. 16", title: "Berichtigung", description: "Korrigieren Sie unrichtige oder unvollstaendige Daten." },
            { article: "Art. 17", title: "Loeschung", description: "Verlangen Sie die Loeschung, soweit dies anwendbar ist." },
            { article: "Art. 18", title: "Einschraenkung", description: "Schraenken Sie die Verarbeitung unter bestimmten Umstaenden ein." },
            { article: "Art. 20", title: "Datenuebertragbarkeit", description: "Erhalten Sie Ihre Daten in einem strukturierten, maschinenlesbaren Format." },
            { article: "Art. 21", title: "Widerspruch", description: "Widersprechen Sie einer Verarbeitung auf Grundlage berechtigter Interessen oder Direktwerbung." },
            { article: "Art. 7(3)", title: "Einwilligung widerrufen", description: "Widerrufen Sie Ihre Einwilligung jederzeit, ohne die fruehere rechtmaessige Verarbeitung zu beruehren." },
            { article: "Art. 77", title: "Beschwerde", description: "Legen Sie Beschwerde bei Ihrer nationalen Aufsichtsbehoerde ein." },
          ],
          subsections: [
            {
              title: "Aufsichtsbehoerden",
              paragraphs: [
                "Sie koennen auch eine Beschwerde bei Ihrer nationalen Datenschutzaufsichtsbehoerde einreichen.",
              ],
              links: [
                { label: "France: CNIL", href: "https://www.cnil.fr" },
                { label: "Germany: BfDI", href: "https://www.bfdi.bund.de" },
                { label: "Italy: Garante", href: "https://www.garanteprivacy.it" },
                { label: "Spain: AEPD", href: "https://www.aepd.es" },
                { label: "Netherlands: AP", href: "https://www.autoriteitpersoonsgegevens.nl" },
                { label: "Belgium: APD/GBA", href: "https://www.dataprotectionauthority.be" },
              ],
            },
          ],
        },
        {
          title: "Datensicherheit",
          paragraphs: [
            "Wir setzen geeignete technische und organisatorische Massnahmen um, um Ihre personenbezogenen Daten gemaess GDPR Art. 32 vor versehentlichem Verlust, Zerstoerung, Veraenderung, unbefugter Offenlegung oder unbefugtem Zugriff zu schuetzen.",
            "Im Falle einer Datenschutzverletzung, die voraussichtlich ein hohes Risiko fuer Ihre Rechte und Freiheiten zur Folge hat, werden wir Sie gemaess GDPR Art. 34 unverzueglich benachrichtigen.",
          ],
          bullets: [
            "HTTPS-Verschluesselung fuer alle ueber unsere Website uebertragenen Daten.",
            "Zugriffskontrollen und rollenbasierte Berechtigungen fuer interne Systeme.",
            "Regelmaessige Sicherheitspruefungen und Schulungen fuer Mitarbeitende.",
            "Zwei-Faktor-Authentifizierung auf Plattformen mit Kundendaten.",
            "Sichere Loeschverfahren nach Ablauf von Aufbewahrungsfristen.",
          ],
        },
        {
          title: "Datenschutz von Kindern",
          paragraphs: [
            "Unsere Dienstleistungen richten sich nicht an Kinder unter 16 Jahren oder unter dem in Ihrem Mitgliedstaat geltenden Alter fuer die digitale Einwilligung.",
            "Wir erheben nicht wissentlich personenbezogene Daten von Kindern. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten uebermittelt hat, kontaktieren Sie uns bitte unverzueglich unter privacy@autoanders.com, und wir werden diese umgehend loeschen.",
          ],
        },
        {
          title: "Aenderungen dieser Richtlinie",
          paragraphs: [
            "Wir koennen diese Datenschutzerklaerung von Zeit zu Zeit aktualisieren, um Aenderungen unserer Praktiken oder rechtlicher Anforderungen widerzuspiegeln.",
            "Wir werden Sie ueber wesentliche Aenderungen per E-Mail oder durch einen deutlich sichtbaren Hinweis auf unserer Website mindestens 30 Tage vor Inkrafttreten der Aenderung informieren.",
            "Das Datum am Anfang dieser Seite zeigt an, wann die Richtlinie zuletzt ueberarbeitet wurde. Wir empfehlen, diese Richtlinie regelmaessig zu ueberpruefen.",
          ],
        },
        {
          title: "Kontakt & Beschwerden",
          paragraphs: [
            "Fuer alle datenschutzbezogenen Fragen, Antraege oder Beschwerden nutzen Sie bitte die nachstehenden Kontaktdaten.",
          ],
          note:
            "Privacy & GDPR: privacy@autoanders.com\nDatenschutzbeauftragter: dpo@autoanders.com (falls vorhanden)\nPost: AutoAnders, [Vollstaendige Anschrift], z. Hd. Privacy Team\nAntwortfrist: Innerhalb von 30 Kalendertagen (GDPR-Frist)",
        },
      ],
      note:
        "Vor der Veroeffentlichung ersetzen Sie bitte alle Platzhalter wie [DATE], Firmenname, Anschrift, USt-Nummer, Privacy-E-Mail und DPO-Angaben. Pruefen Sie zudem, dass die aufgefuehrten Tools, Auftragsverarbeiter, Aufbewahrungsfristen und Rechtsgrundlagen mit den tatsaechlich eingesetzten Services des Live-Betriebs uebereinstimmen.",
    },
    impressum: {
      metadata: {
        title: "Impressum | AutoAnders",
        description:
          "Impressum und gesetzlich vorgeschriebene Anbieterkennzeichnung fuer die AutoAnders-Website.",
        locale: "de_DE",
        keywords: [
          "autoanders impressum",
          "impressum",
          "anbieterkennzeichnung",
          "anbieterinformationen",
          "rechtliche angaben website",
        ],
      },
      eyebrow: "Rechtliches",
      title: "Impressum",
      intro:
        "Diese Seite enthält die gesetzlich vorgeschriebenen Anbieter- und Offenlegungsangaben für die AutoAnders-Website.",
      heroMeta: [
        "Zuletzt aktualisiert: [DATUM]",
        "Gerichtsstand: Europäische Union",
        "Gilt für alle EU-Besucher",
      ],
      sections: [
        {
          title: "Unternehmensangaben",
          paragraphs: [
            "In Übereinstimmung mit der Richtlinie 2000/31/EG über den elektronischen Geschäftsverkehr und den anwendbaren nationalen Gesetzen, einschließlich Art. 6 LCEN (Frankreich), §5 TMG (Deutschland), Art. 10 LSSI-CE (Spanien) sowie vergleichbaren nationalen Vorschriften, werden die folgenden Pflichtangaben bereitgestellt.",
          ],
          contactCards: [
            { label: "Firmenname", value: "AutoAnders" },
            { label: "Rechtsform", value: "[z. B. SAS / GmbH / SRL / Ltd]" },
            { label: "Stammkapital", value: "[z. B. 10.000 €]" },
            {
              label: "Geschäftsanschrift",
              value: "[Straße, Stadt, Postleitzahl, Land]",
            },
            {
              label: "Registernummer",
              value: "[SIRET / HRB / KvK / CIF / etc.]",
            },
            {
              label: "USt-IdNr.",
              value: "[z. B. FR12345678901]",
            },
            {
              label: "Verantwortlich für den Inhalt",
              value: "[Name des gesetzlichen Vertreters]",
            },
            { label: "E-Mail", value: "contact@autoanders.com" },
            { label: "Telefon", value: "[+XX XXX XXX XXXX]" },
          ],
        },
        {
          title: "Hosting-Anbieter",
          paragraphs: ["Diese Website wird von folgendem Anbieter gehostet."],
          contactCards: [
            {
              label: "Hosting-Unternehmen",
              value: "[z. B. OVH / Netlify / Hetzner]",
            },
            { label: "Adresse", value: "[Adresse des Hosters]" },
            { label: "Land", value: "[Land]" },
            { label: "Kontakt", value: "[Kontaktinformationen]" },
          ],
        },
        {
          title: "Urheberrecht",
          paragraphs: [
            "Alle Inhalte dieser Website sind Eigentum von AutoAnders oder deren Partnern und durch EU-Urheberrecht geschützt (Richtlinie (EU) 2019/790).",
            "Die Nutzung ohne vorherige schriftliche Zustimmung ist untersagt.",
          ],
          note:
            "Ausnahme: Nutzung für private, nicht-kommerzielle Zwecke mit Quellenangabe ist erlaubt.",
        },
        {
          title: "Haftungsausschluss",
          paragraphs: [
            "Alle Inhalte dienen nur zu Informationszwecken. Es wird keine Gewähr für Vollständigkeit oder Richtigkeit übernommen.",
            "Für Inhalte externer Links wird keine Haftung übernommen.",
            "Soweit gesetzlich zulässig, haftet AutoAnders nicht für Schäden aus der Nutzung dieser Website.",
          ],
        },
        {
          title: "Rechtlicher Rahmen",
          paragraphs: [
            "Es gilt das Recht von [LAND] sowie EU-Recht.",
            "Kontakt: legal@autoanders.com",
          ],
          bullets: [
            "Richtlinie 2000/31/EG — E-Commerce",
            "Richtlinie (EU) 2019/790 — Urheberrecht",
            "Verordnung (EU) 2016/679 — DSGVO",
            "Richtlinie 2009/136/EG — ePrivacy",
          ],
        },
      ],
      note:
        "Vor Veröffentlichung alle Platzhalter ersetzen (Name, Adresse, VAT, Hosting etc.).",
    },
    terms: {
      metadata: {
        title: "TEST TITLE",
        description:
          "Allgemeine Geschäftsbedingungen fuer AutoAnders Leistungen rund um Autokauf, Autoverkauf, Inzahlungnahme, Finanzierung und Fahrzeuganfragen.",
        locale: "de_DE",
        keywords: [
          "autoanders agb",
          "allgemeine geschäftsbedingungen",
          "autohaus agb",
          "autokauf agb",
          "auto verkaufen agb",
        ],
      },
      eyebrow: "Rechtliches",
      title: "Allgemeine Geschäftsbedingungen",
      intro:
        "Diese Seite beschreibt die Bedingungen für AutoAnders Leistungen rund um Fahrzeuganfragen, Autokauf, Autoverkauf, Inzahlungnahme, Finanzierung, Zahlung, Haftung und Streitbeilegung.",
      heroMeta: [
        "Zuletzt aktualisiert: [DATUM]",
        "Richtlinie 2011/83/EU konform",
        "Version 1.0",
      ],
      contents: [
        "Definitionen",
        "Dienstleistungen",
        "Annahme der Bedingungen",
        "Pflichten des Kunden",
        "Geistiges Eigentum",
        "Zahlung & Preise",
        "Widerrufsrecht",
        "Kündigung",
        "Haftungsbeschränkung",
        "Anwendbares Recht & Streitigkeiten",
        "Sonstiges",
        "Kontakt",
      ],
      sections: [
        {
          title: "Definitionen",
          paragraphs: [
            "Für die Zwecke dieser Allgemeinen Geschäftsbedingungen gelten die folgenden Begriffe.",
          ],
          bullets: [
            '"AutoAnders" / "Wir" — AutoAnders',
            '"Kunde" / "Sie" — natürliche oder juristische Person',
            '"Verbraucher" — gemäß EU-Richtlinie 2011/83/EU',
            '"Dienstleistungen" — Fahrzeuganfragen, Autoverkauf, Inzahlungnahme, Finanzierung und Fahrzeugberatung',
            '"Vertrag" — Vereinbarung zwischen AutoAnders und Kunde',
            '"Fahrzeugdaten" — Angaben zu Marke, Modell, Zustand, Kilometerstand, Ausstattung und Preis',
            '"Angebot" — unverbindliche oder verbindliche Einschätzung je nach individueller Vereinbarung',
          ],
        },
        {
          title: "Dienstleistungen",
          subsections: [
            {
              title: "Fahrzeuganfragen und Autokauf",
              bullets: [
                "Bereitstellung verfügbarer Fahrzeugangebote",
                "Informationen zu Marke, Modell, Zustand und Ausstattung",
                "Unterstützung bei Besichtigung und Probefahrt",
                "Beantwortung von Fragen zu Preis, Historie und Fahrzeugdaten",
                "Begleitung bis zur Übergabe nach individueller Absprache",
              ],
            },
            {
              title: "Auto verkaufen oder in Zahlung geben",
              bullets: [
                "Erfassung der wichtigsten Fahrzeugdaten",
                "Bewertung anhand von Zustand, Kilometerstand und Marktumfeld",
                "Erstellung einer fairen Einschätzung oder eines Angebots",
                "Unterstützung bei Unterlagen und Übergabe",
                "Möglichkeit zur Inzahlungnahme nach Prüfung",
              ],
            },
            {
              title: "Finanzierung und Fahrzeugberatung",
              bullets: [
                "Erklärung möglicher Zahlungs- und Finanzierungsoptionen",
                "Unterstützung bei benötigten Informationen und Unterlagen",
                "Transparente Beratung ohne Abschlussdruck",
                "Fahrzeugcheck und Klärung relevanter Details",
                "Allgemeine Beratung rund um Kauf, Verkauf und Inzahlungnahme",
              ],
            },
          ],
          note:
            "Der genaue Leistungsumfang ergibt sich aus der jeweiligen Anfrage, Fahrzeugprüfung und individuellen Vereinbarung.",
        },
        {
          title: "Annahme der Bedingungen",
          paragraphs: [
            "Durch die Nutzung unserer Dienstleistungen erklären Sie sich mit diesen Bedingungen einverstanden.",
            "Die Annahme erfolgt durch Vertrag, Zahlung oder schriftliche Bestätigung.",
            "Änderungen werden mindestens 30 Tage im Voraus mitgeteilt.",
            "Bei Vertretung eines Unternehmens bestätigen Sie Ihre Berechtigung.",
          ],
          bullets: [
            "Unterzeichnung eines Vertrags",
            "Akzeptieren per Checkbox",
            "Zahlung einer Rechnung",
            "Bestätigung per E-Mail",
          ],
        },
        {
          title: "Pflichten des Kunden",
          subsections: [
            {
              title: "Zusammenarbeit",
              bullets: [
                "Bereitstellung aller notwendigen Informationen",
                "Feedback innerhalb von 5–7 Werktagen",
                "Benennung eines Ansprechpartners",
                "Mitteilung von Änderungen",
              ],
            },
            {
              title: "Rechtmäßigkeit",
              bullets: [
                "Rechte an bereitgestellten Materialien",
                "Einhaltung von Plattformregeln",
                "DSGVO-Konformität",
              ],
            },
            {
              title: "Verzögerungen",
              paragraphs: [
                "Die Agentur haftet nicht für Verzögerungen, die durch den Kunden verursacht werden.",
              ],
            },
          ],
        },
        {
          title: "Geistiges Eigentum",
          subsections: [
            {
              title: "Rechte der Agentur",
              paragraphs: [
                "Alle Tools und Methoden bleiben Eigentum der Agentur.",
              ],
            },
            {
              title: "Übertragung",
              paragraphs: [
                "Die Rechte werden erst nach vollständiger Zahlung übertragen.",
              ],
              bullets: [
                "Reproduktion und Nutzung",
                "Bearbeitung ohne falsche Urheberangabe",
                "Veröffentlichung",
              ],
            },
            {
              title: "Portfolio",
              paragraphs: [
                "Die Agentur darf Arbeiten für Marketingzwecke verwenden.",
              ],
            },
          ],
        },
        {
          title: "Zahlung & Preise",
          subsections: [
            {
              title: "Preise",
              paragraphs: [
                "Alle Preise in Euro (€) zzgl. MwSt.",
              ],
            },
            {
              title: "Zahlungen",
              bullets: [
                "30–50% Anzahlung",
                "Rest bei Meilensteinen",
                "Monatliche Retainer",
              ],
            },
            {
              title: "Zahlungsbedingungen",
              bullets: [
                "30 Tage Zahlungsziel",
                "SEPA, Karte etc.",
              ],
            },
            {
              title: "Zahlungsverzug",
              note:
                "EZB Zinssatz + 8 %, 40 € Gebühr, Serviceaussetzung möglich",
            },
          ],
        },
        {
          title: "Widerrufsrecht",
          note:
            "Gilt nur für Verbraucher gemäß EU-Richtlinie.",
          subsections: [
            {
              title: "Frist",
              paragraphs: [
                "14 Tage Widerrufsrecht.",
              ],
            },
          ],
        },
        {
          title: "Kündigung",
          subsections: [
            {
              title: "Durch Kunden",
              paragraphs: [
                "30 Tage Kündigungsfrist.",
              ],
            },
            {
              title: "Durch Agentur",
              bullets: [
                "Zahlungsverzug",
                "Vertragsbruch",
                "Rechtswidriges Verhalten",
              ],
            },
          ],
        },
        {
          title: "Haftungsbeschränkung",
          paragraphs: [
            "Haftung begrenzt auf Gebühren der letzten 3 Monate.",
          ],
        },
        {
          title: "Anwendbares Recht & Streitigkeiten",
          paragraphs: [
            "Geltendes Recht: [LAND].",
          ],
        },
        {
          title: "Sonstiges",
          paragraphs: [
            "Diese Bedingungen stellen die gesamte Vereinbarung dar.",
          ],
        },
        {
          title: "Kontakt",
          contactCards: [
            { label: "Allgemein", value: "contact@autoanders.com" },
            { label: "Recht / Abrechnung", value: "legal@autoanders.com" },
            { label: "Adresse", value: "[Adresse]" },
            { label: "Antwortzeit", value: "Innerhalb von 5 Werktagen" },
          ],
        },
      ],
    },
    cookie: {
      metadata: {
        title: "Cookie-Richtlinie | AutoAnders",
        description:
          "Informationen darueber, wie Cookies und aehnliche Technologien auf der AutoAnders-Website verwendet werden.",
        locale: "de_DE",
        keywords: [
          "autoanders cookie richtlinie",
          "cookie richtlinie",
          "website cookies",
          "dsgvo cookies",
          "eprivacy cookie hinweis",
        ],
      },
      eyebrow: "Cookies",
      title: "Cookie-Richtlinie",
      intro:
        "Auf dieser Seite wird erklaert, wie Cookies und aehnliche Technologien auf dieser Website verwendet werden, welche Kategorien es gibt und wie Einwilligungen verwaltet werden koennen.",
      heroMeta: [
        "Zuletzt aktualisiert: [DATE]",
        "Konform mit CNIL- und EDPB-Leitlinien",
        "Version 1.0",
      ],
      sections: [
        {
          title: "Was sind Cookies?",
          paragraphs: [
            "Cookies sind kleine Textdateien, die auf Ihrem Geraet gespeichert werden, wenn Sie eine Website besuchen. Sie ermoeglichen es der Website, Ihr Geraet wiederzuerkennen, Ihre Praeferenzen zu speichern und Informationen darueber zu sammeln, wie Sie die Website nutzen.",
            "Wir verwenden Cookies und aehnliche Technologien wie Pixel, Local Storage, Session Storage und Fingerprinting-Skripte auf unserer Website in Uebereinstimmung mit der EU-Richtlinie 2009/136/EG (ePrivacy-Richtlinie) und der DSGVO, wie sie durch EDPB-Leitlinien zur Einwilligung und CNIL-Empfehlungen ausgelegt werden.",
          ],
          note: "Grundprinzip: Wir setzen nicht notwendige Cookies erst, nachdem wir Ihre freiwillige, spezifische, informierte und eindeutige Einwilligung erhalten haben. Sie koennen Ihre Einwilligung jederzeit widerrufen.",
        },
        {
          title: "Cookie-Kategorien",
          paragraphs: [
            "Wir klassifizieren Cookies anhand ihres Zwecks in vier Kategorien.",
          ],
          categories: [
            {
              name: "Unbedingt erforderliche Cookies",
              description:
                "Diese Cookies sind fuer das Funktionieren der Website unverzichtbar. Sie ermoeglichen Kernfunktionen wie Sicherheit, Sitzungsverwaltung und Barrierefreiheit. Diese Cookies koennen nicht deaktiviert werden.",
              badge: "Keine Einwilligung erforderlich",
            },
            {
              name: "Analyse- und Performance-Cookies",
              description:
                "Sie helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym oder pseudonym erhoben werden. Sie werden genutzt, um unsere Website und Dienstleistungen zu verbessern.",
              badge: "Einwilligung erforderlich",
            },
            {
              name: "Marketing- und Retargeting-Cookies",
              description:
                "Sie werden verwendet, um relevante Werbung auszuspielen und die Wirksamkeit von Kampagnen auf Plattformen wie Meta und Google zu messen.",
              badge: "Einwilligung erforderlich",
            },
            {
              name: "Praeferenz-Cookies",
              description:
                "Sie speichern Ihre Einstellungen und Auswahlmoeglichkeiten wie Sprache, Region und Anzeigeoptionen, um Ihr Nutzungserlebnis bei wiederholten Besuchen zu verbessern.",
              badge: "Einwilligung erforderlich",
            },
          ],
        },
        {
          title: "Von uns verwendete Cookies",
          paragraphs: [
            "Nachfolgend finden Sie eine Liste der auf unserer Website verwendeten Cookies. Diese Liste wird aktualisiert, wenn sich unsere Cookie-Nutzung aendert.",
          ],
          cookieTables: [
            {
              title: "Unbedingt erforderlich",
              columns: ["Name", "Anbieter", "Zweck", "Dauer"],
              rows: [
                ["_session", "AutoAnders", "Haelt Ihre Sitzung waehrend der Navigation auf der Website aufrecht", "Sitzung"],
                ["csrf_token", "AutoAnders", "Sicherheits-Token zum Schutz vor Cross-Site-Request-Forgery", "Sitzung"],
                ["cookie_consent", "AutoAnders", "Speichert Ihre Cookie-Einwilligungseinstellungen", "12 Monate"],
              ],
            },
            {
              title: "Analyse (mit Einwilligung)",
              columns: ["Name", "Anbieter", "Zweck", "Dauer"],
              rows: [
                ["_ga, _ga_*", "Google Analytics", "Unterscheidet Nutzer; erfasst Sitzungen und Kampagnen", "2 Jahre"],
                ["_gid", "Google Analytics", "Unterscheidet Nutzer innerhalb eines 24-Stunden-Fensters", "24 Stunden"],
                ["[_pk_id]", "Matomo (optional)", "Datenschutzfreundliche Analyse (falls anstelle von GA verwendet)", "13 Monate"],
              ],
            },
            {
              title: "Marketing & Retargeting (mit Einwilligung)",
              columns: ["Name", "Anbieter", "Zweck", "Dauer"],
              rows: [
                ["_fbp, _fbc", "Meta (Facebook)", "Identifiziert Browser fuer Meta-Werbung und Conversion-Tracking", "3 Monate"],
                ["ads/ga-audiences", "Google Ads", "Retargeting ueber Google Ads auf Grundlage des Besucherverhaltens", "Sitzung"],
                ["tt_webid", "TikTok Pixel", "Erfasst Conversions und Zielgruppenansprache auf TikTok", "13 Monate"],
                ["li_fat_id", "LinkedIn", "LinkedIn Insight Tag fuer Kampagnenanalyse und Retargeting", "30 Tage"],
              ],
            },
            {
              title: "Praeferenzen (mit Einwilligung)",
              columns: ["Name", "Anbieter", "Zweck", "Dauer"],
              rows: [
                ["lang_pref", "AutoAnders", "Speichert Ihre Spracheinstellung", "12 Monate"],
                ["theme_pref", "AutoAnders", "Speichert Ihre Anzeigeeinstellung", "12 Monate"],
              ],
            },
          ],
        },
        {
          title: "Wie wir Einwilligungen einholen und verwalten",
          paragraphs: [
            "In Uebereinstimmung mit EDPB-Leitlinien und Anforderungen nationaler Aufsichtsbehoerden wie CNIL und ICO holen wir Ihre Einwilligung fuer nicht notwendige Cookies ueber ein Cookie-Banner ein, das bei Ihrem ersten Besuch angezeigt wird.",
          ],
          bullets: [
            "Erklaert klar, welche Cookie-Kategorien verwendet werden und zu welchen Zwecken.",
            "Erfordert eine aktive, bestaetigende Handlung zur Einwilligung, ohne vorangekreuzte Kaestchen.",
            "Macht das Ablehnen genauso einfach wie das Akzeptieren.",
            "Verwendet keine Dark Patterns oder manipulativen Designs.",
            "Protokolliert Datum, Uhrzeit und Umfang Ihrer Einwilligung.",
          ],
          note: 'Widerruf oder Aenderung der Einwilligung: Sie koennen Ihre Cookie-Einstellungen jederzeit aendern, indem Sie im Footer unserer Website auf den Link "Cookie Settings" klicken. Der Widerruf der Einwilligung beruehrt nicht die Rechtmaessigkeit der Verarbeitung vor dem Widerruf.',
        },
        {
          title: "Browserbasierte Cookie-Kontrollen",
          paragraphs: [
            "Sie koennen Cookies auch ueber die Einstellungen Ihres Browsers verwalten. Die meisten Browser erlauben es Ihnen, aktuell auf Ihrem Geraet gespeicherte Cookies anzuzeigen, alle oder einzelne Cookies zu loeschen, Cookies von allen oder bestimmten Websites zu blockieren und Do-Not-Track-Signale zu aktivieren, auch wenn nicht alle Websites diese Einstellung beachten.",
            "Das Deaktivieren unbedingt erforderlicher Cookies kann die Funktionalitaet der Website beeintraechtigen. Das Deaktivieren von Analyse- oder Marketing-Cookies beeinflusst Ihre Nutzung unserer Dienste nicht.",
          ],
          links: [
            {
              label: "Google Chrome",
              href: "https://support.google.com/chrome/answer/95647",
            },
            {
              label: "Mozilla Firefox",
              href: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer",
            },
            {
              label: "Apple Safari",
              href: "https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471",
            },
            {
              label: "Microsoft Edge",
              href: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge",
            },
          ],
        },
        {
          title: "Cookies von Drittanbietern und Opt-out",
          paragraphs: [
            "Einige Cookies werden von auf unserer Website eingebundenen Drittanbieterdiensten gesetzt. Diese Drittanbieter haben eigene Datenschutzerklaerungen. Sie koennen deren Tracking direkt ueber die folgenden Dienste deaktivieren.",
          ],
          links: [
            {
              label: "Google Analytics Opt-out",
              href: "https://tools.google.com/dlpage/gaoptout",
            },
            {
              label: "Meta Ad Preferences",
              href: "https://www.facebook.com/settings/?tab=ads",
            },
            {
              label: "Google Ad Settings",
              href: "https://adssettings.google.com",
            },
            {
              label: "Your Online Choices (EDAA)",
              href: "https://www.youronlinechoices.eu",
            },
          ],
        },
        {
          title: "Aktualisierungen dieser Richtlinie",
          paragraphs: [
            "Wir koennen diese Cookie-Richtlinie aktualisieren, wenn wir die von uns verwendeten Cookies aendern oder sich rechtliche Anforderungen aendern. Ueber wesentliche Aenderungen informieren wir Sie ueber unser Cookie-Banner oder durch ein aktualisiertes Datum auf dieser Seite. Wir empfehlen, diese Seite regelmaessig zu ueberpruefen.",
            "Bei Fragen zu unserem Einsatz von Cookies kontaktieren Sie uns unter privacy@autoanders.com.",
          ],
        },
      ],
      note:
        "Vor der Veroeffentlichung ersetzen Sie bitte [DATE], falls erforderlich, und stellen Sie sicher, dass die aufgefuehrten Cookies und Drittanbieter-Dienste den tatsaechlich auf der Live-Website eingesetzten Tools entsprechen.",
    },
  },
};

