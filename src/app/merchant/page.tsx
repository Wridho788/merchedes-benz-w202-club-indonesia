const MERCHANTS = [
  {
    id: 1,
    name: "Djak Towing",
    description: "Djakarta Towing Service 24hour Jl Tanjung Barat Raya No 148b, Jakarta, Indonesia 16425 ☎️ +62217890000",
    category: "Towing"
  },
  {
    id: 2,
    name: "A5 Garage",
    description: "Service Engine - Overhaul - Tuneup - Ganti Oli - Kaki-Kaki - Engine Scan, etc Jl Rawadolar No.78, Bekasi ☎️ +62 855-8000-800 ☎️ +62 818-834-571",
    category: "Bengkel"
  },
  {
    id: 3,
    name: "Otogears",
    description: "Premium Wash / Coating / PPF / PDR Jl. Bintaro Utama 3A Blk. DD1 No.71, Bintaro, Pd. Karya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15225",
    category: "Premium Wash Detailing Coating"
  }
]

export default function MerchantPage() {
  return (
    <div className="page-wrapper">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
              Merchant &amp; Sponsor
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner resmi yang mendukung W202 Club of Indonesia.
            </p>
          </div>

          {/* Merchants & Sponsors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Official Merchants */}
            <div>
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
                Official Merchants
              </h3>
              <div className="space-y-5">
                {MERCHANTS.map((merchant) => (
                  <div
                    key={merchant.id}
                    className="bg-gray-50 rounded-lg p-4 flex items-center transition duration-300 hover:shadow-md"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg flex items-center justify-center p-2">
                      <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white text-xl"
                        >
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4 flex-grow">
                      <h4 className="font-sans font-semibold text-brand-primary">
                        {merchant.name}
                      </h4>
                      <p className="text-sm text-gray-600">{merchant.description}</p>
                      <div className="flex mt-2">
                        <div className="text-xs bg-brand-primary text-white px-2 py-1 rounded">
                          {merchant.category}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Sponsors */}
            <div>
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
                Official Sponsors
              </h3>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 text-center py-8">
                    <p className="text-gray-500">No sponsors found.</p>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-8 bg-brand-accent bg-opacity-10 rounded-lg p-6 border border-brand-accent border-opacity-30">
                <h4 className="font-sans font-semibold text-brand-primary mb-3">
                  Tertarik menjadi Merchant atau Sponsor?
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  Dapatkan akses ke ratusan member W202 Club Indonesia dan
                  manfaatkan exposure di berbagai kegiatan klub.
                </p>
                <button className="bg-brand-accent text-white px-6 py-2 rounded font-medium hover:bg-opacity-90 transition">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>

          {/* Program Partner Section */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-2">
                Program Partner W202 Club Indonesia
              </h3>
              <p className="text-gray-600">
                Bergabunglah dengan Program Partner W202 Club Indonesia dan dapatkan
                manfaat khusus
              </p>
            </div>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Merchant Program */}
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="p-6 bg-brand-primary text-white">
                  <div className="text-2xl font-semibold">Program Merchant</div>
                  <div className="text-sm text-gray-200">
                    Untuk penyedia produk dan jasa otomotif
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Keuntungan Menjadi Merchant
                      </h4>
                      <ul className="text-sm space-y-2 mt-2">
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Exposure ke seluruh anggota W202 Club Indonesia</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Listing di website dan media sosial klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Kesempatan promosi di event klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Prioritas kerja sama untuk event klub</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Kategori Merchant
                      </h4>
                      <p className="text-sm mt-1">
                        Bengkel, supplier part, detailing, aksesoris, apparel, jasa
                        perawatan, dan lainnya
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-brand-primary text-white rounded font-medium hover:bg-opacity-90 transition">
                    Menjadi Merchant Partner
                  </button>
                </div>
              </div>

              {/* Sponsor Program */}
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="p-6 bg-brand-accent text-white">
                  <div className="text-2xl font-semibold">Program Sponsor</div>
                  <div className="text-sm text-gray-100">Untuk brand dan perusahaan</div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-primary mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Keuntungan Menjadi Sponsor
                      </h4>
                      <ul className="text-sm space-y-2 mt-2">
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Branding di semua materi publikasi klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Booth prioritas di setiap event klub</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Akses eksklusif ke database anggota</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-brand-accent mr-2">•</span>
                          <span>Co-branding untuk merchandise klub</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-primary mt-1 mr-3 flex-shrink-0"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        Paket Sponsorship
                      </h4>
                      <p className="text-sm mt-1">
                        Tersedia paket Platinum, Gold, dan Silver dengan berbagai
                        benefit sesuai kebutuhan
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-brand-accent text-white rounded font-medium hover:bg-opacity-90 transition">
                    Menjadi Sponsor Partner
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-10 text-center">
              <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                Hubungi Divisi Merchant &amp; Sponsor
              </h4>
              <div className="flex justify-center">
                <a
                  href="mailto:mbw202clubindonesia@gmail.com"
                  className="flex items-center text-brand-primary hover:text-brand-accent transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>mbw202clubindonesia@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
