import { ReactNode } from 'react'
import '@/styles/globals.css'

export const metadata = {
  title: 'Loopy',
  description: 'Plataforma de aprendizado de programação',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full">
      <div className="w-full bg-green-500">asdsadasd</div>
      <div className="flex-1 flex justify-center items-center w-full bg-red-500 p-8">
        {children}
      </div>
    </div>
  )
}
