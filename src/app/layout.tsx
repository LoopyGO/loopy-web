import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Loopy',
  description: 'Plataforma de aprendizado de programação',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-base-1">{children}</body>
    </html>
  )
}
