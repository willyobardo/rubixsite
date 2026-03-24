'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const BG_TEXTURE = 'http://localhost:3845/assets/12f130da548ce0042ef94f1e7712ddfba089d2c0.png'
const ILLUSTRATION = 'http://localhost:3845/assets/de625a0276f1ece4e40a6082e8e69a0520e982fe.png'
const ease = [0.25, 0.46, 0.45, 0.94] as const

const inputClass =
  'w-full h-[52px] px-4 bg-white border border-[#d6d3d1] font-[family-name:var(--font-inter)] text-brand-navy placeholder:text-[#292524]/40 focus:outline-none focus:border-brand-navy transition-colors duration-150'

const textareaClass =
  'w-full px-4 py-3 bg-white border border-[#d6d3d1] font-[family-name:var(--font-inter)] text-brand-navy placeholder:text-[#292524]/40 focus:outline-none focus:border-brand-navy transition-colors duration-150 resize-none'

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.replace(/(\d{0,2})/, '($1')
  if (digits.length <= 6) return digits.replace(/(\d{2})(\d{0,4})/, '($1) $2')
  if (digits.length <= 10) return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
}

export function ContatoHero() {
  const [phone, setPhone] = useState('')
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[50px] lg:rounded-br-[50px]"
      style={{ background: 'linear-gradient(37.59deg, rgb(0, 47, 67) 64.904%, rgb(0, 0, 0) 100%)' }}
    >
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <Image src={BG_TEXTURE} alt="" fill sizes="100vw" className="object-cover" priority unoptimized />
      </motion.div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[77px] w-full pt-16 lg:pt-20 pb-24 lg:pb-32">

        {/* Main title */}
        <motion.h1
          className="font-[family-name:var(--font-plus-jakarta)] font-bold text-white mb-10 lg:mb-14"
          style={{ fontSize: 'clamp(38px, 4vw, 52px)', lineHeight: 1.2 }}
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          Solicite um diagnóstico
        </motion.h1>

        {/* Two-column layout */}
        <motion.div
          className="flex flex-col lg:flex-row lg:gap-16 xl:gap-20"
          style={{ y: textY }}
        >
          {/* Left: context + illustration */}
          <div className="flex flex-col lg:flex-1">
            <motion.h2
              className="font-[family-name:var(--font-plus-jakarta)] font-bold text-white"
              style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.3 }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
            >
              Formulário<br />de contato
            </motion.h2>

            <motion.p
              className="font-[family-name:var(--font-inter)] font-normal text-white/80 mt-4 max-w-[420px]"
              style={{ fontSize: 'clamp(16px, 2.1vw, 27.07px)', lineHeight: 1.5 }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
            >
              Preencha as informações e nossa equipe entrará em contato para entender seus objetivos e apresentar a melhor abordagem estratégica.
            </motion.p>

            <motion.div
              className="hidden lg:block mt-8"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.7 }}
            >
              <Image
                src={ILLUSTRATION}
                alt="Formulário de contato"
                width={520}
                height={520}
                priority
                unoptimized
                className="w-full max-w-[520px]"
              />
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            className="lg:w-[553px] lg:flex-shrink-0 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            <form className="flex flex-col gap-5">

              <div>
                <label htmlFor="nome" className="block font-[family-name:var(--font-inter)] font-semibold text-white mb-2" style={{ fontSize: '14px' }}>
                  Nome completo *
                </label>
                <input
                  id="nome" name="nome" type="text" required
                  placeholder="Seu nome completo"
                  className={inputClass}
                  style={{ borderRadius: '8px', fontSize: '15px' }}
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block font-[family-name:var(--font-inter)] font-semibold text-white mb-2" style={{ fontSize: '14px' }}>
                  Empresa *
                </label>
                <input
                  id="empresa" name="empresa" type="text" required
                  placeholder="Nome da empresa"
                  className={inputClass}
                  style={{ borderRadius: '8px', fontSize: '15px' }}
                />
              </div>

              <div>
                <label htmlFor="cargo" className="block font-[family-name:var(--font-inter)] font-semibold text-white mb-2" style={{ fontSize: '14px' }}>
                  Cargo *
                </label>
                <input
                  id="cargo" name="cargo" type="text" required
                  placeholder="Seu cargo"
                  className={inputClass}
                  style={{ borderRadius: '8px', fontSize: '15px' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-[family-name:var(--font-inter)] font-semibold text-white mb-2" style={{ fontSize: '14px' }}>
                  E-mail corporativo *
                </label>
                <input
                  id="email" name="email" type="email" required
                  placeholder="seu@empresa.com"
                  className={inputClass}
                  style={{ borderRadius: '8px', fontSize: '15px' }}
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block font-[family-name:var(--font-inter)] font-semibold text-white mb-2" style={{ fontSize: '14px' }}>
                  Telefone *
                </label>
                <input
                  id="telefone" name="telefone" type="tel" required
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(maskPhone(e.target.value))}
                  className={inputClass}
                  style={{ borderRadius: '8px', fontSize: '15px' }}
                />
              </div>

              <div>
                <label htmlFor="objetivos" className="block font-[family-name:var(--font-inter)] font-semibold text-white mb-2" style={{ fontSize: '14px' }}>
                  Objetivos da campanha
                </label>
                <textarea
                  id="objetivos" name="objetivos" rows={4}
                  placeholder="Descreva os objetivos da sua campanha..."
                  className={textareaClass}
                  style={{ borderRadius: '8px', fontSize: '15px' }}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block font-[family-name:var(--font-inter)] font-semibold text-white mb-2" style={{ fontSize: '14px' }}>
                  Mensagem
                </label>
                <textarea
                  id="mensagem" name="mensagem" rows={4}
                  placeholder="Sua mensagem..."
                  className={textareaClass}
                  style={{ borderRadius: '8px', fontSize: '15px' }}
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 mt-1">
                <div className="relative flex-shrink-0 mt-1 w-6 h-6" style={{ borderRadius: '10px' }}>
                  <input
                    id="consent" name="consent" type="checkbox" required
                    className="peer absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                  />
                  <div className="absolute inset-0 border-2 border-white/60 peer-checked:bg-brand-yellow peer-checked:border-brand-yellow transition-colors duration-150" style={{ borderRadius: '10px' }} />
                  <svg className="absolute inset-0 m-auto w-3.5 h-3.5 text-brand-navy opacity-0 peer-checked:opacity-100 transition-opacity duration-150" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <label htmlFor="consent" className="font-[family-name:var(--font-inter)] font-normal text-white/80 cursor-pointer" style={{ fontSize: '20px', lineHeight: 1.5 }}>
                  Ao enviar este formulário, você concorda com nossa{' '}
                  <Link href="/politica-de-privacidade" className="font-semibold text-white hover:text-brand-yellow transition-colors">
                    Política de Privacidade
                  </Link>{' '}
                  e com o tratamento de dados conforme a LGPD.
                </label>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-brand-yellow text-brand-navy font-[family-name:var(--font-inter)] font-semibold cursor-pointer hover:brightness-95 transition-all duration-150"
                  style={{
                    height: '50px',
                    padding: '0 24px',
                    borderRadius: '3.51px',
                    fontSize: '20px',
                    minWidth: '200px',
                    boxShadow: '0px 0.877px 1.755px rgba(0,0,0,0.05)',
                  }}
                >
                  Enviar
                </button>
              </div>

            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
