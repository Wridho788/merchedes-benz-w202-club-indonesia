import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HomeHero from '@/components/sections/HomeHero'
import HomeHistory from '@/components/sections/HomeHistory'
import HomeCommunity from '@/components/sections/HomeCommunity'
import HomeOrganization from '@/components/sections/HomeOrganization'
import HomeEvent from '@/components/sections/HomeEvent'

// Lazy load section di bawah fold untuk mengurangi initial bundle
const HomePressRelease = dynamic(() => import('@/components/sections/HomePressRelease'))
const HomeFeaturedMembers = dynamic(() => import('@/components/sections/HomeFeaturedMembers'))
const HomeCTA = dynamic(() => import('@/components/sections/HomeCTA'))
const FloatingWhatsApp = dynamic(() => import('@/components/ui/FloatingWhatsApp'))

export const metadata: Metadata = {
  title: 'Mercedes Benz W202 Club Indonesia | Komunitas Pecinta Mercedes W202',
  description: 'Komunitas resmi pecinta Mercedes-Benz seri W202 di Indonesia yang berdiri sejak tahun 2007. Bergabunglah untuk berbagi passion dan pengalaman bersama.',
  keywords: ['Mercedes Benz W202', 'W202 Club Indonesia', 'Mercedes C-Class', 'Komunitas Mercedes', 'W202 Indonesia', 'MBW202CI'],
  openGraph: {
    title: 'Mercedes Benz W202 Club Indonesia | Komunitas Pecinta Mercedes W202',
    description: 'Komunitas resmi pecinta Mercedes-Benz seri W202 di Indonesia yang berdiri sejak tahun 2007',
    url: 'https://mbw202club.id',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    images: [{
      url: '/hero-1.jpg',
      width: 1200,
      height: 630,
      alt: 'Mercedes Benz W202 Club Indonesia',
    }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercedes Benz W202 Club Indonesia | Komunitas Pecinta Mercedes W202',
    description: 'Komunitas resmi pecinta Mercedes-Benz seri W202 di Indonesia',
    images: ['/hero-1.jpg'],
  },
}

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
      <FloatingWhatsApp />
    </div>
  )
}


