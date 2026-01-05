"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PressRelease {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  author: string;
}

const PRESS_RELEASES: PressRelease[] = [
  {
    id: 1,
    title: "Mercedes Benz W202 Gelar Rakernas di Semarang",
    excerpt:
      "MBW202CI menggelar Rapat Kerja Nasional (Rakernas) di Semarang yang dihadiri oleh seluruh pengurus dan perwakilan region. Rakernas ini membahas program kerja untuk tahun 2026.",
    date: "1 November 2025",
    image: "/hero-1.jpg",
    slug: "mercedes-benz-w202-gelar-rakernas-semarang",
    author: "W202 Club Indonesia",
  },
  {
    id: 2,
    title:
      "Dari mobil klasik hingga persaudaraan, Mercy W202 Club Indonesia hadirkan keluarga besar",
    excerpt:
      "Menjalani perjalanan bersama sejak 2007, Mercedes W202 Club Indonesia telah menjelma menjadi keluarga besar yang solid dengan lebih dari 1000 anggota aktif.",
    date: "1 December 2025",
    image: "/hero-2.jpg",
    slug: "dari-mobil-klasik-hingga-persaudaraan-mercy-w202",
    author: "W202 Club Indonesia",
  },
  {
    id: 3,
    title: "Jalin Bull Benz Meet Up 2025",
    excerpt:
      "MBW202CI Surabaya Region berkolaborasi dengan komunitas lainnya menggelar acara Bull Benz Meet Up 2025 di Surabaya yang dihadiri ratusan pecinta Mercedes-Benz untuk menjalin silaturahmi.",
    date: "20 October 2025",
    image: "/Pic-1.jpg",
    slug: "jalin-bull-benz-meet-up-2025",
    author: "W202 Club Indonesia",
  },
  {
    id: 4,
    title: "MBW202CI Raih Penghargaan Komunitas Otomotif Terbaik 2025",
    excerpt:
      "Mercedes-Benz W202 Club Indonesia meraih penghargaan sebagai Komunitas Otomotif Terbaik 2025 dari Kementerian Pariwisata dan Ekonomi Kreatif atas kontribusinya dalam mengembangkan budaya otomotif Indonesia.",
    date: "15 September 2025",
    image: "/hero-3.jpg",
    slug: "mbw202ci-raih-penghargaan-komunitas-terbaik-2025",
    author: "W202 Club Indonesia",
  },
  {
    id: 5,
    title: "Peluncuran Program Restorasi W202 Klasik",
    excerpt:
      "MBW202CI meluncurkan program restorasi untuk Mercedes-Benz W202 klasik bekerja sama dengan bengkel resmi dan supplier spare part original untuk menjaga nilai historis kendaraan.",
    date: "5 August 2025",
    image: "/hero-1.jpg",
    slug: "peluncuran-program-restorasi-w202-klasik",
    author: "W202 Club Indonesia",
  },
];

export default function HomePressRelease() {
  const [showAll, setShowAll] = useState(false);

  const displayedReleases = showAll
    ? PRESS_RELEASES
    : PRESS_RELEASES.slice(0, 3);

  return (
    <section className="py-4 mt-2 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-4r">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
            Press Release
            <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
          </h2>
        </div>

        {/* Press Releases Grid */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedReleases.map((release) => (
              <div
                key={release.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="mb-8">
                  <Image
                    src={release.image}
                    alt={release.title}
                    height={150}
                    width={150}
                                className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-xl shadow-lg"

                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-brand-gray mb-w">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <p className="font-medium text-brand-primary">
                        {release.author}
                      </p>
                      <p className="text-xs text-gray-500">{release.date}</p>
                    </div>
                  </div>

                  <h4 className="font-sans font-semibold text-brand-primary line-clamp-2">
                    {release.title}
                  </h4>

                  <p className="text-sm text-brand-gray mb-4 line-clamp-3">
                    {release.excerpt}
                  </p>

                  <Link
                    href={`/press/${release.slug}`}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-10 px-4 py-2 w-full border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            ))}
          </div>
        {/* Show More Button */}
        {!showAll && PRESS_RELEASES.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background h-10 px-6 py-2 border border-brand-primary text-brand-primary rounded font-medium hover:bg-brand-primary hover:text-white"
            >
              Semua Press Release
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
              className="lucide lucide-arrow-right ml-2 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            </button>
          </div>
        )}
        </div>

      </div>
    </section>
  );
}
