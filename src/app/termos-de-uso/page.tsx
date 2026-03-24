import { getHomeData } from '@/lib/content'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { InnerPageHero } from '@/components/ui/InnerPageHero'
import { AnimateInView } from '@/components/ui/AnimateInView'

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-[family-name:var(--font-inter)] font-bold text-brand-navy mb-4"
    style={{ fontSize: 'clamp(18px, 2vw, 30px)', lineHeight: 1.4 }}
  >
    {children}
  </h2>
)

const Body = ({ children }: { children: React.ReactNode }) => (
  <div
    className="font-[family-name:var(--font-inter)] font-normal text-brand-gray space-y-3"
    style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.85 }}
  >
    {children}
  </div>
)

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2"><span>–</span><span>{children}</span></li>
)

export default async function TermosDeUsoPage() {
  const data = await getHomeData()

  return (
    <>
      <Header />
      <div className="pt-[72px]">
        <main id="main-content">
          <InnerPageHero
            title="Termos de Uso"
            subtitle="Estes Termos de Uso regulam o acesso e a utilização do site da Rubix. Ao navegar neste site, o usuário concorda com as condições descritas neste documento."
            cta={{ label: 'Fale com a Rubix', href: '#contato' }}
            illustrationSrc="http://localhost:3845/assets/c8e199364ab66d23d7097a45f33036201cb16bbf.png"
            illustrationAlt="Termos de Uso Rubix"
            illustrationWidth={780}
            illustrationHeight={480}
            circlePosition={{ left: 'calc(50% - 195px)', top: 'calc(50% - 39px)' }}
            mobileCirclePosition={{ left: 'calc(50% - 126px)', top: 'calc(50% - 26px)' }}
          />

          <section className="bg-brand-light">
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
                  <H2>Aceitação dos termos</H2>
                  <Body>
                    <p>Ao acessar e utilizar o site da Rubix, o usuário declara ter lido, compreendido e concordado com estes Termos de Uso. Caso não concorde com qualquer disposição aqui descrita, recomenda-se que não utilize o site.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Objeto do site</H2>
                  <Body>
                    <p>O site da Rubix tem caráter institucional e informativo, apresentando informações sobre serviços de mídia programática, inteligência territorial e soluções digitais. O conteúdo disponibilizado não constitui oferta vinculante ou proposta comercial formal.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Uso adequado</H2>
                  <Body>
                    <p>O usuário compromete-se a utilizar o site de forma lícita, ética e compatível com estes Termos. É vedado:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Utilizar o site para fins ilegais ou não autorizados</Li>
                      <Li>Praticar atos que comprometam a segurança ou funcionamento da plataforma</Li>
                      <Li>Tentar acessar áreas restritas sem autorização</Li>
                    </ul>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Propriedade intelectual</H2>
                  <Body>
                    <p>Todos os conteúdos do site, incluindo textos, marcas, logotipos, imagens, layouts e elementos gráficos, são de propriedade da Rubix ou utilizados sob licença. É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem autorização prévia e expressa.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Limitação de responsabilidade</H2>
                  <Body>
                    <p>A Rubix não se responsabiliza por:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Eventuais indisponibilidades temporárias do site</Li>
                      <Li>Danos decorrentes de uso inadequado da plataforma</Li>
                      <Li>Conteúdo de sites externos acessados por meio de links</Li>
                    </ul>
                    <p className="mt-3">O usuário reconhece que a navegação ocorre por sua conta e risco.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Links para terceiros</H2>
                  <Body>
                    <p>O site pode conter links para páginas externas. A Rubix não possui controle sobre o conteúdo ou práticas desses sites e não se responsabiliza por suas políticas ou informações.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Modificações</H2>
                  <Body>
                    <p>A Rubix pode atualizar estes Termos de Uso a qualquer momento, visando adequação legal ou aprimoramento do site. Recomenda-se que o usuário consulte esta página periodicamente.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Legislação aplicável</H2>
                  <Body>
                    <p>Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca do Rio de Janeiro - RJ para dirimir quaisquer controvérsias decorrentes da utilização do site.</p>
                  </Body>
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
