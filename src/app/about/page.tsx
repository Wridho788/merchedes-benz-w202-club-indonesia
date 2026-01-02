import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'About',
  description: 'Tentang Mercedes-Benz W202 Club Indonesia - Komunitas pecinta Mercedes-Benz seri W202 di Indonesia',
}

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-wide mb-8 text-center">
              Tentang Kami
            </h1>

            <div className="space-y-8 text-brand-gray leading-relaxed">
              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Sejarah Singkat
                </h2>
                <p>
                  Mercedes-Benz W202 Club Indonesia didirikan oleh para pecinta dan pemilik
                  Mercedes-Benz seri W202 yang memiliki visi untuk melestarikan warisan
                  otomotif legendaris dari Stuttgart, Jerman. W202 adalah generasi pertama
                  dari Mercedes-Benz C-Class yang diproduksi dari tahun 1993 hingga 2000.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Visi & Misi
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading uppercase text-lg mb-2 text-brand-dark">Visi</h3>
                    <p>
                      Menjadi komunitas Mercedes-Benz W202 terkemuka di Indonesia yang
                      menjunjung tinggi nilai persaudaraan, excellence, dan pelestarian
                      warisan otomotif.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading uppercase text-lg mb-2 text-brand-dark">Misi</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Membangun komunitas yang solid dan saling mendukung</li>
                      <li>Berbagi pengetahuan dan pengalaman seputar perawatan W202</li>
                      <li>Menyelenggarakan kegiatan gathering dan touring berkualitas</li>
                      <li>Berkontribusi positif kepada masyarakat melalui kegiatan sosial</li>
                      <li>Melestarikan dan mempertahankan kondisi W202 di Indonesia</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Nilai-Nilai Kami
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading uppercase text-lg mb-2 text-brand-dark">
                      Persaudaraan
                    </h3>
                    <p>
                      Membangun ikatan kuat antar anggota berdasarkan rasa hormat dan
                      kepercayaan.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading uppercase text-lg mb-2 text-brand-dark">
                      Excellence
                    </h3>
                    <p>
                      Menjaga standar tinggi dalam setiap aspek, dari perawatan kendaraan
                      hingga kegiatan klub.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading uppercase text-lg mb-2 text-brand-dark">
                      Passion
                    </h3>
                    <p>
                      Kecintaan mendalam terhadap Mercedes-Benz W202 dan budaya otomotif.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading uppercase text-lg mb-2 text-brand-dark">
                      Integritas
                    </h3>
                    <p>
                      Bertindak dengan kejujuran dan tanggung jawab dalam setiap aktivitas.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Keanggotaan
                </h2>
                <p>
                  Kami terbuka bagi siapa saja yang memiliki Mercedes-Benz W202 dan berbagi
                  passion yang sama terhadap kendaraan legendaris ini. Anggota kami berasal
                  dari berbagai latar belakang dan profesi, namun disatukan oleh kecintaan
                  yang sama terhadap W202.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
