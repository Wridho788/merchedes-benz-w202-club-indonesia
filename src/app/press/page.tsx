'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Image from 'next/image'

const PRESS_RELEASES = [
  {
    id: 1,
    title: 'Mercedes-Benz W202 Gelar Rakernas di Semarang',
    category: 'Media Coverage',
    date: '3 November 2025',
    source: 'Media Source',
    excerpt: 'Mercedes-Benz W202 Gelar Rakernas di Semarang eKoran Lingkar Edisi 3 November 2025',
    image: '/images/press-default.jpg',
    link: 'https://koranlingkar.com/view/2025-11-03'
  },
  {
    id: 2,
    title: 'Dari mobil klasik hingga persaudaraan, Mercy W202 Club Indonesia Mantapkan langkah menuju dua dekade',
    category: 'Press Release',
    date: '1 November 2025',
    source: 'Media Source',
    excerpt: 'Mantapkan Langkah Menuju Dua Dekade',
    image: '/images/press-default.jpg',
    link: 'https://lingkar.co/dari-mobil-klasik-hingga-persaudaraan-mercy-w202-club-indonesia-mantapkan-langkah-menuju-dua-dekade/'
  },
  {
    id: 3,
    title: 'Jatim-Bali Benz Meet Up 2025',
    category: 'Media Coverage',
    date: '25 Februari 2025',
    source: 'Media Source',
    excerpt: 'MBW202CI Surabaya Region berkolaborasi dengan Mercedes-Benz Club Indonesia Regional Jatim-Bali untuk menyelenggarakan acara di Surabaya yang diikuti oleh 121 kendaraan dan 19 klub.',
    image: 'https://static.wixstatic.com/media/4c022a_0e8184d8e556497f92033da5c8075e28~mv2.jpg/v1/fill/w_740,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c022a_0e8184d8e556497f92033da5c8075e28~mv2.jpg',
    link: 'https://www.otoplus-online.com/post/jatim-bali-benz-meet-up-2025-diramaikan-121-mercy-berbagai-model-dan-tahun-produksi'
  },
  {
    id: 4,
    title: 'Ketua Umum IMI Apresiasi Fun Rally Mercedes Benz W202 Club Indonesia',
    category: 'Media Coverage',
    date: '23 Juli 2024',
    source: 'Media Source',
    excerpt: 'Bambang Soesatyo, Ketua MPR RI ke-16 sekaligus Wakil Ketua Umum Partai Golkar dan Ketua Umum Ikatan Motor Indonesia (IMI), menyampaikan apresiasinya terhadap penyelenggaraan Fun Rally oleh Mercedes Benz W202 Club Indonesia (MBW202CI). Acara ini diadakan dalam rangka merayakan HUT ke-17 MBW202CI, dengan total 21 piala dan 1 piala Best Overall yang dipersembahkan oleh IMI DKI Jakarta.',
    image: 'https://cdn-1.timesmedia.co.id/images/2024/07/23/IMI-Bambang-Soesatyo.jpg',
    link: '#'
  }
]

export default function PressPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPress = PRESS_RELEASES.filter((item) => {
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'press-release' && item.category === 'Press Release') ||
      (selectedFilter === 'media-coverage' && item.category === 'Media Coverage')
    
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  return (
    <div className="page-wrapper">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
              Press Release
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Liputan media dan press release resmi W202 Club of Indonesia.
            </p>
          </div>

          {/* Filter & Search Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 space-y-4 md:space-y-0">
              {/* Filter Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === 'all'
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setSelectedFilter('press-release')}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === 'press-release'
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white'
                  }`}
                >
                  Press Release
                </button>
                <button
                  onClick={() => setSelectedFilter('media-coverage')}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === 'media-coverage'
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white'
                  }`}
                >
                  Media Coverage
                </button>
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <input
                  type="text"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Cari press release..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>

            {/* Press Release Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPress.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="inline-block mb-2 text-xs font-medium text-brand-primary bg-gray-50 px-2 py-1 rounded">
                      {item.category}
                    </div>
                    <h3 className="font-sans font-semibold text-lg text-brand-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {item.date} • {item.source}
                    </p>
                    <p className="text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                    {item.link !== '#' && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-full py-2 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded text-sm font-medium transition">
                          Baca Artikel
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="px-6 py-2 border border-brand-primary text-brand-primary rounded font-medium hover:bg-brand-primary hover:text-white transition">
                Lihat Semua Press Release
              </button>
            </div>
          </div>

          {/* Contact Media Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-sans font-semibold text-xl text-brand-primary mb-4">
                Untuk Media
              </h3>
              <p className="text-gray-600 mb-6">
                W202 Club Indonesia terbuka untuk kolaborasi dengan media dalam
                liputan kegiatan klub dan event-event yang diselenggarakan. Silahkan
                hubungi kami untuk informasi lebih lanjut, wawancara dengan pengurus,
                atau permintaan press release.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-sans font-medium text-brand-primary mb-2">
                  Kontak Media
                </h4>
                <p className="text-sm">
                  <span className="font-medium">Email:</span>{' '}
                  mbw202clubindonesia@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
