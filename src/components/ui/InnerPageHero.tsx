'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const BG_TEXTURE = '/figma/12f130da548ce0042ef94f1e7712ddfba089d2c0.png'
const YELLOW_CIRCLE = '/figma/27f60c0ff6bd9f1c8b3343e54fc4bc300663f555.svg'
const ease = [0.25, 0.46, 0.45, 0.94] as const

interface InnerPageHeroProps {
  title: string
  subtitle?: string
  cta?: { label: string; href: string }
  gradient?: string
  illustrationSrc?: string
  illustrationAlt?: string
  illustrationWidth?: number
  illustrationHeight?: number
  circleLeft?: boolean
  circlePosition?: React.CSSProperties
  mobileCirclePosition?: React.CSSProperties
}

export function InnerPageHero({
  title,
  subtitle,
  cta,
  gradient = 'linear-gradient(37.59deg, rgb(0, 47, 67) 64.904%, rgb(0, 0, 0) 100%)',
  illustrationSrc,
  illustrationAlt = '',
  illustrationWidth = 482,
  illustrationHeight = 482,
  circleLeft = false,
  circlePosition,
  mobileCirclePosition,
}: InnerPageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const illustY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[50px] lg:rounded-br-[50px]"
      style={{ minHeight: '480px', background: gradient }}
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <Image src={BG_TEXTURE} alt="" fill sizes="100vw" className="object-cover" priority unoptimized />
      </motion.div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[77px] w-full">

        {illustrationSrc ? (
          <>
            {/* Mobile: coluna única */}
            <div className="flex flex-col lg:hidden pt-12 pb-8">
              <motion.h1
                className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white"
                style={{ fontSize: 'clamp(28px, 7vw, 40px)', lineHeight: 1.35 }}
                initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.3 }}
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p
                  className="font-[family-name:var(--font-inter)] font-normal text-white mt-4"
                  style={{ fontSize: '14px', lineHeight: '24px' }}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.5 }}
                >
                  {subtitle}
                </motion.p>
              )}
              {cta && (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.7 }}>
                  <Link href={cta.href}
                    className="mt-6 inline-flex items-center justify-center bg-brand-yellow text-brand-navy font-[family-name:var(--font-inter)] font-semibold cursor-pointer hover:brightness-95 transition-all duration-150"
                    style={{ height: '52px', padding: '0 24px', borderRadius: '3.16px', fontSize: '15px' }}
                  >
                    {cta.label}
                  </Link>
                </motion.div>
              )}
              <div className="relative mt-8 mx-auto w-full max-w-[540px]">
                <motion.div className="absolute z-0"
                  style={mobileCirclePosition ?? { left: 'calc(50% - 26px)', top: 'calc(50% - 26px)' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                  transition={{ opacity: { duration: 0.6, ease, delay: 0.9 }, scale: { duration: 0.6, ease, delay: 0.9 }, y: { duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: 1.1 } }}
                >
                  <Image src={YELLOW_CIRCLE} alt="" width={52} height={52} unoptimized aria-hidden="true" />
                </motion.div>
                <motion.div className="relative z-10"
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.6 }}
                >
                  <Image src={illustrationSrc} alt={illustrationAlt} width={540} height={540} priority unoptimized className="w-full h-auto" />
                </motion.div>
              </div>
            </div>

            {/* Desktop: duas colunas */}
            <div className="hidden lg:flex items-center justify-between py-20 xl:py-28 gap-12">
              <motion.div className="flex flex-col justify-center flex-shrink-0 max-w-[538px]" style={{ y: textY }}>
                <motion.h1
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white"
                  style={{ fontSize: '42.607px', lineHeight: '62px' }}
                  initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.3 }}
                >
                  {title}
                </motion.h1>
                {subtitle && (
                  <motion.p
                    className="font-[family-name:var(--font-inter)] font-normal text-white mt-8 max-w-[448px]"
                    style={{ fontSize: '14.233px', lineHeight: '26.434px' }}
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.5 }}
                  >
                    {subtitle}
                  </motion.p>
                )}
                {cta && (
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.7 }}>
                    <Link href={cta.href}
                      className="mt-10 inline-flex items-center justify-center bg-brand-yellow text-brand-navy font-[family-name:var(--font-inter)] font-semibold cursor-pointer hover:brightness-95 transition-all duration-150"
                      style={{ height: '61px', padding: '0 24px', borderRadius: '3.16px', fontSize: '15.802px', minWidth: '209px', boxShadow: '0px 0.79px 1.58px 0px rgba(0,0,0,0.05)' }}
                    >
                      {cta.label}
                    </Link>
                  </motion.div>
                )}
              </motion.div>

              <motion.div className="flex-shrink-0 relative" style={{ width: `${illustrationWidth}px`, height: `${illustrationHeight}px`, y: illustY }}>
                <motion.div className="absolute z-0" style={circlePosition ?? (circleLeft ? { left: '-20px', top: '80px' } : { right: '-20px', top: '80px' })}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: [0, 14, 0] }}
                  transition={{ opacity: { duration: 0.6, ease, delay: 1 }, scale: { duration: 0.6, ease, delay: 1 }, y: { duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: 1.2 } }}
                >
                  <Image src={YELLOW_CIRCLE} alt="" width={78} height={78} unoptimized aria-hidden="true" />
                </motion.div>
                <motion.div className="relative z-10"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
                  transition={{ opacity: { duration: 0.8, ease, delay: 0.5 }, x: { duration: 0.8, ease, delay: 0.5 }, y: { duration: 3.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: 1.4 } }}
                >
                  <Image src={illustrationSrc} alt={illustrationAlt} width={illustrationWidth} height={illustrationHeight} priority unoptimized style={{ width: `${illustrationWidth}px`, height: `${illustrationHeight}px`, objectFit: 'contain' }} />
                </motion.div>
              </motion.div>
            </div>
          </>
        ) : (
          /* Sem ilustração — coluna única centralizada à esquerda */
          <motion.div className="flex flex-col justify-center py-20 xl:py-28 max-w-[680px]" style={{ y: textY }}>
            <motion.h1
              className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white"
              style={{ fontSize: 'clamp(28px, 5vw, 50.607px)', lineHeight: 1.35 }}
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                className="font-[family-name:var(--font-inter)] font-normal text-white mt-6 max-w-[535px]"
                style={{ fontSize: 'clamp(14px, 1.5vw, 14.233px)', lineHeight: '1.85' }}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
            {cta && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.7 }}>
                <Link href={cta.href}
                  className="mt-8 inline-flex items-center justify-center bg-brand-yellow text-brand-navy font-[family-name:var(--font-inter)] font-semibold cursor-pointer hover:brightness-95 transition-all duration-150"
                  style={{ height: '61px', padding: '0 24px', borderRadius: '3.16px', fontSize: 'clamp(14px, 1.5vw, 15.802px)', minWidth: '209px', boxShadow: '0px 0.79px 1.58px 0px rgba(0,0,0,0.05)' }}
                >
                  {cta.label}
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
