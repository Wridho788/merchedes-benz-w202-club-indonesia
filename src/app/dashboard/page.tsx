import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard | Mercedes Benz W202 Club Indonesia',
  description: 'Dashboard member Mercedes Benz W202 Club Indonesia',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-brand-primary px-6 py-2 rounded-md mb-4">
              <h1 className="text-2xl md:text-3xl font-sans font-bold text-white">
                Dashboard Member
              </h1>
            </div>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-4"></div>
            <p className="text-gray-600">
              Selamat datang di dashboard member MBW202CI
            </p>
          </div>

          {/* Success Message */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Registrasi Berhasil!
              </h2>
              <p className="text-gray-600 mb-6">
                Selamat! Anda telah resmi menjadi anggota Mercedes Benz W202 Club Indonesia.
                Tim kami akan segera menghubungi Anda untuk informasi lebih lanjut.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors"
                >
                  Kembali ke Beranda
                </Link>
                <Link
                  href="/member"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-colors"
                >
                  Lihat Direktori Member
                </Link>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Langkah Selanjutnya
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  Tunggu konfirmasi dari admin chapter
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  Lakukan pembayaran iuran pendaftaran
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  Ikuti kegiatan dan event club
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Butuh Bantuan?
              </h3>
              <p className="text-gray-600 mb-4">
                Jika Anda memiliki pertanyaan, silakan hubungi admin kami melalui WhatsApp.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
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
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
