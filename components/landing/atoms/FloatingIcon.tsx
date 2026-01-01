"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingIconProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  bgColor?: string;
  borderColor?: string;
  scale?: number;
}

export default function FloatingIcon({
  children,
  className = "",
  delay = 0,
  bgColor = "bg-white",
  borderColor = "border-white",
  scale = 1,
}: FloatingIconProps) {
  return (
    <motion.div
      initial={{ y: 0, scale: 0.8, opacity: 0 }}
      animate={{ 
        y: [-8, 8, -8],
        scale: scale,
        opacity: 1
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        },
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 }
      }}
      className={`absolute z-20 ${bgColor} border-[6px] ${borderColor} rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}
