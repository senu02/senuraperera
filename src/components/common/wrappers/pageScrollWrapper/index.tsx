"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface props {
  children: any;
}

export default function PageScrollWrapper({ children }: props) {
  const pathname = usePathname();

  useEffect(() => {
    let locomotiveScroll: any;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 0);
    })();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [pathname]);

  return children;
}
