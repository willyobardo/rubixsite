'use client'

import Image from 'next/image'
import { AnimateInView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateInView'
import type { ProcessesData } from '@/types/home'

const ICONS: Record<string, string> = {
  heart:    'http://localhost:3845/assets/134898efa677359e80894689c9f7135b904c65e5.svg',
  thumbsup: 'http://localhost:3845/assets/000ae333b14f269c69a8c5782721ec03fe6efc4f.svg',
  lifebuoy: 'http://localhost:3845/assets/9e47a6082f238352438729547825f383229220ed.svg',
}

interface ProcessesProps {
  data: ProcessesData
}

export function Processes({ data }: ProcessesProps) {
  return (
    <section aria-labelledby="processes-title" className="bg-brand-light py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px]">
        <AnimateInView variant="fadeUp">
          <h2
            id="processes-title"
            className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center mb-10 lg:mb-14"
            style={{ fontSize: 'clamp(24px, 4vw, 45.12px)', lineHeight: 1.3 }}
          >
            {data.title}
          </h2>
        </AnimateInView>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.15}>
          {data.items.map((item) => (
            <StaggerItem key={item.title} variant="fadeUp">
              <div className="flex flex-col gap-4">
                <div className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px]">
                  <Image
                    src={ICONS[item.icon]}
                    alt=""
                    width={60}
                    height={60}
                    unoptimized
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
                  style={{ fontSize: 'clamp(16px, 1.8vw, 21.367px)', lineHeight: 1.35 }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16.92px)', lineHeight: '1.65' }}
                >
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
