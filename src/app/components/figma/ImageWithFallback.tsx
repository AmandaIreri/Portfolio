import { useState, ImgHTMLAttributes } from "react";

const FALLBACK_DATA_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='none'%3E%3Crect width='200' height='200' fill='%23ECECEC'/%3E%3Cpath d='M60 130l25-30 20 22 25-35 30 43H60z' fill='%23BDBDBD'/%3E%3Ccircle cx='80' cy='75' r='12' fill='%23BDBDBD'/%3E%3C/svg%3E";

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
}

/**
 * Drop-in <img> replacement that swaps to a fallback graphic if the
 * primary source fails to load (e.g. a missing/renamed asset).
 */
export function ImageWithFallback({
  src,
  fallbackSrc = FALLBACK_DATA_URL,
  alt = "",
  onError,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  return (
    <img
      src={didError ? fallbackSrc : src}
      alt={alt}
      onError={(e) => {
        setDidError(true);
        onError?.(e);
      }}
      {...rest}
    />
  );
}
