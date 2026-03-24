import { getHomeData } from '@/lib/content'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SplitSection } from '@/components/ui/SplitSection'
import { ContatoHero } from '@/components/contato/ContatoHero'

export default async function ContatoPage() {
  const data = await getHomeData()

  return (
    <>
      <Header />
      <div className="pt-[72px]">
        <main id="main-content">

          {/* Hero com formulário */}
          <ContatoHero />

          {/* Contato direto */}
          <div className="mt-16 lg:mt-24">
            <SplitSection
              title="Contato direto"
              description={
                <>
                  <p>Se preferir, fale conosco pelos canais abaixo.</p>
                  <p><strong className="font-semibold text-brand-navy">Telefone:</strong> +55 (21) 98132-8475</p>
                  <p><strong className="font-semibold text-brand-navy">E-mail:</strong> contato@rubix.digital</p>
                  <p><strong className="font-semibold text-brand-navy">Endereço:</strong> Rua Carvalho de Mendonça, 12<br />Copacabana - Rio de Janeiro - RJ</p>
                </>
              }
              photoSrc="http://localhost:3845/assets/47aad91bae8c1d46d1605d9b497ec9b386b68952.png"
              photoAlt="Contato direto Rubix"
              photoSide="left"
            />
          </div>

          {/* Onde Rubix cria impacto? */}
          <div className="mt-16 lg:mt-24 mb-16 lg:mb-24">
            <SplitSection
              title="Onde Rubix cria impacto?"
              description={
                <p>
                  Em estratégias que exigem precisão territorial, controle de investimento e inteligência
                  aplicada à tomada de decisão.
                </p>
              }
              photoSrc="http://localhost:3845/assets/c989b541d54fd3d0994c2a89d86569233d823ff3.png"
              photoAlt="Onde a Rubix cria impacto — precisão territorial"
              photoSide="right"
              cta={{ label: 'Conheça a Rubix', href: '/' }}
            />
          </div>

        </main>
        <Footer data={data.footer} />
      </div>
    </>
  )
}
