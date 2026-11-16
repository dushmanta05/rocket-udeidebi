export interface AuthSession {
  user: string
  expiresAt: number
}

export interface LockoutState {
  attempts: number
  lockedUntil: number
}

export const AUTH_SALT = 'rocket-udeidebi-hippo-launchpad-salt-2025'

export async function hashPassword(password: string): Promise<string> {
  const salted = `${AUTH_SALT}${password}`
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const buffer = new TextEncoder().encode(salted)
    const digest = await crypto.subtle.digest('SHA-256', buffer)
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  }
  let hash = 0
  for (let i = 0; i < salted.length; i++) {
    hash = (hash << 5) - hash + salted.charCodeAt(i)
    hash |= 0
  }
  return String(hash)
}

const envUser = typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: { VITE_AUTH_USERNAME?: string } }).env?.VITE_AUTH_USERNAME
const envPass = typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: { VITE_AUTH_PASSWORD?: string } }).env?.VITE_AUTH_PASSWORD
const envPassHash = typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: { VITE_AUTH_PASSWORD_HASH?: string } }).env?.VITE_AUTH_PASSWORD_HASH

const DEFAULT_USERNAME = 'hippo'
const DEFAULT_PASSWORD_HASH = 'be2c0da62a967cfeaf094fe398600a925e43c569285add38ec77f96be0e40c92'

export const AUTH_CONFIG = {
  storageKey: 'rocket_udeidebi_session_v1',
  lockoutKey: 'rocket_udeidebi_lockout_v1',
  tenureMs: 60 * 60 * 1000,
  maxAttempts: 5,
  lockoutDurationMs: 60 * 1000,
  validUsername: envUser ? envUser.trim().toLowerCase() : DEFAULT_USERNAME,
  validPasswordHash: envPassHash ? envPassHash.trim().toLowerCase() : '',
  validPlainPassword: envPass ? envPass.trim() : '',
  defaultHash: DEFAULT_PASSWORD_HASH,
  copy: {
    kicker: 'RESTRICTED LAUNCH PAD',
    titleScript: 'Crew',
    titleMain: 'Access Gate',
    subtitle: 'Hippo mission control credentials required for boarding.',
    userLabel: 'Agent Nickname / Username',
    userPlaceholder: 'Enter authorized username',
    passLabel: 'Secret Launch Code',
    passPlaceholder: 'Enter secret passcode',
    submitBtn: 'Unlock Launch Pad',
    securityBadge: 'SHA-256 Cryptographic Gate · Rate Limited',
    errorEmpty: 'Please enter both username and secret code.',
    errorInvalid: 'Access denied! Invalid username or launch code.',
    errorLocked: (seconds: number) => `Security lockout: Too many failed attempts. Try again in ${seconds}s.`,
    attemptsRemaining: (count: number) => `${count} attempt${count === 1 ? '' : 's'} remaining before temporary lockout.`
  }
} as const
