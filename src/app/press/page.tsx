import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { pressData } from '@/data/press'

export const metadata: Metadata = {
  title: 'Press',
  description: 'Berita dan artikel terbaru dari Mercedes-Benz W202 Club Indonesia',
}

export default function PressPage() {
  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-wide mb-4">
              Press & Berita
            </h1>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Update terbaru seputar kegiatan dan acara MB W202 Club Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressData.map((item) => (
              <Link key={item.slug} href={`/press/${item.slug}`}>
                <Card className="h-full">
                  <div className="aspect-video bg-brand-light flex items-center justify-center">
                    <span className="text-brand-gray text-sm">Image</span>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-brand-gray uppercase tracking-wide">
                      {new Date(item.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <h2 className="font-heading text-xl uppercase tracking-wide text-brand-dark">
                      {item.title}
                    </h2>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="pt-2">
                      <span className="text-sm font-heading uppercase tracking-wide text-brand-dark hover:underline">
                        Baca Selengkapnya →
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
