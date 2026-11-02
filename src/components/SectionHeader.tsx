import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { SectionCopy } from '../data/sections'

interface SectionHeaderProps {
  copy: SectionCopy
  title?: ReactNode
  kicker?: string
}

export function SectionHeader({ copy, title, kicker }: SectionHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="section-header"
    >
      <span className="kicker">{kicker ?? copy.kicker}</span>
      <h2 className="section-title">{title ?? copy.title}</h2>
      {copy.subtitle && <p className="section-subtitle">{copy.subtitle}</p>}
    </motion.header>
  )
}

export function Hint({ children }: { children: ReactNode }) {
  return <div className="hint">{children}</div>
}
