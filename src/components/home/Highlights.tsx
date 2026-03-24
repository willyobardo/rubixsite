'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { AnimateInView, StaggerContainer, StaggerItem } from '@/components/ui/AnimateInView'
import type { HighlightsData } from '@/types/home'

/* ── Parsing do valor ─────────────────────────────────────────────
   Exemplos: "27%"  → { integer: 27,  decimals: 0, suffix: "%" }
             "3,5×" → { integer: 3.5, decimals: 1, suffix: "×" }
             "48%"  → { integer: 48,  decimals: 0, suffix: "%" }
──────────────────────────────────────────────────────────────────── */
function parseValue(raw: string) {
  const clean = raw.replace(/^\+\s*/, '')        // remove "+" inicial
  const match = clean.match(/^([\d]+[,.]?[\d]*)(.*)$/)
  if (!match) return { target: 0, decimals: 0, suffix: clean }

  const numStr = match[1].replace(',', '.')
  const target = parseFloat(numStr)
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  const suffix = match[2]
  return { target, decimals, suffix }
}

/* ── Componente contador ─────────────────────────────────────────── */
function CounterNumber({ raw }: { raw: string }) {
  const { target, decimals, suffix } = parseValue(raw)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const [display, setDisplay] = useState('0')
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Cancela animação anterior
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    if (!isInView) {
      setDisplay('0')
      return
    }

    const duration = 1400 // ms
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic: começa rápido, desacelera no final
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased

      const formatted = decimals > 0
        ? current.toFixed(decimals).replace('.', ',')
        : Math.round(current).toString()

      setDisplay(formatted)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [isInView, target, decimals])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

/* ── Seção principal ─────────────────────────────────────────────── */
interface HighlightsProps {
  data: HighlightsData
}

export function Highlights({ data }: HighlightsProps) {
  return (
    <section aria-labelledby="highlights-title" className="bg-brand-light py-8 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px]">
        <AnimateInView variant="fadeUp">
          <h2
            id="highlights-title"
            className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center mb-6 lg:mb-12"
            style={{ fontSize: 'clamp(24px, 4vw, 45.12px)', lineHeight: 1.3 }}
          >
            {data.title}
          </h2>
        </AnimateInView>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">
          {data.items.map((item, i) => (
            <StaggerItem key={i} variant="fadeUp">
              <div className="flex flex-col gap-4">
                {/* Círculo + valor animado */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center bg-brand-yellow rounded-full flex-shrink-0 overflow-hidden"
                    style={{ width: 'clamp(48px, 6vw, 64px)', height: 'clamp(48px, 6vw, 64px)' }}
                    aria-hidden="true"
                  >
                    <span
                      className="font-[family-name:var(--font-plus-jakarta)] font-bold text-brand-navy"
                      style={{ fontSize: 'clamp(28px, 4vw, 45px)', lineHeight: 1, marginTop: '-9px' }}
                    >
                      +
                    </span>
                  </div>
                  <p
                    className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
                    style={{ fontSize: 'clamp(28px, 4vw, 45px)', lineHeight: 1 }}
                    aria-label={item.value}
                  >
                    <CounterNumber raw={item.value} />
                  </p>
                </div>

                {/* Descrição */}
                <p
                  className="font-[family-name:var(--font-inter)] font-normal text-brand-gray max-w-[304px]"
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
