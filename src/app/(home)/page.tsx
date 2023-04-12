import { TabsContainer } from '@/components/TabsContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 lg:p-24">
      <div className="bg-base-3 p-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-2xl">
        <TabsContainer />
      </div>
    </main>
  )
}
