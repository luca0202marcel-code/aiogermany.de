import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, FileText, Scale, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Legal | ALL IN ONE Germany',
  description: 'Impressum, Datenschutz und Nutzungsbedingungen von ALL IN ONE Germany.',
}

const legalItems = [
  { href: '/legal/impressum', label: 'Impressum', eyebrow: '01 / Betreiber', text: 'Verantwortliche Angaben und Kontaktinformationen.', icon: Scale },
  { href: '/legal/datenschutz', label: 'Datenschutz', eyebrow: '02 / Privacy', text: 'Informationen zur Verarbeitung personenbezogener Daten.', icon: ShieldCheck },
  { href: '/legal/nutzungsbedingungen', label: 'Nutzungsbedingungen', eyebrow: '03 / Regeln', text: 'Die Regeln für unsere Community und Angebote.', icon: FileText },
]

export default function LegalHubPage() {
  return (
    <main className="team-page legal-hub min-h-screen overflow-hidden bg-background text-foreground">
      <div className="stars" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <nav className="team-page-nav relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <Link href="/" className="team-back"><ArrowLeft size={16} /> Startseite</Link>
        <span className="team-kicker">ALL IN ONE / LEGAL</span>
        <a href="https://discord.gg/KmVqZFBfSw" className="neon-button" target="_blank" rel="noreferrer">Discord <ArrowUpRight size={16} /></a>
      </nav>
      <header className="team-hero relative z-10 mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-10 lg:pb-16 lg:pt-28">
        <p className="eyebrow"><Scale size={14} /> Rechtliches</p>
        <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[.9] tracking-[-.07em] sm:text-8xl lg:text-[9rem]">LEGAL<br /><span className="neon-text">CENTER.</span></h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">Alle wichtigen Informationen zu Betreiber, Datenschutz und den Regeln unserer Community an einem Ort.</p>
      </header>
      <section className="relative z-10 mx-auto grid max-w-7xl gap-4 px-5 py-10 lg:grid-cols-3 lg:px-10 lg:py-16" aria-label="Rechtliche Dokumente">
        {legalItems.map(({ href, label, eyebrow, text, icon: Icon }) => (
          <Link href={href} key={href} className="legal-hub-card group">
            <div className="icon-box"><Icon size={21} /></div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[.18em] text-primary">{eyebrow}</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">{label}</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
            <span className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.12em] text-primary">Öffnen <ArrowUpRight size={15} /></span>
          </Link>
        ))}
      </section>
      <footer className="team-page-footer relative z-10 mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-5 pb-10 text-xs text-muted-foreground lg:px-10"><Link href="/">← Zur Startseite</Link><a href="https://discord.gg/KmVqZFBfSw" target="_blank" rel="noreferrer">Discord beitreten ↗</a></footer>
    </main>
  )
}
