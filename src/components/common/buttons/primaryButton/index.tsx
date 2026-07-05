"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "light" | "dark";
  className?: string;
  linkclassName?: string;
};

export default function PrimaryButton({
  text,
  href = "",
  onClick,
  variant = "default",
  className = "",
  linkclassName = ""
}: Props) {
  const getBorderClass = () => {
    switch (variant) {
      case "light":
        return "border-white text-white hover:bg-white hover:text-black";
      case "dark":
        return "border-dark-blue text-dark-blue hover:bg-cyan hover:text-white";
      default:
        return "border-black hover:border-blue text-black tracking-wider hover:bg-blue hover:text-white";
    }
  };

  const buttonContent = (
    <motion.span
      className={`
        inline-flex items-center justify-center
        border-[1px] px-6 py-3 lg:px-10 lg:py-3
        text--15 font-semibold tracking-wide uppercase
        transition-colors duration-300 cursor-pointer
        ${getBorderClass()}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.span>
  );

  if (href) {
    return <Link className={`${linkclassName}`} href={href}>{buttonContent}</Link>;
  }

  //return <button onClick={onClick}>{buttonContent}</button>;
}
