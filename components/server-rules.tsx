'use client'

import { Scale, ShieldCheck } from 'lucide-react'

const rules = [
  ['1', 'Respekt & Verhalten', 'Behandle alle Mitglieder fair und respektvoll. Beleidigungen, Mobbing, Belästigung, Diskriminierung, Hass und gezielte Provokationen sind verboten. Konflikte werden sachlich geklärt.'],
  ['2', 'Chat & Channels', 'Kein Spam, Flooding oder unnötiges Pingen. Nutze passende Channels, beachte Channel-Beschreibungen und halte Chats übersichtlich.'],
  ['3', 'Verbotene Inhalte', 'Keine NSFW- oder sexuellen Inhalte, extremistischen oder gewaltverherrlichenden Inhalte, illegalen oder gefährlichen Inhalte, Werbung ohne Zustimmung sowie Phishing, Schadsoftware oder Betrug.'],
  ['4', 'Voice-Chats', 'Kein Schreien, Trollen oder absichtliches Stören. Musikbots gehören in vorgesehene Channels. Lass andere ausreden und respektiere Gespräche.'],
  ['5', 'Namen & Profile', 'Keine beleidigenden oder unangemessenen Namen und Profilbilder. Keine Identitätsvortäuschung als Mitglieder oder Team.'],
  ['6', 'Sicherheit', 'Schütze deine Daten und die anderer. Teile keine privaten Informationen, verdächtigen Links oder Dateien. Regelverstöße bitte dem Team melden.'],
  ['7', 'Team & Maßnahmen', 'Den Anweisungen des Teams ist Folge zu leisten. Regelverstöße können je nach Schwere zu Verwarnung, Timeout, Mute, Kick oder Ban führen.'],
  ['8', 'Hab Spaß!', 'Spiele, chatte, lerne Leute kennen und respektiere andere. Gemeinsam machen wir ALL IN ONE Germany zu einem starken Zuhause.'],
] as const

export function ServerRules() {
  return (
    <section id="rules" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div><p className="eyebrow"><Scale size={14} /> Gemeinsam respektvoll</p><h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-6xl">Unser <span className="neon-text">Regelwerk.</span></h2><p className="mt-5 max-w-2xl text-pretty leading-7 text-muted-foreground">Damit unsere Community ein sicherer, respektvoller und angenehmer Ort bleibt, gelten folgende Regeln.</p></div>
        <ShieldCheck className="hidden text-primary md:block" size={52} />
      </div>
      <div className="rules-grid">{rules.map(([number, title, text]) => <article className="rule-card" key={number}><span className="rule-number">{number.padStart(2, '0')}</span><div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></article>)}</div>
      <p className="mt-8 border border-primary/25 bg-card/60 p-5 text-center text-sm font-semibold text-primary">Mit dem Betreten und Nutzen des Servers akzeptierst du dieses Regelwerk.</p>
    </section>
  )
}
