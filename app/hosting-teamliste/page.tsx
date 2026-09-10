import { redirect } from 'next/navigation'
import { isHostingAuthenticated } from '@/lib/hosting-auth'
import HostingConsole from '@/components/hosting-console'
export default async function HostingPage(){ if(!(await isHostingAuthenticated())) redirect('/hosting-teamliste/login'); return <HostingConsole/> }
