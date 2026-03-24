'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

interface AnimateInViewProps {
  children: React.ReactNode
  variant?: keyof typeof variants
  delay?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
  /** fraction of element visible to trigger (default 0.15) */
  amount?: number
}

/**
 * Anima quando entra na viewport e reverte quando sai.
 * Funciona nos dois sentidos do scroll.
 */
export function AnimateInView({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.65,
  className,
  style,
  amount = 0.15,
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) setHasAnimated(true)
  }, [isInView])

  const v = variants[variant]
  const animateState = isInView ? 'visible' : hasAnimated ? 'hidden' : 'hidden'

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={v}
      initial="hidden"
      animate={animateState}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

/* ── Stagger container ──────────────────────────────────────────── */

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
  amount?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.12,
  delayChildren = 0.05,
  amount = 0.12,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: staggerDelay, delayChildren }}
    >
      {children}
    </motion.div>
  )
}

/* ── Stagger item ───────────────────────────────────────────────── */

interface StaggerItemProps {
  children: React.ReactNode
  variant?: keyof typeof variants
  className?: string
}

export function StaggerItem({ children, variant = 'fadeUp', className }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  )
}
