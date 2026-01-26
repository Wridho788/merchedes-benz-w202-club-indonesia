import { useQuery } from "@tanstack/react-query";
import {
  fetchEventIndexWebsite,
  fetchEventById,
  EventIndexPayload,
} from "@/lib/api/client";

export const useEventIndexWebsite = (payload: EventIndexPayload) => {
  return useQuery({
    queryKey: ["event-index-website", payload],
    queryFn: () => fetchEventIndexWebsite(payload),
  });
};

export const useEventById = (eventId: string) => {
  return useQuery({
    queryKey: ["event-detail", eventId],
    queryFn: () => fetchEventById(eventId),
    enabled: !!eventId,
  });
};
