import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'All About W202',
  description: 'Semua tentang Mercedes-Benz W202 - Spesifikasi, perawatan, dan tips untuk pemilik W202',
  keywords: ['W202 Specs', 'W202 Tips', 'W202 Maintenance', 'Mercedes C-Class W202', 'W202 Guide'],
  openGraph: {
    title: 'Mercedes Benz W202 Club Indonesia | All About W202',
    description: 'Panduan lengkap Mercedes-Benz W202 - Spesifikasi, perawatan, dan informasi',
    url: 'https://mbw202clubindonesia.vercel.app/w202',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function W202Page() {
  return (
    <div className="content">
      <h1 className="text-3xl md:text-4xl font-heading text-brand-primary mb-6">
        All About W202
      </h1>
      <div className="prose max-w-none">
        <p>Halaman All About W202 sedang dalam pengembangan.</p>
      </div>
    </div>
  )
}
