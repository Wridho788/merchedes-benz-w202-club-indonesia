import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const GALLERY_PREVIEW = [
  { id: 1, alt: 'W202 Gathering' },
  { id: 2, alt: 'W202 Touring' },
  { id: 3, alt: 'W202 Meet' },
  { id: 4, alt: 'W202 Community' },
]

export default function HomeGallery() {
  return (
    <Section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Galeri Kegiatan</h2>
          <p className="text-brand-gray mt-4">
            Dokumentasi kegiatan dan momen berharga bersama komunitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {GALLERY_PREVIEW.map((item) => (
            <Card key={item.id} className="aspect-square">
              <div className="w-full h-full bg-brand-light flex items-center justify-center">
                <span className="text-brand-gray">{item.alt}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" href="/galeri">
            Lihat Semua Galeri
          </Button>
        </div>
      </div>
    </Section>
  )
}
