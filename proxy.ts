import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]
  if (host === 'admin.aiogermany.de' && !request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/api')) {
    const url = request.nextUrl.clone()
    url.pathname = `/admin${request.nextUrl.pathname === '/' ? '' : request.nextUrl.pathname}`
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }
