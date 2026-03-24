'use client'

import Image from 'next/image'
import { AnimateInView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateInView'
import type { TerritoryData } from '@/types/home'

const ICON_ARROW = 'http://localhost:3845/assets/a9a02fcce0e3fd102f28905f13e5f4d28a8d93bc.svg'

interface TerritoryProps {
  data: TerritoryData
}

export function Territory({ data }: TerritoryProps) {
  return (
    <section
      aria-labelledby="territory-title"
      className="mx-0 rounded-[15px] overflow-hidden"
      style={{
        background: 'linear-gradient(39.44deg, rgb(0, 47, 67) 64%, rgb(0, 0, 0) 98%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[79px] py-12 lg:py-16 flex flex-col items-center justify-center">
        <AnimateInView variant="fadeUp">
          <h2
            id="territory-title"
            className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white text-center mb-4"
            style={{ fontSize: 'clamp(22px, 3.5vw, 37.926px)', lineHeight: 1.3 }}
          >
            {data.title}
          </h2>
        </AnimateInView>

        <AnimateInView variant="fadeUp" delay={0.1}>
          <p
            className="font-[family-name:var(--font-inter)] font-normal text-white text-center mb-10 lg:mb-12 max-w-[680px]"
            style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.8' }}
          >
            {data.subtitle}
          </p>
        </AnimateInView>

        <StaggerContainer className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
          {data.pillars.map((pillar, i) => (
            <StaggerItem key={i} variant="fadeUp">
              <div className="flex items-center gap-2 lg:gap-3">
                <Image
                  src={ICON_ARROW}
                  alt=""
                  width={28}
                  height={28}
                  unoptimized
                  aria-hidden="true"
                  className="lg:w-[37px] lg:h-[37px]"
                />
                <span
                  className="font-[family-name:var(--font-inter)] font-normal text-white"
                  style={{ fontSize: 'clamp(18px, 2.8vw, 32px)', lineHeight: 1.5 }}
                >
                  {pillar}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
