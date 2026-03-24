'use client'

import { AnimateInView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateInView'
import type { TradingDeskData } from '@/types/home'

interface TradingDeskProps {
  data: TradingDeskData
}

export function TradingDesk({ data }: TradingDeskProps) {
  return (
    <section aria-labelledby="trading-desk-title" className="bg-brand-light py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px]">
        <AnimateInView variant="fadeUp" className="text-center mb-10 lg:mb-12">
          <h2
            id="trading-desk-title"
            className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)', lineHeight: 1.3 }}
          >
            {data.title}
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] font-normal text-brand-gray mt-4 mx-auto max-w-[680px]"
            style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: '1.8' }}
          >
            {data.subtitle}
          </p>
        </AnimateInView>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.features.map((feature, i) => (
            <StaggerItem key={i} variant="scaleUp">
              <div
                className="bg-brand-yellow rounded-[15px] flex items-center justify-center text-center px-6 py-8 lg:py-0"
                style={{ minHeight: '120px' }}
              >
                <p
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy whitespace-pre-line"
                  style={{ fontSize: 'clamp(16px, 2vw, 21.367px)', lineHeight: 1.35 }}
                >
                  {feature}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
