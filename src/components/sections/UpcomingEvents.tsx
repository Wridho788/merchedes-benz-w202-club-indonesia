"use client";

import { useMemo } from "react";

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
  events?: Event[];
  isLoading?: boolean;
  error?: any;
};

export default function UpcomingEvents({ selectedType, onSelectEvent, events = [], isLoading = false, error }: Props) {
  // `events` are provided by parent to avoid duplicate fetching. Child just filters for "upcoming" (next month)


  const parseEventDate = (dateStr: string): Date => {
    return new Date(dateStr);
  };

  const isInNextMonth = (eventDate: Date): boolean => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return (
      eventDate.getMonth() === nextMonth.getMonth() &&
      eventDate.getFullYear() === nextMonth.getFullYear()
    );
  };

  const upcomingEvents = useMemo(() => {
    return events.filter((event) => {
      const eventDate = parseEventDate(event.dates);
      const isUpcoming = isInNextMonth(eventDate) && event.done === 0;

      return isUpcoming;
    });
  }, [events]);

  return (
    <div>
      <h3 className="font-sans font-semibold text-2xl text-brand-primary mb-6">
        Event Mendatang
      </h3>
      <div className="overflow-x-auto scroll-hidden pb-6">
        <div className="flex space-x-6 min-w-max">
          {isLoading ? (
            <div className="w-full text-center py-8">
              <p className="text-gray-500">Memuat event...</p>
            </div>
          ) : error ? (
            <div className="w-full text-center py-8">
              <p className="text-red-500">Gagal memuat event</p>
            </div>
          ) : upcomingEvents.length > 0 ? (
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
              <p className="text-gray-500">Tidak ada event mendatang</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
