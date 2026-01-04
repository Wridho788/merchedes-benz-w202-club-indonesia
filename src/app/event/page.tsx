import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { eventData } from '@/data/event'

export const metadata: Metadata = {
  title: 'Event',
  description: 'Event dan kegiatan mendatang dari Mercedes-Benz W202 Club Indonesia - Gathering, touring, dan acara komunitas',
  keywords: ['Event W202', 'Gathering W202', 'Kegiatan W202 Club', 'W202 Touring'],
  openGraph: {
    title: 'Mercedes Benz W202 Club Indonesia | Event',
    description: 'Event dan kegiatan dari Mercedes-Benz W202 Club Indonesia',
    url: 'https://mbw202club.id/event',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function EventPage() {
  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-wide mb-4">
              Event & Kegiatan
            </h1>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Ikuti berbagai kegiatan seru yang kami selenggarakan untuk para anggota
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventData.map((item) => (
              <Link key={item.slug} href={`/event/${item.slug}`}>
                <Card className="h-full">
                  <div className="aspect-video bg-brand-light flex items-center justify-center">
                    <span className="text-brand-gray text-sm">Image</span>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-brand-gray uppercase tracking-wide">
                      <span>📅</span>
                      <span>
                        {new Date(item.date).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <h2 className="font-heading text-xl uppercase tracking-wide text-brand-dark">
                      {item.title}
                    </h2>
                    <div className="text-sm text-brand-gray space-y-1">
                      <div className="flex items-start gap-2">
                        <span>📍</span>
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span>⏰</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="pt-2">
                      <span className="text-sm font-heading uppercase tracking-wide text-brand-dark hover:underline">
                        Lihat Detail →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
