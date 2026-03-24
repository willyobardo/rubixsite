'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#002f43' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="font-[family-name:var(--font-plus-jakarta)] font-bold text-white"
            style={{ fontSize: '36px', letterSpacing: '-0.5px' }}
          >
            Rubix
          </motion.div>

          {/* Loading bar */}
          <div
            className="mt-8 overflow-hidden rounded-full"
            style={{ width: '120px', height: '2px', backgroundColor: 'rgba(255,255,255,0.15)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: '#fccc00' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
