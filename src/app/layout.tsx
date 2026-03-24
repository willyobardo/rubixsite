import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Manrope } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { Preloader } from '@/components/ui/Preloader'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

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

const BASE_URL = 'https://rubixdigital.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Rubix — Soluções de mídia, dados e inteligência territorial',
    template: '%s | Rubix',
  },
  description:
    'Integramos leitura estratégica do território, inteligência de dados e mídia programática para gerar eficiência, controle e crescimento mensurável.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Rubix',
    title: 'Rubix — Soluções de mídia, dados e inteligência territorial',
    description:
      'Integramos leitura estratégica do território, inteligência de dados e mídia programática para gerar eficiência, controle e crescimento mensurável.',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rubix — Soluções de mídia, dados e inteligência territorial',
    description:
      'Integramos leitura estratégica do território, inteligência de dados e mídia programática para gerar eficiência, controle e crescimento mensurável.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rubix',
              url: 'https://rubixdigital.com.br',
              logo: 'https://rubixdigital.com.br/images/rubix-logo.png',
              description:
                'Integramos leitura estratégica do território, inteligência de dados e mídia programática para gerar eficiência, controle e crescimento mensurável.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-21-98132-8475',
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua Carvalho de Mendonça, 12',
                addressLocality: 'Rio de Janeiro',
                addressRegion: 'RJ',
                addressCountry: 'BR',
              },
              sameAs: [],
            }),
          }}
        />
        <Preloader />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <WhatsAppButton />
      </body>
    </html>
  )
}
