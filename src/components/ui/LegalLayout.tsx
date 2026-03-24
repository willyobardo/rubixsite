interface LegalLayoutProps {
  title: string
  children: React.ReactNode
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <section className="bg-brand-light">
      <div className="max-w-[860px] mx-auto px-5 sm:px-8 py-16 lg:py-24">
        <h1
          className="font-[family-name:var(--font-plus-jakarta)] font-semibold text-brand-navy mb-10"
          style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.3 }}
        >
          {title}
        </h1>
        <div
          className="font-[family-name:var(--font-inter)] font-normal text-brand-gray space-y-6"
          style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', lineHeight: '1.85' }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
