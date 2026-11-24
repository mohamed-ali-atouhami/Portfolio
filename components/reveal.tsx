"use client"

import { motion, useReducedMotion } from "motion/react"

export function Reveal({
  children,
  className,
  style,
  delay = 0,
  duration = 0.6,
  y = 0,
  fromScale,
  hover,
  spring = false,
  hoverOnly = false,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  duration?: number
  y?: number
  fromScale?: number
  hover?: number
  spring?: boolean
  hoverOnly?: boolean
}) {
  const reduce = useReducedMotion()
  const skip = Boolean(reduce) || hoverOnly

  return (
    <motion.div
      className={className}
      style={style}
      initial={
        skip ? false : spring ? { scale: 0 } : { opacity: 0, y, scale: fromScale ?? 1 }
      }
      whileInView={skip ? undefined : spring ? { scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
      whileHover={hover ? { scale: hover } : undefined}
      viewport={{ once: false }}
      transition={
        spring && !reduce
          ? { type: "spring", stiffness: 100, duration: 0.8, delay }
          : { duration: reduce ? 0 : duration, delay: reduce ? 0 : delay }
      }
    >
      {children}
    </motion.div>
  )
}
