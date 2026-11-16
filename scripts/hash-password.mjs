import { createHash } from 'node:crypto'

const password = process.argv[2]
if (!password) {
  console.log('Usage: pnpm hash-pass <your-password>')
  process.exit(1)
}

const salt = 'rocket-udeidebi-hippo-launchpad-salt-2025'
const hash = createHash('sha256').update(salt + password).digest('hex')

console.log('\nGenerated SHA-256 Hash:')
console.log(hash)
console.log('\nSet this in your .env file:')
console.log(`VITE_AUTH_PASSWORD_HASH=${hash}\n`)
