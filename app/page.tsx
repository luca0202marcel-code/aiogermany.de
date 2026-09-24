import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team Blue | ALL IN ONE Germany',
  description: 'ALL IN ONE Germany wird zu Team Blue. Ein neues Kapitel für unsere Community.',
}

export default function Page() {
  return (
    <main className="announcement-page">
      <div className="announcement-glow" aria-hidden="true" />
      <article className="announcement-card" aria-labelledby="announcement-title">
        <p className="announcement-kicker">ALL IN ONE GERMANY // ANNOUNCEMENT</p>
        <p className="announcement-mark" aria-hidden="true">TB</p>
        <h1 id="announcement-title">ALL IN ONE Germany<br /><span>wird zu Team Blue.</span></h1>
        <p className="announcement-lead">Ein neues Kapitel beginnt – mit einem neuen Namen, einem neuen Auftreten und vielen neuen Ideen.</p>
        <div className="announcement-grid">
          <div><strong>Neuer Name</strong><span>Team Blue</span></div>
          <div><strong>Neue Identität</strong><span>Team Blue</span></div>
          <div><strong>Community</strong><span>Bleibt bestehen</span></div>
          <div><strong>Zukunft</strong><span>Neue Projekte & Ideen</span></div>
        </div>
        <div className="announcement-copy">
          <p>Keine Sorge: Unsere Community bleibt bestehen. Wir möchten weiterhin gemeinsam mit euch spielen, chatten, neue Leute kennenlernen und eine starke Community aufbauen.</p>
          <p>Wir bedanken uns bei allen, die ALL IN ONE Germany begleitet und unterstützt haben. Willkommen bei Team Blue.</p>
        </div>
        <p className="announcement-footer">Aus ALL IN ONE Germany wird Team Blue – gemeinsam starten wir in ein neues Kapitel.</p>
      </article>
    </main>
  )
}
