import HomeHero from '@/components/sections/HomeHero'
import HomeHistory from '@/components/sections/HomeHistory'
import HomeCommunity from '@/components/sections/HomeCommunity'
import HomeOrganization from '@/components/sections/HomeOrganization'
import HomeEvent from '@/components/sections/HomeEvent'
import HomePressRelease from '@/components/sections/HomePressRelease'
import HomeFeaturedMembers from '@/components/sections/HomeFeaturedMembers'
import HomeCTA from '@/components/sections/HomeCTA'

export default function Home() {
  return (
    <div className="page-wrapper">
      <HomeHero />
      <HomeHistory />
      <HomeCommunity />
      <HomeOrganization />
      <HomeEvent />
      <HomePressRelease />
      <HomeFeaturedMembers />
      <HomeCTA />
    </div>
  )
}


