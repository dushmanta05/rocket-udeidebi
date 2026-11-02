import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { MENU_ITEMS, MenuItem } from '../data/menu'
import { PenguinArt } from '../components/art/PenguinArt'

export function CloudKitchen() {
  const [activeSlip, setActiveSlip] = useState<MenuItem | null>(null)

  const handleOrder = (dish: MenuItem) => {
    setActiveSlip(dish)
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#10b981', '#3b82f6']
    })
  }

  return (
    <div className="section-container menu-section">
      <div className="section-header">
        <span className="chapter-badge gold-badge">🍳 5-Star Philanthropic Bistro 🍳</span>
        <h2 className="section-heading kitchen-heading">Penguin & Hippo Cloud Kitchen</h2>
        <p className="section-subtext kitchen-subtext">Click any delicacy to print your VIP token</p>
      </div>

      <div className="kitchen-stage-row">
        <div className="chef-side-col">
          <motion.div
            animate={{ rotate: [-2, 3, -2], y: [0, -6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="chef-penguin-wrap"
          >
            <PenguinArt size={190} chefHat={true} />
            <div className="speech-bubble">Food is free, hugs are unlimited! 🍳</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="chalkboard-menu-card"
        >
          <div className="chalkboard-frame-inner">
            <div className="menu-dishes-list">
              {MENU_ITEMS.map((dish) => (
                <motion.div
                  key={dish.id}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOrder(dish)}
                  className="chalk-dish-item"
                >
                  <div className="dish-main-info">
                    <span className="dish-name">{dish.name}</span>
                    <span className="dish-desc">{dish.description}</span>
                  </div>
                  <div className="chalk-price-badge">{dish.price}</div>
                </motion.div>
              ))}
            </div>

            <div className="chalkboard-footer-tag">
              DELIVERY: FREE • PAYMENT: REJECTED • OWNER: CANNOT SAY NO
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeSlip && (
          <motion.div
            initial={{ y: 80, opacity: 0, rotate: -3 }}
            animate={{ y: 0, opacity: 1, rotate: 1.5 }}
            exit={{ y: 80, opacity: 0 }}
            className="receipt-slip-banner"
          >
            <div className="slip-content">
              <span>🧾 TOKEN DISPENSED: <strong>{activeSlip.name}</strong></span>
              <span className="slip-cost">Total Billed: ₹0.00 (Settled by Generous Heart)</span>
            </div>
            <button className="slip-close-btn" onClick={() => setActiveSlip(null)}>✓ Grab Slip</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
