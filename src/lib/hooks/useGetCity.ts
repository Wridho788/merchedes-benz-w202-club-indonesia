import { useQuery } from "@tanstack/react-query";
import { fetchGetCity, CityResponse } from "@/lib/api/client";

export const useGetCity = (enabled = true) => {
  return useQuery<CityResponse, Error>({
    queryKey: ["cities"],
    queryFn: () => fetchGetCity(),
    enabled,
  });
};
