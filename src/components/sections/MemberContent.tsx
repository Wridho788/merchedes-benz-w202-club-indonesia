"use client";

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useMember } from '@/lib/hooks/useMember'
import { useChapterById } from '@/lib/hooks/useChapterById'
import { CHAPTER_ID } from '@/lib/constants/api'

const BENEFITS = [
  {
    id: 1,
    icon: "users",
    title: "Komunitas",
    description: "Bergabung dengan komunitas pencinta Mercedes W202 dari seluruh Indonesia."
  },
  {
    id: 2,
    icon: "calendar",
    title: "Acara Reguler",
    description: "Pertemuan rutin dan touring bersama anggota lainnya di berbagai daerah."
  },
  {
    id: 3,
    icon: "drill",
    title: "Bantuan Teknis",
    description: "Akses ke saran dan bantuan teknis dari sesama anggota dan ahli W202."
  },
  {
    id: 4,
    icon: "tag",
    title: "Diskon Merchant",
    description: "Dapatkan penawaran khusus dari merchant dan bengkel partner kami."
  }
]

export default function MemberContent() {
  const [selectedRegion, setSelectedRegion] = useState("")
  const observerTarget = useRef<HTMLDivElement>(null)

  // Fetch chapter data
  const { data: chapterData } = useChapterById(CHAPTER_ID)

  // Fetch members data with infinite scroll
  const {
    data: membersData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingMembers,
  } = useMember({
    chapter: selectedRegion,
    limit: 50,
  })

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  // Get all members from all pages
  const allMembers = membersData?.pages.flatMap((page) => page.content.result) || []
  const totalRecord = membersData?.pages[0]?.content.record || 0

  // Separate featured and regular members
  const featuredMembers = allMembers.filter((member) => member.featured === "1")
  const regularMembers = allMembers.filter((member) => member.featured === "0")

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-primary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-white px-6 py-2 rounded-md mb-4">
              <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
                Member
              </h1>
            </div>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-lg text-white max-w-2xl mx-auto mb-6">
              Bergabunglah dengan W202 Club of Indonesia dan dapatkan berbagai
              keuntungan eksklusif.
            </p>
            <div className="text-center">
              <a
                href="https://linktr.ee/mbw202cijakartaregion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
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
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  Hubungi via WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <div className="py-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
                  Benefit Join MBW202CI
                </h2>
                <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Keuntungan dan aktivitas yang dapat Anda nikmati sebagai member W202
                  Club of Indonesia.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="bg-gray-50 rounded-lg p-6 transition duration-300 hover:shadow-lg"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center mx-auto mb-6">
                      {benefit.icon === "users" && (
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
                          className="h-8 w-8 text-white"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      )}
                      {benefit.icon === "calendar" && (
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
                          className="h-8 w-8 text-white"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      )}
                      {benefit.icon === "drill" && (
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
                          className="h-8 w-8 text-white"
                        >
                          <path d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z"></path>
                          <path d="M18 6h4"></path>
                          <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"></path>
                          <path d="m5 10-2 8"></path>
                          <path d="M12 10v3c0 .6-.4 1-1 1H8"></path>
                          <path d="m7 18 2-8"></path>
                          <path d="M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"></path>
                        </svg>
                      )}
                      {benefit.icon === "tag" && (
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
                          className="h-8 w-8 text-white"
                        >
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-sans font-semibold text-center mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Members Directory */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <h3 className="font-sans font-semibold text-xl text-brand-primary">
                Direktori Member
              </h3>
              <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg mt-3 sm:mt-0">
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
                  className="text-brand-primary h-4 w-4"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-[180px] border-none bg-transparent focus:ring-0 text-sm"
                >
                  <option value="">Semua Region</option>
                  {chapterData?.content.child?.map((chapter) => (
                    <option key={chapter.id} value={chapter.id}>
                      {chapter.desc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {isLoadingMembers ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-primary border-r-transparent"></div>
                <p className="mt-4 text-gray-600">Memuat data member...</p>
              </div>
            ) : (
              <>
                {/* Featured Members Section */}
                {featuredMembers.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4 flex items-center gap-2">
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
                        className="text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      Featured Members
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {featuredMembers.map((member) => (
                        <div
                          key={member.code}
                          className="border-2 border-yellow-400 rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow relative"
                        >
                          <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            Featured
                          </div>
                          <div className="flex items-center p-4 border-b border-gray-200">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-yellow-400 bg-gray-100 flex items-center justify-center">
                              {member.image ? (
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                  unoptimized
                                />
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-gray-400"
                                >
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-sans font-medium text-brand-primary">
                                {member.name}
                              </h4>
                              <div className="flex flex-wrap gap-1 items-center">
                                <span className="text-xs bg-gray-50 px-2 py-0.5 rounded-md text-gray-600">
                                  {member.chapter}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-gray-50 flex-grow">
                            {member.vehicle && (
                              <p className="text-sm font-medium">{member.vehicle}</p>
                            )}
                            <p className="text-xs text-gray-600 mt-1">
                              Member sejak: {member.joined}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* All Members Section */}
                {regularMembers.length > 0 && (
                  <div>
                    <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                      Semua Member
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {regularMembers.map((member) => (
                        <div
                          key={member.code}
                          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center p-4 border-b border-gray-200">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border border-gray-200 bg-gray-100 flex items-center justify-center">
                              {member.image ? (
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                  unoptimized
                                />
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-gray-400"
                                >
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-sans font-medium text-brand-primary">
                                {member.name}
                              </h4>
                              <div className="flex flex-wrap gap-1 items-center">
                                <span className="text-xs bg-gray-50 px-2 py-0.5 rounded-md text-gray-600">
                                  {member.chapter}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 bg-gray-50 flex-grow">
                            {member.vehicle && (
                              <p className="text-sm font-medium">{member.vehicle}</p>
                            )}
                            <p className="text-xs text-gray-600 mt-1">
                              Member sejak: {member.joined}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Loading indicator for infinite scroll */}
                {isFetchingNextPage && (
                  <div className="text-center py-8">
                    <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-brand-primary border-r-transparent"></div>
                    <p className="mt-2 text-sm text-gray-600">Memuat lebih banyak...</p>
                  </div>
                )}

                {/* Observer target for infinite scroll */}
                <div ref={observerTarget} className="h-4" />

                <div className="text-center mt-8">
                  <p className="text-gray-600 text-sm">
                    Menampilkan {allMembers.length} dari {totalRecord} member
                    {featuredMembers.length > 0 && ` (${featuredMembers.length} featured)`}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
