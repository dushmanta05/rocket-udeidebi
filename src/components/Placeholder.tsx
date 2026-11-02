import { useState, CSSProperties } from 'react'

interface PlaceholderProps {
  label: string
  src?: string
  width?: string | number
  height?: string | number
  aspectRatio?: string | number
  tilt?: number
  className?: string
  alt?: string
}

export function Placeholder({
  label,
  src,
  width = '100%',
  height = '100%',
  aspectRatio = '4 / 3',
  tilt = 0,
  className = '',
  alt
}: PlaceholderProps) {
  const [hasError, setHasError] = useState(false)

  const cardStyle: CSSProperties = {
    width,
    height,
    aspectRatio: aspectRatio ? String(aspectRatio) : undefined,
    transform: tilt ? `rotate(${tilt}deg)` : undefined,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  }

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={alt || label}
        style={cardStyle}
        className={`placeholder-img ${className}`}
        onError={() => setHasError(true)}
      />
    )
  }

  return (
    <div
      style={cardStyle}
      className={`placeholder-fallback ${className}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="placeholder-icon"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
      <span className="placeholder-label">{label}</span>
    </div>
  )
}
