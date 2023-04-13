import Image from 'next/image'
import { Container } from './ui/Container'
import { RankContainer } from './RankContainer'
import data from '@/mocks/userMock.json'
import { TUser } from '@/types'

export function ProfileContainer() {
  const { name, description, tags, image } = data as TUser

  return (
    <Container className="justify-between items-center max-xl:flex-col  ">
      <div className="flex items-center justify-start gap-6 max-xl:w-full ">
        <div>
          <Image
            src={image}
            alt=""
            width={300}
            height={300}
            className="w-24 h-24 min-w-max rounded-xl max-sm:w-16 max-sm:h-16"
          />
        </div>
        <div className="flex flex-col items-start gap-3 justify-center">
          <div>
            <h1 className="text-2xl max-sm:text-xl">{name}</h1>
            <p className="text-sm text-base-11">{description}</p>
          </div>
          <div className="flex gap-2 ">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="px-3 py-1 text-xs text-base-12 rounded-full bg-base-4 font-normal"
              >
                {`#${tag.toUpperCase()}`}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-xl:hidden">
        <RankContainer />
      </div>
    </Container>
  )
}
