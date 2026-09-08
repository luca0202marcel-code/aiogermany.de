'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { teamMembers } from '@/lib/db/schema'
import { and, asc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function requireSession() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Nicht autorisiert')
  return session.user
}

export async function listTeamMembers() {
  await requireSession()
  return db.select().from(teamMembers).orderBy(asc(teamMembers.sortOrder), asc(teamMembers.id))
}

export async function addTeamMember(formData: FormData) {
  await requireSession()
  const name = String(formData.get('name') || '').trim()
  const role = String(formData.get('role') || '').trim()
  const emoji = String(formData.get('emoji') || '✦').trim()
  if (!name || !role) throw new Error('Name und Rolle sind erforderlich')
  await db.insert(teamMembers).values({ name, role, emoji, sortOrder: Number(formData.get('sortOrder') || 0) })
  revalidatePath('/admin')
}

export async function updateTeamMember(formData: FormData) {
  await requireSession()
  const id = Number(formData.get('id'))
  const name = String(formData.get('name') || '').trim()
  const role = String(formData.get('role') || '').trim()
  const emoji = String(formData.get('emoji') || '✦').trim()
  if (!id || !name || !role) throw new Error('Ungültige Teamdaten')
  await db.update(teamMembers).set({ name, role, emoji, sortOrder: Number(formData.get('sortOrder') || 0), updatedAt: new Date() }).where(eq(teamMembers.id, id))
  revalidatePath('/admin')
}

export async function deleteTeamMember(formData: FormData) {
  await requireSession()
  await db.delete(teamMembers).where(eq(teamMembers.id, Number(formData.get('id'))))
  revalidatePath('/admin')
}
