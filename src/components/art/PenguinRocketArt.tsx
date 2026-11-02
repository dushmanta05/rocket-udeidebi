import { useState } from 'react'

interface PenguinRocketArtProps {
  size?: number | string
  className?: string
  hasFlame?: boolean
  pngSrc?: string
  tilt?: number
}

export function PenguinRocketArt({
  size = 140,
  className = '',
  hasFlame = true,
  pngSrc = './images/penguin-rocket.png',
  tilt = 0
}: PenguinRocketArtProps) {
  const [pngError, setPngError] = useState(false)

  if (pngSrc && !pngError) {
    return (
      <div
        style={{
          width: size,
          height: size,
          transform: tilt ? `rotate(${tilt}deg)` : undefined,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className={className}
      >
        <img
          src={pngSrc}
          alt="Penguin on Rocket"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={() => setPngError(true)}
        />
      </div>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
        overflow: 'visible'
      }}
    >
      <defs>
        <linearGradient id="rocketBodyGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#ffedd5" />
          <stop offset="35%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="rocketNoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
        <radialGradient id="pilotBodyGrad" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </radialGradient>
      </defs>

      {hasFlame && (
        <g id="thruster-exhaust" className="rocket-exhaust-flame">
          <path
            d="M 45 92 C 15 88 5 95 -15 95 C 10 102 20 105 45 102 Z"
            fill="url(#flameGrad)"
            opacity="0.9"
          />
          <path
            d="M 45 94 C 28 92 18 95 0 95 C 20 98 30 100 45 98 Z"
            fill="#fef08a"
          />
        </g>
      )}

      <polygon points="55,62 30,35 60,70" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
      <polygon points="55,130 30,158 60,122" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />

      <path
        d="M 48 90 L 38 88 L 38 104 L 48 102 Z"
        fill="#475569"
        stroke="#1e293b"
        strokeWidth="1.5"
      />

      <g id="pilot-penguin">
        <ellipse cx="106" cy="56" rx="22" ry="26" fill="url(#pilotBodyGrad)" />
        <ellipse cx="112" cy="60" rx="14" ry="18" fill="#ffffff" />
        <ellipse cx="120" cy="52" rx="4" ry="5.5" fill="#0f172a" />
        <ellipse cx="119" cy="50" rx="1.5" ry="2" fill="#ffffff" />
        <polygon points="124,54 135,58 124,62" fill="#f97316" />
        <ellipse cx="118" cy="62" rx="4" ry="2.5" fill="#f472b6" opacity="0.6" />
        <path d="M 96 58 C 88 64 88 74 96 82 C 102 78 102 68 98 60 Z" fill="#7c3aed" />
        <path
          d="M 100 74 C 82 76 72 85 64 82 C 72 90 85 86 102 82 Z"
          fill="#f43f5e"
          className="scarf-flutter"
        />
        <circle cx="102" cy="76" r="5" fill="#e11d48" />
      </g>

      <path
        d="M 45 74 C 75 70 145 72 185 96 C 145 120 75 122 45 118 Z"
        fill="url(#rocketBodyGrad)"
        stroke="#ea580c"
        strokeWidth="2.5"
      />

      <path
        d="M 175 90 C 190 92 215 96 215 96 C 215 96 190 100 175 102 Z"
        fill="url(#rocketNoseGrad)"
      />

      <circle cx="135" cy="96" r="14" fill="#38bdf8" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="139" cy="92" r="3.5" fill="#ffffff" opacity="0.8" />

      <circle cx="70" cy="84" r="2" fill="#fed7aa" />
      <circle cx="95" cy="85" r="2" fill="#fed7aa" />
      <circle cx="70" cy="108" r="2" fill="#fed7aa" />
      <circle cx="95" cy="107" r="2" fill="#fed7aa" />

      <polygon points="80,94 48,93 68,98" fill="#2563eb" />
    </svg>
  )
}
