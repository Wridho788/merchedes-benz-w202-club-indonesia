import { useQuery } from "@tanstack/react-query";
import { fetchSliderWebsite } from "@/lib/api/client";

export const useSliderWebsite = (limit: string = "10", offset: string = "0") => {
  return useQuery({
    queryKey: ["slider-website", limit, offset],
    queryFn: () => fetchSliderWebsite(limit, offset),
  });
};
