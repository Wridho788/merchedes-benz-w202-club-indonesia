import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
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
                <h1 className="font-sans font-bold text-white text-lg">
                  W202 Club
                </h1>
                <p className="text-xs text-gray-400">INDONESIA</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Komunitas resmi pecinta Mercedes-Benz W202 di Indonesia yang
              berdiri sejak tahun 2007
            </p>
            <div className="flex space-x-4"></div>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-brand-accent transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/sejarah"
                  className="text-gray-400 hover:text-brand-accent transition duration-300"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="/organisasi"
                  className="text-gray-400 hover:text-brand-accent transition duration-300"
                >
                  Organization
                </a>
              </li>
              <li>
                <a
                  href="/member"
                  className="text-gray-400 hover:text-brand-accent transition duration-300"
                >
                  Member
                </a>
              </li>
              <li>
                <a
                  href="/kegiatan"
                  className="text-gray-400 hover:text-brand-accent transition duration-300"
                >
                  Event
                </a>
              </li>
              <li>
                <a
                  href="/merchant"
                  className="text-gray-400 hover:text-brand-accent transition duration-300"
                >
                  Merchant
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-gray-400 hover:text-brand-accent transition duration-300"
                >
                  Press Release
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-brand-accent transition duration-300"
                >
                  All About W202
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans font-semibold text-lg mb-6">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex">
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
                  className="lucide lucide-map-pin shrink-0 mt-1 mr-3 text-brand-accent"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-400">
                  Sekretariat MBW202 Club Indonesia
                  <br />
                  Jl. H. Jian No.83, RT 008, RW 007, Kelurahan Cipete Utara,
                  Kecamatan Kebayoran Baru, Jakarta Selatan.
                  <br />
                  Jakarta Selatan, DKI Jakarta 12150
                </span>
              </li>
              <li className="flex">
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
                  className="lucide lucide-mail shrink-0 mt-1 mr-3 text-brand-accent"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-gray-400">
                  mbw202clubindonesia@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-gray-700 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Mercedes Benz W202 Club Indonesia. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-brand-accent transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-brand-accent transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
