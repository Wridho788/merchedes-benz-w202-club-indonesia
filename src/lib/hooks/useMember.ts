import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMembers, MemberPayload } from "@/lib/api/client";

export const useMember = (payload: Omit<MemberPayload, "offset">) => {
  return useInfiniteQuery({
    queryKey: ["members", payload.chapter, payload.limit],
    queryFn: ({ pageParam = 0 }) =>
      fetchMembers({
        ...payload,
        offset: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.reduce(
        (sum, page) => sum + page.content.result.length,
        0
      );
      if (loadedCount < lastPage.content.record) {
        return loadedCount;
      }
      return undefined;
    },
  });
};
