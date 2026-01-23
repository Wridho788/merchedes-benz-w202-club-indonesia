import type { Metadata } from 'next'
import OrganizationContent from '@/components/sections/OrganizationContent'

export const metadata: Metadata = {
  title: 'Struktur Organisasi MBW202CI | Pengurus & Regional Mercedes Benz W202 Club Indonesia',
  description: 'Susunan organisasi W202 Club of Indonesia sesuai AD-ART dan SK Badan Hukum. Lihat pengurus pusat, divisi, dan struktur regional MBW202CI di seluruh Indonesia.',
  keywords: ['Organisasi MBW202CI', 'Pengurus W202 Club', 'Struktur Regional', 'Mercedes Benz W202 Indonesia', 'MBC Ina', 'Klub Mercedes Indonesia'],
  openGraph: {
    title: 'Struktur Organisasi MBW202CI | Pengurus & Regional Mercedes Benz W202 Club Indonesia',
    description: 'Susunan organisasi W202 Club of Indonesia sesuai AD-ART dan SK Badan Hukum. Lihat pengurus pusat, divisi, dan struktur regional.',
    url: 'https://mbw202clubindonesia.vercel.app/organization',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    images: [{
      url: '/hero-1.jpg',
      width: 1200,
      height: 630,
      alt: 'Struktur Organisasi Mercedes Benz W202 Club Indonesia',
    }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Struktur Organisasi MBW202CI | Pengurus Mercedes Benz W202 Club Indonesia',
    description: 'Susunan organisasi W202 Club of Indonesia sesuai AD-ART dan SK Badan Hukum',
    images: ['/hero-1.jpg'],
  },
}

export default function OrganizationPage() {
  return (
    <div className="page-wrapper">
      <OrganizationContent />
    </div>
  )
}
