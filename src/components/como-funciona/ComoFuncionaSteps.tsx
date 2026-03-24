'use client'

import Image from 'next/image'
import { AnimateInView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateInView'

const ELLIPSE = '/figma/ab9ec5274748bd859cfdbf0b076d87ed6839188e.svg'
const ICON_ARROW = '/figma/a9a02fcce0e3fd102f28905f13e5f4d28a8d93bc.svg'

const steps = [
  {
    number: '1',
    title: 'Diagnóstico',
    description:
      'Mapeamento de objetivos, território, presença competitiva e contexto de mercado. Entendimento claro do cenário antes da ativação.',
  },
  {
    number: '2',
    title: 'Estruturação de Audiência',
    description:
      'Construção de públicos qualificados com base em inteligência territorial, comportamento e dados estruturados.',
  },
  {
    number: '3',
    title: 'Ativação Programática',
    description:
      'Execução multicanal com controle de frequência, governança operacional e integração com as principais plataformas.',
  },
  {
    number: '4',
    title: 'Otimização Contínua',
    description:
      'Análise permanente de performance, ajustes estratégicos e requalificação de audiência conforme resultados.',
  },
  {
    number: '5',
    title: 'Resultados & Insights',
    description:
      'Mensuração estruturada, geração de inteligência e transformação de dados em direcionamento estratégico.',
  },
]

export function ComoFuncionaSteps() {
  return (
    <section aria-labelledby="steps-title" className="bg-brand-light">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[79px] py-8 lg:py-20">
        <AnimateInView variant="fadeUp" className="mb-10 lg:mb-14">
          <h2
            id="steps-title"
            className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
            style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', lineHeight: 1.3 }}
          >
            Nossa metodologia
          </h2>
        </AnimateInView>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {steps.map((step, i) => (
            <StaggerItem key={i} variant="fadeUp">
              <div className="flex flex-col gap-4">
                {/* Number badge + title row */}
                <div className="flex items-center gap-4">
                  {/* Yellow ellipse with number */}
                  <div className="relative flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                    <Image src={ELLIPSE} alt="" fill unoptimized aria-hidden="true" />
                    <span
                      className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-inter)] font-normal text-brand-navy"
                      style={{ fontSize: '18px', lineHeight: 1 }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Arrow icon + title */}
                  <div className="flex items-center gap-2">
                    <Image
                      src={ICON_ARROW}
                      alt=""
                      width={28}
                      height={28}
                      unoptimized
                      aria-hidden="true"
                      className="flex-shrink-0"
                    />
                    <span
                      className="font-[family-name:var(--font-inter)] font-normal text-brand-navy"
                      style={{ fontSize: 'clamp(18px, 2.2vw, 30px)', lineHeight: 1.4 }}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.85', maxWidth: '380px' }}
                >
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
