"use client";

import Image from "next/image";
import Link from "next/link";
import { useArticleIndexWebsite } from "@/lib/hooks/useArticleIndexWebsite";
import { CHAPTER_ID, CATEGORIES } from "@/lib/constants/api";

interface Event {
  id: number;
  title: string;
  date: string;
  shortdesc: string;
  text: string;
  image: string;
  slug: string;
  type: string;
  islink: boolean;
  link: string | null;
}

export default function EventContent() {
  // Fetch events from API
  const { data, isLoading, error } = useArticleIndexWebsite({
    chapter: CHAPTER_ID,
    category: CATEGORIES.CLUB_EVENT,
    limit: 20,
    offset: 0,
    orderby: "",
    order: "asc",
  });

  // Map API data with proper image validation
  const events: Event[] =
    data?.content?.result?.map((item) => {
      const imageUrl = item.image ?? "";
      const hasValidImage =
        imageUrl && !imageUrl.endsWith("/") && imageUrl.includes(".");

      return {
        id: parseInt(item.id),
        title: item.title || item.name,
        date: item.date,
        shortdesc: item.shortdesc || "",
        text:
          item.text?.replace(/<[^>]*>/g, "").replace(/[\n\t]/g, " ").trim() ||
          "",
        image: hasValidImage ? imageUrl : "/Pic-2.jpg",
        slug: item.id,
        type: item.type || "club",
        islink: item.islink || false,
        link: item.link || null,
      };
    }) || [];

  // Get YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
            Event
          </h1>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai event yang diselenggarakan oleh W202 Club of Indonesia.
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="h-56 bg-gray-300" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 rounded w-1/2" />
                  <div className="h-4 bg-gray-300 rounded w-full" />
                  <div className="h-4 bg-gray-300 rounded w-2/3" />
                  <div className="h-10 bg-gray-300 rounded w-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
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
            <p className="text-red-600 font-medium">Gagal memuat event</p>
            <p className="text-red-500 text-sm mt-1">Silakan coba lagi nanti</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && events.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg
              className="w-12 h-12 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-gray-600 font-medium">Belum ada event</p>
          </div>
        )}

        {/* Events Grid */}
        {!isLoading && !error && events.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              const youtubeId = event.link ? getYouTubeId(event.link) : null;
              const thumbnailUrl = youtubeId
                ? `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
                : null;

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
                >
                  {/* Image/Video Thumbnail */}
                  <div className="h-56 overflow-hidden relative">
                    {event.islink && youtubeId ? (
                      <a
                        href={event.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative"
                      >
                        <Image
                          src={thumbnailUrl || event.image}
                          alt={event.title}
                          fill
                          className="object-cover hover:scale-105 transition duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-3">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="white"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <Link
                        href={`/event/${event.slug}`}
                        className="block w-full h-full"
                      >
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover hover:scale-105 transition duration-500"
                          unoptimized={event.image.startsWith("http")}
                        />
                      </Link>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-sans font-semibold text-brand-primary line-clamp-2 flex-1">
                        {event.title}
                      </h4>
                      <span
                        className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          event.type === "external"
                            ? "bg-gray-500 text-white"
                            : "bg-brand-accent text-white"
                        }`}
                      >
                        {event.type === "external" ? "Eksternal" : "Internal"}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-2">{event.date}</p>

                    <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-grow">
                      {event.shortdesc || event.text}
                    </p>

                    {event.islink && event.link ? (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-brand-primary text-white rounded text-sm font-medium hover:bg-opacity-90 transition text-center"
                      >
                        {youtubeId ? "Tonton Video" : "Lihat Link"}
                      </a>
                    ) : (
                      <Link
                        href={`/event/${event.slug}`}
                        className="w-full py-2 bg-brand-primary text-white rounded text-sm font-medium hover:bg-opacity-90 transition text-center block"
                      >
                        Detail Event
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* About Events Section */}
        {!isLoading && !error && events.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mt-16">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
              Tentang Event Kami
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                  Event Internal
                </h4>
                <p className="text-gray-600 mb-4">
                  W202 Club Indonesia secara rutin mengadakan berbagai event
                  internal yang eksklusif untuk anggota, seperti:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Kopdar Bulanan</span>
                      <p className="text-sm text-gray-600">
                        Pertemuan rutin anggota untuk silaturahmi dan berbagi
                        pengalaman
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Touring</span>
                      <p className="text-sm text-gray-600">
                        Perjalanan bersama ke berbagai destinasi menarik di
                        Indonesia
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Workshop Teknis</span>
                      <p className="text-sm text-gray-600">
                        Sesi edukasi tentang perawatan dan perbaikan Mercedes-Benz
                        W202
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Anniversary</span>
                      <p className="text-sm text-gray-600">
                        Perayaan ulang tahun klub dengan berbagai acara spesial
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                  Event Eksternal
                </h4>
                <p className="text-gray-600 mb-4">
                  Selain event internal, W202 Club Indonesia juga aktif
                  berpartisipasi dalam berbagai event otomotif, seperti:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Pameran Otomotif</span>
                      <p className="text-sm text-gray-600">
                        Partisipasi dalam IIMS, GIIAS, dan pameran otomotif
                        lainnya
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Car Show</span>
                      <p className="text-sm text-gray-600">
                        Ikut serta dalam berbagai pameran mobil klasik di
                        Indonesia
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Gathering Komunitas</span>
                      <p className="text-sm text-gray-600">
                        Berpartisipasi dalam acara gabungan antar komunitas
                        otomotif
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-accent mr-2">•</span>
                    <div>
                      <span className="font-medium">Event Sosial</span>
                      <p className="text-sm text-gray-600">
                        Bakti sosial dan kegiatan amal untuk masyarakat
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
