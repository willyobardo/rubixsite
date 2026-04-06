export interface HeroData {
  title: string
  subtitle: string
}

export interface TradingDeskData {
  title: string
  subtitle: string
  features: string[]
}

export interface TerritoryData {
  title: string
  subtitle: string
  pillars: string[]
}

export interface HighlightItem {
  value: string
  description: string
}

export interface HighlightsData {
  title: string
  items: HighlightItem[]
}

export interface EfficiencyData {
  title: string
  subtitle: string
  cta: string
}

export interface ProcessItem {
  icon: 'heart' | 'thumbsup' | 'lifebuoy'
  title: string
  description: string
}

export interface ProcessesData {
  title: string
  items: ProcessItem[]
}

export interface CtaBannerData {
  title: string
  subtitle: string
  cta: string
}

export interface AboutRubixData {
  title: string
  subtitle: string
  cta: string
}

export interface FooterLocation {
  city: string
  address: string
  mapsUrl: string
}

export interface FooterData {
  address: {
    locations: FooterLocation[]
    phone: string
    email: string
  }
  legal: string[]
  copyright: string
  ctaLabel: string
}

export interface HomeData {
  hero: HeroData
  tradingDesk: TradingDeskData
  territory: TerritoryData
  highlights: HighlightsData
  efficiency: EfficiencyData
  processes: ProcessesData
  ctaBanner: CtaBannerData
  aboutRubix: AboutRubixData
  footer: FooterData
}
