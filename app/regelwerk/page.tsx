import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Scale, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Regelwerk | ALL IN ONE Germany',
  description: 'Das Regelwerk der ALL IN ONE Germany Community.',
}

const rules = [
  ['01', 'Respekt & Verhalten', 'Behandle alle Mitglieder fair und respektvoll. Beleidigungen, Mobbing, Belästigung, Diskriminierung, Hass und gezielte Provokationen sind verboten. Konflikte werden sachlich geklärt.'],
  ['02', 'Chat & Channels', 'Kein Spam, Flooding oder unnötiges Pingen. Nutze passende Channels, beachte Channel-Beschreibungen und halte Chats übersichtlich.'],
  ['03', 'Verbotene Inhalte', 'Keine NSFW- oder sexuellen Inhalte, extremistischen oder gewaltverherrlichenden Inhalte, illegalen oder gefährlichen Inhalte, Werbung ohne Zustimmung sowie Phishing, Schadsoftware oder Betrug.'],
  ['04', 'Voice-Chats', 'Kein Schreien, Trollen oder absichtliches Stören. Musikbots gehören in vorgesehene Channels. Lass andere ausreden und respektiere Gespräche.'],
  ['05', 'Namen & Profile', 'Keine beleidigenden oder unangemessenen Namen und Profilbilder. Keine Identitätsvortäuschung als Mitglieder oder Team.'],
  ['06', 'Sicherheit', 'Schütze deine Daten und die anderer. Teile keine privaten Informationen, verdächtigen Links oder Dateien. Regelverstöße bitte dem Team melden.'],
  ['07', 'Team & Maßnahmen', 'Den Anweisungen des Teams ist Folge zu leisten. Regelverstöße können je nach Schwere zu Verwarnung, Timeout, Mute, Kick oder Ban führen.'],
  ['08', 'Hab Spaß!', 'Spiele, chatte, lerne Leute kennen und respektiere andere. Gemeinsam machen wir ALL IN ONE Germany zu einem starken Zuhause.'],
] as const

export default function RegelwerkPage() {
  return (
    <main className="team-page min-h-screen overflow-hidden bg-background text-foreground">
      <div className="stars" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <nav className="team-page-nav relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <Link href="/" className="team-back"><ArrowLeft size={16} /> Startseite</Link>
        <span className="team-kicker">ALL IN ONE / REGELWERK</span>
        <a href="https://discord.gg/KmVqZFBfSw" className="neon-button" target="_blank" rel="noreferrer">Discord <ArrowUpRight size={16} /></a>
      </nav>
      <header className="team-hero relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-10 lg:pb-14 lg:pt-28">
        <p className="eyebrow"><Scale size={14} /> Gemeinsam respektvoll</p>
        <h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[.9] tracking-[-.07em] sm:text-8xl lg:text-[9rem]">UNSER<br /><span className="neon-text">REGELWERK.</span></h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">Damit unsere Community ein sicherer, respektvoller und angenehmer Ort bleibt, gelten folgende Regeln.</p>
      </header>
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-16">
        <div className="rules-grid">{rules.map(([number, title, text]) => <article className="rule-card" key={number}><span className="rule-number">{number}</span><div><h2 className="font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div>
        <p className="mt-8 border border-primary/25 bg-card/60 p-5 text-center text-sm font-semibold text-primary"><ShieldCheck className="mr-2 inline-block" size={18} />Mit dem Betreten und Nutzen des Servers akzeptierst du dieses Regelwerk.</p>
      </section>
      <footer className="team-page-footer relative z-10 mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-5 pb-10 text-xs text-muted-foreground lg:px-10"><Link href="/">← Zur Startseite</Link><Link href="/unser-team">Unser Team</Link><Link href="/legal">Legal</Link></footer>
    </main>
  )
}
