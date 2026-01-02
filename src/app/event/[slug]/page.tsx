import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { eventData } from '@/data/event'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return eventData.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = eventData.find((item) => item.slug === slug)

  if (!event) {
    return {
      title: 'Event Not Found',
    }
  }

  return {
    title: event.title,
    description: event.excerpt,
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = eventData.find((item) => item.slug === slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/event"
              className="inline-flex items-center text-sm text-brand-gray hover:text-brand-dark transition-colors mb-8"
            >
              ← Kembali ke Event
            </Link>

            <article>
              <header className="mb-8 pb-8 border-b border-border">
                <h1 className="text-3xl md:text-4xl font-heading uppercase tracking-wide text-brand-dark mb-6">
                  {event.title}
                </h1>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2 text-brand-gray">
                    <span>📅</span>
                    <div>
                      <div className="font-heading text-xs uppercase tracking-wide text-brand-dark">
                        Tanggal
                      </div>
                      <div>
                        {new Date(event.date).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 text-brand-gray">
                    <span>📍</span>
                    <div>
                      <div className="font-heading text-xs uppercase tracking-wide text-brand-dark">
                        Lokasi
                      </div>
                      <div>{event.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 text-brand-gray">
                    <span>⏰</span>
                    <div>
                      <div className="font-heading text-xs uppercase tracking-wide text-brand-dark">
                        Waktu
                      </div>
                      <div>{event.time}</div>
                    </div>
                  </div>
                </div>
              </header>

              <div className="aspect-video bg-brand-light flex items-center justify-center mb-8">
                <span className="text-brand-gray">Event Image</span>
              </div>

              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />

              <div className="border-t border-border pt-8 text-center">
                <h3 className="font-heading text-xl uppercase tracking-wide mb-4">
                  Tertarik Mengikuti Event Ini?
                </h3>
                <Button variant="primary" size="lg" href="/contact">
                  Hubungi Kami
                </Button>
              </div>
            </article>
          </div>
        </div>
      </Section>
    </div>
  )
}
