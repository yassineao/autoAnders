import type { LocaleDictionary } from "../../../types/LocaleDictionary";

export const deDictionary: LocaleDictionary = {
    localeName: "Deutsch",
    nav: {
      ariaLabel: "Hauptnavigation",
      homeAriaLabel: "Zur Startseite von AutoAnders",
      items: [
        { label: "Vorteile", href: "/advantages" },
        {
          label: "Auto kaufen",
          href: "/services",
          children: [
            {
              label: "Verfuegbare Autos",
              href: "/services/social-media",
            },
            {
              label: "Finanzierung",
              href: "/services/content-creation",
            },
            {
              label: "Inzahlungnahme",
              href: "/services/performance-marketing",
            },
            { label: "Fahrzeugcheck", href: "/services/webdesign" },
          ],
        },
        { label: "FAQ", href: "/faq" },
        { label: "Auto verkaufen", href: "/sell-your-car" },
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
        { label: "Auto kaufen", href: "#services" },
        { label: "Über uns", href: "/about" },
      ],
      serviceLinks: [
        { label: "Verfuegbare Autos", href: "/services/social-media" },
        { label: "Finanzierung", href: "/services/content-creation" },
        { label: "Inzahlungnahme", href: "/services/performance-marketing" },
        { label: "Fahrzeugcheck", href: "/services/webdesign" },
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
  cars: [
    {
      id: 1,
      brand: "BMW",
      model: "320i",
      price: 24950,
      year: 2019,
      km: 82000,
      transmission: "Automatik",
      fuel: "Benzin",
      image: "/cars/bmw.jpg",
      tags: ["Navigation", "Leder", "Garantie"],
    },
    {
      id: 2,
      brand: "Audi",
      model: "A4 Avant",
      price: 21750,
      year: 2018,
      km: 96000,
      transmission: "Schaltung",
      fuel: "Diesel",
      image: "/cars/audi.jpg",
      tags: ["LED", "Kamera", "Tempomat"],
    },
    {
      id: 3,
      brand: "Mercedes",
      model: "C-Klasse",
      price: 29900,
      year: 2020,
      km: 61000,
      transmission: "Automatik",
      fuel: "Hybrid",
      image: "/cars/mercedes.jpg",
      tags: ["AMG Line", "PDC", "Sitzheizung"],
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
        title: "Unsere Leistungen | Social Media, Content & Webdesign | Gloyoo",
        
        // ✅ IMPROVED: Better flow, removed "fuer" typo
        description:
          "Entdecken Sie unsere Leistungen: strategische Social-Media-Betreuung, Content Creation, Performance Marketing und Webdesign für mehr Sichtbarkeit und Anfragen.",
        
        locale: "de_DE",
        
        keywords: [
          "social media betreuung",
          "content creation agentur",
          "performance marketing",
          "webdesign",
          "instagram marketing",
          "facebook ads",
        ],
      },
      overview: {
        hero: {
          eyebrow: "Unsere Leistungen",
          title:
            "Leistungsübersicht für Marken mit Anspruch auf einen starken digitalen Auftritt",
          description:
            "Entdecken Sie die Leistungen, mit denen wir Sichtbarkeit, Struktur und Wachstum für moderne Marken aufbauen.",
          primaryCta: "Beratung anfragen",
        },
        cards: {
          eyebrow: "Leistungen entdecken",
          description:
            "Wählen Sie den Leistungsbereich, der zu Ihrem nächsten Schritt passt, und sehen Sie sich anschließend die Details an.",
          imageAlts: {
            "social-media":
              "Abstrakte Illustration für Social Media Betreuung",
            "content-creation": "Abstrakte Illustration für Content Creation",
            "performance-marketing":
              "Abstrakte Illustration für Performance Marketing",
            webdesign: "Abstrakte Illustration für Webdesign",
          },
        },
      },
      hero: {
        "social-media": {
          imageUrl: "/bg.jpg",
          badge: "Social Media Betreuung",
          title: "Social Media Betreuung, die Ihre Marke sichtbar macht",
          
          // ✅ IMPROVED: Fixed typo "Kanaele" → "Kanäle", "regelmaessig" → "regelmäßig"
          description:
            "Wir planen, gestalten und betreuen Ihre Kanäle so, dass Ihre Marke professionell auftritt und regelmäßig qualifizierte Anfragen gewinnt.",
          
          primaryCta: "Beratung anfragen",
          secondaryCta: "Mehr erfahren",
          imageAlt: "Social Media Betreuung von Gloyoo",
        },
        "content-creation": {
          badge: "Content Creation",
          imageUrl: "/bg.jpg",
          title: "Content Creation, die Aufmerksamkeit in Vertrauen verwandelt",
          
          // ✅ IMPROVED: Fixed typo "staerken" → "stärken"
          description:
            "Von Reels bis Brand Assets erstellen wir Inhalte, die Ihre Zielgruppe ansprechen, Wiedererkennung schaffen und Ihre Marke stärken.",
          
          primaryCta: "Projekt anfragen",
          secondaryCta: "Referenzen ansehen",
          imageAlt: "Content Creation von Gloyoo",
        },
        "performance-marketing": {
          imageUrl: "/bg.jpg",
          badge: "Performance Marketing",
          title: "Performance Marketing mit Fokus auf Leads und Umsatz",
          
          // ✅ IMPROVED: Fixed typo "Kanaelen" → "Kanälen", "zaehlen" → "zählen"
          description:
            "Mit datenbasierten Kampagnen steigern wir Reichweite, Conversions und messbare Ergebnisse auf den Kanälen, die für Ihr Unternehmen zählen.",
          
          primaryCta: "Strategie anfragen",
          secondaryCta: "Potenzial entdecken",
          imageAlt: "Performance Marketing von Gloyoo",
        },
        webdesign: {
          imageUrl: "/bg.jpg",
          badge: "Webdesign",
          
          // ✅ IMPROVED: Fixed typo "ueberzeugt" → "überzeugt"
          title: "Webdesign, das überzeugt und Anfragen erzeugt",
          
          // ✅ IMPROVED: Fixed typos "praesentieren" → "präsentieren"
          description:
            "Wir entwickeln moderne Websites, die Ihre Marke professionell präsentieren, Vertrauen aufbauen und Besucher in Kundenanfragen verwandeln.",
          
          primaryCta: "Website planen",
          secondaryCta: "Mehr erfahren",
          imageAlt: "Webdesign von Gloyoo",
        },
      },
      features: {
        badge: "Unsere Kernleistungen",
        title: "Jede Marke braucht einen klaren, starken digitalen Auftritt.",
        
        // ✅ IMPROVED: Fixed typos throughout
        description:
          "Wir kombinieren Strategie, Kreativität und Umsetzung, damit Ihre Online-Präsenz professionell wirkt und messbare Ergebnisse liefert.",
        
        items: [
          {
            title: "Mehr Reichweite",
            description:
              "Steigern Sie Sichtbarkeit, Website-Besuche und qualifizierte Kontakte über starke Inhalte und Kampagnen.",
            imageAlt: "Reichweitensteigerung durch Social Media",
            statLabel: "45%",
          },
          {
            title: "Struktur für Ihr Marketing",
            description:
              "Klare Prozesse, abgestimmte Inhalte und ein konsistenter Markenauftritt für nachhaltiges Wachstum.",
            imageAlt: "Marketing-Struktur und Prozesse",
          },
          {
            title: "Nahtlose Umsetzung",
            description:
              "Webdesign, Content und Performance Marketing greifen ineinander und sorgen für ein stimmiges Gesamterlebnis.",
            imageAlt: "Integrierte digitale Marketing-Lösungen",
          },
        ],
        sections: [
          {
            title: "Projekte strategisch steuern",
            points: [
              "Klare Content- und Kampagnenplanung für Ihre Ziele",
              "Abgestimmte Prozesse zwischen Marke, Design und Performance",
              "Messbare Prioritäten für nachhaltiges Wachstum",
              "Mehr Struktur für interne und externe Zusammenarbeit",
              "Schnellere Abstimmungen mit klaren Freigabewegen",
              "Bessere Übersicht über laufende Maßnahmen",
              "Verlässliche Umsetzung über alle Kanäle hinweg",
              "Transparente Kommunikation zu Fortschritt und Ergebnissen",
              "Planbare Maßnahmen statt spontaner Einzelaktionen",
            ],
          },
          {
            title: "Ihre Website gezielt weiterentwickeln",
            points: [
              "Texte und Inhalte passend zu Ihrer Zielgruppe strukturieren",
              "Design und Nutzerführung für mehr Vertrauen optimieren",
              "Klare Botschaften für Angebote und Leistungen ausarbeiten",
              "Responsives Erlebnis für Mobile und Desktop sicherstellen",
              "Schnelle Anpassungen ohne unnötige Komplexität ermöglichen",
              "Einheitlichen Markenauftritt über alle Seiten halten",
              "Conversion-starke Elemente bewusst platzieren",
              "Inhalte flexibel für Kampagnen und Aktionen erweitern",
              "Technische Basis für Sichtbarkeit und Performance stärken",
            ],
          },
          {
            title: "Markenauftritt konsistent gestalten",
            points: [
              "Social Media, Website und Werbemittel visuell verbinden",
              "Wiedererkennbare Inhalte für eine starke Markenwirkung entwickeln",
              "Designsysteme schaffen, die im Alltag nutzbar bleiben",
              "Vorlagen für Posts, Landingpages und Kampagnen vorbereiten",
              "Kreative Ideen sauber in die Umsetzung bringen",
              "Markenwerte in Bildsprache und Tonalität übersetzen",
              "Flexibel auf neue Formate und Trends reagieren",
              "Professionellen Auftritt über alle Kontaktpunkte sichern",
              "Mehr Konsistenz ohne an Individualität zu verlieren",
            ],
          },
        ],
      },
      hero2: {
        badge: "Warum Gloyoo?",
        title: "Gemeinsam schaffen wir einen Auftritt, der sichtbar macht, wofür Ihre Marke steht.",
        description:
          "Wir entwickeln keine Standardlösungen. Jedes Unternehmen, jede Marke und jedes Ziel ist anders. Deshalb arbeiten wir eng mit Ihnen zusammen, um eine individuelle Strategie und einen Auftritt zu schaffen, der wirklich zu Ihnen passt.",
        subtitle: "Lassen Sie uns gemeinsam Ihre digitale Präsenz gestalten.",
        subdescription:
          "Ob Social Media, Content oder Webdesign – wir bringen Ihre Marke online zum Strahlen und sorgen dafür, dass Sie dort sichtbar wird, wo Ihre Zielgruppe unterwegs ist.",
        imageAlt: "Abstrakte 3D-Formen im Hintergrund",
        imageUrl: "/bg.jpg",
      },
      seo: {
        areaServed: ["Germany", "Austria", "Switzerland"],
        knowsAbout: [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
          "Instagram Marketing",
          "Facebook Advertising",
        ],
        offerCatalogName: "Unsere Leistungen",
        services: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
    form: {
      metadata: {
        // ✅ IMPROVED: More action-oriented title
        title: "Kontakt & Beratung | Projekt mit Gloyoo starten",
        
        description:
          "Starten Sie Ihr Projekt mit Gloyoo. Kontaktieren Sie uns für Social Media, Content Creation, Performance Marketing oder Webdesign – wir melden uns zeitnah bei Ihnen.",
        
        locale: "de_DE",
        
        keywords: [
          "kontakt gloyoo",
          "beratung social media",
          "projekt anfragen",
          "social media agentur kontakt",
          "webdesign anfrage",
        ],
      },
      content: {
        title: "Kontakt aufnehmen",
        
        // ✅ IMPROVED: Fixed typo "Gespraech" → "Gespräch"
        description:
          "Sie haben eine Frage oder schon eine konkrete Idee? Unser Team freut sich darauf, mit Ihnen ins Gespräch zu kommen.",
        
        fields: {
          companyName: "Firmenname",
          lastName: "Nachname",
          email: "E-Mail",
          phoneNumber: "Telefonnummer",
          message: "Nachricht",
        },
        placeholders: {
          companyName: "Muster GmbH",
          lastName: "Mustermann",
          email: "hallo@unternehmen.de",
          phoneNumber: "+49 123 456789",
          
          // ✅ IMPROVED: Fixed typo "Erzaehlen" → "Erzählen"
          message: "Erzählen Sie uns kurz von Ihrem Projekt",
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
            "Wir entwickeln keine Standardlösungen. Gemeinsam schaffen wir einen Auftritt, der sichtbar macht, wofür Ihre Marke steht.",
          author: "Gloyoo Team",
          imageAlt: "Abstrakte 3D-Formen im Hintergrund des Kontaktformulars",
          imageUrl: "/bg.jpg",
        },
      },
      seo: {
        areaServed: ["Germany", "Austria", "Switzerland"],
        knowsAbout: [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
        offerCatalogName: "Kontakt und Beratung",
        services: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
    pages: {
      about: {
        metadata: {
          title: "Über Uns | Gloyoo",
          description:
            "Erfahren Sie mehr über Gloyoo, unsere Arbeitsweise und wie wir Unternehmen mit Social Media, Content und Webdesign beim Wachstum unterstützen.",
          locale: "de_DE",
          keywords: [
            "über gloyoo",
            "social media agentur team",
            "webdesign agentur",
            "digitale agentur werte",
          ],
        },
        eyebrow: "Über Gloyoo",
        title: "Ihre Agentur für Social Media und moderne Webseiten",
        intro:
          "Bei Gloyoo unterstützen wir Unternehmen dabei, ihre digitale Präsenz professionell aufzubauen und gezielt zu optimieren. Unser Fokus liegt auf messbaren Ergebnissen: mehr Reichweite, mehr Anfragen und mehr Umsatz.",
        sections: [
          {
            title: "Unser Ansatz",
            paragraphs: [
              "Bei Gloyoo unterstützen wir Unternehmen dabei, ihre digitale Präsenz professionell aufzubauen und gezielt zu optimieren. Unser Fokus liegt auf messbaren Ergebnissen: mehr Reichweite, mehr Anfragen und mehr Umsatz.",
              "Als Remote-Agentur kombinieren wir modernes Webdesign mit effektiven Social Media Strategien und begleiten Marken von der Positionierung bis zur laufenden Betreuung, flexibel, digital und deutschlandweit verfügbar.",
            ],
          },
          {
            title: "Wie wir arbeiten",
            bullets: [
              "Wir setzen auf klare Strategien statt Aktionismus und verbinden Kreativität mit messbaren Zielen.",
              "Unsere Zusammenarbeit ist remote, flexibel und auf transparente Kommunikation ausgelegt.",
              "Wir begleiten Projekte von der Positionierung bis zur laufenden Betreuung und Optimierung.",
            ],
          },
          {
            title: "Worauf wir Wert legen",
            bullets: [
              "Verlässliche Umsetzung und ehrliche Beratung.",
              "Design und Inhalte, die Vertrauen aufbauen und Anfragen fördern.",
              "Digitale Lösungen, die zu Ihrem Unternehmen, Ihrem Angebot und Ihren Ressourcen passen.",
            ],
          },
        ],
        ctaLabel: "Projekt mit uns starten",
      },
      privacy: {
        metadata: {
          title: "Datenschutz | Gloyoo",
          description:
            "Informationen darueber, wie personenbezogene Daten auf der Gloyoo-Website und im Rahmen der Leistungserbringung verarbeitet werden.",
          locale: "de_DE",
          keywords: [
            "gloyoo datenschutz",
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
              "Gloyoo\n[Vollstaendige registrierte Anschrift]\nUSt-ID: [EU VAT number]\nE-Mail: [privacy@youragency.com]\n[Datenschutzbeauftragter (falls vorhanden): [dpo@youragency.com]]",
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
                  "Social-Media-Zugangsdaten: Login-Zugaenge, Seitenrollen und Werbekonto-Zugaenge nur dort, wo wir Ihre Profile verwalten.",
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
                  "Daten von Social-Media-Plattformen wie Meta, TikTok und LinkedIn, wenn wir Ihre Konten verwalten.",
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
              "Zur Bereitstellung und Verwaltung unserer Social-Media- und Webdesign-Dienstleistungen.",
              "Zur Kommunikation mit Ihnen ueber Ihr Projekt, Angebote und Rechnungen.",
              "Zur Erfuellung unserer buchhalterischen und rechtlichen Pflichten.",
              "Zum Versand von Service-Updates, Newslettern und relevanten Marketinginformationen, soweit eine Einwilligung erforderlich ist.",
              "Zur Verbesserung unserer Website und Dienstleistungen durch Analytics.",
              "Zum Schutz vor Betrug und zur Gewaehrleistung von Sicherheit.",
              "Zur Darstellung abgeschlossener Arbeiten in unserem Portfolio mit Einwilligung oder auf Grundlage berechtigter Interessen.",
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
                  "Social-Media-Plattformen wie Meta, TikTok, LinkedIn und Google, soweit dies fuer die Verwaltung von Kundenkonten erforderlich ist.",
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
                ["Social-Media-Zugangsdaten", "Loeschung innerhalb von 30 Tagen nach Vertragsende", "Datenminimierung"],
                ["E-Mail-Kommunikation", "5 Jahre nach Projektende", "Streitbeilegung"],
              ],
            },
          },
          {
            title: "Ihre GDPR-Rechte",
            paragraphs: [
              "Unter der GDPR stehen Ihnen die folgenden Rechte in Bezug auf Ihre personenbezogenen Daten zu.",
              "Um Ihre Rechte auszuueben, kontaktieren Sie [privacy@youragency.com]. Wir werden innerhalb von 30 Kalendertagen antworten. Vor der Bearbeitung Ihres Antrags koennen wir eine Identitaetspruefung verlangen.",
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
              "Wir erheben nicht wissentlich personenbezogene Daten von Kindern. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten uebermittelt hat, kontaktieren Sie uns bitte unverzueglich unter [privacy@youragency.com], und wir werden diese umgehend loeschen.",
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
              "Privacy & GDPR: [privacy@youragency.com]\nDatenschutzbeauftragter: [dpo@youragency.com] (falls vorhanden)\nPost: Gloyoo, [Vollstaendige Anschrift], z. Hd. Privacy Team\nAntwortfrist: Innerhalb von 30 Kalendertagen (GDPR-Frist)",
          },
        ],
        note:
          "Vor der Veroeffentlichung ersetzen Sie bitte alle Platzhalter wie [DATE], Firmenname, Anschrift, USt-Nummer, Privacy-E-Mail und DPO-Angaben. Pruefen Sie zudem, dass die aufgefuehrten Tools, Auftragsverarbeiter, Aufbewahrungsfristen und Rechtsgrundlagen mit den tatsaechlich eingesetzten Services des Live-Betriebs uebereinstimmen.",
      },
     impressum: {
  metadata: {
    title: "Impressum | Gloyoo",
    description:
      "Impressum und gesetzlich vorgeschriebene Anbieterkennzeichnung für die Gloyoo-Website gemäß den Anforderungen der Europäischen Union.",
    locale: "de_DE",
    keywords: [
      "gloyoo impressum",
      "impressum",
      "anbieterkennzeichnung",
      "anbieterinformationen",
      "rechtliche angaben website",
    ],
  },
  eyebrow: "Rechtliches",
  title: "Impressum",
  intro:
    "Diese Seite enthält die gesetzlich vorgeschriebenen Anbieter- und Offenlegungsangaben für die Gloyoo-Website.",
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
        { label: "Firmenname", value: "Gloyoo" },
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
        { label: "E-Mail", value: "contact@Gloyoo.com" },
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
        "Alle Inhalte dieser Website sind Eigentum von Gloyoo oder deren Partnern und durch EU-Urheberrecht geschützt (Richtlinie (EU) 2019/790).",
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
        "Soweit gesetzlich zulässig, haftet Gloyoo nicht für Schäden aus der Nutzung dieser Website.",
      ],
    },
    {
      title: "Rechtlicher Rahmen",
      paragraphs: [
        "Es gilt das Recht von [LAND] sowie EU-Recht.",
        "Kontakt: [legal@youragency.com]",
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
      "Allgemeine Geschäftsbedingungen für Gloyoo Dienstleistungen, einschließlich Social Media Management, Webdesign, Zahlungsbedingungen, Haftung und Streitbeilegung.",
    locale: "de_DE",
    keywords: [
      "gloyoo agb",
      "allgemeine geschäftsbedingungen",
      "agentur agb",
      "webdesign vertrag",
      "social media management agb",
    ],
  },
  eyebrow: "Rechtliches",
  title: "Allgemeine Geschäftsbedingungen",
  intro:
    "Diese Seite beschreibt die Bedingungen für die von Gloyoo erbrachten Dienstleistungen, einschließlich Umfang, Zahlungen, geistigem Eigentum, Kündigung, Haftung und Streitbeilegung.",
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
        '"Agentur" / "Wir" — Gloyoo',
        '"Kunde" / "Sie" — natürliche oder juristische Person',
        '"Verbraucher" — gemäß EU-Richtlinie 2011/83/EU',
        '"Dienstleistungen" — Social Media, Webdesign und digitale Services',
        '"Vertrag" — Vereinbarung zwischen Agentur und Kunde',
        '"Leistungen" — Inhalte, Code, Designs und Ergebnisse',
        '"Leistungsbeschreibung (SOW)" — Umfang, Zeitplan und Preis',
      ],
    },
    {
      title: "Dienstleistungen",
      subsections: [
        {
          title: "Social Media Management",
          bullets: [
            "Strategie und Redaktionsplanung",
            "Content-Erstellung",
            "Community Management",
            "Paid Advertising (Meta, TikTok, LinkedIn, Google)",
            "Reporting und Optimierung",
          ],
        },
        {
          title: "Webdesign & Entwicklung",
          bullets: [
            "UX/UI Design",
            "CMS (WordPress, Webflow, Shopify)",
            "E-Commerce Entwicklung",
            "Wartung & SEO",
            "Barrierefreiheit (WCAG 2.1 / EN 301 549)",
          ],
        },
        {
          title: "Zusatzleistungen",
          bullets: [
            "Branding",
            "E-Mail-Marketing",
            "Digitale Analysen",
          ],
        },
      ],
      note:
        "Der genaue Leistungsumfang wird in einer Leistungsbeschreibung (SOW) definiert.",
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
        { label: "Allgemein", value: "contact@Gloyoo.com" },
        { label: "Recht / Abrechnung", value: "[legal@youragency.com]" },
        { label: "Adresse", value: "[Adresse]" },
        { label: "Antwortzeit", value: "Innerhalb von 5 Werktagen" },
      ],
    },
  ],
},
      cookie: {
        metadata: {
          title: "Cookie-Richtlinie | Gloyoo",
          description:
            "Informationen darueber, wie Cookies und aehnliche Technologien auf der Gloyoo-Website verwendet werden.",
          locale: "de_DE",
          keywords: [
            "gloyoo cookie richtlinie",
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
                  ["_session", "Gloyoo", "Haelt Ihre Sitzung waehrend der Navigation auf der Website aufrecht", "Sitzung"],
                  ["csrf_token", "Gloyoo", "Sicherheits-Token zum Schutz vor Cross-Site-Request-Forgery", "Sitzung"],
                  ["cookie_consent", "Gloyoo", "Speichert Ihre Cookie-Einwilligungseinstellungen", "12 Monate"],
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
                  ["lang_pref", "Gloyoo", "Speichert Ihre Spracheinstellung", "12 Monate"],
                  ["theme_pref", "Gloyoo", "Speichert Ihre Anzeigeeinstellung", "12 Monate"],
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
              "Bei Fragen zu unserem Einsatz von Cookies kontaktieren Sie uns unter privacy@gloyoo.com.",
            ],
          },
        ],
        note:
          "Vor der Veroeffentlichung ersetzen Sie bitte [DATE], falls erforderlich, und stellen Sie sicher, dass die aufgefuehrten Cookies und Drittanbieter-Dienste den tatsaechlich auf der Live-Website eingesetzten Tools entsprechen.",
      },
    },
};
