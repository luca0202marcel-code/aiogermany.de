import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { listTeamMembers } from './actions'
import { AdminMembers } from '@/components/admin-members'

export default async function AdminPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/admin/sign-in')
  const members = await listTeamMembers()
  return <main className="admin-shell"><div className="admin-topbar"><div><p className="eyebrow">ALL IN ONE · CONTROL ROOM</p><h1>Team Dashboard</h1><p className="muted">Angemeldet als {session.user.email}</p></div><a className="ghost-button" href="/">Website öffnen</a></div><AdminMembers initialMembers={members} /></main>
}
