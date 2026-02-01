"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { useEventIndexWebsite } from "@/lib/hooks/useEvent";

import { CATEGORIES, CHAPTER_ID } from "@/lib/constants/api";
import { useArticleIndexWebsite } from "@/lib/hooks/useArticleIndexWebsite";
import UpcomingEvents from "@/components/sections/UpcomingEvents";

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
  const [showAllLatestEvents, setShowAllLatestEvents] = useState(false);

  const calendarRef = useRef<HTMLDivElement | null>(null);
  const datePickerRef = useRef<any>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerValue, setDatePickerValue] = useState<string>("");

  // Dynamically load Vaadin date picker on client only to avoid server-side errors
  useEffect(() => {
    if (typeof window === "undefined") return;
    import("@vaadin/date-picker").catch(() => {});
  }, []);

  const openCalendar = () => {
    setShowDatePicker(true);
  };

  // When picker opens, prefill with today's date, lock scroll, and focus picker
  useEffect(() => {
    if (showDatePicker) {
      // prefill today's date (date format YYYY-MM-DD) once picker is available
      const todayStr = new Date().toISOString().slice(0, 10);
      if (datePickerRef.current) {
        datePickerRef.current.value = todayStr;
        setDatePickerValue(todayStr);
        try { datePickerRef.current.focus(); } catch (e) {}
      }
      // lock background scroll
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const t = setInterval(() => {
        // if picker becomes available, ensure value and focus
        if (datePickerRef.current) {
          datePickerRef.current.value = todayStr;
          setDatePickerValue(todayStr);
          try { datePickerRef.current.focus(); } catch (e) {}
          clearInterval(t);
        }
      }, 50);
      return () => {
        clearInterval(t);
        document.body.style.overflow = prevOverflow || "";
      };
    }
  }, [showDatePicker]);

  // Listen to value changes on the vaadin date picker and store temporarily; apply only on OK
  useEffect(() => {
    if (!datePickerRef.current) return;
    const el = datePickerRef.current;
    const handler = (e: any) => {
      const val = e.detail?.value ?? el.value;
      const dateVal = String(val || "");
      // update temporary picker value (do not auto-apply)
      setDatePickerValue(dateVal);
    };
    el.addEventListener("value-changed", handler);
    return () => el.removeEventListener("value-changed", handler);
  }, [datePickerRef.current]);

  // When user clicks any day cell in the calendar, immediately filter by that date
  useEffect(() => {
    const container = calendarRef.current;
    if (!container) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('button[name="day"]') as HTMLButtonElement | null;
      if (!btn) return;
      const text = btn.textContent?.trim();
      if (!text) return;
      const dayNum = parseInt(text, 10);
      if (isNaN(dayNum)) return;
      const isOutside = btn.classList.contains('day-outside');
      let year = selectedDate.getFullYear();
      let month = selectedDate.getMonth();
      if (isOutside) {
        // heuristic: days > 15 belong to previous month, otherwise next month
        if (dayNum > 15) {
          month = month - 1;
          if (month < 0) { month = 11; year -= 1; }
        } else {
          month = month + 1;
          if (month > 11) { month = 0; year += 1; }
        }
      }
      const newDate = new Date(year, month, dayNum);
      handleDateSelect(newDate);
    };
    container.addEventListener('click', handler);
    return () => container.removeEventListener('click', handler);
  }, [selectedDate]);

  // Update calendar UI to highlight selected day (adds classes to matching day button)
  useEffect(() => {
    const container = calendarRef.current;
    if (!container) return;
    const buttons = Array.from(container.querySelectorAll('button[name="day"]')) as HTMLButtonElement[];
    buttons.forEach((btn) => {
      const text = btn.textContent?.trim();
      if (!text) return;
      const dayNum = parseInt(text, 10);
      if (isNaN(dayNum)) return;
      const isOutside = btn.classList.contains('day-outside');
      let year = selectedDate.getFullYear();
      let month = selectedDate.getMonth();
      if (isOutside) {
        if (dayNum > 15) {
          month = month - 1;
          if (month < 0) { month = 11; year -= 1; }
        } else {
          month = month + 1;
          if (month > 11) { month = 0; year += 1; }
        }
      }
      const btnDate = new Date(year, month, dayNum);
      if (isSameDay(btnDate, selectedDate)) {
        btn.classList.add("bg-brand-primary", "text-white", "rounded-full");
        btn.setAttribute("aria-selected", "true");
      } else {
        btn.classList.remove("bg-brand-primary", "text-white", "rounded-full");
        btn.removeAttribute("aria-selected");
      }
    });
  }, [selectedDate]);

  // Format selected date for API
  const formattedDate = selectedDate.toLocaleDateString("en-CA"); // Format: YYYY-MM-DD
  
  // Fetch events from API
  const { data, isLoading, error } = useEventIndexWebsite({
    chapter: String(CHAPTER_ID),
    status: "",
    type: selectedType === "" ? "" : String(selectedType),
    date: hasDateFilter ? formattedDate : "",
    limit: 20,
    offset: 0,
  });

   const { data: articleData, isLoading: isArticleLoading, error: articleError } = useArticleIndexWebsite({
      chapter: CHAPTER_ID,
      category: CATEGORIES.CLUB_EVENT,
      limit: 10,
      offset: 0,
      orderby: "",
      order: "asc",
    });

  // Map API data for calendar section
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

  // Map API data for Event Terbaru section (from article API like HomeEvent)
  const latestEvents: Event[] =
    articleData?.content?.result?.map((item) => {
      const imageUrl = item.image ?? "";
      const hasValidImage =
        imageUrl && !imageUrl.endsWith("/") && imageUrl.includes(".");

      return {
        id: item.id,
        name: item.title || item.name,
        dates: item.date || "",
        time: "",
        desc: item.shortdesc || item.text?.replace(/<[^>]*>/g, "").replace(/[\n\t]/g, " ").trim() || "",
        image: hasValidImage ? imageUrl : "/Pic-2.jpg",
        fee: 0,
        type: 0,
        type_desc: "INTERNAL",
        done: 1,
        done_desc: "Selesai",
        code: item.id,
        chapter: undefined,
        minimum_participants: undefined,
      };
    }) || [];

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

  // Compute upcoming events here (next month and not done) and pass to UpcomingEvents so it doesn't refetch.
  const upcomingEventsInParent = useMemo(() => {
    return events.filter((event) => {
      const eventDate = parseEventDate(event.dates);
      const isUpcoming = isInNextMonth(eventDate) && event.done === 0;
      const typeMatches = selectedType === "" ? true : event.type === selectedType;
      return isUpcoming && typeMatches;
    });
  }, [events, selectedType]);

  // Filter past events (done) - using latestEvents from article API
  const pastEvents = useMemo(() => {
    return latestEvents;
  }, [latestEvents]);

  // Display events with pagination (10 per page)
  const displayedLatestEvents = useMemo(() => {
    return showAllLatestEvents ? pastEvents : pastEvents.slice(0, 10);
  }, [pastEvents, showAllLatestEvents]);

  // Filter events for selected date in calendar
  const eventsOnSelectedDate = useMemo(() => {
    return events.filter((event) => {
      // Filter by type
      const typeMatches =
        selectedType === "" ? true : event.type === selectedType;
      
      // If date filter is not active, show all events matching type filter
      if (!hasDateFilter) {
        return typeMatches;
      }
      
      // If date filter is active, also match the selected date
      const eventDate = parseEventDate(event.dates);
      const dateMatches = isSameDay(eventDate, selectedDate);
      
      return dateMatches && typeMatches;
    });
  }, [events, selectedDate, selectedType, hasDateFilter]);

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

  // Change month preserving day (clamped to end of month)
  const changeMonth = (date: Date, delta: number) => {
    const year = date.getFullYear();
    const monthTarget = date.getMonth() + delta;
    const day = date.getDate();
    const lastDay = new Date(year, monthTarget + 1, 0).getDate();
    return new Date(year, monthTarget, Math.min(day, lastDay));
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
          <UpcomingEvents
            selectedType={selectedType}
            onSelectEvent={setSelectedEvent}
            events={upcomingEventsInParent}
            isLoading={isLoading}
            error={error}
          />
        </div> 
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16 relative">
          <div className="grid grid-cols-2 items-center mb-6">
            <h3 className="font-sans font-semibold text-2xl text-brand-primary">
              Kalender Event
            </h3>
            <div className="flex justify-end">
              <button
                onClick={openCalendar}
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-brand-light text-brand-primary hover:bg-brand-accent hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Buka Kalender</span>
              </button>
            </div>
          </div>

          {showDatePicker && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
              role="dialog"
              aria-modal="true"
              aria-label="Pilih tanggal"
              onKeyDown={(e) => {
                if (e.key === "Escape") setShowDatePicker(false);
              }}
              onClick={() => setShowDatePicker(false)}
            >
              <div className="bg-white p-4 rounded shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <div ref={(el) => {
                  if (!el) return;
                  const anyEl: any = el;
                  if (!anyEl._picker) {
                    const p = document.createElement("vaadin-date-picker");
                    p.style.width = "100%";
                    anyEl.appendChild(p);
                    anyEl._picker = p;
                  }
                  datePickerRef.current = anyEl._picker;
                }} />
                <div className="mt-3 flex justify-between items-center">
                  <div className="text-sm text-gray-600">Pilih tanggal</div>
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        const val = (datePickerRef.current && (datePickerRef.current.value || datePickerValue)) || datePickerValue;
                        if (val) {
                          setSelectedDate(new Date(String(val)));
                          setHasDateFilter(true);
                          calendarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                        setShowDatePicker(false);
                      }}
                      className="text-sm px-3 py-1 rounded bg-brand-primary text-white hover:bg-brand-primary/90 mr-2"
                      aria-label="OK pilih tanggal"
                    >
                      OK
                    </button>
                    <button
                      onClick={() => setShowDatePicker(false)}
                      className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                      aria-label="Batal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex space-x-2 mb-4">
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
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans font-semibold text-lg text-brand-primary mb-4">
                  Kalender Event
                </h4>
                <div className="rdp p-3 rounded-md border" ref={calendarRef}>
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
                            onClick={() => handleDateSelect(changeMonth(selectedDate, -1))}
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
                            onClick={() => handleDateSelect(changeMonth(selectedDate, 1))}
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
               {/* list event */}
                <div className="flex flex-col items-center justify-center bg-brand-light rounded-lg overflow-y-auto min-h-96">
                  {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mb-4"></div>
                        <p className="text-gray-600">Loading event...</p>
                      </div>
                    </div>
                  ) : error ? (
                    <div className="w-full p-8 text-center">
                      <p className="text-red-500 font-medium mb-2">Gagal memuat event</p>
                      <p className="text-sm text-red-400">Silakan coba lagi atau pilih tanggal lain</p>
                    </div>
                  ) : eventsOnSelectedDate.length > 0 ? (
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
                              {event.code && (
                                <p className="text-xs text-gray-500 mt-1">Code: {event.code}</p>
                              )}
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
            {displayedLatestEvents.length > 0 ? (
              displayedLatestEvents.map((event) => (
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
          {pastEvents.length > 10 && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowAllLatestEvents(!showAllLatestEvents)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background h-10 px-6 py-2 border border-brandPrimary text-brand-primary rounded font-medium hover:bg-brand-primary hover:text-white">
                {showAllLatestEvents ? "Sembunyikan" : "Lihat Semua Event"}
              </button>
            </div>
          )}
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
