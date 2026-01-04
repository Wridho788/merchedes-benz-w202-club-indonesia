import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Merchant',
  description: 'Merchant partner Mercedes-Benz W202 Club Indonesia - Bengkel dan layanan terpercaya untuk W202',
  keywords: ['Merchant W202', 'Bengkel W202', 'Partner W202 Club', 'Service W202'],
  openGraph: {
    title: 'Mercedes Benz W202 Club Indonesia | Merchant',
    description: 'Merchant partner dan bengkel terpercaya untuk Mercedes-Benz W202',
    url: 'https://mbw202club.id/merchant',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function MerchantPage() {
  return (
    <div className="content">
      <h1 className="text-3xl md:text-4xl font-heading text-brand-primary mb-6">
        Merchant
      </h1>
      <div className="prose max-w-none">
        <p>Halaman Merchant sedang dalam pengembangan.</p>
      </div>
    </div>
  )
}
