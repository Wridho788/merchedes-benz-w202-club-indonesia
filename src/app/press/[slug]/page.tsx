import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import { pressData } from '@/data/press'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return pressData.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = pressData.find((item) => item.slug === slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function PressDetailPage({ params }: Props) {
  const { slug } = await params
  const article = pressData.find((item) => item.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/press"
              className="inline-flex items-center text-sm text-brand-gray hover:text-brand-dark transition-colors mb-8"
            >
              ← Kembali ke Press
            </Link>

            <article>
              <header className="mb-8 pb-8 border-b border-border">
                <div className="text-xs text-brand-gray uppercase tracking-wide mb-4">
                  {new Date(article.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  {' • '}
                  {article.author}
                </div>
                <h1 className="text-3xl md:text-4xl font-heading uppercase tracking-wide text-brand-dark">
                  {article.title}
                </h1>
              </header>

              <div className="aspect-video bg-brand-light flex items-center justify-center mb-8">
                <span className="text-brand-gray">Featured Image</span>
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </div>
        </div>
      </Section>
    </div>
  )
}
