import { motion } from 'framer-motion'

interface EggArtProps {
  size?: number
  cracks: number
}

const CRACKS = [
  'M100 70 L92 88 L104 98 L96 116',
  'M96 116 L80 124 L70 118 M104 98 L120 104 L126 96',
  'M70 118 L56 126 M126 96 L142 108 L150 104 M80 124 L84 140'
]

export function EggArt({ size = 220, cracks }: EggArtProps) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 200 240" style={{ overflow: 'visible' }} aria-hidden="true">
      <defs>
        <radialGradient id="eggShade" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f3eee6" />
          <stop offset="100%" stopColor="#d9cfc1" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="230" rx="62" ry="8" fill="rgba(0,0,0,0.3)" />
      <path
        d="M100 10 C150 10 178 92 178 146 C178 196 144 226 100 226 C56 226 22 196 22 146 C22 92 50 10 100 10 Z"
        fill="url(#eggShade)"
      />
      <circle cx="70" cy="80" r="7" fill="#b9d7ff" opacity="0.7" />
      <circle cx="130" cy="150" r="9" fill="#ffd0dc" opacity="0.7" />
      <circle cx="84" cy="176" r="5" fill="#b9d7ff" opacity="0.7" />
      {CRACKS.slice(0, cracks).map((d, idx) => (
        <motion.path
          key={idx}
          d={d}
          stroke="#5b4a3a"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.35 }}
        />
      ))}
    </svg>
  )
}

export function EggShellTop({ size = 220 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 200 120" aria-hidden="true">
      <path
        d="M100 10 C150 10 178 92 178 112 L150 104 L142 108 L126 96 L120 104 L104 98 L92 88 L80 100 L70 92 L56 106 L22 112 C22 92 50 10 100 10 Z"
        fill="#f3eee6"
        stroke="#d9cfc1"
        strokeWidth="2"
      />
    </svg>
  )
}

export function EggShellBottom({ size = 220 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 200 124" aria-hidden="true">
      <path
        d="M22 18 L56 12 L70 22 L80 14 L92 26 L104 16 L120 22 L126 14 L142 22 L150 18 L178 22 C178 72 144 116 100 116 C56 116 22 72 22 18 Z"
        fill="#e9e1d5"
        stroke="#d9cfc1"
        strokeWidth="2"
      />
    </svg>
  )
}
