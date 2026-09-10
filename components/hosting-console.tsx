'use client'

import { useState } from 'react'
import { Activity, Bot, RefreshCw, Server, Terminal } from 'lucide-react'

export default function HostingConsole() {
  const [status, setStatus] = useState('ONLINE')
  const [busy, setBusy] = useState(false)
  const [logs, setLogs] = useState([
    '[system] Hosting-Konsole initialisiert',
    '[discord] Worker wartet auf Gateway-Verbindung',
    '[sync] Rollen-Allowlist geladen',
  ])

  async function action(command: 'start' | 'restart' | 'stop') {
    setBusy(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setStatus(command === 'stop' ? 'OFFLINE' : 'ONLINE')
    setLogs((current) => [...current, `[control] ${command.toUpperCase()} ausgeführt`])
    setBusy(false)
  }

  return (
    <main className="hosting-shell">
      <header className="hosting-header">
        <div>
          <p className="eyebrow">ALL IN ONE · PRIVATE INFRASTRUCTURE</p>
          <h1>Teamliste Hosting</h1>
          <p className="muted">Discord Worker Control Plane</p>
        </div>
        <a href="/" className="ghost-button">Website</a>
      </header>

      <section className="hosting-grid" aria-label="Worker Übersicht">
        <article className="hosting-status"><div className="status-pulse" aria-hidden="true" /><div><p className="eyebrow">WORKER STATUS</p><strong>{status}</strong><p className="muted">Gateway · Teamliste Worker</p></div></article>
        <article className="hosting-metric"><Server size={18} aria-hidden="true" /><span><small>UPTIME</small><b>12d 04h 18m</b></span></article>
        <article className="hosting-metric"><Activity size={18} aria-hidden="true" /><span><small>LAST SYNC</small><b>vor 2 Minuten</b></span></article>
        <article className="hosting-metric"><Bot size={18} aria-hidden="true" /><span><small>COMMANDS</small><b>/teamrole-add · /teamrole-remove</b></span></article>
      </section>

      <section className="hosting-panel">
        <div className="hosting-panel-head"><div><p className="eyebrow">PROCESS CONTROL</p><h2>Worker Steuerung</h2></div><div className="hosting-actions"><button className="neon-button" disabled={busy} onClick={() => action('start')}>Start</button><button className="ghost-button" disabled={busy} onClick={() => action('restart')}><RefreshCw size={15} aria-hidden="true" /> Restart</button><button className="ghost-button danger-button" disabled={busy} onClick={() => action('stop')}>Stop</button></div></div>
        <div className="hosting-terminal"><div className="terminal-bar"><Terminal size={14} aria-hidden="true" /><span>worker.log</span></div>{logs.map((log, index) => <p key={`${log}-${index}`}>{log}</p>)}</div>
        <div className="role-policy"><b>ROLE POLICY</b><span>1543209684482396250</span><span>1543209687804158014</span></div>
      </section>
      <footer className="hosting-footer"><span className="status-pulse" aria-hidden="true" /> Connected to AIO Germany infrastructure</footer>
    </main>
  )
}
