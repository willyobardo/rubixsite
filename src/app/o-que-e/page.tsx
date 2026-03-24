import type { Metadata } from 'next'
import { getHomeData } from '@/lib/content'

export const metadata: Metadata = {
  title: 'O que é Rubix',
  description:
    'Entenda o que é a Rubix: uma plataforma que une inteligência territorial, dados e mídia programática para transformar localização em audiência qualificada.',
  alternates: { canonical: 'https://rubixdigital.com.br/o-que-e' },
  openGraph: {
    title: 'O que é Rubix',
    description:
      'Entenda o que é a Rubix: uma plataforma que une inteligência territorial, dados e mídia programática para transformar localização em audiência qualificada.',
    url: 'https://rubixdigital.com.br/o-que-e',
  },
}
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OQueEHero } from '@/components/o-que-e/OQueEHero'
import { OQueEDiferencial } from '@/components/o-que-e/OQueEDiferencial'
import { SplitSection } from '@/components/ui/SplitSection'

export default async function OQueEPage() {
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

          <OQueEHero />

          {/* Módulo 1 — Mídia sem contexto gera ineficiência */}
          <div className="lg:mt-24">
            <SplitSection
              id="modulo-1-title"
              title="Mídia sem contexto gera ineficiência."
              description={
                <p>
                  Campanhas que ignoram território, comportamento e dinâmica regional tendem a dispersar
                  investimento e reduzir impacto. A <strong className="font-bold text-brand-navy">Rubix</strong>{' '}
                  parte da leitura estratégica do território antes da ativação.
                </p>
              }
              photoSrc="http://localhost:3845/assets/96327171335251d48bb648085673fa745c4713da.png"
              photoAlt="Estratégia de mídia territorial Rubix"
              photoSide="right"
            />
          </div>

          {/* Módulo 2 — Operação estratégica (foto à esquerda, mobile: texto acima) */}
          <div className="lg:mt-24">
            <SplitSection
              id="modulo-2-title"
              title="Operação estratégica orientada por dados."
              description={
                <p>
                  Estruturamos audiências a partir de inteligência territorial integrada a dados comportamentais
                  e plataformas de mídia.
                  <br />
                  Cada decisão é orientada por análise e mensuração.
                </p>
              }
              photoSrc="http://localhost:3845/assets/48f466d693005c33c0c4392ab0b47d9bc7427f7c.png"
              photoAlt="Operação estratégica de dados Rubix"
              photoSide="left"
              mobilePhotoBottom
            />
          </div>

          {/* Módulo 3 — Território como ativo estratégico */}
          <div className="lg:mt-24">
            <SplitSection
              id="modulo-3-title"
              title="Território como ativo estratégico."
              description={
                <p>
                  Geografia não é apenas localização. É fluxo, presença, consumo, comportamento e oportunidade
                  de negócio. Transformamos esse contexto em inteligência aplicada à mídia.
                </p>
              }
              photoSrc="http://localhost:3845/assets/d7aa8a22d7cc2f8315913aae8540d3c0d0dcb15e.png"
              photoAlt="Inteligência territorial Rubix"
              photoSide="right"
            />
          </div>

          {/* Módulo 4 — O que diferencia a Rubix (full width) */}
          <div className="mt-16 lg:mt-24 mb-16 lg:mb-24">
            <OQueEDiferencial />
          </div>

          {/* Módulo 5 — Onde Rubix cria impacto */}
          <div className="mt-16 lg:mt-24">
            <SplitSection
              id="modulo-5-title"
              title={
                <>
                  Onde Rubix
                  <br />
                  cria impacto?
                </>
              }
              description={
                <p>
                  Em estratégias que exigem precisão territorial, controle de investimento e inteligência
                  aplicada à tomada de decisão.
                </p>
              }
              photoSrc="http://localhost:3845/assets/d923d11819c9faceccc1adfba97ed2845b47e50e.png"
              photoAlt="Impacto Rubix em estratégias de mídia"
              photoSide="right"
              cta={{ label: 'Nossas aplicações', href: '/aplicacoes' }}
            />
          </div>
        </main>

        <div className="h-16" aria-hidden="true" />
        <Footer data={data.footer} />
      </div>
    </>
  )
}
