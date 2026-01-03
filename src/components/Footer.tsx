import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-menu text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo.png" 
                alt="W202 Club Logo" 
                width={50} 
                height={50}
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-heading text-lg">W202 Club</h3>
                <p className="text-sm text-gray-400">Indonesia</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Komunitas resmi pecinta Mercedes-Benz W202 di Indonesia yang berdiri sejak tahun 2007.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sejarah" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  History
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Organization
                </Link>
              </li>
              <li>
                <Link href="/member" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Member
                </Link>
              </li>
              <li>
                <Link href="/event" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/merchant" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Merchant
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Press Release
                </Link>
              </li>
              <li>
                <Link href="/w202" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  All About W202
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-4">Kontak</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>Sekretariat MBW202 Club Indonesia</p>
                  <p>Jl. H. Jian No.33, RT.008/RW.007, Kelurahan Cipete Selatan, Kecamatan Cilandak, Jakarta Selatan, DKI Jakarta 12410</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:mbw202clubindonesia@gmail.com" className="hover:text-brand-accent transition-colors">
                  mbw202clubindonesia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mercedes Benz W202 Club Indonesia. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
