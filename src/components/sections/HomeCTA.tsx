import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-16 bg-brand-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-sans font-bold text-white mb-4">
              Bergabung dengan W202 Club Indonesia
            </h2>
            <p className="text-gray-300">
              Jadilah bagian dari komunitas pecinta Mercedes-Benz W202 terbesar
              di Indonesia.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/member"
              className="px-6 py-3 bg-brand-accent text-white font-sans font-medium rounded hover:bg-opacity-90 transition duration-300 text-center min-w-[150px]"
            >
              Daftar Sekarang
            </a>
            <a
              href="mailto:info@w202clubindonesia.org"
              className="px-6 py-3 border border-white text-white font-sans font-medium rounded hover:bg-white hover:text-bg-brandPrimary transition duration-300 text-center min-w-[150px]"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
