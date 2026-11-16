export interface AuthSession {
  user: string
  expiresAt: number
}

const envUser = typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: { VITE_AUTH_USERNAME?: string } }).env?.VITE_AUTH_USERNAME
const envPass = typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: { VITE_AUTH_PASSWORD?: string } }).env?.VITE_AUTH_PASSWORD

export const AUTH_CONFIG = {
  storageKey: 'rocket_udeidebi_session_v1',
  tenureMs: 60 * 60 * 1000,
  validUsers: envUser
    ? [envUser.trim().toLowerCase(), 'hippo', 'arpita', 'crew', 'pranjal']
    : ['hippo', 'arpita', 'crew', 'pranjal'],
  validPasswords: envPass
    ? [envPass.trim().toLowerCase(), 'rocket', 'rocketudeidebi', 'hippo', 'pengu']
    : ['rocket', 'rocketudeidebi', 'hippo', 'pengu'],
  copy: {
    kicker: 'RESTRICTED LAUNCH PAD',
    titleScript: 'Crew',
    titleMain: 'Access Gate',
    subtitle: 'Hippo mission control credentials required for boarding.',
    userLabel: 'Agent Nickname / Username',
    userPlaceholder: 'e.g. hippo, arpita, or crew',
    passLabel: 'Secret Launch Code',
    passPlaceholder: 'Enter secret passcode...',
    submitBtn: 'Unlock Launch Pad',
    passHint: 'Passcode hint: Arpita\'s catchphrase ("rocket") or nickname ("hippo")',
    errorEmpty: 'Please enter both username and secret code.',
    errorInvalid: 'Access denied! Did Tubelight forget the password? Try "hippo" or "rocket".'
  }
} as const
