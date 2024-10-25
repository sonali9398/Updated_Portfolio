import React from "react";

interface MagicButtonProps {
  title?: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  children?: React.ReactNode;
}

export const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  children,
}) => {
  return (
    <button
      className={`relative inline-flex shadow-gray-900 h-12 w-full md:w-60 mt-10 overflow-hidden rounded-lg p-[1px]  focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      {/* Animated Border */}
      <span className="absolute inset-0 animate-rotateGradient bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] p-[1px] rounded-lg" />

      {/* Content Wrapper */}
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 text-white text-sm font-medium gap-2 backdrop-blur-3xl">
        {position === "left" && icon}
        {title && title}
        {children}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
