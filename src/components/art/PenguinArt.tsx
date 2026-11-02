import { useState } from 'react'

interface PenguinArtProps {
  size?: number | string
  className?: string
  hasEgg?: boolean
  chefHat?: boolean
  groomTie?: boolean
  bodyColor?: string
  flipperColor?: string
  pngSrc?: string
}

export function PenguinArt({
  size = 180,
  className = '',
  hasEgg = false,
  chefHat = false,
  groomTie = false,
  bodyColor,
  flipperColor,
  pngSrc = './images/penguin.png'
}: PenguinArtProps) {
  const [pngError, setPngError] = useState(false)

  const resolvedBody = bodyColor || (groomTie ? 'var(--color-penguin-groom-body, #1e293b)' : 'var(--color-penguin-body, #a78bfa)')
  const resolvedFlipper = flipperColor || (groomTie ? 'var(--color-penguin-groom-dark, #0f172a)' : 'var(--color-penguin-body-dark, #8b5cf6)')

  if (pngSrc && !pngError && !groomTie && !chefHat && !hasEgg) {
    return (
      <img
        src={pngSrc}
        alt="Penguin"
        width={size}
        height={size}
        className={`penguin-png-art ${className}`}
        style={{ objectFit: 'contain', display: 'block' }}
        onError={() => setPngError(true)}
      />
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="bodyGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="40%" stopColor={resolvedBody} />
          <stop offset="100%" stopColor={resolvedFlipper} />
        </radialGradient>
        <linearGradient id="bellyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3e8ff" />
        </linearGradient>
        <linearGradient id="beakGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <radialGradient id="cheekGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="110" cy="208" rx="55" ry="8" fill="#000000" opacity="0.12" />

      <g id="feet">
        <path
          d="M 68 184 C 54 184 46 195 52 201 C 58 207 84 204 88 194 C 90 188 82 184 68 184 Z"
          fill="url(#beakGrad)"
        />
        <path
          d="M 152 184 C 166 184 174 195 168 201 C 162 207 136 204 132 194 C 130 188 138 184 152 184 Z"
          fill="url(#beakGrad)"
        />
      </g>

      <path
        d="M 52 125 C 26 128 22 152 38 168 C 50 180 62 165 58 144 Z"
        fill={resolvedFlipper}
      />
      <path
        d="M 168 125 C 194 128 198 152 182 168 C 170 180 158 165 162 144 Z"
        fill={resolvedFlipper}
      />

      <ellipse cx="110" cy="120" rx="66" ry="76" fill="url(#bodyGrad)" />

      <path
        d="M 110 70 C 80 70 68 100 68 135 C 68 170 85 186 110 186 C 135 186 152 170 152 135 C 152 100 140 70 110 70 Z"
        fill="url(#bellyGrad)"
      />

      <ellipse cx="78" cy="128" rx="14" ry="9" fill="url(#cheekGlow)" />
      <ellipse cx="142" cy="128" rx="14" ry="9" fill="url(#cheekGlow)" />

      <g id="left-eye">
        <ellipse cx="88" cy="108" rx="9" ry="12" fill="#0f172a" />
        <ellipse cx="86" cy="104" rx="4" ry="5.5" fill="#ffffff" />
        <circle cx="91" cy="112" r="2" fill="#ffffff" />
      </g>

      <g id="right-eye">
        <ellipse cx="132" cy="108" rx="9" ry="12" fill="#0f172a" />
        <ellipse cx="130" cy="104" rx="4" ry="5.5" fill="#ffffff" />
        <circle cx="135" cy="112" r="2" fill="#ffffff" />
      </g>

      <path
        d="M 98 116 C 98 116 110 113 122 116 C 124 125 116 136 110 136 C 104 136 96 125 98 116 Z"
        fill="url(#beakGrad)"
      />
      <ellipse cx="110" cy="118" rx="6" ry="2" fill="#ffffff" opacity="0.45" />

      {groomTie && (
        <g id="groom-bowtie" transform="translate(110, 142)">
          <polygon points="-16,-8 -16,8 0,0" fill="#dc2626" />
          <polygon points="16,-8 16,8 0,0" fill="#dc2626" />
          <circle cx="0" cy="0" r="4.5" fill="#991b1b" />
        </g>
      )}

      {chefHat && (
        <g id="chef-hat" transform="translate(110, 50)">
          <ellipse cx="0" cy="-6" rx="38" ry="16" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="-22" cy="-16" r="16" fill="#ffffff" />
          <circle cx="0" cy="-24" r="20" fill="#ffffff" />
          <circle cx="22" cy="-16" r="16" fill="#ffffff" />
          <rect x="-26" y="-6" width="52" height="14" fill="#ffffff" rx="4" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>
      )}

      {hasEgg && (
        <g id="cracked-egg" transform="translate(110, 185)">
          <ellipse cx="0" cy="0" rx="26" ry="32" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
          <path d="M -12 -10 L -4 0 L 6 -8 L 14 2" stroke="#b45309" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      )}
    </svg>
  )
}
