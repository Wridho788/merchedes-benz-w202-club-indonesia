"use client";

import { useState } from "react";
import Image from "next/image";
import { useEventIndexWebsite } from "@/lib/hooks/useEvent";
import { CHAPTER_ID } from "@/lib/constants/api";

interface Event {
  id: string;
  name: string;
  dates: string;
  time: string;
  desc: string;
  image: string;
  fee: number;
  type: number;
  type_desc: string;
  done: number;
  done_desc: string;
  code?: string;
  chapter?: string;
  minimum_participants?: string;
}

export default function EventContent() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Fetch events from API
  const { data, isLoading, error } = useEventIndexWebsite({
    chapter: String(CHAPTER_ID),
    status: "",
    type: "",
    date: "",
    limit: 20,
    offset: 0,
  });

  // Map API data
  const events: Event[] =
    data?.content?.result?.map((item) => ({
      id: item.id,
      name: item.name,
      dates: item.dates,
      time: item.time,
      desc: item.desc || "",
      image: item.image || "/Pic-2.jpg",
      fee: item.fee,
      type: item.type,
      type_desc: item.type_desc,
      done: item.done,
      done_desc: item.done_desc,
      code: item.code,
      chapter: item.chapter,
      minimum_participants: item.minimum_participants,
    })) || [];

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  // Close modal
  const closeModal = () => setSelectedEvent(null);

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
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow group cursor-pointer"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    unoptimized={event.image.startsWith("http")}
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        event.done === 0
                          ? "bg-green-500 text-white"
                          : "bg-gray-500 text-white"
                      }`}
                    >
                      {event.done_desc}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-sans font-semibold text-brand-primary line-clamp-2 flex-1 group-hover:text-brand-accent transition-colors">
                      {event.name}
                    </h4>
                    <span
                      className={`ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        event.type === 1
                          ? "bg-gray-500 text-white"
                          : "bg-brand-accent text-white"
                      }`}
                    >
                      {event.type_desc}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">📅 {event.dates}</p>
                  <p className="text-sm text-gray-600 mb-2">⏰ {event.time}</p>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-3 flex-grow">
                    {event.desc}
                  </p>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-brand-primary">
                      {event.fee > 0 ? formatCurrency(event.fee) : "Gratis"}
                    </span>
                    <span className="text-sm text-brand-accent font-medium group-hover:underline">
                      Detail Event →
                    </span>
                  </div>
                </div>
              </div>
            ))}
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

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.name}
                fill
                className="object-cover"
                unoptimized={selectedEvent.image.startsWith("http")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    selectedEvent.done === 0
                      ? "bg-green-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {selectedEvent.done_desc}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    selectedEvent.type === 1
                      ? "bg-gray-600 text-white"
                      : "bg-brand-accent text-white"
                  }`}
                >
                  {selectedEvent.type_desc}
                </span>
              </div>

              {/* Title over image */}
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl font-bold text-white">
                  {selectedEvent.name}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
              {/* Event Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-2xl mb-1 block">📅</span>
                  <p className="text-xs text-gray-500 uppercase">Tanggal</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedEvent.dates}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-2xl mb-1 block">⏰</span>
                  <p className="text-xs text-gray-500 uppercase">Waktu</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedEvent.time}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-2xl mb-1 block">👥</span>
                  <p className="text-xs text-gray-500 uppercase">Min. Peserta</p>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedEvent.minimum_participants || "-"} orang
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <span className="text-2xl mb-1 block">💰</span>
                  <p className="text-xs text-gray-500 uppercase">Biaya</p>
                  <p className="text-sm font-semibold text-brand-primary">
                    {selectedEvent.fee > 0
                      ? formatCurrency(selectedEvent.fee)
                      : "Gratis"}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Deskripsi Event
                </h3>
                <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
                  {selectedEvent.desc}
                </p>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                  Informasi Tambahan
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {selectedEvent.chapter && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Chapter</span>
                      <span className="font-medium">{selectedEvent.chapter}</span>
                    </div>
                  )}
                  {selectedEvent.code && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Kode</span>
                      <span className="font-medium">{selectedEvent.code}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              {selectedEvent.done === 0 && (
                <div className="mt-6 text-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Hubungi Kami untuk Ikut Event
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
