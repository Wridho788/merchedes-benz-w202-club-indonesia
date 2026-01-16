import { useQuery } from "@tanstack/react-query";
import { fetchChapterById } from "@/lib/api/client";

export const useChapterById = (chapterId: number) => {
  return useQuery({
    queryKey: ["chapter", chapterId],
    queryFn: () => fetchChapterById(chapterId),
  });
};
