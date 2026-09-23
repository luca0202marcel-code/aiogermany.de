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
      </section>
    </main>
  )
}
