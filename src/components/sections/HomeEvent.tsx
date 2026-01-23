"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useArticleIndexWebsite } from "@/lib/hooks/useArticleIndexWebsite";
import { CHAPTER_ID, CATEGORIES } from "@/lib/constants/api";

interface Event {
  id: number;
  title: string;
  date: string;
  text: string;
  location: string;
  image: string;
  slug: string;
}

export default function HomeEvent() {
  const [showAll, setShowAll] = useState(false);

  // Fetch events from API
  const { data, isLoading, error } = useArticleIndexWebsite({
    chapter: CHAPTER_ID,
    category: CATEGORIES.CLUB_EVENT,
    limit: 10,
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
        text:
          item.shortdesc ||
          item.text?.replace(/<[^>]*>/g, "").replace(/[\n\t]/g, " ").trim() ||
          "",
        location: "",
        image: hasValidImage ? imageUrl : "/Pic-2.jpg",
        slug: item.id,
      };
    }) || [];

  const displayedEvents = showAll ? events : events.slice(0, 6);

  return (
    <section className="py-4 mt-2 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
            Club Event
            <div className="h-1 w-24 bg-brand-accent mx-auto mt-4 mb-6"></div>
          </h2>
        </div>

        <div className="mb-8">
          <Image
            src="/Pic-2.jpg"
            alt="MBW202CI Event"
            width={1200}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-xl shadow-lg"
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
                >
                  <div className="aspect-video bg-gray-300" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-3/4" />
                    <div className="h-3 bg-gray-300 rounded w-1/2" />
                    <div className="h-3 bg-gray-300 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
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
          <div className="bg-gray-100 rounded-lg shadow-md p-8 text-center">
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
          <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/event/${event.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                      unoptimized={event.image.startsWith("http")}
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-2">
                      <h4 className="font-sans font-semibold text-brand-primary text-sm line-clamp-2 leading-tight">
                        {event.title}
                      </h4>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {event.text}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Show More Button */}
            {!showAll && events.length > 6 && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors rounded-lg font-medium"
                >
                  Selengkapnya
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
