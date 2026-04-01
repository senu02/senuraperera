export const getImageSrc = (src: string | undefined | null): string => {
  const baseUrl = process.env.NEXT_PUBLIC_ASSETS_URL || "";
  const fallbackImage = "/images/loaders/fallback.png";

  if (!src || src === "undefined" || src === "null") {
    return fallbackImage;
  }

  if (src.startsWith("http")) {
    return src;
  }

  if (src.startsWith("/images")) {
    return src;
  }

  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
  return `${baseUrl}/${cleanSrc}`;
};

export const getVideoUrl = (filename: string) => {
  return `${process.env.NEXT_PUBLIC_ASSETS_URL}/${filename}`;
};

export const scrollAdjust = (e: any) => {
  e.stopPropagation();
  const element = e.currentTarget;
  let ticking = false;

  element.addEventListener("scroll", function (this: HTMLElement) {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const { scrollTop, scrollHeight, clientHeight } = this;
        if (
          (e.deltaY < 0 && scrollTop === 0) ||
          (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight)
        ) {
          return;
        }
        e.preventDefault();
        ticking = false;
      });
      ticking = true;
    }
  });
};