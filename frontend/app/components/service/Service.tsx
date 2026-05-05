import type { Locale, LocaleDictionary } from "@/app/lib/i18n";
import type { ServiceSlug } from "@/app/types/Service";
import Graphs from "./Graphs";
import Hero from "./Hero";
import Features from "./Features";
import Hero2 from "../Hero2";

type ServiceProps = {
  content: LocaleDictionary["servicePage"];
  locale: Locale;
  service: ServiceSlug;
};

export default function Service({ content, locale, service }: ServiceProps) {
  const heroContent = content.hero[service] ?? content.hero["available-cars"];

  return (
    <div>
      <Hero content={heroContent} locale={locale} />
   
      <div className="bg-black" >
      <Graphs content={content.features} />
      </div>
    
          <div className="justify-center items-center flex flex-col " >
      <Hero2 content={content.hero2}/>
      </div>
      
         
       <div className="justify-center items-center flex flex-col bg-black" >
      <Features content={content.features} />
      </div>
    </div>
  );
}

    
