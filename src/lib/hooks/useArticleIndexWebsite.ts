import { useQuery } from "@tanstack/react-query";
import { fetchArticleIndexWebsite, ArticleIndexPayload } from "@/lib/api/client";

export const useArticleIndexWebsite = (payload: ArticleIndexPayload) => {
  return useQuery({
    queryKey: ["article-index-website", payload],
    queryFn: () => fetchArticleIndexWebsite(payload),
  });
};
