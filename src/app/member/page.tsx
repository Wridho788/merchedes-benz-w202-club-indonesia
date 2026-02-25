import type { Metadata } from 'next'
import MemberContent from '@/components/sections/MemberContent'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import FloatingJoinButton from '@/components/ui/FloatingJoinButton'

export const metadata: Metadata = {
  title: 'Member MBW202CI | Direktori Anggota Mercedes Benz W202 Club Indonesia',
  description: 'Bergabunglah dengan W202 Club of Indonesia dan dapatkan berbagai keuntungan eksklusif. Lihat direktori member dan benefit keanggotaan MBW202CI.',
  keywords: ['Member MBW202CI', 'Anggota W202 Club', 'Daftar Member Mercedes', 'Keanggotaan W202 Indonesia', 'Join MBW202CI', 'Komunitas Mercedes Indonesia'],
  openGraph: {
    title: 'Member MBW202CI | Direktori Anggota Mercedes Benz W202 Club Indonesia',
    description: 'Bergabunglah dengan W202 Club of Indonesia dan dapatkan berbagai keuntungan eksklusif. Lihat direktori member dan benefit keanggotaan.',
    url: 'https://mbw202clubindonesia.vercel.app/member',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    images: [{
      url: '/hero-1.jpg',
      width: 1200,
      height: 630,
      alt: 'Member Mercedes Benz W202 Club Indonesia',
    }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Member MBW202CI | Direktori Anggota Mercedes Benz W202 Club Indonesia',
    description: 'Bergabunglah dengan W202 Club of Indonesia dan dapatkan berbagai keuntungan eksklusif',
    images: ['/hero-1.jpg'],
  },
}

export default function MemberPage() {
  return (
    <div className="page-wrapper">
      <MemberContent />
      <FloatingJoinButton />
      <FloatingWhatsApp />
    </div>
  )
}
