import type { ServiceSlug } from "@/app/types/Service";

export const serviceSlugs = [
  "available-cars",
  "financing",
  "tradein",
  "vehicle-check",
] as const satisfies readonly ServiceSlug[];

export const serviceOverviewVisuals: Record<
  ServiceSlug,
  {
    artSrc: string;
    panelBackground: string;
  }
> = {
  "available-cars": {
    artSrc: "/new-car.png",
    panelBackground:
      "radial-gradient(circle at 25% 25%, rgba(168,85,247,0.55), transparent 34%), linear-gradient(145deg, rgba(11,11,15,0.95) 0%, rgba(23,55,124,0.92) 55%, rgba(168,85,247,0.92) 100%)",
  },
  financing: {
    artSrc: "/loan.png",
    panelBackground:
      "radial-gradient(circle at 72% 24%, rgba(251,191,36,0.45), transparent 28%), linear-gradient(145deg, rgba(11,11,15,0.95) 0%, rgba(146,64,14,0.92) 48%, rgba(244,114,182,0.85) 100%)",
  },
  tradein: {
    artSrc: "/deal.png",
    panelBackground:
      "radial-gradient(circle at 28% 22%, rgba(45,212,191,0.45), transparent 30%), linear-gradient(145deg, rgba(11,11,15,0.95) 0%, rgba(8,47,73,0.92) 50%, rgba(37,99,235,0.92) 100%)",
  },
  "vehicle-check": {
    artSrc: "/hero.jpg",
    panelBackground:
      "radial-gradient(circle at 70% 28%, rgba(125,211,252,0.45), transparent 30%), linear-gradient(145deg, rgba(11,11,15,0.95) 0%, rgba(30,41,59,0.92) 48%, rgba(56,189,248,0.85) 100%)",
  },
};
