"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  text: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
};

export default function BaseButton({
  text,
  href,
  active = false,
  onClick,
}: Props) {
  const classes = `
  flex items-center text-center justify-center space--10
  w-full h-full lg:w-[calc(410/1920*100vw)] lg:h-[calc(76/1920*100vw)] py--10
  text--22 font-medium 
  transition-colors duration-300 cursor-pointer
  ${
    active
      ? "bg-light-grayish text-gray-700"
      : "bg-light-grayish text-gray-700 hover:bg-cyan hover:text-white"
  }
`;

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="currentColor"
    >
      <path
        d="M6.84633e-05 5.3607e-05L6.89691e-05 2.14964L8.5984 2.14964L0.298348 10.7321L1.83376 12.2675L10.1338 3.68505V12.2834L12.2834 12.2834L12.2834 5.49557e-05L6.84633e-05 5.3607e-05Z"
        fill="currentColor"
      />
    </svg>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={href} className={classes}>
          <span>{text}</span>
          <ArrowIcon />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className={classes}
    >
      <span>{text}</span>
      <ArrowIcon />
    </motion.button>
  );
}
