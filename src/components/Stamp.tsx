import { motion } from 'framer-motion'

interface StampProps {
  text: string
  subtext?: string
  color?: string
  angle?: number
  className?: string
}

export function Stamp({
  text,
  subtext,
  color = '#dc2626',
  angle = -14,
  className = ''
}: StampProps) {
  return (
    <motion.div
      initial={{ scale: 2.5, opacity: 0, rotate: angle + 20 }}
      animate={{ scale: 1, opacity: 1, rotate: angle }}
      transition={{ type: 'spring', damping: 12, stiffness: 220 }}
      className={`stamp-container ${className}`}
      style={{
        borderColor: color,
        color: color
      }}
    >
      <span className="stamp-text">{text}</span>
      {subtext && <span className="stamp-subtext">{subtext}</span>}
    </motion.div>
  )
}
