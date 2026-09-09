import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Shield } from 'lucide-react'
import { TeamDirectory } from '@/components/team-directory'

export const metadata = {
  title: 'Unser Team | ALL IN ONE Germany',
  description: 'Das Team hinter ALL IN ONE Germany.',
}

export default function UnserTeamPage() {
  return (
    <main className="team-page min-h-screen overflow-hidden bg-background text-foreground">
      <div className="stars" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <nav className="team-page-nav relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <Link href="/" className="team-back"><ArrowLeft size={16} /> Startseite</Link>
        <span className="team-kicker">ALL IN ONE / TEAM</span>
        <a href="https://aiogermany.de/join" className="neon-button" target="_blank" rel="noreferrer">Discord <ArrowUpRight size={16} /></a>
      </nav>
      <header className="team-hero relative z-10 mx-auto max-w-7xl px-5 pb-6 pt-16 lg:px-10 lg:pb-10 lg:pt-28">
        <p className="eyebrow"><Shield size={14} /> Die Menschen dahinter</p>
        <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[.9] tracking-[-.07em] sm:text-8xl lg:text-[9rem]">UNSER<br /><span className="neon-text">TEAM.</span></h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">Hinter jeder starken Community stehen Menschen mit Energie, Ideen und Verantwortung. Lerne die Rollen kennen, die ALL IN ONE Germany jeden Tag bewegen.</p>
        <div className="team-stat-row mt-10"><span><b>LIVE</b> Discord Sync</span><span><b>24/7</b> Support</span><span><b>1</b> Community</span></div>
      </header>
      <div className="team-sync-note relative z-10 mx-auto max-w-7xl px-5 pt-8 lg:px-10"><span className="team-live-status">● LIVE AUS DISCORD</span><span> Rollen werden über den Teamrollen-Kanal verwaltet.</span></div><div className="relative z-10"><TeamDirectory /></div>
      <footer className="team-page-footer relative z-10 mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-5 pb-10 text-xs text-muted-foreground lg:px-10"><Link href="/">← Zur Startseite</Link><a href="https://team.xn--teamgrn-s2a.de/" target="_blank" rel="noreferrer">Externe Team-Seite ↗</a><Link href="/legal">Legal</Link></footer>
    </main>
  )
}
