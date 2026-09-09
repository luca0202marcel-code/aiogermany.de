import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = { title: 'Datenschutz | ALL IN ONE Germany', description: 'Datenschutzerklärung von ALL IN ONE Germany.' }

export default function DatenschutzPage() {
  return <LegalPage eyebrow="Legal // 02" title="DATENSCHUTZ" intro="Datenschutzerklärung · Stand: 08.09.2026" sections={[
    { title: '1. Verantwortlicher', body: ['Hassuna Badaue', 'Kleinstraße 91', '45472 Mülheim an der Ruhr', 'Deutschland', 'E-Mail: aiogermany.socialmedia@gmail.com'] },
    { title: '2. Geltungsbereich', body: ['Diese Datenschutzerklärung gilt ausschließlich für die von uns betriebenen Discord-Angebote sowie für ausdrücklich zugehörige und entsprechend verlinkte Domains und Subdomains.', 'Für externe Webseiten und Dienste gelten die Datenschutzbestimmungen der jeweiligen Betreiber.'] },
    { title: '3. Welche Daten können verarbeitet werden?', body: ['Im Rahmen der Nutzung unseres Discord-Servers können insbesondere folgende Daten verarbeitet werden: Discord-Benutzername und Anzeigename, Discord-Nutzer-ID, Rollen und Berechtigungen, Server-Mitgliedschaft, Nachrichten und sonstige übermittelte Inhalte, Moderations- und Sanktionsdaten, Zeitpunkte bestimmter Aktionen, freiwillig bereitgestellte Informationen sowie technische Daten, soweit diese durch eingesetzte Dienste bereitgestellt werden.', 'Welche Daten tatsächlich verarbeitet werden, hängt von der Nutzung und den jeweils aktivierten Funktionen ab.'] },
    { title: '4. Zweck der Verarbeitung', body: ['Die Verarbeitung kann insbesondere erfolgen, um den Discord-Server zu betreiben, Moderation und Sicherheit zu gewährleisten, Regelverstöße zu bearbeiten, Spam und Missbrauch zu verhindern, Support bereitzustellen, technische Probleme zu untersuchen, Serverfunktionen bereitzustellen und gesetzliche Verpflichtungen zu erfüllen.'] },
    { title: '5. Discord', body: ['Für die Kommunikation und Bereitstellung des Servers wird Discord verwendet. Discord verarbeitet im Rahmen seiner eigenen Dienste personenbezogene Daten. Auf diese Verarbeitung haben wir nur begrenzten Einfluss. Für die Verarbeitung durch Discord gelten zusätzlich die Datenschutzbestimmungen von Discord.'] },
    { title: '6. Moderation und Logs', body: ['Zur Sicherheit und zum ordnungsgemäßen Betrieb können bestimmte Vorgänge protokolliert werden. Hierzu können insbesondere Verwarnungen, Timeouts, Kicks, Bans, Rollenänderungen und sonstige Moderationsvorgänge gehören. Eine Protokollierung erfolgt nur im Rahmen des jeweiligen Zwecks und der geltenden gesetzlichen Bestimmungen.'] },
    { title: '7. Speicherdauer', body: ['Personenbezogene Daten werden grundsätzlich nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.'] },
    { title: '8. Weitergabe', body: ['Eine Weitergabe personenbezogener Daten erfolgt grundsätzlich nur, wenn hierfür eine entsprechende rechtliche Grundlage besteht.'] },
    { title: '9. Rechte betroffener Personen', body: ['Betroffene Personen haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch, Datenübertragbarkeit, soweit anwendbar, und Widerruf einer erteilten Einwilligung.', 'Anfragen hierzu können an aiogermany.socialmedia@gmail.com gerichtet werden.'] },
    { title: '10. Beschwerderecht', body: ['Betroffene Personen haben das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.'] },
    { title: '11. Änderungen', body: ['Diese Datenschutzerklärung kann angepasst werden, wenn sich unsere Angebote, technischen Systeme oder rechtlichen Anforderungen ändern.'] },
  ]} />
}
