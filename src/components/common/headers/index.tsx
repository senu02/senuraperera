"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import TopHeader from "./topHeader";
import FixedHeader from "./fixedHeader";
import HamburgerMenu from "./hamburgerMenu";
import HamburgerMenuMobile from "./hamburgerMenu/mobile";

type NavigationItem = {
  label: string;
  href: string;
  submenu?: NavigationItem[];
};

type Props = {
  navigationData?: NavigationItem[];
  logoSrc?: string;
  onOpenModal?: () => void;
};

export default function HeaderClient({
  navigationData,
  logoSrc,
  onOpenModal,
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isRoot = pathname === "/";

  // Debounced scroll + MutationObserver
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const checkHeaderState = () => {
      const isScrolled = window.scrollY > 100;
      const hasFixedHeaderClass =
        document.body.classList.contains("force-fixed-header");
      const shouldShowFixed = isScrolled || hasFixedHeaderClass;
      if (shouldShowFixed !== scrolled) {
        setScrolled(shouldShowFixed);
      }
    };

    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(checkHeaderState, 10);
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          checkHeaderState();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    checkHeaderState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearTimeout(scrollTimer);
    };
  }, [scrolled]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Header bar ── */}
      {!isRoot ? (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black">
          <FixedHeader
            toggleSideMenu={toggleMenu}
            navigation={navigationData}
            logoSrc={logoSrc}
            onOpenModal={onOpenModal}
          />
        </header>
      ) : (
        <>
          <AnimatePresence>
            {!scrolled && (
              <motion.header
                className="absolute top-0 left-0 right-0 w-full z-50"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TopHeader
                  toggleSideMenu={toggleMenu}
                  navigation={navigationData}
                  logoSrc={logoSrc}
                />
              </motion.header>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {scrolled && (
              <motion.header
                className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <FixedHeader
                  toggleSideMenu={toggleMenu}
                  navigation={navigationData}
                  logoSrc={logoSrc}
                  onOpenModal={onOpenModal}
                />
              </motion.header>
            )}
          </AnimatePresence>
        </>
      )}

      {/* ── Hamburger menus — always rendered on ALL pages ── */}
      {/* <div className="hidden lg:block">
        <HamburgerMenu
          isOpen={menuOpen}
          onClose={closeMenu}
          logoSrc={logoSrc}
        />
      </div> */}

      <div className="lg:hidden">
        <HamburgerMenuMobile
          isOpen={menuOpen}
          onClose={closeMenu}
          logoSrc={logoSrc}
        />
      </div>
    </>
  );
}
