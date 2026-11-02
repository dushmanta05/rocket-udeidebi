import { useState, type CSSProperties } from 'react'
import { ASSETS } from '../data/assets'

interface PlaceholderProps {
  label: string
  src?: string
  aspectRatio?: string
  className?: string
  alt?: string
  video?: boolean
}

export function Placeholder({ label, src, aspectRatio = '4 / 3', className = '', alt, video = false }: PlaceholderProps) {
  const [failed, setFailed] = useState<string[]>([])
  const style: CSSProperties = { aspectRatio }
  const candidate = [src, ASSETS.arpita].find((s): s is string => Boolean(s) && !failed.includes(s as string))

  if (candidate) {
    return (
      <div className={`media-frame ${className}`} style={style}>
        <img
          src={candidate}
          alt={alt || label}
          className="media-img"
          draggable={false}
          onError={() => setFailed((prev) => [...prev, candidate])}
        />
        {video && candidate !== src && <span className="media-badge">{label}</span>}
      </div>
    )
  }

  return (
    <div style={style} className={`media-placeholder ${className}`}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {video ? (
          <>
            <rect x="2" y="5" width="15" height="14" rx="3" />
            <path d="M17 10l5-3v10l-5-3z" />
          </>
        ) : (
          <>
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </>
        )}
      </svg>
      <span className="media-placeholder-label">{label}</span>
    </div>
  )
}
