"use client";
import { getImageSrc } from "@/util/helper";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends Omit<ImageProps, "src"> {
  src: string | undefined | null;
  fallback?: string;
}

export default function SafeImage({
  src,
  fallback = "/images/senuralogo.jpg",
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(getImageSrc(src));
  return <Image {...props} src={imgSrc} onError={() => setImgSrc(fallback)} />;
}
