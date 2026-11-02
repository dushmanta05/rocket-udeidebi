interface TubelightArtProps {
  size?: number | string
  className?: string
  brightness?: number
}

export function TubelightArt({ size = 260, className = '', brightness = 0 }: TubelightArtProps) {
  const glowOpacity = Math.max(0, Math.min(1, brightness))

  return (
    <svg
      width={size}
      height={Math.round(Number(size) * 0.35)}
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="25" y="32" width="250" height="36" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3" />

      <rect x="20" y="38" width="16" height="24" rx="2" fill="#64748b" />
      <rect x="264" y="38" width="16" height="24" rx="2" fill="#64748b" />

      <rect
        x="36"
        y="42"
        width="228"
        height="16"
        rx="8"
        fill="#ffffff"
        opacity={0.3 + glowOpacity * 0.7}
      />

      <ellipse
        cx="150"
        cy="50"
        rx="140"
        ry="35"
        fill="url(#tubelight-glow)"
        opacity={glowOpacity}
      />

      <defs>
        <radialGradient id="tubelight-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#fef9c3" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}
