"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useSliderWebsite } from "@/lib/hooks/useSliderWebsite";

// Fallback slides ketika API tidak tersedia
const FALLBACK_SLIDES = [
  {
    id: 1,
    image: "/hero-1.jpg",
    alt: "Mercedes Benz W202 Gathering",
    url: "",
  },
  {
    id: 2,
    image: "/hero-2.jpg",
    alt: "Mercedes Benz W202 Community",
    url: "",
  },
  {
    id: 3,
    image: "/hero-3.jpg",
    alt: "Mercedes Benz W202 Club Event",
    url: "",
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { data, isLoading, error } = useSliderWebsite("10", "0");

  // Use API data if available, fallback to static data only on error
  const slides = error
    ? FALLBACK_SLIDES
    : data?.content?.result?.length
      ? data.content.result.map((item) => ({
          id: parseInt(item.id),
          image: item.image,
          alt: item.name,
          url: item.url,
        }))
      : [];

  // Track image loading
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  // Set imagesLoaded when all images are loaded
  useEffect(() => {
    if (slides.length > 0 && loadedCount >= slides.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount, slides.length]);

  // Reset loaded state when slides change
  useEffect(() => {
    setLoadedCount(0);
    setImagesLoaded(false);
  }, [data, error]);

  useEffect(() => {
    // Jangan jalankan interval jika tidak ada slides
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Reset currentSlide jika melebihi jumlah slides
  useEffect(() => {
    if (currentSlide >= slides.length && slides.length > 0) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides.length]);

  // Handle image load error - gunakan fallback
  const handleImageError = (slideId: number) => {
    setImageError((prev) => ({ ...prev, [slideId]: true }));
  };

  // Dapatkan image source dengan fallback
  const getImageSrc = (slide: (typeof slides)[0], index: number) => {
    if (imageError[slide.id] && FALLBACK_SLIDES[index]) {
      return FALLBACK_SLIDES[index].image;
    }
    return slide.image;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[700px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Loading State - tampil saat loading API atau images belum selesai load */}
      {(isLoading || (slides.length > 0 && !imagesLoaded)) && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-40">
          <div className="animate-pulse text-white">Loading...</div>
        </div>
      )}

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={clsx(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={getImageSrc(slide, index)}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
            onLoad={handleImageLoad}
            onError={() => handleImageError(slide.id)}
            unoptimized={slide.image.startsWith("http")}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col justify-end min-h-[700px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="mb-1 md:mb-2">
          <div className="max-w-2xl text-white mb-10 md:mb-0 bg-gray-900/15 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/10">
            <div className="mb-4">
              <h1 className="font-serif text-3xl md:text-5xl text-white">
                Mercedes Benz W202
              </h1>
              <h2 className="font-serif text-2xl md:text-4xl text-white">
                Club Indonesia
              </h2>
            </div>
            <p className="font-sans text-sm md:text-base mb-5 text-white max-w-xl">
              Komunitas resmi pecinta Mercedes-Benz W202 di Indonesia yang
              berdiri sejak tahun 2007. Bergabunglah dengan kami untuk berbagi
              passion dan pengalaman bersama.
            </p>
            <div className="flex space-x-3">
              <a
                data-testid="link-join"
                href="/member"
                className="bg-brand-accent hover:bg-opacity-90 text-white py-2 px-4 rounded text-sm font-sans font-medium transition duration-300"
              >
                Bergabung
              </a>
              <a
                data-testid="link-about"
                href="/sejarah"
                className="border border-white text-white hover:bg-white hover:text-brand-primary py-2 px-4 rounded text-sm font-sans font-medium transition duration-300"
              >
                Tentang Kami
              </a>
            </div>
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={clsx(
                "w-3 h-3 rounded-full transition-colors",
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
