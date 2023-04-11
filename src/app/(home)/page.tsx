import { Card } from '@/components/ui/Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 lg:p-24">
      <div className="bg-base-3 p-8 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-2xl">
        <Card
          title="Modulo 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit carambolas maninho relaxa malucao."
          href="/"
          size="md"
          progress={100}
        />
        <Card
          title="Modulo 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href=""
          size="md"
          progress={57}
        />
        <Card
          title="Modulo 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href=""
          size="md"
          status="locked"
          progress={0}
        />
      </div>
    </main>
  )
}
