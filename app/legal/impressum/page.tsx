import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = { title: 'Impressum | ALL IN ONE Germany', description: 'Impressum von ALL IN ONE Germany.' }

export default function ImpressumPage() {
  return <LegalPage eyebrow="Legal // 01" title="IMPRESSUM" intro="Angaben gemäß § 5 DDG" sections={[
    { title: 'Verantwortlicher Betreiber', body: ['Hassuna Badaue', 'Kleinstraße 91', '45472 Mülheim an der Ruhr', 'Deutschland'] },
    { title: 'Kontakt', body: ['E-Mail: aiogermany.socialmedia@gmail.com'] },
    { title: 'Geltungsbereich', body: ['Dieses Impressum gilt ausschließlich für die ausdrücklich von uns betriebenen und entsprechend verlinkten Domains und Subdomains.', 'Wird dieses Impressum über einen „Impressum“-Link einer entsprechenden Domain oder Subdomain aufgerufen, gilt es für genau diesen jeweiligen Internetauftritt.', 'Für nicht ausdrücklich zu unserem Angebot gehörende Domains, Subdomains, Webseiten, Plattformen oder Angebote Dritter gilt dieses Impressum nicht.'] },
    { title: 'Haftung für Inhalte', body: ['Die Inhalte unserer Angebote werden nach bestem Wissen erstellt und gepflegt. Eine Haftung wird, soweit gesetzlich zulässig, ausgeschlossen. Zwingende gesetzliche Haftung bleibt hiervon unberührt.', 'Für Inhalte, die von Nutzern oder sonstigen Dritten erstellt oder veröffentlicht werden, sind wir nur im Rahmen der gesetzlichen Vorschriften verantwortlich.'] },
    { title: 'Haftung für externe Links', body: ['Unsere Angebote können Links zu externen Webseiten und Diensten Dritter enthalten. Auf deren Inhalte haben wir keinen vollständigen Einfluss. Für die Inhalte externer Angebote ist grundsätzlich der jeweilige Betreiber verantwortlich.', 'Sollten uns konkrete Rechtsverletzungen bekannt werden, werden entsprechende Inhalte bzw. Verweise im Rahmen der gesetzlichen Möglichkeiten geprüft und gegebenenfalls entfernt.'] },
  ]} />
}
