"use client";

import { useState } from "react";
import Image from "next/image";

interface FeaturedMember {
  id: number;
  title: string;
  videoId: string;
  thumbnail: string;
  views: string;
  description: string;
}

const FEATURED_MEMBERS: FeaturedMember[] = [
  {
    id: 1,
    title: "Richard Pardede",
    videoId: "https://youtu.be/DpC6ogOXdag?si=qA2JFk5NXUcDZ6fn",
    thumbnail: "https://img.youtube.com/vi/DpC6ogOXdag/mqdefault.jpg",
    views: "W202 C180 Esprit1994",
    description: "Region 01 Jakarta",
  },
  {
    id: 2,
    title: "Gomos Silitonga",
    videoId: "https://youtu.be/gG_DMCrKFVU?si=LgfryxllesU7BeIk",
    thumbnail: "https://img.youtube.com/vi/gG_DMCrKFVU/mqdefault.jpg",
    views: "W202 Brabus B2 Full Modification",
    description: "Region 01 Jakarta",
  },
  {
    id: 3,
    title: "Hamzah",
    videoId: "https://youtu.be/oToC-E3iLuo?si=4FsOZS7GO9VBIBRG",
    thumbnail: "https://img.youtube.com/vi/oToC-E3iLuo/mqdefault.jpg",
    views: "W202 C240 2000",
    description: "Region 03 Surabaya",
  },
  {
    id: 4,
    title: "Andri Suhendi",
    videoId: "https://youtu.be/1KXJH1b0b0o?si=VYk2r6b1b1Y6mY6D",
    thumbnail: "https://img.youtube.com/vi/1KXJH1b0b0o/mqdefault.jpg",
    views: "W202 C200 1994",
    description: "Region 02 Bandung",
  },
  {
    id: 5,
    title: "Jean Carlo Napitupulu",
    videoId: "https://youtu.be/5dQ7X9vJ7xA?si=example",
    thumbnail: "https://img.youtube.com/vi/5dQ7X9vJ7xA/mqdefault.jpg",
    views: "w202 C180 1995",
    description: "Region 01 Jakarta",
  },
];

export default function HomeFeaturedMembers() {
  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll
    ? FEATURED_MEMBERS
    : FEATURED_MEMBERS.slice(0, 3);

  return (
    <section className="py-4 mt-2 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-4 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
            Featured Members
            <div className="h-1 w-24 bg-brand-accent mt-2 mb-6 mx-auto"></div>
          </h2>
        </div>
        <div className="mb-8">
          <Image
            src="/Pic-3.jpg"
            alt="Mercedes-Benz W202 Club Members Gathering"
            width={150}
            height={150}
            className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-xl shadow-lg"
          />{" "}
        </div>

        {/* Featured Members Grid */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {displayedMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${member.thumbnail})` }}
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-brand-primary text-base md:text-lg mb-2 line-clamp-2">
                    {member.title}
                  </h3>

                  <p className="text-sm text-brand-gray mb-3 line-clamp-2">
                    {member.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-brand-gray">
                    <span className="flex items-center gap-1">
                      {member.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAll && FEATURED_MEMBERS.length > 3 && (
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
      </div>
    </section>
  );
}
