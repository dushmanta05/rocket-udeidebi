import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { MENU_ITEMS, type MenuItem } from '../data/menu'
import { KITCHEN_COPY, SECTIONS } from '../data/sections'
import { Pengu } from '../components/Pengu'
import { Hint, SectionHeader } from '../components/SectionHeader'

const copy = SECTIONS[10]

export function CloudKitchen() {
  const [order, setOrder] = useState<{ dish: MenuItem; ticket: number } | null>(null)

  const place = (dish: MenuItem) => {
    setOrder((prev) => ({ dish, ticket: (prev?.ticket ?? 100) + 1 }))
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 }, colors: ['#ffd27a', '#7ee2a8', '#8ec5ff'] })
  }

  return (
    <div className="section kitchen-section">
      <SectionHeader copy={copy} />

      <div className="kitchen-layout">
        <div className="chef-col">
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Pengu size={140} variant="chef" />
          </motion.div>
          <div className="speech-bubble">{KITCHEN_COPY.chefSays}</div>
        </div>

        <div className="menu-board">
          <div className="menu-list">
            {MENU_ITEMS.map((dish, idx) => (
              <motion.button
                key={dish.id}
                type="button"
                className={`menu-item ${order?.dish.id === dish.id ? 'ordered' : ''}`}
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
          <p className="menu-footer">{KITCHEN_COPY.footer}</p>
        </div>

        <div className="receipt-col">
          <div className="receipt-slot" />
          <AnimatePresence mode="wait">
            {order ? (
              <motion.div
                key={order.ticket}
                className="receipt"
                initial={{ clipPath: 'inset(0 0 100% 0)', y: -10 }}
                animate={{ clipPath: 'inset(0 0 0% 0)', y: 0 }}
                exit={{ y: 80, rotate: 8, opacity: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                <span className="receipt-title">{KITCHEN_COPY.receiptTitle}</span>
                <span className="receipt-ticket">#{order.ticket}</span>
                <span className="receipt-line">1 x {order.dish.name}</span>
                <span className="receipt-total">{KITCHEN_COPY.receiptTotal}</span>
                <span className="receipt-note">{KITCHEN_COPY.receiptNote}</span>
                <button type="button" className="ghost-btn small" onClick={() => setOrder(null)}>
                  {KITCHEN_COPY.receiptClose}
                </button>
              </motion.div>
            ) : (
              <motion.p key="empty" className="receipt-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {KITCHEN_COPY.receiptEmpty}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Hint>{copy.hint}</Hint>
    </div>
  )
}
