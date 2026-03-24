'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { HeroData } from '@/types/home'

const ASSETS = {
  bgTexture: 'http://localhost:3845/assets/12f130da548ce0042ef94f1e7712ddfba089d2c0.png',
  laptopIllustration: '/images/hero-laptop.png',
  yellowCircle: 'http://localhost:3845/assets/27f60c0ff6bd9f1c8b3343e54fc4bc300663f555.svg',
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

interface HeroProps {
  data: HeroData
}

export function Hero({ data }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const illustY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={sectionRef}
      aria-label="Hero — Soluções de mídia, dados e inteligência territorial"
      className="relative overflow-hidden rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[50px] lg:rounded-br-[50px]"
      style={{
        minHeight: '480px',
        background: 'linear-gradient(35deg, rgb(0, 47, 67) 64.904%, rgb(0, 0, 0) 100%)',
      }}
    >
      {/* Dot-grid texture — parallax de fundo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <Image
          src={ASSETS.bgTexture}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
          unoptimized
        />
      </motion.div>

      {/* Layout */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[77px] w-full">

        {/* Mobile: coluna única */}
        <div className="flex flex-col lg:hidden pt-12 pb-8">
          <motion.h1
            className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white"
            style={{ fontSize: 'clamp(28px, 7vw, 40px)', lineHeight: 1.35 }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            {data.title}
          </motion.h1>

          <motion.p
            className="font-[family-name:var(--font-inter)] font-normal text-white mt-4 max-w-[498px]"
            style={{ fontSize: '14px', lineHeight: '24px' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
          >
            {data.subtitle}
          </motion.p>

          {/* Laptop mobile — centralizado abaixo do texto */}
          <div className="relative mt-8 mx-auto w-full max-w-[360px]">
            {/* Círculo amarelo mobile */}
            <motion.div
              className="absolute z-0"
              style={{ right: '8px', bottom: '30px' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { duration: 0.6, ease, delay: 0.9 },
                scale:   { duration: 0.6, ease, delay: 0.9 },
                y: { duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: 1.1 },
              }}
            >
              <Image src={ASSETS.yellowCircle} alt="" width={52} height={52} unoptimized aria-hidden="true" />
            </motion.div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, x: [0, 0, 0] }}
              transition={{
                opacity: { duration: 0.7, ease, delay: 0.6 },
                y: { duration: 0.7, ease, delay: 0.6 },
              }}
            >
              <Image
                src={ASSETS.laptopIllustration}
                alt="Dashboard de inteligência territorial"
                width={360}
                height={246}
                priority
                unoptimized
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Desktop: duas colunas */}
        <div className="hidden lg:flex items-center justify-between py-20 xl:py-28 gap-12">
          {/* Texto */}
          <motion.div
            className="flex flex-col justify-center flex-shrink-0 max-w-[538px]"
            style={{ y: textY }}
          >
            <motion.h1
              className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white"
              style={{ fontSize: '50.607px', lineHeight: '70.85px' }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
            >
              {data.title}
            </motion.h1>

            <motion.p
              className="font-[family-name:var(--font-inter)] font-normal text-white mt-8 max-w-[498px]"
              style={{ fontSize: '14.233px', lineHeight: '26.434px' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
            >
              {data.subtitle}
            </motion.p>
          </motion.div>

          {/* Ilustração desktop */}
          <motion.div
            className="flex-shrink-0 relative"
            style={{ width: '555px', height: '379px', y: illustY }}
          >
            <motion.div
              className="absolute z-0"
              style={{ right: '11px', bottom: '47px' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, y: [0, 14, 0] }}
              transition={{
                opacity: { duration: 0.6, ease, delay: 1 },
                scale:   { duration: 0.6, ease, delay: 1 },
                y: { duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: 1.2 },
              }}
            >
              <Image src={ASSETS.yellowCircle} alt="" width={78} height={78} unoptimized aria-hidden="true" />
            </motion.div>

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.8, ease, delay: 0.5 },
                x:       { duration: 0.8, ease, delay: 0.5 },
                y: { duration: 3.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: 1.4 },
              }}
            >
              <Image
                src={ASSETS.laptopIllustration}
                alt="Dashboard de inteligência territorial"
                width={555}
                height={379}
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
