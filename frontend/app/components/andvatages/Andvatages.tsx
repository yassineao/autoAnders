import Hero from "./Hero";
import Highlights from "./Highlights";
import Services from "./Services";
import type { AndvatagesContent, AndvatagesServices as AndvatagesServicesType } from "./types";

type AndvatagesProps = {
  locale: string;
  content: AndvatagesContent;
  services: AndvatagesServicesType;
  contactLabel: string;
};

export default function Andvatages({
  locale,
  content,
  services,
  contactLabel,
}: AndvatagesProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B0B0F] pt-24 text-white sm:pt-28">
      <Hero
        locale={locale}
        content={content}
        services={services}
        contactLabel={contactLabel}
      />
      <Highlights content={content} />
      <Services services={services} />
    </main>
  );
}
