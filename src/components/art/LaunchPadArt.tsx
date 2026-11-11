interface LaunchPadArtProps {
  className?: string
}

export function LaunchPadArt({ className = '' }: LaunchPadArtProps) {
  return (
    <svg
      viewBox="0 0 240 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`launch-pad-svg ${className}`}
      preserveAspectRatio="xMidYBottom"
    >
      <defs>
        <pattern id="hazard-pattern" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="8" height="16" fill="#ffd27a" />
          <rect x="8" width="8" height="16" fill="#222748" />
        </pattern>
        <radialGradient id="beacon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#ff4d6d" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="spotlight-beam" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#ffd27a" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#ffd27a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffd27a" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polygon points="186,84 30,196 140,196 186,92" fill="url(#spotlight-beam)" pointerEvents="none" />

      <g className="pad-pillars">
        <rect x="24" y="206" width="14" height="14" rx="2" fill="#22284c" />
        <rect x="80" y="206" width="14" height="14" rx="2" fill="#22284c" />
        <rect x="136" y="206" width="14" height="14" rx="2" fill="#22284c" />
        <rect x="194" y="206" width="14" height="14" rx="2" fill="#22284c" />
      </g>

      <g className="pad-railing">
        <line x1="18" y1="180" x2="184" y2="180" stroke="#525d94" strokeWidth="2.5" />
        <line x1="18" y1="188" x2="184" y2="188" stroke="#414c7c" strokeWidth="1.5" />
        <line x1="22" y1="180" x2="22" y2="196" stroke="#525d94" strokeWidth="2.5" />
        <line x1="60" y1="180" x2="60" y2="196" stroke="#414c7c" strokeWidth="2" />
        <line x1="100" y1="180" x2="100" y2="196" stroke="#414c7c" strokeWidth="2" />
        <line x1="140" y1="180" x2="140" y2="196" stroke="#414c7c" strokeWidth="2" />
        <line x1="180" y1="180" x2="180" y2="196" stroke="#525d94" strokeWidth="2.5" />
      </g>

      <g className="pad-base-deck">
        <rect x="12" y="196" width="216" height="12" rx="3" fill="#3b4474" />
        <rect x="12" y="194" width="216" height="3" fill="#6976b4" />
        <rect x="14" y="200" width="212" height="6" rx="1.5" fill="url(#hazard-pattern)" opacity="0.9" />
        <rect x="12" y="206" width="216" height="4" rx="1" fill="#252b4d" />
      </g>

      <g className="pad-deck-lights">
        <circle cx="30" cy="195" r="2.5" fill="#ffd27a" />
        <circle cx="70" cy="195" r="2.5" fill="#8ec5ff" />
        <circle cx="110" cy="195" r="2.5" fill="#ffd27a" />
        <circle cx="150" cy="195" r="2.5" fill="#8ec5ff" />
        <circle cx="178" cy="195" r="2.5" fill="#ffd27a" />
      </g>

      <g className="pad-gantry-tower">
        <rect x="184" y="46" width="30" height="150" rx="3" fill="#2d355c" />
        <line x1="186" y1="46" x2="186" y2="196" stroke="#56639c" strokeWidth="3" />
        <line x1="212" y1="46" x2="212" y2="196" stroke="#56639c" strokeWidth="3" />

        <line x1="186" y1="84" x2="212" y2="84" stroke="#465184" strokeWidth="2" />
        <line x1="186" y1="122" x2="212" y2="122" stroke="#465184" strokeWidth="2" />
        <line x1="186" y1="160" x2="212" y2="160" stroke="#465184" strokeWidth="2" />

        <line x1="186" y1="46" x2="212" y2="84" stroke="#465184" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="212" y1="46" x2="186" y2="84" stroke="#465184" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="186" y1="84" x2="212" y2="122" stroke="#465184" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="212" y1="84" x2="186" y2="122" stroke="#465184" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="186" y1="122" x2="212" y2="160" stroke="#465184" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="212" y1="122" x2="186" y2="160" stroke="#465184" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="186" y1="160" x2="212" y2="196" stroke="#465184" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="212" y1="160" x2="186" y2="196" stroke="#465184" strokeWidth="2" strokeDasharray="3 3" />

        <rect x="146" y="86" width="40" height="7" rx="2" fill="#3b4474" />
        <line x1="146" y1="89" x2="186" y2="89" stroke="#6b7bb8" strokeWidth="1.5" />
        <circle cx="148" cy="89.5" r="2" fill="#ffd27a" />

        <rect x="180" y="40" width="38" height="6" rx="2" fill="#465184" />
        <line x1="199" y1="40" x2="199" y2="28" stroke="#6b7bb8" strokeWidth="2" />
        <circle cx="199" cy="26" r="10" fill="url(#beacon-glow)" />
        <circle cx="199" cy="26" r="3.5" fill="#ff4d6d" className="beacon-lamp" />

        <circle cx="186" cy="86" r="4" fill="#ffd27a" />
        <circle cx="186" cy="86" r="2" fill="#ffffff" />
      </g>

      <g className="pad-bunting">
        <path d="M 24,181 Q 95,190 186,88" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.2" fill="none" />
        <polygon points="46,183 54,184 50,193" fill="#ff8fb1" />
        <polygon points="72,185 80,186 76,195" fill="#ffd27a" />
        <polygon points="98,183 106,183 102,192" fill="#8ec5ff" />
        <polygon points="124,174 132,172 129,182" fill="#b9a6ff" />
        <polygon points="150,154 158,151 156,162" fill="#7ee2a8" />
        <polygon points="172,118 179,114 179,125" fill="#ff9f5a" />
      </g>

      <g className="pad-balloons">
        <path d="M 194,76 C 188,68 165,58 156,48" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" fill="none" />
        <path d="M 194,76 C 190,62 176,46 172,36" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" fill="none" />
        <path d="M 194,76 C 194,58 190,40 186,22" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" fill="none" />
        <path d="M 194,76 C 196,58 200,42 202,30" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" fill="none" />
        <path d="M 194,76 C 198,66 210,54 214,44" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1" fill="none" />

        <g className="balloon-bunch">
          <g transform="translate(154, 46) rotate(-10)">
            <ellipse cx="0" cy="0" rx="14" ry="17" fill="#b9a6ff" />
            <polygon points="-2,17 2,17 0,20" fill="#9d88ea" />
            <ellipse cx="-4" cy="-5" rx="3.5" ry="6.5" fill="#ffffff" opacity="0.45" />
          </g>

          <g transform="translate(172, 34) rotate(-5)">
            <ellipse cx="0" cy="0" rx="15" ry="18" fill="#ffd27a" />
            <polygon points="-2,18 2,18 0,21" fill="#e0b250" />
            <ellipse cx="-4" cy="-5" rx="3.5" ry="7" fill="#ffffff" opacity="0.5" />
          </g>

          <g transform="translate(214, 42) rotate(8)">
            <ellipse cx="0" cy="0" rx="13" ry="16" fill="#7ee2a8" />
            <polygon points="-2,16 2,16 0,19" fill="#5cb684" />
            <ellipse cx="-3.5" cy="-4.5" rx="3" ry="6" fill="#ffffff" opacity="0.45" />
          </g>

          <g transform="translate(186, 20) rotate(-2)">
            <ellipse cx="0" cy="0" rx="16" ry="20" fill="#8ec5ff" />
            <polygon points="-2,20 2,20 0,23" fill="#69a8ea" />
            <ellipse cx="-4.5" cy="-6" rx="4" ry="7.5" fill="#ffffff" opacity="0.5" />
          </g>

          <g transform="translate(202, 28) rotate(4)">
            <ellipse cx="0" cy="0" rx="16" ry="19" fill="#ff8fb1" />
            <polygon points="-2,19 2,19 0,22" fill="#e06a90" />
            <ellipse cx="-4" cy="-5.5" rx="4" ry="7" fill="#ffffff" opacity="0.5" />
          </g>
        </g>
      </g>
    </svg>
  )
}
