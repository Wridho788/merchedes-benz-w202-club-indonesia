import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    // <footer classNameName="bg-brand-menu text-white">
    //   <div className="container py-12 md:py-16">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
    //       {/* Logo & About */}
    //       <div>
    //         <div className="flex items-center gap-3 mb-4">
              // <Image 
              //   src="/logo.png" 
              //   alt="W202 Club Logo" 
              //   width={50} 
              //   height={50}
              //   className="w-12 h-12"
              // />
    //           <div>
    //             <h3 className="font-heading text-lg">W202 Club</h3>
    //             <p className="text-sm text-gray-400">Indonesia</p>
    //           </div>
    //         </div>
    //         <p className="text-sm text-gray-300 leading-relaxed">
    //           Komunitas resmi pecinta Mercedes-Benz W202 di Indonesia yang berdiri sejak tahun 2007.
    //         </p>
    //       </div>

    //       {/* Quick Links */}
    //       <div>
    //         <h3 className="font-heading text-lg mb-4">Quick Links</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link href="/" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/sejarah" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
    //               History
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/about" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
    //               Organization
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/member" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
    //               Member
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/event" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
    //               Event
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/merchant" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
    //               Merchant
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/press" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
    //               Press Release
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/w202" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
    //               All About W202
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Contact */}
    //       <div>
    //         <h3 className="font-heading text-lg mb-4">Kontak</h3>
    //         <div className="space-y-3 text-sm text-gray-300">
    //           <div className="flex items-start gap-2">
    //             <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    //             </svg>
    //             <div>
    //               <p>Sekretariat MBW202 Club Indonesia</p>
    //               <p>Jl. H. Jian No.33, RT.008/RW.007, Kelurahan Cipete Selatan, Kecamatan Cilandak, Jakarta Selatan, DKI Jakarta 12410</p>
    //             </div>
    //           </div>
              
    //           <div className="flex items-center gap-2">
    //             <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    //             </svg>
    //             <a href="mailto:mbw202clubindonesia@gmail.com" className="hover:text-brand-accent transition-colors">
    //               mbw202clubindonesia@gmail.com
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom Bar */}
    //     <div className="mt-12 pt-8 border-t border-gray-700">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    //         <p className="text-sm text-gray-400">
    //           © {new Date().getFullYear()} Mercedes Benz W202 Club Indonesia. All rights reserved.
    //         </p>
            
    //         <div className="flex gap-4">
    //           <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
    //             Privacy Policy
    //           </Link>
    //           <Link href="#" className="text-gray-400 hover:text-brand-accent transition-colors">
    //             Terms of Service
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  <footer className="bg-mercedes-dark-gray text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-6">
             <Image 
                src="/logo.png" 
                alt="W202 Club Logo" 
                width={50} 
                height={50}
                className="w-12 h-12"
              />
            <div className="ml-3">
              <h1 className="font-sans font-bold text-white text-lg">W202 Club</h1>
              <p className="text-xs text-gray-400">INDONESIA</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6">Komunitas resmi pecinta Mercedes-Benz W202 di Indonesia yang berdiri sejak tahun 2007</p>
          <div className="flex space-x-4"></div>
        </div>
          <div>
            <h3 className="font-sans font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-mercedes-gold transition duration-300">Home</a></li>
                <li><a href="/sejarah" className="text-gray-400 hover:text-mercedes-gold transition duration-300">History</a></li>
                <li><a href="/organisasi" className="text-gray-400 hover:text-mercedes-gold transition duration-300">Organization</a></li>
                <li><a href="/member" className="text-gray-400 hover:text-mercedes-gold transition duration-300">Member</a></li>
                <li><a href="/kegiatan" className="text-gray-400 hover:text-mercedes-gold transition duration-300">Event</a></li>
                <li><a href="/merchant" className="text-gray-400 hover:text-mercedes-gold transition duration-300">Merchant</a></li>
                <li><a href="/press" className="text-gray-400 hover:text-mercedes-gold transition duration-300">Press Release</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-mercedes-gold transition duration-300">All About W202</a></li>
              </ul>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg mb-6">Kontak</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin shrink-0 mt-1 mr-3 text-mercedes-gold">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-gray-400">Sekretariat MBW202 Club Indonesia<br />Jl. H. Jian No.83, RT 008, RW 007,  Kelurahan Cipete Utara, Kecamatan Kebayoran Baru,  Jakarta Selatan.<br />Jakarta Selatan, DKI Jakarta 12150</span>
                </li>
                <li className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail shrink-0 mt-1 mr-3 text-mercedes-gold">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-gray-400">mbw202clubindonesia@gmail.com</span>
                </li>
              </ul>
          </div>
          </div>
          <div className="border-gray-700 my-8"/>
          <div className="flex flex-col md:flex-row justify-between items-center"><p className="text-gray-500 text-sm">© 2026 Mercedes Benz W202 Club Indonesia. All rights reserved.</p><div className="mt-4 md:mt-0"><ul className="flex space-x-4 text-sm"><li><a href="#" className="text-gray-500 hover:text-mercedes-gold transition duration-300">Privacy Policy</a></li><li><a href="#" className="text-gray-500 hover:text-mercedes-gold transition duration-300">Terms of Service</a></li></ul></div></div>
    </div>
  </footer>
  )
}
