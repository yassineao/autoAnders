import Image from "next/image";
import type { ServiceHero2 } from "@/app/types/Service";

type Hero2Props = {
  content: ServiceHero2;
};
export default function Hero2({ content }: Hero2Props){

    return (
        <section>
  <div className="container px-3 py-12 sm:px-6 sm:py-24">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-8 md:gap-0">
      <div className="w-full rounded-xl md:w-1/2 lg:w-5/6 lg:max-w-lg">
        <div>
           <Image
                       src={content.imageUrl}
                       alt={content.imageAlt}
                       width={960}
                       height={1200}
                       priority
                       className="hidden max-h-[400px] w-full max-w-xl rounded-3xl object-cover md:block lg:max-h-[800px]"
                     />
        </div>
      </div>
      <div className="mb-0 flex flex-col items-start text-left md:w-1/2 md:pl-10 lg:flex-grow lg:pr-24 xl:pl-16">
        <span className="mb-5 text-xs font-bold uppercase tracking-widest text-blue-400 sm:mb-8">  {content.title} </span>
        <p className="mb-7 text-sm leading-7 text-gwhite sm:mb-12 sm:text-base sm:leading-relaxed">{content.description}</p>
        <div className="mb-4 inline-flex w-full items-center">
         <span className="flex flex-grow flex-col">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              {content.subtitle}
              <span className="font-semibold text-white lg:mb-0">{content.subdescription}</span>
            </h2>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
