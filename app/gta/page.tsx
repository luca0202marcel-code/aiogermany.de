import { redirect } from 'next/navigation'

export const metadata = {
  title: 'GTA Projekt | ALL IN ONE Germany',
  robots: { index: false, follow: false },
}

export default function GtaPage() {
  redirect('https://discord.gg/2ckjVFjs3w')
}
