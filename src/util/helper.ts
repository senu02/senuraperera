export const getImageSrc = (src: string | undefined | null): string => {
  const baseUrl = process.env.NEXT_PUBLIC_ASSETS_URL || "";
  const fallbackImage = "/images/loaders/fallback.avif";

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

export const getAssetUrl = (
  filename: string | undefined | null,
): string | null => {
  if (!filename) return null;
  const baseUrl = process.env.NEXT_PUBLIC_ASSETS_URL || "";
  return `${baseUrl}/${filename}`;
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

export type ButtonHrefInput = {
  isExternal?: boolean;
  URL?: string | null;
  slug?: {
    slug?: string;
    parent_page?: {
      slug?: string;
    } | null;
  } | null;
};

export function resolveButtonHref(btn: ButtonHrefInput): string {
  if (btn.isExternal) return btn.URL ?? "#";

  const childSlug = btn.slug?.slug;
  const parentSlug = btn.slug?.parent_page?.slug;

  if (childSlug && parentSlug) {
    return `/${parentSlug}/${childSlug}`;
  }

  if (childSlug) {
    return `/${childSlug}`;
  }

  return "#";
}


export const getYoutubeEmbedUrl = (url: string) => {
  try {
    if (url.includes("youtube.com/watch")) {
      const parsed = new URL(url);
      const videoId = parsed.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    return url;
  } catch {
    return url;
  }
};