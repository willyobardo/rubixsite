import type { Metadata } from 'next'
import { getHomeData } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Leia a Política de Privacidade da Rubix e saiba como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais.',
  alternates: { canonical: 'https://rubixdigital.com.br/politica-de-privacidade' },
  openGraph: {
    title: 'Política de Privacidade | Rubix',
    description:
      'Leia a Política de Privacidade da Rubix e saiba como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais.',
    url: 'https://rubixdigital.com.br/politica-de-privacidade',
  },
}
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

export default async function PoliticaDePrivacidadePage() {
  const data = await getHomeData()

  return (
    <>
      <Header />
      <div className="pt-[72px]">
        <main id="main-content">
          <InnerPageHero
            title="Política de Privacidade"
            subtitle="A Rubix valoriza a transparência e o respeito à privacidade. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)."
            cta={{ label: 'Fale com a Rubix', href: '#contato' }}
            illustrationSrc="/figma/014ae966f22baa1fea5b563192e345025108e71c.png"
            illustrationAlt="Política de Privacidade Rubix"
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
                  <H2>Quem somos</H2>
                  <Body>
                    <p>A Rubix é uma operação especializada em mídia programática e inteligência territorial, integrante do ecossistema ZH3.</p>
                    <p><strong className="text-brand-navy">Endereço:</strong> Rio de Janeiro | São Paulo | Brasília | Fortaleza</p>
                    <p><strong className="text-brand-navy">Telefone:</strong> +55 (21) 98132-8475</p>
                    <p>Para assuntos relacionados à privacidade e proteção de dados, entre em contato pelo e-mail: <strong className="text-brand-navy">privacidade@rubix.digital</strong></p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Quais dados coletamos</H2>
                  <Body>
                    <p>Podemos coletar dados pessoais fornecidos diretamente pelo titular, tais como:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Nome completo</Li>
                      <Li>Empresa</Li>
                      <Li>Cargo</Li>
                      <Li>E-mail</Li>
                      <Li>Telefone</Li>
                      <Li>Informações enviadas em formulários</Li>
                    </ul>
                    <p className="mt-3">Também podemos coletar dados de navegação por meio de cookies e tecnologias semelhantes, conforme descrito na <a href="/politica-de-cookies" className="text-brand-navy underline">Política de Cookies</a>.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Como utilizamos os dados</H2>
                  <Body>
                    <p>Os dados pessoais podem ser utilizados para:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Responder solicitações enviadas pelo site</Li>
                      <Li>Realizar contato comercial ou institucional</Li>
                      <Li>Enviar comunicações relevantes</Li>
                      <Li>Melhorar a experiência digital</Li>
                      <Li>Cumprir obrigações legais e regulatórias</Li>
                    </ul>
                    <p className="mt-3">O tratamento é realizado com base nas hipóteses legais previstas na LGPD, incluindo consentimento, execução de contrato e legítimo interesse.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Compartilhamento de dados</H2>
                  <Body>
                    <p>A Rubix pode compartilhar dados pessoais com parceiros tecnológicos e fornecedores essenciais à operação, sempre observando princípios de segurança, confidencialidade e finalidade específica. A Rubix não comercializa dados pessoais.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Armazenamento e segurança</H2>
                  <Body>
                    <p>Adotamos medidas técnicas e organizacionais adequadas para proteger dados pessoais contra acesso não autorizado, perda, uso indevido ou divulgação indevida. Os dados são armazenados apenas pelo tempo necessário para cumprir as finalidades informadas ou obrigações legais.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Direitos do titular</H2>
                  <Body>
                    <p>Nos termos da LGPD, o titular pode:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Confirmar a existência de tratamento</Li>
                      <Li>Acessar seus dados</Li>
                      <Li>Solicitar correção de dados incompletos ou desatualizados</Li>
                      <Li>Solicitar anonimização, bloqueio ou exclusão</Li>
                      <Li>Revogar consentimento</Li>
                    </ul>
                    <p className="mt-3">Solicitações podem ser enviadas para: <strong className="text-brand-navy">privacidade@rubix.digital</strong></p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Retenção de dados</H2>
                  <Body>
                    <p>Os dados pessoais serão mantidos pelo período necessário ao cumprimento das finalidades para as quais foram coletados ou conforme exigido por obrigações legais.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Alterações nesta política</H2>
                  <Body>
                    <p>Esta Política de Privacidade poderá ser atualizada periodicamente para refletir alterações legais ou operacionais. Recomendamos que o usuário revise este documento regularmente.</p>
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
