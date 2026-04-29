import type { LocaleDictionary } from "../../lib/i18n";
import Image from "next/image";
type GraphsProps = {
  content: LocaleDictionary["servicePage"]["features"];
};

const featureImages = [
  "https://assets.prebuiltui.com/images/components/feature-sections/features-graphs-image.png",
  "https://assets.prebuiltui.com/images/components/feature-sections/features-dash-img.png",
  "https://assets.prebuiltui.com/images/components/feature-sections/features-social-image.png",
];

export default function Graphs({ content }: GraphsProps) {
  return (
    <section id="services-overview" className="px-4 py-16 ">
      <div className="flex flex-col items-center justify-center text-center">
        <button className="rounded-full bg-neutral-800 px-6 py-2.5 text-sm text-white/80">
          {content.badge}
        </button>
        <h2 className="mt-6 text-4xl font-medium text-white">
          {content.title}
        </h2>
        <p className="mt-2 max-w-lg text-base text-white/60">
          {content.description}
        </p>

        <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition duration-300 hover:-translate-y-3"
            >
              {item.statLabel ? (
                <div className="mb-4 ml-auto flex w-fit items-center gap-1.5 rounded-full bg-neutral-800 px-2 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#00A63E"
                    stroke="#00A63E"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trending-up"
                  >
                    <path d="M16 7h6v6" />
                    <path d="m22 7-8.5 8.5-5-5L2 17" />
                  </svg>
                  <p className="text-xs text-white/80">{item.statLabel}</p>
                </div>
              ) : null}

              <div className="flex flex-1 items-center justify-center">
                <Image
                  className={`w-full object-contain ${
                    index === 0 ? "max-w-56" : index === 2 ? "max-w-60" : ""
                  }`}
                  src={featureImages[index] ?? featureImages[0]}
                  alt={item.imageAlt}
                  width={400}
                  height={300}
                />
              </div>
              <h3 className="mt-8 text-left text-base font-medium text-white">
                {item.title}
              </h3>
              <p className="mb-4 mt-2 max-w-2xs text-left text-sm text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
