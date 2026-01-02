import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren'

const HIGHLIGHTS = [
  {
    title: 'Gathering Rutin',
    description: 'Pertemuan bulanan untuk berbagi pengalaman dan tips perawatan W202',
    icon: '🚗',
  },
  {
    title: 'Touring Nasional',
    description: 'Eksplorasi destinasi menarik di seluruh Indonesia bersama komunitas',
    icon: '🗺️',
  },
  {
    title: 'Technical Support',
    description: 'Bantuan teknis dan konsultasi untuk perawatan dan modifikasi kendaraan',
    icon: '🔧',
  },
  {
    title: 'Social Activities',
    description: 'Kegiatan sosial dan charity untuk berkontribusi kepada masyarakat',
    icon: '❤️',
  },
]

export default function HomeHighlight() {
  return (
    <Section variant="light">
      <div className="container">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="section-title">Aktivitas Kami</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto">
              Berbagai kegiatan yang kami selenggarakan untuk mempererat tali persaudaraan
              antar anggota
            </p>
          </FadeIn>
        </div>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <StaggerItem key={index}>
              <Card className="p-6 text-center space-y-4 h-full">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="font-heading text-lg uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </Section>
  )
}
