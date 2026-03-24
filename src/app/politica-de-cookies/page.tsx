import { getHomeData } from '@/lib/content'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { InnerPageHero } from '@/components/ui/InnerPageHero'
import { AnimateInView } from '@/components/ui/AnimateInView'

const cookieTypes = [
  {
    title: 'Descrição',
    body: 'Necessários para o funcionamento adequado do site. Permitem navegação segura, acesso a áreas restritas e execução de funcionalidades básicas. Esses cookies não podem ser desativados.',
  },
  {
    title: 'Desempenho',
    body: 'Coletam informações anônimas sobre como os visitantes utilizam o site, como páginas mais acessadas e tempo de permanência. Esses dados ajudam a melhorar continuamente a experiência do usuário.',
  },
  {
    title: 'Funcionais',
    body: 'Permitem lembrar preferências do usuário, como idioma ou região, proporcionando uma experiência personalizada.',
  },
  {
    title: 'Publicidade',
    body: 'Utilizados para oferecer anúncios mais relevantes e medir a eficácia de campanhas. Podem ser utilizados por parceiros de mídia e plataformas de análise.',
  },
]

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2"><span>–</span><span>{children}</span></li>
)

export default async function PoliticaDeCookiesPage() {
  const data = await getHomeData()

  return (
    <>
      <Header />
      <div className="pt-[72px]">
        <main id="main-content">
          <InnerPageHero
            title="Política de Cookies"
            subtitle="Este documento explica como a Rubix utiliza cookies e tecnologias semelhantes para melhorar sua experiência em nosso site. Você pode gerenciar suas preferências a qualquer momento."
            cta={{ label: 'Fale com a Rubix', href: '#contato' }}
          />

          {/* Entenda os tipos de cookies */}
          <section className="bg-brand-light">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-[76px] py-16 lg:py-24">
              <AnimateInView>
                <h2
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center mb-14"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.3 }}
                >
                  Entenda os tipos de cookies
                </h2>
              </AnimateInView>

              <div className="flex flex-col gap-8">
                {cookieTypes.map((item, i) => (
                  <AnimateInView key={item.title} delay={i * 0.1}>
                    <h3
                      className="font-[family-name:var(--font-inter)] font-bold text-brand-navy mb-3"
                      style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.4 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                      style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.85 }}
                    >
                      {item.body}
                    </p>
                  </AnimateInView>
                ))}
              </div>
            </div>
          </section>

          {/* Conteúdo — fundo cinza */}
          <section style={{ backgroundColor: '#d9d9d9' }}>
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-[76px] py-16 lg:py-24">
              <AnimateInView>
                <h2
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center mb-14"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.3 }}
                >
                  Conteúdo
                </h2>
              </AnimateInView>

              <div className="space-y-12">

                <AnimateInView delay={0.05}>
                  <h3
                    className="font-[family-name:var(--font-inter)] font-bold text-brand-navy mb-4"
                    style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.4 }}
                  >
                    O que são cookies
                  </h3>
                  <p
                    className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                    style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.85 }}
                  >
                    Cookies são pequenos arquivos de texto armazenados em seu navegador quando você visita um site. Eles permitem que o site reconheça seu dispositivo, memorize preferências e forneça funcionalidades essenciais. Cookies podem ser temporários (cookies de sessão) ou permanecer armazenados por determinado período (cookies persistentes).
                  </p>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <h3
                    className="font-[family-name:var(--font-inter)] font-bold text-brand-navy mb-4"
                    style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.4 }}
                  >
                    Tipos de cookies que utilizamos
                  </h3>
                  <div
                    className="font-[family-name:var(--font-inter)] font-normal text-brand-gray space-y-3"
                    style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.85 }}
                  >
                    <p>A Rubix pode utilizar cookies próprios e de terceiros para:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Garantir funcionamento técnico do site</Li>
                      <Li>Analisar desempenho e navegação</Li>
                      <Li>Personalizar conteúdo e preferências</Li>
                      <Li>Apoiar estratégias de mídia e mensuração de campanhas</Li>
                    </ul>
                  </div>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <h3
                    className="font-[family-name:var(--font-inter)] font-bold text-brand-navy mb-4"
                    style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.4 }}
                  >
                    Gerenciamento de preferências
                  </h3>
                  <p
                    className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                    style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.85 }}
                  >
                    Você pode gerenciar ou desativar cookies diretamente nas configurações do seu navegador. A desativação de determinados cookies pode impactar a experiência de navegação e algumas funcionalidades do site. Quando aplicável, também disponibilizamos ferramentas de consentimento para que você escolha quais categorias de cookies deseja permitir.
                  </p>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <h3
                    className="font-[family-name:var(--font-inter)] font-bold text-brand-navy mb-4"
                    style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.4 }}
                  >
                    Compartilhamento de dados
                  </h3>
                  <p
                    className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                    style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.85 }}
                  >
                    Determinados cookies podem ser operados por parceiros tecnológicos e plataformas de análise, sempre respeitando os limites legais e as boas práticas de segurança da informação. A Rubix não comercializa dados pessoais.
                  </p>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <h3
                    className="font-[family-name:var(--font-inter)] font-bold text-brand-navy mb-4"
                    style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.4 }}
                  >
                    Sua privacidade
                  </h3>
                  <p
                    className="font-[family-name:var(--font-inter)] font-normal text-brand-gray"
                    style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.85 }}
                  >
                    Para mais informações sobre como tratamos dados pessoais, consulte nossa{' '}
                    <a href="/politica-de-privacidade" className="text-brand-navy underline">
                      Política de Privacidade
                    </a>.
                  </p>
                </AnimateInView>

              </div>
            </div>
          </section>
        </main>
        <Footer data={data.footer} />
      </div>
    </>
  )
}
