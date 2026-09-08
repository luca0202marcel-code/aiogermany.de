'use client'

import { useState } from 'react'
import { addTeamMember, deleteTeamMember, updateTeamMember } from '@/app/admin/actions'

type Member = { id: number; name: string; role: string; emoji: string; sortOrder: number }

export function AdminMembers({ initialMembers }: { initialMembers: Member[] }) {
  const [editing, setEditing] = useState<number | null>(null)
  const [message, setMessage] = useState('')
  const form = (member?: Member) => <form action={async (data) => { try { if (member) await updateTeamMember(data); else await addTeamMember(data); setEditing(null); setMessage('Gespeichert.'); } catch (error) { setMessage(error instanceof Error ? error.message : 'Fehler beim Speichern.') } }} className="member-form"><input type="hidden" name="id" value={member?.id || ''} /><input name="emoji" aria-label="Symbol" defaultValue={member?.emoji || '✦'} maxLength={4} /><input name="name" aria-label="Name" placeholder="Name" defaultValue={member?.name || ''} required /><input name="role" aria-label="Rolle" placeholder="Rolle" defaultValue={member?.role || ''} required /><input name="sortOrder" aria-label="Sortierung" type="number" defaultValue={member?.sortOrder || 0} /><button className="neon-button" type="submit">{member ? 'Speichern' : 'Hinzufügen'}</button>{member && <button className="ghost-button" type="button" onClick={() => setEditing(null)}>Abbrechen</button>}</form>
  return <section className="admin-panel"><div className="admin-section-head"><div><p className="eyebrow">TEAM DIRECTORY</p><h2>Teammitglieder</h2></div><span className="admin-count">{initialMembers.length} Einträge</span></div>{message && <p className="success-message">{message}</p>}{editing === -1 ? form() : <button className="neon-button add-member" onClick={() => setEditing(-1)}>+ Teammitglied hinzufügen</button>}<div className="admin-list">{initialMembers.map((member) => editing === member.id ? <div key={member.id}>{form(member)}</div> : <div className="admin-member" key={member.id}><span className="team-emoji">{member.emoji}</span><div><strong>{member.name}</strong><span>{member.role}</span></div><div className="admin-actions"><button className="ghost-button" onClick={() => setEditing(member.id)}>Bearbeiten</button><form action={deleteTeamMember}><input type="hidden" name="id" value={member.id} /><button className="danger-button" type="submit">Löschen</button></form></div></div>)}</div></section>
}
