import type { Metadata } from 'next'
import { getHomeData } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Rubix — Soluções de mídia, dados e inteligência territorial',
  description:
    'Integramos leitura estratégica do território, inteligência de dados e mídia programática para gerar eficiência, controle e crescimento mensurável.',
  alternates: { canonical: 'https://rubixdigital.com.br' },
  openGraph: {
    title: 'Rubix — Soluções de mídia, dados e inteligência territorial',
    description:
      'Integramos leitura estratégica do território, inteligência de dados e mídia programática para gerar eficiência, controle e crescimento mensurável.',
    url: 'https://rubixdigital.com.br',
  },
}
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { TradingDesk } from '@/components/home/TradingDesk'
import { Territory } from '@/components/home/Territory'
import { Highlights } from '@/components/home/Highlights'
import { Efficiency } from '@/components/home/Efficiency'
import { Processes } from '@/components/home/Processes'
import { CtaBanner } from '@/components/home/CtaBanner'
import { AboutRubix } from '@/components/home/AboutRubix'

export default async function HomePage() {
  const data = await getHomeData()

  return (
    <>
      <Header />

      <div className="pt-[72px]">
        <main id="main-content">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-brand-yellow focus:text-brand-navy focus:px-4 focus:py-2 focus:rounded"
          >
            Pular para o conteúdo principal
          </a>

          <Hero data={data.hero} />

          <div className="mt-16 lg:mt-24">
            <TradingDesk data={data.tradingDesk} />
          </div>

          <div className="mt-16 lg:mt-24 mb-16 lg:mb-24">
            <Territory data={data.territory} />
          </div>

          <div className="mt-16 lg:mt-24 mb-16 lg:mb-24">
            <Highlights data={data.highlights} />
          </div>

          <div className="mt-16 lg:mt-24">
            <Efficiency data={data.efficiency} />
          </div>

          <div className="mt-16 lg:mt-24">
            <Processes data={data.processes} />
          </div>

          <div className="mt-16 lg:mt-24 mb-16 lg:mb-24">
            <CtaBanner data={data.ctaBanner} />
          </div>

          <div className="mt-16 lg:mt-24">
            <AboutRubix data={data.aboutRubix} />
          </div>
        </main>

        <div className="h-16" aria-hidden="true" />
        <Footer data={data.footer} />
      </div>
    </>
  )
}
