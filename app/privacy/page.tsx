import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = { title: 'Datenschutzerklärung | ALL IN ONE Germany', description: 'Datenschutzerklärung von ALL IN ONE Germany.' }

export default function PrivacyPage() {
  return <LegalPage eyebrow="Legal // 02" title="Datenschutzerklärung" intro="Der Schutz deiner persönlichen Daten ist uns wichtig. Hier erklären wir, welche Daten beim Besuch unserer Website verarbeitet werden." sections={[
    { title: '1. Verantwortlicher', body: ['Verantwortlich für die Datenverarbeitung im Zusammenhang mit diesem Angebot ist Vercel (vercel.com). Für Fragen zum Datenschutz kannst du unser Team über den Discord-Server erreichen: https://aiogermany.de/join'] },
    { title: '2. Besuch der Website', body: ['Beim Aufruf dieser Website können technisch notwendige Daten wie IP-Adresse, Zeitpunkt des Zugriffs, angeforderte Seite, Browsertyp und Betriebssystem verarbeitet werden. Diese Daten dienen dem sicheren und stabilen Betrieb der Website und werden nicht dazu verwendet, dich persönlich zu identifizieren.'] },
    { title: '3. Hosting und technische Dienste', body: ['Diese Website wird über Vercel gehostet. Beim Abruf der Website werden technisch erforderliche Verbindungsdaten an den Hosting-Anbieter übertragen. Die Verarbeitung erfolgt zur Bereitstellung, Sicherheit und Fehleranalyse des Angebots.', 'Wir verwenden Vercel Analytics nur in der Produktionsumgebung, um aggregierte Nutzungsdaten zur Verbesserung der Website zu erhalten.'] },
    { title: '4. Externe Links', body: ['Unsere Website enthält Links zu Discord und weiteren externen Angeboten. Beim Öffnen dieser Links gelten die Datenschutzbestimmungen der jeweiligen Anbieter. Wir haben keinen Einfluss auf deren Datenverarbeitung.'] },
    { title: '5. Cookies und lokale Speicherung', body: ['Wir setzen auf der öffentlichen Website keine nicht notwendigen Tracking-Cookies ein. Für einen geschützten Adminbereich können technisch notwendige Sitzungscookies verwendet werden.'] },
    { title: '6. Deine Rechte', body: ['Du hast im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch gegen bestimmte Verarbeitungen. Zur Ausübung deiner Rechte kannst du das Team über https://aiogermany.de/join kontaktieren.'] },
    { title: '7. Aktualisierung', body: ['Diese Datenschutzerklärung kann angepasst werden, wenn sich die Website oder rechtliche Anforderungen ändern. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.'] },
  ]} />
}
