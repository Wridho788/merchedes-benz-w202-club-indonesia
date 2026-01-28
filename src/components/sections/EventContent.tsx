"use client";

import { useState, useMemo } from "react";
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
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedType, setSelectedType] = useState<"" | 0 | 1>("");
  const [hasDateFilter, setHasDateFilter] = useState(false);

  // Fetch events from API
  const { data, isLoading, error } = useEventIndexWebsite({
    chapter: String(CHAPTER_ID),
    status: "",
    type: selectedType === "" ? "" : String(selectedType),
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

  // Helper function to parse date string (DD Mon YYYY format)
  const parseEventDate = (dateStr: string): Date => {
    const date = new Date(dateStr);
    return date;
  };

  // Helper function to check if date is in current month
  const isInCurrentMonth = (eventDate: Date): boolean => {
    const now = new Date();
    return (
      eventDate.getMonth() === now.getMonth() &&
      eventDate.getFullYear() === now.getFullYear()
    );
  };

  // Helper function to check if date is in next month
  const isInNextMonth = (eventDate: Date): boolean => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return (
      eventDate.getMonth() === nextMonth.getMonth() &&
      eventDate.getFullYear() === nextMonth.getFullYear()
    );
  };

  // Helper function to check if date matches selected date
  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Filter upcomming events (next month, not done)
  const upcomingEvents = useMemo(() => {
    return events.filter((event) => {
      const eventDate = parseEventDate(event.dates);
      return isInNextMonth(eventDate) && event.done === 0;
    });
  }, [events]);

  // Filter past events (done)
  const pastEvents = useMemo(() => {
    return events.filter((event) => event.done === 1);
  }, [events]);

  // Filter events for selected date in calendar
  const eventsOnSelectedDate = useMemo(() => {
    return events.filter((event) => {
      const eventDate = parseEventDate(event.dates);
      return (
        isSameDay(eventDate, selectedDate) &&
        isInCurrentMonth(eventDate)
      );
    });
  }, [events, selectedDate]);

   // Close modal
  const closeModal = () => setSelectedEvent(null);

  // Clear date filter
  const clearDateFilter = () => {
    setSelectedDate(new Date());
    setHasDateFilter(false);
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setHasDateFilter(true);
  };

  // Get current month and year for display
  const currentMonthYear = selectedDate.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-sans font-bold text-brand-primary">
            Event
          </h1>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai event yang diselenggarakan oleh W202 Club of Indonesia.
          </p>
        </div>
        <div className="mb-16">
          <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
            Event Mendatang
          </h3>
          <div className="overflow-x-auto scroll-hidden pb-6">
            <div className="flex space-x-6 min-w-max">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div key={event.id} className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-40 overflow-hidden relative">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-sans font-semibold text-lg text-brand-primary line-clamp-2">
                        {event.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">{event.dates}</p>
                      <p className="text-sm mb-4 line-clamp-2">
                        {event.desc}
                      </p>
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-brand-primary text-white rounded text-sm font-medium hover:bg-opacity-90">
                        Detail Event
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-8">
                  <p className="text-gray-500">Tidak ada event mendatang</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary">
              Kalender Event
            </h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedType("")}
                className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                  selectedType === ""
                    ? "bg-brand-primary text-white"
                    : "bg-brand-light text-brand-primary hover:bg-brand-accent hover:text-white"
                }`}>
                Semua
              </button>
              <button 
                onClick={() => setSelectedType(0)}
                className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                  selectedType === 0
                    ? "bg-brand-primary text-white"
                    : "bg-brand-light text-brand-primary hover:bg-brand-accent hover:text-white"
                }`}>
                Internal
              </button>
              <button 
                onClick={() => setSelectedType(1)}
                className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                  selectedType === 1
                    ? "bg-brand-primary text-white"
                    : "bg-brand-light text-brand-primary hover:bg-brand-accent hover:text-white"
                }`}>
                External
              </button>
              {hasDateFilter && (
                <button 
                  onClick={clearDateFilter}
                  className="px-4 py-2 rounded text-sm font-medium transition duration-300 bg-red-500 text-white hover:bg-red-600">
                  Clear Date Filter
                </button>
              )}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                  Kalender Event
                </h4>
                <div className="rdp p-3 rounded-md border">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                    <div className="space-y-4 w-full">
                      <div className="flex justify-between items-center pt-1">
                        <button
                          onClick={() => handleDateSelect(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}
                          className="px-3 py-2 hover:bg-gray-100 rounded"
                        >
                          ← Prev
                        </button>
                        <div className="text-sm font-medium">{currentMonthYear}</div>
                        <button
                          onClick={() => handleDateSelect(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}
                          className="px-3 py-2 hover:bg-gray-100 rounded"
                        >
                          Next →
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                          <div key={day} className="w-9 h-9 flex items-center justify-center text-xs font-medium text-gray-500">
                            {day}
                          </div>
                        ))}
                        {(() => {
                          const year = selectedDate.getFullYear();
                          const month = selectedDate.getMonth();
                          const firstDay = new Date(year, month, 1);
                          const lastDay = new Date(year, month + 1, 0);
                          const prevLastDay = new Date(year, month, 0);
                          const daysInMonth = lastDay.getDate();
                          const daysInPrevMonth = prevLastDay.getDate();
                          const firstDayOfWeek = firstDay.getDay();
                          
                          const days = [];
                          
                          // Previous month days
                          for (let i = firstDayOfWeek - 1; i >= 0; i--) {
                            days.push({
                              date: new Date(year, month - 1, daysInPrevMonth - i),
                              isCurrentMonth: false,
                            });
                          }
                          
                          // Current month days
                          for (let i = 1; i <= daysInMonth; i++) {
                            days.push({
                              date: new Date(year, month, i),
                              isCurrentMonth: true,
                            });
                          }
                          
                          // Next month days
                          const remainingDays = 42 - days.length;
                          for (let i = 1; i <= remainingDays; i++) {
                            days.push({
                              date: new Date(year, month + 1, i),
                              isCurrentMonth: false,
                            });
                          }
                          
                          return days.map((day, idx) => {
                            const isSelected = isSameDay(day.date, selectedDate) && day.isCurrentMonth;
                            return (
                              <button
                                key={idx}
                                onClick={() => day.isCurrentMonth && handleDateSelect(day.date)}
                                className={`w-9 h-9 flex items-center justify-center rounded text-sm font-medium transition ${
                                  isSelected
                                    ? 'bg-brand-accent text-white'
                                    : day.isCurrentMonth
                                    ? 'hover:bg-gray-200 text-gray-900'
                                    : 'text-gray-300'
                                } ${!day.isCurrentMonth ? 'cursor-default' : 'cursor-pointer'}`}
                                disabled={!day.isCurrentMonth}
                              >
                                {day.date.getDate()}
                              </button>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
               {/* list event */}
                <div className="flex flex-col items-center justify-center bg-brand-light rounded-lg overflow-y-auto">
                  {eventsOnSelectedDate.length > 0 ? (
                    <div className="w-full p-4 space-y-3">
                      {eventsOnSelectedDate.map((event) => (
                        <div
                          key={event.id}
                          className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition flex"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3 flex-1 flex flex-col justify-between">
                            <div>
                              <h5 className="font-semibold text-sm text-brand-primary line-clamp-1">
                                {event.name}
                              </h5>
                              <p className="text-xs text-gray-600 mt-1">{event.dates}</p>
                            </div>
                            <p className="text-xs text-gray-500 font-medium">⏰ {event.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 p-8 text-center w-full">
                      Tidak ada event pada tanggal ini
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
            Event Terbaru
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3 gap-2">
                      <h4 className="font-sans font-semibold text-brand-primary line-clamp-2 flex-1">
                        {event.name}
                      </h4>
                      <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-xs text-white flex-shrink-0 ${
                        event.type === 0 ? "bg-brand-accent" : "bg-brand-gray"
                      }`}>
                        {event.type_desc === "INTERNAL" ? "Internal" : "Eksternal"}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {event.dates}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      ⏰ {event.time}
                    </p>
                    <p className="text-sm mb-4 line-clamp-3 flex-grow">
                      {event.desc}
                    </p>
                  
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-brand-primary text-white rounded text-sm font-medium hover:bg-opacity-90">
                      Detail Event
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">Tidak ada event terbaru</p>
              </div>
            )}
          </div>
          <div className="text-center mt-8">
            <a href="/kegiatan/all">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background h-10 px-6 py-2 border border-brandPrimary text-brand-primary rounded font-medium hover:bg-brand-primary hover:text-white">
                Lihat Semua Event
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
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
