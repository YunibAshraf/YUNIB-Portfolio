import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  showArrow,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-full text-center";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantStyles = {
    primary: "bg-[#111111] text-white hover:bg-black hover:opacity-90 active:scale-[0.98]",
    secondary: "bg-transparent text-[#111111] border border-[#DAD9D4] hover:border-[#111111] hover:bg-black/5 active:scale-[0.98]",
    outline: "border border-[#DAD9D4] bg-[#F5F4F0] text-[#111111] hover:border-[#111111] active:scale-[0.98]",
    white: "bg-white text-[#111111] hover:bg-white/90 active:scale-[0.98] shadow-sm",
  };

  const content = (
    <>
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("group", baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn("group", baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn("group", baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
};

