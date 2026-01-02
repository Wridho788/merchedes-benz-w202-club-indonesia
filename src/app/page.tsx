import HomeHero from '@/components/sections/HomeHero'
import HomeIntro from '@/components/sections/HomeIntro'
import HomeHighlight from '@/components/sections/HomeHighlight'
import HomeGallery from '@/components/sections/HomeGallery'
import HomeCTA from '@/components/sections/HomeCTA'

export default function Home() {
  return (
    <div className="page-wrapper">
      <HomeHero />
      <HomeIntro />
      <HomeHighlight />
      <HomeGallery />
      <HomeCTA />
    </div>
  )
}

