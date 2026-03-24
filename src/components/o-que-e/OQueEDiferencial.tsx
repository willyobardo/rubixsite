'use client'

import Image from 'next/image'
import { AnimateInView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateInView'

const ICON_ARROW = 'http://localhost:3845/assets/a9a02fcce0e3fd102f28905f13e5f4d28a8d93bc.svg'
const ICON_ARROW_ALT = 'http://localhost:3845/assets/1d43353685262cf7a16447779f0ce9da6c066c0f.svg'

const pillars = [
  { label: 'Leitura territorial\nestratégica', icon: ICON_ARROW },
  { label: 'Estruturação qualificada\nde audiência', icon: ICON_ARROW },
  { label: 'Ativação programática\nmulticanal', icon: ICON_ARROW },
  { label: 'Performance com\ngeração de insights', icon: ICON_ARROW_ALT },
]

export function OQueEDiferencial() {
  return (
    <section
      aria-labelledby="diferencial-title"
      className="mx-0 rounded-[15px] overflow-hidden"
      style={{
        background: 'linear-gradient(51.86deg, rgb(0, 47, 67) 64%, rgb(0, 0, 0) 98%)',
      }}
    >
      <div className="w-full px-5 sm:px-8 lg:px-[79px] py-12 lg:py-16 flex flex-col items-center justify-center">
        <AnimateInView variant="fadeUp">
          <h2
            id="diferencial-title"
            className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white text-center"
            style={{ fontSize: 'clamp(22px, 3.5vw, 37.926px)', lineHeight: 1.3, maxWidth: '900px' }}
          >
            O que diferencia a Rubix de uma trading desk tradicional?
          </h2>
        </AnimateInView>

        <AnimateInView variant="fadeUp" delay={0.1} className="mt-8 lg:mt-10 flex flex-col items-center gap-2 text-center">
          <p
            className="font-[family-name:var(--font-inter)] font-normal text-brand-yellow"
            style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: '1.7' }}
          >
            A Rubix opera como uma Trading Desk 2.0.
          </p>
          <p
            className="font-[family-name:var(--font-inter)] font-bold text-white"
            style={{ fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: '1.7' }}
          >
            Somos digital first, mas nosso pensamento é mais amplo
          </p>
          <p
            className="font-[family-name:var(--font-inter)] font-normal text-white max-w-[700px]"
            style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.8' }}
          >
            Integramos inteligência territorial, governança operacional e otimização contínua para estruturar campanhas mais eficientes. Nosso modelo combina:
          </p>
        </AnimateInView>

        <StaggerContainer className="mt-10 lg:mt-12 flex flex-wrap items-start justify-center gap-8 lg:gap-16">
          {pillars.map((pillar, i) => (
            <StaggerItem key={i} variant="fadeUp">
              <div className="flex items-start gap-3">
                <Image
                  src={pillar.icon}
                  alt=""
                  width={37}
                  height={37}
                  unoptimized
                  aria-hidden="true"
                  className="mt-1 flex-shrink-0"
                />
                <span
                  className="font-[family-name:var(--font-inter)] font-normal text-white whitespace-pre-line"
                  style={{ fontSize: 'clamp(18px, 2.2vw, 30px)', lineHeight: 1.5 }}
                >
                  {pillar.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
