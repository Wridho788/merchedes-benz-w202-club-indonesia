import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function HomeCTA() {
  return (
    <Section variant="dark">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-wide mb-6">
          Bergabung Bersama Kami
        </h2>
        <p className="text-brand-light max-w-2xl mx-auto mb-8">
          Jadilah bagian dari komunitas Mercedes-Benz W202 terbesar di Indonesia.
          Mari bersama-sama melestarikan warisan otomotif legendaris ini.
        </p>
        <Button variant="primary" size="lg" href="/contact">
          Hubungi Kami
        </Button>
      </div>
    </Section>
  )
}
