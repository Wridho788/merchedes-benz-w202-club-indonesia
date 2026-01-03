import Image from 'next/image'

export default function HomeCommunity() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-primary inline-block">
            Our Community
            <div className="h-1 w-20 bg-brand-accent mt-2 mx-auto"></div>
          </h2>
          <p className="mt-4 text-brand-gray max-w-3xl mx-auto">
            Witness the passion and unity of Mercedes-Benz W202 enthusiasts from across Indonesia, coming together to celebrate our shared love for these iconic vehicles.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative rounded-lg overflow-hidden mb-8 md:mb-12">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/Pic-1.jpg"
              alt="Mercedes-Benz W202 Gathering"
              fill
              className="object-cover"
            />
            {/* Bottom Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">
                Mercedes-Benz W202 Gathering
              </h3>
              <p className="text-white/90">
                United by passion, driven by excellence
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading text-brand-accent mb-2">
              1000+
            </div>
            <div className="text-brand-gray">Active Members</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading text-brand-accent mb-2">
              9
            </div>
            <div className="text-brand-gray">Regional Chapters</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading text-brand-accent mb-2">
              18+
            </div>
            <div className="text-brand-gray">Years Strong</div>
          </div>
        </div>
      </div>
    </section>
  )
}
