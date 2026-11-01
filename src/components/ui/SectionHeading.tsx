import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "between";
  rightContent?: React.ReactNode;
  hasLine?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  className,
  align = "left",
  rightContent,
  hasLine = true,
}) => {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      {label && (
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#111111]/80 font-heading">
            {label}
          </span>
          {hasLine && <div className="h-[1px] w-12 bg-[#111111]/30" />}
        </div>
      )}

      <div
        className={cn(
          "flex flex-col gap-4",
          align === "between" && "md:flex-row md:items-end md:justify-between",
          align === "center" && "items-center text-center"
        )}
      >
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111111] font-heading leading-[1.08]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base text-[#777777] max-w-xl font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {rightContent && <div className="mt-2 md:mt-0">{rightContent}</div>}
      </div>
    </div>
  );
};

