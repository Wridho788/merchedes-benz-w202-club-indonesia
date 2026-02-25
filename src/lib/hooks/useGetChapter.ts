import { useQuery } from "@tanstack/react-query";
import { fetchGetChapter } from "@/lib/api/client";

export const useGetChapter = () => {
  return useQuery({
    queryKey: ["chapters"],
    queryFn: () => fetchGetChapter(),
  });
};
