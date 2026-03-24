'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimateInView } from '@/components/ui/AnimateInView'

interface SplitSectionProps {
  id?: string
  title: React.ReactNode
  description: React.ReactNode
  photoSrc: string
  photoAlt: string
  photoSide?: 'left' | 'right'
  mobilePhotoBottom?: boolean
  cta?: { label: string; href: string }
  bg?: string
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function SplitSection({
  id,
  title,
  description,
  photoSrc,
  photoAlt,
  photoSide = 'right',
  mobilePhotoBottom = false,
  cta,
  bg = 'bg-brand-light',
}: SplitSectionProps) {
  const photoRoundedClass =
    photoSide === 'right'
      ? 'lg:rounded-tl-[50px] lg:rounded-bl-[50px]'
      : 'lg:rounded-tr-[50px] lg:rounded-br-[50px]'
  const photoX = photoSide === 'right' ? 60 : -60

  // Quando a foto está à direita, o texto alinha pelo lado direito da coluna (próximo à imagem)
  // Quando a foto está à esquerda, o texto alinha pelo lado esquerdo da coluna (próximo à imagem)
  const innerAlign =
    photoSide === 'right'
      ? 'lg:ml-auto lg:mr-[76px]'
      : 'lg:mr-auto lg:ml-[76px]'

  const textBlock = (
    <AnimateInView
      variant={photoSide === 'right' ? 'fadeLeft' : 'fadeRight'}
      className="flex flex-col justify-center px-5 sm:px-8 lg:px-0 py-12 lg:py-16 w-full lg:w-[53.125%]"
    >
      <div className={`w-full lg:max-w-[513px] ${innerAlign}`}>
        <h2
          id={id}
          className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
          style={{ fontSize: 'clamp(24px, 4vw, 48px)', lineHeight: 1.3 }}
        >
          {title}
        </h2>
        <div
          className="font-[family-name:var(--font-inter)] font-normal text-brand-gray mt-5 lg:mt-6"
          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.85' }}
        >
          {description}
        </div>
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 lg:mt-10 inline-flex items-center justify-center bg-brand-yellow text-brand-navy font-[family-name:var(--font-inter)] font-semibold cursor-pointer hover:brightness-95 transition-all duration-150 self-start"
            style={{
              height: '52px',
              padding: '0 24px',
              borderRadius: '4px',
              fontSize: 'clamp(15px, 1.6vw, 20px)',
              minWidth: '180px',
              boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)',
            }}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </AnimateInView>
  )

  const photoBlock = (
    <motion.div
      className="relative w-full lg:flex-1 overflow-hidden min-h-[280px] lg:min-h-[480px]"
      initial={{ opacity: 0, x: photoX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className={`absolute inset-0 ${photoRoundedClass} overflow-hidden`}>
        <Image
          src={photoSrc}
          alt={photoAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          unoptimized
        />
      </div>
    </motion.div>
  )

  // mobilePhotoBottom inverte a ordem no mobile: texto aparece antes da foto
  const mobileClass = mobilePhotoBottom ? 'flex-col-reverse lg:flex-row' : 'flex-col lg:flex-row'

  return (
    <section className={`${bg} overflow-hidden`}>
      <div className={`flex ${mobileClass} lg:items-stretch`}>
        {photoSide === 'right' ? (
          <>
            {textBlock}
            {photoBlock}
          </>
        ) : (
          <>
            {photoBlock}
            {textBlock}
          </>
        )}
      </div>
    </section>
  )
}
