"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useArticleIndexWebsite } from "@/lib/hooks/useArticleIndexWebsite";
import { CHAPTER_ID, CATEGORIES } from "@/lib/constants/api";
import { text } from "stream/consumers";

interface Event {
  id: number;
  title: string;
  date: string;
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

  // Map API data or use static data as fallback
  const apiEvents =
    data?.content?.result?.map((item) => {
      // Check if image URL is valid (has filename after base URL)
      const hasValidImage = item.image && !item.image.endsWith('/') && item.image.includes('.');
      
      return {
        id: parseInt(item.id),
        title: item.title || item.name,
        date: item.date,
        text: item.text?.replace(/<[^>]*>/g, '').replace(/[\n\t]/g, ' ').trim() || "",
        location: "", // Not provided in API
        image: hasValidImage ? item.image : "/Pic-2.jpg",
        slug: item.id,
      };
    }) || [];

  const events = apiEvents.length > 0 ? apiEvents : [];
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
            alt="MBW202CI Logo"
            width={150}
            height={150}
            className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-xl shadow-lg"
          />{" "}
        </div>

        {/* Events Grid */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedEvents.map((event) => (
              <Link
                key={event.id}
                href={`/event/${event.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={event.image||"/Pic-2.jpg"}
                    alt={event.title}
                    fill
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="mb-2">
                    <h4 className="font-sans font-semibold text-brand-primary text-sm line-clamp-2 leading-tight">
                      {event.title}
                    </h4>
                  </div>
                  <div className="flex-grow">
                      <p className="text-sm text-gray-600 mb-1">
                        {event.date} • {event.text}
                      </p>
                      <p className="text-sm mb-1 line-clamp-2">
                        Event tahunan Mercedes Benz Club Indonesia
                      </p>
                      {/* <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
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
                        <span>{event.date}</span>
                      </div> */}
                      {/* <div className="mb-2">
                        <h4 className="font-sans font-semibold text-mercedes-blue text-sm line-clamp-2 leading-tight">
                          Jambore Nasional XX di Sumarecon Bandung
                        </h4>
                      </div> */}

                      {/* <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{event.location}</span>
                      </div> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
    </section>
  );
}
