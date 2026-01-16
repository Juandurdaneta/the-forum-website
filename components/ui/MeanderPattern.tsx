"use client";

interface MeanderPatternProps {
  className?: string;
  strokeColor?: string;
  opacity?: number;
  id?: string;
}

/**
 * Classic Greek Key (Meander) Border Pattern
 * Uses the greek-meander-border.svg - cropped version of ancient-greek-meander-1.svg
 */
export function GreekKeyBorder({
  className = "",
  strokeColor = "#C47A2B",
  opacity = 0.6,
  id = "greekKey"
}: MeanderPatternProps) {
  return (
    <div
      className={`${className} relative overflow-hidden`}
      style={{ opacity }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/patterns/greek-meander-border.svg')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "left center",
          // Auto width based on height, show full pattern
          backgroundSize: "auto 100%",
          // Apply color using CSS filter to convert black to terracotta
          filter: "invert(45%) sepia(60%) saturate(500%) hue-rotate(350deg) brightness(90%)"
        }}
      />
    </div>
  );
}

/**
 * Greek Meander Border - Simpler version
 * Clean filled Greek key meander for borders
 */
export function MeanderBorder({
  className = "",
  strokeColor = "#C47A2B",
  opacity = 0.5,
  id = "meanderBorder"
}: MeanderPatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 32"
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
          {/* Classic Greek key using path - creates interlocking L shapes */}
          <path
            d="M0 0 h32 v4 h-28 v8 h8 v-4 h-4 v-4 h20 v16 h-16 v-8 h-8 v4 h4 v4 h-12 v8 h32 v4 h-32 v-4 h28 v-8 h-8 v4 h4 v4 h-20 v-16 h16 v8 h8 v-4 h-4 v-4 h12 v-8 z"
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
 * Simple Greek Key Border - Stroke version
 * Line-based meander pattern
 */
export function SimpleGreekKey({
  className = "",
  strokeColor = "#C47A2B",
  opacity = 0.4,
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
          {/* Greek key using stroke */}
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
