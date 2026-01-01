interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      
      {/* Inner circle */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      
      {/* Shatkon (Six-pointed star / Hexagram) - Two overlapping triangles */}
      {/* Upward-pointing triangle (Shiva - masculine energy) */}
      <polygon
        points="50,15 80,65 20,65"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Downward-pointing triangle (Shakti - feminine energy) */}
      <polygon
        points="50,85 20,35 80,35"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Central hexagon formed by intersection - subtle fill */}
      <polygon
        points="50,35 65,50 50,65 35,50"
        fill="currentColor"
        opacity="0.15"
      />
      
      {/* Center bindu (dot) - represents unity and cosmic consciousness */}
      <circle
        cx="50"
        cy="50"
        r="4"
        fill="currentColor"
      />
      
      {/* Small decorative dots at the six points */}
      <circle cx="50" cy="15" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="50" cy="85" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="35" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="80" cy="35" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="65" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="80" cy="65" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

