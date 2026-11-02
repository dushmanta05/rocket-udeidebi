import { useEffect, useState } from 'react'
import { ASSETS } from '../data/assets'
import { FALLBACK_WISHES, type CrewWish } from '../data/wishes'

const WISHES_DIR = './videos/wishes/'

function resolve(path?: string): string | undefined {
  if (!path) return undefined
  if (/^(https?:)?\/\//.test(path) || path.startsWith('./') || path.startsWith('/')) return path
  return WISHES_DIR + path
}

function isWish(value: unknown): value is CrewWish {
  return typeof value === 'object' && value !== null && typeof (value as CrewWish).name === 'string'
}

export function useWishes(): CrewWish[] {
  const [wishes, setWishes] = useState<CrewWish[]>(FALLBACK_WISHES)

  useEffect(() => {
    let cancelled = false
    fetch(ASSETS.wishesManifest)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: unknown) => {
        const list = (data as { wishes?: unknown })?.wishes
        if (cancelled || !Array.isArray(list)) return
        const parsed = list.filter(isWish).map((wish) => ({
          ...wish,
          video: resolve(wish.video),
          poster: resolve(wish.poster)
        }))
        if (parsed.length > 0) setWishes(parsed)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return wishes
}
