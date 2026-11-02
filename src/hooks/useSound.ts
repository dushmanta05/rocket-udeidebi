import { useState, useCallback, useRef } from 'react'

export function useSound() {
  const [isMuted, setIsMuted] = useState(false)
  const bgMusicRef = useRef<HTMLAudioElement | null>(null)

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev
      if (bgMusicRef.current) {
        bgMusicRef.current.muted = next
      }
      return next
    })
  }, [])

  const playEffect = useCallback((soundName: string) => {
    if (isMuted) return
    try {
      const audio = new Audio(`./audio/${soundName}.mp3`)
      audio.volume = 0.6
      audio.play().catch(() => {})
    } catch {
    }
  }, [isMuted])

  const startBgMusic = useCallback(() => {
    if (bgMusicRef.current) return
    try {
      const music = new Audio('./audio/bg-music.mp3')
      music.loop = true
      music.volume = 0.35
      music.muted = isMuted
      music.play().catch(() => {})
      bgMusicRef.current = music
    } catch {
    }
  }, [isMuted])

  return {
    isMuted,
    toggleMute,
    playEffect,
    startBgMusic
  }
}
