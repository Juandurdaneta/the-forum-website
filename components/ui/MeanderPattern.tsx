"use client";

interface MeanderPatternProps {
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  opacity?: number;
  id?: string;
}

/**
 * Art Deco Meander Border Pattern - matches the branding kit
 * A flowing, curved interlocking loop pattern with concentric U-shapes
 */
export function MeanderBorder({
  className = "",
  strokeColor = "#C47A2B",
  opacity = 0.35,
  id = "meanderBorder"
}: MeanderPatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {/* Outermost U-shape */}
          <path
            d="M0 0 L0 28 Q0 38 10 38 L30 38 Q40 38 40 28 L40 0"
            stroke={strokeColor}
            strokeWidth="1"
            fill="none"
            opacity={opacity}
          />
          {/* Second U-shape */}
          <path
            d="M5 0 L5 25 Q5 33 12 33 L28 33 Q35 33 35 25 L35 0"
            stroke={strokeColor}
            strokeWidth="1"
            fill="none"
            opacity={opacity}
          />
          {/* Third U-shape */}
          <path
            d="M10 0 L10 22 Q10 28 15 28 L25 28 Q30 28 30 22 L30 0"
            stroke={strokeColor}
            strokeWidth="1"
            fill="none"
            opacity={opacity}
          />
          {/* Innermost U-shape */}
          <path
            d="M15 0 L15 18 Q15 23 20 23 Q25 23 25 18 L25 0"
            stroke={strokeColor}
            strokeWidth="1"
            fill="none"
            opacity={opacity}
          />
          {/* Bottom connecting dot */}
          <circle
            cx="20"
            cy="39"
            r="1.5"
            fill={strokeColor}
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Full Meander Pattern for larger areas
 * Multiple rows of the interlocking loop pattern
 */
export function MeanderPattern({
  className = "",
  strokeColor = "#FAF5EE",
  fillColor = "transparent",
  opacity = 0.3,
  id = "meanderPattern"
}: MeanderPatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          {/* Outermost U-shape */}
          <path
            d="M0 0 L0 35 Q0 48 15 48 L35 48 Q50 48 50 35 L50 0"
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="none"
            opacity={opacity}
          />
          {/* Second U-shape */}
          <path
            d="M7 0 L7 30 Q7 40 18 40 L32 40 Q43 40 43 30 L43 0"
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="none"
            opacity={opacity}
          />
          {/* Third U-shape */}
          <path
            d="M14 0 L14 25 Q14 32 22 32 L28 32 Q36 32 36 25 L36 0"
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="none"
            opacity={opacity}
          />
          {/* Innermost U-shape */}
          <path
            d="M21 0 L21 18 Q21 24 25 24 Q29 24 29 18 L29 0"
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="none"
            opacity={opacity}
          />
          {/* Bottom connecting dot */}
          <circle
            cx="25"
            cy="49"
            r="2"
            fill={strokeColor}
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={fillColor} />
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
