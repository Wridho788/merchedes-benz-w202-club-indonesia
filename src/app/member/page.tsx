import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Member',
  description: 'Anggota Mercedes-Benz W202 Club Indonesia - Bergabunglah dengan komunitas pecinta W202',
  keywords: ['Member W202', 'Anggota W202 Club', 'Join W202 Indonesia'],
  openGraph: {
    title: 'Mercedes Benz W202 Club Indonesia | Member',
    description: 'Daftar anggota dan cara bergabung dengan Mercedes-Benz W202 Club Indonesia',
    url: 'https://mbw202club.id/member',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function MemberPage() {
  return (
    <div className="content">
      <h1 className="text-3xl md:text-4xl font-heading text-brand-primary mb-6">
        Member
      </h1>
      <div className="prose max-w-none">
        <p>Halaman Member sedang dalam pengembangan.</p>
      </div>
    </div>
  )
}
