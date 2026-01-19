"use client";

import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useArticleIndexWebsite } from "@/lib/hooks/useArticleIndexWebsite";
import { CHAPTER_ID, CATEGORIES } from "@/lib/constants/api";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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

  // Map API data or use static data as fallback
  const apiReleases =
    data?.content?.result?.map((item) => ({
      id: parseInt(item.id),
      title: item.title || item.name,
      excerpt: item.shortdesc || item.name,
      date: item.date,
      image: item.image || "/hero-1.jpg",
      slug: item.id,
      author: "W202 Club Indonesia",
    })) || [];

  const releases = apiReleases.length > 0 ? apiReleases : [];
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

        {/* Press Releases Grid */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedReleases.map(
              (release: any) => (
                <div
                  key={release.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                >
                  <div className="mb-8">
                    <Image
                      src={release.image || "/hero-1.jpg"}
                      alt={String(release.title) || "Press Release Image"}
                      height={150}
                      width={150}
                      className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-xl shadow-lg"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-brand-gray mb-w">
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
              ),
            )}
          </div>
          {/* Show More Button */}
          {!showAll && releases.length > 3 && (
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
