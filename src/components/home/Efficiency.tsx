'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimateInView } from '@/components/ui/AnimateInView'
import type { EfficiencyData } from '@/types/home'

const PHOTO = 'http://localhost:3845/assets/b6feb4670071629b0544fb88a1a00f7828741301.png'
const ease = [0.25, 0.46, 0.45, 0.94] as const

interface EfficiencyProps {
  data: EfficiencyData
}

export function Efficiency({ data }: EfficiencyProps) {
  return (
    <section aria-labelledby="efficiency-title" className="bg-brand-light overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Texto */}
        <AnimateInView
          variant="fadeLeft"
          className="flex flex-col justify-center px-5 sm:px-8 lg:px-[80px] py-12 lg:py-16 w-full lg:w-[53.125%]"
        >
          <h2
            id="efficiency-title"
            className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
            style={{ fontSize: 'clamp(24px, 4vw, 48px)', lineHeight: 1.3, maxWidth: '555px' }}
          >
            {data.title}
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] font-normal text-brand-gray mt-5 lg:mt-6"
            style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.85', maxWidth: '513px' }}
          >
            {data.subtitle}
          </p>
          <Link
            href="#contato"
            className="mt-8 lg:mt-10 inline-flex items-center justify-center bg-brand-yellow text-brand-navy font-[family-name:var(--font-inter)] font-semibold cursor-pointer hover:brightness-95 transition-all duration-150 self-start"
            style={{
              height: '52px',
              padding: '0 24px',
              borderRadius: '3.16px',
              fontSize: 'clamp(14px, 1.5vw, 15.802px)',
              minWidth: '180px',
              boxShadow: '0px 0.79px 1.58px 0px rgba(0,0,0,0.05)',
            }}
          >
            {data.cta}
          </Link>
        </AnimateInView>

        {/* Foto */}
        <motion.div
          className="relative w-full lg:flex-1 overflow-hidden"
          style={{ minHeight: '280px' }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="absolute inset-0 lg:rounded-tl-[50px] lg:rounded-bl-[50px] overflow-hidden">
            <Image
              src={PHOTO}
              alt="Profissional trabalhando com múltiplos monitores"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
