import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "@/lib/constants/api";

// Create axios instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Types
export interface SliderItem {
  id: string;
  image: string;
  name: string;
  url: string;
  voucher: string | null;
}

export interface Article {
  id: string;
  name: string;
  category: string;
  chapter: string;
  shortdesc: string | null;
  type: string;
  islink: boolean;
  link: string | null;
  title: string;
  text: string;
  date: string;
  lang: string;
  created: string;
  image?: string;
  description?: string;
}

export interface Chapter {
  id: string;
  code: string;
  name: string;
  desc: string;
  instagram: string;
  image: string;
  bank1: string;
  bank2: string;
  bank3: string;
  city: string;
  email: string;
  phone: string;
  address: string;
  regist_fee: number;
  monthly_fee: number;
  discount: number;
  chief: string;
  vice: string;
  treasurer: string;
  billing_contact: string;
}

export interface SliderResponse {
  content: {
    record: number;
    result: SliderItem[];
  };
}

export interface ArticleResponse {
  content: {
    record: number;
    result: Article[];
  };
}

export interface ChapterResponse {
  content: Chapter;
}

export interface ArticleIndexPayload {
  chapter: number;
  category: number;
  limit: number;
  offset: number;
  orderby: string;
  order: string;
}

// API Functions
export const fetchSliderWebsite = async (
  limit: string = "10",
  offset: string = "0"
): Promise<SliderResponse> => {
  const response = await apiClient.post<SliderResponse>(
    API_ENDPOINTS.SLIDER_WEBSITE,
    {
      limit,
      offset,
    }
  );
  return response.data;
};

export const fetchArticleIndexWebsite = async (
  payload: ArticleIndexPayload
): Promise<ArticleResponse> => {
  const response = await apiClient.post<ArticleResponse>(
    API_ENDPOINTS.ARTICLE_INDEX_WEBSITE,
    payload
  );
  return response.data;
};

export const fetchChapterById = async (
  chapterId: number
): Promise<ChapterResponse> => {
  const response = await apiClient.get<ChapterResponse>(
    `${API_ENDPOINTS.CHAPTER_GET_BY_ID}/${chapterId}`
  );
  return response.data;
};
