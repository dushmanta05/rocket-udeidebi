interface LaunchPadArtProps {
  className?: string
}

export function LaunchPadArt({ className = '' }: LaunchPadArtProps) {
  return (
    <svg
      viewBox="0 0 380 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`launch-pad-svg ${className}`}
      preserveAspectRatio="xMidYBottom"
    >
      <defs>
        <pattern id="hazard-pattern-lg" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="12" height="24" fill="#ffd27a" />
          <rect x="12" width="12" height="24" fill="#202544" />
        </pattern>

        <radialGradient id="beacon-glow-lg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#ff4d6d" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="spotlight-beam-lg" x1="0%" y1="0%" x2="35%" y2="100%">
          <stop offset="0%" stopColor="#ffd27a" stopOpacity="0.32" />
          <stop offset="65%" stopColor="#ffd27a" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#ffd27a" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="light-glow-cyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8ec5ff" stopOpacity="1" />
          <stop offset="40%" stopColor="#8ec5ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8ec5ff" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="light-glow-gold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd27a" stopOpacity="1" />
          <stop offset="40%" stopColor="#ffd27a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffd27a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <polygon points="276,140 28,296 230,296 276,160" fill="url(#spotlight-beam-lg)" pointerEvents="none" />

      <g className="pad-pillars">
        <rect x="36" y="320" width="22" height="20" rx="3" fill="#1b203d" />
        <rect x="38" y="320" width="3" height="20" fill="#323c68" />
        <rect x="105" y="320" width="22" height="20" rx="3" fill="#1b203d" />
        <rect x="107" y="320" width="3" height="20" fill="#323c68" />
        <rect x="175" y="320" width="22" height="20" rx="3" fill="#1b203d" />
        <rect x="177" y="320" width="3" height="20" fill="#323c68" />
        <rect x="245" y="320" width="22" height="20" rx="3" fill="#1b203d" />
        <rect x="247" y="320" width="3" height="20" fill="#323c68" />
        <rect x="315" y="320" width="22" height="20" rx="3" fill="#1b203d" />
        <rect x="317" y="320" width="3" height="20" fill="#323c68" />
      </g>

      <g className="pad-railing">
        <line x1="24" y1="252" x2="278" y2="252" stroke="#58669e" strokeWidth="3.5" />
        <line x1="24" y1="272" x2="278" y2="272" stroke="#445080" strokeWidth="2.5" />
        <line x1="26" y1="252" x2="26" y2="296" stroke="#58669e" strokeWidth="3.5" />
        <line x1="75" y1="252" x2="75" y2="296" stroke="#445080" strokeWidth="3" />
        <line x1="125" y1="252" x2="125" y2="296" stroke="#445080" strokeWidth="3" />
        <line x1="175" y1="252" x2="175" y2="296" stroke="#445080" strokeWidth="3" />
        <line x1="225" y1="252" x2="225" y2="296" stroke="#445080" strokeWidth="3" />
        <line x1="275" y1="252" x2="275" y2="296" stroke="#58669e" strokeWidth="3.5" />
      </g>

      <g className="pad-base-deck">
        <rect x="12" y="320" width="356" height="8" rx="2" fill="#202646" />
        <rect x="12" y="296" width="356" height="14" rx="4" fill="#363f6e" />
        <rect x="10" y="294" width="360" height="4" rx="2" fill="#7282c0" />
        <rect x="14" y="308" width="352" height="12" rx="2" fill="url(#hazard-pattern-lg)" />
        <rect x="14" y="307" width="352" height="1.5" fill="#ffd27a" opacity="0.6" />
      </g>

      <g className="pad-deck-lights">
        <circle cx="42" cy="303" r="8" fill="url(#light-glow-gold)" />
        <circle cx="42" cy="303" r="3.5" fill="#ffd27a" />
        <circle cx="95" cy="303" r="8" fill="url(#light-glow-cyan)" />
        <circle cx="95" cy="303" r="3.5" fill="#8ec5ff" />
        <circle cx="150" cy="303" r="8" fill="url(#light-glow-gold)" />
        <circle cx="150" cy="303" r="3.5" fill="#ffd27a" />
        <circle cx="205" cy="303" r="8" fill="url(#light-glow-cyan)" />
        <circle cx="205" cy="303" r="3.5" fill="#8ec5ff" />
        <circle cx="260" cy="303" r="8" fill="url(#light-glow-gold)" />
        <circle cx="260" cy="303" r="3.5" fill="#ffd27a" />
        <circle cx="315" cy="303" r="8" fill="url(#light-glow-cyan)" />
        <circle cx="315" cy="303" r="3.5" fill="#8ec5ff" />
      </g>

      <g className="pad-gantry-tower">
        <rect x="278" y="68" width="70" height="228" rx="4" fill="#252d4e" />
        <line x1="280" y1="68" x2="280" y2="296" stroke="#5d6da8" strokeWidth="4.5" />
        <line x1="346" y1="68" x2="346" y2="296" stroke="#5d6da8" strokeWidth="4.5" />
        <line x1="313" y1="68" x2="313" y2="296" stroke="#3d4774" strokeWidth="2.5" strokeDasharray="6 6" />

        <line x1="280" y1="125" x2="346" y2="125" stroke="#485586" strokeWidth="3" />
        <line x1="280" y1="182" x2="346" y2="182" stroke="#485586" strokeWidth="3" />
        <line x1="280" y1="239" x2="346" y2="239" stroke="#485586" strokeWidth="3" />

        <line x1="280" y1="68" x2="346" y2="125" stroke="#485586" strokeWidth="2.5" />
        <line x1="346" y1="68" x2="280" y2="125" stroke="#485586" strokeWidth="2.5" />
        <line x1="280" y1="125" x2="346" y2="182" stroke="#485586" strokeWidth="2.5" />
        <line x1="346" y1="125" x2="280" y2="182" stroke="#485586" strokeWidth="2.5" />
        <line x1="280" y1="182" x2="346" y2="239" stroke="#485586" strokeWidth="2.5" />
        <line x1="346" y1="182" x2="280" y2="239" stroke="#485586" strokeWidth="2.5" />
        <line x1="280" y1="239" x2="346" y2="296" stroke="#485586" strokeWidth="2.5" />
        <line x1="346" y1="239" x2="280" y2="296" stroke="#485586" strokeWidth="2.5" />

        <rect x="210" y="138" width="70" height="12" rx="3" fill="#363f6e" />
        <line x1="210" y1="144" x2="280" y2="144" stroke="#7282c0" strokeWidth="2" />
        <circle cx="214" cy="144" r="3" fill="#ffd27a" />
        <circle cx="240" cy="144" r="2" fill="#8ec5ff" />

        <rect x="270" y="60" width="86" height="9" rx="3" fill="#4d5a8e" />
        <line x1="313" y1="60" x2="313" y2="34" stroke="#7282c0" strokeWidth="3" />
        <circle cx="313" cy="30" r="18" fill="url(#beacon-glow-lg)" />
        <circle cx="313" cy="30" r="6" fill="#ff4d6d" className="beacon-lamp" />

        <circle cx="276" cy="140" r="6" fill="#ffd27a" />
        <circle cx="276" cy="140" r="3" fill="#ffffff" />
      </g>

      <g className="pad-bunting">
        <path d="M 28,253 Q 155,275 278,148" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2" fill="none" />
        <polygon points="52,257 74,260 63,282" fill="#ff8fb1" />
        <polygon points="86,262 108,264 97,286" fill="#ffd27a" />
        <polygon points="120,265 142,266 131,288" fill="#8ec5ff" />
        <polygon points="154,264 176,262 165,284" fill="#b9a6ff" />
        <polygon points="188,256 210,250 201,274" fill="#7ee2a8" />
        <polygon points="220,240 240,230 234,256" fill="#ff9f5a" />
        <polygon points="250,212 268,198 264,226" fill="#ffd27a" />
      </g>

      <g className="pad-balloons">
        <path d="M 300,120 C 285,105 255,90 246,74" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" fill="none" />
        <path d="M 300,120 C 295,95 285,75 278,56" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" fill="none" />
        <path d="M 300,120 C 304,85 308,55 312,38" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" fill="none" />
        <path d="M 300,120 C 315,95 328,72 336,54" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" fill="none" />
        <path d="M 300,120 C 325,108 348,92 356,76" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" fill="none" />

        <g className="balloon-bunch">
          <g transform="translate(244, 70) rotate(-12)">
            <ellipse cx="0" cy="0" rx="26" ry="32" fill="#b9a6ff" />
            <polygon points="-4,32 4,32 0,38" fill="#9983ea" />
            <ellipse cx="-8" cy="-10" rx="6" ry="12" fill="#ffffff" opacity="0.45" />
          </g>

          <g transform="translate(278, 50) rotate(-5)">
            <ellipse cx="0" cy="0" rx="28" ry="34" fill="#ffd27a" />
            <polygon points="-4,34 4,34 0,40" fill="#dfad44" />
            <ellipse cx="-8" cy="-11" rx="7" ry="13" fill="#ffffff" opacity="0.5" />
          </g>

          <g transform="translate(356, 70) rotate(12)">
            <ellipse cx="0" cy="0" rx="24" ry="30" fill="#7ee2a8" />
            <polygon points="-4,30 4,30 0,36" fill="#5ab484" />
            <ellipse cx="-7" cy="-9" rx="5.5" ry="11" fill="#ffffff" opacity="0.45" />
          </g>

          <g transform="translate(312, 34) rotate(-1)">
            <ellipse cx="0" cy="0" rx="30" ry="36" fill="#8ec5ff" />
            <polygon points="-4,36 4,36 0,42" fill="#68a5e8" />
            <ellipse cx="-9" cy="-12" rx="7.5" ry="14" fill="#ffffff" opacity="0.5" />
          </g>

          <g transform="translate(338, 48) rotate(6)">
            <ellipse cx="0" cy="0" rx="29" ry="35" fill="#ff8fb1" />
            <polygon points="-4,35 4,35 0,41" fill="#e0658d" />
            <ellipse cx="-8" cy="-11" rx="7" ry="13" fill="#ffffff" opacity="0.5" />
          </g>
        </g>
      </g>
    </svg>
  )
}
