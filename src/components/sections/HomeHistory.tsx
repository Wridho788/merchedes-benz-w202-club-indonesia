'use client'

import { useState } from 'react'
import clsx from 'clsx'

interface Milestone {
  id: number
  title: string
  date: string
  location: string
  description: string
  highlightedText: string
}

const MILESTONES: Milestone[] = [
  {
    id: 1,
    title: "Keputusan Menteri Hukum Republik Indonesia tentang Pengesahan Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA",
    date: "May 2025",
    location: "Jakarta",
    description: "Keputusan Menteri Hukum Republik Indonesia Nomor AHU-0002887.AH.01.07.TAHUN 2025 Tentang Pengesahan Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA: Menetapkan memberikan pengesahan Perkumpulan: MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA Berkedudukan di JAKARTA SELATAN, sesuai salinan Akta Nomor 03 Tanggal 10 Maret 2025 yang dibuat oleh MUHAMMAD SYARIF UMAR S.H., M.KN.,, yang berkedudukan di KOTA DEPOK",
    highlightedText: "Keputusan Menteri Hukum Republik Indonesia Nomor AHU-0002887.AH.01.07.TAHUN 2025 Tentang Pengesahan Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA:"
  },
  {
    id: 2,
    title: "Akta Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA",
    date: "March 2025",
    location: "Jakarta",
    description: "Akta Pendirian Perkumpulan ditandatangani untuk proses pengajuan Badan Hukum Perkumpulan MBW202CI yang dibuat oleh MUHAMMAD SYARIF UMAR S.H., M.KN., Notaris di Kota Depok dengan Akta Nomor 03 Tanggal 10 Maret 2025, yang mencakup Anggaran Dasar dan Anggaran Rumah Tangga perkumpulan.",
    highlightedText: "Akta Pendirian Perkumpulan ditandatangani untuk proses pengajuan Badan Hukum Perkumpulan MBW202CI"
  },
  {
    id: 3,
    title: "Penyerahan Sertifikat Pengurus Pusat MBW202CI dari Mercedes-Benz Club Indonesia",
    date: "September 2024",
    location: "Sentul, Jawa Barat",
    description: "Penyerahan Sertifikat Pengurus Pusat MBW202CI dari Mercedes-Benz Club Indonesia yang diselenggarakan bersamaan pada acara Autospeed Festival di Sentul International Circuit yang dihadiri oleh seluruh pengurus dan anggota club mobil Mercedes-Benz di Indonesia sebagai bentuk penguatan komunitas otomotif nasional.",
    highlightedText: "Penyerahan Sertifikat Pengurus Pusat MBW202CI dari Mercedes-Benz Club Indonesia"
  },
  {
    id: 4,
    title: "Gathering Nasional ke-15 MBW202CI",
    date: "July 2022",
    location: "Bali",
    description: "Gathering Nasional ke-15 yang diselenggarakan di Pulau Dewata Bali dengan tema 'Unity in Diversity' dihadiri oleh lebih dari 200 anggota dari berbagai region di Indonesia. Acara ini menandai 15 tahun perjalanan klub dengan berbagai kegiatan touring, pameran, dan diskusi teknis seputar perawatan Mercedes-Benz W202.",
    highlightedText: "Gathering Nasional ke-15 MBW202CI di Bali"
  },
  {
    id: 5,
    title: "Pembentukan Region Yogyakarta",
    date: "January 2020",
    location: "Yogyakarta",
    description: "Peresmian MBW202CI Region Yogyakarta sebagai region ke-9 yang dibentuk untuk memperluas jangkauan dan memperkuat solidaritas antar anggota di wilayah Daerah Istimewa Yogyakarta. Region ini aktif mengadakan kegiatan rutin bulanan dan bakti sosial kepada masyarakat.",
    highlightedText: "Pembentukan Region Yogyakarta sebagai region ke-9"
  },
  {
    id: 6,
    title: "Kerjasama dengan Mercedes-Benz Indonesia",
    date: "March 2015",
    location: "Jakarta",
    description: "Penandatanganan Memorandum of Understanding (MoU) dengan PT Mercedes-Benz Distribution Indonesia sebagai mitra strategis dalam berbagai kegiatan otomotif, termasuk test drive, product launch, dan event khusus untuk pemilik Mercedes-Benz di Indonesia. Kerjasama ini memperkuat posisi MBW202CI sebagai komunitas resmi.",
    highlightedText: "Penandatanganan MoU dengan PT Mercedes-Benz Distribution Indonesia"
  },
  {
    id: 7,
    title: "Musyawarah Nasional Pertama",
    date: "February 2008",
    location: "Sentul",
    description: "Musyawarah Nasional pertama diselenggarakan pada tanggal 17 Februari 2008 di Sentul untuk menyempurnakan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) yang telah dibuat saat pendirian. Munas ini juga menetapkan struktur organisasi yang lebih solid dan program kerja jangka panjang untuk pengembangan klub.",
    highlightedText: "Musyawarah Nasional pertama untuk menyempurnakan AD/ART"
  }
]

export default function HomeHistory() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedMilestones = showAll ? MILESTONES : MILESTONES.slice(0, 5)

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-primary inline-block">
            History
            <div className="h-1 w-20 bg-brand-accent mt-2"></div>
          </h2>
        </div>

        {/* History Paragraphs */}
        <div className="prose max-w-none mb-12 md:mb-16">
          <p className="text-brand-gray leading-relaxed mb-4">
            Mercedes Benz W202 Club Indonesia (MBW202CI) resmi didirikan pada 7 Juli 2007 oleh enam orang pendiri yang merupakan pemilik dan penggemar Mercedes-Benz tipe W202. MBW202CI dideklarasikan dalam acara "Mercedes-Benz Young Timer Day" di Ciputat dan sejak awal telah memiliki struktur organisasi serta AD/ART sederhana, yang kemudian disempurnakan dalam Musyawarah Nasional pertama pada 17 Februari 2008 di Sentul.
          </p>
          
          <p className="text-brand-gray leading-relaxed mb-4">
            Visi utamanya adalah menghimpun dan menyatukan pemilik/penggemar W202 di seluruh Indonesia. Saat ini, MBW202CI telah memiliki lebih dari 1000 anggota dan memperluas jangkauan dengan membentuk beberapa region dan distrik di berbagai kota besar seperti Jakarta, Bandung, Surabaya, Malang, Semarang, Pekalongan, Solo, Medan, dan Yogyakarta.
          </p>
          
          <p className="text-brand-gray leading-relaxed mb-4">
            MBW202CI menjadi anggota Mercedes-Benz Club Indonesia (MB Club INA), organisasi induk resmi yang mewadahi berbagai klub pecinta dan pemilik mobil Mercedes-Benz di seluruh Indonesia, dengan tujuan untuk mempererat silaturahmi antar komunitas, menjaga nilai sejarah dan orisinalitas kendaraan, serta menjadi mitra strategis bagi ATPM Mercedes-Benz Indonesia dalam berbagai kegiatan otomotif. Klub-klub yang tergabung dalam MB Club INA mencakup berbagai tipe dan generasi Mercedes-Benz, dari model klasik hingga modern.
          </p>
        </div>

        {/* Milestones Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-heading text-brand-primary mb-6 md:mb-8">
            Tonggak Sejarah Kami
          </h3>
          
          <div className="space-y-4">
            {displayedMilestones.map((milestone) => (
              <div 
                key={milestone.id}
                className="border-l-4 border-brand-accent bg-gray-50 rounded-r-lg overflow-hidden"
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-heading text-brand-primary text-lg md:text-xl mb-2">
                        {milestone.title}
                      </h4>
                      <div className="flex flex-wrap gap-3 text-sm text-brand-gray mb-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {milestone.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {milestone.location}
                        </span>
                      </div>
                      
                      {expandedId === milestone.id && (
                        <div className="text-brand-gray leading-relaxed">
                          <p className="mb-2">
                            {milestone.description.split(milestone.highlightedText)[0]}
                            <strong className="text-brand-primary">{milestone.highlightedText}</strong>
                            {milestone.description.split(milestone.highlightedText)[1]}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => setExpandedId(expandedId === milestone.id ? null : milestone.id)}
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-brand-accent hover:bg-brand-accent/10 rounded-full transition-colors"
                      aria-label={expandedId === milestone.id ? "Collapse" : "Expand"}
                    >
                      <svg 
                        className={clsx("w-5 h-5 transition-transform", expandedId === milestone.id && "rotate-180")} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && MILESTONES.length > 5 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors rounded-lg font-medium"
              >
                Selengkapnya
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
