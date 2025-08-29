// src/app/icons/elite-robotique.ts

export const eliteRobotiqueLogo = [
  `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <!-- Glow Effect -->
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>

      <!-- Gradient -->
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00d4ff"/>
        <stop offset="50%" stop-color="#ff6b9d"/>
        <stop offset="100%" stop-color="#744391"/>
      </linearGradient>
    </defs>

    <!-- Robot Image (centered) -->
    <g transform="matrix(1,0,0,1,2,12)">
      <image
        href="/assets/logo.jpg"
        x="0"
        y="0"
        width="40"
        height="40"
        preserveAspectRatio="xMidYMid slice"
      />
      <rect x="0" y="0" width="40" height="40" rx="8" fill="none" stroke="url(#grad)" stroke-width="1.5" opacity="0.9" />
    </g>

    <!-- Text: "ER" only (space is limited) -->
    <text
      x="46"
      y="32"
      font-family="Orbitron, sans-serif"
      font-size="10"
      font-weight="700"
      fill="url(#grad)"
      filter="url(#glow)"
      transform="rotate(-90, 46, 32)"
    >
      Elite Robotique
    </text>

    <!-- Power Indicator -->
    <circle cx="8" cy="18" r="1.5" fill="#00ff88">
      <animate attributeName="r" values="1.5;2.5;1.5" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
  </svg>
  `
];

// Narrow version (sidebar collapsed)
export const eliteRobotiqueSignet = [
  `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <defs>
      <linearGradient id="miniGrad">
        <stop offset="0%" stop-color="#00d4ff"/>
        <stop offset="100%" stop-color="#ff6b9d"/>
      </linearGradient>
    </defs>

    <!-- Centered Robot Logo -->
    <g transform="translate(12,12)">
      <image
        href="/assets/logo.jpg"
        x="0"
        y="0"
        width="40"
        height="40"
        preserveAspectRatio="xMidYMid slice"
      />
      <rect x="0" y="0" width="40" height="40" rx="10" fill="none" stroke="url(#miniGrad)" stroke-width="2" opacity="0.9" />
      
      <!-- Energy pulse -->
      <circle cx="20" cy="20" r="14" fill="none" stroke="url(#miniGrad)" stroke-width="1" stroke-dasharray="4,8" opacity="0.4">
        <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
  `
];