'use client'

import type { CSSProperties } from 'react'
import { ArrowRight, Gamepad2, Headphones, MessageCircle, ShieldCheck, Sparkles, Trophy, Users, Zap } from 'lucide-react'
import { ServerRules } from './server-rules'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1773985686342-RsrePuKvr7Eqsgm1VVblQ59ggLJlUeQSKtDqvLzhXRtXy2cS-1-Iouw2jZeCXsDZnsr2PLHpOXW7PPgER.gif'

const features = [
  { icon: Gamepad2, title: 'Gaming', text: 'Finde deine Squad, entdecke neue Games und starte direkt ins nächste Match.' },
  { icon: Headphones, title: 'Chat & Voice', text: 'Quatsch, spiel und connecte dich in unseren Text- und Sprachkanälen.' },
  { icon: Users, title: 'Community', text: 'Echte Menschen, offene Gespräche und ein Platz, an dem du dazugehören kannst.' },
  { icon: MessageCircle, title: 'Aktivitäten', text: 'Tic Tac Toe, Counting, Ratespiele und immer wieder neue Community-Momente.' },
  { icon: Trophy, title: 'Levelsystem', text: 'Sammle XP, steige auf und zeig deinen Fortschritt in der Rangliste.' },
  { icon: ShieldCheck, title: 'Sicher & respektvoll', text: 'Ein engagiertes Team, AutoMod und klare Regeln für ein gutes Miteinander.' },
]

export function CommunityLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="stars" aria-hidden="true" /><div className="scanline" aria-hidden="true" />
      <aside className="site-sidebar" aria-label="Seitennavigation"><a href="#top" className="sidebar-mark">AIO<span>.</span></a><nav><a href="#community">Community</a><a href="#features">Features</a><a href="/unser-team">Team</a><a href="#rules">Regeln</a><a href="#projects">Projekte</a></nav><a href="https://aiogermany.de/join" target="_blank" rel="noreferrer" className="sidebar-join">JOIN</a></aside>
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="ALL IN ONE Germany Startseite">
          <img src={logoUrl} alt="ALL IN ONE Germany Logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/60" />
          <span className="hidden font-mono text-sm font-bold tracking-[0.18em] sm:block">ALL IN <span className="text-primary">ONE</span></span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"><a href="#community" className="hover:text-primary">Community</a><a href="#features" className="hover:text-primary">Features</a><a href="/unser-team" className="hover:text-primary">Unser Team</a><a href="https://team.xn--teamgrn-s2a.de/" target="_blank" rel="noreferrer" className="hover:text-primary">Zum Team-Bereich</a><a href="#rules" className="hover:text-primary">Regelwerk</a><a href="#projects" className="hover:text-primary">Projekte</a></div>
        <a href="https://aiogermany.de/join" target="_blank" rel="noreferrer" className="neon-button hidden sm:inline-flex">Discord beitreten <ArrowRight size={16} /></a>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> EST. 2025 · DEINE COMMUNITY</p><h1 className="mt-6 text-balance text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-7xl lg:text-[7rem]">DEINE WELT.<br /><span className="neon-text">DEIN PLATZ.</span></h1><p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">Gaming, Unterhaltung, Austausch und gemeinsame Projekte. ALL IN ONE Germany verbindet Menschen, Interessen und Ideen.</p><div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="https://aiogermany.de/join" target="_blank" rel="noreferrer" className="neon-button justify-center">Jetzt beitreten <ArrowRight size={18} /></a><a href="#features" className="outline-button justify-center">Community entdecken <span>↓</span></a></div></div>
        <div className="logo-stage"><div className="logo-halo" /><img src={logoUrl} alt="Leuchtendes ALL IN ONE Germany Community Logo" className="relative z-10 w-full max-w-[27rem] rounded-full object-cover" /><div className="logo-caption"><span>ALL IN ONE</span><small>Eine Community. Unendlich viele Interessen.</small></div></div>
      </section>

      <section id="community" className="relative z-10 border-y border-primary/20 bg-card/40 px-5 py-7 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between"><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">ALL IN ONE GERMANY // ONLINE</p><div className="flex flex-wrap gap-6 text-sm text-muted-foreground"><span><b className="text-foreground">24/7</b> aktiv</span><span><b className="text-foreground">4</b> Welten</span><span><b className="text-foreground">1</b> Zuhause</span></div></div></section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32"><div className="mb-14 max-w-2xl"><p className="eyebrow"><Sparkles size={14} /> Was dich erwartet</p><h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-6xl">Alles, was du suchst.<br /><span className="text-primary">An einem Ort.</span></h2></div><div className="feature-grid">{features.map(({ icon: Icon, title, text }, index) => <article key={title} className="feature-card" style={{ '--delay': `${index * 80}ms` } as CSSProperties}><div className="icon-box"><Icon size={21} /></div><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></section>

      <ServerRules />

      <section id="projects" className="relative z-10 mx-5 mb-16 overflow-hidden rounded-[2rem] border border-primary/50 bg-card px-7 py-12 shadow-[0_0_70px_rgba(0,183,255,.16)] sm:px-12 lg:mx-auto lg:max-w-7xl lg:px-16 lg:py-16"><div className="absolute right-10 top-10 text-primary/20"><Zap size={100} /></div><div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="eyebrow">Gemeinsam mehr</p><h2 className="mt-5 max-w-2xl text-balance text-4xl font-black tracking-tight sm:text-6xl">Deine Idee.<br /><span className="neon-text">Unser Projekt.</span></h2></div><div className="max-w-sm"><p className="text-sm leading-7 text-muted-foreground">Du hast eine Idee? Finde Gleichgesinnte, starte dein Projekt und mach ALL IN ONE Germany zu deinem Zuhause.</p><a href="https://aiogermany.de/join" target="_blank" rel="noreferrer" className="neon-button mt-7">Werde Teil davon <ArrowRight size={18} /></a></div></div></section>
      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-5 pb-10 text-xs text-muted-foreground lg:px-10"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><span className="font-mono">© 2025 ALL IN ONE Germany</span><span>Ein Platz für jeden, jederzeit und überall.</span></div><nav aria-label="Footer-Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-primary/15 pt-5"><a href="https://aiogermany.de/join" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">Discord beitreten →</a><a href="https://team.xn--teamgrn-s2a.de/" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">Team-Seite →</a><a href="https://aiogermany.de/admin" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary">Admin-Dashboard →</a><a href="/legal" className="text-foreground hover:text-primary">Legal →</a></nav></footer>
    </main>
  )
}

export function FeatureCheck() { return null }
export function MessageIcon() { return <MessageCircle size={20} /> }
export function ZapIcon() { return <Zap size={20} /> }
