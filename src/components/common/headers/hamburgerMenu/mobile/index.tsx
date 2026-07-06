"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "@/components/common/safeImage";

type NavItem = { label: string; href: string };

type NavGroup = {
  label: string;
  href?: string;
  items?: NavItem[];
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  logoSrc?: string;
};

const navGroups: NavGroup[] = [
  {
    label: "Digital",
    items: [
      { label: "Search Engine Optimization (SEO)", href: "/digital/seo" },
      { label: "Local Search Optimization", href: "/digital/local-seo" },
      { label: "Pay Per Click (PPC) Marketing", href: "/digital/ppc" },
      { label: "Metasearch Marketing", href: "/digital/metasearch" },
      { label: "Yandex Advertising", href: "/digital/yandex" },
      { label: "Social Media Management", href: "/digital/smm" },
      { label: "Social Media Advertising", href: "/digital/social-ads" },
      { label: "Content Development", href: "/digital/content" },
      { label: "Blog Content Management", href: "/digital/blog" },
      { label: "Web Analytics", href: "/digital/analytics" },
      { label: "Digital Marketing Consultancy", href: "/digital/consultancy" },
    ],
  },
  {
    label: "Web",
    items: [
      { label: "App Development", href: "/web/app" },
      { label: "Hotel Factsheet Development", href: "/web/factsheet" },
      { label: "Web Hosting", href: "/web/hosting" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "BookingEye", href: "/products/bookingeye" },
      { label: "PaymentsEye", href: "/products/paymentseye" },
      { label: "RestaurantsEye", href: "/products/restaurantseye" },
      { label: "GiftsEye", href: "/products/giftseye" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "Our Story", href: "/about-us" },
      { label: "Executive Team", href: "/about-us/executive-team" },
      { label: "Our Portfolio", href: "/about-us/portfolio" },
      { label: "Partnerships & Certifications", href: "/about-us/memberships" },
      { label: "EME Academy", href: "/academy" },
      { label: "Webinars", href: "/webinars" },
      { label: "Awards & Accolades", href: "/about-us/awards" },
      { label: "News & Events", href: "/news" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
];

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="21"
    viewBox="0 0 11 21"
    fill="none"
  >
    <path
      d="M7.07865 21V11.4216H10.2924L10.7746 7.68764H7.07865V5.30404C7.07865 4.22331 7.37753 3.4868 8.92905 3.4868L10.9047 3.48599V0.146191C10.563 0.101793 9.39023 0 8.02524 0C5.17491 0 3.22352 1.73981 3.22352 4.93423V7.68764H0V11.4216H3.22352V21H7.07865Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <g clipPath="url(#clip_insta_m)">
      <path
        d="M19.9805 6.17406C19.9336 5.05825 19.7618 4.29114 19.5156 3.62643C19.2616 2.92085 18.8709 2.28915 18.359 1.76402C17.8589 1.23071 17.2533 0.816306 16.5891 0.553819C15.9524 0.295338 15.2257 0.114898 14.163 0.0657019C13.0924 0.0123391 12.7525 0 10.0371 0C7.32174 0 6.98186 0.0123391 5.91521 0.0615355C4.85253 0.110732 4.12195 0.291332 3.48905 0.549653C2.81692 0.816306 2.2153 1.22654 1.71517 1.76402C1.20726 2.28915 0.812743 2.92502 0.562603 3.62242C0.316431 4.29114 0.144583 5.05408 0.0977295 6.16989C0.0469078 7.29403 0.0351562 7.65091 0.0351562 10.5021C0.0351562 13.3532 0.0469078 13.7101 0.0937615 14.83C0.140615 15.9459 0.312615 16.713 0.558788 17.3777C0.812743 18.0833 1.20726 18.715 1.71517 19.2401C2.2153 19.7734 2.82089 20.1878 3.48508 20.4503C4.12195 20.7088 4.84857 20.8892 5.9114 20.9384C6.97789 20.9878 7.31792 20.9999 10.0333 20.9999C12.7487 20.9999 13.0885 20.9878 14.1552 20.9384C15.2179 20.8892 15.989 20.7088 16.5814 20.4503C17.9255 19.9046 18.9881 18.7888 19.5078 17.3777C19.7538 16.709 19.9258 15.9459 19.9727 14.83C20.0195 13.7101 20.0313 13.3532 20.0313 10.5021C20.0313 7.65091 20.0273 7.29403 19.9805 6.17406ZM18.1794 14.748C18.1364 15.7736 17.9723 16.3274 17.8356 16.6966C17.4995 17.6115 16.808 18.3376 15.9367 18.6904C15.5851 18.834 15.0538 19.0063 14.0809 19.0513C13.026 19.1007 12.7096 19.1128 10.0411 19.1128C7.37256 19.1128 7.05221 19.1007 6.00113 19.0513C5.02438 19.0063 4.49693 18.834 4.1453 18.6904C3.71172 18.5222 3.31705 18.2555 2.9967 17.9068C2.66461 17.5663 2.41065 17.1561 2.2504 16.7008C2.11366 16.3316 1.94959 15.7736 1.90671 14.7522C1.8597 13.6445 1.8481 13.3122 1.8481 10.5102C1.8481 7.70828 1.8597 7.37191 1.90671 6.26844C1.94959 5.24285 2.11366 4.68903 2.2504 4.31982C2.41065 3.86439 2.66461 3.45015 3.00067 3.11363C3.32483 2.76493 3.71553 2.49828 4.14927 2.33017C4.5009 2.18659 5.03232 2.01432 6.0051 1.96913C7.06 1.91994 7.37653 1.9076 10.0449 1.9076C12.7174 1.9076 13.0338 1.91994 14.0848 1.96913C15.0616 2.01432 15.589 2.18659 15.9407 2.33017C16.3743 2.49828 16.7689 2.76493 17.0893 3.11363C17.4214 3.45416 17.6753 3.86439 17.8356 4.31982C17.9723 4.68903 18.1364 5.24686 18.1794 6.26844C18.2263 7.37608 18.238 7.70828 18.238 10.5102C18.238 13.3122 18.2263 13.6404 18.1794 14.748Z"
        fill="currentColor"
      />
      <path
        d="M10.0371 5.10742C7.20074 5.10742 4.89941 7.52365 4.89941 10.502C4.89941 13.4804 7.20074 15.8966 10.0371 15.8966C12.8737 15.8966 15.1749 13.4804 15.1749 10.502C15.1749 7.52365 12.8737 5.10742 10.0371 5.10742ZM10.0371 14.0014C8.19702 14.0014 6.70442 12.4343 6.70442 10.502C6.70442 8.56975 8.19702 7.00268 10.0371 7.00268C11.8774 7.00268 13.3698 8.56975 13.3698 10.502C13.3698 12.4343 11.8774 14.0014 10.0371 14.0014Z"
        fill="currentColor"
      />
      <path
        d="M16.5777 4.89416C16.5777 5.58964 16.0406 6.15355 15.3781 6.15355C14.7158 6.15355 14.1787 5.58964 14.1787 4.89416C14.1787 4.19852 14.7158 3.63477 15.3781 3.63477C16.0406 3.63477 16.5777 4.19852 16.5777 4.89416Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip_insta_m">
        <rect width="20" height="21" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
  >
    <path
      d="M10.9992 16C10.9974 16 10.9953 16 10.9933 16C10.3295 15.9954 4.4609 15.9416 2.79821 15.489C1.63621 15.1746 0.718929 14.2525 0.405727 13.0829C-0.0293313 11.4391 -0.00163662 8.27433 0.00138462 8.02162C-0.00146877 7.7701 -0.0294992 4.57915 0.404384 2.92185C0.404888 2.92033 0.405224 2.91864 0.405727 2.91712C0.715404 1.76085 1.65333 0.810152 2.79536 0.494943C2.79821 0.494098 2.80123 0.493423 2.80409 0.492578C4.44798 0.0577715 10.3282 0.00456092 10.9933 0H11.0052C11.6708 0.00456092 17.555 0.0584472 19.2024 0.511666C20.3614 0.825186 21.278 1.74615 21.592 2.91425C22.0433 4.57273 22.0016 7.7706 21.997 8.04054C22.0002 8.30643 22.0266 11.4428 21.594 13.0949C21.5937 13.0966 21.5932 13.0981 21.5928 13.0996C21.2795 14.2692 20.3624 15.1914 19.199 15.5061C19.1975 15.5066 19.1958 15.5069 19.1943 15.5074C17.5506 15.9421 11.6703 15.9953 11.0052 16C11.0032 16 11.0012 16 10.9992 16ZM2.06573 3.36544C1.68371 4.82831 1.7198 7.97855 1.72013 8.0103V8.03311C1.70872 8.90678 1.74884 11.4369 2.0659 12.6352C2.21965 13.2091 2.67199 13.6636 3.24569 13.8189C4.47248 14.1528 9.25225 14.2579 10.9992 14.2702C12.7507 14.2579 17.5375 14.1557 18.7552 13.8351C19.3271 13.6793 19.7779 13.2263 19.9327 12.6518C20.2501 11.4359 20.2899 8.91809 20.2783 8.05C20.2783 8.04088 20.2783 8.03176 20.2784 8.02264C20.2942 7.1385 20.2632 4.57881 19.9342 3.37085C19.9338 3.36967 19.9335 3.36848 19.9333 3.3673C19.7789 2.79094 19.3264 2.33637 18.7527 2.18113C17.5378 1.84683 12.7503 1.7421 10.9992 1.72977C9.2489 1.7421 4.46678 1.84413 3.24536 2.1644C2.68257 2.3215 2.21998 2.79229 2.06573 3.36544ZM8.80863 11.5026V4.49722L14.8243 8L8.80863 11.5026Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
  >
    <g clipPath="url(#clip_li_m)">
      <path
        d="M19.9951 19L20.0001 18.9992V12.031C20.0001 8.62205 19.2276 5.99609 15.0326 5.99609C13.0159 5.99609 11.6626 7.04743 11.1101 8.04414H11.0517V6.31434H7.07422V18.9992H11.2159V12.7181C11.2159 11.0643 11.5459 9.46518 13.7017 9.46518C15.8259 9.46518 15.8576 11.3525 15.8576 12.8242V19H19.9951Z"
        fill="currentColor"
      />
      <path
        d="M0.330078 6.31543H4.47675V19.0003H0.330078V6.31543Z"
        fill="currentColor"
      />
      <path
        d="M2.40167 0C1.07583 0 0 1.02204 0 2.28158C0 3.54113 1.07583 4.58454 2.40167 4.58454C3.7275 4.58454 4.80333 3.54113 4.80333 2.28158C4.8025 1.02204 3.72667 0 2.40167 0Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip_li_m">
        <rect width="20" height="19" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <g clipPath="url(#clip_tw_m)">
      <path
        d="M8.30314 5.92804L13.4029 0H12.1944L7.7663 5.14724L4.22958 0H0.150391L5.4986 7.78354L0.150391 14H1.35894L6.03514 8.56434L9.77017 14H13.8494L8.30284 5.92804H8.30314ZM6.64787 7.85211L6.10598 7.07705L1.79439 0.909771H3.65065L7.13015 5.88696L7.67204 6.66202L12.195 13.1316H10.3387L6.64787 7.85241V7.85211Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip_tw_m">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
  >
    <g clipPath="url(#clip_wa_m)">
      <path
        d="M15.3187 12.5189L15.3109 12.5845C13.3867 11.6255 13.1855 11.4978 12.937 11.8705C12.7646 12.1286 12.2624 12.714 12.111 12.8873C11.9579 13.0579 11.8056 13.071 11.5457 12.9529C11.2832 12.8216 10.4406 12.546 9.44312 11.6535C8.66612 10.9579 8.14462 10.1048 7.99062 9.84227C7.73425 9.39952 8.27062 9.33652 8.75887 8.41252C8.84637 8.22877 8.80175 8.0844 8.737 7.95402C8.67137 7.82277 8.149 6.53652 7.93025 6.02377C7.72025 5.51277 7.50412 5.57752 7.34225 5.57752C6.83825 5.53377 6.46987 5.54077 6.14525 5.87852C4.733 7.43077 5.08912 9.03202 6.2975 10.7348C8.67225 13.8428 9.9375 14.415 12.251 15.2095C12.8757 15.4081 13.4454 15.3801 13.896 15.3154C14.3982 15.2358 15.4421 14.6845 15.66 14.0676C15.8831 13.4508 15.8831 12.9389 15.8175 12.8208C15.7527 12.7026 15.5812 12.637 15.3187 12.5189Z"
        fill="currentColor"
      />
      <path
        d="M17.955 3.01728C11.2271 -3.4866 0.09275 1.23053 0.088375 10.4058C0.088375 12.2398 0.56875 14.0283 1.484 15.6077L0 20.9994L5.54313 19.5539C12.46 23.2902 20.9965 18.3289 21 10.411C21 7.63203 19.915 5.01665 17.9419 3.0514L17.955 3.01728ZM19.2518 10.3822C19.2465 17.061 11.9149 21.2322 6.11625 17.8232L5.80125 17.6359L2.52 18.489L3.39937 15.2997L3.19025 14.9715C-0.41825 9.22715 3.7275 1.71965 10.563 1.71965C12.8853 1.71965 15.0649 2.62528 16.7064 4.2659C18.347 5.89253 19.2518 8.07215 19.2518 10.3822Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip_wa_m">
        <rect width="21" height="21" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CircleWrapper = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="relative flex items-center justify-center w-[42px] h-[42px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 55"
      fill="none"
      className="absolute inset-0 w-full h-full"
    >
      <circle opacity="0.3" cx="27.5" cy="27.5" r="27" stroke="#0c0d12" />
    </svg>
    <span className="relative z-10 flex items-center justify-center text-deep-blue">
      {children}
    </span>
  </motion.a>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.25 }}
    className="flex-shrink-0"
  >
    <polyline points="6 9 12 15 18 9" />
  </motion.svg>
);

function AccordionItem({
  group,
  onClose,
  isOpen,
  onToggle,
}: {
  group: NavGroup;
  onClose: () => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  if (!group.items) {
    return (
      <div>
        <Link
          href={group.href!}
          onClick={onClose}
          className="flex items-center py--10 text--20 font-medium text-gray-800 hover:text-blue-green transition-colors duration-200"
        >
          {group.label}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py--10 text--50 font-medium text-gray-800 cursor-pointer hover:text-blue-green transition-colors duration-200"
      >
        <span>{group.label}</span>
        <ChevronIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={group.label}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col text-left space-y-3 pb--20">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text--18 text-dark-gray transition-colors duration-200 leading-snug pl--40"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HamburgerMenuMobile({
  isOpen,
  onClose,
  logoSrc = "/images/senuralogo.jpg",
}: Props) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    if (!isOpen) {
      setOpenMenu(null);
    }
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col min-h-full">
              <div className="flex items-center justify-between pb--40 bg-black px--30 py--20">
                <Link href="/" onClick={onClose}>
                  <SafeImage
                    src={logoSrc}
                    alt="eMarketingEye"
                    width={157}
                    height={44}
                    loading="eager"
                    className="w-[100px] h-[40px] lg:w-[calc(112/1920*100vw)] lg:h-[calc(51/1920*100vw)]"
                  />
                </Link>

                <button
                  onClick={onClose}
                  className="cursor-pointer text-white hover:text-strong-orange transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col text-center flex-1 px--40 py--20">
                {navGroups.map((group) => (
                  <AccordionItem
                    key={group.label}
                    group={group}
                    onClose={onClose}
                    isOpen={openMenu === group.label}
                    onToggle={() => handleToggle(group.label)}
                  />
                ))}
              </nav>

              <div className="flex items-center justify-center space--15 py--40">
                <CircleWrapper href="https://facebook.com">
                  <FacebookIcon />
                </CircleWrapper>
                <CircleWrapper href="https://instagram.com">
                  <InstagramIcon />
                </CircleWrapper>
                <CircleWrapper href="https://youtube.com">
                  <YoutubeIcon />
                </CircleWrapper>
                <CircleWrapper href="https://linkedin.com">
                  <LinkedinIcon />
                </CircleWrapper>
                <CircleWrapper href="https://x.com">
                  <TwitterIcon />
                </CircleWrapper>
                <CircleWrapper href="https://whatsapp.com">
                  <WhatsappIcon />
                </CircleWrapper>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
