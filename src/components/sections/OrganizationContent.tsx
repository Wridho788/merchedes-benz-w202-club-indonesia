"use client";

import Image from 'next/image'
import { useChapterById } from '@/lib/hooks/useChapterById'
import { CHAPTER_ID } from '@/lib/constants/api'

export default function OrganizationContent() {
  const { data: chapterData, isLoading: isLoadingChapter, error } = useChapterById(CHAPTER_ID);
  
  const chapterInfo = chapterData?.content?.result;
  const regions = chapterData?.content?.child || [];

  // Map board members from API data
  const boardMembers = chapterInfo
    ? [
        {
          id: 1,
          name: chapterInfo.chief || "-",
          position: "Presiden",
          image: "/board/placeholder.jpg",
        },
        {
          id: 2,
          name: chapterInfo.vice || "-",
          position: "Sekjen 1 (Sekretaris Jenderal 1)",
          image: "/board/placeholder.jpg",
        },
        {
          id: 3,
          name: chapterInfo.vice2 || "-",
          position: "Sekjen 2 (Sekretaris Jenderal 2)",
          image: "/board/placeholder.jpg",
        },
        {
          id: 4,
          name: chapterInfo.treasurer || "-",
          position: "Bendahara Umum",
          image: "/board/placeholder.jpg",
        },
      ]
    : [];

  // Map divisions from API data
  const divisions = chapterInfo
    ? [
        {
          id: 1,
          name: "Humas (Hubungan Masyarakat)",
          coordinator: chapterInfo.humas_pic || "-",
        },
        {
          id: 2,
          name: "Legal",
          coordinator: chapterInfo.legal_pic || "-",
        },
        {
          id: 3,
          name: "IT dan Database",
          coordinator: chapterInfo.it_pic || "-",
        },
        {
          id: 4,
          name: "Social Media Officer",
          coordinator: chapterInfo.socialmedia_pic || "-",
        },
        {
          id: 5,
          name: "Sponsorship & Kemitraan",
          coordinator: chapterInfo.sponshorship_pic || "-",
        },
        {
          id: 6,
          name: "Creative Design & Digital Content",
          coordinator: chapterInfo.creative_pic || "-",
        },
      ]
    : [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
            Organization
          </h1>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Susunan organisasi W202 Club of Indonesia sesuai dengan AD-ART dan SK
            Badan Hukum.
          </p>
        </div>

        {/* Pengurus Pusat */}
        {isLoadingChapter ? (
          <div className="bg-gray-50 rounded-lg p-8 mb-12 shadow-md">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6 text-center">
              Pengurus Pusat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6 text-center animate-pulse">
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4" />
                  <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2" />
                  <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12 text-center">
            <svg
              className="w-12 h-12 text-red-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-red-600 font-medium">Gagal memuat data organisasi</p>
            <p className="text-red-500 text-sm mt-1">Silakan coba lagi nanti</p>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 mb-12 shadow-md">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6 text-center">
              Pengurus Pusat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-sans font-semibold text-brand-primary">
                    {member.name}
                  </h4>
                  <p className="text-brand-accent text-sm mb-2">{member.position}</p>
                </div>
              ))}
            </div>

            {/* Divisi-Divisi */}
            <div className="mt-10">
              <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                Divisi-Divisi
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {divisions.map((division) => (
                  <div key={division.id} className="bg-white rounded p-4 shadow-sm">
                    <h5 className="font-sans font-medium text-brand-primary">
                      {division.name}
                    </h5>
                    <p className="text-sm text-gray-600">Koordinator: {division.coordinator}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Sekretariat & Penghargaan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sekretariat Pusat */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3 className="font-sans font-semibold text-xl text-brand-primary mb-4">
              Sekretariat Pusat
            </h3>
            <div className="flex">
              <div className="mr-4 text-brand-accent text-3xl">
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
                  className="text-brand-accent"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="font-medium mb-1">Sekretariat MBW202 Club Indonesia</p>
                <p className="text-gray-600">
                  Jl. H. Jian No.83, RT 008, RW 007, Kelurahan Cipete Utara,
                  Kecamatan Kebayoran Baru, Jakarta Selatan.
                </p>
                <p className="text-gray-600">Jakarta Selatan, DKI Jakarta 12150</p>
                <div className="mt-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:info@mbw202club.id" className="text-brand-accent hover:underline">
                      info@mbw202club.id
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Website:</span>{' '}
                    <a href="https://mbw202club.id" className="text-brand-accent hover:underline">
                      www.mbw202club.id
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Penghargaan & Prestasi */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3 className="font-sans font-semibold text-xl text-brand-primary mb-4">
              Penghargaan &amp; Prestasi
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4 text-brand-accent">
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
                    className="text-brand-accent text-xl"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">
                    Klub Variant Mercedes-Benz Terbesar di Indonesia
                  </p>
                  <p className="text-sm text-gray-600">MBCINA</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Hubungan dengan MB Club Indonesia */}
        <div className="mt-12">
          <h3 className="font-sans font-semibold text-xl text-brand-primary mb-6">
            Hubungan dengan MB Club Indonesia
          </h3>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-brand-primary mb-3">
                Keanggotaan MB Club Indonesia
              </h3>
              <p className="text-gray-700">
                MBW202CI merupakan klub yang berafiliasi dengan MB Club Indonesia
                (MBC Ina), organisasi payung untuk seluruh klub Mercedes-Benz di
                Indonesia. Sebagai klub yang diakui oleh MBC Ina, MBW202CI memiliki
                hak dan kewajiban yang telah diatur dalam ketentuan MBC Ina. Melalui
                afiliasi ini, anggota MBW202CI dapat berpartisipasi dalam
                event-event berskala nasional yang diselenggarakan oleh MBC Ina,
                serta mendapatkan akses ke jaringan komunitas Mercedes-Benz yang
                lebih luas di seluruh Indonesia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
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
                    className="w-6 h-6 text-brand-accent mr-2"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  <h4 className="text-lg font-medium text-brand-primary">
                    Status Badan Hukum
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">
                  NOMOR AHU-0002887.AH.01.07.TAHUN 2025
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
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
                    className="w-6 h-6 text-brand-accent mr-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h4 className="text-lg font-medium text-brand-primary">
                    Jumlah Anggota
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Saat ini terdapat lebih 1000 member aktif dari 9 Region dan
                  District yang tersebar di seluruh Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Struktur Regional */}
        <div className="mt-12">
          <h3 className="font-sans font-semibold text-xl text-brand-primary mb-6">
            Struktur Regional
          </h3>
          {isLoadingChapter ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Memuat data regional...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <div key={region.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <div className="flex items-center mb-4">
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
                      className="text-brand-primary mr-3"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h4 className="font-sans font-semibold text-brand-primary">
                      {region.desc}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Koordinator Regional: {region.type}
                  </p>
                  <div className="flex items-start mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent mt-1 mr-2 flex-shrink-0"
                    >
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>
                    {/* <p className="text-sm">
                      Wilayah: {region.city}
                    </p> */}
                  </div>
                  <p className="text-sm text-gray-600">Member: {region.members} orang</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
