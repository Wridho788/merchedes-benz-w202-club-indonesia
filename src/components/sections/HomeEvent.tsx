'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Event {
  id: number
  title: string
  date: string
  location: string
  image: string
  slug: string
}

const EVENTS: Event[] = [
  {
    id: 1,
    title: "Jambore Nasional XX di Sumatera Bandung",
    date: "15 Januari 2026",
    location: "Bandung, Jawa Barat",
    image: "/hero-1.jpg",
    slug: "jambore-nasional-xx-bandung"
  },
  {
    id: 2,
    title: "Coaching Clinic by Thomas Narayana W202 JT-074",
    date: "22 Januari 2026",
    location: "Jakarta",
    image: "/hero-2.jpg",
    slug: "coaching-clinic-thomas-narayana"
  },
  {
    id: 3,
    title: "Super Street Star Night Race Series",
    date: "5 Februari 2026",
    location: "Sentul Circuit",
    image: "/hero-3.jpg",
    slug: "super-street-star-night-race"
  },
  {
    id: 4,
    title: "Gathering Regional Jawa Timur",
    date: "12 Februari 2026",
    location: "Surabaya, Jawa Timur",
    image: "/Pic-1.jpg",
    slug: "gathering-regional-jawa-timur"
  },
  {
    id: 5,
    title: "Workshop Perawatan Mesin W202",
    date: "20 Februari 2026",
    location: "Jakarta Selatan",
    image: "/hero-1.jpg",
    slug: "workshop-perawatan-mesin-w202"
  },
  {
    id: 6,
    title: "Touring Pantai Selatan Jawa",
    date: "1 Maret 2026",
    location: "Yogyakarta - Pantai Selatan",
    image: "/hero-2.jpg",
    slug: "touring-pantai-selatan-jawa"
  },
  {
    id: 7,
    title: "Meet & Greet with Mercedes-Benz Indonesia",
    date: "10 Maret 2026",
    location: "Mercedes-Benz Jakarta",
    image: "/hero-3.jpg",
    slug: "meet-greet-mercedes-benz-indonesia"
  },
  {
    id: 8,
    title: "Bakti Sosial Region Semarang",
    date: "15 Maret 2026",
    location: "Semarang, Jawa Tengah",
    image: "/Pic-1.jpg",
    slug: "bakti-sosial-region-semarang"
  },
  {
    id: 9,
    title: "Anniversary MBW202CI ke-19",
    date: "7 Juli 2026",
    location: "Jakarta",
    image: "/hero-1.jpg",
    slug: "anniversary-mbw202ci-19"
  }
]

export default function HomeEvent() {
  const [showAll, setShowAll] = useState(false)
  
  const displayedEvents = showAll ? EVENTS : EVENTS.slice(0, 6)

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-primary inline-block">
            Club Event
            <div className="h-1 w-20 bg-brand-accent mt-2 mx-auto"></div>
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedEvents.map((event) => (
            <Link 
              key={event.id} 
              href={`/event/${event.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-5">
                <h3 className="font-heading text-brand-primary text-lg mb-3 line-clamp-2 group-hover:text-brand-accent transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-brand-gray">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && EVENTS.length > 6 && (
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
