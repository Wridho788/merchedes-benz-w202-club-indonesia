import { useQuery } from "@tanstack/react-query";
import {
  fetchPressConference,
  fetchMediaCoverage,
  ArticleIndexPayload,
} from "@/lib/api/client";

export const usePressConference = (payload: ArticleIndexPayload) => {
  return useQuery({
    queryKey: ["press-conference", payload],
    queryFn: () => fetchPressConference(payload),
  });
};

export const useMediaCoverage = (payload: ArticleIndexPayload) => {
  return useQuery({
    queryKey: ["media-coverage", payload],
    queryFn: () => fetchMediaCoverage(payload),
  });
};
