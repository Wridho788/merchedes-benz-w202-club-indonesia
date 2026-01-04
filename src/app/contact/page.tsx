import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Hubungi Mercedes-Benz W202 Club Indonesia untuk informasi lebih lanjut - Email, telepon, dan media sosial',
  keywords: ['Kontak W202 Club', 'Hubungi W202 Indonesia', 'Contact W202'],
  openGraph: {
    title: 'Mercedes Benz W202 Club Indonesia | Contact',
    description: 'Hubungi Mercedes-Benz W202 Club Indonesia',
    url: 'https://mbw202club.id/contact',
    siteName: 'Mercedes Benz W202 Club Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <Section>
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-wide mb-4">
              Hubungi Kami
            </h1>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Punya pertanyaan atau ingin bergabung? Jangan ragu untuk menghubungi kami
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8">
                <h2 className="font-heading text-xl uppercase tracking-wide mb-6 text-brand-dark">
                  Informasi Kontak
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📧</span>
                      <h3 className="font-heading uppercase text-sm tracking-wide">Email</h3>
                    </div>
                    <a
                      href="mailto:info@mbw202club.id"
                      className="text-brand-gray hover:text-brand-dark transition-colors"
                    >
                      info@mbw202club.id
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📱</span>
                      <h3 className="font-heading uppercase text-sm tracking-wide">WhatsApp</h3>
                    </div>
                    <a
                      href="https://wa.me/628123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gray hover:text-brand-dark transition-colors"
                    >
                      +62 812 3456 789
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📸</span>
                      <h3 className="font-heading uppercase text-sm tracking-wide">Instagram</h3>
                    </div>
                    <a
                      href="https://instagram.com/mbw202club"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gray hover:text-brand-dark transition-colors"
                    >
                      @mbw202club
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📍</span>
                      <h3 className="font-heading uppercase text-sm tracking-wide">Lokasi</h3>
                    </div>
                    <address className="text-brand-gray not-italic">
                      Jakarta, Indonesia
                    </address>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="font-heading text-xl uppercase tracking-wide mb-6 text-brand-dark">
                  Jam Operasional
                </h2>
                <div className="space-y-4 text-brand-gray">
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="font-heading uppercase text-sm tracking-wide text-brand-dark">
                      Senin - Jumat
                    </span>
                    <span>09:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="font-heading uppercase text-sm tracking-wide text-brand-dark">
                      Sabtu
                    </span>
                    <span>09:00 - 14:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-heading uppercase text-sm tracking-wide text-brand-dark">
                      Minggu
                    </span>
                    <span>Tutup</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-brand-light">
                  <p className="text-sm text-brand-gray">
                    <strong className="text-brand-dark">Catatan:</strong> Untuk pertanyaan
                    mendesak di luar jam operasional, silakan hubungi kami melalui WhatsApp.
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-8">
              <h2 className="font-heading text-xl uppercase tracking-wide mb-6 text-brand-dark text-center">
                Formulir Kontak
              </h2>
              <form className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-heading uppercase tracking-wide mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border focus:outline-none focus:border-brand-dark transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-heading uppercase tracking-wide mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border focus:outline-none focus:border-brand-dark transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-heading uppercase tracking-wide mb-2"
                  >
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-border focus:outline-none focus:border-brand-dark transition-colors"
                    placeholder="Subjek pesan"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-heading uppercase tracking-wide mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-border focus:outline-none focus:border-brand-dark transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-brand-dark text-white font-heading uppercase tracking-wide hover:bg-opacity-90 transition-all duration-300"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
