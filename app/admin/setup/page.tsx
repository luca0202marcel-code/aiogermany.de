'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export default function AdminSetupPage() {
  const router = useRouter()
  const [name, setName] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError('')
    const result = await authClient.signUp.email({ name, email, password })
    if (result.error) setError('Setup konnte nicht abgeschlossen werden.')
    else { router.push('/admin'); router.refresh() }
  }

  return <main className="admin-shell"><div className="admin-panel auth-panel"><p className="eyebrow">ALL IN ONE · ADMIN SETUP</p><h1>Ersten Zugang erstellen</h1><p className="muted">Erstelle einmalig den sicheren Login für das Admin-Dashboard.</p><form onSubmit={submit} className="admin-form"><label>Name<input required value={name} onChange={(event) => setName(event.target.value)} /></label><label>E-Mail<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label><label>Passwort<input type="password" minLength={8} required value={password} onChange={(event) => setPassword(event.target.value)} /></label>{error && <p className="form-error">{error}</p>}<button className="neon-button" type="submit">Adminzugang erstellen</button></form></div></main>
}
