"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LandingButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export default function LandingButton({
  children,
  variant = "primary",
  className = "",
  onClick,
  size = "md",
}: LandingButtonProps) {
  const baseStyles = "btn border-none transition-all duration-300 rounded-full font-semibold";
  
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-200",
    outline: "bg-transparent border-2 border-slate-200 hover:border-slate-300 text-slate-700",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600",
  };

  const sizes = {
    sm: "btn-sm px-6",
    md: "px-8",
    lg: "btn-lg px-10 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
