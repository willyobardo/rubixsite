import type { Metadata } from 'next'
import { getHomeData } from '@/lib/content'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'LGPD',
  description:
    'Saiba como a Rubix atua em conformidade com a Lei Geral de Proteção de Dados (LGPD): tratamento, compartilhamento, segurança e direitos do titular.',
  alternates: { canonical: 'https://rubixdigital.com.br/lgpd' },
  openGraph: {
    title: 'LGPD | Rubix',
    description:
      'Saiba como a Rubix atua em conformidade com a Lei Geral de Proteção de Dados (LGPD): tratamento, compartilhamento, segurança e direitos do titular.',
    url: 'https://rubixdigital.com.br/lgpd',
  },
}
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

export default async function LgpdPage() {
  const data = await getHomeData()

  return (
    <>
      <Header />
      <div className="pt-[72px]">
        <main id="main-content">
          <section className="bg-brand-light">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-[76px] py-16 lg:py-24">

              <AnimateInView>
                <h1
                  className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy text-center mb-14"
                  style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.3 }}
                >
                  LGPD
                </h1>
              </AnimateInView>

              <div className="space-y-12">

                <AnimateInView delay={0.05}>
                  <H2>Compromisso com a proteção de dados</H2>
                  <Body>
                    <p>A Rubix atua em conformidade com a Lei nº 13.709/2018 - Lei Geral de Proteção de Dados (LGPD). Respeitamos a privacidade, a segurança e a transparência no tratamento de dados pessoais, adotando medidas técnicas e administrativas para proteger as informações sob nossa responsabilidade.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>O que é a LGPD?</H2>
                  <Body>
                    <p>A Lei Geral de Proteção de Dados regula o tratamento de dados pessoais no Brasil, estabelecendo regras sobre coleta, uso, armazenamento, compartilhamento e proteção dessas informações. A legislação aplica-se a qualquer operação realizada com dados pessoais, inclusive no ambiente digital.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Como a Rubix trata dados pessoais</H2>
                  <Body>
                    <p>A Rubix pode tratar dados pessoais nas seguintes situações:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Navegação no site institucional</Li>
                      <Li>Preenchimento de formulários de contato ou diagnóstico</Li>
                      <Li>Comunicação comercial ou institucional</Li>
                      <Li>Execução de contratos e propostas comerciais</Li>
                      <Li>Operações de mídia programática e inteligência territorial, quando aplicável</Li>
                    </ul>
                    <p className="mt-3">O tratamento é realizado sempre com base legal adequada, como consentimento, execução contratual ou legítimo interesse, conforme previsto na LGPD.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Princípios que seguimos</H2>
                  <Body>
                    <p>No tratamento de dados pessoais, observamos os princípios estabelecidos pela LGPD:</p>
                    <p><strong className="text-brand-navy">Finalidade:</strong> Utilizamos dados para propósitos legítimos e informados.</p>
                    <p><strong className="text-brand-navy">Adequação:</strong> O tratamento é compatível com as finalidades comunicadas ao titular.</p>
                    <p><strong className="text-brand-navy">Necessidade:</strong> Coletamos apenas os dados estritamente necessários.</p>
                    <p><strong className="text-brand-navy">Transparência:</strong> Disponibilizamos informações claras sobre como os dados são utilizados.</p>
                    <p><strong className="text-brand-navy">Segurança:</strong> Adotamos medidas técnicas e organizacionais para proteção contra acessos não autorizados ou incidentes.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Direitos do titular de dados</H2>
                  <Body>
                    <p>Nos termos da LGPD, o titular pode solicitar:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Confirmação da existência de tratamento</Li>
                      <Li>Acesso aos dados</Li>
                      <Li>Correção de dados incompletos ou desatualizados</Li>
                      <Li>Anonimização ou eliminação de dados desnecessários</Li>
                      <Li>Portabilidade dos dados</Li>
                      <Li>Revogação do consentimento</Li>
                      <Li>Informações sobre compartilhamento</Li>
                    </ul>
                    <p className="mt-3">As solicitações podem ser feitas pelos canais indicados abaixo.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Compartilhamento de dados</H2>
                  <Body>
                    <p>A Rubix poderá compartilhar dados pessoais com:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Plataformas de mídia e tecnologia</Li>
                      <Li>Fornecedores e parceiros operacionais</Li>
                      <Li>Autoridades públicas, quando exigido por lei</Li>
                    </ul>
                    <p className="mt-3">O compartilhamento ocorre apenas quando necessário e sempre respeitando os limites legais.</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Segurança da informação</H2>
                  <Body>
                    <p>Implementamos medidas de segurança técnicas e administrativas adequadas ao porte e à natureza das operações realizadas, visando proteger dados contra:</p>
                    <ul className="space-y-1 mt-2">
                      <Li>Acesso não autorizado</Li>
                      <Li>Alteração indevida</Li>
                      <Li>Vazamento</Li>
                      <Li>Destruição acidental ou ilícita</Li>
                    </ul>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Encarregado pelo tratamento de dados (DPO)</H2>
                  <Body>
                    <p>O Encarregado pelo tratamento de dados é o responsável por atuar como canal de comunicação entre a Rubix, os titulares de dados e a Autoridade Nacional de Proteção de Dados (ANPD). Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em contato:</p>
                    <p><strong className="text-brand-navy">E-mail:</strong> contato@rubixdigital.com.br</p>
                    <p><strong className="text-brand-navy">Telefone:</strong> +55 (21) 98132-8475</p>
                  </Body>
                </AnimateInView>

                <AnimateInView delay={0.05}>
                  <H2>Atualizações</H2>
                  <Body>
                    <p>Esta página poderá ser atualizada periodicamente para refletir mudanças legais ou operacionais. Recomendamos a consulta regular deste documento.</p>
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
