import { TabsContainer } from '@/components/TabsContainer'
import { ProfileContainer } from '@/components/ProfileContainer'
import { AdsContainer } from '@/components/AdsContainer'

export default function Dashboard() {
  return (
    <main className="w-full mt-12 max-sm:mt-6 flex justify-center items-center ">
      <div className="max-w-7xl flex h-screen w-full flex-col gap-6 max-sm:gap-3 ">
        <ProfileContainer />
        <AdsContainer />
        <div className="w-full h-full flex items-start max-lg:flex-col justify-between gap-6 pb-8">
          <TabsContainer />
        </div>
      </div>
    </main>
  )
}
