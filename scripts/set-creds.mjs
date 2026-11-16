import { createHash } from 'node:crypto'
import { writeFileSync, existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const username = process.argv[2]
const password = process.argv[3]

if (!username || !password) {
  console.log('\nUsage: pnpm set-creds <username> <password>')
  console.log('Example: pnpm set-creds hippo mysecretpass123\n')
  process.exit(1)
}

const salt = 'rocket-udeidebi-hippo-launchpad-salt-2025'
const hash = createHash('sha256').update(salt + password).digest('hex')

const envPath = resolve(process.cwd(), '.env')
let content = ''
if (existsSync(envPath)) {
  content = readFileSync(envPath, 'utf8')
}

const lines = content.split('\n').filter((l) => {
  const trimmed = l.trim()
  return (
    !trimmed.startsWith('VITE_AUTH_USERNAME=') &&
    !trimmed.startsWith('VITE_AUTH_PASSWORD=') &&
    !trimmed.startsWith('VITE_AUTH_PASSWORD_HASH=')
  )
})

lines.push(`VITE_AUTH_USERNAME=${username.trim().toLowerCase()}`)
lines.push(`VITE_AUTH_PASSWORD_HASH=${hash}`)

writeFileSync(envPath, lines.join('\n').trim() + '\n', 'utf8')

console.log('\nCredentials securely saved to .env!')
console.log(`Username: ${username.trim().toLowerCase()}`)
console.log(`Password Hash: ${hash}`)
console.log('(Plaintext password is never stored or exposed in code or git)\n')
