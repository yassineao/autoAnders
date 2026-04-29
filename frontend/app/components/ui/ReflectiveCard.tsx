import React from "react";
import { Fingerprint, Activity, Lock } from "lucide-react";

interface ReflectiveCardProps {
  name?: string;
  role?: string;
  idNumber?: string;
  badgeText?: string;

  color?: string;
  overlayColor?: string;

  className?: string;
  style?: React.CSSProperties;
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  name = "ALEXANDER DOE",
  role = "SENIOR DEVELOPER",
  idNumber = "8901-2345-6789",
  badgeText = "SECURE ACCESS",

  color = "white",
  overlayColor = "rgba(255,255,255,0.08)",

  className = "",
  style = {},
}) => {
  return (
    <div
      className={`relative w-[320px] h-[500px] rounded-[20px] overflow-hidden bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] isolate font-sans ${className}`}
      style={style}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_35%),linear-gradient(135deg,#111,#222_45%,#050505)]" />

      {/* Noise */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay" />

      {/* Shine */}
      <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.08)_35%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.08)_65%,rgba(255,255,255,0.25)_100%)] pointer-events-none mix-blend-overlay" />

      {/* Border */}
      <div className="absolute inset-0 rounded-[20px] p-[1px] bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.5)_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] z-30 pointer-events-none" />

      {/* Content */}
      <div
        className="relative z-40 h-full flex flex-col justify-between p-8"
        style={{ color, background: overlayColor }}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/20 pb-4">
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] px-2 py-1 bg-white/10 rounded border border-white/20">
            <Lock size={14} className="opacity-80" />
            <span>{badgeText}</span>
          </div>

          <Activity className="opacity-80" size={20} />
        </div>

        {/* Center */}
        <div className="flex-1 flex flex-col justify-end items-center text-center gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-[0.05em] m-0 mb-2 drop-shadow-md">
              {name}
            </h2>

            <p className="text-xs tracking-[0.2em] opacity-70 m-0 uppercase">
              {role}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end border-t border-white/20 pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] tracking-[0.1em] opacity-60">
              ID NUMBER
            </span>

            <span className="font-mono text-sm tracking-[0.05em]">
              {idNumber}
            </span>
          </div>

          <div className="opacity-40">
            <Fingerprint size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;