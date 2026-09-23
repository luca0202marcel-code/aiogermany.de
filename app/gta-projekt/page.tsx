import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Car, Crosshair, Mic, Shield, Skull, Users } from 'lucide-react'

export const metadata = {
  title: 'GTA Projekt | ALL IN ONE Germany',
  description: 'Das GTA Roleplay-Projekt von ALL IN ONE Germany mit Serverinformationen und Regelwerk.',
}

const sections = [
  { icon: Shield, label: '01–06', title: 'Grundregeln', rules: [
    ['Respekt & Verhalten', 'Behandle alle Spieler respektvoll. Beleidigungen, Diskriminierung, Mobbing, Trolling und absichtliche Provokation sind verboten.'],
    ['Realismus im RP', 'Spiele deinen Charakter glaubwürdig und halte dich an die Logik der Spielwelt. Unrealistisches Verhalten ohne RP-Grundlage ist nicht erlaubt.'],
    ['Meta-Gaming', 'Was dein Charakter nicht weiß, weiß dein Charakter nicht. Informationen aus Streams, Chats oder außerhalb des Spiels dürfen nicht im RP verwendet werden.'],
    ['Power-Gaming', 'Zwinge anderen Spielern keine Handlungen auf. Jede Situation muss fair ausgespielt werden und angemessene Reaktionsmöglichkeiten lassen.'],
    ['FailRP', 'Handlungen, die jede realistische Reaktion ignorieren, sind verboten. Dazu gehören unrealistisches Verhalten, absichtliches Trollen und das Ausnutzen der Spielmechanik.'],
    ['Bugusing & Exploits', 'Bugs und Glitches dürfen nicht ausgenutzt werden. Gefundene Fehler müssen dem Team gemeldet werden.'],
  ] },
  { icon: Crosshair, label: '07–08', title: 'RP Situationen', rules: [
    ['Combat Logging', 'Während laufender RP Situationen darf nicht disconnectet werden. Dazu zählen Schießereien, Polizeikontrollen, Verfolgungsjagden, Entführungen und Gespräche mit Teammitgliedern. Ein Disconnect schützt nicht vor Konsequenzen.'],
    ['Safezones', 'In Safezones herrscht absolutes RP-Verbot für Gewalt. Dazu gehören Krankenhaus, Polizeistationen und Lobbybereiche, Autohäuser sowie Spawnbereiche. Keine Schüsse, Entführungen oder Schlägereien.'],
  ] },
  { icon: Shield, label: '09–11', title: 'Polizei Regeln', rules: [
    ['Verhalten gegenüber der Polizei', 'Die Polizei muss realistisch behandelt werden. Dauerhafte grundlose Provokation ist verboten. Bei Kontrollen oder Verhaftungen ist vernünftiges RP zu führen.'],
    ['Cop Baiting', 'Absichtliches Provozieren der Polizei ohne RP-Hintergrund ist verboten. Beispiele: permanent vor Polizei driften, Beamte für Verfolgungen beleidigen oder dauerhaft Notrufe spammen.'],
    ['Geiselnahmen', 'Geiseln müssen realistisch behandelt werden. Eine Geisel darf nicht grundlos getötet werden. Für jede Geiselnahme muss ein nachvollziehbarer RP-Hintergrund vorhanden sein.'],
  ] },
  { icon: Skull, label: '12–15', title: 'Gang & Crime', rules: [
    ['New Life Regel', 'Nach deinem Tod vergisst dein Charakter die aktuelle Situation. Du darfst nicht direkt zurückkehren, keine Informationen verwenden und keine Racheaktionen starten.'],
    ['Schussankündigung', 'Vor einer Schießerei muss eine klare RP-Eskalation stattfinden. Direktes Schießen ohne RP-Hintergrund ist verboten.'],
    ['Überfälle', 'Überfälle müssen realistisches RP beinhalten: Kommunikation, Forderungen und angemessenes Verhalten. Reines Ausrauben ohne RP ist nicht erlaubt.'],
    ['Gang Regeln', 'Gangs dürfen keine kompletten Serverbereiche kontrollieren. Massives Random Töten oder Einschüchtern ohne RP ist verboten. Gangkriege müssen nachvollziehbar ausgespielt werden.'],
  ] },
  { icon: Car, label: '16–17', title: 'Fahrzeug Regeln', rules: [
    ['Fahrzeug RP', 'Fahrzeuge müssen realistisch genutzt werden. Unrealistisches Offroad-Fahren, absichtliches Rammen, Fahrzeuge von Bergen werfen und durch Menschenmengen rasen sind nicht erlaubt.'],
    ['Fahrzeugdiebstahl', 'Fahrzeuge dürfen nur mit RP-Hintergrund gestohlen werden. Neulinge dauerhaft auszurauben ist verboten.'],
  ] },
  { icon: Mic, label: '18–19', title: 'Voice & Kommunikation', rules: [
    ['Voice Chat Pflicht', 'Ein funktionierendes Mikrofon ist Pflicht. Soundboards, Earrape oder absichtliches Stören sind verboten.'],
    ['OOC Gespräche', 'OOC-Gespräche sind während RP-Situationen zu vermeiden. Klärt Probleme nach der Situation im Support.'],
  ] },
  { icon: Users, label: '20–22', title: 'Team & Roleplay Grundsatz', rules: [
    ['Team Entscheidungen', 'Entscheidungen des Teams sind zu respektieren. Diskussionen oder Beschwerden gehören ausschließlich in den Support-Bereich.'],
    ['Bugs & Exploits', 'Das Ausnutzen von Bugs oder Glitches ist streng verboten. Bugusing kann zum permanenten Ausschluss führen.'],
    ['Spaß am RP', 'Dieser Server basiert auf langfristigem und hochwertigem Roleplay. Gewinne sind nicht wichtiger als gutes RP. Spielt Situationen aus, gebt anderen Spielern Chancen und denkt an realistisches Verhalten.'],
  ] },
]

export default function GtaProjektPage() {
  return <main className="gta-page min-h-screen overflow-hidden bg-background text-foreground"><div className="stars" aria-hidden="true" /><div className="scanline" aria-hidden="true" />
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between border-b border-orange-400/20 px-5 py-5 lg:px-10"><Link href="/" className="team-back"><ArrowLeft size={16} /> Startseite</Link><span className="gta-kicker">AIO / GTA ROLEPLAY</span><a href="https://discord.gg/2ckjVFjs3w" className="gta-button" target="_blank" rel="noreferrer">Server beitreten <ArrowUpRight size={16} /></a></nav>
    <header className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-10 lg:pb-20 lg:pt-28"><p className="gta-eyebrow"><span className="gta-dot" /> GTA PROJEKT / SERVER ONLINE</p><h1 className="mt-6 max-w-5xl text-balance text-6xl font-black leading-[.86] tracking-[-.08em] sm:text-8xl lg:text-[9rem]">DEIN<br /><span className="gta-text">NÄCHSTES RP.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-orange-100/65">Eine neue Stadt. Neue Geschichten. Dein Charakter, deine Entscheidungen und ein Roleplay-Server, auf dem jede Situation zählt.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://discord.gg/2ckjVFjs3w" className="gta-button" target="_blank" rel="noreferrer">Discord öffnen <ArrowUpRight size={16} /></a><a href="#regelwerk" className="gta-outline">Regelwerk lesen</a></div></header>
    <section className="relative z-10 mx-auto grid max-w-7xl gap-3 px-5 pb-12 sm:grid-cols-3 lg:px-10"><div className="gta-stat"><b>01</b><span>SERVER</span><strong>GTA RP</strong></div><div className="gta-stat"><b>24/7</b><span>COMMUNITY</span><strong>LIVE RP</strong></div><div className="gta-stat"><b>22</b><span>REGELN</span><strong>FAIR PLAY</strong></div></section>
    <section id="regelwerk" className="relative z-10 mx-auto max-w-7xl px-5 pb-20 lg:px-10"><div className="gta-section-heading"><p className="gta-eyebrow">SERVER HANDBUCH</p><h2>REGELWERK<span>.</span></h2><p>Gutes Roleplay funktioniert nur, wenn alle dieselben Regeln kennen. Lies sie aufmerksam, bevor du den Server betrittst.</p></div><div className="gta-rules">{sections.map(({ icon: Icon, label, title, rules: group }) => <section className="gta-rule-section" key={title}><div className="gta-rule-heading"><Icon size={20} /><div><small>§ {label}</small><h3>{title}</h3></div></div><div className="gta-rule-grid">{group.map(([ruleTitle, text]) => <article key={ruleTitle}><h4>{ruleTitle}</h4><p>{text}</p></article>)}</div></section>)}</div>
      <section className="gta-penalties"><p className="gta-eyebrow">KONSEQUENZEN</p><h3>Strafen</h3><p>Je nach Regelbruch können Verwarnung, Kick, Temp Bann, permanenter Bann, Fraktionssperre oder Charakter Reset ausgesprochen werden. Das Team entscheidet situationsabhängig.</p></section>
    </section><footer className="relative z-10 mx-auto flex max-w-7xl flex-wrap gap-5 px-5 pb-10 text-xs text-orange-100/45 lg:px-10"><Link href="/">← Zur Startseite</Link><a href="https://discord.gg/2ckjVFjs3w" target="_blank" rel="noreferrer">Discord Community ↗</a></footer>
  </main>
}
