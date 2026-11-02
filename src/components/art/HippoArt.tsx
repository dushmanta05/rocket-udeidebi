interface HippoArtProps {
  size?: number | string
  className?: string
  waving?: boolean
}

export function HippoArt({ size = 180, className = '', waving = false }: HippoArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="65" cy="55" r="18" fill="#a855f7" />
      <circle cx="65" cy="55" r="10" fill="#f472b6" />
      <circle cx="135" cy="55" r="18" fill="#a855f7" />
      <circle cx="135" cy="55" r="10" fill="#f472b6" />

      <ellipse cx="100" cy="115" rx="70" ry="60" fill="#c084fc" />

      <ellipse cx="100" cy="85" rx="52" ry="42" fill="#c084fc" />

      <ellipse cx="100" cy="120" rx="60" ry="38" fill="#e9d5ff" />

      <circle cx="85" cy="110" r="7" fill="#7e22ce" />
      <circle cx="115" cy="110" r="7" fill="#7e22ce" />

      <circle cx="80" cy="78" r="8" fill="#1e1b4b" />
      <circle cx="82" cy="76" r="3" fill="#ffffff" />
      <circle cx="120" cy="78" r="8" fill="#1e1b4b" />
      <circle cx="122" cy="76" r="3" fill="#ffffff" />

      <ellipse cx="70" cy="92" rx="9" ry="6" fill="#f472b6" opacity="0.6" />
      <ellipse cx="130" cy="92" rx="9" ry="6" fill="#f472b6" opacity="0.6" />

      <path
        d="M 90 135 Q 100 142 110 135"
        stroke="#7e22ce"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <ellipse cx="40" cy="125" rx="14" ry="24" fill="#a855f7" transform={waving ? "rotate(-35 40 125)" : "rotate(15 40 125)"} />
      <ellipse cx="160" cy="125" rx="14" ry="24" fill="#a855f7" transform="rotate(-15 160 125)" />
    </svg>
  )
}
