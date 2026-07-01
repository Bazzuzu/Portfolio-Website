import React from "react";

export default function Logo() {
  return (
    <svg
      viewBox="0 0 37 32"
      className="brand-logo-icon"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="holo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#99bcff" />     {/* Desaturated Gemini Blue */}
          <stop offset="35%" stopColor="#bd9eff" />    {/* Desaturated Gemini Purple */}
          <stop offset="70%" stopColor="#ffa1bc" />    {/* Desaturated Gemini Pink */}
          <stop offset="100%" stopColor="#ffe1e5" />   {/* Desaturated Gemini Light Spark */}
        </linearGradient>
      </defs>
      {/* Base Path (Solid Color) */}
      <path
        d="M20.5596 0.120946L27.7499 0L31.2404 6.2793L29.1809 9.84149H33.2998L37 15.9998L33.2998 22.1582H29.1806L31.2404 25.7207L27.7499 32L20.5596 31.8791L18.4998 28.3169C18.4998 21.5146 24.0217 16.0002 30.8331 16.0002C24.0218 16.0001 18.5001 10.4858 18.4998 3.68375L20.5596 0.120946ZM3.70016 9.84149H7.81877L5.75962 6.2793L9.25008 0L16.4404 0.120946L18.4998 3.68375C18.4996 10.4859 12.9779 16.0002 6.16662 16.0002C12.9781 16.0002 18.4998 21.5145 18.4998 28.3169L16.4404 31.8791L9.25008 32L5.75962 25.7207L7.81908 22.1582H3.70016L0 15.9998L3.70016 9.84149Z"
        fill="currentColor"
        className="brand-logo-icon__base"
      />
      {/* Holographic Overlay Path (Animated) */}
      <path
        d="M20.5596 0.120946L27.7499 0L31.2404 6.2793L29.1809 9.84149H33.2998L37 15.9998L33.2998 22.1582H29.1806L31.2404 25.7207L27.7499 32L20.5596 31.8791L18.4998 28.3169C18.4998 21.5146 24.0217 16.0002 30.8331 16.0002C24.0218 16.0001 18.5001 10.4858 18.4998 3.68375L20.5596 0.120946ZM3.70016 9.84149H7.81877L5.75962 6.2793L9.25008 0L16.4404 0.120946L18.4998 3.68375C18.4996 10.4859 12.9779 16.0002 6.16662 16.0002C12.9781 16.0002 18.4998 21.5145 18.4998 28.3169L16.4404 31.8791L9.25008 32L5.75962 25.7207L7.81908 22.1582H3.70016L0 15.9998L3.70016 9.84149Z"
        fill="url(#holo-gradient)"
        className="brand-logo-icon__hologram"
      />
    </svg>
  );
}
