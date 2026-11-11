import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { MENU_ITEMS, type MenuItem } from '../data/menu'
import { KITCHEN_COPY, SECTIONS } from '../data/sections'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'

const copy = SECTIONS[10]
const CHEF_VARIANTS = ['kitchen', 'kitchen2', 'kitchen3'] as const

export function CloudKitchen() {
  const [order, setOrder] = useState<{ dish: MenuItem; ticket: number }>({
    dish: MENU_ITEMS[0],
    ticket: 101
  })
  const [chefIdx, setChefIdx] = useState<0 | 1 | 2>(0)

  const place = (dish: MenuItem) => {
    setOrder((prev) => ({ dish, ticket: prev.ticket + 1 }))
    setChefIdx((prev) => ((prev + 1) % 3) as 0 | 1 | 2)
    confetti({ particleCount: 32, spread: 65, origin: { y: 0.7 }, colors: ['#ffd27a', '#7ee2a8', '#8ec5ff'] })
  }

  const switchChef = () => {
    setChefIdx((prev) => ((prev + 1) % 3) as 0 | 1 | 2)
  }

  return (
    <div className="section kitchen-section">
      <SectionHeader copy={copy} />

      <div className="kitchen-layout">
        <div className="chef-col" onClick={switchChef}>
          <motion.div
            key={chefIdx}
            className="chef-avatar-wrap"
            initial={{ scale: 0.85, rotate: -6 }}
            animate={{ scale: 1, rotate: [ -2, 2, -2 ] }}
            transition={{
              scale: { type: 'spring', damping: 12 },
              rotate: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <Pengu size={150} variant={CHEF_VARIANTS[chefIdx]} />
          </motion.div>
          <div className="speech-bubble">{KITCHEN_COPY.chefSays}</div>
        </div>

        <div className="menu-board">
          <div className="menu-list">
            {MENU_ITEMS.map((dish, idx) => (
              <motion.button
                key={dish.id}
                type="button"
                className={`menu-item ${order.dish.id === dish.id ? 'ordered' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.08 }}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => place(dish)}
              >
                <span className="menu-name">{dish.name}</span>
                <span className="menu-dots" />
                <span className="menu-price">{dish.price}</span>
                <span className="menu-desc">{dish.description}</span>
              </motion.button>
            ))}
          </div>

          <div className="kitchen-delivery-line">
            <Pengu size={48} variant="run" />
            <p className="menu-footer">{KITCHEN_COPY.footer}</p>
          </div>
        </div>

        <div className="receipt-col">
          <div className="receipt-slot" />
          <AnimatePresence mode="wait">
            <motion.div
              key={order.ticket}
              className="receipt"
              initial={{ clipPath: 'inset(0 0 100% 0)', y: -14 }}
              animate={{ clipPath: 'inset(0 0 0% 0)', y: 0 }}
              exit={{ y: 80, rotate: 6, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="receipt-stamp">PAID</div>
              <span className="receipt-title">{KITCHEN_COPY.receiptTitle}</span>
              <span className="receipt-ticket">#{order.ticket}</span>
              <span className="receipt-line">1 x {order.dish.name}</span>
              <span className="receipt-total">{KITCHEN_COPY.receiptTotal}</span>
              <span className="receipt-note">{KITCHEN_COPY.receiptNote}</span>
              <div className="receipt-badge">UNLIMITED FREE REFILLS</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
