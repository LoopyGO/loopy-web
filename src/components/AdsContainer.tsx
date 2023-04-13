import Image from 'next/image'
import { Container } from './ui/Container'

export function AdsContainer() {
  return (
    <div className="flex w-full gap-6 max-sm:gap-3 items-center justify-between">
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
      <Container className="h-48 p-0 overflow-hidden max-lg:hidden">
        <Image
          src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="object-cover w-full"
          width={300}
          height={300}
        />
      </Container>
    </div>
  )
}
