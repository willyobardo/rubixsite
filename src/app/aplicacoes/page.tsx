import type { Metadata } from 'next'
import { getHomeData } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Aplicações',
  description:
    'Veja como a Rubix atua no varejo, automotivo, turismo e mais setores com campanhas estratégicas baseadas em inteligência territorial e dados de localização.',
  alternates: { canonical: 'https://rubixdigital.com.br/aplicacoes' },
  openGraph: {
    title: 'Aplicações | Rubix',
    description:
      'Veja como a Rubix atua no varejo, automotivo, turismo e mais setores com campanhas estratégicas baseadas em inteligência territorial e dados de localização.',
    url: 'https://rubixdigital.com.br/aplicacoes',
  },
}
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AplicacoesHero } from '@/components/aplicacoes/AplicacoesHero'
import { SplitSection } from '@/components/ui/SplitSection'
import { AnimateInView } from '@/components/ui/AnimateInView'
import Image from 'next/image'

const ICONS = {
  default: 'http://localhost:3845/assets/68ea1f33db7016f2e9f930c8d8d1c04c7d3a7f7f.svg',
  leads: 'http://localhost:3845/assets/3c275ce3ee0779644ae7ee813d4e7f517a0730bc.svg',
}

const capabilities = [
  {
    icon: ICONS.default,
    title: 'Atração ao Ponto de Venda',
    body: 'Influencie consumidores no entorno físico das lojas, considerando presença competitiva e comportamento regional para gerar visitas incrementais.',
  },
  {
    icon: ICONS.leads,
    title: 'Impulsione Leads & Conversões',
    body: 'Amplie a geração de leads qualificados e conversões digitais utilizando inteligência territorial para qualificar audiência antes da ativação.',
  },
  {
    icon: ICONS.default,
    title: 'Brand Lift',
    body: 'Meça o impacto real de uma campanha publicitária a partir da percepção do consumidor, indo além de cliques ou visualizações.',
  },
  {
    icon: ICONS.default,
    title: 'Estratégias O2O',
    body: 'Conecte o mundo físico ao digital com ativação geolocalizada, ajustando timing, oferta e mensagem para gerar tráfego, vendas e impacto mensurável.',
  },
]

export default async function AplicacoesPage() {
  const data = await getHomeData()

  return (
    <>
      <Header />

      <div className="pt-[72px]">
        <main id="main-content">

          <AplicacoesHero />

          {/* Título central */}
          <div className="mt-16 lg:mt-24">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px]">
              <AnimateInView>
                <h2
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.3 }}
                >
                  Onde criar campanhas estratégicas com a Rubix
                </h2>
              </AnimateInView>
            </div>
          </div>

          {/* Varejo */}
          <div className="lg:mt-24">
            <SplitSection
              title="Varejo"
              description={
                <p>
                  Crie campanhas direcionadas para regiões de alta intenção de compra, considerando fluxo,
                  presença de concorrência e comportamento territorial para gerar visitas qualificadas e
                  aumento de vendas.
                </p>
              }
              photoSrc="http://localhost:3845/assets/7151ac1fd73812c11aef5e70da42568bf0c91e23.png"
              photoAlt="Aplicação Rubix para varejo"
              photoSide="right"
            />
          </div>

          {/* Automotivo */}
          <div className="lg:mt-24">
            <SplitSection
              title="Automotivo"
              description={
                <p>
                  Ative campanhas próximas a concessionárias, polos logísticos e regiões estratégicas,
                  qualificando audiência com base em deslocamento e comportamento regional.
                </p>
              }
              photoSrc="http://localhost:3845/assets/ad882487445f120642e680df0787f3f8ac28927c.png"
              photoAlt="Aplicação Rubix para automotivo"
              photoSide="left"
              mobilePhotoBottom
            />
          </div>

          {/* Turismo */}
          <div className="lg:mt-24">
            <SplitSection
              title="Turismo"
              description={
                <p>
                  Atraia visitantes para destinos específicos com segmentação territorial orientada por
                  fluxo, interesse e potencial de conversão.
                </p>
              }
              photoSrc="http://localhost:3845/assets/fb31b029a6de0901b989dc2ac42d8be755aeebfa.png"
              photoAlt="Aplicação Rubix para turismo"
              photoSide="right"
            />
          </div>

          {/* Oportunidades */}
          <div className="lg:mt-24">
            <SplitSection
              title="Oportunidades"
              description={
                <p>
                  Identifique regiões emergentes, eventos locais e oportunidades de mercado para ativar
                  campanhas no momento e local mais estratégicos.
                </p>
              }
              photoSrc="http://localhost:3845/assets/94bfe863c215a2de879eec0b9ad01c42b9bdf51d.png"
              photoAlt="Aplicação Rubix para oportunidades de mercado"
              photoSide="left"
              mobilePhotoBottom
            />
          </div>

          {/* Segundo título central */}
          <div className="mt-16 lg:mt-24">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px]">
              <AnimateInView>
                <h2
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.3 }}
                >
                  O que a Rubix entrega em cada campanha
                </h2>
              </AnimateInView>
            </div>
          </div>

          {/* Capabilities grid */}
          <section className="bg-brand-light mt-6 lg:mt-8 overflow-hidden">
            {/* Mobile: conteúdo com padding normal */}
            <div className="lg:hidden px-5 sm:px-8 py-16">
              <div className="grid grid-cols-2 gap-8">
                {capabilities.slice(0, 2).map((cap, i) => (
                  <AnimateInView key={cap.title} delay={i * 0.12}>
                    <div className="flex flex-col gap-4">
                      <Image src={cap.icon} alt="" width={60} height={60} unoptimized aria-hidden="true" />
                      <h3
                        className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
                        style={{ fontSize: 'clamp(15px, 4vw, 22.56px)', lineHeight: 1.4 }}
                      >
                        {cap.title}
                      </h3>
                      <p
                        className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                        style={{ fontSize: 'clamp(13px, 3.5vw, 16.92px)', lineHeight: 1.8 }}
                      >
                        {cap.body}
                      </p>
                    </div>
                  </AnimateInView>
                ))}
              </div>

              {/* Imagem entre as linhas — mobile */}
              <div className="my-8 relative overflow-hidden rounded-[20px]" style={{ aspectRatio: '600/480' }}>
                <Image
                  src="http://localhost:3845/assets/d8a5b660aecad0b641e40234eef4132a9a039117.png"
                  alt="Capacidades Rubix"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                {capabilities.slice(2, 4).map((cap, i) => (
                  <AnimateInView key={cap.title} delay={(i + 2) * 0.12}>
                    <div className="flex flex-col gap-4">
                      <Image src={cap.icon} alt="" width={60} height={60} unoptimized aria-hidden="true" />
                      <h3
                        className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
                        style={{ fontSize: 'clamp(15px, 4vw, 22.56px)', lineHeight: 1.4 }}
                      >
                        {cap.title}
                      </h3>
                      <p
                        className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                        style={{ fontSize: 'clamp(13px, 3.5vw, 16.92px)', lineHeight: 1.8 }}
                      >
                        {cap.body}
                      </p>
                    </div>
                  </AnimateInView>
                ))}
              </div>
            </div>

            {/* Desktop: grid à esquerda + imagem encostada na borda direita */}
            <div className="hidden lg:flex items-center">
              {/* Conteúdo com padding esquerdo da página */}
              <div className="flex-1 pl-[76px] pr-28 pt-[60px] pb-32 max-w-[820px]">
                <div className="grid grid-cols-2 gap-x-28 gap-y-16">
                  {capabilities.map((cap, i) => (
                    <AnimateInView key={cap.title} delay={i * 0.12}>
                      <div className="flex flex-col gap-4">
                        <Image src={cap.icon} alt="" width={60} height={60} unoptimized aria-hidden="true" />
                        <h3
                          className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy"
                          style={{ fontSize: '22.56px', lineHeight: 1.4 }}
                        >
                          {cap.title}
                        </h3>
                        <p
                          className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                          style={{ fontSize: '16.92px', lineHeight: 1.8 }}
                        >
                          {cap.body}
                        </p>
                      </div>
                    </AnimateInView>
                  ))}
                </div>
              </div>

              {/* Imagem encostada na borda direita */}
              <AnimateInView
                variant="fadeRight"
                className="relative flex-shrink-0 flex-1"
                style={{ height: '480px' }}
              >
                <div className="absolute inset-0 rounded-tl-[50px] rounded-bl-[50px] overflow-hidden">
                  <Image
                    src="http://localhost:3845/assets/d8a5b660aecad0b641e40234eef4132a9a039117.png"
                    alt="Capacidades Rubix"
                    fill
                    sizes="480px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </AnimateInView>
            </div>
          </section>

          {/* Onde Rubix cria impacto */}
          <div className="lg:mt-24 mb-16 lg:mb-24">
            <SplitSection
              title="Onde Rubix cria impacto?"
              description={
                <p>
                  Em estratégias que exigem precisão territorial, controle de investimento e inteligência
                  aplicada à tomada de decisão.
                </p>
              }
              photoSrc="http://localhost:3845/assets/361b2fe29cafdb314835110ffb379385932234aa.png"
              photoAlt="Onde a Rubix cria impacto — precisão territorial"
              photoSide="right"
              cta={{ label: 'Conheça a Rubix', href: '#contato' }}
            />
          </div>

        </main>
        <Footer data={data.footer} />
      </div>
    </>
  )
}
