import { ReactNode } from 'react'
import '@/styles/globals.css'
import { MobileSidebar, Sidebar } from '@/components/Sidebar'

export const metadata = {
  title: 'Loopy',
  description: 'Plataforma de aprendizado de programação',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex max-sm:flex-col w-full">
      <div className="flex-1 sm:hidden w-full transition-200">
        <MobileSidebar />
      </div>
      <div className="flex-1 xl:max-w-xs max-sm:hidden w-full max-w-[80px] transition-200">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:p-3 p-12 flex justify-center items-center w-full max-h-screen overflow-y-auto ">
        {children}
      </div>
    </div>
  )
}
