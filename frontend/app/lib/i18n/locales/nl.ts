import type { LocaleDictionary } from "../../../types/LocaleDictionary";

export const nlDictionary: LocaleDictionary = {
  localeName: "Nederlands",
  nav: {
    ariaLabel: "Hoofdnavigatie",
    homeAriaLabel: "Ga naar AutoAnders homepage",
    items: [
      {
        label: "Auto kopen",
        href: "/Catalogue",
        // children: [
        //   {
        //     label: "Beschikbare auto's",
        //     href: "/Catalogue",
        //   },
        //   {
        //     label: "Financiering",
        //     href: "/Catalogue",
        //   },
        //   {
        //     label: "Inruilservice",
        //     href: "/Catalogue",
        //   },
        //   { label: "Voertuigcheck", href: "/Catalogue" },
        // ],
      },
      
      { label: "Auto verkopen", href: "/Sell" },
      { label: "FAQ", href: "/faq" },
      { label: "Over Ons", href: "/about" },
    ],
    contactLabel: "Contact",
    mobileMenuLabel: "Menu",
    switchLabel: "EN",
  },
  footer: {
    tagline: "Vind, koop of verkoop uw volgende auto met vertrouwen.",
    navigationTitle: "Navigatie",
    servicesTitle: "Auto's",
    contactTitle: "Contact",
    navigationLinks: [
      { label: "Home", href: "/" },
      { label: "Voordelen", href: "/advantages" },
      { label: "Auto kopen", href: "/Catalogue" },
      { label: "Over Ons", href: "/about" },
    ],
    serviceLinks: [
      { label: "Beschikbare auto's", href: "/Catalogue" },
      { label: "Financiering", href: "/Catalogue" },
      { label: "Inruilservice", href: "/Catalogue" },
      { label: "Voertuigcheck", href: "/Catalogue" },
    ],
    contactLinks: [
      { label: "Auto verkopen", href: "/form" },
      { label: "Bod aanvragen", href: "/form" },
      { label: "Auto's bekijken", href: "#services" },
    ],
    rights: "Alle rechten voorbehouden.",
    legalLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Colofon", href: "/impressum" },
      { label: "Voorwaarden", href: "/terms" },
      { label: "Cookies", href: "/cookie" },
    ],
  },
  home: {
    metadata: {
      title: "Auto's kopen en verkopen | AutoAnders",
      description:
        "Bekijk gecontroleerde occasions, ontvang een eerlijk bod op uw auto en koop uw volgende voertuig met duidelijke informatie.",
      locale: "nl_NL",
      keywords: [
        "auto kopen",
        "occasion kopen",
        "auto verkopen",
        "autodealer",
        "automarkt",
        "autofinanciering",
        "auto inruilen",
        "voertuigcheck",
      ],
    },
    hero: {
      eyebrow: "Auto's kopen en verkopen met vertrouwen",
      titleFirst: "Vind uw volgende auto",
      titleSecond: "of verkoop de uwe voor een eerlijke prijs",
      description:
        "AutoAnders helpt u beschikbare auto's te vergelijken, belangrijke details te begrijpen en kopen of verkopen zonder druk af te ronden.",
      primaryCta: "Auto's bekijken",
      secondaryCta: "Auto verkopen",
      videoAlt: "Video-preview van beschikbare voertuigen bij AutoAnders",
      imageAlt: "Moderne auto via AutoAnders",
    },
    advantages: {
      eyebrow: "Uw Voordelen",
      title: "Waarom bestuurders kiezen voor AutoAnders",
      description:
        "We maken auto's kopen en verkopen duidelijker, sneller en eenvoudiger met gecontroleerde voertuigen, eerlijke biedingen en persoonlijke begeleiding.",
      items: [
        {
          value: "Meer",
          title: "Keuze",
          subtitle:
            "Vergelijk zorgvuldig geselecteerde auto's met de informatie die u nodig heeft voor uw beslissing.",
        },
        {
          value: "Eerlijke",
          title: "Prijzen",
          subtitle:
            "Krijg transparante prijzen en realistische biedingen bij kopen, verkopen of inruilen.",
        },
        {
          value: "Minder",
          title: "Stress",
          subtitle:
            "Voertuigcheck, papierwerk en begeleiding lopen met u mee van begin tot eind.",
        },
      ],
    },
    services: {
      eyebrow: "Onze Diensten",
      title: "Alles wat u nodig heeft om een auto te kopen of verkopen",
      description:
        "Bekijk beschikbare voertuigen, krijg hulp bij financiering en ontvang een eerlijk bod als u uw huidige auto wilt verkopen of inruilen.",
      cta: "Starten",
      items: [
        {
          title: "Beschikbare auto's",
          description:
            "Ontdek gecontroleerde auto's met duidelijke foto's, belangrijke details, kilometerstand, uitrusting en prijs.",
        },
        {
          title: "Financiering",
          description:
            "Vind een betalingsoptie die past bij uw budget met duidelijke begeleiding en zonder druk.",
        },
        {
          title: "Verkopen of inruilen",
          description:
            "Stuur ons uw voertuiggegevens en ontvang een eerlijk bod voor verkoop of inruil.",
        },
      ],
    },
    about: {
      eyebrow: "Over AutoAnders",
      title: "Een eenvoudigere manier om auto's te kopen en verkopen",
      paragraphs: [
        "AutoAnders is er voor bestuurders die duidelijke informatie, eerlijke prijzen en prettige begeleiding willen bij het kopen van een auto.",
        "Of u nu uw volgende auto zoekt of uw huidige voertuig wilt verkopen: wij helpen u opties te begrijpen, eerlijk te vergelijken en met vertrouwen te beslissen.",
      ],
      cta: "Neem contact op",
      more: "Meer"
    },
    scrollTexts: ["Beschikbare auto's", "Eerlijke biedingen"],
  catalogue: {
  title: "Onze voertuigen",
  subtitle: "Beschikbare auto's",
  labels: {
    vehiclesFound: "voertuigen gevonden",
    searchPlaceholder: "Zoek trefwoord",
    allBrands: "Alle merken",
    allTransmissions: "Alle transmissies",
    firstRegistrationDate: "Eerste registratie",
    maxMileage: "Maximale kilometerstand",
    maxPrice: "Maximale prijs",
    allColours: "Alle kleuren",
    allFuels: "Alle brandstoffen",
    engineCapacity: "Cilinderinhoud",
    allDoorCounts: "Aantal deuren",
    allConditions: "Nieuw / gebruikt",
    allGearCounts: "Aantal versnellingen",
    allVatOptions: "BTW",
    allVehicles: "Voertuigtype",
    searchButton: "Zoeken",
    resetButton: "Resetten",
    viewDetails: "Bekijk details",
    moreButton: "Meer",
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
      transmission: "Automaat",
      fuel: "Benzine",
      engineCapacity: 1998,
      numberOfDoors: 4,
      condition: "Gebruikt",
      numberOfGears: 8,
      vat: "BTW aftrekbaar",
      vehicle: "Sedan",
      colour: "Zwart",
      image: "/cars/bmw.jpg",
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
      transmission: "Handgeschakeld",
      fuel: "Diesel",
      engineCapacity: 1968,
      numberOfDoors: 5,
      condition: "Gebruikt",
      numberOfGears: 6,
      vat: "BTW aftrekbaar",
      vehicle: "Stationwagen",
      colour: "Grijs",
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
      transmission: "Automaat",
      fuel: "Hybride",
      engineCapacity: 1991,
      numberOfDoors: 4,
      condition: "Gebruikt",
      numberOfGears: 9,
      vat: "BTW aftrekbaar",
      vehicle: "Sedan",
      colour: "Wit",
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
      areaServed: ["Netherlands", "Belgium"],
      knowsAbout: [
        "Occasions",
        "Auto verkoop",
        "Auto inruilen",
        "Autofinanciering",
        "Voertuigcheck",
        "Autowaardering",
        "Autodealer",
      ],
      offerCatalogName: "Onze autoservices",
      services: [
        "Beschikbare auto's",
        "Financiering",
        "Inruilservice",
        "Voertuigcheck",
      ],
    },
  },
  faq: {
  metadata: {
    title: "FAQ | Auto Kopen & Verkopen | AutoAnders",
    description:
      "Antwoorden op veelgestelde vragen over occasions, auto verkopen, inruilen, financiering en een auto kopen bij AutoAnders.",
    locale: "nl_NL",
    keywords: [
      "auto faq",
      "occasion vragen",
      "auto verkopen faq",
      "autofinanciering vragen",
      "auto inruilen faq",
    ],
  },
  badge: "FAQ",
  title: "Veelgestelde vragen over AutoAnders",
  description:
    "Een snel overzicht van vragen die klanten het vaakst stellen vóór het kopen, verkopen of financieren van een auto.",
  ctaLabel: "Bekijk alle FAQ's",
  items: [
    {
      question: "Welke auto's biedt AutoAnders aan?",
      answer:
        "Wij bieden gecontroleerde occasions aan van verschillende merken en modellen. Ons aanbod verandert regelmatig, dus het loont om onze voorraad vaak te bekijken.",
    },
    {
      question: "Zijn de auto's gecontroleerd?",
      answer:
        "Ja, onze voertuigen worden vóór verkoop gecontroleerd en aangeboden met duidelijke informatie over staat, kilometerstand en uitrusting.",
    },
    {
      question: "Kan ik mijn huidige auto verkopen?",
      answer:
        "Ja, u kunt uw voertuig direct aan ons verkopen. Stuur ons eenvoudig de belangrijkste gegevens en wij doen een eerlijk bod.",
    },
    {
      question: "Is inruilen mogelijk?",
      answer:
        "Ja, wij nemen uw huidige auto graag in en verrekenen de waarde met uw volgende auto.",
    },
    {
      question: "Biedt AutoAnders financiering aan?",
      answer:
        "Ja, wij helpen u met passende financieringsmogelijkheden zodat u flexibel kunt betalen voor uw volgende auto.",
    },
    {
      question: "Kan ik een proefrit maken?",
      answer:
        "Ja, na het maken van een afspraak kunt u de auto bekijken en een proefrit maken.",
    },
    {
      question: "Hoe snel krijg ik een bod op mijn auto?",
      answer:
        "Na het versturen van uw voertuiggegevens reageren wij meestal zo snel mogelijk met een realistisch bod.",
    },
    {
      question: "Welke documenten heb ik nodig bij verkoop?",
      answer:
        "Meestal heeft u het kentekenbewijs, tenaamstellingsbewijs, APK-documenten, onderhoudshistorie, sleutels en aanwezige accessoires nodig.",
    },
    {
      question: "Kan ik mijn auto zonder geldige APK verkopen?",
      answer:
        "Ja, ook voertuigen zonder geldige APK kunnen afhankelijk van de staat worden aangeboden en beoordeeld.",
    },
    {
      question: "Waarom kiezen voor AutoAnders?",
      answer:
        "Wij staan voor transparante prijzen, persoonlijk advies, gecontroleerde voertuigen en een eenvoudig proces voor kopen of verkopen.",
    },
  ],
},
  servicePage: {
    metadata: {
      title: "Autoservices | Kopen, financieren, inruilen | AutoAnders",
      description:
        "Ontdek onze autoservices: beschikbare voertuigen, financiering, inruilbiedingen en transparante voertuigchecks.",
      locale: "nl_NL",
      keywords: [
        "occasion kopen",
        "autofinanciering",
        "auto inruilen",
        "auto verkopen",
        "voertuigcheck",
        "autodealer",
      ],
    },
    overview: {
      hero: {
        eyebrow: "Onze autoservices",
        title:
          "Alles rond uw volgende auto op een plek",
        description:
          "Ontdek hoe AutoAnders u helpt de juiste auto te vinden, duidelijk te financieren of uw huidige voertuig eerlijk te verkopen.",
        primaryCta: "Auto's bekijken",
      },
      cards: {
        eyebrow: "Opties ontdekken",
        description:
          "Kies wat u nu nodig heeft en zie hoe we u helpen bij kopen, verkopen of inruilen.",
        imageAlts: {
          "social-media": "Illustratie voor beschikbare auto's",
          "content-creation": "Illustratie voor autofinanciering",
          "performance-marketing":
            "Illustratie voor inruilservice",
          webdesign: "Illustratie voor voertuigcheck",
        },
      },
    },
    hero: {
      "social-media": {
        imageUrl: "/bg.jpg",
        badge: "Social Media Beheer",
        title: "Social Media Beheer dat Uw Merk Zichtbaar Maakt",
        description:
          "We plannen, ontwerpen en beheren uw kanalen zodat uw merk professioneel overkomt en regelmatig gekwalificeerde aanvragen genereert.",
        primaryCta: "Advies Aanvragen",
        secondaryCta: "Meer Informatie",
        imageAlt: "Social Media Beheer door Gloyoo",
      },
      "content-creation": {
        badge: "Contentcreatie",
        imageUrl: "/bg.jpg",
        title: "Contentcreatie die Aandacht Omzet in Vertrouwen",
        description:
          "Van reels tot brand assets, we creëren content die uw doelgroep aanspreekt, herkenbaarheid creëert en uw merk versterkt.",
        primaryCta: "Project Aanvragen",
        secondaryCta: "Portfolio Bekijken",
        imageAlt: "Contentcreatie door Gloyoo",
      },
      "performance-marketing": {
        imageUrl: "/bg.jpg",
        badge: "Performance Marketing",
        title: "Performance Marketing Gericht op Leads en Omzet",
        description:
          "Met datagedreven campagnes verhogen we bereik, conversies en meetbare resultaten op de kanalen die tellen voor uw bedrijf.",
        primaryCta: "Strategie Aanvragen",
        secondaryCta: "Potentieel Ontdekken",
        imageAlt: "Performance Marketing door Gloyoo",
      },
      webdesign: {
        imageUrl: "/bg.jpg",
        badge: "Webdesign",
        title: "Webdesign dat Overtuigt en Aanvragen Genereert",
        description:
          "We ontwikkelen moderne websites die uw merk professioneel presenteren, vertrouwen opbouwen en bezoekers omzetten in klantaanvragen.",
        primaryCta: "Website Plannen",
        secondaryCta: "Meer Informatie",
        imageAlt: "Webdesign door Gloyoo",
      },
    },
    features: {
      badge: "Onze Kerndiensten",
      title: "Elk merk heeft een duidelijke, sterke digitale uitstraling nodig.",
      description:
        "We combineren strategie, creativiteit en uitvoering, zodat uw online aanwezigheid professioneel overkomt en meetbare resultaten levert.",
      items: [
        {
          title: "Meer Bereik",
          description:
            "Vergroot zichtbaarheid, websitebezoeken en gekwalificeerde contacten via sterke content en campagnes.",
          imageAlt: "Bereikvergroting door social media",
          statLabel: "45%",
        },
        {
          title: "Structuur voor Uw Marketing",
          description:
            "Duidelijke processen, afgestemde content en een consistente merkuitstraling voor duurzame groei.",
          imageAlt: "Marketing structuur en processen",
        },
        {
          title: "Naadloze Implementatie",
          description:
            "Webdesign, content en performance marketing grijpen in elkaar en zorgen voor een samenhangend totaalbeeld.",
          imageAlt: "Geïntegreerde digitale marketing oplossingen",
        },
      ],
      sections: [
        {
          title: "Projecten strategisch aansturen",
          points: [
            "Duidelijke content- en campagneplanning voor uw doelen",
            "Afgestemde processen tussen merk, design en performance",
            "Meetbare prioriteiten voor duurzame groei",
            "Meer structuur voor interne en externe samenwerking",
            "Snellere afstemming met duidelijke goedkeuringswegen",
            "Beter overzicht van lopende activiteiten",
            "Betrouwbare uitvoering over alle kanalen heen",
            "Transparante communicatie over voortgang en resultaten",
            "Planbare acties in plaats van spontane losse initiatieven",
          ],
        },
        {
          title: "Uw website gericht doorontwikkelen",
          points: [
            "Teksten en content structureren passend bij uw doelgroep",
            "Design en gebruikerservaring optimaliseren voor meer vertrouwen",
            "Duidelijke boodschappen uitwerken voor aanbiedingen en diensten",
            "Responsieve ervaring garanderen voor mobiel en desktop",
            "Snelle aanpassingen mogelijk maken zonder onnodige complexiteit",
            "Consistente merkuitstraling bewaren over alle pagina's",
            "Conversie-sterke elementen bewust plaatsen",
            "Content flexibel uitbreiden voor campagnes en acties",
            "Technische basis versterken voor zichtbaarheid en performance",
          ],
        },
        {
          title: "Merkuitstraling consistent vormgeven",
          points: [
            "Social media, website en advertentiemateriaal visueel verbinden",
            "Herkenbare content ontwikkelen voor sterke merkimpact",
            "Designsystemen creëren die in de praktijk bruikbaar blijven",
            "Sjablonen voorbereiden voor posts, landingspagina's en campagnes",
            "Creatieve ideeën netjes in uitvoering brengen",
            "Merkwaarden vertalen naar beeldtaal en tone of voice",
            "Flexibel reageren op nieuwe formats en trends",
            "Professionele uitstraling garanderen over alle contactpunten",
            "Meer consistentie zonder individualiteit te verliezen",
          ],
        },
      ],
    },
    hero2: {
      badge: "Waarom Gloyoo?",
      title: "Samen creëren we een uitstraling die zichtbaar maakt waar uw merk voor staat.",
      description:
        "We ontwikkelen geen standaardoplossingen. Elk bedrijf, elk merk en elk doel is anders. Daarom werken we nauw met u samen om een individuele strategie en uitstraling te creëren die echt bij u past.",
      subtitle: "Laten we samen uw digitale aanwezigheid vormgeven.",
      subdescription:
        "Of het nu gaat om social media, content of webdesign—we laten uw merk online stralen en zorgen dat u zichtbaar wordt waar uw doelgroep actief is.",
      imageAlt: "Abstracte 3D-vormen op de achtergrond",
      imageUrl: "/bg.jpg",
    },
    seo: {
      areaServed: ["Netherlands", "Belgium"],
      knowsAbout: [
        "Social Media Marketing",
        "Contentcreatie",
        "Performance Marketing",
        "Webdesign",
        "Instagram Marketing",
        "Facebook Advertenties",
      ],
      offerCatalogName: "Onze Diensten",
      services: [
        "Social Media Beheer",
        "Contentcreatie",
        "Performance Marketing",
        "Webdesign",
      ],
    },
  },
  form: {
    metadata: {
      title: "Contact & Advies | Start Uw Project met Gloyoo",
      description:
        "Start uw project met Gloyoo. Neem contact met ons op voor social media, contentcreatie, performance marketing of webdesign—we nemen snel contact met u op.",
      locale: "nl_NL",
      keywords: [
        "contact gloyoo",
        "social media advies",
        "project aanvragen",
        "social media bureau contact",
        "webdesign aanvraag",
      ],
    },
    content: {
      title: "Contact Opnemen",
      description:
        "Heeft u een vraag of al een concreet idee? Ons team kijkt ernaar uit om met u in gesprek te gaan.",
      fields: {
        companyName: "Bedrijfsnaam",
        lastName: "Achternaam",
        email: "E-mail",
        phoneNumber: "Telefoonnummer",
        message: "Bericht",
      },
      placeholders: {
        companyName: "Voorbeeld B.V.",
        lastName: "Janssen",
        email: "hallo@bedrijf.nl",
        phoneNumber: "+31 6 12345678",
        message: "Vertel ons kort over uw project",
      },
      consent: {
        prefix: "U gaat akkoord met onze",
        terms: "Voorwaarden",
        and: "en het",
        privacyPolicy: "Privacybeleid",
        suffix: ".",
      },
      submitLabel: "Bericht Versturen",
      popup: {
        successTitle: "Bericht verzonden",
        successMessage: "Bedankt. Uw bericht is verzonden. Controleer uw e-mail.",
        errorTitle: "Bericht niet verzonden",
        errorMessage: "Er is iets misgegaan. Probeer het opnieuw.",
        closeLabel: "OK",
      },
      testimonial: {
        quote:
          "We ontwikkelen geen standaardoplossingen. Samen creëren we een uitstraling die zichtbaar maakt waar uw merk voor staat.",
        author: "Gloyoo Team",
        imageAlt: "Abstracte 3D-vormen op de achtergrond van het contactformulier",
        imageUrl: "/bg.jpg",
      },
    },
    seo: {
      areaServed: ["Netherlands", "Belgium"],
      knowsAbout: [
        "Social Media Marketing",
        "Contentcreatie",
        "Performance Marketing",
        "Webdesign",
      ],
      offerCatalogName: "Contact en Advies",
      services: [
        "Social Media Beheer",
        "Contentcreatie",
        "Performance Marketing",
        "Webdesign",
      ],
    },
  },
  pages: {
    about: {
      metadata: {
        title: "Over ons | AutoAnders",
        description:
          "Lees meer over AutoAnders en hoe wij bestuurders helpen met auto's kopen, verkopen, inruilen en financieren.",
        locale: "nl_NL",
        keywords: [
          "over autoanders",
          "auto kopen",
          "auto verkopen",
          "occasions",
          "auto inruilen",
        ],
      },
      eyebrow: "Over AutoAnders",
      title: "Een duidelijke manier om auto's te kopen of verkopen",
      intro:
        "AutoAnders helpt bestuurders voertuigen beter te begrijpen, eerlijk te vergelijken en zonder druk een beslissing te nemen.",
      sections: [
        {
          title: "Onze aanpak",
          paragraphs: [
            "Wij richten ons op geselecteerde voertuigen, duidelijke informatie en advies dat begrijpelijk blijft.",
            "Of u nu een auto wilt kopen, verkopen of inruilen: wij maken het proces overzichtelijk en leggen de volgende stappen helder uit.",
          ],
        },
        {
          title: "Hoe wij werken",
          bullets: [
            "We beantwoorden belangrijke vragen over staat, kilometerstand, uitrusting en prijs.",
            "We vergelijken voertuigen en aanbiedingen met realistische marktcontext.",
            "We begeleiden het proces van eerste contact tot overdracht of waardering.",
          ],
        },
        {
          title: "Waar wij waarde aan hechten",
          bullets: [
            "Eerlijk advies en transparante voertuiggegevens.",
            "Eerlijke biedingen bij verkoop of inruil.",
            "Een auto-ervaring die rustig, professioneel en duidelijk voelt.",
          ],
        },
      ],
      ctaLabel: "Neem contact op met AutoAnders",
    },
    privacy: {
      metadata: {
        title: "Privacy | Gloyoo",
        description:
          "Informatie over hoe persoonsgegevens worden verwerkt op de website van Gloyoo en tijdens het leveren van diensten.",
        locale: "nl_NL",
        keywords: [
          "gloyoo privacy",
          "privacybeleid",
          "avg privacybeleid",
          "gegevensbeschermingsverklaring",
          "contactformulier privacy",
        ],
      },
      eyebrow: "Privacy",
      title: "Privacybeleid",
      intro:
        "Op deze pagina leggen we uit hoe persoonsgegevens op deze website en tijdens klantcommunicatie en dienstverlening worden verzameld, gebruikt, opgeslagen, gedeeld en beschermd.",
      heroMeta: [
        "Laatst bijgewerkt: [DATE]",
        "Conform GDPR Art. 13 & 14",
        "Versie 1.0",
      ],
      contents: [
        "Verwerkingsverantwoordelijke",
        "Gegevens die wij verzamelen",
        "Rechtsgrond voor verwerking",
        "Doeleinden van verwerking",
        "Gegevensdeling & doorgifte",
        "Bewaartermijnen",
        "Uw GDPR-rechten",
        "Gegevensbeveiliging",
        "Privacy van kinderen",
        "Wijzigingen in dit beleid",
        "Contact & klachten",
      ],
      sections: [
        {
          title: "Verwerkingsverantwoordelijke",
          paragraphs: [
            "Voor de toepassing van Verordening (EU) 2016/679 (GDPR) is de verwerkingsverantwoordelijke voor uw persoonsgegevens:",
            "Wij zetten ons in om uw persoonsgegevens te beschermen en deze eerlijk, rechtmatig en transparant te verwerken.",
          ],
          note:
            "[UW AGENTSCHAPSNAAM]\n[Volledig geregistreerd adres]\nBTW: [EU VAT number]\nE-mail: [privacy@youragency.com]\n[Functionaris voor gegevensbescherming (indien van toepassing): [dpo@youragency.com]]",
        },
        {
          title: "Gegevens die wij verzamelen",
          subsections: [
            {
              title: "Gegevens die u rechtstreeks verstrekt",
              bullets: [
                "Identiteitsgegevens: voornaam, achternaam, functietitel, bedrijfsnaam.",
                "Contactgegevens: e-mailadres, telefoonnummer, postadres.",
                "Contract- en factuurgegevens: factuuradres, btw-nummer, bankgegevens uitsluitend voor facturatie.",
                "Communicatiegegevens: inhoud van e-mails, berichten en vergadernotities die met ons worden uitgewisseld.",
                "Socialmedia-inloggegevens: login-toegang, paginarollen en advertentieaccounttoegang alleen wanneer wij uw profielen beheren.",
              ],
            },
            {
              title: "Automatisch verzamelde gegevens",
              bullets: [
                "Technische gegevens: IP-adres, browsertype en -versie, besturingssysteem, apparaattype.",
                "Gebruiksgegevens: bezochte pagina's, tijd op de site, verwijzingsbron en klikken.",
                "Cookiegegevens: zie ons Cookiebeleid voor volledige details.",
              ],
            },
            {
              title: "Gegevens van derden",
              bullets: [
                "Socialmediaplatformgegevens zoals Meta, TikTok en LinkedIn wanneer wij uw accounts beheren.",
                "Analyticsgegevens van advertentieplatforms zoals Google Ads en Meta Ads Manager.",
                "Bedrijfsinformatie uit openbare registers of LinkedIn uitsluitend voor prospectiedoeleinden.",
              ],
            },
          ],
          note:
            "Wij verzamelen nooit bijzondere categorieen persoonsgegevens zoals gezondheid, religie, etniciteit, politieke opvattingen of biometrische gegevens, tenzij u deze expliciet in communicatie verstrekt. In dat geval behandelen wij deze met verhoogde bescherming.",
        },
        {
          title: "Rechtsgrond voor verwerking",
          paragraphs: [
            "De rechtsgrond hangt af van de specifieke verwerkingsactiviteit.",
            "Wanneer wij ons beroepen op gerechtvaardigde belangen, hebben wij beoordeeld dat die belangen niet zwaarder wegen dan uw rechten en vrijheden. U kunt onze belangenafweging opvragen door contact met ons op te nemen.",
          ],
          table: {
            columns: ["Verwerkingsactiviteit", "Rechtsgrond (GDPR Art. 6)"],
            rows: [
              ["Het leveren van contractuele diensten en projectbeheer", "Art. 6(1)(b) — Uitvoering van de overeenkomst"],
              ["Facturatie, boekhouding en fiscale naleving", "Art. 6(1)(c) — Wettelijke verplichting"],
              ["Het verzenden van marketingmails aan bestaande klanten", "Art. 6(1)(f) — Gerechtvaardigd belang"],
              ["Fraudepreventie, beveiliging en portfoliovertoning", "Art. 6(1)(f) — Gerechtvaardigd belang"],
              ["Marketingmails aan prospects en niet-noodzakelijke cookies", "Art. 6(1)(a) — Toestemming"],
              ["Analytics en verbetering van de website", "Art. 6(1)(a) — Toestemming (cookie) of Art. 6(1)(f)"],
            ],
          },
        },
        {
          title: "Doeleinden van verwerking",
          paragraphs: [
            "Wij gebruiken uw persoonsgegevens voor de volgende doeleinden.",
            "Wij zullen uw gegevens niet gebruiken voor een doel dat onverenigbaar is met de hierboven genoemde doeleinden zonder voorafgaande kennisgeving en, waar vereist, toestemming.",
          ],
          bullets: [
            "Om onze socialmedia- en webdesigndiensten te leveren en te beheren.",
            "Om met u te communiceren over uw project, voorstellen en facturen.",
            "Om te voldoen aan onze boekhoudkundige en wettelijke verplichtingen.",
            "Om service-updates, nieuwsbrieven en relevante marketing te verzenden waar toestemming vereist is.",
            "Om onze website en diensten via analytics te verbeteren.",
            "Om fraude te voorkomen en beveiliging te waarborgen.",
            "Om afgerond werk in ons portfolio te tonen met toestemming of op basis van gerechtvaardigd belang.",
          ],
        },
        {
          title: "Gegevensdeling & doorgifte",
          subsections: [
            {
              title: "Subverwerkers",
              paragraphs: [
                "Wij delen gegevens met vertrouwde subverwerkers op basis van GDPR-conforme verwerkersovereenkomsten (DPA's). Dit kunnen onder meer zijn:",
              ],
              bullets: [
                "Cloud- en hostingproviders zoals OVH, Hetzner of AWS Europe.",
                "Projectmanagementtools zoals Notion, Trello of Asana.",
                "Communicatietools zoals Google Workspace of Slack.",
                "Boekhoudsoftware zoals Pennylane of QuickBooks.",
                "Betaalverwerkers zoals Stripe.",
                "Socialmediaplatforms zoals Meta, TikTok, LinkedIn en Google voor zover nodig om klantaccounts te beheren.",
              ],
            },
            {
              title: "Wettelijke openbaarmakingen",
              paragraphs: [
                "Wij kunnen uw gegevens verstrekken aan bevoegde juridische of toezichthoudende autoriteiten wanneer dit vereist is op grond van toepasselijke wetgeving of een gerechtelijk bevel.",
              ],
            },
            {
              title: "Internationale doorgifte",
              paragraphs: [
                "Sommige van onze subverwerkers kunnen gegevens buiten de EER verwerken, bijvoorbeeld in de VS. Wanneer dit gebeurt, zorgen wij voor passende waarborgen onder GDPR Hoofdstuk V.",
                "Wij verkopen uw persoonsgegevens niet aan derden.",
              ],
              bullets: [
                "Adequaatheidsbesluiten van de Europese Commissie onder Art. 45.",
                "Standard Contractual Clauses (SCC's) onder Art. 46.",
                "Binding Corporate Rules waar van toepassing.",
              ],
            },
          ],
        },
        {
          title: "Bewaartermijnen",
          paragraphs: [
            "Persoonsgegevens worden alleen bewaard zolang dat nodig is voor het relevante doel en daarna veilig verwijderd of geanonimiseerd.",
          ],
          table: {
            columns: ["Gegevenscategorie", "Bewaartermijn", "Reden"],
            rows: [
              ["Contract- en factuurgegevens van klanten", "10 jaar na einde contract", "Boekhouding en wettelijke verplichting"],
              ["Gegevens van prospects of aanvragen", "3 jaar vanaf laatste contact", "Gerechtvaardigd belang"],
              ["Registraties van marketingtoestemming", "Tot toestemming is ingetrokken + 3 jaar", "Wettelijk bewijs van toestemming"],
              ["Website-analyticsgegevens", "Maximaal 13 maanden", "CNIL / EDPB-richtlijnen"],
              ["Socialmedia-inloggegevens", "Verwijderd binnen 30 dagen na einde contract", "Dataminimalisatie"],
              ["E-mailcommunicatie", "5 jaar na einde project", "Geschiloplossing"],
            ],
          },
        },
        {
          title: "Uw GDPR-rechten",
          paragraphs: [
            "Onder de GDPR heeft u de volgende rechten met betrekking tot uw persoonsgegevens.",
            "Om uw rechten uit te oefenen, neemt u contact op via [privacy@youragency.com]. Wij reageren binnen 30 kalenderdagen. Wij kunnen vragen om verificatie van uw identiteit voordat wij uw verzoek verwerken.",
          ],
          rights: [
            { article: "Art. 15", title: "Inzage", description: "Ontvang een kopie van de persoonsgegevens die wij van u bewaren." },
            { article: "Art. 16", title: "Rectificatie", description: "Corrigeer onjuiste of onvolledige gegevens." },
            { article: "Art. 17", title: "Wissing", description: "Verzoek verwijdering waar van toepassing." },
            { article: "Art. 18", title: "Beperking", description: "Beperk de verwerking in bepaalde omstandigheden." },
            { article: "Art. 20", title: "Portabiliteit", description: "Ontvang uw gegevens in een gestructureerd, machineleesbaar formaat." },
            { article: "Art. 21", title: "Bezwaar", description: "Maak bezwaar tegen verwerking op basis van gerechtvaardigd belang of direct marketing." },
            { article: "Art. 7(3)", title: "Toestemming intrekken", description: "Trek uw toestemming op elk moment in zonder eerdere rechtmatige verwerking aan te tasten." },
            { article: "Art. 77", title: "Klacht indienen", description: "Dien een klacht in bij uw nationale toezichthoudende autoriteit." },
          ],
          subsections: [
            {
              title: "Toezichthoudende autoriteiten",
              paragraphs: [
                "U kunt ook een klacht indienen bij uw nationale gegevensbeschermingsautoriteit.",
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
          title: "Gegevensbeveiliging",
          paragraphs: [
            "Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen accidenteel verlies, vernietiging, wijziging, ongeoorloofde openbaarmaking of toegang, in overeenstemming met GDPR Art. 32.",
            "Bij een datalek dat waarschijnlijk een hoog risico oplevert voor uw rechten en vrijheden, zullen wij u zonder onnodige vertraging informeren in overeenstemming met GDPR Art. 34.",
          ],
          bullets: [
            "HTTPS-versleuteling voor alle gegevens die via onze website worden verzonden.",
            "Toegangscontroles en op rollen gebaseerde rechten voor interne systemen.",
            "Regelmatige beveiligingscontroles en training van medewerkers.",
            "Tweefactorauthenticatie op platforms die klantgegevens bevatten.",
            "Veilige verwijderingsprocedures aan het einde van bewaartermijnen.",
          ],
        },
        {
          title: "Privacy van kinderen",
          paragraphs: [
            "Onze diensten zijn niet gericht op kinderen onder de 16 jaar, of de relevante leeftijd voor digitale toestemming in uw lidstaat.",
            "Wij verzamelen niet bewust persoonsgegevens van kinderen. Als u denkt dat een kind ons persoonsgegevens heeft verstrekt, neem dan onmiddellijk contact met ons op via [privacy@youragency.com] en wij verwijderen deze gegevens direct.",
          ],
        },
        {
          title: "Wijzigingen in dit beleid",
          paragraphs: [
            "Wij kunnen dit privacybeleid van tijd tot tijd bijwerken om wijzigingen in onze werkwijzen of wettelijke vereisten weer te geven.",
            "Wij zullen u op de hoogte brengen van materiele wijzigingen per e-mail of door ten minste 30 dagen voordat de wijziging van kracht wordt een duidelijke kennisgeving op onze website te plaatsen.",
            "De datum bovenaan deze pagina geeft aan wanneer het beleid voor het laatst is herzien. Wij raden u aan dit beleid regelmatig te bekijken.",
          ],
        },
        {
          title: "Contact & klachten",
          paragraphs: [
            "Gebruik voor alle privacygerelateerde vragen, verzoeken of klachten de onderstaande contactgegevens.",
          ],
          note:
            "Privacy & GDPR: [privacy@youragency.com]\nFunctionaris voor gegevensbescherming: [dpo@youragency.com] (indien van toepassing)\nPost: [UW AGENTSCHAPSNAAM], [Volledig adres], t.a.v. Privacy Team\nReactietermijn: Binnen 30 kalenderdagen (GDPR-termijn)",
        },
      ],
      note:
        "Vervang voor publicatie alle placeholders zoals [DATE], bedrijfsnaam, adres, btw-nummer, privacy-e-mailadres en DPO-gegevens. Controleer ook of de vermelde tools, verwerkers, bewaartermijnen en rechtsgronden overeenkomen met de diensten die daadwerkelijk door het live bedrijf worden gebruikt.",
    },
    impressum: {
      metadata: {
        title: "Juridische Kennisgeving | Gloyoo",
        description:
          "Juridische kennisgeving en verplichte aanbiederinformatie voor de Gloyoo-website volgens de Europese regelgeving.",
        locale: "nl_NL",
        keywords: [
          "gloyoo juridische kennisgeving",
          "impressum",
          "aanbiederinformatie",
          "website juridische info",
        ],
      },
      eyebrow: "Juridisch",
      title: "Juridische Kennisgeving",
      intro:
        "Deze pagina bevat de verplichte aanbieder- en wettelijke informatie voor de Gloyoo-website.",
      heroMeta: [
        "Laatst bijgewerkt: [DATUM]",
        "Rechtsgebied: Europese Unie",
        "Van toepassing op alle EU-bezoekers",
      ],
      sections: [
        {
          title: "Bedrijfsgegevens",
          paragraphs: [
            "In overeenstemming met Richtlijn 2000/31/EG en nationale wetgeving wordt de volgende informatie verstrekt.",
          ],
          contactCards: [
            { label: "Bedrijfsnaam", value: "[UW BEDRIJFSNAAM]" },
            { label: "Rechtsvorm", value: "[bijv. BV / GmbH / Ltd]" },
            { label: "Kapitaal", value: "[bijv. €10.000]" },
            {
              label: "Adres",
              value: "[Straat, stad, postcode, land]",
            },
            {
              label: "Registratienummer",
              value: "[KvK / HRB / etc.]",
            },
            {
              label: "BTW-nummer",
              value: "[bijv. NL123456789B01]",
            },
            {
              label: "Publicatieverantwoordelijke",
              value: "[Naam]",
            },
            { label: "E-mail", value: "[contact@youragency.com]" },
            { label: "Telefoon", value: "[+XX XXX XXX XXXX]" },
          ],
        },
        {
          title: "Hostingprovider",
          paragraphs: ["Deze website wordt gehost door:"],
          contactCards: [
            {
              label: "Hostingbedrijf",
              value: "[OVH / Netlify / Hetzner]",
            },
            { label: "Adres", value: "[adres]" },
            { label: "Land", value: "[land]" },
            { label: "Contact", value: "[contact]" },
          ],
        },
        {
          title: "Auteursrecht",
          paragraphs: [
            "Alle content op deze website is eigendom van [UW BEDRIJFSNAAM] en beschermd onder EU-wetgeving.",
            "Gebruik zonder toestemming is verboden.",
          ],
          note:
            "Persoonlijk gebruik is toegestaan mits bronvermelding.",
        },
        {
          title: "Aansprakelijkheid",
          paragraphs: [
            "De informatie is alleen bedoeld voor algemene doeleinden.",
            "Geen aansprakelijkheid voor externe links.",
            "Geen aansprakelijkheid voor schade voortvloeiend uit gebruik.",
          ],
        },
        {
          title: "Toepasselijk recht",
          paragraphs: [
            "Onderworpen aan wetgeving van [LAND] en EU-regels.",
            "Contact: [legal@youragency.com]",
          ],
          bullets: [
            "EU Richtlijn 2000/31/EG",
            "EU Richtlijn 2019/790",
            "AVG (GDPR)",
            "ePrivacy Richtlijn",
          ],
        },
      ],
      note:
        "Vervang alle placeholders vóór publicatie.",
    },
    terms: {
      metadata: {
        title: "Algemene Voorwaarden | Gloyoo",
        description:
          "Algemene voorwaarden voor Gloyoo diensten, inclusief social media management, webdesign, betalingsvoorwaarden, aansprakelijkheid en geschillenbeslechting.",
        locale: "nl_NL",
        keywords: [
          "gloyoo voorwaarden",
          "algemene voorwaarden",
          "digitale agency voorwaarden",
          "webdesign contract",
          "social media management voorwaarden",
        ],
      },
      eyebrow: "Juridisch",
      title: "Algemene Voorwaarden",
      intro:
        "Deze pagina beschrijft de voorwaarden die van toepassing zijn op de diensten van Gloyoo, inclusief scope, betalingen, intellectueel eigendom, beëindiging, aansprakelijkheid en geschillenbeslechting.",
      heroMeta: [
        "Laatst bijgewerkt: [DATUM]",
        "Conform Richtlijn 2011/83/EU",
        "Versie 1.0",
      ],
      contents: [
        "Definities",
        "Diensten",
        "Acceptatie van voorwaarden",
        "Verplichtingen van de klant",
        "Intellectueel eigendom",
        "Betaling & prijzen",
        "Herroepingsrecht",
        "Beëindiging",
        "Beperking van aansprakelijkheid",
        "Toepasselijk recht & geschillen",
        "Overig",
        "Contact",
      ],
      sections: [
        {
          title: "Definities",
          paragraphs: [
            "Voor de toepassing van deze Algemene Voorwaarden gelden de volgende definities.",
          ],
          bullets: [
            '"Agentschap" / "Wij" / "Ons" — [UW BEDRIJFSNAAM], aanbieder van digitale diensten.',
            '"Klant" / "U" — natuurlijke of rechtspersoon die gebruikmaakt van de diensten.',
            '"Consument" — natuurlijke persoon handelend buiten beroep of bedrijf volgens EU-richtlijn 2011/83/EU.',
            '"Diensten" — social media management, webdesign en digitale diensten.',
            '"Overeenkomst" — contract tussen agentschap en klant.',
            '"Deliverables" — alle opgeleverde materialen zoals content, code en ontwerpen.',
            '"SOW" — document met scope, planning en prijs.',
          ],
        },
        {
          title: "Diensten",
          subsections: [
            {
              title: "Social Media Management",
              bullets: [
                "Strategieontwikkeling en contentplanning",
                "Contentcreatie (tekst, design, video)",
                "Community management",
                "Advertenties (Meta, TikTok, LinkedIn, Google)",
                "Maandelijkse rapportage en optimalisatie",
              ],
            },
            {
              title: "Website Ontwikkeling",
              bullets: [
                "UX/UI design",
                "CMS (WordPress, Webflow, Shopify)",
                "E-commerce oplossingen",
                "Onderhoud en SEO",
                "Toegankelijkheid (WCAG 2.1 / EN 301 549)",
              ],
            },
            {
              title: "Aanvullende diensten",
              bullets: [
                "Branding en grafisch ontwerp",
                "E-mailmarketing",
                "Digitale audits",
              ],
            },
          ],
          note:
            "De exacte scope en prijs worden vastgelegd in een SOW of voorstel.",
        },
        {
          title: "Acceptatie van voorwaarden",
          paragraphs: [
            "Door gebruik van onze diensten gaat u akkoord met deze voorwaarden.",
            "Acceptatie kan plaatsvinden via contract, betaling of schriftelijke bevestiging.",
            "Wijzigingen worden minimaal 30 dagen vooraf aangekondigd.",
            "U bevestigt bevoegd te zijn indien u namens een bedrijf handelt.",
          ],
          bullets: [
            "Ondertekening van contract",
            "Checkbox acceptatie",
            "Betaling van factuur",
            "E-mailbevestiging",
          ],
        },
        {
          title: "Verplichtingen van de klant",
          subsections: [
            {
              title: "Samenwerking",
              bullets: [
                "Tijdige en correcte informatie",
                "Feedback binnen 5–7 werkdagen",
                "Eén contactpersoon",
                "Wijzigingen tijdig doorgeven",
              ],
            },
            {
              title: "Wetgeving",
              bullets: [
                "Rechten op aangeleverde content",
                "Naleving platformregels",
                "GDPR / AVG naleving",
              ],
            },
            {
              title: "Vertragingen",
              paragraphs: [
                "Het agentschap is niet aansprakelijk voor vertragingen veroorzaakt door de klant.",
              ],
            },
          ],
        },
        {
          title: "Intellectueel eigendom",
          subsections: [
            {
              title: "Rechten agentschap",
              paragraphs: [
                "Alle tools en methodes blijven eigendom van het agentschap.",
              ],
            },
            {
              title: "Overdracht",
              paragraphs: [
                "Rechten worden overgedragen na volledige betaling.",
              ],
              bullets: [
                "Gebruik en verspreiding",
                "Aanpassing zonder verkeerde attributie",
                "Publicatie",
              ],
            },
            {
              title: "Portfolio",
              paragraphs: [
                "Werk mag gebruikt worden voor marketingdoeleinden.",
              ],
            },
            {
              title: "Derden",
              paragraphs: [
                "Licenties van derden blijven verantwoordelijkheid van de klant.",
              ],
            },
            {
              title: "Content klant",
              paragraphs: [
                "De klant garandeert dat content geen rechten schendt.",
              ],
            },
          ],
        },
        {
          title: "Betaling & prijzen",
          subsections: [
            {
              title: "Prijzen",
              paragraphs: [
                "Alle prijzen zijn in euro (€) exclusief btw.",
              ],
            },
            {
              title: "Betalingen",
              bullets: [
                "30–50% aanbetaling",
                "Rest bij oplevering",
                "Maandelijkse retainer",
              ],
            },
            {
              title: "Betalingstermijnen",
              bullets: [
                "30 dagen betalingstermijn",
                "SEPA, kaart, etc.",
              ],
            },
            {
              title: "Te late betaling",
              note:
                "ECB rente + 8%, €40 kosten, opschorting van diensten mogelijk",
            },
            {
              title: "Scope wijzigingen",
              paragraphs: [
                "Wijzigingen worden apart geprijsd.",
              ],
            },
            {
              title: "Terugbetalingen",
              paragraphs: [
                "Aanbetalingen zijn niet restitueerbaar.",
              ],
            },
          ],
        },
        {
          title: "Herroepingsrecht",
          note:
            "Alleen van toepassing op consumenten volgens EU-richtlijn.",
          subsections: [
            {
              title: "Termijn",
              paragraphs: [
                "14 dagen herroepingsrecht.",
              ],
            },
            {
              title: "Uitzonderingen",
              bullets: [
                "Volledig uitgevoerde diensten",
                "Gepersonaliseerde diensten",
                "Digitale content",
              ],
            },
          ],
        },
        {
          title: "Beëindiging",
          subsections: [
            {
              title: "Door klant",
              paragraphs: [
                "30 dagen opzegtermijn.",
              ],
            },
            {
              title: "Door agentschap",
              bullets: [
                "Wanbetaling",
                "Contractbreuk",
                "Onwettig gedrag",
              ],
            },
            {
              title: "Na beëindiging",
              paragraphs: [
                "Overdracht na volledige betaling.",
              ],
            },
          ],
        },
        {
          title: "Beperking van aansprakelijkheid",
          subsections: [
            {
              title: "Maximale aansprakelijkheid",
              paragraphs: [
                "Beperkt tot betaalde fees van de laatste 3 maanden.",
              ],
            },
            {
              title: "Uitsluitingen",
              bullets: [
                "Indirecte schade",
                "Verlies van winst of data",
                "Platformwijzigingen",
              ],
            },
          ],
        },
        {
          title: "Toepasselijk recht & geschillen",
          subsections: [
            {
              title: "Toepasselijk recht",
              paragraphs: ["Wetgeving: [LAND]."],
            },
            {
              title: "ODR",
              paragraphs: [
                "Consumenten kunnen gebruik maken van EU ODR platform.",
              ],
            },
          ],
        },
        {
          title: "Overig",
          subsections: [
            {
              title: "Volledige overeenkomst",
              paragraphs: ["Dit vormt de volledige overeenkomst."],
            },
            {
              title: "Scheidbaarheid",
              paragraphs: ["Ongeldige clausules worden aangepast."],
            },
          ],
        },
        {
          title: "Contact",
          contactCards: [
            { label: "Algemeen", value: "[contact@youragency.com]" },
            { label: "Juridisch", value: "[legal@youragency.com]" },
            { label: "Adres", value: "[adres]" },
            { label: "Reactietijd", value: "Binnen 5 werkdagen" },
          ],
        },
      ],
    },
    cookie: {
      metadata: {
        title: "Cookiebeleid | Gloyoo",
        description:
          "Informatie over hoe cookies en vergelijkbare technologieen op de website van Gloyoo worden gebruikt.",
        locale: "nl_NL",
        keywords: [
          "gloyoo cookiebeleid",
          "cookiebeleid",
          "website cookies",
          "avg cookies",
          "eprivacy cookie kennisgeving",
        ],
      },
      eyebrow: "Cookies",
      title: "Cookiebeleid",
      intro:
        "Op deze pagina leggen we uit hoe cookies en vergelijkbare technologieen op deze website worden gebruikt, welke categorieen bestaan en hoe toestemming kan worden beheerd.",
      heroMeta: [
        "Laatst bijgewerkt: [DATE]",
        "Conform CNIL- en EDPB-richtlijnen",
        "Versie 1.0",
      ],
      sections: [
        {
          title: "Wat zijn cookies?",
          paragraphs: [
            "Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u een website bezoekt. Ze zorgen ervoor dat de website uw apparaat kan herkennen, uw voorkeuren kan onthouden en informatie kan verzamelen over hoe u de site gebruikt.",
            "Wij gebruiken cookies en vergelijkbare technologieen zoals pixels, local storage, session storage en fingerprinting-scripts op onze website in overeenstemming met EU-richtlijn 2009/136/EG (ePrivacy-richtlijn) en de AVG, zoals uitgelegd in EDPB-richtlijnen over toestemming en aanbevelingen van de CNIL.",
          ],
          note: "Kernprincipe: Wij plaatsen niet-noodzakelijke cookies alleen nadat wij uw vrij gegeven, specifieke, geinformeerde en ondubbelzinnige toestemming hebben verkregen. U kunt uw toestemming op ieder moment intrekken.",
        },
        {
          title: "Cookiecategorieen",
          paragraphs: [
            "Wij delen cookies in vier categorieen in op basis van hun doel.",
          ],
          categories: [
            {
              name: "Strikt noodzakelijke cookies",
              description:
                "Essentieel voor het functioneren van de website. Ze maken kernfuncties mogelijk zoals beveiliging, sessiebeheer en toegankelijkheid. Deze cookies kunnen niet worden uitgeschakeld.",
              badge: "Geen toestemming vereist",
            },
            {
              name: "Analytics- en performancecookies",
              description:
                "Helpen ons te begrijpen hoe bezoekers met onze website omgaan door informatie anoniem of pseudoniem te verzamelen. Worden gebruikt om onze site en diensten te verbeteren.",
              badge: "Toestemming vereist",
            },
            {
              name: "Marketing- en retargetingcookies",
              description:
                "Worden gebruikt om relevante advertenties te tonen en de effectiviteit van campagnes op platforms zoals Meta en Google te volgen.",
              badge: "Toestemming vereist",
            },
            {
              name: "Voorkeurscookies",
              description:
                "Onthouden uw instellingen en keuzes zoals taal, regio en weergavevoorkeuren om uw ervaring bij terugkerende bezoeken te verbeteren.",
              badge: "Toestemming vereist",
            },
          ],
        },
        {
          title: "Cookies die wij gebruiken",
          paragraphs: [
            "Hieronder vindt u een lijst met cookies die op onze website worden gebruikt. Deze lijst wordt bijgewerkt wanneer ons cookiegebruik verandert.",
          ],
          cookieTables: [
            {
              title: "Strikt noodzakelijk",
              columns: ["Naam", "Aanbieder", "Doel", "Duur"],
              rows: [
                ["_session", "Gloyoo", "Houdt uw sessie actief terwijl u door de site navigeert", "Sessie"],
                ["csrf_token", "Gloyoo", "Beveiligingstoken om cross-site request forgery te voorkomen", "Sessie"],
                ["cookie_consent", "Gloyoo", "Slaat uw cookievoorkeuren op", "12 maanden"],
              ],
            },
            {
              title: "Analytics (met toestemming)",
              columns: ["Naam", "Aanbieder", "Doel", "Duur"],
              rows: [
                ["_ga, _ga_*", "Google Analytics", "Onderscheidt gebruikers; volgt sessies en campagnes", "2 jaar"],
                ["_gid", "Google Analytics", "Onderscheidt gebruikers binnen een venster van 24 uur", "24 uur"],
                ["[_pk_id]", "Matomo (optioneel)", "Privacyvriendelijke analytics (indien gebruikt in plaats van GA)", "13 maanden"],
              ],
            },
            {
              title: "Marketing & retargeting (met toestemming)",
              columns: ["Naam", "Aanbieder", "Doel", "Duur"],
              rows: [
                ["_fbp, _fbc", "Meta (Facebook)", "Identificeert browsers voor Meta-advertenties en conversietracking", "3 maanden"],
                ["ads/ga-audiences", "Google Ads", "Retargeting via Google Ads op basis van bezoekersgedrag", "Sessie"],
                ["tt_webid", "TikTok Pixel", "Volgt conversies en doelgroepsegmentatie op TikTok", "13 maanden"],
                ["li_fat_id", "LinkedIn", "LinkedIn Insight Tag voor campagne-analyse en retargeting", "30 dagen"],
              ],
            },
            {
              title: "Voorkeuren (met toestemming)",
              columns: ["Naam", "Aanbieder", "Doel", "Duur"],
              rows: [
                ["lang_pref", "Gloyoo", "Onthoudt uw taalvoorkeur", "12 maanden"],
                ["theme_pref", "Gloyoo", "Onthoudt uw weergavevoorkeur", "12 maanden"],
              ],
            },
          ],
        },
        {
          title: "Hoe wij toestemming verkrijgen en beheren",
          paragraphs: [
            "In overeenstemming met EDPB-richtlijnen en vereisten van nationale toezichthouders zoals de CNIL en ICO vragen wij toestemming voor niet-noodzakelijke cookies via een cookiebanner die bij uw eerste bezoek wordt getoond.",
          ],
          bullets: [
            "Legt duidelijk uit welke cookiecategorieen worden gebruikt en voor welke doeleinden.",
            "Vereist een actieve, bevestigende handeling voor toestemming, zonder vooraf aangevinkte vakjes.",
            "Maakt weigeren net zo eenvoudig als accepteren.",
            "Gebruikt geen dark patterns of manipulatief ontwerp.",
            "Legt de datum, tijd en reikwijdte van uw toestemming vast.",
          ],
          note: 'Toestemming intrekken of wijzigen: U kunt uw cookievoorkeuren op elk moment aanpassen door op de link "Cookie Settings" in de footer van onze website te klikken. Het intrekken van toestemming heeft geen invloed op de rechtmatigheid van verwerking voorafgaand aan de intrekking.',
        },
        {
          title: "Cookiecontroles op browserniveau",
          paragraphs: [
            "U kunt cookies ook beheren via de instellingen van uw browser. De meeste browsers laten u cookies bekijken die momenteel op uw apparaat zijn opgeslagen, alle of specifieke cookies verwijderen, cookies van alle of bepaalde websites blokkeren en Do Not Track-signalen inschakelen, hoewel niet alle sites die instelling respecteren.",
            "Het uitschakelen van strikt noodzakelijke cookies kan de functionaliteit van de website beperken. Het uitschakelen van analytics- of marketingcookies heeft geen invloed op uw mogelijkheid om onze diensten te gebruiken.",
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
          title: "Cookies van derden en opt-out",
          paragraphs: [
            "Sommige cookies worden geplaatst door diensten van derden die op onze site zijn ingebed. Deze derden hebben hun eigen privacybeleid. U kunt hun tracking direct uitschakelen via de volgende diensten.",
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
          title: "Updates van dit beleid",
          paragraphs: [
            "Wij kunnen dit cookiebeleid bijwerken wanneer we de cookies die we gebruiken wijzigen of wanneer wettelijke vereisten veranderen. Wij zullen u over wezenlijke wijzigingen informeren via onze cookiebanner of door een bijgewerkte datum op deze pagina te plaatsen. Wij raden aan deze pagina regelmatig te bekijken.",
            "Voor vragen over ons gebruik van cookies kunt u contact met ons opnemen via privacy@gloyoo.com.",
          ],
        },
      ],
      note:
        "Vervang voor publicatie [DATE] indien nodig en controleer of de vermelde cookies en diensten van derden overeenkomen met de tools die daadwerkelijk op de live website worden gebruikt.",
    },
  },
};

