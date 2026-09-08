import Link from 'next/link'

type Section = { title: string; body: string[] }

export function LegalPage({ title, eyebrow, intro, sections }: { title: string; eyebrow: string; intro: string; sections: Section[] }) {
  return (
    <main className="legal-shell">
      <div className="stars" aria-hidden="true" />
      <header className="legal-header">
        <Link href="/" className="legal-brand">ALL IN <span>ONE</span> Germany</Link>
        <Link href="/" className="legal-back">← Zur Startseite</Link>
      </header>
      <article className="legal-card">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        <div className="legal-sections">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
        <div className="legal-note">Stand: September 2026 · ALL IN ONE Germany</div>
      </article>
    </main>
  )
}
