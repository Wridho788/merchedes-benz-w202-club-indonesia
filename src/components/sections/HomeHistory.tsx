"use client";

import { useState } from "react";
import clsx from "clsx";
import { useArticleIndexWebsite } from "@/lib/hooks/useArticleIndexWebsite";
import { CHAPTER_ID, CATEGORIES } from "@/lib/constants/api";

interface Milestone {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  highlightedText: string;
}

export default function HomeHistory() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // Fetch history data from API
  const { data, isLoading, error } = useArticleIndexWebsite({
    chapter: CHAPTER_ID,
    category: CATEGORIES.HISTORY,
    limit: 10,
    offset: 0,
    orderby: "",
    order: "asc",
  });

  const milestones: Milestone[] = [
    {
      id: 1,
      title: "Keputusan Menteri Hukum Republik Indonesia tentang Pengesahan Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA",
      date: "May 2025",
      location: "Jakarta",
      description: "Keputusan Menteri Hukum Republik Indonesia Nomor AHU-0002887.AH.01.07.TAHUN 2025 Tentang Pengesahan Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA: Menetapkan memberikan pengesahan Perkumpulan: MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA Berkedudukan di JAKARTA SELATAN, sesuai salinan Akta Nomor 03 Tanggal 10 Maret 2025 yang dibuat oleh MUHAMMAD SYARIF UMAR S.H., M.KN.,, yang berkedudukan di KOTA DEPOK",
      highlightedText: ""
    },
    {
      id: 2,
      title: "Akta Pendirian Perkumpulan MERCEDES BENZ WDUA NOL DUA CLUB INDONESIA",
      date: "March 2025",
      location: "Jakarta",
      description: "Akta Pendirian Perkumpulan disusun untuk proses pengajuan Badan Hukum Perkumpulan",
      highlightedText: ""
    },
    {
      id: 3,
      title: "Penyerahan Sertifikat Pengurus Pusat MBW202CI dari Mercedes-Benz Club Indonesia",
      date: "September 2023",
      location: "Sentul, Bogor Jawa Barat",
      description: "Penyerahan Sertifikat Pengurus Pusat MBW202CI dari Mercedes-Benz Club Indonesia yang diselenggarakan bertepatan pada acara Autospeed Festival di Sentul Internasional Circuit pada 2 September 2023 sekaligus Pemecahan Rekor Muri 1000 Mercedes Benz berkumpul dan berparade.",
      highlightedText: ""
    },
    {
      id: 4,
      title: "Revisi Anggaran Dasar Mercedes-Benz Club Indonesia yang Mengakomodasi Keberadaan Pengurus Pusat Club Variant",
      date: "June 2023",
      location: "Bogor Jawa Barat",
      description: "Pada Munas X Mercedes-Benz Club Indonesia yang berlangsung di Bogor 24 Juni 2023 telah dilakukan revisi Anggaran Dasar yang mengakomodir keberadaan Pengurus Pusat Club Variant seperti MBW202CI.",
      highlightedText: ""
    },
    {
      id: 5,
      title: "MBW202CI District 04.2 Solo Berdiri",
      date: "February 2016",
      location: "Solo Jawa Tengah",
      description: "Pengukuhan pendirian MBW202CI District 04.2 Solo.",
      highlightedText: ""
    }
  ];

  // Map API data to milestones format, or use static data as fallback
  const apiMilestones = data?.content?.result?.map((item) => ({
    id: parseInt(item.id),
    title: item.title || item.name,
    date: item.date,
    location: "", // Not provided in API
    description: item.shortdesc || item.name,
    highlightedText: "",
  })) || [];

  // Use API data if available, otherwise use static data
  const displayMilestones = apiMilestones.length > 0 ? apiMilestones : milestones;

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
            History
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6 md:p-8">
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-700 leading-relaxed text-justify">
              Mercedes Benz W202 Club Indonesia (MBW202CI) resmi didirikan pada
              7 Juli 2007 oleh enam orang pendiri yang merupakan pemilik dan
              penggemar Mercedes-Benz tipe W202. MBW202CI dideklarasikan dalam
              acara "Mercedes-Benz Young Timer Day" di Ciputat dan sejak awal
              telah memiliki struktur organisasi serta AD/ART sederhana, yang
              kemudian disempurnakan dalam Musyawarah Nasional pertama pada 17
              Februari 2008 di Sentul.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-justify">
              Visi utamanya adalah menghimpun dan menyatukan pemilik/penggemar
              W202 di seluruh Indonesia. Saat ini, MBW202CI telah memiliki lebih
              dari 1000 anggota dan memperluas jangkauan dengan membentuk
              beberapa region dan distrik di berbagai kota besar seperti
              Jakarta, Bandung, Surabaya, Malang, Semarang, Pekalongan, Solo,
              Medan, dan Yogyakarta.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-justify">
              MBW202CI menjadi anggota Mercedes-Benz Club Indonesia (MB Club
              INA), organisasi induk resmi yang mewadahi berbagai klub pecinta
              dan pemilik mobil Mercedes-Benz di seluruh Indonesia, dengan
              tujuan untuk mempererat silaturahmi antar komunitas, menjaga nilai
              sejarah dan orisinalitas kendaraan, serta menjadi mitra strategis
              bagi ATPM Mercedes-Benz Indonesia dalam berbagai kegiatan
              otomotif. Klub-klub yang tergabung dalam MB Club INA mencakup
              berbagai tipe dan generasi Mercedes-Benz, dari model klasik hingga
              modern.
            </p>
          </div>
          <div className="border-t border-gray-200 pt-6 mb-4">
            <h3 className="text-xl font-semibold text-brand-primary text-center mb-6">
              Tonggak Sejarah Kami
            </h3>
          </div>
          <div className="relative pl-8 border-l-2 border-brand-accent space-y-12 max-w-3xl mx-auto">
            {displayMilestones.map((milestone) => (
              <div key={milestone.id} className="timeline-entry relative">
                <div className="absolute -left-[25px] mt-1 w-6 h-6 rounded-full bg-brand-accent z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <div 
                    className="flex justify-between items-start"
                    onClick={() => toggleExpand(milestone.id)}
                  >
                    <div className="flex-1">
                      <h3 className="font-sans font-semibold text-xl text-brand-primary">
                        {milestone.title}
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-brand-accent mb-2 mt-2">
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
                          className="w-4 h-4 mr-1"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span>{milestone.date}</span>
                        <div className="flex items-center ml-4">
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
                            className="w-4 h-4 mr-1"
                          >
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>{milestone.location}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-500 ml-2 flex-shrink-0">
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
                        className={clsx(
                          "w-5 h-5 transition-transform duration-300",
                          expandedId === milestone.id && "rotate-180"
                        )}
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </div>
                  <p className={clsx(
                    "text-gray-700 mt-2",
                    expandedId !== milestone.id && "line-clamp-2"
                  )}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/sejarah">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bg-brand-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white h-10 px-6 py-2 border border-brand-primary text-brand-primary rounded font-medium hover:bg-brand-accent hover:text-white">
                Selengkapnya
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}