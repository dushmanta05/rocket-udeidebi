interface BagArtProps {
  size?: number | string
  className?: string
  isWiggling?: boolean
}

export function BagArt({ size = 200, className = '', isWiggling = false }: BagArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${isWiggling ? 'bag-wiggle' : ''}`}
    >
      <path
        d="M 68 85 C 68 35 132 35 132 85"
        stroke="#1e3a8a"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <rect x="35" y="75" width="130" height="110" rx="20" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="4" />

      <path
        d="M 60 115 C 60 155 140 155 140 115 Z"
        fill="#ffffff"
        stroke="#93c5fd"
        strokeWidth="3.5"
      />

      <line x1="60" y1="115" x2="140" y2="115" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="115" r="7" fill="#facc15" stroke="#b45309" strokeWidth="2" />
    </svg>
  )
}
