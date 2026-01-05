"use client";

import { useState } from 'react'
import Image from 'next/image'

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Jambore Nasional XX di Sumarecon Bandung",
    date: "6 Desember 2025",
    location: "Bandung",
    description: "Event tahunan Mercedes Benz Club Indonesia",
    image: null,
    hasImage: false
  },
  {
    id: 2,
    title: "Coaching Clinic by Thomas Narukama W202.01.074",
    date: "22 November 2025",
    location: "Tanah Air Cafe, TVRI Jakarta",
    description: "Memberikan pemahaman tentang bagaimana membuat W202 Fun to Drive",
    image: null,
    hasImage: false
  },
  {
    id: 3,
    title: "Classic Auto Show",
    date: "Coming Soon",
    location: "JCC Senayan, Jakarta",
    description: "Pameran mobil klasik dengan booth khusus W202 Club Indonesia.",
    image: "/images/event-default.jpg",
    hasImage: true
  },
  {
    id: 4,
    title: "W202 Weekend Drive",
    date: "Coming Soon",
    location: "Puncak, Bogor",
    description: "Touring weekend ke Puncak dengan agenda makan bersama dan fotografi.",
    image: "/images/event-default.jpg",
    hasImage: true
  },
  {
    id: 5,
    title: "Techno Workshop",
    date: "Coming Soon",
    location: "Atelier Klasik, Bandung",
    description: "Workshop teknis tentang perawatan dan troubleshooting mesin M111.",
    image: "/images/event-default.jpg",
    hasImage: true
  },
  {
    id: 6,
    title: "Anniversary Gathering",
    date: "Coming Soon",
    location: "SCBD, Jakarta Selatan",
    description: "Perayaan ulang tahun ke-13 W202 Club Indonesia dengan konvoi dan pameran mobil.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80",
    hasImage: true
  }
]

const LATEST_EVENTS = [
  {
    id: 1,
    title: "Super Street Star Night Race Series",
    date: "8 November 2025",
    location: "Miami Beach PIK2 Banten",
    description: "Mercedes Benz WDua Nol Dua Club Indonesia Region 01 Jakarta ikut berpartisipasi dalam Super Street Star Night Race Series yang dilaksanakan oleh MB Club Ina dalam rangka Road to JAMNAS XX BANDUNG 2025. Racer Sekjen Kiki Yanreza W202 C240, Doddy Kurniawan W202 C200 Turbo dan Meitius W202 C230 Kompre. Dalam event Super Street Star Night Race Series, MBW202 Motorsport mendapatkan 6 trophy untuk kategori : - Star 17 Detik 402M - Juara 3 Kiki Yanreza - Star 18 Detik 402M - Juara 4 Meitius Dicky - Star FFA 201M - Juara 4 Doddy Kurniawan - Star 11 Detik 201 - Juara 4 Kiki Yanreza - Team Terbaik 402M - Juara 5 - Star Cool - Doddy Kurniawan",
    image: "/images/event-default.jpg",
    category: "Outdoor",
    type: "Eksternal",
    videoUrl: null
  },
  {
    id: 2,
    title: "Rakernas MBW202CI Tahun 2025",
    date: "1 November 2025",
    location: "Semarang",
    description: "Pengurus Pusat Mercedes Benz WDua Nol Dua Club Indonesia mengadakan Rapat Kerja Nasional Tahun 2025 di Kota Semarang. Dihadiri oleh Presiden, Founder, Ketua Dewan Pembina, Ketua Dewan Pembina MB Club Ina, mantan Presiden, Chief, Deputy, Sekjen dan Bendahara Region dan District",
    image: "https://i.ytimg.com/vi/jOzip2FwWWQ/maxresdefault.jpg",
    category: "Meeting",
    type: "Internal",
    videoUrl: "https://youtu.be/jOzip2FwWWQ?si=MLgHr_wtIFkzzoqy"
  },
  {
    id: 3,
    title: "Touring Region 03 Surabaya & Grand Manohara MBW202CI 2025 Tawangmangu Karang Anyar Jawa Tengah",
    date: "3 Mei 2025",
    location: "Tawangmangu Jawa Tengah",
    description: "Start touring dimulai dari Tikum di rest area 726 dengan 11KR, perjalanan sekitar 2 jam melalui toll dan keluar di exit toll Madiun, kemudian dilanjutkan menuju kota Madiun untuk makan siang di Pecel Pojok yang menghidangkan nasi pecel khas Madiun, sekaligus support dari EVP 5, Om Hayik, untuk W202CI Region 03 Jakarta. Seperti region dan district lainnya, kami menginap di D'Lawu Mountain Cottage Tawangmangu dan beristirahat sejenak sebelum mengikuti acara puncak Grand Manohara W202CI 2025. Acara Puncak Grand Manohara W202CI 2025 diisi dengan: Performance Band Gala Dinner dengan menu utama Kambing Guling Pembacaan Puisi oleh Tante Dyah (Istri dari Om Deddy Z, member W202CI Region 01 Jakarta) Fun Lottery yang sudah disiapkan lebih dari 300 hadiah dari panitia dan hadiah kejutan tambahan lainnya.",
    image: "https://i.ytimg.com/vi/CucADICQow4/maxresdefault.jpg",
    category: "Touring. Grand Manohara",
    type: "Internal",
    videoUrl: "https://youtu.be/CucADICQow4?si=T_vDfXB8IN9wGeUb"
  }
]

export default function EventPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="page-wrapper">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
              Event
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai event yang diselenggarakan oleh W202 Club of Indonesia.
            </p>
          </div>

          {/* Event Mendatang - Horizontal Scroll */}
          <div className="mb-16">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
              Event Mendatang
            </h3>
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-6 min-w-max">
                {UPCOMING_EVENTS.map((event) => (
                  <div key={event.id} className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                    {event.hasImage ? (
                      <div className="h-40 overflow-hidden relative">
                        <div className="cursor-pointer w-full h-full">
                          <Image
                            src={event.image || '/images/event-default.jpg'}
                            alt={event.title}
                            width={288}
                            height={160}
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="h-40 bg-brand-primary flex flex-col items-center justify-center text-white cursor-pointer p-4">
                        <p className="text-xl font-sans font-bold text-center mb-2">
                          {event.title}
                        </p>
                        <p className="text-sm text-center">{event.date}</p>
                      </div>
                    )}
                    <div className="p-5">
                      <h4 className="font-sans font-semibold text-lg text-brand-primary">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">{event.location}</p>
                      <p className="text-sm mb-4 line-clamp-2">{event.description}</p>
                      <button className="w-full py-2 bg-brand-primary text-white rounded text-sm font-medium hover:bg-opacity-90 transition">
                        Detail Event
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kalender Event */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-sans font-semibold text-2xl text-brand-primary">
                Kalender Event
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === "all"
                      ? "bg-brand-primary text-white"
                      : "bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white"
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setSelectedFilter("internal")}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === "internal"
                      ? "bg-brand-primary text-white"
                      : "bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white"
                  }`}
                >
                  Internal
                </button>
                <button
                  onClick={() => setSelectedFilter("external")}
                  className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                    selectedFilter === "external"
                      ? "bg-brand-primary text-white"
                      : "bg-gray-50 text-brand-primary hover:bg-brand-accent hover:text-white"
                  }`}
                >
                  External
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                    Kalender Event
                  </h4>
                  <div className="border rounded-md p-3">
                    <p className="text-sm text-gray-500 text-center py-8">
                      Calendar akan ditampilkan di sini
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                    Event pada 6 Januari 2026
                  </h4>
                  <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Tidak ada event pada tanggal ini</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Terbaru */}
          <div className="mb-16">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
              Event Terbaru
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LATEST_EVENTS.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    {event.videoUrl ? (
                      <a
                        href={event.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative"
                      >
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={400}
                          height={224}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-3">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 5V19L19 12L8 5Z" fill="white"></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="cursor-pointer w-full h-full">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={400}
                          height={224}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-sans font-semibold text-brand-primary">
                        {event.title}
                      </h4>
                      <div
                        className={`text-xs px-2.5 py-0.5 rounded-full text-white ${
                          event.type === "Internal" ? "bg-brand-accent" : "bg-gray-400"
                        }`}
                      >
                        {event.type}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {event.date} • {event.location}
                    </p>
                    <p className="text-sm mb-4 line-clamp-3">{event.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="text-xs bg-gray-50 px-2 py-1 rounded text-brand-primary">
                        {event.category}
                      </div>
                    </div>
                    {event.videoUrl ? (
                      <a
                        href={event.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <button className="w-full py-2 bg-brand-primary text-white rounded text-sm font-medium hover:bg-opacity-90 transition">
                          Tonton Video
                        </button>
                      </a>
                    ) : (
                      <button className="w-full py-2 bg-brand-primary text-white rounded text-sm font-medium hover:bg-opacity-90 transition">
                        Detail Event
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-2 border border-brand-primary text-brand-primary rounded font-medium hover:bg-brand-primary hover:text-white transition">
                Lihat Semua Event
              </button>
            </div>
          </div>

          {/* Tentang Event Kami */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
              Tentang Event Kami
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                  Event Internal
                </h4>
                <p className="text-gray-600 mb-4">
                  W202 Club Indonesia secara rutin mengadakan berbagai event internal
                  yang eksklusif untuk anggota, seperti:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Kopdar Bulanan</span>
                      <p className="text-sm text-gray-600">
                        Pertemuan rutin anggota untuk silaturahmi dan berbagi pengalaman
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Touring</span>
                      <p className="text-sm text-gray-600">
                        Perjalanan bersama ke berbagai destinasi menarik di Indonesia
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Workshop Teknis</span>
                      <p className="text-sm text-gray-600">
                        Sesi edukasi tentang perawatan dan perbaikan Mercedes-Benz W202
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Anniversary</span>
                      <p className="text-sm text-gray-600">
                        Perayaan ulang tahun klub dengan berbagai acara spesial
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                  Event Eksternal
                </h4>
                <p className="text-gray-600 mb-4">
                  Selain event internal, W202 Club Indonesia juga aktif berpartisipasi
                  dalam berbagai event otomotif, seperti:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Pameran Otomotif</span>
                      <p className="text-sm text-gray-600">
                        Partisipasi dalam IIMS, GIIAS, dan pameran otomotif lainnya
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Car Show</span>
                      <p className="text-sm text-gray-600">
                        Ikut serta dalam berbagai pameran mobil klasik di Indonesia
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Gathering Komunitas</span>
                      <p className="text-sm text-gray-600">
                        Berpartisipasi dalam acara gabungan antar komunitas otomotif
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Event Sosial</span>
                      <p className="text-sm text-gray-600">
                        Bakti sosial dan kegiatan amal untuk masyarakat
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
