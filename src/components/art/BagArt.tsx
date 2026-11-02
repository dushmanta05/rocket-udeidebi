interface BagArtProps {
  size?: number
  className?: string
  isWiggling?: boolean
}

export function BagArt({ size = 220, className = '', isWiggling = false }: BagArtProps) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 240 264"
      className={`${className} ${isWiggling ? 'bag-wiggle' : ''}`}
      style={{ overflow: 'visible' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bagBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4aa8ff" />
          <stop offset="55%" stopColor="#1f7ae0" />
          <stop offset="100%" stopColor="#135bb0" />
        </linearGradient>
        <linearGradient id="bagFlap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5cb4ff" />
          <stop offset="100%" stopColor="#2a86ea" />
        </linearGradient>
        <radialGradient id="bagPocket" cx="45%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dfe8f5" />
        </radialGradient>
        <radialGradient id="bagBell" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff2a8" />
          <stop offset="60%" stopColor="#f6c02e" />
          <stop offset="100%" stopColor="#c88b0d" />
        </radialGradient>
      </defs>

      <ellipse cx="120" cy="254" rx="92" ry="9" fill="rgba(0,0,0,0.35)" />

      <path d="M72 92 C70 30 170 30 168 92" fill="none" stroke="#0f4d96" strokeWidth="13" strokeLinecap="round" />
      <path d="M72 92 C70 30 170 30 168 92" fill="none" stroke="#3b95f0" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 7" />

      <rect x="96" y="58" width="16" height="44" rx="3" fill="#ffd27a" transform="rotate(-14 104 80)" />
      <rect x="99" y="62" width="10" height="6" rx="1" fill="#e2a83a" transform="rotate(-14 104 80)" />
      <rect x="122" y="66" width="34" height="14" rx="3" fill="#ffffff" transform="rotate(10 139 73)" />
      <circle cx="129" cy="73" r="3" fill="#ff8fb1" transform="rotate(10 139 73)" />
      <circle cx="139" cy="73" r="3" fill="#8ec5ff" transform="rotate(10 139 73)" />
      <circle cx="149" cy="73" r="3" fill="#7ee2a8" transform="rotate(10 139 73)" />
      <path d="M86 92 C78 70 70 66 62 72" fill="none" stroke="#2b2b3c" strokeWidth="3" strokeLinecap="round" />
      <rect x="56" y="66" width="12" height="9" rx="2" fill="#2b2b3c" />

      <path
        d="M34 96 C34 88 40 84 48 84 L192 84 C200 84 206 88 206 96 L216 226 C217 238 208 246 196 246 L44 246 C32 246 23 238 24 226 Z"
        fill="url(#bagBody)"
      />
      <path d="M40 98 L200 98" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeDasharray="5 6" />
      <path d="M34 96 C34 88 40 84 48 84 L192 84 C200 84 206 88 206 96 L207 112 L33 112 Z" fill="url(#bagFlap)" />

      <rect x="30" y="118" width="180" height="16" fill="#e2445c" />
      <rect x="30" y="118" width="180" height="5" fill="#ff6b80" />

      <path d="M70 138 C70 202 170 202 170 138 Z" fill="url(#bagPocket)" />
      <path d="M76 142 C78 192 162 192 164 142" fill="none" stroke="#b9c8de" strokeWidth="2" strokeDasharray="4 5" />
      <path d="M70 138 L170 138" stroke="#c9d6ea" strokeWidth="3" strokeLinecap="round" />

      <circle cx="120" cy="134" r="13" fill="url(#bagBell)" stroke="#a87208" strokeWidth="2" />
      <path d="M108 132 L132 132" stroke="#a87208" strokeWidth="2" />
      <circle cx="120" cy="139" r="3" fill="#6b4806" />
      <path d="M120 142 L120 147" stroke="#6b4806" strokeWidth="2" strokeLinecap="round" />

      <path d="M44 236 C60 240 180 240 196 236" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="4" strokeLinecap="round" />
      <path d="M44 104 C40 160 40 200 46 232" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}
