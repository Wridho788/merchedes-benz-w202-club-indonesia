import Image from "next/image";

export default function HomeCommunity() {
  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-brandPrimary">
            Our Community
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness the passion and unity of Mercedes-Benz W202 enthusiasts from
            across Indonesia, coming together to celebrate our shared love for
            these iconic vehicles.
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
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Mercedes-Benz W202 Gathering
              </h3>
              <p className="text-lg opacity-90">
                United by passion, driven by excellence
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-brandPrimary mb-2">1000+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-brandPrimary mb-2">9</div>
            <div className="text-gray-600">Regional Chapters</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-brandPrimary mb-2">18+</div>
            <div className="text-gray-600">Years Strong</div>
          </div>
        </div>
      </div>
    </section>
  );
}
