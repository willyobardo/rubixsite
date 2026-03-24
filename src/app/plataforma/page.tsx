import type { Metadata } from 'next'
import { getHomeData } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Plataforma Device Tracker',
  description:
    'Conheça o Device Tracker da Rubix: tecnologia que captura audiências baseadas em localização real, transformando território em campanhas programáticas de alta precisão.',
  alternates: { canonical: 'https://rubixdigital.com.br/plataforma' },
  openGraph: {
    title: 'Plataforma Device Tracker | Rubix',
    description:
      'Conheça o Device Tracker da Rubix: tecnologia que captura audiências baseadas em localização real, transformando território em campanhas programáticas de alta precisão.',
    url: 'https://rubixdigital.com.br/plataforma',
  },
}
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PlataformaHero } from '@/components/plataforma/PlataformaHero'
import { SplitSection } from '@/components/ui/SplitSection'
import { AnimateInView } from '@/components/ui/AnimateInView'
import Image from 'next/image'

const ICON_STAGE = '/figma/68ea1f33db7016f2e9f930c8d8d1c04c7d3a7f7f.svg'

const stages = [
  {
    number: 'Etapa 1',
    title: 'Captação segura de sinais móveis',
    body: 'Dispositivos com localização ativa são analisados de forma estruturada e compatível com boas práticas de governança.',
  },
  {
    number: 'Etapa 2',
    title: 'Inteligência territorial aplicada',
    body: 'Leitura de padrões de fluxo, presença e comportamento para transformar localização em contexto estratégico.',
  },
  {
    number: 'Etapa 3',
    title: 'Estruturação de audiência geolocalizada',
    body: 'Criação de públicos qualificados prontos para ativação em campanhas digitais multicanal.',
  },
]

export default async function PlataformaPage() {
  const data = await getHomeData()

  return (
    <>
      <Header />

      <div className="pt-[72px]">
        <main id="main-content">

          <PlataformaHero />

          {/* Seção destaque central */}
          <div className="mt-16 lg:mt-24">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px]">
              <AnimateInView>
                <h2
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.3 }}
                >
                  Transforme território em audiências qualificadas online.
                </h2>
              </AnimateInView>
            </div>
          </div>

          {/* Fonte qualificada */}
          <div className="mt-16 lg:mt-24">
            <SplitSection
              title="Fonte qualificada"
              description={
                <p>
                  Captação estruturada de sinais de localização móvel, com precisão, governança e validação
                  contínua.
                </p>
              }
              photoSrc="/figma/c5b0d4b8b5efa498d99b7a617b295fce7a39561f.png"
              photoAlt="Fonte qualificada — captação de sinais de localização móvel"
              photoSide="right"
            />
          </div>

          {/* Audiências exclusivas */}
          <div className="mt-16 lg:mt-24">
            <SplitSection
              title="Audiências exclusivas"
              description={
                <p>
                  Segmentação geolocalizada aplicada ao mercado, com construção de públicos qualificados a
                  partir de contexto real.
                </p>
              }
              photoSrc="/figma/48efad3e6a6659e75b3b7f02eecd4de3a309a7d3.png"
              photoAlt="Audiências exclusivas — segmentação geolocalizada"
              photoSide="left"
              mobilePhotoBottom
            />
          </div>

          {/* Campanhas mais eficientes */}
          <div className="mt-16 lg:mt-24">
            <SplitSection
              title="Campanhas mais eficientes"
              description={
                <p>
                  Conexão entre território e mídia programática, reduzindo dispersão e ampliando impacto
                  estratégico.
                </p>
              }
              photoSrc="/figma/9e546b46c40bcae6d4e1bea347ff731ed448690b.png"
              photoAlt="Campanhas mais eficientes — conexão entre território e mídia programática"
              photoSide="right"
            />
          </div>

          {/* Como a Rubix capta e estrutura essas audiências */}
          <section className="bg-brand-light mt-16 lg:mt-24">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px] py-16 lg:py-24">
              <AnimateInView>
                <h2
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center mb-12 lg:mb-16"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.3 }}
                >
                  Como a Rubix capta e estrutura essas audiências
                </h2>
              </AnimateInView>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {stages.map((stage, i) => (
                  <AnimateInView key={stage.number} delay={i * 0.15}>
                    <div className="flex flex-col gap-4">
                      <Image src={ICON_STAGE} alt="" width={60} height={60} unoptimized aria-hidden="true" />
                      <p
                        className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
                        style={{ fontSize: 'clamp(16px, 1.8vw, 22.56px)', lineHeight: 1.4 }}
                      >
                        {stage.number}
                      </p>
                      <h3
                        className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
                        style={{ fontSize: 'clamp(16px, 1.8vw, 22.56px)', lineHeight: 1.4 }}
                      >
                        {stage.title}
                      </h3>
                      <p
                        className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                        style={{ fontSize: 'clamp(14px, 1.5vw, 16.92px)', lineHeight: 1.8 }}
                      >
                        {stage.body}
                      </p>
                    </div>
                  </AnimateInView>
                ))}
              </div>
            </div>
          </section>

          {/* Milhões de dispositivos — dark gradient */}
          <section
            className="mt-16 lg:mt-24"
            style={{
              background: 'linear-gradient(31.97deg, rgb(0, 47, 67) 64%, rgb(0, 0, 0) 98%)',
            }}
          >
            <div className="w-full px-5 sm:px-8 lg:px-[76px] py-16 lg:py-24 flex flex-col items-center text-center">
              <AnimateInView>
                <h2
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-white"
                  style={{ fontSize: 'clamp(24px, 3.5vw, 37.926px)', lineHeight: 1.35, maxWidth: '900px' }}
                >
                  Milhões de dispositivos com localização ativa.
                </h2>
              </AnimateInView>
              <AnimateInView delay={0.15}>
                <p
                  className="font-[family-name:var(--font-inter)] font-normal text-brand-yellow mt-6"
                  style={{ fontSize: 'clamp(16px, 2.2vw, 28px)', lineHeight: 1.6, maxWidth: '860px' }}
                >
                  Dispositivos são qualificados com base em contexto, localização e comportamento registrado no
                  ambiente digital.
                </p>
              </AnimateInView>
            </div>
          </section>

          {/* Onde Rubix cria impacto */}
          <div className="mt-16 lg:mt-24 mb-16 lg:mb-24">
            <SplitSection
              title="Onde Rubix cria impacto?"
              description={
                <p>
                  Em estratégias que exigem precisão territorial, controle de investimento e inteligência
                  aplicada à tomada de decisão.
                </p>
              }
              photoSrc="/figma/ae1c2f509952031ec3c75738688692dd60374068.png"
              photoAlt="Onde a Rubix cria impacto — precisão territorial"
              photoSide="right"
              cta={{ label: 'Fale com a Rubix', href: '#contato' }}
            />
          </div>

        </main>
        <Footer data={data.footer} />
      </div>
    </>
  )
}
