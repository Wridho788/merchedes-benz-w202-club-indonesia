'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PressRelease {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  author: string
}

const PRESS_RELEASES: PressRelease[] = [
  {
    id: 1,
    title: "Mercedes Benz W202 Gelar Rakernas di Semarang",
    excerpt: "MBW202CI menggelar Rapat Kerja Nasional (Rakernas) di Semarang yang dihadiri oleh seluruh pengurus dan perwakilan region. Rakernas ini membahas program kerja untuk tahun 2026.",
    date: "1 November 2025",
    image: "/hero-1.jpg",
    slug: "mercedes-benz-w202-gelar-rakernas-semarang",
    author: "W202 Club Indonesia"
  },
  {
    id: 2,
    title: "Dari mobil klasik hingga persaudaraan, Mercy W202 Club Indonesia hadirkan keluarga besar",
    excerpt: "Menjalani perjalanan bersama sejak 2007, Mercedes W202 Club Indonesia telah menjelma menjadi keluarga besar yang solid dengan lebih dari 1000 anggota aktif.",
    date: "1 December 2025",
    image: "/hero-2.jpg",
    slug: "dari-mobil-klasik-hingga-persaudaraan-mercy-w202",
    author: "W202 Club Indonesia"
  },
  {
    id: 3,
    title: "Jalin Bull Benz Meet Up 2025",
    excerpt: "MBW202CI Surabaya Region berkolaborasi dengan komunitas lainnya menggelar acara Bull Benz Meet Up 2025 di Surabaya yang dihadiri ratusan pecinta Mercedes-Benz untuk menjalin silaturahmi.",
    date: "20 October 2025",
    image: "/Pic-1.jpg",
    slug: "jalin-bull-benz-meet-up-2025",
    author: "W202 Club Indonesia"
  },
  {
    id: 4,
    title: "MBW202CI Raih Penghargaan Komunitas Otomotif Terbaik 2025",
    excerpt: "Mercedes-Benz W202 Club Indonesia meraih penghargaan sebagai Komunitas Otomotif Terbaik 2025 dari Kementerian Pariwisata dan Ekonomi Kreatif atas kontribusinya dalam mengembangkan budaya otomotif Indonesia.",
    date: "15 September 2025",
    image: "/hero-3.jpg",
    slug: "mbw202ci-raih-penghargaan-komunitas-terbaik-2025",
    author: "W202 Club Indonesia"
  },
  {
    id: 5,
    title: "Peluncuran Program Restorasi W202 Klasik",
    excerpt: "MBW202CI meluncurkan program restorasi untuk Mercedes-Benz W202 klasik bekerja sama dengan bengkel resmi dan supplier spare part original untuk menjaga nilai historis kendaraan.",
    date: "5 August 2025",
    image: "/hero-1.jpg",
    slug: "peluncuran-program-restorasi-w202-klasik",
    author: "W202 Club Indonesia"
  }
]

export default function HomePressRelease() {
  const [showAll, setShowAll] = useState(false)
  
  const displayedReleases = showAll ? PRESS_RELEASES : PRESS_RELEASES.slice(0, 3)

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-primary inline-block">
            Press Release
            <div className="h-1 w-20 bg-brand-accent mt-2 mx-auto"></div>
          </h2>
        </div>

        {/* Press Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedReleases.map((release) => (
            <div 
              key={release.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={release.image}
                  alt={release.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-brand-gray mb-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-brand-primary">{release.author}</p>
                    <p className="text-xs">{release.date}</p>
                  </div>
                </div>
                
                <h3 className="font-heading text-brand-primary text-lg mb-3 line-clamp-2">
                  {release.title}
                </h3>
                
                <p className="text-sm text-brand-gray mb-4 line-clamp-3">
                  {release.excerpt}
                </p>
                
                <Link 
                  href={`/press/${release.slug}`}
                  className="inline-block px-4 py-2 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors rounded text-sm font-medium"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && PRESS_RELEASES.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors rounded-lg font-medium"
            >
              Semua Press Release
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
