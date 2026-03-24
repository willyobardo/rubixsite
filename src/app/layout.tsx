import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Manrope } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { Preloader } from '@/components/ui/Preloader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rubix — Soluções de mídia, dados e inteligência territorial',
  description:
    'Integramos leitura estratégica do território, inteligência de dados e mídia programática para gerar eficiência, controle e crescimento mensurável.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plusJakartaSans.variable} ${manrope.variable}`}
    >
      <body className="antialiased">
        <Preloader />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
