'use client'

import Link from 'next/link'
import { AnimateInView } from '@/components/ui/AnimateInView'
import type { CtaBannerData } from '@/types/home'

interface CtaBannerProps {
  data: CtaBannerData
}

export function CtaBanner({ data }: CtaBannerProps) {
  return (
    <section
      aria-labelledby="cta-banner-title"
      className="w-full rounded-[15px] flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0"
      style={{
        minHeight: '300px',
        background: 'linear-gradient(35deg, rgb(0, 47, 67) 64%, rgb(0, 0, 0) 98%)',
      }}
    >
      <AnimateInView variant="fadeUp">
        <h2
          id="cta-banner-title"
          className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white"
          style={{ fontSize: 'clamp(20px, 3.5vw, 37.926px)', lineHeight: 1.35 }}
        >
          {data.title}
        </h2>
      </AnimateInView>

      <AnimateInView variant="fadeUp" delay={0.1}>
        <p
          className="font-[family-name:var(--font-inter)] font-normal text-white mt-5 lg:mt-6 max-w-[700px]"
          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.85' }}
        >
          {data.subtitle}
        </p>
      </AnimateInView>

      <AnimateInView variant="scaleUp" delay={0.2}>
        <Link
          href="#contato"
          className="mt-8 lg:mt-10 inline-flex items-center justify-center bg-brand-yellow text-brand-navy font-[family-name:var(--font-inter)] font-semibold cursor-pointer hover:brightness-95 transition-all duration-150"
          style={{
            height: '52px',
            padding: '0 28px',
            borderRadius: '3.16px',
            fontSize: 'clamp(14px, 1.5vw, 15.802px)',
            minWidth: '180px',
            boxShadow: '0px 0.79px 1.58px 0px rgba(0,0,0,0.05)',
          }}
        >
          {data.cta}
        </Link>
      </AnimateInView>
    </section>
  )
}
