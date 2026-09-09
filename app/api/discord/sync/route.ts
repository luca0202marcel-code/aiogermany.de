import { NextResponse } from 'next/server'
import { syncDiscordRoles } from '@/lib/discord-team'

export async function POST(request: Request) {
  const expectedSecret = process.env.DISCORD_SYNC_SECRET
  const receivedSecret = request.headers.get('x-discord-sync-secret')
  if (expectedSecret && receivedSecret !== expectedSecret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const roles = await syncDiscordRoles()
    return NextResponse.json({ ok: true, roles, syncedAt: new Date().toISOString() })
  } catch (error) {
    console.error('[v0] Discord role sync failed', error)
    return NextResponse.json({ ok: false, error: 'Discord synchronisation failed' }, { status: 502 })
  }
}

export async function GET() {
  return POST()
}
