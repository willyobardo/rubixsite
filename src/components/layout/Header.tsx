'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'O que é Rubix', href: '/o-que-e' },
  { label: 'Como Funciona', href: '/como-funciona' },
  { label: 'Plataforma Device Tracker', href: '/plataforma' },
  { label: 'Aplicações', href: '/aplicacoes' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-light h-[72px] flex items-center">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Rubix — página inicial">
          <Image
            src="http://localhost:3845/assets/9acc9bc6f20bd07d46e3c894ddbcf15d793c8548.png"
            alt="Rubix"
            width={134}
            height={49}
            priority
            unoptimized
            className="w-[100px] lg:w-[134px] h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-manrope)] text-brand-navy text-base leading-normal hover:opacity-70 transition-opacity duration-150 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button — desktop */}
        <Link
          href="/contato"
          className="hidden lg:flex items-center justify-center bg-brand-yellow text-brand-navy font-[family-name:var(--font-manrope)] font-normal text-base h-[42px] px-5 whitespace-nowrap cursor-pointer hover:brightness-95 transition-all duration-150 min-w-[148px]"
          aria-label="Fale com a Rubix"
        >
          Fale com a Rubix
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-3 cursor-pointer -mr-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Nav — animated */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            className="lg:hidden absolute top-[72px] left-0 right-0 bg-brand-light border-t border-brand-gray/20 px-5 py-5 flex flex-col gap-1 shadow-lg"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-manrope)] text-brand-navy text-base py-3 border-b border-brand-gray/10 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setMenuOpen(false)}
              className="bg-brand-yellow text-brand-navy font-[family-name:var(--font-manrope)] font-semibold text-base text-center py-3 px-5 mt-3 rounded-sm"
            >
              Fale com a Rubix
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
