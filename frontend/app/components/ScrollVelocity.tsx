import type { CSSProperties, ReactNode, RefObject } from "react";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface ScrollVelocityProps {
  scrollContainerRef?: RefObject<HTMLElement | null>;
  texts: ReactNode[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: CSSProperties;
  scrollerStyle?: CSSProperties;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function ScrollVelocity({
  texts = [],
  velocity = 100,
  className = "",
  numCopies = 6,
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
}: ScrollVelocityProps) {
  const safeCopies = Math.max(4, numCopies);
  const duration = `${clamp(28 - Math.abs(velocity) / 8, 10, 24)}s`;

  return (
    <section className="space-y-2">
      {texts.map((text, index) => {
        const directionClass =
          index % 2 === 0
            ? "scroll-velocity-track"
            : "scroll-velocity-track scroll-velocity-track--reverse";

        return (
          <div
            key={`${index}-${String(text)}`}
            className={`${parallaxClassName} scroll-velocity-row relative overflow-hidden`}
            style={parallaxStyle}
          >
            <div
              className={`${directionClass} ${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-tight drop-shadow md:text-7xl md:leading-none`}
              style={{
                ...(scrollerStyle ?? {}),
                ["--scroll-duration" as string]: duration,
              }}
            >
              {Array.from({ length: 2 }).map((_, groupIndex) => (
                <div className="scroll-velocity-group flex shrink-0" key={groupIndex}>
                  {Array.from({ length: safeCopies }).map((__, copyIndex) => (
                    <span className={`inline-flex shrink-0 px-4 ${className}`} key={copyIndex}>
                      {text}&nbsp;
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
