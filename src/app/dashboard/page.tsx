import { TabsContainer } from '@/components/TabsContainer'
import { ProfileContainer } from '@/components/ProfileContainer'
import { AdsContainer } from '@/components/AdsContainer'
import { TablesContainer } from '@/components/TablesContainer'

export default function Dashboard() {
  return (
    <main className="w-full mt-12 max-sm:mt-6 flex justify-center items-center ">
      <div className="max-w-7xl flex h-screen w-full flex-col gap-6 max-sm:gap-3 ">
        <ProfileContainer />
        <AdsContainer />
        <div className="w-full h-full flex items-center max-lg:flex-col justify-between gap-6 pb-8">
          <TabsContainer />
          <TablesContainer />
        </div>
      </div>
    </main>
  )
}
