import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

const COOKIE = 'aio_hosting_session'
const ttl = 1000 * 60 * 60 * 12
function secret() { return process.env.HOSTING_PASSWORD ?? '' }
function sign(value: string) { return createHmac('sha256', secret()).update(value).digest('hex') }
export function createHostingToken() { const value = `${Date.now() + ttl}`; return `${value}.${sign(value)}` }
export function isValidHostingToken(token?: string) {
  if (!token || !secret()) return false
  const [expires, signature] = token.split('.')
  if (!expires || !signature || Number(expires) < Date.now()) return false
  const expected = sign(expires)
  return signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}
export async function isHostingAuthenticated() { return isValidHostingToken((await cookies()).get(COOKIE)?.value) }
export const hostingCookie = (token: string) => ({ name: COOKIE, value: token, httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' as const, path: '/', maxAge: ttl / 1000 })
export const hostingCookieName = COOKIE
