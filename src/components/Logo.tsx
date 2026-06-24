import React from "react";

export default function Logo() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="brand-logo-icon"
      aria-hidden="true"
    >
      <g>
        {/* Top-Right Quadrant */}
        <path d="M 50,31 V 18 L 61,8 L 71,18 A 16,16 0 0,0 82,29 L 92,39 L 82,50 H 69 A 24,24 0 0,0 50,31 Z" />
        {/* Bottom-Right Quadrant (Rotated 90 deg) */}
        <path d="M 50,31 V 18 L 61,8 L 71,18 A 16,16 0 0,0 82,29 L 92,39 L 82,50 H 69 A 24,24 0 0,0 50,31 Z" transform="rotate(90 50 50)" />
        {/* Bottom-Left Quadrant (Rotated 180 deg) */}
        <path d="M 50,31 V 18 L 61,8 L 71,18 A 16,16 0 0,0 82,29 L 92,39 L 82,50 H 69 A 24,24 0 0,0 50,31 Z" transform="rotate(180 50 50)" />
        {/* Top-Left Quadrant (Rotated 270 deg) */}
        <path d="M 50,31 V 18 L 61,8 L 71,18 A 16,16 0 0,0 82,29 L 92,39 L 82,50 H 69 A 24,24 0 0,0 50,31 Z" transform="rotate(270 50 50)" />
      </g>
    </svg>
  );
}
