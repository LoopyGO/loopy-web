import { Container } from './ui/Container'
import Image from 'next/image'

import Champion from '@/public/badges/champion.svg'
import Gold3 from '@/public/badges/gold3.svg'
import Silver3 from '@/public/badges/silver3.svg'
import Diamond2 from '@/public/badges/diamond2.svg'

export function RankContainer() {
  return (
    <Container className="gap-0 w-full p-2 overflow-x-hidden ">
      <Image
        src={Champion}
        alt=""
        width={300}
        height={300}
        className="w-24 h-24 max-sm:w-16 max-sm:h-16 "
      />
      <Image
        src={Diamond2}
        alt=""
        width={300}
        height={300}
        className="w-24 h-24 max-sm:w-16 max-sm:h-16"
      />
      <Image
        src={Gold3}
        alt=""
        width={300}
        height={300}
        className="w-24 h-24 max-sm:w-16 max-sm:h-16"
      />
      <Image
        src={Silver3}
        alt=""
        width={300}
        height={300}
        className="w-24 h-24 max-sm:w-16 max-sm:h-16"
      />
    </Container>
  )
}
