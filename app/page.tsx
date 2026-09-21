import Link from 'next/link'

const legalLinks = [
  { href: '/legal/impressum', label: 'Impressum' },
  { href: '/legal/datenschutz', label: 'Datenschutz' },
  { href: '/legal/nutzungsbedingungen', label: 'Nutzungsbedingungen' },
]

export default function Page() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-glow" aria-hidden="true" />
      <section className="maintenance-content" aria-labelledby="maintenance-title">
        <p className="maintenance-kicker">aiogermany.de</p>
        <h1 id="maintenance-title">Website in Wartungsarbeiten</h1>
        <p className="maintenance-text">
          Unsere Website wird gerade überarbeitet. Wir sind bald wieder für euch da.
        </p>
        <nav className="maintenance-links" aria-label="Rechtliche Informationen">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </main>
  )
}
