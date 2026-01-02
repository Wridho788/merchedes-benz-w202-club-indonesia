import Section from '@/components/ui/Section'
import FadeIn from '@/components/animations/FadeIn'

export default function HomeIntro() {
  return (
    <Section id="about">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <FadeIn>
            <h2 className="section-title">Tentang MB W202 Club Indonesia</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4 text-brand-gray leading-relaxed">
              <p>
                Mercedes-Benz W202 Club Indonesia adalah komunitas yang didirikan oleh para
                penggemar dan pemilik Mercedes-Benz seri W202, yang diproduksi dari tahun
                1993 hingga 2000.
              </p>
              <p>
                Kami berdedikasi untuk melestarikan warisan otomotif Jerman yang legendaris ini,
                sambil membangun persaudaraan antar anggota yang memiliki passion yang sama
                terhadap Mercedes-Benz W202.
              </p>
              <p>
                Melalui berbagai kegiatan gathering, touring, dan social activities, kami
                berupaya mempertahankan excellence dan prestige yang menjadi ciri khas
                Mercedes-Benz.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
