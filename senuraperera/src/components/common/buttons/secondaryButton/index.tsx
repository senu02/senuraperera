"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  variant?: "default" | "light" | "dark";
  className?: string;
};

export default function SecondaryButton({
  text,
  href,
  onClick,
  active = false,
  variant = "default",
  className = "",
}: Props) {
  const getClass = () => {
    if (active) return "bg-cyan border-cyan text-white";
    switch (variant) {
      case "light":
        return "border border-black/25 text-eerie-black hover:bg-cyan hover:border-cyan hover:text-white";
      case "dark":
        return "bg-strong-orange border-strong-orange hover:bg-[#F5821F] text-white hover:border-[#F5821F] hover:text-white";
      default:
        return "bg-blue-green border-blue-green text-white hover:bg-strong-orange hover:border-strong-orange hover:text-white";
    }
  };

  const buttonContent = (
    <motion.span
      className={`
        inline-flex 
        border px--20 py--10
        text--16 font-semibold tracking-widest uppercase
        transition-colors duration-300 cursor-pointer
        ${getClass()}
        ${className}
      `}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {text}
    </motion.span>
  );

  if (href) return <Link href={href}>{buttonContent}</Link>;
  return <button onClick={onClick}>{buttonContent}</button>;
}
