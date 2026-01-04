import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Dokumentasi kegiatan dan momen berharga MB W202 Club Indonesia - Foto gathering, touring, dan event',
  keywords: ['Galeri W202', 'Foto W202 Club', 'Dokumentasi W202', 'Gallery W202 Indonesia'],
  openGraph: {
    title: 'Mercedes Benz W202 Club Indonesia | Galeri',
    description: 'Dokumentasi visual kegiatan Mercedes-Benz W202 Club Indonesia',
    url: 'https://mbw202club.id/galeri',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

const galleryItems = [
  { id: 1, title: 'Gathering Jakarta 2025', category: 'Gathering' },
  { id: 2, title: 'Touring Bandung 2024', category: 'Touring' },
  { id: 3, title: 'Workshop Maintenance', category: 'Workshop' },
  { id: 4, title: 'Charity Drive', category: 'Social' },
  { id: 5, title: 'Monthly Meet January', category: 'Gathering' },
  { id: 6, title: 'W202 C230 Kompressor', category: 'Car' },
  { id: 7, title: 'W202 C200', category: 'Car' },
  { id: 8, title: 'W202 C280', category: 'Car' },
  { id: 9, title: 'Convoy Formation', category: 'Event' },
  { id: 10, title: 'Sunset Touring', category: 'Touring' },
  { id: 11, title: 'Meet & Greet', category: 'Gathering' },
  { id: 12, title: 'Technical Session', category: 'Workshop' },
]

export default function GaleriPage() {
  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-wide mb-4">
              Galeri
            </h1>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Dokumentasi visual dari berbagai kegiatan dan momen berharga bersama komunitas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <Card 
                key={item.id} 
                className="aspect-square overflow-hidden group cursor-pointer"
              >
                <div className="relative w-full h-full bg-brand-light flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <span className="text-brand-gray text-sm text-center px-4">
                    {item.title}
                  </span>
                  <span className="text-xs text-brand-gray mt-2 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-all duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
