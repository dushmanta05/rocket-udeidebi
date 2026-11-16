import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { AUTH_CONFIG } from '../data/auth'
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

  const { copy } = AUTH_CONFIG

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const trimmedUser = username.trim().toLowerCase()
    const trimmedPass = password.trim().toLowerCase()

    if (!trimmedUser || !trimmedPass) {
      setError(copy.errorEmpty)
      setShakeKey((prev) => prev + 1)
      return
    }

    const isUserValid = (AUTH_CONFIG.validUsers as readonly string[]).includes(trimmedUser)
    const isPassValid = (AUTH_CONFIG.validPasswords as readonly string[]).includes(trimmedPass)

    if (isUserValid && isPassValid) {
      setIsSubmitting(true)
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
      setError(copy.errorInvalid)
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
          <span className="kicker">{copy.kicker}</span>
          <h1 className="login-title">
            <span className="script-word">{copy.titleScript}</span>
            <span className="login-title-main">{copy.titleMain}</span>
          </h1>
          <p className="login-subtitle">{copy.subtitle}</p>
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
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-toggle-pass"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
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
            {error && (
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
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            className="primary-btn login-submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
          >
            <span>{copy.submitBtn}</span>
            <span aria-hidden="true">🚀</span>
          </motion.button>

          <p className="login-hint-text">{copy.passHint}</p>
        </form>
      </motion.div>
    </div>
  )
}
