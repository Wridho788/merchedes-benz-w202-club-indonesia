'use client'

import { useState, useEffect, useRef } from 'react'
import type { Metadata } from 'next'
import { usePartner, usePartnerSponsorship, usePartnerById, usePartnerCities, usePartnerCategories } from '@/lib/hooks/usePartner'
import type { PartnerItem, PartnerPayload } from '@/lib/api/client'

// This would be in a layout file for SSR metadata, but for now we'll keep it client-side
// export const metadata: Metadata = {
//   title: 'Merchant & Sponsor MBW202CI | Partner Resmi Mercedes Benz W202 Club Indonesia',
//   ...
// }

interface MerchantFilter {
  category: string
  city: string
}

interface PartnerDetailModalProps {
  partner: PartnerItem | null
  isOpen: boolean
  onClose: () => void
  imageUrl: string
}

// Map Component with Marker
function MapComponent({ latitude, longitude, name }: { latitude: number, longitude: number, name: string }) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current || typeof window === 'undefined') return

    // Load Leaflet dynamically
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
    script.onload = () => {
      const L = (window as any).L
      if (!L || !mapRef.current) return

      // Initialize map
      const map = L.map(mapRef.current).setView([latitude, longitude], 15)

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map)

      // Add marker
      L.marker([latitude, longitude], {
        icon: L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        }),
      })
        .addTo(map)
        .bindPopup(`${name.toLocaleUpperCase()}`)
        .openPopup()
    }
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [latitude, longitude])

  return <div ref={mapRef} style={{ width: '100%', height: '400px', borderRadius: '0.5rem' }} />
}

// Partner Detail Modal Component
function PartnerDetailModal({ partner, isOpen, onClose, imageUrl }: PartnerDetailModalProps) {
  if (!isOpen || !partner) return null

  // Parse coordinates
  const coords = partner.coordinate.split(',').map(c => parseFloat(c.trim()))
  const latitude = coords[0]
  const longitude = coords[1]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-brand-primary">{partner.name.toUpperCase()}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* Partner Image */}
          {partner.image && (
            <div className="mb-6">
              <img
                src={`${imageUrl}${partner.image}`}
                alt={partner.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Partner Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Kategori</h3>
              <p className="text-gray-600">{partner.category.toUpperCase()}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Kota</h3>
              <p className="text-gray-600">{partner.city_name.toUpperCase()}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Kontak Person</h3>
              <p className="text-gray-600">{partner.cp.toUpperCase()}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Telepon 1</h3>
              <p className="text-gray-600">{partner.phone1}</p>
            </div>
            {partner.phone2 && partner.phone2 !== '0' && (
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Telepon 2</h3>
                <p className="text-gray-600">{partner.phone2}</p>
              </div>
            )}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
              <p className="text-gray-600 break-all">{partner.email}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Alamat</h3>
            <p className="text-gray-600">{partner.address}</p>
          </div>

          {partner.website && partner.website !== '-' && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Website</h3>
              <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                {partner.website}
              </a>
            </div>
          )}

          {partner.notes && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Catatan</h3>
              <p className="text-gray-600">{partner.notes}</p>
            </div>
          )}

          {/* Map */}
          {partner.coordinate !== '0' && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Lokasi</h3>
              <MapComponent latitude={latitude} longitude={longitude} name={partner.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Sponsors Slider Component
function SponsorsSlider({ sponsors, imageUrl }: { sponsors: PartnerItem[], imageUrl: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (sponsors.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Auto-rotate every 5 seconds

    return () => clearInterval(interval)
  }, [sponsors.length])

  if (sponsors.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="text-center py-8">
          <p className="text-gray-500">Tidak ada sponsor yang tersedia saat ini.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-gray-50 rounded-lg p-2 overflow-hidden">
      {/* Carousel Container */}
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="w-full flex transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              {sponsor.image && (
                <img
                  src={`${imageUrl}${sponsor.image}`}
                  alt={sponsor.name}
                  className="w-full h-[300px] object-cover mx-2 rounded-sm"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      {sponsors.length > 1 && (
        <div className="flex justify-center gap-2 mt-2">
          {sponsors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-brand-primary w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Sponsor Name */}
      {/* <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          {sponsors[currentIndex].name}
        </p>
      </div> */}
    </div>
  )
}

export default function MerchantPage() {
  // Merchants State
  const [merchantFilter, setMerchantFilter] = useState<MerchantFilter>({
    category: '',
    city: '',
  })
  const [merchantPayload, setMerchantPayload] = useState<PartnerPayload>({
    limit: 100,
    offset: 0,
    category: '',
    city: '',
  })
  const [selectedPartner, setSelectedPartner] = useState<PartnerItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [sponsorPayload, setSponsorPayload] = useState<PartnerPayload>({
    limit: 100,
    offset: 0,
    category: '',
    city: '',
  })

  // Hooks
  const { data: merchantData, isLoading: merchantLoading } = usePartner(merchantPayload)
  const { data: sponsorData, isLoading: sponsorLoading } = usePartnerSponsorship(sponsorPayload)
  const { data: citiesData } = usePartnerCities()
  const { data: categoriesData } = usePartnerCategories()

  const merchants = merchantData?.content?.result || []
  const merchants_image_url = merchantData?.content?.image_url || ''
  const sponsors = sponsorData?.content?.result || []
  const sponsors_image_url = sponsorData?.content?.image_url || ''
  const cities = citiesData?.content?.result || []
  const categories = categoriesData?.content?.result || []

  const handlePartnerClick = (partner: PartnerItem) => {
    setSelectedPartner(partner)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedPartner(null), 300)
  }

  return (
    <div className="page-wrapper">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
              Merchant &amp; Sponsor
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner resmi yang mendukung W202 Club of Indonesia.
            </p>
          </div>

          {/* Merchants & Sponsors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Official Merchants */}
            <div>
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6 uppercase">
                Official Merchants
              </h3>

              {/* Merchant Filters */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      KATEGORI
                    </label>
                    <select
                      value={merchantFilter.category}
                      onChange={(e) => {
                        const newFilter = { ...merchantFilter, category: e.target.value }
                        setMerchantFilter(newFilter)
                        setMerchantPayload({
                          limit: 100,
                          offset: 0,
                          category: e.target.value,
                          city: merchantFilter.city,
                        })
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      <option value="">Semua Kategori</option>
                      {categories.map((cat) => (
                        <option key={cat.category} value={cat.category}>
                          {cat.category.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      KOTA
                    </label>
                    <select
                      value={merchantFilter.city}
                      onChange={(e) => {
                        const newFilter = { ...merchantFilter, city: e.target.value }
                        setMerchantFilter(newFilter)
                        setMerchantPayload({
                          limit: 100,
                          offset: 0,
                          category: merchantFilter.category,
                          city: e.target.value,
                        })
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      <option value="">Semua Kota</option>
                      {cities.map((city) => (
                        <option key={city.city_name} value={city.city_name}>
                          {city.city_name.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Merchants List */}
              {merchantLoading ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Memuat merchant...</p>
                </div>
              ) : merchants.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Tidak ada merchant yang ditemukan.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {merchants.map((merchant) => (
                    <div
                      key={merchant.id}
                      onClick={() => handlePartnerClick(merchant)}
                      className="bg-gray-50 rounded-lg p-4 flex items-center transition duration-300 hover:shadow-md cursor-pointer"
                    >
                      <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg flex items-center justify-center p-2">
                        <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white text-xl"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <circle cx="12" cy="12" r="4"></circle>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4 flex-grow">
                        <h4 className="font-sans font-semibold text-brand-primary">
                          {merchant.name.toUpperCase()}
                        </h4>
                        <p className="text-sm text-gray-600">{merchant.address}</p>
                        <div className="flex gap-2 mt-2">
                          <div className="text-xs bg-brand-primary text-white px-2 py-1 rounded uppercase">
                            {merchant.category}
                          </div>
                          <div className="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded">
                            {merchant.city_name.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Official Sponsors */}
            <div>
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
                Official Sponsors
              </h3>

              {/* Sponsors Slider */}
              {sponsorLoading ? (
                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="text-center py-8">
                    <p className="text-gray-500">Memuat sponsor...</p>
                  </div>
                </div>
              ) : (
                <SponsorsSlider sponsors={sponsors} imageUrl={sponsors_image_url} />
              )}

              {/* CTA Box */}
              <div className="mt-8 bg-brand-accent bg-opacity-10 rounded-lg p-6 border border-brand-accent border-opacity-30">
                <h4 className="font-sans font-semibold text-brand-primary mb-3">
                  Tertarik menjadi Merchant atau Sponsor?
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  Dapatkan akses ke ratusan member W202 Club Indonesia dan
                  manfaatkan exposure di berbagai kegiatan klub.
                </p>
                <button className="bg-brand-accent text-white px-6 py-2 rounded font-medium hover:bg-opacity-90 transition">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>

          {/* Partner Detail Modal */}
          <PartnerDetailModal
            partner={selectedPartner}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            imageUrl={merchants_image_url}
          />

          {/* Program Partner Section */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-2">
                Program Partner W202 Club Indonesia
              </h3>
              <p className="text-gray-600">
                Bergabunglah dengan Program Partner W202 Club Indonesia dan dapatkan
                manfaat khusus
              </p>
            </div>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Merchant Program */}
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="p-6 bg-brand-primary text-white">
                  <div className="text-2xl font-semibold">Program Merchant</div>
                  <div className="text-sm text-gray-200">
                    Untuk penyedia produk dan jasa otomotif
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Keuntungan Menjadi Merchant
                      </h4>
                      <ul className="text-sm space-y-2 mt-2">
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Exposure ke seluruh anggota W202 Club Indonesia</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Listing di website dan media sosial klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Kesempatan promosi di event klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Prioritas kerja sama untuk event klub</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Kategori Merchant
                      </h4>
                      <p className="text-sm mt-1">
                        Bengkel, supplier part, detailing, aksesoris, apparel, jasa
                        perawatan, dan lainnya
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-brand-primary text-white rounded font-medium hover:bg-opacity-90 transition">
                    Menjadi Merchant Partner
                  </button>
                </div>
              </div>

              {/* Sponsor Program */}
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="p-6 bg-brand-accent text-white">
                  <div className="text-2xl font-semibold">Program Sponsor</div>
                  <div className="text-sm text-gray-100">Untuk brand dan perusahaan</div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-primary mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Keuntungan Menjadi Sponsor
                      </h4>
                      <ul className="text-sm space-y-2 mt-2">
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Branding di semua materi publikasi klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Booth prioritas di setiap event klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Akses eksklusif ke database anggota</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Co-branding untuk merchandise klub</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-primary mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Paket Sponsorship
                      </h4>
                      <p className="text-sm mt-1">
                        Tersedia paket Platinum, Gold, dan Silver dengan berbagai
                        benefit sesuai kebutuhan
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-brand-accent text-white rounded font-medium hover:bg-opacity-90 transition">
                    Menjadi Sponsor Partner
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-10 text-center">
              <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                Hubungi Divisi Merchant &amp; Sponsor
              </h4>
              <div className="flex justify-center">
                <a
                  href="mailto:mbw202clubindonesia@gmail.com"
                  className="flex items-center text-brand-primary hover:text-brand-accent transition"
                >
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
                    className="mr-2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>mbw202clubindonesia@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Program Partner Section */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-2">
                Program Partner W202 Club Indonesia
              </h3>
              <p className="text-gray-600">
                Bergabunglah dengan Program Partner W202 Club Indonesia dan dapatkan
                manfaat khusus
              </p>
            </div>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Merchant Program */}
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="p-6 bg-brand-primary text-white">
                  <div className="text-2xl font-semibold">Program Merchant</div>
                  <div className="text-sm text-gray-200">
                    Untuk penyedia produk dan jasa otomotif
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Keuntungan Menjadi Merchant
                      </h4>
                      <ul className="text-sm space-y-2 mt-2">
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Exposure ke seluruh anggota W202 Club Indonesia</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Listing di website dan media sosial klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Kesempatan promosi di event klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Prioritas kerja sama untuk event klub</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Kategori Merchant
                      </h4>
                      <p className="text-sm mt-1">
                        Bengkel, supplier part, detailing, aksesoris, apparel, jasa
                        perawatan, dan lainnya
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-brand-primary text-white rounded font-medium hover:bg-opacity-90 transition">
                    Menjadi Merchant Partner
                  </button>
                </div>
              </div>

              {/* Sponsor Program */}
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="p-6 bg-brand-accent text-white">
                  <div className="text-2xl font-semibold">Program Sponsor</div>
                  <div className="text-sm text-gray-100">Untuk brand dan perusahaan</div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-primary mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Keuntungan Menjadi Sponsor
                      </h4>
                      <ul className="text-sm space-y-2 mt-2">
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Branding di semua materi publikasi klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Booth prioritas di setiap event klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Akses eksklusif ke database anggota</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Co-branding untuk merchandise klub</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-primary mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Paket Sponsorship
                      </h4>
                      <p className="text-sm mt-1">
                        Tersedia paket Platinum, Gold, dan Silver dengan berbagai
                        benefit sesuai kebutuhan
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-brand-accent text-white rounded font-medium hover:bg-opacity-90 transition">
                    Menjadi Sponsor Partner
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-10 text-center">
              <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                Hubungi Divisi Merchant &amp; Sponsor
              </h4>
              <div className="flex justify-center">
                <a
                  href="mailto:mbw202clubindonesia@gmail.com"
                  className="flex items-center text-brand-primary hover:text-brand-accent transition"
                >
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
                    className="mr-2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>mbw202clubindonesia@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
