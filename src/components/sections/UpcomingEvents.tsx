"use client";

import { useMemo, useState } from "react";
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

type Props = {
  selectedType: "" | 0 | 1;
  onSelectEvent: (event: Event) => void;
};

export default function UpcomingEvents({ selectedType, onSelectEvent }: Props) {
  // This component fetches its own events (type=0) and applies local filtering for "upcoming"

  // Keep track of which status is shown: "0" = mendatang, "1" = terlewat
  const [statusFilter, setStatusFilter] = useState<"0" | "1">("0");

  // Fetch both upcoming and past events so we can show counts and switch instantly
  const upcomingQuery = useEventIndexWebsite({
    chapter: String(CHAPTER_ID),
    status: "0",
    type: "",
    date: "",
    limit: 50,
    offset: 0,
  });

  const pastQuery = useEventIndexWebsite({
    chapter: String(CHAPTER_ID),
    status: "1",
    type: "",
    date: "",
    limit: 50,
    offset: 0,
  });

  const mapEvents = (data: any): Event[] =>
    data?.content?.result?.map((item: any) => ({
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

  const parseEventDate = (dateStr: string): Date => new Date(dateStr);

  const upcomingEvents = useMemo(() => {
    const events = mapEvents(upcomingQuery.data);
    return events
      .filter((event) => (selectedType === "" ? true : event.type === selectedType) && event.done === 0)
      .sort((a, b) => parseEventDate(a.dates).getTime() - parseEventDate(b.dates).getTime())
      .slice(0, 10);
  }, [upcomingQuery.data, selectedType]);

  const pastEvents = useMemo(() => {
    const events = mapEvents(pastQuery.data);
    return events
      .filter((event) => (selectedType === "" ? true : event.type === selectedType) && event.done === 1)
      .sort((a, b) => parseEventDate(b.dates).getTime() - parseEventDate(a.dates).getTime())
      .slice(0, 10);
  }, [pastQuery.data, selectedType]);

  const upcomingCount = upcomingQuery.data?.content?.record ?? upcomingEvents.length;
  const pastCount = pastQuery.data?.content?.record ?? pastEvents.length;

  const activeEvents = statusFilter === "0" ? upcomingEvents : pastEvents;
  const loading = statusFilter === "0" ? upcomingQuery.isLoading : pastQuery.isLoading;
  const error = statusFilter === "0" ? upcomingQuery.error : pastQuery.error;

  return (
    <div>
      <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-4">{statusFilter === "0" ? "Event Mendatang" : "Event Terlewat"}</h3>

      {/* Segmented control */}
      <div className="flex items-center justify-start gap-3 mb-3">
        <button
          onClick={() => setStatusFilter("0")}
          aria-pressed={statusFilter === "0"}
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            statusFilter === "0" ? "bg-brand-primary text-white shadow" : "bg-white border border-gray-200 text-gray-700"
          }`}
        >
          <span>Mendatang</span>
          <span className="ml-2 inline-flex items-center justify-center bg-white/10 text-xs rounded-full px-2 py-0.5">{upcomingCount}</span>
        </button>

        <button
          onClick={() => setStatusFilter("1")}
          aria-pressed={statusFilter === "1"}
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            statusFilter === "1" ? "bg-brand-primary text-white shadow" : "bg-white border border-gray-200 text-gray-700"
          }`}
        >
          <span>Terlewat</span>
          <span className="ml-2 inline-flex items-center justify-center bg-white/10 text-xs rounded-full px-2 py-0.5">{pastCount}</span>
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-6">{statusFilter === "0" ? "Menampilkan event mendatang." : "Menampilkan event yang sudah berlalu."}</p>
      <div className="overflow-x-auto scroll-hidden pb-6">
        <div className="flex space-x-6 min-w-max">
          {loading ? (
            <div className="w-full text-center py-8">
              <p className="text-gray-500">Memuat event...</p>
            </div>
          ) : error ? (
            <div className="w-full text-center py-8">
              <p className="text-red-500">Gagal memuat event</p>
            </div>
          ) : activeEvents.length > 0 ? (
            activeEvents.map((event) => (
              <div key={event.id} className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-sans font-semibold text-lg text-brand-primary line-clamp-2">{event.name}</h4>
                    {statusFilter === "1" && (
                      <span className="ml-2 text-xs text-gray-500">Terlewat</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{event.dates}</p>
                  <p className="text-sm mb-4 line-clamp-2">{event.desc}</p>
                  <button
                    onClick={() => onSelectEvent(event)}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-10 px-4 w-full py-2 bg-brand-primary text-white rounded text-sm font-medium hover:bg-opacity-90"
                  >
                    Detail Event
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-8">
              <p className="text-gray-500">Tidak ada event untuk kategori ini</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
