import { Container } from '@/components/ui/Container'
import Image from 'next/image'
import { Silver3, Gold3, Diamond2, Champion } from '@/components/ui/Icon'

export default function Dashboard() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 items-center justify-start p-8">
      <Container className="justify-between items-center">
        <div className="flex items-center justify-start gap-6">
          <div>
            <Image
              src="https://github.com/revogabe.png"
              alt=""
              width={300}
              height={300}
              className="w-24 h-24 rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start gap-3 justify-center">
            <div>
              <h1 className="text-2xl">Daniel Gabriel</h1>
              <p className="text-sm text-base-11">Desenvolvedor Full-stack</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs text-base-12 rounded-full bg-base-4 font-normal">
                #CARAMBA
              </button>
              <button className="px-3 py-1 text-xs text-base-12 rounded-full bg-base-4 font-normal">
                #MANEIRO
              </button>
              <button className="px-3 py-1 text-xs text-base-12 rounded-full bg-base-4 font-normal">
                #BOADEMAIS
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <Container className="text-5xl">
            <Silver3 />
            <Gold3 />
            <Diamond2 />
            <Champion />
          </Container>
        </div>
      </Container>
      <div className="flex w-full gap-4 items-center justify-between">
        <Container className="h-48 p-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="object-cover w-full"
            width={300}
            height={300}
          />
        </Container>
        <Container className="h-48 p-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="object-cover w-full"
            width={300}
            height={300}
          />
        </Container>
        <Container className="h-48 p-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="object-cover w-full"
            width={300}
            height={300}
          />
        </Container>
      </div>
    </main>
  )
}
