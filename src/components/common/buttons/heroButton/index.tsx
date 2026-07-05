"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "light" | "dark";
  className?: string;
  textsize?: string;
  textcase?:string;
};

export default function HeroButton({
  text,
  href,
  onClick,
  variant = "default",
  className = "",
  textsize = "text--15",
  textcase = "uppercase",
}: Props) {
  const getBorderClass = () => {
    switch (variant) {
      case "light":
        return "border-white text-white hover:bg-white hover:text-midnight-blue";
      case "dark":
        return "border-dark-blue text-dark-blue hover:bg-cyan hover:text-white";
      default:
        return " text-black tracking-wider hover:text-blue";
    }
  };

  const buttonContent = (
    <motion.span
      className={`
        inline-flex items-center justify-center
        ${textsize} ${textcase} font-semibold tracking-wide 
        transition-colors duration-300 cursor-pointer underline underline-offset-4
        ${getBorderClass()}
        ${className}
      `}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}
