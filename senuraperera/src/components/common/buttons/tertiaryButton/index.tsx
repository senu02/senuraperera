"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function TertiaryButton({
  text,
  href,
  onClick,
  className = "",
}: Props) {
  const buttonContent = (
    <motion.span
      className={`
        inline-flex items-center space--15
        text--15 font-bold uppercase text-davys-Grey
        transition-colors duration-300 cursor-pointer
        hover:text-orange-passion
        ${className}
      `}
      transition={{ duration: 0.2 }}
    >
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
      >
        <path
          d="M12.157 12.1572L10.0532 12.1335L9.95837 3.7183L1.6524 11.9354L0.132756 10.4157L8.43872 2.19865L0.0235284 2.10381L-0.000181093 1.52007e-05L12.0215 0.135496L12.157 12.1572Z"
          fill="#F5821F"
        />
      </svg>
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}
