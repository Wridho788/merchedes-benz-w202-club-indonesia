import type { Metadata } from 'next'
import SejarahTimeline from '@/components/sections/SejarahTimeline'

export const metadata: Metadata = {
  title: 'Sejarah MBW202CI | Perjalanan Mercedes Benz W202 Club Indonesia',
  description: 'Perjalanan dan tonggak sejarah Mercedes Benz W202 Club Indonesia sejak didirikan pada tahun 2007. Dari komunitas kecil hingga menjadi klub variant Mercedes-Benz terbesar di Indonesia.',
  keywords: ['Sejarah MBW202CI', 'History W202 Club', 'Mercedes Benz W202 Indonesia', 'Komunitas Mercedes', 'W202 Club History'],
  openGraph: {
    title: 'Sejarah MBW202CI | Perjalanan Mercedes Benz W202 Club Indonesia',
    description: 'Perjalanan dan tonggak sejarah Mercedes Benz W202 Club Indonesia sejak didirikan pada tahun 2007',
    url: 'https://mbw202clubindonesia.vercel.app/sejarah',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    images: [{
      url: '/hero-1.jpg',
      width: 1200,
      height: 630,
      alt: 'Sejarah Mercedes Benz W202 Club Indonesia',
    }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sejarah MBW202CI | Perjalanan Mercedes Benz W202 Club Indonesia',
    description: 'Perjalanan dan tonggak sejarah Mercedes Benz W202 Club Indonesia sejak 2007',
    images: ['/hero-1.jpg'],
  },
}

export default function SejarahPage() {
  return (
    <div className="page-wrapper">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
              History
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perjalanan dan tonggak sejarah W202 Club of Indonesia sejak didirikan.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <div className="lg:w-full">
              <SejarahTimeline />
            </div>
          </div>

          {/* Filosofi Klub */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-sans font-bold text-brand-primary mb-6 text-center">
              Filosofi Klub
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                W202 Club Indonesia didirikan dengan tujuan untuk menghimpun para
                pecinta dan pemilik Mercedes-Benz seri W202 di seluruh Indonesia. Klub
                ini menjadi wadah untuk berbagi pengetahuan, pengalaman, dan kecintaan
                terhadap model ikonik dari Mercedes-Benz ini.
              </p>
              <p>
                Seiring dengan perkembangannya, W202 Club Indonesia telah membentuk
                berbagai cabang di kota-kota besar di Indonesia, seperti Jakarta,
                Bandung, Surabaya, Medan, dan lainnya. Setiap cabang memiliki kegiatan
                rutin yang mencerminkan semangat persaudaraan dan apresiasi terhadap
                warisan otomotif Mercedes-Benz.
              </p>
              <p>
                Sebagai komunitas, W202 Club Indonesia selalu berusaha memberikan
                manfaat tidak hanya bagi anggotanya, tetapi juga bagi masyarakat luas
                melalui berbagai kegiatan sosial dan edukasi tentang kendaraan klasik.
              </p>
              <blockquote className="border-l-4 border-brand-accent pl-4 italic text-gray-600 my-6">
                &quot;Kami percaya bahwa kecintaan terhadap mobil klasik seperti
                Mercedes-Benz W202 adalah wujud apresiasi terhadap desain, teknologi,
                dan sejarah otomotif. Melalui W202 Club Indonesia, kami ingin
                memastikan warisan ini tetap terjaga dan diapresiasi oleh generasi
                mendatang.&quot;
              </blockquote>
              <p>
                Dengan moto &quot;asoy geboy&quot;, W202 Club Indonesia terus berkomitmen untuk
                menjaga semangat persaudaraan dan kecintaan terhadap Mercedes-Benz
                W202, serta mempromosikan nilai-nilai positif dalam dunia otomotif
                Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
