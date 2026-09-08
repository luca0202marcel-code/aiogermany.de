import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = { title: 'Nutzungsbedingungen | ALL IN ONE Germany', description: 'Nutzungsbedingungen von ALL IN ONE Germany.' }

export default function TosPage() {
  return <LegalPage eyebrow="Legal // 01" title="Nutzungsbedingungen" intro="Diese Nutzungsbedingungen regeln die Nutzung der Website und der Community-Angebote von ALL IN ONE Germany." sections={[
    { title: '1. Verantwortlicher und Geltungsbereich', body: ['Verantwortlich für dieses Webangebot ist Vercel (vercel.com). Mit der Nutzung unserer Website, des Discord-Servers und verbundener Angebote akzeptierst du diese Nutzungsbedingungen. Für die Nutzung des Discord-Servers gelten zusätzlich die dort veröffentlichten Serverregeln.'] },
    { title: '2. Verhalten in der Community', body: ['Alle Mitglieder verpflichten sich zu einem respektvollen und fairen Umgang. Verboten sind insbesondere Belästigung, Diskriminierung, Hassrede, Spam, Betrug sowie rechtswidrige Inhalte.', 'Den Anweisungen des Moderations- und Administrationsteams ist Folge zu leisten. Bei Verstößen können Inhalte entfernt, Zugänge eingeschränkt oder Accounts aus der Community ausgeschlossen werden.'] },
    { title: '3. Eigene Inhalte', body: ['Für Inhalte, die du in der Community veröffentlichst, bist du selbst verantwortlich. Du darfst keine Inhalte teilen, an denen du keine Rechte besitzt oder die gegen geltendes Recht verstoßen.', 'Mit dem Teilen von Inhalten räumst du ALL IN ONE Germany das einfache Recht ein, diese im Rahmen des Community-Angebots anzuzeigen.'] },
    { title: '4. Verfügbarkeit und Haftung', body: ['Wir bemühen uns um einen zuverlässigen Betrieb, können eine jederzeitige Verfügbarkeit jedoch nicht garantieren. Eine Haftung für Inhalte oder Angebote externer Plattformen, insbesondere Discord und verlinkter Websites, wird ausgeschlossen, soweit gesetzlich zulässig.'] },
    { title: '5. Änderungen', body: ['Diese Nutzungsbedingungen können angepasst werden, wenn dies aufgrund von Änderungen des Angebots oder der Rechtslage erforderlich ist. Die jeweils aktuelle Fassung wird auf dieser Seite veröffentlicht.'] },
    { title: '6. Kontakt', body: ['Bei Fragen zu diesen Bedingungen kannst du das Team über den Discord-Server kontaktieren: https://aiogermany.de/join'] },
  ]} />
}
