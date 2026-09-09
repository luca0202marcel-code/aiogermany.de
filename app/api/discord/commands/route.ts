import { NextResponse } from 'next/server'
import { canManageDiscordMember, setTeamRole, syncDiscordRoles } from '@/lib/discord-team'
import { discordConfig, isManagedTeamRole } from '@/lib/discord-team-config'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as {
    command?: 'teamrole-add' | 'teamrole-remove'
    channelId?: string
    memberRoleIds?: string[]
    roleId?: string
  } | null

  if (!body || body.channelId !== discordConfig.channelId) {
    return NextResponse.json({ ok: false, error: 'Command nur im Teamrollen-Kanal erlaubt.' }, { status: 403 })
  }
  if (!body.memberRoleIds || !canManageDiscordMember(body.memberRoleIds)) {
    return NextResponse.json({ ok: false, error: 'Keine Berechtigung für Teamrollen.' }, { status: 403 })
  }
  if (!body.roleId || !isManagedTeamRole(body.roleId)) {
    return NextResponse.json({ ok: false, error: 'Diese Rolle ist nicht für die Teamliste freigegeben.' }, { status: 400 })
  }

  try {
    if (body.command !== 'teamrole-add' && body.command !== 'teamrole-remove') {
      return NextResponse.json({ ok: false, error: 'Unbekannter Teamrollen-Command.' }, { status: 400 })
    }
    await setTeamRole(body.roleId, body.command === 'teamrole-add')
    const roles = await syncDiscordRoles()
    return NextResponse.json({ ok: true, command: body.command, roles, syncedAt: new Date().toISOString() })
  } catch (error) {
    console.error('[v0] Discord team command failed', error)
    return NextResponse.json({ ok: false, error: 'Teamrolle konnte nicht synchronisiert werden.' }, { status: 502 })
  }
}
