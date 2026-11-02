import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { POLAROID_ITEMS, POLAROID_PAGES, type PolaroidItem } from '../data/polaroids'
import { SECTIONS } from '../data/sections'
import { Placeholder } from '../components/Placeholder'
import { Hint, SectionHeader } from '../components/SectionHeader'
import type { StepSectionProps } from './types'

const copy = SECTIONS[4]
const TAPE_COLORS = ['#ff8fb1', '#8ec5ff', '#ffd27a', '#b9a6ff']

export function Polaroids({ currentStep, setTotalSteps }: StepSectionProps) {
  const [selected, setSelected] = useState<PolaroidItem | null>(null)

  useEffect(() => {
    setTotalSteps(POLAROID_PAGES.length)
  }, [setTotalSteps])

  const page = POLAROID_PAGES[Math.min(currentStep, POLAROID_PAGES.length - 1)]
  const items = POLAROID_ITEMS.filter((item) => item.page === page.page)

  return (
    <div className="section polaroids-section">
      <SectionHeader
        copy={copy}
        kicker={`${copy.kicker} · Set ${currentStep + 1} of ${POLAROID_PAGES.length}`}
        title={page.theme}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={page.page}
          className={`polaroid-grid count-${items.length}`}
          initial="hidden"
          animate="shown"
          exit="gone"
          variants={{ shown: { transition: { staggerChildren: 0.08 } } }}
        >
          {items.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              className="polaroid"
              style={{ rotate: item.rotation }}
              variants={{
                hidden: { y: -260, opacity: 0, rotate: item.rotation * 3 },
                shown: { y: 0, opacity: 1, rotate: item.rotation, transition: { type: 'spring', damping: 14 } },
                gone: { x: (idx % 2 === 0 ? -1 : 1) * 700, rotate: item.rotation * 6, opacity: 0, transition: { duration: 0.45 } }
              }}
              whileHover={{ scale: 1.07, rotate: 0, zIndex: 5 }}
              onClick={() => setSelected(item)}
            >
              <span className="polaroid-tape" style={{ background: TAPE_COLORS[idx % TAPE_COLORS.length] }} />
              <Placeholder label={item.label} src={item.src} aspectRatio="1 / 1" />
              <span className="polaroid-caption">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="polaroid polaroid-large"
              initial={{ scale: 0.6, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.6, rotate: 8 }}
              transition={{ type: 'spring', damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Placeholder label={selected.label} src={selected.src} aspectRatio="1 / 1" />
              <span className="polaroid-caption">{selected.label}</span>
              <button type="button" className="ghost-btn" onClick={() => setSelected(null)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
