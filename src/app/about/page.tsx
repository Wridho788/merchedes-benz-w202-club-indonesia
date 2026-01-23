import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All About W202 | Sejarah, Varian & Tips Perawatan Mercedes-Benz W202',
  description: 'Informasi lengkap tentang Mercedes-Benz W202 - Sejarah C-Class pertama (1993-2000), varian mesin dari C180 hingga C43 AMG, dan tips perawatan untuk para penggemar dan pemilik.',
  keywords: ['Mercedes-Benz W202', 'W202 History', 'W202 Maintenance', 'C-Class W202', 'W202 Variants', 'C36 AMG', 'C43 AMG', 'Tips Perawatan W202'],
  openGraph: {
    title: 'All About W202 | Sejarah, Varian & Tips Perawatan Mercedes-Benz W202',
    description: 'Informasi lengkap tentang Mercedes-Benz W202 - Sejarah, varian mesin, dan tips perawatan untuk para penggemar dan pemilik',
    url: 'https://mbw202clubindonesia.vercel.app/about',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    images: [{
      url: '/hero-1.jpg',
      width: 1200,
      height: 630,
      alt: 'All About Mercedes-Benz W202',
    }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All About W202 | Sejarah, Varian & Tips Perawatan Mercedes-Benz W202',
    description: 'Informasi lengkap tentang Mercedes-Benz W202 untuk para penggemar dan pemilik',
    images: ['/hero-1.jpg'],
  },
}

const W202_VARIANTS = [
  { model: 'C180', engine: '1.8L I4', power: '122 hp', year: '1993-2000' },
  { model: 'C200', engine: '2.0L I4', power: '136 hp', year: '1993-2000' },
  { model: 'C220', engine: '2.2L I4', power: '150 hp', year: '1993-1996' },
  { model: 'C230 Kompressor', engine: '2.3L I4 Supercharged', power: '193 hp', year: '1997-2000' },
  { model: 'C280', engine: '2.8L I6', power: '193 hp', year: '1993-2000' },
  { model: 'C36 AMG', engine: '3.6L I6', power: '280 hp', year: '1993-1997' },
  { model: 'C43 AMG', engine: '4.3L V8', power: '306 hp', year: '1997-2000' },
]

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'W202 Engine Bay',
    title: 'W202 Engine Bay'
  },
  {
    src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Elegant Interior',
    title: 'Elegant Interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'W202 Side Profile',
    title: 'W202 Side Profile'
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Club Gathering',
    title: 'Club Gathering'
  },
  {
    src: 'https://images.unsplash.com/photo-1631985127674-91e281a36add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
    alt: 'Community Drive',
    title: 'Community Drive'
  },
]

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
              All About W202
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Informasi lengkap tentang Mercedes-Benz W202 untuk para penggemar dan pemilik.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - History & Variants */}
            <div>
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
                Sejarah W202
              </h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  Mercedes-Benz W202 adalah generasi pertama dari Mercedes-Benz C-Class,
                  diproduksi dari Juni 1993 hingga Mei 2000. Model ini menggantikan
                  Mercedes-Benz W201 (190E) dan menandai awal dari penamaan baru untuk lini
                  sedan kompak Mercedes-Benz.
                </p>
                <p>
                  W202 hadir dengan berbagai pilihan mesin, mulai dari mesin 4-silinder
                  (C180, C200, C220, C230) hingga mesin 6-silinder (C240, C280) dan varian
                  performa tinggi dengan mesin yang dikembangkan oleh AMG (C36 AMG dan C43
                  AMG).
                </p>
                <p>
                  Pada tahun 1997, W202 mendapatkan facelift dengan perubahan pada desain
                  eksterior dan interior serta peningkatan fitur keselamatan dan teknologi.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-sans font-semibold text-xl text-brand-primary mb-4">
                  Varian W202
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 mb-4">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-left bg-brand-primary text-white">
                          Model
                        </th>
                        <th className="py-2 px-4 border-b text-left bg-brand-primary text-white">
                          Mesin
                        </th>
                        <th className="py-2 px-4 border-b text-left bg-brand-primary text-white">
                          Tenaga
                        </th>
                        <th className="py-2 px-4 border-b text-left bg-brand-primary text-white">
                          Tahun
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {W202_VARIANTS.map((variant, index) => (
                        <tr key={index}>
                          <td className="py-2 px-4 border-b">{variant.model}</td>
                          <td className="py-2 px-4 border-b">{variant.engine}</td>
                          <td className="py-2 px-4 border-b">{variant.power}</td>
                          <td className="py-2 px-4 border-b">{variant.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Maintenance Tips */}
            <div>
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
                Tips Perawatan W202
              </h3>
              <div className="space-y-6">
                {/* Engine Maintenance */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-sans font-semibold text-lg text-brand-primary mb-3">
                    Mesin
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>
                        Ganti oli mesin secara rutin setiap 5.000 - 7.500 km dengan oli
                        berkualitas 5W-40 atau 10W-40
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>
                        Periksa dan ganti filter oli dan filter udara setiap 15.000 km
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>
                        Untuk mesin M111, periksa kondisi gasket kepala silinder secara
                        berkala
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Cooling System */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-sans font-semibold text-lg text-brand-primary mb-3">
                    Sistem Pendingin
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>Selalu gunakan coolant khusus Mercedes-Benz atau setara</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>Periksa kondisi radiator dan water pump setiap 30.000 km</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>Ganti coolant setiap 2 tahun atau 40.000 km</span>
                    </li>
                  </ul>
                </div>

                {/* Electrical System */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-sans font-semibold text-lg text-brand-primary mb-3">
                    Sistem Kelistrikan
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>Periksa kondisi baterai dan alternator secara rutin</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>Perhatikan gejala error pada sistem SRS dan ABS</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>Periksa fungsi semua lampu dan indikator dashboard</span>
                    </li>
                  </ul>
                </div>

                {/* Suspension System */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-sans font-semibold text-lg text-brand-primary mb-3">
                    Sistem Suspensi
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>
                        Lakukan pengecekan ball joint, bushing, dan link stabilizer setiap
                        20.000 km
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>Periksa kondisi shock absorber setiap 40.000 km</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand-accent mt-1 mr-3 shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span>Spooring dan balancing ban setiap 10.000 km</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6 text-center">
              Galeri W202
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {GALLERY_IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-white">
                    <p className="text-sm font-medium">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
