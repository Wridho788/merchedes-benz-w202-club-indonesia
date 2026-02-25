import { useQuery } from "@tanstack/react-query";
import { fetchGetChapter, payloadChapter, responseChapter } from "@/lib/api/client";

export const useGetChapter = (payload: payloadChapter, enabled = true) => {
  return useQuery<responseChapter, Error>({
    queryKey: ["chapters", payload.limit, payload.offset],
    queryFn: () => fetchGetChapter(payload),
    enabled,
  });
};
