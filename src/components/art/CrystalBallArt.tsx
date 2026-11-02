interface CrystalBallArtProps {
  size?: number | string
  className?: string
  isSwirling?: boolean
}

export function CrystalBallArt({ size = 180, className = '', isSwirling = false }: CrystalBallArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="42" y="132" width="76" height="18" rx="6" fill="#475569" />
      <polygon points="54,132 106,132 94,116 66,116" fill="#64748b" />

      <circle cx="80" cy="74" r="56" fill="url(#ball-gradient)" stroke="#818cf8" strokeWidth="2.5" />

      <ellipse
        cx="74"
        cy="70"
        rx="38"
        ry="30"
        fill="#c084fc"
        opacity="0.35"
        className={isSwirling ? 'mist-spin' : ''}
      />

      <ellipse cx="60" cy="50" rx="14" ry="7" fill="#ffffff" opacity="0.65" transform="rotate(-30 60 50)" />

      <defs>
        <radialGradient id="ball-gradient" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#312e81" />
        </radialGradient>
      </defs>
    </svg>
  )
}
