import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 lg:p-24">
      <div className="bg-base-3 p-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-2xl">
        <h1>Work in Progress</h1>
        <Link href="/dashboard">🚧 Dashboard</Link>
      </div>
    </main>
  )
}
