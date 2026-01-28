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

  // Get current month and year for display
  const currentMonthYear = selectedDate.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-sans font-bold text-mercedes-blue">
            Event
          </h1>
          <div className="w-24 h-1 bg-mercedes-gold mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai event yang diselenggarakan oleh W202 Club of Indonesia.
          </p>
        </div>
        <div className="mb-16">
          <h3 className="font-sans font-semibold text-2xl text-mercedes-blue mb-6">
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
                      <h4 className="font-sans font-semibold text-lg text-mercedes-blue line-clamp-2">
                        {event.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">{event.dates}</p>
                      <p className="text-sm mb-4 line-clamp-2">
                        {event.desc}
                      </p>
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
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
            <h3 className="font-sans font-semibold text-2xl text-mercedes-blue">
              Kalender Event
            </h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => setSelectedType("")}
                className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                  selectedType === ""
                    ? "bg-mercedes-blue text-white"
                    : "bg-mercedes-light-gray text-mercedes-blue hover:bg-mercedes-gold hover:text-white"
                }`}>
                Semua
              </button>
              <button 
                onClick={() => setSelectedType(0)}
                className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                  selectedType === 0
                    ? "bg-mercedes-blue text-white"
                    : "bg-mercedes-light-gray text-mercedes-blue hover:bg-mercedes-gold hover:text-white"
                }`}>
                Internal
              </button>
              <button 
                onClick={() => setSelectedType(1)}
                className={`px-4 py-2 rounded text-sm font-medium transition duration-300 ${
                  selectedType === 1
                    ? "bg-mercedes-blue text-white"
                    : "bg-mercedes-light-gray text-mercedes-blue hover:bg-mercedes-gold hover:text-white"
                }`}>
                External
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-semibold text-lg text-mercedes-blue mb-4">
                  Kalender Event
                </h4>
                <div className="rdp p-3 rounded-md border">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                    <div className="space-y-4 rdp-caption_start rdp-caption_end">
                      <div className="flex justify-center pt-1 relative items-center">
                        <div
                          className="text-sm font-medium"
                          aria-live="polite"
                          role="presentation"
                          id="react-day-picker-1"
                        >
                          {currentMonthYear}
                        </div>
                        <div className="space-x-1 flex items-center">
                          <button
                            onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
                            name="previous-month"
                            aria-label="Go to previous month"
                            className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
                            type="button"
                          >
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
                              className="lucide lucide-chevron-left h-4 w-4 rdp-nav_icon"
                            >
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </button>
                          <button
                            onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
                            name="next-month"
                            aria-label="Go to next month"
                            className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-chevron-right h-4 w-4 rdp-nav_icon"
                            >
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <table
                        className="w-full border-collapse space-y-1"
                        role="grid"
                        aria-labelledby="react-day-picker-1"
                      >
                        <thead className="rdp-head">
                          <tr className="flex">
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Sunday"
                            >
                              Su
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Monday"
                            >
                              Mo
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Tuesday"
                            >
                              Tu
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Wednesday"
                            >
                              We
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Thursday"
                            >
                              Th
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Friday"
                            >
                              Fr
                            </th>
                            <th
                              scope="col"
                              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                              aria-label="Saturday"
                            >
                              Sa
                            </th>
                          </tr>
                        </thead>
                        <tbody className="rdp-tbody">
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                28
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                29
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                30
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                31
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                1
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                2
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                3
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                4
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                5
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                6
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                7
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                8
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                9
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                10
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                11
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                12
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                13
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                14
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                15
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                16
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                17
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                18
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                19
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                20
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                21
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                22
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                23
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                24
                              </button>
                            </td>
                          </tr>
                          <tr className="flex w-full mt-2">
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                25
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                26
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground bg-accent text-accent-foreground"
                                role="gridcell"
                                aria-selected="true"
                                tabIndex={0}
                                type="button"
                              >
                                27
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                28
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                29
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                30
                              </button>
                            </td>
                            <td
                              className="h-9 w-9 text-center text-sm p-0 relative [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                              role="presentation"
                            >
                              <button
                                name="day"
                                className="rdp-button_reset rdp-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                                role="gridcell"
                                tabIndex={-1}
                                type="button"
                              >
                                31
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-lg text-mercedes-blue mb-4">
                  Event pada {selectedDate.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </h4>
                <div className="flex flex-col items-center justify-center h-64 bg-mercedes-light-gray rounded-lg overflow-y-auto">
                  {eventsOnSelectedDate.length > 0 ? (
                    <div className="w-full p-4">
                      {eventsOnSelectedDate.map((event) => (
                        <div
                          key={event.id}
                          className="bg-white rounded-lg p-3 mb-3 last:mb-0 cursor-pointer hover:shadow-md transition"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <h5 className="font-semibold text-sm text-mercedes-blue mb-1 line-clamp-1">
                            {event.name}
                          </h5>
                          <p className="text-xs text-gray-600 mb-1">{event.dates}</p>
                          <div className="flex justify-between items-center gap-2">
                            <span className={`text-xs px-2 py-1 rounded ${
                              event.type === 0
                                ? "bg-mercedes-gold text-white"
                                : "bg-mercedes-silver text-white"
                            }`}>
                              {event.type_desc}
                            </span>
                            {/* {event.fee > 0 && (
                              <span className="text-xs text-gray-700">
                                {formatCurrency(event.fee)}
                              </span>
                            )} */}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      Tidak ada event pada tanggal ini
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="font-sans font-semibold text-2xl text-mercedes-blue mb-6">
            Event Terbaru
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    <div className="cursor-pointer w-full h-full">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-sans font-semibold text-mercedes-blue line-clamp-2">
                        {event.name}
                      </h4>
                      <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-xs text-white ${
                        event.type === 0 ? "bg-mercedes-gold" : "bg-mercedes-silver"
                      }`}>
                        {event.type_desc === "INTERNAL" ? "Internal" : "Eksternal"}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {event.dates}
                    </p>
                    <p className="text-sm mb-4 line-clamp-3">
                      {event.desc}
                    </p>
                    {/* <div className="flex flex-wrap gap-2 mb-3">
                      {event.fee > 0 && (
                        <div className="inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs bg-mercedes-light-gray px-2 py-1 rounded text-mercedes-blue">
                          {formatCurrency(event.fee)}
                        </div>
                      )}
                    </div> */}
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-mercedes-blue text-white rounded text-sm font-medium hover:bg-opacity-90">
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
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background h-10 px-6 py-2 border border-mercedes-blue text-mercedes-blue rounded font-medium hover:bg-mercedes-blue hover:text-white">
                Lihat Semua Event
              </button>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-sans font-semibold text-2xl text-mercedes-blue mb-6">
            Tentang Event Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans font-semibold text-lg text-mercedes-blue mb-4">
                Event Internal
              </h4>
              <p className="text-gray-600 mb-4">
                W202 Club Indonesia secara rutin mengadakan berbagai event
                internal yang eksklusif untuk anggota, seperti:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Kopdar Bulanan</span>
                    <p className="text-sm text-gray-600">
                      Pertemuan rutin anggota untuk silaturahmi dan berbagi
                      pengalaman
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Touring</span>
                    <p className="text-sm text-gray-600">
                      Perjalanan bersama ke berbagai destinasi menarik di
                      Indonesia
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Workshop Teknis</span>
                    <p className="text-sm text-gray-600">
                      Sesi edukasi tentang perawatan dan perbaikan Mercedes-Benz
                      W202
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
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
              <h4 className="font-sans font-semibold text-lg text-mercedes-blue mb-4">
                Event Eksternal
              </h4>
              <p className="text-gray-600 mb-4">
                Selain event internal, W202 Club Indonesia juga aktif
                berpartisipasi dalam berbagai event otomotif, seperti:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Pameran Otomotif</span>
                    <p className="text-sm text-gray-600">
                      Partisipasi dalam IIMS, GIIAS, dan pameran otomotif
                      lainnya
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Car Show</span>
                    <p className="text-sm text-gray-600">
                      Ikut serta dalam berbagai pameran mobil klasik di
                      Indonesia
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
                  <div>
                    <span className="font-medium">Gathering Komunitas</span>
                    <p className="text-sm text-gray-600">
                      Berpartisipasi dalam acara gabungan antar komunitas
                      otomotif
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-mercedes-gold mr-2">•</span>
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
    </section>
  );
}
