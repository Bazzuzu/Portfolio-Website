import React, { useMemo } from "react";

interface CustomIconProps {
  src: string;
  size?: number;
  className?: string;
}

export default function CustomIcon({ src, size = 24, className = "" }: CustomIconProps) {
  const processedSvg = useMemo(() => {
    if (!src) return "";

    // 1. Remove hardcoded width and height attributes so they are controlled by the wrapper span
    let clean = src
      .replace(/<svg([^>]*)\bwidth="[^"]*"/g, '<svg$1')
      .replace(/<svg([^>]*)\bheight="[^"]*"/g, '<svg$1');

    // 2. Convert hardcoded hex colors or 'black' fills/strokes to 'currentColor' to allow CSS color inheritance
    clean = clean
      .replace(/fill="(?!none|currentColor)[^"]+"/g, 'fill="currentColor"')
      .replace(/stroke="(?!none|currentColor)[^"]+"/g, 'stroke="currentColor"');

    return clean;
  }, [src]);

  return (
    <span
      className={`custom-icon ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
      }}
      dangerouslySetInnerHTML={{ __html: processedSvg }}
    />
  );
}
