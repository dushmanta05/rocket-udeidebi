interface TrophyArtProps {
  size?: number | string
  className?: string
}

export function TrophyArt({ size = 140, className = '' }: TrophyArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="50" y="130" width="60" height="18" rx="4" fill="#78350f" />
      <rect x="58" y="112" width="44" height="18" rx="2" fill="#d97706" />

      <path
        d="M 40 40 L 120 40 C 120 78 102 96 80 98 C 58 96 40 78 40 40 Z"
        fill="#facc15"
        stroke="#ca8a04"
        strokeWidth="3"
      />

      <path
        d="M 40 46 C 24 46 22 72 44 76"
        stroke="#ca8a04"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 120 46 C 136 46 138 72 116 76"
        stroke="#ca8a04"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <polygon
        points="80,52 83,62 93,62 85,68 88,78 80,72 72,78 75,68 67,62 77,62"
        fill="#ffffff"
      />
    </svg>
  )
}
