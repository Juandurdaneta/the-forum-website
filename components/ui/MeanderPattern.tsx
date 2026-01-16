"use client";

interface MeanderPatternProps {
  className?: string;
  strokeColor?: string;
  opacity?: number;
  id?: string;
}

/**
 * Classic Greek Key (Meander) Border Pattern
 * Traditional angular interlocking rectangular spiral design
 */
export function MeanderBorder({
  className = "",
  strokeColor = "#C47A2B",
  opacity = 0.4,
  id = "greekKeyBorder"
}: MeanderPatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 40"
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
          {/* Classic Greek Key meander - single tile */}
          <path
            d="M0 0 h40 v10 h-30 v10 h20 v-10 h-10 v-5 h15 v15 h-25 v-15 h5 v5 h-5 v10 h-10 v-20 z"
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
 * Greek Key Pattern - Stroke version
 * Clean line-based Greek key meander for borders
 */
export function GreekKeyBorder({
  className = "",
  strokeColor = "#C47A2B",
  opacity = 0.5,
  id = "greekKey"
}: MeanderPatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          {/* Greek Key tile - stroke based */}
          <path
            d="M0 4 H28 V20 H12 V12 H20 V4"
            stroke={strokeColor}
            strokeWidth="2.5"
            fill="none"
            opacity={opacity}
            strokeLinecap="square"
          />
          <path
            d="M32 28 H4 V12 H20 V20 H12 V28"
            stroke={strokeColor}
            strokeWidth="2.5"
            fill="none"
            opacity={opacity}
            strokeLinecap="square"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Simple Greek Key Border - Single line version
 * Minimalist meander pattern for subtle decoration
 */
export function SimpleGreekKey({
  className = "",
  strokeColor = "#C47A2B",
  opacity = 0.35,
  id = "simpleGreekKey"
}: MeanderPatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          {/* Simplified Greek key - single continuous line */}
          <path
            d="M0 2 H22 V14 H10 V8 H16 V2 M24 22 H2 V10 H14 V16 H8 V22"
            stroke={strokeColor}
            strokeWidth="2"
            fill="none"
            opacity={opacity}
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

// Re-export GreekKeyBorder as default pattern
export { GreekKeyBorder as MeanderPattern };
