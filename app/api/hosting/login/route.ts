import { NextResponse } from 'next/server'
import { createHostingToken, hostingCookie } from '@/lib/hosting-auth'
export async function POST(request: Request) { const { password } = await request.json().catch(()=>({})); if (!process.env.HOSTING_PASSWORD || typeof password !== 'string' || password !== process.env.HOSTING_PASSWORD) return NextResponse.json({ok:false},{status:401}); const response=NextResponse.json({ok:true}); response.cookies.set(hostingCookie(createHostingToken())); return response }
