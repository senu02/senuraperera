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
    // { label: "About", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    // { label: "Skills", href: "/skills" },
    { label: "contact", href: "/contact-us" },
  ],
  logoSrc = "/images/senuralogo.jpg",
  onOpenModal,
}: Props) {
  const pathname = usePathname();

  return (
    <div className="container--80 py--20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <Link href="/" title="Senura Perera">
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
                  className={`text-white text--15 font-medium tracking-widest uppercase transition-colors duration-300 ${
                    pathname === item.href
                      ? "opacity-100"
                      : "opacity-100 hover:text-strong-orange transition-all duration-300"
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
          {/* <div className="hidden lg:block">
            <SecondaryButton
              text="REQUEST A Meeting"
              href="/request"
              variant="default"
            />
          </div> */}

          {/* Hamburger — always visible */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleSideMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              aria-label="Toggle menu"
            >
              <img
                src="/images/hamburgerMenu.svg"
                alt="Menu"
                className="w-[31.5px] h-[25px] lg:w-[calc(35/1920*100vw)] lg:h-[calc(25/1920*100vw)]"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
