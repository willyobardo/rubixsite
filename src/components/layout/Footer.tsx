import Image from 'next/image'
import Link from 'next/link'
import type { FooterData } from '@/types/home'

const legalHrefs: Record<string, string> = {
  'Política de Privacidade': '/politica-de-privacidade',
  'Termos de Uso': '/termos-de-uso',
  'LGPD': '/lgpd',
  'Política de Cookies': '/politica-de-cookies',
}

const ASSETS = {
  instagram: '/icons/instagram.svg',
  linkedinVector: 'http://localhost:3845/assets/6a570c2acd5d51429500b3c652658fc0d618c8e8.svg',
  arrowCircle: 'http://localhost:3845/assets/6da23bbe7b12eb448871628e490385b7506adda6.svg',
  arrowIcon: 'http://localhost:3845/assets/9ab1b2c37fcc027bd8b54fbe880398bd6ebadbac.svg',
}

interface FooterProps {
  data: FooterData
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-brand-yellow" aria-label="Rodapé">
      <div
        className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[76px] flex flex-col"
        style={{ paddingTop: '48px', paddingBottom: '28px' }}
      >
        {/* Two-column main area */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16">

          {/* LEFT: social + address */}
          <div className="flex flex-col gap-6 lg:flex-shrink-0">
            {/* Social icons */}
            <div className="flex items-center gap-3" aria-label="Redes sociais">
              {/* Instagram */}
              <Link
                href="https://instagram.com"
                aria-label="Instagram da Rubix"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition-opacity duration-150"
              >
                <Image src={ASSETS.instagram} alt="Instagram" width={40} height={40} unoptimized />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn da Rubix"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition-opacity duration-150"
              >
                <div
                  className="relative rounded-full overflow-hidden flex items-center justify-center"
                  style={{ width: '40px', height: '40px', backgroundColor: '#2878b7' }}
                  aria-hidden="true"
                >
                  <div className="absolute" style={{ inset: '30% 30% 34.35% 32.5%' }}>
                    <Image src={ASSETS.linkedinVector} alt="" fill unoptimized />
                  </div>
                </div>
              </Link>
            </div>

            {/* Address block */}
            <div
              className="font-[family-name:var(--font-inter)] text-brand-navy"
              style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.6' }}
            >
              <p className="font-bold">Endereço</p>
              <p className="mt-1 font-normal">{data.address.cities}</p>

              <p className="font-bold mt-4">Telefone</p>
              <p className="mt-1 font-normal">{data.address.phone}</p>

              <p className="mt-4 font-normal">{data.address.email}</p>
            </div>
          </div>

          {/* RIGHT: legal links + Fale conosco */}
          <div className="flex flex-col justify-between gap-8 lg:pt-[64px] lg:w-[520px] lg:flex-shrink-0">
            {/* Legal links */}
            <nav aria-label="Links legais">
              <ul className="flex flex-col gap-1">
                {data.legal.map((item) => (
                  <li key={item}>
                    <Link
                      href={legalHrefs[item] ?? '#'}
                      className="font-[family-name:var(--font-inter)] font-bold text-brand-navy hover:underline"
                      style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.7' }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* "Fale conosco" pill button */}
            <div id="contato">
              <Link
                href="/contato"
                aria-label="Fale conosco"
                className="flex items-center justify-between border border-black rounded-full cursor-pointer hover:bg-black/5 transition-colors duration-150 w-full"
                style={{
                  maxWidth: '520px',
                  height: '60px',
                  paddingLeft: '24px',
                  paddingRight: '4px',
                  borderWidth: '1.203px',
                }}
              >
                <span
                  className="font-[family-name:var(--font-manrope)] font-normal text-brand-navy"
                  style={{ fontSize: 'clamp(15px, 1.8vw, 21.648px)', lineHeight: '1.55' }}
                >
                  {data.ctaLabel}
                </span>

                {/* Navy circle with arrow */}
                <div className="relative flex-shrink-0" style={{ width: '52px', height: '52px' }}>
                  <Image src={ASSETS.arrowCircle} alt="" fill unoptimized aria-hidden="true" />
                  <div className="absolute" style={{ inset: '29%' }}>
                    <Image src={ASSETS.arrowIcon} alt="" fill unoptimized aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="mt-8 pt-6 border-t border-black/10">
          <p
            className="font-[family-name:var(--font-manrope)] font-normal text-black"
            style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', lineHeight: 'normal' }}
          >
            <span>© 2026 </span>
            <strong className="font-bold">Rubix</strong>
            <span>. Todos os direitos reservados.</span>
            <br />
            <span>Uma empresa do ecossistema </span>
            <strong className="font-bold">ZH3/Brasiliana</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
