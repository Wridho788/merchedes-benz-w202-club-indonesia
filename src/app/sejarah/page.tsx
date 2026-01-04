import type { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'History',
  description: 'Sejarah Mercedes-Benz W202 dan perjalanan komunitas W202 Club Indonesia sejak tahun 1993',
  keywords: ['Sejarah W202', 'Mercedes C-Class History', 'W202 Club Indonesia History'],
  openGraph: {
    title: 'Mercedes Benz W202 Club Indonesia | History',
    description: 'Sejarah Mercedes-Benz W202 dan perjalanan komunitas W202 Club Indonesia',
    url: 'https://mbw202club.id/sejarah',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function SejarahPage() {
  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-wide mb-8 text-center">
              Sejarah Mercedes-Benz W202
            </h1>

            <div className="space-y-12 text-brand-gray leading-relaxed">
              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Kelahiran C-Class Pertama
                </h2>
                <p className="mb-4">
                  Mercedes-Benz W202 adalah generasi pertama dari C-Class yang diperkenalkan
                  pada tahun 1993 sebagai pengganti dari Mercedes-Benz 190 (W201). Dengan
                  kode proyek W202, model ini menandai era baru bagi Mercedes-Benz dalam
                  segmen compact executive car.
                </p>
                <p>
                  Diluncurkan pada Mei 1993, W202 hadir dengan desain yang lebih modern dan
                  aerodinamis dibandingkan pendahulunya. Desain eksterior yang elegan dan
                  proporsional menjadikan W202 sebagai salah satu sedan kompak paling atraktif
                  di masanya.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Pilihan Mesin & Varian
                </h2>
                <p className="mb-4">
                  W202 tersedia dalam berbagai pilihan mesin, mulai dari mesin bensin 4-silinder
                  hingga 6-silinder, serta mesin diesel yang efisien. Beberapa varian populer
                  antara lain:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>C180 - Mesin 4-silinder 1.8L</li>
                  <li>C200 - Mesin 4-silinder 2.0L</li>
                  <li>C220 - Mesin 4-silinder 2.2L</li>
                  <li>C230 - Mesin 4-silinder 2.3L dengan kompresor</li>
                  <li>C240 - Mesin V6 2.4L</li>
                  <li>C280 - Mesin V6 2.8L</li>
                  <li>C36 AMG & C43 AMG - Varian performa tinggi</li>
                </ul>
                <p>
                  Varian diesel seperti C220 CDI dan C250 Turbodiesel juga sangat populer,
                  terutama di pasar Eropa, berkat efisiensi bahan bakar yang excellent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Facelift 1997
                </h2>
                <p>
                  Pada tahun 1997, Mercedes-Benz melakukan facelift terhadap W202. Perubahan
                  meliputi desain bumper yang diperbarui, lampu depan yang direvisi, dan
                  interior yang ditingkatkan. Model facelift ini sering disebut sebagai
                  "W202.5" oleh para enthusiast.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Teknologi & Fitur
                </h2>
                <p className="mb-4">
                  W202 dilengkapi dengan berbagai teknologi canggih untuk masanya:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sistem suspensi multi-link yang sophisticated</li>
                  <li>ABS (Anti-lock Braking System) standar</li>
                  <li>ASR (Acceleration Slip Regulation) pada beberapa model</li>
                  <li>Dual airbag untuk keselamatan</li>
                  <li>Automatic climate control</li>
                  <li>Electric sunroof</li>
                  <li>Premium sound system</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  W202 di Indonesia
                </h2>
                <p className="mb-4">
                  Mercedes-Benz W202 resmi masuk ke Indonesia pada pertengahan 1990-an dan
                  segera menjadi pilihan favorit di kalangan eksekutif muda dan profesional.
                  Model yang paling populer di Indonesia adalah C180, C200, dan C230 Kompressor.
                </p>
                <p>
                  Meskipun produksi W202 berakhir pada tahun 2000 dan digantikan oleh W203,
                  popularitas W202 di Indonesia tetap tinggi. Komunitas pecinta W202 terus
                  tumbuh, menjaga dan merawat mobil-mobil klasik ini dengan penuh dedikasi.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Warisan & Legacy
                </h2>
                <p>
                  W202 meninggalkan warisan yang kuat sebagai C-Class pertama yang sukses
                  mengukuhkan posisi Mercedes-Benz di segmen compact executive. Dengan total
                  produksi lebih dari 1.8 juta unit di seluruh dunia, W202 membuktikan bahwa
                  Mercedes-Benz mampu menciptakan mobil yang menggabungkan luxury, performance,
                  dan reliability dalam paket yang kompak.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-heading uppercase tracking-wide mb-4 text-brand-dark">
                  Perjalanan Komunitas
                </h2>
                <p>
                  MB W202 Club Indonesia didirikan dengan semangat untuk melestarikan warisan
                  W202 di tanah air. Dari gathering pertama dengan beberapa anggota hingga
                  kini menjadi salah satu komunitas Mercedes-Benz paling aktif di Indonesia,
                  perjalanan kami dipenuhi dengan momen-momen berharga, persaudaraan yang
                  erat, dan kecintaan bersama terhadap mobil legendaris ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
