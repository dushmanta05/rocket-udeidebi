import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { MENU_ITEMS, type MenuItem } from '../data/menu'
import { KITCHEN_COPY, SECTIONS } from '../data/sections'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'

const copy = SECTIONS[11]
const CHEF_VARIANTS = ['kitchen', 'kitchen2', 'kitchen3'] as const
const RECIPE_TILTS = [-2, 2.4, -1.8, 2, -2.2]

export function CloudKitchen() {
  const [activeDish, setActiveDish] = useState<MenuItem | null>(null)
  const [ticket, setTicket] = useState(101)
  const [chefIdx, setChefIdx] = useState<0 | 1 | 2>(0)

  const openDish = (dish: MenuItem) => {
    setActiveDish(dish)
    setTicket((prev) => prev + 1)
    setChefIdx((prev) => ((prev + 1) % 3) as 0 | 1 | 2)
    confetti({ particleCount: 36, spread: 70, origin: { y: 0.6 }, colors: ['#ffd27a', '#7ee2a8', '#8ec5ff'] })
  }

  const cycleChef = (e: React.MouseEvent) => {
    e.stopPropagation()
    setChefIdx((prev) => ((prev + 1) % 3) as 0 | 1 | 2)
  }

  return (
    <div className="section kitchen-section">
      <SectionHeader copy={copy} />

      <div className="kitchen-scatter-stage">
        <div className="kitchen-scatter-grid">
          {MENU_ITEMS.map((dish, idx) => (
            <motion.div
              key={dish.id}
              className="recipe-scatter-card"
              style={{ rotate: RECIPE_TILTS[idx % RECIPE_TILTS.length] }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.08 }}
              onClick={() => openDish(dish)}
            >
              <div className="recipe-card-head">
                <span className="recipe-tag">Recipe #{idx + 1}</span>
                <span className="recipe-badge-free">100% Free</span>
              </div>
              <h3 className="recipe-card-title">{dish.name}</h3>
              <p className="recipe-card-desc">{dish.description}</p>
              <span className="recipe-card-action">Tap to cook & print receipt →</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="kitchen-policy-bar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="policy-runner-wrap">
            <Pengu size={105} variant="run" />
          </div>

          <div className="policy-tags-row">
            <div className="policy-tag-item">
              <span className="policy-label">DELIVERY</span>
              <span className="policy-val">100% Free Forever</span>
            </div>
            <div className="policy-tag-divider" />
            <div className="policy-tag-item">
              <span className="policy-label">PAYMENT</span>
              <span className="policy-val">Strictly Not Accepted</span>
            </div>
            <div className="policy-tag-divider" />
            <div className="policy-tag-item">
              <span className="policy-label">HEAD CHEF / OWNER</span>
              <span className="policy-val">Physically Cannot Say No</span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeDish && (
          <motion.div
            className="kitchen-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveDish(null)}
          >
            <motion.div
              className="kitchen-modal"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="kitchen-modal-header">
                <div>
                  <span className="pill">Cloud Kitchen Special</span>
                  <h3 className="kitchen-modal-title">{activeDish.name}</h3>
                </div>
                <button type="button" className="term-modal-close" onClick={() => setActiveDish(null)}>✕</button>
              </div>

              <div className="kitchen-modal-body">
                <div className="kitchen-modal-chef" onClick={cycleChef}>
                  <motion.div
                    key={chefIdx}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Pengu size={150} variant={CHEF_VARIANTS[chefIdx]} />
                  </motion.div>
                  <span className="chef-action-prompt">Tap chef to cycle cooking style</span>
                  <div className="chef-speech">{KITCHEN_COPY.chefSays}</div>
                </div>

                <div className="kitchen-modal-receipt">
                  <div className="receipt">
                    <div className="receipt-stamp">PAID</div>
                    <span className="receipt-title">{KITCHEN_COPY.receiptTitle}</span>
                    <span className="receipt-ticket">#{ticket}</span>
                    <span className="receipt-line">1 x {activeDish.name}</span>
                    <span className="receipt-total">{KITCHEN_COPY.receiptTotal}</span>
                    <span className="receipt-note">{KITCHEN_COPY.receiptNote}</span>
                    <div className="receipt-badge">UNLIMITED FREE REFILLS</div>
                  </div>
                </div>
              </div>

              <p className="kitchen-modal-recipe-desc">{activeDish.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Hint>Tap any recipe card to open order</Hint>
    </div>
  )
}
