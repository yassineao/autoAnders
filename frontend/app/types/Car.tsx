
export type Car = {
  id: number;
  brand: string;
  model: string;
  price: number;
  year: number;
  km: number;
  transmission: string;
  fuel: string;
  image: string;
  tags: {
    de: string[];
    en: string[];
    nl: string[];
  };
};

export type AutoCatalogueLabels = {
  vehiclesFound: string;
  searchPlaceholder: string;
  allBrands: string;
  maxPrice: string;
  searchButton: string;
  viewDetails: string;
  moreButton: string;
};

export type AutoCatalogueProps = {
  cars: Car[];
  locale: "de" | "en" | "nl";
  title: string;
  subtitle: string;
  labels: AutoCatalogueLabels;
  showMoreButton?: boolean;
  onViewDetails?: (car: Car) => void;
};
