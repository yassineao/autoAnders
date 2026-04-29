import Image from "next/image";

type BrandLogoProps = {
  size?: "nav" | "footer";
  priority?: boolean;
};

export default function BrandLogo({
  size = "nav",
  priority = false,
}: BrandLogoProps) {
  const isFooter = size === "footer";

  return (
    <div className={isFooter ? "h-20 sm:h-24" : "h-9 sm:h-10"}>
      <Image
  src="/LogoBG.png"
  alt="Autoanders Logo"
  width={2172}
  height={724}
  priority={priority}
  sizes={isFooter ? "120px" : "100px"}
  className={`w-auto object-contain ${
    isFooter ? "h-14 sm:h-16" : "h-7 sm:h-8"
  }`}
/>
    </div>
  );
}
