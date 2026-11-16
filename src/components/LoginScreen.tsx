import { useState, useEffect, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { AUTH_CONFIG, hashPassword, type LockoutState } from '../data/auth'
import { Pengu } from './Pengu'

interface LoginScreenProps {
  onLoginSuccess: (user: string) => void
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [shakeKey, setShakeKey] = useState(0)

  const [lockoutSeconds, setLockoutSeconds] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(AUTH_CONFIG.lockoutKey)
      if (!raw) return 0
      const parsed = JSON.parse(raw) as LockoutState
      if (parsed && typeof parsed.lockedUntil === 'number') {
        const diff = Math.ceil((parsed.lockedUntil - Date.now()) / 1000)
        return diff > 0 ? diff : 0
      }
    } catch {}
    return 0
  })

  useEffect(() => {
    if (lockoutSeconds <= 0) return

    const interval = setInterval(() => {
      setLockoutSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          try {
            localStorage.removeItem(AUTH_CONFIG.lockoutKey)
          } catch {}
          setError(null)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [lockoutSeconds])

  const { copy } = AUTH_CONFIG
  const isLockedOut = lockoutSeconds > 0
  const activeError = isLockedOut ? copy.errorLocked(lockoutSeconds) : error

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isLockedOut || isSubmitting) return
    setError(null)

    const trimmedUser = username.trim().toLowerCase()
    const trimmedPass = password.trim()

    if (!trimmedUser || !trimmedPass) {
      setError(copy.errorEmpty)
      setShakeKey((prev) => prev + 1)
      return
    }

    setIsSubmitting(true)

    const isUserValid = trimmedUser === AUTH_CONFIG.validUsername
    const targetHash = AUTH_CONFIG.validPasswordHash || AUTH_CONFIG.defaultHash
    const inputHash = await hashPassword(trimmedPass)
    const isPassValid = inputHash === targetHash

    if (isUserValid && isPassValid) {
      try {
        localStorage.removeItem(AUTH_CONFIG.lockoutKey)
      } catch {}
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffd27a', '#ff8fb1', '#8ec5ff', '#b9a6ff']
      })
      setTimeout(() => {
        onLoginSuccess(trimmedUser)
      }, 500)
    } else {
      setIsSubmitting(false)
      let currentAttempts = 0
      try {
        const raw = localStorage.getItem(AUTH_CONFIG.lockoutKey)
        if (raw) {
          const parsed = JSON.parse(raw) as LockoutState
          if (parsed && typeof parsed.attempts === 'number') {
            currentAttempts = parsed.attempts
          }
        }
      } catch {}

      const newAttempts = currentAttempts + 1
      if (newAttempts >= AUTH_CONFIG.maxAttempts) {
        const lockUntil = Date.now() + AUTH_CONFIG.lockoutDurationMs
        try {
          localStorage.setItem(AUTH_CONFIG.lockoutKey, JSON.stringify({ attempts: newAttempts, lockedUntil: lockUntil }))
        } catch {}
        setLockoutSeconds(Math.ceil(AUTH_CONFIG.lockoutDurationMs / 1000))
      } else {
        try {
          localStorage.setItem(AUTH_CONFIG.lockoutKey, JSON.stringify({ attempts: newAttempts, lockedUntil: 0 }))
        } catch {}
        const remaining = AUTH_CONFIG.maxAttempts - newAttempts
        setError(`${copy.errorInvalid} ${copy.attemptsRemaining(remaining)}`)
      }
      setShakeKey((prev) => prev + 1)
    }
  }

  return (
    <div className="login-stage">
      <motion.div
        key={shakeKey}
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          x: shakeKey > 0 ? [-12, 12, -8, 8, -4, 4, 0] : 0
        }}
        transition={{
          duration: shakeKey > 0 ? 0.45 : 0.5,
          ease: 'easeOut'
        }}
        className="login-card"
      >
        <div className="login-hero">
          <div className="login-glow" />
          <Pengu size={165} variant="typing" className="login-pengu" />
        </div>

        <header className="login-header">
          <h1 className="login-title">
            <span className="script-word">{copy.titleScript}</span>
            <span className="login-title-main">{copy.titleMain}</span>
          </h1>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field-group">
            <label className="login-label" htmlFor="login-username">
              {copy.userLabel}
            </label>
            <div className="login-input-wrap">
              <svg className="login-input-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                id="login-username"
                type="text"
                className="login-input"
                placeholder={copy.userPlaceholder}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  if (error) setError(null)
                }}
                disabled={isLockedOut || isSubmitting}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                autoComplete="username"
                autoFocus
              />
            </div>
          </div>

          <div className="login-field-group">
            <label className="login-label" htmlFor="login-password">
              {copy.passLabel}
            </label>
            <div className="login-input-wrap">
              <svg className="login-input-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                className="login-input"
                placeholder={copy.passPlaceholder}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (error) setError(null)
                }}
                disabled={isLockedOut || isSubmitting}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-toggle-pass"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                disabled={isLockedOut || isSubmitting}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {activeError && (
              <motion.div
                className="login-error-msg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{activeError}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            className="primary-btn login-submit-btn"
            whileHover={!isLockedOut && !isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isLockedOut && !isSubmitting ? { scale: 0.97 } : {}}
            disabled={isLockedOut || isSubmitting}
          >
            <span>{copy.submitBtn}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4.5c1.45-1.47 4.5-2 4.5-2" />
              <path d="M12 15v5s3.03-.55 4.5-2c1.47-1.45 2-4.5 2-4.5" />
            </svg>
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
