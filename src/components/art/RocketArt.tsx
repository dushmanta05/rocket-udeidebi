interface RocketArtProps {
  size?: number | string
  className?: string
  hasFlame?: boolean
  withPenguin?: boolean
}

export function RocketArt({
  size = 120,
  className = '',
  hasFlame = true,
  withPenguin = false
}: RocketArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {hasFlame && (
        <g id="flames">
          <polygon points="80,120 70,154 90,154" fill="#f97316" />
          <polygon points="80,120 74,146 86,146" fill="#facc15" />
        </g>
      )}

      <polygon points="56,86 34,116 56,112" fill="#3b82f6" />
      <polygon points="104,86 126,116 104,112" fill="#3b82f6" />

      <path
        d="M 80 20 C 60 48 56 86 56 112 L 104 112 C 104 86 100 48 80 20 Z"
        fill="#f97316"
      />

      <path
        d="M 80 20 C 70 34 68 54 68 62 L 92 62 C 92 54 90 34 80 20 Z"
        fill="#ef4444"
      />

      <circle cx="80" cy="80" r="16" fill="#38bdf8" stroke="#ffffff" strokeWidth="3" />
      <circle cx="84" cy="76" r="4" fill="#ffffff" opacity="0.8" />

      {withPenguin && (
        <g id="mini-penguin" transform="translate(68, 68) scale(0.16)">
          <ellipse cx="75" cy="75" rx="35" ry="42" fill="#1e293b" />
          <ellipse cx="75" cy="80" rx="24" ry="30" fill="#ffffff" />
          <polygon points="70,68 80,68 75,76" fill="#f97316" />
        </g>
      )}
    </svg>
  )
}
