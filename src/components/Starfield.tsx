import { useMemo } from 'react'

interface Star {
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

function seeded(seed: number) {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

function makeStars(count: number, seed: number): Star[] {
  const rand = seeded(seed)
  return Array.from({ length: count }, () => ({
    left: rand() * 100,
    top: rand() * 100,
    size: rand() < 0.85 ? 1 + rand() * 1.4 : 2.4 + rand() * 1.4,
    delay: rand() * 6,
    duration: 2.5 + rand() * 4
  }))
}

export function Starfield() {
  const stars = useMemo(() => makeStars(150, 7), [])

  return (
    <div className="starfield" aria-hidden="true">
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      {stars.map((star, idx) => (
        <span
          key={idx}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
      <span className="shooting-star shooting-star-a" />
      <span className="shooting-star shooting-star-b" />
    </div>
  )
}
