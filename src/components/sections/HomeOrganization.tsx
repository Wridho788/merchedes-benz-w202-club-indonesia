'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HomeOrganization() {
  const [showFullMessage, setShowFullMessage] = useState(false)

  const presidentMessage = `"Mercedes-Benz W202 Club Indonesia adalah Club Otomotif yang mempunyai historia yang panjang. Dari berkembangnya untuk membina Mercedes-Benz W202 Club Indonesia bersama Maju Lebih Jauh dan mempertautkan seluruh Member dari Region dan Distirct untuk menguatkan solidaritas antar anggota, dan menjadis tanur bah wangsa era yang lebih modern, dinamis, tertata guna, dan dikenal secara Nasional maupun Internasional."`

  const shortMessage = presidentMessage.substring(0, 200) + '...'

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-brand-primary inline-block">
            Organization
            <div className="h-1 w-20 bg-brand-accent mt-2 mx-auto"></div>
          </h2>
        </div>

        {/* President's Message Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/logo-pengurus.png"
                alt="MBW202CI Logo"
                width={150}
                height={150}
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-heading text-brand-primary mb-4">
                Sambutan Presiden MBW202CI
              </h3>
              
              <div className="text-brand-gray leading-relaxed mb-4 italic">
                {showFullMessage ? presidentMessage : shortMessage}
              </div>
              
              <p className="text-brand-primary font-medium">
                - Husnuh Lutfi Abdut, Presiden MBW202CI
              </p>
            </div>
          </div>
          
          {!showFullMessage && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowFullMessage(true)}
                className="px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors rounded-lg font-medium"
              >
                Selengkapnya
              </button>
            </div>
          )}
        </div>

        {/* Regional Activities */}
        <div>
          <h3 className="text-2xl md:text-3xl font-heading text-brand-primary mb-6 md:mb-8 text-center">
            Aktivitas Regional
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Regional Activity Cards - using placeholder for now */}
            <div className="relative group overflow-hidden rounded-lg bg-gray-200 h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm mb-1">@mbw202clubindonesia on Instagram</p>
                  <p className="font-heading">Region Jakarta</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg bg-gray-200 h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm mb-1">@mbw202clubindonesia on Instagram</p>
                  <p className="font-heading">Region Bandung</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg bg-gray-200 h-64">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="text-sm mb-1">@mbw202clubindonesia on Instagram</p>
                  <p className="font-heading">Region Surabaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
