import { getHomeData } from '@/lib/content'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ComoFuncionaHero } from '@/components/como-funciona/ComoFuncionaHero'
import { ComoFuncionaSteps } from '@/components/como-funciona/ComoFuncionaSteps'
import { SplitSection } from '@/components/ui/SplitSection'

export default async function ComoFuncionaPage() {
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

          <ComoFuncionaHero />

          {/* Módulo 1 — 5 etapas da metodologia */}
          <div className="lg:mt-24">
            <ComoFuncionaSteps />
          </div>

          {/* Módulo 2 — Processo claro. Governança. Performance. */}
          <div className="mt-16 lg:mt-24">
            <SplitSection
              id="cta-module-title"
              title="Processo claro. Governança. Performance."
              description={
                <p>
                  A Rubix integra inteligência territorial, dados e mídia programática em um fluxo
                  estruturado, onde cada decisão é orientada por contexto real e eficiência de investimento.
                </p>
              }
              photoSrc="/figma/384a2832f04f70a66485f7999e0d297bb3431f0e.png"
              photoAlt="Processo Rubix — governança e performance"
              photoSide="right"
              cta={{ label: 'Fale com a Rubix', href: '#contato' }}
            />
          </div>
        </main>

        <div className="h-16" aria-hidden="true" />
        <Footer data={data.footer} />
      </div>
    </>
  )
}
