"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SecondaryButton from "@/components/common/buttons/secondaryButton";
import SafeImage from "@/components/common/safeImage";

type NavigationItem = {
  label: string;
  href: string;
  submenu?: NavigationItem[];
};

type Props = {
  toggleSideMenu?: () => void;
  navigation?: NavigationItem[];
  logoSrc?: string;
  onOpenModal?: () => void;
};

export default function FixedHeader({
  toggleSideMenu = () => {},
  navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "contact", href: "/contact" },
  ],
  logoSrc = "/images/logo/eme-logo.svg",
  onOpenModal,
}: Props) {
  const pathname = usePathname();

  return (
    <div className="container--90 py--20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <Link href="/" title="eme+">
            <SafeImage
              src={logoSrc}
              alt="eMe+"
              width={146}
              height={41}
              loading="eager"
              fetchPriority="high"
              className="w-[100px] h-[40px] lg:w-[calc(112/1920*100vw)] lg:h-[calc(51/1920*100vw)]"
            />
          </Link>
        </motion.div>

        {/* Right side */}
        <div className="flex items-center space--40">
          {/* Desktop Nav — hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center space--40">
            {navigation.map((item, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`text-white text--15 font-medium tracking-widest uppercase transition-opacity duration-200 ${
                    pathname === item.href
                      ? "opacity-100"
                      : "opacity-100 hover:text-strong-orange"
                  }`}
                >
                  {item.label}
                </Link>
                {pathname === item.href && (
                  <div className="absolute bg-white w-full" />
                )}
                {pathname !== item.href && (
                  <motion.div
                    className="absolute bg-white"
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA — hidden on mobile/tablet */}
          <div className="hidden lg:block">
            <SecondaryButton
              text="REQUEST A PROPOSAL"
              href="/request"
              variant="default"
            />
          </div>

          {/* Hamburger — always visible */}
          <motion.button
            onClick={toggleSideMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            aria-label="Toggle menu"
          >
            <img
              src="/images/logo/hamburgerMenu.svg"
              alt="Menu"
              className="w-[31.5px] h-[25px] lg:w-[calc(35/1920*100vw)] lg:h-[calc(25/1920*100vw)]"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
