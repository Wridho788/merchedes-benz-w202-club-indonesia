"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useArticleIndexWebsite } from "@/lib/hooks/useArticleIndexWebsite";
import { CHAPTER_ID, CATEGORIES } from "@/lib/constants/api";

interface PressRelease {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  author: string;
}

export default function HomePressRelease() {
  const [showAll, setShowAll] = useState(false);

  // Fetch press releases from API
  const { data, isLoading, error } = useArticleIndexWebsite({
    chapter: CHAPTER_ID,
    category: CATEGORIES.PRESS_RELEASE,
    limit: 10,
    offset: 0,
    orderby: "",
    order: "asc",
  });

  // Map API data with proper image validation
  const releases: PressRelease[] =
    data?.content?.result?.map((item) => {
      // Check if image URL is valid (has filename after base URL)
      const imageUrl = item.image ?? "";
      const hasValidImage =
        imageUrl && !imageUrl.endsWith("/") && imageUrl.includes(".");

      return {
        id: parseInt(item.id),
        title: item.title || item.name,
        excerpt: item.shortdesc || item.name,
        date: item.date,
        image: hasValidImage ? imageUrl : "/hero-1.jpg",
        slug: item.id,
        author: "W202 Club Indonesia",
      };
    }) || [];

  const displayedReleases = showAll ? releases : releases.slice(0, 3);

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

        {/* Loading State */}
        {isLoading && (
          <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
                >
                  <div className="w-full h-[200px] bg-gray-300 rounded-t-xl" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-1/3" />
                    <div className="h-6 bg-gray-300 rounded w-full" />
                    <div className="h-4 bg-gray-300 rounded w-2/3" />
                    <div className="h-10 bg-gray-300 rounded w-full" />
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
            <p className="text-red-600 font-medium">
              Gagal memuat press release
            </p>
            <p className="text-red-500 text-sm mt-1">
              Silakan coba lagi nanti
            </p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && releases.length === 0 && (
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p className="text-gray-600 font-medium">
              Belum ada press release
            </p>
          </div>
        )}

        {/* Press Releases Grid */}
        {!isLoading && !error && releases.length > 0 && (
          <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayedReleases.map((release) => (
                <div
                  key={release.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={release.image}
                      alt={release.title}
                      fill
                      className="object-cover object-center"
                      unoptimized={release.image.startsWith("http")}
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <p className="font-medium text-brand-primary">
                        {release.author}
                      </p>
                      <span className="mx-2">•</span>
                      <p>{release.date}</p>
                    </div>

                    <h4 className="font-sans font-semibold text-brand-primary line-clamp-2 mb-2">
                      {release.title}
                    </h4>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                      {release.excerpt}
                    </p>

                    <Link
                      href={`/press/${release.slug}`}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white h-10 px-4 py-2 w-full"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {!showAll && releases.length > 3 && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors border border-brand-primary text-brand-primary rounded font-medium hover:bg-brand-primary hover:text-white h-10 px-6 py-2"
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
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
