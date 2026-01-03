import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-brand-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-4 md:mb-6">
            Bergabung dengan W202 Club Indonesia
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10">
            Jadilah bagian dari komunitas pecinta Mercedes-Benz W202 terbesar di Indonesia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-brand-accent text-white hover:bg-brand-accent/90 transition-colors rounded-lg font-medium text-lg"
            >
              Daftar Sekarang
            </Link>
            
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-primary transition-colors rounded-lg font-medium text-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
