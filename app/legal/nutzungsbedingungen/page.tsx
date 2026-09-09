import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = { title: 'Nutzungsbedingungen | ALL IN ONE Germany', description: 'Nutzungsbedingungen von ALL IN ONE Germany.' }

export default function NutzungsbedingungenPage() {
  return <LegalPage eyebrow="Legal // 03" title="NUTZUNGSBEDINGUNGEN" intro="Stand: 08.09.2026" sections={[
    { title: '1. Geltungsbereich', body: ['Diese Nutzungsbedingungen gelten für unseren Discord-Server sowie für ausdrücklich zugehörige und entsprechend verlinkte Angebote und Subdomains.'] },
    { title: '2. Allgemeines Verhalten', body: ['Alle Mitglieder haben sich respektvoll und angemessen zu verhalten.', 'Untersagt sind insbesondere Beleidigungen und persönliche Angriffe, Mobbing und Belästigung, rassistische oder menschenverachtende Inhalte, diskriminierende Inhalte, Drohungen, Spam und Flooding, unerlaubte Werbung, Betrug und Täuschung, illegale Inhalte, pornografische bzw. nicht jugendfreie Inhalte, absichtliche Störung des Serverbetriebs, Ausnutzung von Sicherheitslücken sowie die unberechtigte Veröffentlichung personenbezogener Daten.'] },
    { title: '3. Discord-Regeln', body: ['Zusätzlich zu unseren Regeln gelten die jeweils gültigen Nutzungsbedingungen und Richtlinien von Discord.'] },
    { title: '4. Moderation', body: ['Das Moderationsteam ist berechtigt, bei Regelverstößen angemessene Maßnahmen zu ergreifen. Dazu können Verwarnungen, Löschung von Inhalten, Timeouts, Entzug von Berechtigungen, Kick, temporärer Ausschluss und dauerhafter Ausschluss gehören.'] },
    { title: '5. Kein Anspruch auf Mitgliedschaft', body: ['Es besteht grundsätzlich kein Anspruch auf Aufnahme oder dauerhafte Mitgliedschaft auf unserem Discord-Server. Zugänge, Rollen und Berechtigungen können im Rahmen der geltenden Regeln und gesetzlichen Bestimmungen eingeschränkt oder entzogen werden.'] },
    { title: '6. Nutzerinhalte', body: ['Für selbst veröffentlichte Inhalte ist grundsätzlich das jeweilige Mitglied verantwortlich. Es dürfen nur Inhalte veröffentlicht werden, deren Veröffentlichung rechtlich zulässig ist.'] },
    { title: '7. Werbung', body: ['Werbung, Einladungslinks und sonstige werbliche Inhalte sind nur erlaubt, wenn dies ausdrücklich durch die Serverregeln oder das Team gestattet wurde. Unerlaubte Direktnachrichten-Werbung ist untersagt.'] },
    { title: '8. Haftung', body: ['Die Nutzung unserer Angebote erfolgt im Rahmen der geltenden gesetzlichen Bestimmungen. Eine Haftung wird, soweit gesetzlich zulässig, ausgeschlossen. Zwingende gesetzliche Haftung bleibt hiervon unberührt.'] },
    { title: '9. Kontakt', body: ['Bei Fragen kann Kontakt aufgenommen werden: aiogermany.socialmedia@gmail.com'] },
    { title: '10. Änderungen', body: ['Diese Nutzungsbedingungen können angepasst werden, wenn dies aufgrund technischer, organisatorischer oder rechtlicher Änderungen erforderlich ist.'] },
  ]} />
}
