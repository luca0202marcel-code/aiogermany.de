import { getToken } from '@vercel/connect'
import { desc } from 'drizzle-orm'
import { db } from '@/lib/db'
import { discordTeamRoles } from '@/lib/db/schema'
import { discordConfig, isManagedTeamRole, teamRoleIds, type DiscordTeamRole } from '@/lib/discord-team-config'

export { discordConfig, isManagedTeamRole, teamRoleIds, type DiscordTeamRole }
export type DiscordTeamMember = { user: { id: string; username: string; global_name?: string | null }; roles: string[]; nick?: string | null }

async function discordFetch(path: string, init?: RequestInit) {
  const token = await getToken(discordConfig.connector, { subject: { type: 'app' } })
  const response = await fetch(`https://discord.com/api/v10${path}`, {
    ...init,
    headers: { Authorization: `Bot ${token}`, 'Content-Type': 'application/json', ...init?.headers },
  })
  if (!response.ok) throw new Error(`Discord request failed: ${response.status}`)
  return response
}

export async function fetchDiscordRoles() {
  const response = await discordFetch(`/guilds/${discordConfig.guildId}/roles`)
  const roles = (await response.json()) as DiscordTeamRole[]
  return roles.filter((role) => teamRoleIds.has(role.id)).sort((a, b) => b.position - a.position)
}

export async function fetchDiscordMembers() {
  const response = await discordFetch(`/guilds/${discordConfig.guildId}/members?limit=1000`)
  return (await response.json()) as DiscordTeamMember[]
}

export async function saveDiscordRoles(roles: DiscordTeamRole[]) {
  await db.delete(discordTeamRoles)
  if (roles.length > 0) await db.insert(discordTeamRoles).values(roles.map((role) => ({ ...role, updatedAt: new Date() })))
  return roles
}

export async function getStoredDiscordRoles() {
  return db.select().from(discordTeamRoles).orderBy(desc(discordTeamRoles.position))
}

export async function setTeamRole(roleId: string, enabled: boolean) {
  if (!isManagedTeamRole(roleId)) throw new Error('This role is not in the managed team-role allowlist')
  const roles = await fetchDiscordRoles()
  const role = roles.find((item) => item.id === roleId)
  if (!role) throw new Error('Role not found in the configured team-role allowlist')
  await saveDiscordRoles(enabled ? roles : roles.filter((item) => item.id !== roleId))
  return role
}

export async function syncDiscordRoles() {
  const roles = await fetchDiscordRoles()
  return saveDiscordRoles(roles)
}

export async function canManageDiscordMember(memberRoleIds: string[]) {
  return memberRoleIds.some((roleId) => discordConfig.managerRoleIds.has(roleId))
}
