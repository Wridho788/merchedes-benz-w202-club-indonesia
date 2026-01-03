'use client'

import { useState } from 'react'

interface FeaturedMember {
  id: number
  title: string
  videoId: string
  thumbnail: string
  views: string
  description: string
}

const FEATURED_MEMBERS: FeaturedMember[] = [
  {
    id: 1,
    title: "KOLEKSI MENU UTAMA D-net",
    videoId: "video1",
    thumbnail: "/hero-1.jpg",
    views: "1.2K",
    description: "Koleksi lengkap Mercedes-Benz W202 dari member D-net dengan berbagai modifikasi menarik."
  },
  {
    id: 2,
    title: "RAHASIA 233 HP ? 4 CYLINDER /VA",
    videoId: "video2",
    thumbnail: "/hero-2.jpg",
    views: "2.5K",
    description: "Rahasia performa 233 HP dari mesin 4 silinder Mercedes-Benz W202 C240."
  },
  {
    id: 3,
    title: "MODIFIKASI C240 SEHARGA INNOVA",
    videoId: "video3",
    thumbnail: "/hero-3.jpg",
    views: "3.1K",
    description: "Modifikasi hemat budget Mercedes-Benz C240 dengan hasil maksimal."
  },
  {
    id: 4,
    title: "Restore W202 C200 ke Kondisi Original",
    videoId: "video4",
    thumbnail: "/Pic-1.jpg",
    views: "1.8K",
    description: "Proses restorasi total Mercedes-Benz W202 C200 tahun 1994 ke kondisi seperti baru."
  },
  {
    id: 5,
    title: "Daily Drive W202: Tips & Tricks",
    videoId: "video5",
    thumbnail: "/hero-1.jpg",
    views: "2.2K",
    description: "Tips dan trik menggunakan Mercedes-Benz W202 sebagai daily driver di Indonesia."
  },
  {
    id: 6,
    title: "W202 Kompressor: Power & Elegance",
    videoId: "video6",
    thumbnail: "/hero-2.jpg",
    views: "1.9K",
    description: "Review lengkap Mercedes-Benz W202 dengan mesin Kompressor yang bertenaga."
  },
  {
    id: 7,
    title: "Modifikasi Suspension W202 untuk Handling",
    videoId: "video7",
    thumbnail: "/hero-3.jpg",
    views: "1.5K",
    description: "Upgrade sistem suspensi W202 untuk handling yang lebih baik di track dan jalanan."
  },
  {
    id: 8,
    title: "W202 AMG Styling: Transform Your C-Class",
    videoId: "video8",
    thumbnail: "/Pic-1.jpg",
    views: "2.8K",
    description: "Cara mengubah tampilan W202 standar menjadi bergaya AMG yang agresif."
  },
  {
    id: 9,
    title: "Perawatan Rutin W202: Panduan Lengkap",
    videoId: "video9",
    thumbnail: "/hero-1.jpg",
    views: "3.5K",
    description: "Panduan lengkap perawatan rutin Mercedes-Benz W202 agar tetap prima."
  }
]

export default function HomeFeaturedMembers() {
  const [showAll, setShowAll] = useState(false)
  
  const displayedMembers = showAll ? FEATURED_MEMBERS : FEATURED_MEMBERS.slice(0, 3)

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-primary inline-block">
            Featured Members
            <div className="h-1 w-20 bg-brand-accent mt-2 mx-auto"></div>
          </h2>
        </div>

        {/* Featured Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${member.thumbnail})` }}
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-heading text-brand-primary text-base md:text-lg mb-2 line-clamp-2">
                  {member.title}
                </h3>
                
                <p className="text-sm text-brand-gray mb-3 line-clamp-2">
                  {member.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-brand-gray">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {member.views} views
                  </span>
                  
                  <button className="text-brand-accent hover:text-brand-primary transition-colors font-medium">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && FEATURED_MEMBERS.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors rounded-lg font-medium"
            >
              Selengkapnya
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
