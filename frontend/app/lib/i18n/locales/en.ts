import type { LocaleDictionary } from "../../../types/LocaleDictionary";

export const enDictionary: LocaleDictionary = {
    localeName: "English",
    nav: {
      ariaLabel: "Main navigation",
      homeAriaLabel: "Go to AutoAnders homepage",
      items: [
        {
          label: "Buy a Car",
          href: "/Catalogue",
          // children: [
          //   {
          //     label: "Available Cars",
          //     href: "/Catalogue",
          //   },
          //   {
          //     label: "Car Financing",
          //     href: "/Catalogue",
          //   },
          //   {
          //     label: "Trade-In Service",
          //     href: "/Catalogue",
          //   },
          //   { label: "Vehicle Check", href: "/Catalogue" },
          // ],
        },
        
        { label: "Sell your car", href: "/Sell" },
        { label: "FAQ", href: "/faq" },
        { label: "About Us", href: "/about" },
      ],
      contactLabel: "Contact",
      mobileMenuLabel: "Menu",
      switchLabel: "DE",
    },
    footer: {
      tagline: "Find, buy, or sell your next car with confidence.",
      navigationTitle: "Navigation",
      servicesTitle: "Cars",
      contactTitle: "Contact",
      navigationLinks: [
        { label: "Home", href: "/" },
        { label: "Benefits", href: "/advantages" },
        { label: "Buy a Car", href: "/Catalogue" },
        { label: "About Us", href: "/about" },
      ],
      serviceLinks: [
        { label: "Available Cars", href: "/Catalogue" },
        { label: "Car Financing", href: "/Catalogue" },
        { label: "Trade-In Service", href: "/Catalogue" },
        { label: "Vehicle Check", href: "/Catalogue" },
      ],
      contactLinks: [
        { label: "Sell Your Car", href: "/form" },
        { label: "Request an Offer", href: "/form" },
        { label: "Browse Cars", href: "#services" },
      ],
      rights: "All rights reserved.",
      legalLinks: [
        { label: "Privacy", href: "/privacy" },
        { label: "Legal Notice", href: "/impressum" },
        { label: "Terms", href: "/terms" },
        { label: "Cookies", href: "/cookie" },
      ],
    },
    home: {
      metadata: {
        title: "Buy and Sell Cars | Trusted Vehicle Marketplace | AutoAnders",
        description:
          "Browse inspected cars, request a fair trade-in offer, and buy your next vehicle with clear pricing and personal support.",
        locale: "en_US",
        keywords: [
          "buy car",
          "used cars",
          "sell my car",
          "car dealership",
          "vehicle marketplace",
          "car financing",
          "trade in car",
          "inspected cars",
        ],
      },
      hero: {
        eyebrow: "Buy and sell cars with confidence",
        titleFirst: "Find your next car",
        titleSecond: "or sell yours for a fair price",
        description:
          "AutoAnders helps you compare available cars, understand every detail, and complete the buying or selling process without pressure.",
        primaryCta: "Browse Cars",
        secondaryCta: "Sell Your Car",
        videoAlt: "Video preview of vehicles available at AutoAnders",
        imageAlt: "Modern car available through AutoAnders",
      },
      advantages: {
        eyebrow: "Your Benefits",
        title: "Why drivers choose AutoAnders",
        description:
          "We make buying and selling cars clearer, faster, and easier with inspected vehicles, fair offers, and support at every step.",
        items: [
          {
            value: "More",
            title: "Choice",
            subtitle:
              "Compare carefully selected cars with the details you need before you visit or buy.",
          },
          {
            value: "Fair",
            title: "Prices",
            subtitle:
              "Get transparent pricing and realistic offers when buying, selling, or trading in.",
          },
          {
            value: "Less",
            title: "Stress",
            subtitle:
              "Vehicle checks, paperwork, and guidance are handled with you from start to finish.",
          },
        ],
      },
      services: {
        eyebrow: "Our Services",
        title: "Everything you need to buy or sell a car",
        description:
          "Browse available vehicles, get support with financing, and receive a fair offer if you want to sell or trade in your current car.",
        cta: "Get Started",
        items: [
          {
            title: "Available Cars",
            description:
              "Explore inspected cars with clear photos, key details, mileage, equipment, and pricing.",
          },
          {
            title: "Car Financing",
            description:
              "Find a payment option that fits your budget with straightforward guidance and no pressure.",
          },
          {
            title: "Sell or Trade In",
            description:
              "Send us your vehicle details and receive a fair offer for selling or trading in your car.",
          },
        ],
      },
      about: {
        eyebrow: "About AutoAnders",
        title: "A simpler way to buy and sell cars",
        paragraphs: [
          "AutoAnders is built for drivers who want a clear, honest, and comfortable car buying experience. We focus on inspected vehicles, transparent information, and personal support.",
          "Whether you are looking for your next car or want to sell your current one, we help you understand the options, compare fairly, and move forward with confidence.",
        ],
        cta: "Talk to Us",
        more: "More"
      },
      scrollTexts: ["Available Cars", "Fair Offers"],
      catalogue: {
  title: "Our Vehicles",
  subtitle: "Available Cars",
  labels: {
    vehiclesFound: "vehicles found",
    searchPlaceholder: "Search keyword",
    allBrands: "All brands",
    allTransmissions: "All transmissions",
    firstRegistrationDate: "First registration",
    maxMileage: "Maximum mileage",
    maxPrice: "Maximum price",
    allColours: "All colours",
    allFuels: "All fuels",
    engineCapacity: "Engine capacity",
    allDoorCounts: "Number of doors",
    allConditions: "New / used",
    allGearCounts: "Number of gears",
    allVatOptions: "VAT",
    allVehicles: "Vehicle type",
    searchButton: "Search",
    resetButton: "Reset",
    viewDetails: "View details",
    moreButton: "More",
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
      transmission: "Automatic",
      fuel: "Petrol",
      engineCapacity: 1998,
      numberOfDoors: 4,
      condition: "Used",
      numberOfGears: 8,
      vat: "VAT deductible",
      vehicle: "Saloon",
      colour: "Black",
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
      transmission: "Manual",
      fuel: "Diesel",
      engineCapacity: 1968,
      numberOfDoors: 5,
      condition: "Used",
      numberOfGears: 6,
      vat: "VAT deductible",
      vehicle: "Estate",
      colour: "Grey",
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
      model: "C-Class",
      price: 29900,
      year: 2020,
      firstRegistrationDate: "11/2020",
      mileage: 61000,
      transmission: "Automatic",
      fuel: "Hybrid",
      engineCapacity: 1991,
      numberOfDoors: 4,
      condition: "Used",
      numberOfGears: 9,
      vat: "VAT deductible",
      vehicle: "Saloon",
      colour: "White",
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
        areaServed: ["Germany", "Europe", "International"],
        knowsAbout: [
          "Used Cars",
          "Vehicle Sales",
          "Car Trade-In",
          "Car Financing",
          "Vehicle Inspection",
          "Car Valuation",
          "Car Dealership",
        ],
        offerCatalogName: "Our Car Services",
        services: [
          "Available Cars",
          "Car Financing",
          "Trade-In Service",
          "Vehicle Check",
        ],
      },
    },
    faq: {
  metadata: {
    title: "FAQ | Buy & Sell Cars | AutoAnders",
    description:
      "Answers to common questions about used cars, selling your vehicle, trade-ins, financing, and buying a car with AutoAnders.",
    locale: "en_US",
    keywords: [
      "car faq",
      "used car questions",
      "sell my car faq",
      "car finance questions",
      "trade in car faq",
    ],
  },
  badge: "FAQ",
  title: "Frequently Asked Questions about AutoAnders",
  description:
    "A quick overview of the questions customers ask most often before buying, selling, or financing a vehicle.",
  ctaLabel: "View all FAQs",
  items: [
    {
      question: "What cars does AutoAnders offer?",
      answer:
        "We offer inspected used cars from different brands and models. Our stock changes regularly, so it is worth checking our listings often.",
    },
    {
      question: "Are the vehicles inspected?",
      answer:
        "Yes, our vehicles are checked before sale and offered with transparent information about condition, mileage, and equipment.",
    },
    {
      question: "Can I sell my current car?",
      answer:
        "Yes, you can sell your vehicle directly to us. Simply send us the key vehicle details and we will provide a fair offer.",
    },
    {
      question: "Do you accept trade-ins?",
      answer:
        "Yes, we gladly accept your current vehicle as a trade-in and deduct its value from your next car.",
    },
    {
      question: "Does AutoAnders offer financing?",
      answer:
        "Yes, we help you find suitable financing options so you can pay for your next vehicle flexibly.",
    },
    {
      question: "Can I book a test drive?",
      answer:
        "Yes, after arranging an appointment you can inspect the vehicle and take a test drive.",
    },
    {
      question: "How fast can I get an offer for my car?",
      answer:
        "After sending your vehicle details, we usually reply as quickly as possible with a realistic offer.",
    },
    {
      question: "What documents do I need when selling my car?",
      answer:
        "Usually you need the registration papers, ownership documents, inspection papers, service history, keys, and available accessories.",
    },
    {
      question: "Can I sell my car without a valid inspection?",
      answer:
        "Yes, vehicles without a valid inspection can also be requested and evaluated depending on condition.",
    },
    {
      question: "Why choose AutoAnders?",
      answer:
        "We stand for transparent pricing, personal advice, inspected vehicles, and an easy process for buying or selling.",
    },
  ],
},
    servicePage: {
      metadata: {
        title: "Car Services | Buy, Finance, Trade In | AutoAnders",
        description:
          "Discover our car services: available vehicles, financing support, trade-in offers, and transparent vehicle checks.",
        locale: "en_US",
        keywords: [
          "buy used car",
          "car financing",
          "trade in car",
          "sell my car",
          "vehicle check",
          "used car dealer",
        ],
      },
      overview: {
        hero: {
          eyebrow: "Our Car Services",
          title:
            "Everything around your next car in one place",
          description:
            "Explore how AutoAnders helps you find the right vehicle, finance it clearly, or sell your current car for a fair price.",
          primaryCta: "Browse Cars",
        },
        cards: {
          eyebrow: "Explore Options",
          description:
            "Choose what you need next and see how we support you through the car buying or selling process.",
          imageAlts: {
            "social-media":
              "Illustration for available cars",
            "content-creation": "Illustration for car financing",
            "performance-marketing":
              "Illustration for trade-in service",
            webdesign: "Illustration for vehicle check",
          },
        },
      },
      hero: {
        "social-media": {
          imageUrl: "/bg.jpg",
          badge: "Available Cars",
          title: "Find a car that fits your life",
          description:
            "Browse selected vehicles with clear details, transparent pricing, and support from the first question to the handover.",
          primaryCta: "Browse Cars",
          secondaryCta: "Learn More",
          imageAlt: "Available car from AutoAnders",
        },
        "content-creation": {
          badge: "Car Financing",
          imageUrl: "/bg.jpg",
          title: "Financing options explained clearly",
          description:
            "We help you understand possible payment options and the information needed to move forward confidently.",
          primaryCta: "Ask About Financing",
          secondaryCta: "View Cars",
          imageAlt: "Car financing support at AutoAnders",
        },
        "performance-marketing": {
          imageUrl: "/bg.jpg",
          badge: "Trade-In Service",
          title: "Trade in or sell your car without stress",
          description:
            "Share your vehicle details and receive a realistic offer based on condition, mileage, and current market demand.",
          primaryCta: "Request an Offer",
          secondaryCta: "How It Works",
          imageAlt: "Trade-in service from AutoAnders",
        },
        webdesign: {
          imageUrl: "/bg.jpg",
          badge: "Vehicle Check",
          title: "Know the important details before you buy",
          description:
            "We present vehicle information clearly, including condition, mileage, equipment, and the details that matter most.",
          primaryCta: "Check Vehicles",
          secondaryCta: "Learn More",
          imageAlt: "Vehicle check at AutoAnders",
        },
      },
      features: {
        badge: "Why AutoAnders",
        title: "A better car decision starts with clear information.",
        description:
          "From the first search to the final handover, we keep the process transparent, practical, and focused on the right vehicle for you.",
        items: [
          {
            title: "Clear Vehicle Details",
            description:
              "See the key information you need before arranging a viewing or making a decision.",
            imageAlt: "Clear vehicle details",
            statLabel: "100%",
          },
          {
            title: "Fair Offers",
            description:
              "Get realistic pricing when buying, selling, or trading in your current vehicle.",
            imageAlt: "Fair car valuation process",
          },
          {
            title: "Simple Process",
            description:
              "We help with questions, paperwork, appointments, and the next step at the right time.",
            imageAlt: "Simple car buying process",
          },
        ],
        sections: [
          {
            title: "Choose your next car confidently",
            points: [
              "Compare cars by price, mileage, condition, and equipment",
              "Ask questions before arranging a viewing",
              "Understand what matters for your budget and daily use",
              "Review available information before making a decision",
              "Plan the next step with personal support",
              "Avoid pressure and unclear promises",
              "Keep the process simple from search to handover",
              "Get transparent answers about the vehicle",
              "Move forward only when the car feels right",
            ],
          },
          {
            title: "Sell or trade in without confusion",
            points: [
              "Send the most important details about your car",
              "Share mileage, condition, documents, and photos",
              "Receive a realistic first estimate",
              "Clarify the final offer after inspection",
              "Use the value toward your next vehicle",
              "Understand every step before you commit",
              "Reduce back-and-forth with a clear process",
              "Prepare documents before handover",
              "Sell with less time and less stress",
            ],
          },
          {
            title: "Understand the vehicle before buying",
            points: [
              "Review mileage, equipment, and condition details",
              "Ask about service history when available",
              "Check what is included with the vehicle",
              "Discuss financing or payment options",
              "Arrange a viewing or test drive",
              "Know which documents are needed",
              "Get support before signing anything",
              "Make decisions based on facts",
              "Drive away with confidence",
              
            ],
          },
        ],
      },
      hero2: {
        badge: "Why AutoAnders?",
        title: "Buying or selling a car should feel clear from the first step.",
        description:
          "Every driver, budget, and vehicle is different. That's why we take the time to explain options clearly and help you choose the path that fits.",
        subtitle: "Let's find the right car solution together.",
        subdescription:
          "Whether you want to buy, sell, trade in, or ask about financing, AutoAnders keeps the process practical and transparent.",
        imageAlt: "Car details in the background",
        imageUrl: "/bg.jpg",
      },
      seo: {
        areaServed: ["Germany", "Europe", "International"],
        knowsAbout: [
          "Used Cars",
          "Car Financing",
          "Trade-In Service",
          "Vehicle Inspection",
          "Car Valuation",
          "Car Sales",
        ],
        offerCatalogName: "Our Car Services",
        services: [
          "Available Cars",
          "Car Financing",
          "Trade-In Service",
          "Vehicle Check",
        ],
      },
    },
    form: {
      metadata: {
        title: "Contact AutoAnders | Buy or Sell a Car",
        description:
          "Contact AutoAnders to ask about a car, request a trade-in offer, sell your vehicle, or get help with financing.",
        locale: "en_US",
        keywords: [
          "contact autoanders",
          "buy a car",
          "sell my car",
          "car trade in",
          "car financing inquiry",
        ],
      },
      content: {
        title: "Get in Touch",
        description:
          "Have a question about a vehicle, selling your car, or financing? Our team is ready to help.",
        fields: {
          companyName: "Vehicle or Topic",
          lastName: "Last Name",
          email: "Email",
          phoneNumber: "Phone Number",
          message: "Message",
        },
        placeholders: {
          companyName: "BMW 320i, trade-in, financing...",
          lastName: "Smith",
          email: "name@example.com",
          phoneNumber: "+1 123 456789",
          message: "Tell us which car you are interested in or which vehicle you want to sell",
        },
        consent: {
          prefix: "You agree to our",
          terms: "Terms",
          and: "and",
          privacyPolicy: "Privacy Policy",
          suffix: ".",
        },
        submitLabel: "Send Message",
        popup: {
          successTitle: "Message sent",
          successMessage: "Thank you. Your message has been sent. Check your mail.",
          errorTitle: "Message not sent",
          errorMessage: "Something went wrong. Please try again.",
          closeLabel: "OK",
        },
        testimonial: {
          quote:
            "A good car decision starts with clear information, fair pricing, and someone who takes your questions seriously.",
          author: "AutoAnders Team",
          imageAlt: "Car background in the contact form",
          imageUrl: "/bg.jpg",
        },
      },
      seo: {
        areaServed: ["Germany", "Europe", "International"],
        knowsAbout: [
          "Used Cars",
          "Car Sales",
          "Trade-In Service",
          "Car Financing",
        ],
        offerCatalogName: "Car Contact and Consultation",
        services: [
          "Available Cars",
          "Sell Your Car",
          "Trade-In Service",
          "Car Financing",
        ],
      },
    },
    pages: {
      about: {
        metadata: {
          title: "About Us | AutoAnders",
          description:
            "Learn more about AutoAnders, how we help drivers buy cars, sell vehicles, and make confident decisions.",
          locale: "en_US",
          keywords: [
            "about autoanders",
            "car dealer team",
            "buy cars",
            "sell cars",
          ],
        },
        eyebrow: "About AutoAnders",
        title: "A clearer way to buy and sell cars",
        intro:
          "At AutoAnders, we help drivers find the right vehicle, sell their current car, and understand each step with transparent information.",
        sections: [
          {
            title: "Our approach",
            paragraphs: [
              "At AutoAnders, we focus on selected vehicles, clear details, and fair conversations instead of pressure.",
              "Whether you want to buy, sell, trade in, or ask about financing, we guide you through the process in a practical and transparent way.",
            ],
          },
          {
            title: "How we work",
            bullets: [
              "We answer questions clearly before you make a decision.",
              "We compare vehicles and offers with realistic market context.",
              "We support the process from first contact to handover.",
            ],
          },
          {
            title: "What matters to us",
            bullets: [
              "Honest advice and transparent vehicle information.",
              "Fair offers when you sell or trade in your car.",
              "A buying experience that feels calm, clear, and professional.",
            ],
          },
        ],
        ctaLabel: "Contact AutoAnders",
      },
      privacy: {
        metadata: {
          title: "Privacy | AutoAnders",
          description:
            "Information about how personal data is processed on the AutoAnders website and during car buying, selling, trade-in, and financing inquiries.",
          locale: "en_US",
          keywords: [
            "autoanders privacy",
            "privacy policy",
            "gdpr privacy policy",
            "data protection notice",
            "contact form privacy",
          ],
        },
        eyebrow: "Privacy",
        title: "Privacy Policy",
        intro:
          "This page explains how personal data is collected, used, stored, shared, and protected on this website and during client communication and service delivery.",
        heroMeta: [
          "Last updated: [DATE]",
          "GDPR Art. 13 & 14 compliant",
          "Version 1.0",
        ],
        contents: [
          "Data Controller",
          "Data We Collect",
          "Legal Basis for Processing",
          "Purposes of Processing",
          "Data Sharing & Transfers",
          "Data Retention",
          "Your GDPR Rights",
          "Data Security",
          "Children's Privacy",
          "Changes to This Policy",
          "Contact & Complaints",
        ],
        sections: [
          {
            title: "Data Controller",
            paragraphs: [
              "For the purposes of Regulation (EU) 2016/679 (GDPR), the data controller responsible for processing your personal data is:",
              "We are committed to protecting your personal data and to processing it fairly, lawfully, and transparently.",
            ],
            note:
              "[YOUR AGENCY NAME]\n[Full registered address]\nVAT: [EU VAT number]\nEmail: [privacy@youragency.com]\n[Data Protection Officer (if applicable): [dpo@youragency.com]]",
          },
          {
            title: "Data We Collect",
            subsections: [
              {
                title: "Data You Provide Directly",
                bullets: [
                  "Identity data: first name, last name, job title, company name.",
                  "Contact data: email address, phone number, postal address.",
                  "Contract and billing data: billing address, VAT number, bank details for invoicing only.",
                  "Communication data: content of emails, messages, and meeting notes exchanged with us.",
                  "Social media credentials: login access, page roles, and ad account access only where we manage your profiles.",
                ],
              },
              {
                title: "Data Collected Automatically",
                bullets: [
                  "Technical data: IP address, browser type and version, operating system, device type.",
                  "Usage data: pages visited, time spent, referral source, and clicks.",
                  "Cookie data: see our Cookie Policy for full details.",
                ],
              },
              {
                title: "Data from Third Parties",
                bullets: [
                  "Social media platform data such as Meta, TikTok, and LinkedIn when we manage your accounts.",
                  "Analytics data from advertising platforms such as Google Ads and Meta Ads Manager.",
                  "Business information from public registers or LinkedIn solely for prospecting purposes.",
                ],
              },
            ],
            note:
              "We never collect special categories of personal data such as health, religion, ethnicity, political opinions, or biometric data unless you explicitly provide this in communications. In that case, we treat it with heightened protection.",
          },
          {
            title: "Legal Basis for Processing",
            paragraphs: [
              "The legal basis depends on the specific processing activity.",
              "Where we rely on legitimate interests, we have assessed that those interests are not overridden by your rights and freedoms. You may request our legitimate interests assessment by contacting us.",
            ],
            table: {
              columns: ["Processing Activity", "Legal Basis (GDPR Art. 6)"],
              rows: [
                [
                  "Delivering contracted services and managing projects",
                  "Art. 6(1)(b) â€” Contract performance",
                ],
                [
                  "Invoicing, accounting, and tax compliance",
                  "Art. 6(1)(c) â€” Legal obligation",
                ],
                [
                  "Sending marketing emails to existing clients",
                  "Art. 6(1)(f) â€” Legitimate interests",
                ],
                [
                  "Fraud prevention, security, and portfolio display",
                  "Art. 6(1)(f) â€” Legitimate interests",
                ],
                [
                  "Marketing emails to prospects and non-essential cookies",
                  "Art. 6(1)(a) â€” Consent",
                ],
                [
                  "Analytics and website improvement",
                  "Art. 6(1)(a) â€” Consent (cookie) or Art. 6(1)(f)",
                ],
              ],
            },
          },
          {
            title: "Purposes of Processing",
            paragraphs: [
              "We use your personal data for the following purposes.",
              "We will not use your data for any purpose incompatible with those listed above without prior notice and, where required, consent.",
            ],
            bullets: [
              "To provide and manage our social media and web design services.",
              "To communicate with you about your project, proposals, and invoices.",
              "To fulfil our accounting and legal obligations.",
              "To send service updates, newsletters, and relevant marketing where consent is required.",
              "To improve our website and services through analytics.",
              "To protect against fraud and ensure security.",
              "To display completed work in our portfolio with consent or under legitimate interests.",
            ],
          },
          {
            title: "Data Sharing & International Transfers",
            subsections: [
              {
                title: "Sub-Processors",
                paragraphs: [
                  "We share data with trusted sub-processors under GDPR-compliant Data Processing Agreements (DPAs). These may include:",
                ],
                bullets: [
                  "Cloud and hosting providers such as OVH, Hetzner, or AWS Europe.",
                  "Project management tools such as Notion, Trello, or Asana.",
                  "Communication tools such as Google Workspace or Slack.",
                  "Accounting software such as Pennylane or QuickBooks.",
                  "Payment processors such as Stripe.",
                  "Social media platforms such as Meta, TikTok, LinkedIn, and Google as required to manage client accounts.",
                ],
              },
              {
                title: "Legal Disclosures",
                paragraphs: [
                  "We may disclose your data to competent legal or regulatory authorities when required by applicable law or court order.",
                ],
              },
              {
                title: "International Transfers",
                paragraphs: [
                  "Some of our sub-processors may process data outside the EEA, for example in the USA. Where this occurs, we ensure appropriate safeguards under GDPR Chapter V.",
                  "We do not sell your personal data to third parties.",
                ],
                bullets: [
                  "European Commission adequacy decisions under Art. 45.",
                  "Standard Contractual Clauses (SCCs) under Art. 46.",
                  "Binding Corporate Rules where applicable.",
                ],
              },
            ],
          },
          {
            title: "Data Retention",
            paragraphs: [
              "Personal data is retained only for as long as necessary for the relevant purpose and then securely deleted or anonymised.",
            ],
            table: {
              columns: ["Data Category", "Retention Period", "Reason"],
              rows: [
                [
                  "Client contract and billing data",
                  "10 years after contract end",
                  "Accounting and legal obligation",
                ],
                [
                  "Prospect or inquiry data",
                  "3 years from last contact",
                  "Legitimate interests",
                ],
                [
                  "Marketing consent records",
                  "Until consent withdrawn + 3 years",
                  "Legal proof of consent",
                ],
                [
                  "Website analytics data",
                  "13 months maximum",
                  "CNIL / EDPB guidelines",
                ],
                [
                  "Social media credentials",
                  "Deleted within 30 days of contract end",
                  "Data minimisation",
                ],
                [
                  "Email communications",
                  "5 years from project end",
                  "Dispute resolution",
                ],
              ],
            },
          },
          {
            title: "Your GDPR Rights",
            paragraphs: [
              "Under the GDPR, you have the following rights regarding your personal data.",
              "To exercise your rights, contact [privacy@youragency.com]. We will respond within 30 calendar days. We may request identity verification before processing your request.",
            ],
            rights: [
              {
                article: "Art. 15",
                title: "Access",
                description: "Obtain a copy of your personal data we hold.",
              },
              {
                article: "Art. 16",
                title: "Rectification",
                description: "Correct inaccurate or incomplete data.",
              },
              {
                article: "Art. 17",
                title: "Erasure",
                description: "Request deletion where applicable.",
              },
              {
                article: "Art. 18",
                title: "Restriction",
                description: "Restrict processing in certain circumstances.",
              },
              {
                article: "Art. 20",
                title: "Portability",
                description:
                  "Receive your data in a structured, machine-readable format.",
              },
              {
                article: "Art. 21",
                title: "Object",
                description:
                  "Object to processing based on legitimate interests or direct marketing.",
              },
              {
                article: "Art. 7(3)",
                title: "Withdraw Consent",
                description:
                  "Withdraw consent at any time without affecting prior lawful processing.",
              },
              {
                article: "Art. 77",
                title: "Complain",
                description:
                  "Lodge a complaint with your national supervisory authority.",
              },
            ],
            subsections: [
              {
                title: "Supervisory Authorities",
                paragraphs: [
                  "You may also lodge a complaint with your national data protection authority.",
                ],
                links: [
                  { label: "France: CNIL", href: "https://www.cnil.fr" },
                  { label: "Germany: BfDI", href: "https://www.bfdi.bund.de" },
                  { label: "Italy: Garante", href: "https://www.garanteprivacy.it" },
                  { label: "Spain: AEPD", href: "https://www.aepd.es" },
                  {
                    label: "Netherlands: AP",
                    href: "https://www.autoriteitpersoonsgegevens.nl",
                  },
                  {
                    label: "Belgium: APD/GBA",
                    href: "https://www.dataprotectionauthority.be",
                  },
                ],
              },
            ],
          },
          {
            title: "Data Security",
            paragraphs: [
              "We implement appropriate technical and organisational measures to protect your personal data against accidental loss, destruction, alteration, unauthorised disclosure, or access, in accordance with GDPR Art. 32.",
              "In the event of a data breach likely to result in high risk to your rights and freedoms, we will notify you without undue delay in accordance with GDPR Art. 34.",
            ],
            bullets: [
              "HTTPS encryption for all data transmitted via our website.",
              "Access controls and role-based permissions for internal systems.",
              "Regular security reviews and staff training.",
              "Two-factor authentication on platforms holding client data.",
              "Secure deletion procedures at the end of retention periods.",
            ],
          },
          {
            title: "Children's Privacy",
            paragraphs: [
              "Our services are not directed at children under the age of 16, or the relevant age of digital consent in your member state.",
              "We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us immediately at [privacy@youragency.com] and we will delete it promptly.",
            ],
          },
          {
            title: "Changes to This Policy",
            paragraphs: [
              "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
              "We will notify you of material changes by email or by prominently posting a notice on our website at least 30 days before the change takes effect.",
              "The date at the top of this page indicates when the policy was last revised. We encourage you to review this policy periodically.",
            ],
          },
          {
            title: "Contact & Complaints",
            paragraphs: [
              "For any privacy-related questions, requests, or complaints, please use the contact details below.",
            ],
            note:
              "Privacy & GDPR: [privacy@youragency.com]\nData Protection Officer: [dpo@youragency.com] (if applicable)\nPost: [YOUR AGENCY NAME], [Full address], Attn: Privacy Team\nResponse time: Within 30 calendar days (GDPR deadline)",
          },
        ],
        note:
          "Before publishing, replace all placeholders such as [DATE], company name, address, VAT number, privacy email, and DPO details. Also verify that the listed tools, processors, retention periods, and legal bases match the services actually used by the live business.",
      },
      impressum: {
        metadata: {
          title: "Legal Notice | AutoAnders",
          description:
            "Legal notice and mandatory provider information for the AutoAnders website.",
          locale: "en_US",
          keywords: [
            "autoanders legal notice",
            "legal notice",
            "imprint",
            "provider information",
            "website legal disclosure",
          ],
        },
        eyebrow: "Legal",
        title: "Legal Notice",
        intro:
          "This page contains the mandatory provider and legal disclosure information for the AutoAnders website.",
        heroMeta: [
          "Last updated: [DATE]",
          "Jurisdiction: European Union",
          "Applicable to all EU visitors",
        ],
        sections: [
          {
            title: "Company Details",
            paragraphs: [
              "In compliance with EU Directive 2000/31/EC on electronic commerce and applicable national law, including France's Art. 6 LCEN, Germany's Â§5 TMG, Spain's Art. 10 LSSI-CE, and equivalent national provisions, the following mandatory information is disclosed to all users and visitors of this website.",
            ],
            contactCards: [
              {
                label: "Company Name",
                value: "[YOUR AGENCY NAME]",
              },
              {
                label: "Legal Form",
                value: "[e.g. SAS / GmbH / SRL / Ltd]",
              },
              {
                label: "Share Capital",
                value: "[e.g. â‚¬10,000]",
              },
              {
                label: "Registered Address",
                value: "[Street, City, Postal Code, Country]",
              },
              {
                label: "Registration Number",
                value: "[SIRET / HRB / KvK / CIF / etc.]",
              },
              {
                label: "EU VAT Number",
                value: "[e.g. FR12345678901]",
              },
              {
                label: "Publication Director",
                value: "[Full name of legal representative]",
              },
              {
                label: "Email",
                value: "[contact@youragency.com]",
              },
              {
                label: "Phone",
                value: "[+XX XXX XXX XXXX]",
              },
            ],
          },
          {
            title: "Website Hosting Provider",
            paragraphs: [
              "This website is hosted by the following provider.",
            ],
            contactCards: [
              {
                label: "Hosting Company",
                value: "[Host Name, e.g. OVH / Netlify / Hetzner]",
              },
              {
                label: "Address",
                value: "[Host's registered address]",
              },
              {
                label: "Country",
                value: "[Host's country]",
              },
              {
                label: "Contact",
                value: "[Host's contact info]",
              },
            ],
          },
          {
            title: "Copyright & Content Rights",
            paragraphs: [
              "All content published on this website, including but not limited to text, graphics, logos, icons, images, audio clips, and software, is the property of [YOUR AGENCY NAME] or its content suppliers and is protected under EU copyright law (Directive 2019/790/EU) and international intellectual property treaties.",
              "Unauthorized reproduction, distribution, or commercial use of any material from this website is strictly prohibited without prior written consent from [YOUR AGENCY NAME].",
            ],
            note:
              "Exception: You may reproduce content for personal, non-commercial use provided you clearly attribute the source. Any other use requires written authorization.",
          },
          {
            title: "Disclaimer of Liability",
            paragraphs: [
              "The information on this website is provided for general informational purposes only. [YOUR AGENCY NAME] makes reasonable efforts to keep information current and accurate, but makes no warranties as to completeness, accuracy, or fitness for a particular purpose.",
              "This website may contain links to third-party websites. [YOUR AGENCY NAME] has no control over the content of external sites and accepts no responsibility for them. The inclusion of any link does not imply endorsement.",
              "To the extent permitted by applicable EU law, [YOUR AGENCY NAME] shall not be liable for any damages arising from use of or inability to use this website.",
            ],
          },
          {
            title: "Governing Framework",
            paragraphs: [
              "This Legal Notice is governed by the laws of [Country of registration] and applicable EU legislation.",
              "For any questions regarding this Legal Notice, contact us at [legal@youragency.com].",
            ],
            bullets: [
              "EU Directive 2000/31/EC â€” Electronic Commerce.",
              "EU Directive 2019/790/EU â€” Copyright in the Digital Single Market.",
              "Regulation (EU) 2016/679 â€” GDPR.",
              "EU Directive 2009/136/EC â€” ePrivacy (Cookies).",
              "National implementation laws of the member state of establishment.",
            ],
          },
        ],
        note:
          "Before publishing, replace all placeholders such as [DATE], company name, legal form, share capital, address, registration number, VAT number, publication director, contact details, hosting provider details, and country of registration.",
      },
      terms: {
        metadata: {
          title: "Terms & Conditions | AutoAnders",
          description:
            "Terms and conditions for AutoAnders services, including vehicle inquiries, car sales, trade-ins, financing support, payment terms, liability, and dispute resolution.",
          locale: "en_US",
          keywords: [
            "autoanders terms",
            "terms and conditions",
            "car dealer terms",
            "web design contract terms",
            "social media management terms",
          ],
        },
        eyebrow: "Legal",
        title: "Terms & Conditions",
        intro:
          "This page sets out the terms governing AutoAnders services, including vehicle inquiries, car sales, trade-ins, financing support, payments, liability, and dispute resolution.",
        heroMeta: [
          "Last updated: [DATE]",
          "Directive 2011/83/EU compliant",
          "Version 1.0",
        ],
        contents: [
          "Definitions",
          "Services Offered",
          "Acceptance of Terms",
          "Client Obligations",
          "Intellectual Property",
          "Payment & Pricing",
          "Right of Withdrawal",
          "Termination",
          "Limitation of Liability",
          "Governing Law & Disputes",
          "Miscellaneous",
          "Contact",
        ],
        sections: [
          {
            title: "Definitions",
            paragraphs: [
              "For the purposes of these Terms and Conditions, the following terms have the meanings set out below.",
            ],
            bullets: [
              '"Agency" / "We" / "Us" â€” [YOUR AGENCY NAME], the provider of digital services described herein.',
              "\"Client\" / \"You\" â€” Any natural or legal person who contracts or inquires about the Agency's services.",
              '"Consumer" â€” A natural person acting outside their trade or profession, per EU Directive 2011/83/EU.',
              '"Services" â€” Social media management, website design and development, and related digital services.',
              '"Contract" â€” The service agreement, proposal, or order form agreed between Agency and Client.',
              '"Deliverables" â€” Any work product created, including content, visuals, code, websites, and campaign assets.',
              '"Statement of Work (SOW)" â€” A document specifying scope, timeline, and price for a specific project.',
            ],
          },
          {
            title: "Services Offered",
            subsections: [
              {
                title: "Social Media Management",
                bullets: [
                  "Strategy development and editorial calendar planning.",
                  "Content creation, including copywriting, graphic design, and short-form video.",
                  "Community management and audience engagement.",
                  "Paid advertising on Meta, TikTok, LinkedIn, Google, and other platforms.",
                  "Monthly performance reporting and campaign optimisation.",
                ],
              },
              {
                title: "Website Design & Development",
                bullets: [
                  "Custom UX/UI design and front-end development.",
                  "CMS-based websites such as WordPress, Webflow, Shopify, and others.",
                  "E-commerce development and payment gateway integration.",
                  "Website maintenance, SEO, and hosting coordination.",
                  "Accessibility compliance, including WCAG 2.1 / EN 301 549.",
                ],
              },
              {
                title: "Additional Services",
                bullets: [
                  "Brand identity and graphic design.",
                  "Email marketing strategy and campaign execution.",
                  "Digital audits and competitive analysis.",
                ],
              },
            ],
            note:
              "The exact scope, deliverables, timeline, and pricing for each project are defined in a Statement of Work (SOW) or proposal agreed before work commences. These Terms apply to all Contracts and SOWs.",
          },
          {
            title: "Acceptance of Terms",
            paragraphs: [
              "By engaging the Agency's services, whether by signing a Contract, making a payment, or sending written acceptance, you confirm that you have read, understood, and agree to be bound by these Terms.",
              "Acceptance may be made by the following methods.",
              "The Agency reserves the right to update these Terms at any time. Material changes will be communicated with a minimum of 30 days' notice. Continued engagement after that period constitutes acceptance of the revised Terms.",
              "If you are contracting on behalf of a legal entity, you confirm you have authority to bind that entity to these Terms.",
            ],
            bullets: [
              "Signing a written or electronic contract or proposal.",
              "Ticking an acceptance checkbox during an online ordering process.",
              "Payment of a deposit or invoice referencing these Terms.",
              "Written confirmation of acceptance by email.",
            ],
          },
          {
            title: "Client Obligations",
            subsections: [
              {
                title: "Information & Cooperation",
                bullets: [
                  "Provide accurate, complete, and timely information, materials, and access credentials required for service delivery.",
                  "Review and approve or reject deliverables within the timelines agreed in the Contract, typically 5 to 7 business days.",
                  "Designate a single authorised contact person to approve work and provide instructions.",
                  "Notify the Agency promptly of any changes affecting scope, strategy, or business direction.",
                ],
              },
              {
                title: "Lawful Use & Compliance",
                bullets: [
                  "Ensure all materials provided, including logos, images, text, and data, are owned by or properly licensed to the Client.",
                  "Not instruct the Agency to produce content that is unlawful, defamatory, discriminatory, or in breach of third-party intellectual property rights.",
                  "Comply with all applicable platform policies such as Meta, Google, and TikTok, and with EU advertising regulations.",
                  "Comply with GDPR and applicable data protection law in respect of any personal data shared with the Agency.",
                ],
              },
              {
                title: "Delays Caused by Client",
                paragraphs: [
                  "The Agency shall not be held liable for missed deadlines or project delays caused by the Client's failure to provide required materials, approvals, or feedback within agreed timeframes. The Agency reserves the right to adjust timelines and invoice for additional work caused by such delays.",
                ],
              },
            ],
          },
          {
            title: "Intellectual Property",
            subsections: [
              {
                title: "Agency's Pre-Existing Rights",
                paragraphs: [
                  "All proprietary tools, templates, frameworks, methodologies, and pre-existing works used by the Agency remain the exclusive property of the Agency. No rights to these are granted to the Client beyond what is strictly necessary to use the deliverables.",
                ],
              },
              {
                title: "Transfer of Deliverables",
                paragraphs: [
                  "Upon full payment of all outstanding invoices, the Agency assigns to the Client the rights to the final deliverables as agreed in the Contract.",
                  "Rights are not transferred until full payment is received. The Agency retains all rights if the Contract is terminated due to Client default.",
                ],
                bullets: [
                  "Right to reproduce and distribute the deliverables.",
                  "Right to modify, provided the original author credit is not falsely attributed.",
                  "Right to publish online and in print.",
                ],
              },
              {
                title: "Portfolio Right",
                paragraphs: [
                  "The Agency reserves the right to reference and display completed deliverables in its portfolio, case studies, and marketing materials, unless the Client requests confidentiality in writing before project commencement.",
                ],
              },
              {
                title: "Third-Party Assets",
                paragraphs: [
                  "Stock images, fonts, plugins, or other licensed third-party components may be incorporated into deliverables. The Agency will disclose such usage. The Client is responsible for maintaining relevant licenses post-delivery. The Agency shall not be liable for the Client's failure to renew such licenses.",
                ],
              },
              {
                title: "Client-Provided Content",
                paragraphs: [
                  "The Client warrants that all content, logos, images, and data provided to the Agency are free of third-party intellectual property claims. The Client indemnifies the Agency against any claims arising from the use of Client-supplied materials.",
                ],
              },
            ],
          },
          {
            title: "Payment & Pricing",
            subsections: [
              {
                title: "Pricing & VAT",
                paragraphs: [
                  "All prices are quoted in euros (â‚¬) and are exclusive of VAT unless explicitly stated otherwise. Applicable VAT rates comply with EU Directive 2006/112/EC. For cross-border B2B transactions within the EU, the reverse-charge mechanism may apply.",
                ],
              },
              {
                title: "Deposit & Milestone Payments",
                bullets: [
                  "A deposit of [30â€“50]% of the total project fee is due upon signing the Contract, before work commences.",
                  "Remaining balances are invoiced upon agreed project milestones or at project completion.",
                  "Monthly retainer fees are due on the 1st business day of each month.",
                ],
              },
              {
                title: "Payment Terms",
                bullets: [
                  "Invoices are payable within 30 days of the invoice date, unless otherwise agreed in the Contract.",
                  "Accepted payment methods: bank transfer (SEPA), [credit card, PayPal, etc.].",
                  "The Agency reserves the right to suspend services for overdue invoices.",
                ],
              },
              {
                title: "Late Payment â€” EU Directive 2011/7/EU",
                note:
                  "In accordance with EU Directive 2011/7/EU on combating late payment in commercial transactions, overdue invoices will incur:\n\nÂ· Statutory interest at the ECB reference rate + 8 percentage points per annum\nÂ· A flat recovery fee of â‚¬40 per overdue invoice\nÂ· The right to suspend all active services until payment is received",
              },
              {
                title: "Scope Changes & Additional Work",
                paragraphs: [
                  "Any changes to the agreed scope requested by the Client after Contract signing will be assessed and quoted separately. Work on scope changes will only commence upon written approval and, where applicable, additional deposit payment.",
                ],
              },
              {
                title: "Refunds",
                paragraphs: [
                  "Deposits are non-refundable once work has commenced, except in cases of Agency default. Completed and approved milestones are non-refundable. Consumer withdrawal rights apply where mandated by law.",
                ],
              },
            ],
          },
          {
            title: "Right of Withdrawal",
            note:
              "This article applies exclusively to Consumers, meaning natural persons acting outside their professional capacity, contracting remotely or off-premises under EU Directive 2011/83/EU.",
            subsections: [
              {
                title: "Withdrawal Period",
                paragraphs: [
                  "If you are a Consumer, you have the right to withdraw from a distance or off-premises contract within 14 calendar days of the contract conclusion date, without giving any reason.",
                ],
              },
              {
                title: "How to Exercise the Right",
                paragraphs: [
                  "Notify us via an unambiguous written statement to [legal@youragency.com] or by post. You may use the following model form, which is not mandatory.",
                ],
                note:
                  '"I hereby give notice that I withdraw from my contract for the provision of the following service: [description], ordered on [date]. Name: [name]. Address: [address]. Date: [date]."',
              },
              {
                title: "Exceptions to the Right of Withdrawal",
                paragraphs: [
                  "The right of withdrawal does not apply to the following cases.",
                ],
                bullets: [
                  "Services fully performed within the withdrawal period, with the Consumer's prior express consent and acknowledgement that the right is lost upon full performance.",
                  "Deliverables that have been clearly personalised or customised at the Consumer's request.",
                  "Digital content supplied on a non-tangible medium where performance has commenced with the Consumer's consent.",
                ],
              },
              {
                title: "Effects of Withdrawal",
                paragraphs: [
                  "If you withdraw, we will reimburse all payments received within 14 days of receiving your notice. If you requested services to begin during the withdrawal period, you shall pay a proportional amount for services rendered up to the date of withdrawal.",
                ],
              },
            ],
          },
          {
            title: "Termination",
            subsections: [
              {
                title: "Termination by Client",
                paragraphs: [
                  "The Client may terminate a Contract by providing [30 days'] written notice. Upon termination, the Client shall pay for all work completed up to the termination date. The deposit is non-refundable. Any third-party costs already committed, such as ad spend or licenses, are also payable by the Client.",
                ],
              },
              {
                title: "Termination by Agency",
                paragraphs: [
                  "The Agency may terminate a Contract immediately upon written notice if the Client meets any of the following conditions.",
                ],
                bullets: [
                  "Fails to pay any invoice within 15 days of the due date.",
                  "Breaches any material obligation under these Terms or the Contract.",
                  "Engages in conduct that is unlawful, abusive, or harmful to the Agency or third parties.",
                  "Enters insolvency, liquidation, or administration proceedings.",
                ],
              },
              {
                title: "Retainer Agreements",
                paragraphs: [
                  "Monthly retainer agreements may be terminated by either party with [30â€“60 days'] written notice, as specified in the Contract. Services will continue until the end of the notice period, subject to payment of all fees due.",
                ],
              },
              {
                title: "Post-Termination",
                paragraphs: [
                  "Upon termination, the Agency will transfer all Client-owned assets and credentials within a reasonable timeframe. Intellectual property rights to deliverables are only transferred upon receipt of full payment for all outstanding invoices.",
                ],
              },
            ],
          },
          {
            title: "Limitation of Liability",
            subsections: [
              {
                title: "Cap on Liability",
                paragraphs: [
                  "To the maximum extent permitted by applicable EU law, the Agency's total cumulative liability for any claim arising from a Contract shall not exceed the total fees paid by the Client under that Contract in the 3 months immediately preceding the claim.",
                ],
              },
              {
                title: "Excluded Losses",
                paragraphs: [
                  "The Agency shall not be liable for the following categories of loss.",
                ],
                bullets: [
                  "Indirect, consequential, incidental, or punitive damages.",
                  "Loss of revenue, profit, data, or business opportunities.",
                  "Losses arising from Client-supplied inaccurate or incomplete information.",
                  "Third-party platform changes such as algorithm updates, policy changes, or account suspensions by Meta, Google, TikTok, and others.",
                  "Advertising performance or specific campaign results unless explicitly guaranteed in writing.",
                  "Cybersecurity incidents beyond the Agency's reasonable control.",
                ],
              },
              {
                title: "Force Majeure",
                paragraphs: [
                  "Neither party shall be liable for failure or delay in performance due to circumstances beyond their reasonable control, including natural disasters, cyberattacks, wars, pandemics, strikes, or regulatory actions. The affected party must give prompt written notice and use reasonable efforts to mitigate the impact.",
                ],
              },
            ],
            note:
              "Consumer protection: Nothing in these Terms limits or excludes liability that cannot lawfully be excluded under mandatory EU consumer protection law, including liability for death or personal injury caused by the Agency's negligence, or fraud.",
          },
          {
            title: "Governing Law & Dispute Resolution",
            subsections: [
              {
                title: "Governing Law",
                paragraphs: [
                  "These Terms and all Contracts shall be governed by the laws of [Country of registration], without prejudice to any mandatory provisions protecting Consumers under the law of their country of habitual residence (EU Regulation No. 593/2008 â€” Rome I).",
                ],
              },
              {
                title: "Jurisdiction",
                paragraphs: [
                  "B2B Clients: disputes shall be submitted to the exclusive jurisdiction of the courts of [City, Country].",
                  "Consumer Clients: disputes may be brought before the courts of the Consumer's domicile, per EU Regulation No. 1215/2012 (Brussels I Recast).",
                ],
              },
              {
                title: "Online Dispute Resolution (ODR)",
                paragraphs: [
                  "Per EU Regulation No. 524/2013, Consumer Clients may use the EU's Online Dispute Resolution platform.",
                ],
                links: [
                  {
                    label: "EU Online Dispute Resolution Platform",
                    href: "https://ec.europa.eu/consumers/odr",
                  },
                ],
                note: "Agency ODR email: [contact@youragency.com]",
              },
              {
                title: "Amicable Resolution",
                paragraphs: [
                  "Before initiating formal proceedings, both parties agree to make a 30-day good-faith effort to resolve the dispute amicably following written notification.",
                ],
              },
            ],
          },
          {
            title: "Miscellaneous",
            subsections: [
              {
                title: "Entire Agreement",
                paragraphs: [
                  "These Terms, together with any Contract or SOW, constitute the entire agreement between the parties and supersede all prior communications, negotiations, or understandings on the subject matter.",
                ],
              },
              {
                title: "Severability",
                paragraphs: [
                  "If any provision of these Terms is found invalid or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.",
                ],
              },
              {
                title: "Waiver",
                paragraphs: [
                  "Failure to enforce any right or provision under these Terms shall not constitute a waiver of that right or provision.",
                ],
              },
              {
                title: "Assignment",
                paragraphs: [
                  "The Client may not assign or transfer their rights or obligations under a Contract without the Agency's prior written consent. The Agency may assign its rights to a successor entity in connection with a merger, acquisition, or sale of assets.",
                ],
              },
              {
                title: "Language",
                paragraphs: [
                  "These Terms are drafted in English. In the event of a conflict between translated versions, the English version shall prevail, unless mandatory local law requires the local language version to take precedence.",
                ],
              },
            ],
          },
          {
            title: "Contact",
            paragraphs: [
              "For any questions, requests, or complaints regarding these Terms, please use the contact details below.",
            ],
            contactCards: [
              {
                label: "General",
                value: "[contact@youragency.com]",
              },
              {
                label: "Legal / Billing",
                value: "[legal@youragency.com]",
              },
              {
                label: "Address",
                value: "[Full company address]",
              },
              {
                label: "Response time",
                value: "Within 5 business days",
              },
            ],
          },
        ],
        note:
          "Before publishing, replace all placeholders such as [DATE], company name, address, VAT, legal email, contact email, deposit percentage, notice periods, and country/jurisdiction details. Also make sure the payment methods, services, and legal terms match your actual business operations.",
      },
      cookie: {
        metadata: {
          title: "Cookie Policy | AutoAnders",
          description:
            "Information about how cookies and similar technologies are used on the AutoAnders website.",
          locale: "en_US",
          keywords: [
            "autoanders cookie policy",
            "cookie policy",
            "website cookies",
            "gdpr cookies",
            "eprivacy cookie notice",
          ],
        },
        eyebrow: "Cookies",
        title: "Cookie Policy",
        intro:
          "This page explains how cookies and similar technologies are used on this website, which categories exist, and how consent can be managed.",
        heroMeta: [
          "Last updated: [DATE]",
          "CNIL & EDPB guidelines compliant",
          "Version 1.0",
        ],
        sections: [
          {
            title: "What are cookies?",
            paragraphs: [
              "Cookies are small text files placed on your device when you visit a website. They allow the website to recognise your device, remember your preferences, and collect information about how you use the site.",
              "We use cookies and similar technologies such as pixels, local storage, session storage, and fingerprinting scripts on our website in compliance with EU Directive 2009/136/EC (ePrivacy Directive) and the GDPR, as interpreted by EDPB guidelines on consent and CNIL recommendations.",
            ],
            note: "Key principle: We only place non-essential cookies after obtaining your freely given, specific, informed, and unambiguous consent. You may withdraw consent at any time.",
          },
          {
            title: "Cookie categories",
            paragraphs: [
              "We classify cookies into four categories based on their purpose.",
            ],
            categories: [
              {
                name: "Strictly Necessary Cookies",
                description:
                  "Essential for the website to function. They enable core features such as security, session management, and accessibility. These cookies cannot be disabled.",
                badge: "No consent required",
              },
              {
                name: "Analytics & Performance Cookies",
                description:
                  "Help us understand how visitors interact with our website by collecting information anonymously or pseudonymously. Used to improve our site and services.",
                badge: "Consent required",
              },
              {
                name: "Marketing & Retargeting Cookies",
                description:
                  "Used to deliver relevant advertisements and track the effectiveness of campaigns across platforms such as Meta and Google.",
                badge: "Consent required",
              },
              {
                name: "Preference Cookies",
                description:
                  "Remember your settings and choices such as language, region, and display preferences to improve your experience on return visits.",
                badge: "Consent required",
              },
            ],
          },
          {
            title: "Cookies we use",
            paragraphs: [
              "The following is a list of cookies used on our website. This list is updated when our cookie usage changes.",
            ],
            cookieTables: [
              {
                title: "Strictly Necessary",
                columns: ["Name", "Provider", "Purpose", "Duration"],
                rows: [
                  ["_session", "AutoAnders", "Maintains your session as you navigate the site", "Session"],
                  ["csrf_token", "AutoAnders", "Security token to prevent cross-site request forgery", "Session"],
                  ["cookie_consent", "AutoAnders", "Stores your cookie consent preferences", "12 months"],
                ],
              },
              {
                title: "Analytics (with consent)",
                columns: ["Name", "Provider", "Purpose", "Duration"],
                rows: [
                  ["_ga, _ga_*", "Google Analytics", "Distinguishes users; tracks sessions and campaigns", "2 years"],
                  ["_gid", "Google Analytics", "Distinguishes users within a 24-hour window", "24 hours"],
                  ["[_pk_id]", "Matomo (optional)", "Privacy-friendly analytics (if used instead of GA)", "13 months"],
                ],
              },
              {
                title: "Marketing & Retargeting (with consent)",
                columns: ["Name", "Provider", "Purpose", "Duration"],
                rows: [
                  ["_fbp, _fbc", "Meta (Facebook)", "Identifies browsers for Meta advertising and conversion tracking", "3 months"],
                  ["ads/ga-audiences", "Google Ads", "Retargeting via Google Ads based on visitor behaviour", "Session"],
                  ["tt_webid", "TikTok Pixel", "Tracks conversions and audience targeting on TikTok", "13 months"],
                  ["li_fat_id", "LinkedIn", "LinkedIn Insight Tag for campaign analytics and retargeting", "30 days"],
                ],
              },
              {
                title: "Preference (with consent)",
                columns: ["Name", "Provider", "Purpose", "Duration"],
                rows: [
                  ["lang_pref", "AutoAnders", "Remembers your language preference", "12 months"],
                  ["theme_pref", "AutoAnders", "Remembers your display theme preference", "12 months"],
                ],
              },
            ],
          },
          {
            title: "How we obtain and manage consent",
            paragraphs: [
              "In accordance with EDPB guidelines and national supervisory authority requirements such as CNIL and ICO, we obtain your consent for non-essential cookies through a cookie consent banner displayed on your first visit.",
            ],
            bullets: [
              "Clearly explains which cookie categories are used and for what purposes.",
              "Requires an active, affirmative action to consent, with no pre-ticked boxes.",
              "Makes it equally easy to refuse as to accept.",
              "Does not use dark patterns or manipulative design.",
              "Records the date, time, and scope of your consent.",
            ],
            note: 'Withdraw or modify consent: You can change your cookie preferences at any time by clicking the "Cookie Settings" link in our website footer. Withdrawing consent does not affect the lawfulness of processing prior to withdrawal.',
          },
          {
            title: "Browser-level cookie controls",
            paragraphs: [
              "You may also manage cookies through your browser settings. Most browsers allow you to view cookies currently stored on your device, delete all or specific cookies, block cookies from all or specific websites, and enable Do Not Track signals, although not all sites honour this setting.",
              "Disabling strictly necessary cookies may impair website functionality. Disabling analytics or marketing cookies will not affect your ability to use our services.",
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
            title: "Third-party cookies and opt-out",
            paragraphs: [
              "Some cookies are set by third-party services embedded on our site. These third parties have their own privacy policies. You may opt out of their tracking directly through the following services.",
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
            title: "Updates to this policy",
            paragraphs: [
              "We may update this Cookie Policy when we change the cookies we use or when legal requirements change. We will notify you of material changes through our cookie consent banner or by posting an updated date on this page. We recommend reviewing this page periodically.",
              "For any questions about our use of cookies, contact us at privacy@autoanders.com.",
            ],
          },
        ],
        note:
          "Before publishing, replace [DATE] if needed and make sure the listed cookies and third-party services match the tools actually used on the live website.",
      },
    },
};

