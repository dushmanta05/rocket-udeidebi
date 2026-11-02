interface PenguinArtProps {
  size?: number | string
  className?: string
  hasEgg?: boolean
  chefHat?: boolean
  groomTie?: boolean
}

export function PenguinArt({
  size = 180,
  className = '',
  hasEgg = false,
  chefHat = false,
  groomTie = false
}: PenguinArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="65" cy="180" rx="20" ry="10" fill="#f97316" />
      <ellipse cx="135" cy="180" rx="20" ry="10" fill="#f97316" />

      <ellipse cx="100" cy="115" rx="58" ry="68" fill="#1e293b" />

      <ellipse cx="44" cy="118" rx="14" ry="36" fill="#0f172a" transform="rotate(18 44 118)" />
      <ellipse cx="156" cy="118" rx="14" ry="36" fill="#0f172a" transform="rotate(-18 156 118)" />

      <ellipse cx="100" cy="125" rx="42" ry="50" fill="#ffffff" />

      <circle cx="82" cy="80" r="7" fill="#0f172a" />
      <circle cx="84" cy="78" r="2.5" fill="#ffffff" />
      <circle cx="118" cy="80" r="7" fill="#0f172a" />
      <circle cx="120" cy="78" r="2.5" fill="#ffffff" />

      <path
        d="M 90 92 Q 100 108 110 92 Z"
        fill="#f97316"
        stroke="#ea580c"
        strokeWidth="1.5"
      />

      <ellipse cx="72" cy="94" rx="7" ry="5" fill="#f43f5e" opacity="0.4" />
      <ellipse cx="128" cy="94" rx="7" ry="5" fill="#f43f5e" opacity="0.4" />

      {groomTie && (
        <g id="bowtie">
          <polygon points="90,110 90,124 100,117" fill="#dc2626" />
          <polygon points="110,110 110,124 100,117" fill="#dc2626" />
          <circle cx="100" cy="117" r="3.5" fill="#991b1b" />
        </g>
      )}

      {chefHat && (
        <g id="chef-hat">
          <ellipse cx="100" cy="48" rx="36" ry="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="78" cy="38" r="16" fill="#ffffff" />
          <circle cx="100" cy="30" r="18" fill="#ffffff" />
          <circle cx="122" cy="38" r="16" fill="#ffffff" />
          <rect x="74" y="44" width="52" height="12" fill="#ffffff" rx="3" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>
      )}

      {hasEgg && (
        <g id="egg">
          <ellipse cx="100" cy="165" rx="22" ry="28" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
        </g>
      )}
    </svg>
  )
}
