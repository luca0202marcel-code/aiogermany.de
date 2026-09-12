import { Crown, Shield, Swords, Settings, Palette, PenLine, PartyPopper, Smartphone, Camera, Building2, GraduationCap, Radio } from 'lucide-react'
import { fetchDiscordMembers, fetchDiscordRoles, getStoredDiscordRoles } from '@/lib/discord-team'
import { discordConfig, teamRoleIds } from '@/lib/discord-team-config'

const roles = [
  ['🤴', 'Inhaber', Crown], ['👑', 'Stv. Inhaber', Crown], ['🧑‍💼', 'Management', Building2], ['🎓', 'Teamleitung', GraduationCap],
  ['🏛️', 'Federal Identity Office', Building2], ['⚔️', 'Senior Admin', Swords], ['⚔️', 'Administrator', Swords], ['⚔️', 'Junior Admin', Swords],
  ['⚜️', 'Mod-Leitung', Shield], ['⚜️', 'Senior Moderator', Shield], ['⚜️', 'Moderator', Shield], ['⚜️', 'Junior Moderator', Shield],
  ['⚙️', 'Development', Settings], ['🖌', 'Designing', Palette], ['📝', 'Werbeleitung', PenLine], ['🎪', 'Eventleitung', PartyPopper],
  ['📱', 'Media Management', Smartphone], ['📷', 'Twitch-Admin', Camera], ['📷', 'Twitch-Mod', Camera], ['📷', 'Twitch-Streamer', Camera],
] as const

export async function TeamDirectory() {
  let liveRoles = roles.map(([emoji, role]) => ({ emoji, role, member: '' }))
  let connected = false
  try {
    const [discordRoles, discordMembers] = await Promise.all([fetchDiscordRoles(), fetchDiscordMembers()])
    const roleNames = new Map(discordRoles.map((role) => [role.id, role.name]))
    const liveMembers = discordMembers.flatMap((member) => member.roles.filter((roleId) => teamRoleIds.has(roleId) && !discordConfig.managerRoleIds.has(roleId)).map((roleId) => ({ emoji: '◈', role: roleNames.get(roleId) ?? 'Team', member: member.nick || member.user.global_name || member.user.username })))
    if (liveMembers.length > 0) {
      liveRoles = liveMembers
      connected = true
    }
    if (discordRoles.length > 0 && liveMembers.length === 0) {
      liveRoles = discordRoles.filter((role) => teamRoleIds.has(role.id)).map((role) => ({ emoji: '◈', role: role.name, member: '' }))
      connected = true
    }
  } catch (error) {
    console.error('[v0] Discord role fetch failed; using stored roles', error)
    try {
      const storedRoles = await getStoredDiscordRoles()
      if (storedRoles.length > 0) {
        liveRoles = storedRoles.filter((role) => teamRoleIds.has(role.id)).map((role) => ({ emoji: '◈', role: role.name }))
        connected = true
      }
    } catch (storageError) {
      console.error('[v0] Stored role fallback failed', storageError)
    }
  }

  return (
    <section id="team" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div><p className="eyebrow"><Shield size={14} /> Das Team</p><h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-6xl">Menschen, die<br /><span className="neon-text">den Unterschied machen.</span></h2></div>
        <p className="max-w-sm text-sm leading-7 text-muted-foreground">Unser Team hält die Community sicher, aktiv und offen für neue Ideen.</p>
      </div>
      <div className="team-live-status"><Radio size={14} /> {connected ? 'LIVE AUS DISCORD' : 'LOKALER FALLBACK'} <span>• {liveRoles.length} Rollen</span></div><div className="team-grid">{liveRoles.map(({ emoji, role, member }) => <article key={`${role}-${member}`} className="team-card"><span className="team-emoji" aria-hidden="true">{emoji}</span><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-primary">{member ? 'TEAMMITGLIED' : 'DISCORD ROLLE'}</p><h3 className="mt-1 text-base font-bold">{member || role}</h3>{member && <p className="mt-1 text-xs text-muted-foreground">{role}</p>}</div><Radio className="ml-auto text-primary/70" size={18} /></article>)}</div>
    </section>
  )
}

export const teamRoles = roles.map(([emoji, role]) => ({ emoji, role }))
