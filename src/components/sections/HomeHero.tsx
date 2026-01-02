import Button from '@/components/ui/Button'

export default function HomeHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-brand-dark">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center space-y-4 md:space-y-6 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading uppercase tracking-wide">
          Mercedes-Benz W202 Club
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-brand-light max-w-2xl mx-auto">
          Komunitas Pecinta Mercedes-Benz Seri W202 di Indonesia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="primary" size="lg" href="#about">
            Tentang Kami
          </Button>
          <Button variant="outline" size="lg" href="/event">
            Event Terbaru
          </Button>
        </div>
      </div>
    </section>
  )
}
