import { useState, type CSSProperties, type ReactNode } from 'react'

interface SmartImageProps {
  src?: string
  alt: string
  fallback: ReactNode
  className?: string
  style?: CSSProperties
}

export function SmartImage({ src, alt, fallback, className = '', style }: SmartImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)

  if (!src || failedSrc === src) {
    return <>{fallback}</>
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      draggable={false}
      onError={() => setFailedSrc(src)}
    />
  )
}
