interface PenguinArtProps {
  size?: number | string
  className?: string
  chefHat?: boolean
  groomTie?: boolean
  futureLens?: boolean
  muted?: boolean
}

export function PenguinArt({
  size = 180,
  className = '',
  chefHat = false,
  groomTie = false,
  futureLens = false,
  muted = false
}: PenguinArtProps) {
  const body = muted ? '#5b6b8c' : groomTie ? 'var(--pengu-groom)' : 'var(--pengu-body)'
  const bodyDark = muted ? '#4a5875' : groomTie ? 'var(--pengu-groom-dark)' : 'var(--pengu-body-dark)'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      className={className}
      style={{ overflow: 'visible', display: 'block' }}
      aria-hidden="true"
    >
      <ellipse cx="100" cy="212" rx="58" ry="7" fill="rgba(0,0,0,0.25)" />
      <ellipse cx="74" cy="203" rx="20" ry="9" fill="#f6a04d" />
      <ellipse cx="126" cy="203" rx="20" ry="9" fill="#f6a04d" />

      <path d="M40 120 Q16 140 26 170 Q44 160 52 138 Z" fill={bodyDark} />
      <path d="M160 120 Q184 140 174 170 Q156 160 148 138 Z" fill={bodyDark} />

      <path
        d="M100 28 C150 28 168 74 168 122 C168 172 140 202 100 202 C60 202 32 172 32 122 C32 74 50 28 100 28 Z"
        fill={body}
      />
      <path
        d="M100 70 C134 70 146 98 146 128 C146 164 126 190 100 190 C74 190 54 164 54 128 C54 98 66 70 100 70 Z"
        fill="#ffffff"
      />
      <path
        d="M58 92 C62 64 82 52 100 52 C118 52 138 64 142 92 C130 80 116 76 100 76 C84 76 70 80 58 92 Z"
        fill={body}
      />

      <circle cx="80" cy="104" r="7" fill="#1b1f33" />
      <circle cx="120" cy="104" r="7" fill="#1b1f33" />
      <circle cx="82.5" cy="101.5" r="2.4" fill="#ffffff" />
      <circle cx="122.5" cy="101.5" r="2.4" fill="#ffffff" />
      <ellipse cx="68" cy="120" rx="9" ry="5" fill="#ffb3c7" opacity="0.8" />
      <ellipse cx="132" cy="120" rx="9" ry="5" fill="#ffb3c7" opacity="0.8" />
      <path d="M92 114 Q100 108 108 114 Q100 124 92 114 Z" fill="#f6a04d" />

      {groomTie && (
        <g>
          <path d="M100 150 L80 140 L80 162 Z" fill="#e2445c" />
          <path d="M100 150 L120 140 L120 162 Z" fill="#e2445c" />
          <circle cx="100" cy="151" r="5" fill="#b52a40" />
        </g>
      )}

      {chefHat && (
        <g>
          <rect x="66" y="22" width="68" height="16" rx="4" fill="#ffffff" stroke="#dfe3f0" />
          <circle cx="78" cy="14" r="14" fill="#ffffff" />
          <circle cx="100" cy="6" r="17" fill="#ffffff" />
          <circle cx="122" cy="14" r="14" fill="#ffffff" />
        </g>
      )}

      {futureLens && (
        <g>
          <circle cx="120" cy="104" r="18" fill="rgba(142, 197, 255, 0.35)" stroke="#ffd27a" strokeWidth="3.5" />
          <path d="M110 94 A 12 12 0 0 1 128 98" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="134" y1="116" x2="154" y2="138" stroke="#ffd27a" strokeWidth="4" strokeLinecap="round" />
          <polygon points="120,82 122,87 127,87 123,90 125,95 120,92 115,95 117,90 113,87 118,87" fill="#ffffff" />
        </g>
      )}
    </svg>
  )
}
