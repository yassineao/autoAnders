import Image from "next/image";
import type { ServiceHero2 } from "@/app/types/Service";

type Hero2Props = {
  content: ServiceHero2;
};
export default function Hero2({ content }: Hero2Props){

    return (
        <section>
  <div className="container py-24  ">
    <div className="flex flex-wrap items-center mx-auto max-w-7xl ">
      <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 rounded-xl ">
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
      <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pl-16 md:mb-0">
        <span className="mb-8 text-xs font-bold tracking-widest text-blue-400 uppercase  pl-3">  {content.title} </span>
        <p className="mb-12 text-base leading-relaxed text-gwhite  pl-3">{content.description}</p>
        <a className="inline-flex items-center w-full mb-4">
         <span className="flex flex-col flex-grow pl-3">
            <h2 className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
              {content.subtitle}
              <span className="font-semibold text-white lg:mb-0">{content.subdescription}</span>
            </h2>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
    )
}
