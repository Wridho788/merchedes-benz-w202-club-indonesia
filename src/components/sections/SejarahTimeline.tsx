"use client";

import { useState } from 'react'
import clsx from 'clsx'

const TIMELINE_DATA = [
  {
    id: 1,
    date: "May 2025",
    title: "Keputusan Menteri Hukum Republik Indonesia tentang Pengesahan Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA",
    location: "Jakarta Selatan",
    description: "Keputusan Menteri Hukum Republik Indonesia Nomor AHU-0002887.AH.01.07.TAHUN 2025 Tentang Pengesahan Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA: Menetapkan memberikan pengesahan Perkumpulan: MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA Berkedudukan di JAKARTA SELATAN, sesuai salinan Akta Nomor 03 Tanggal 10 Maret 2025 yang dibuat oleh MUHAMMAD SYARIF UMAR S.H., M.KN.,, yang berkedudukan di KOTA DEPOK"
  },
  {
    id: 2,
    date: "March 2025",
    title: "Akta Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA",
    location: "Depok",
    description: "Akta PendirianPerkumpulan disusun untuk proses pengajuan Badan Hukum Perkumpulan"
  },
  {
    id: 3,
    date: "September 2023",
    title: "Penyerahan Sertifikat Pengurus Pusat MBW202CI dari Mercedes-Benz Club Indonesia",
    location: "Sentul International Circuit",
    description: "Penyerahan Sertifikat Pengurus Pusat MBW202CI dari Mercedes-Benz Club Indonesia yang diselenggarakan bertepatan pada acara Autospeed Festival di Sentul Internasional Circuit pada 2 September 2023 sekaligus Pemecahan Rekor Muri 1000 Mercedes Benz berkumpul dan berparade."
  },
  {
    id: 4,
    date: "June 2023",
    title: "Revisi Anggaran Dasar Mercedes-Benz Club Indonesia yang Mengakomodasi Keberadaan Pengurus Pusat Club Variant",
    location: "Bogor",
    description: "Pada Munas X Mercedes-Benz Club Indonesia yang berlangsung di Bogor 24 Juni 2023 telah dilakukan revisi Anggaran Dasar yang mengakomodir keberadaan Pengurus Pusat Club Variant seperti MBW202CI."
  },
  {
    id: 5,
    date: "February 2016",
    title: "MBW202CI District 04.2 Solo Berdiri",
    location: "Solo",
    description: "Pengukuhan pendirian MBW202CI District 04.2 Solo."
  },
  {
    id: 6,
    date: "June 2015",
    title: "Anniversary ke-5",
    location: "Jakarta - Bandung",
    description: "Merayakan ulang tahun ke-5 dengan konvoi besar dari Jakarta ke Bandung. Acara ini menarik perhatian media otomotif dan menghasilkan pendaftaran member baru yang signifikan."
  },
  {
    id: 7,
    date: "May 2013",
    title: "MBW202CI Region 06 Yogyakarta Berdiri",
    location: "Yogyakarta",
    description: "Pengukuhan pendirian MBW202CI Region 06 Yogyakarta"
  },
  {
    id: 8,
    date: "July 2012",
    title: "MBW202CI District 04.1 Pekalongan Berdiri",
    location: "Pekalongan",
    description: "Pengukuhan pendirian MBW202CI District 04.1 Pekalongan."
  },
  {
    id: 9,
    date: "June 2011",
    title: "MBW202CI Region 05 Medan Berdiri",
    location: "Medan",
    description: "Pengukuhan pendirian MBW202CI Region 05 Medan."
  },
  {
    id: 10,
    date: "March 2010",
    title: "MBW202CI Region 04 Semarang Berdiri",
    location: "Semarang",
    description: "Pengukuhan pendirian MBW202CI Region 04 Semarang."
  },
  {
    id: 11,
    date: "October 2009",
    title: "MBW202CI District 03.1 Malang Berdiri",
    location: "Malang",
    description: "Pengukuhan pendirian MBW202CI District 03.1 Malang."
  },
  {
    id: 12,
    date: "April 2009",
    title: "MBW202CI Region 03 Surabaya Berdiri",
    location: "Surabaya",
    description: "Pengukuhan pendirian MBW202CI Region 03 Surabaya"
  },
  {
    id: 13,
    date: "February 2008",
    title: "MBW202CI Region 02 Bandung Berdiri",
    location: "Bandung",
    description: "Pengukuhan pendirian MBW202CI Region 02 Bandung yang dihadiri Presiden MBW202CI sdr Arief Rahman Hakim"
  },
  {
    id: 14,
    date: "November 2007",
    title: "Musyawarah Nasional Pertama MBW202CI",
    location: "Sentul Selatan",
    description: "Bertempat di Taman Budaya Sentul, Sentul Selatan, diselenggarakan Musyawarah Nasional Pertama dan Anggaran Dasar dan Anggaran Rumah Tangga club disempurnakan serta dibentuk susunan lengkap pengurus periode yang pertama yaitu periode 2007 – 2009"
  },
  {
    id: 15,
    date: "July 2007",
    title: "Hari Berdirinya MBW202CI",
    location: "Ciputat, Jakarta",
    description: "Hari Sabtu tanggal 7 Juli 2007 adalah merupakan hari pengukuhan berdirinya MBW202CI yang bertepatan dengan acara Mercedes-Benz Community Gathering dengan tema Young Timer yang diadakan oleh PT DaimlerChrysler Distribution Indonesia di Ciputat, Jakarta."
  }
]

export default function SejarahTimeline() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="relative pl-8 border-l-2 border-brand-accent space-y-12">
      {TIMELINE_DATA.map((item) => {
        const isExpanded = expandedItems.includes(item.id)
        
        return (
          <div key={item.id} className="timeline-entry relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[25px] mt-1 w-6 h-6 rounded-full bg-brand-accent z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>

            {/* Timeline Card */}
            <div
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => toggleExpand(item.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-xl text-brand-primary mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-sm text-brand-accent mb-2 flex-wrap gap-4">
                    {/* Calendar Icon */}
                    <div className="flex items-center">
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
                        className="w-4 h-4 mr-1"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span>{item.date}</span>
                    </div>

                    {/* Location Icon */}
                    <div className="flex items-center">
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
                        className="w-4 h-4 mr-1"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Chevron Button */}
                <button className="text-gray-500 ml-4">
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
                    className={clsx(
                      "w-5 h-5 transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )}
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>

              {/* Description */}
              <p className={clsx(
                "text-gray-700 mt-2 transition-all duration-300",
                !isExpanded && "line-clamp-2"
              )}>
                {item.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
