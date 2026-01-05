"use client";

import { useState } from 'react'
import Image from 'next/image'

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

const FEATURED_MEMBERS = [
  {
    id: 1,
    name: "Richard Pardede",
    region: "Region 01 Jakarta",
    car: "W202 C180 Esprit1994",
    memberSince: "2007",
    image: "/Pic-1.jpg",
    youtubeUrl: "https://youtu.be/DpC6ogOXdag?si=qA2JFk5NXUcDZ6fn"
  },
  {
    id: 2,
    name: "Gomos Silitonga",
    region: "Region 01 Jakarta",
    car: "W202 Brabus B2 Full Modification",
    memberSince: "2009",
    image: "/Pic-2.jpg",
    youtubeUrl: "https://youtu.be/gG_DMCrKFVU?si=LgfryxllesU7BeIk"
  },
  {
    id: 3,
    name: "Hamzah",
    region: "Region 03 Surabaya",
    car: "W202 C200 Full Modification",
    memberSince: "2010",
    image: "/Pic-3.jpg",
    youtubeUrl: "https://youtu.be/oToC-E3iLuo?si=4FsOZS7GO9VBIBRG"
  }
]

export default function MemberPage() {
  const [selectedRegion, setSelectedRegion] = useState("all")

  return (
    <div className="page-wrapper">
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

          {/* Featured Members Directory */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <h3 className="font-sans font-semibold text-xl text-brand-primary">
                Direktori Featured Member
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
                  <option value="all">Semua Region</option>
                  <option value="jakarta">Region 01 Jakarta</option>
                  <option value="bandung">Region 02 Bandung</option>
                  <option value="surabaya">Region 03 Surabaya</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center p-4 border-b border-gray-200">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border border-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-brand-primary">
                        {member.name}
                      </h4>
                      <div className="flex flex-wrap gap-1 items-center">
                        <span className="text-xs bg-gray-50 px-2 py-0.5 rounded-md text-gray-600">
                          {member.region}
                        </span>
                      </div>
                      {member.youtubeUrl && (
                        <div className="flex space-x-2 mt-2">
                          <a
                            href={member.youtubeUrl}
                            className="text-sm text-brand-primary hover:text-brand-accent"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
                            >
                              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                              <path d="m10 15 5-3-5-3z"></path>
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 flex-grow">
                    <p className="text-sm font-medium">{member.car}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Member sejak: {member.memberSince}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                Menampilkan {FEATURED_MEMBERS.length} featured member
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
