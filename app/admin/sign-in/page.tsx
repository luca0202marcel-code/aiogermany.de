'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export default function AdminSignIn() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    const result = await authClient.signIn.email({ email, password })
    if (result.error) setError('Anmeldung fehlgeschlagen. Bitte Zugangsdaten prüfen.')
    else { router.push('/admin'); router.refresh() }
  }

  return <main className="admin-shell"><div className="admin-panel auth-panel"><p className="eyebrow">ALL IN ONE · ADMIN</p><h1>Dashboard Login</h1><p className="muted">Verwalte Teammitglieder sicher im geschützten Bereich.</p><form onSubmit={submit} className="admin-form"><label>E-Mail<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} /></label><label>Passwort<input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} /></label>{error && <p className="form-error">{error}</p>}<button className="neon-button" type="submit">Einloggen</button><a className="ghost-button" href="/admin/setup">Ersten Adminzugang erstellen</a></form></div></main>
}
