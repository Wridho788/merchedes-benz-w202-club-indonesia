import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "@/lib/constants/api";

// Create axios instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// API Functions
export const fetchSliderWebsite = async (
  limit: string = "10",
  offset: string = "0",
): Promise<SliderResponse> => {
  const response = await apiClient.post<SliderResponse>(
    API_ENDPOINTS.SLIDER_WEBSITE,
    {
      limit,
      offset,
    },
  );
  return response.data;
};

export const fetchArticleIndexWebsite = async (
  payload: ArticleIndexPayload,
): Promise<ArticleResponse> => {
  const response = await apiClient.post<ArticleResponse>(
    API_ENDPOINTS.ARTICLE_INDEX_WEBSITE,
    payload,
  );
  return response.data;
};

export const fetchChapterById = async (
  chapterId: number,
): Promise<ChapterResponse> => {
  const response = await apiClient.get<ChapterResponse>(
    `${API_ENDPOINTS.CHAPTER_GET_BY_ID}/${chapterId}`,
  );
  return response.data;
};

export const fetchMembers = async (
  payload: MemberPayload,
): Promise<MemberResponse> => {
  const response = await apiClient.post<MemberResponse>(
    API_ENDPOINTS.MEMBER,
    payload,
  );
  return response.data;
};


// Event API Functions
export const fetchEventIndexWebsite = async (
  payload: EventIndexPayload,
): Promise<EventIndexResponse> => {
  const response = await apiClient.post<EventIndexResponse>(
    API_ENDPOINTS.EVENT_INDEX_WEBSITE,
    payload,
  );
  return response.data;
};

export const fetchEventById = async (
  eventId: string,
): Promise<EventDetailResponse> => {
  const response = await apiClient.get<EventDetailResponse>(
    `${API_ENDPOINTS.EVENT_GET_BY_ID}/${eventId}`,
  );
  return response.data;
};

export const fetchPartner = async (
  payload: PartnerPayload,
): Promise<PartnerResponse> => {
  const response = await apiClient.post<PartnerResponse>(
    API_ENDPOINTS.PARTNER,
    payload,
  );
  return response.data;
};

export const fetchPartnerSponsorship = async (
  payload: PartnerPayload,
): Promise<PartnerResponse> => {
  const response = await apiClient.post<PartnerResponse>(
    API_ENDPOINTS.SPONSORSHIP,
    payload,
  );
  return response.data;
};

export const fetchPartnerById = async (
  partnerId: string,
): Promise<PartnerDetailResponse> => {
  const response = await apiClient.get<PartnerDetailResponse>(
    `${API_ENDPOINTS.PARTNER_GET_BY_ID}/${partnerId}`,
  );
  return response.data;
};

export const fetchPartnerCities = async (): Promise<PartnerCityResponse> => {
  const response = await apiClient.get<PartnerCityResponse>(
    API_ENDPOINTS.PARTNER_CITY,
  );
  return response.data;
};

export const fetchPartnerCategories = async (): Promise<PartnerCategoryResponse> => {
  const response = await apiClient.get<PartnerCategoryResponse>(
    API_ENDPOINTS.PARTNER_CATEGORY,
  );
  return response.data;
};

export const fetchPressConference = async (
  payload: ArticleIndexPayload,
): Promise<PressRelaseResponse> => {
  const response = await apiClient.post<PressRelaseResponse>(
    API_ENDPOINTS.ARTICLE_INDEX_WEBSITE,
    payload,
  );
  return response.data;
};

export const fetchMediaCoverage = async (
  payload: ArticleIndexPayload,
): Promise<PressRelaseResponse> => {
  const response = await apiClient.post<PressRelaseResponse>(
    API_ENDPOINTS.ARTICLE_INDEX_WEBSITE,
    payload,
  );
  return response.data;
};

export const fetchMediaCoverageById = async (
  articleId: string,
): Promise<ArticleResponse> => { 
  const response = await apiClient.get<ArticleResponse>(
    `${API_ENDPOINTS.ARTICLE_INDEX_WEBSITE}/${articleId}`,
  );
  return response.data;
};
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
  vice2?: string;
  treasurer: string;
  treasure2?: string;
  billing_contact: string;
  humas_pic?: string;
  creative_pic?: string;
  legal_pic?: string;
  it_pic?: string;
  socialmedia_pic?: string;
  sponshorship_pic?: string;
  members: number;
  child?: ChapterChild[];
}

export interface ChapterChild {
  id: string;
  code: string;
  name: string;
  desc: string;
  instagram: string;
  image: string;
  city: string;
  email: string;
  phone: string;
  address: string;
  chief: string;
  vice: string;
  treasurer: string;
  billing_contact: string;
  order: string;
  type: string;
  members: number;
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
  content: {
    result: Chapter;
    child?: ChapterChild[];
  };
}

export interface ArticleIndexPayload {
  chapter: number;
  category: number;
  limit: number;
  offset: number;
  orderby: string;
  order: string;
}

export interface Member {
  code: string;
  chapter: string;
  name: string;
  joined: string;
  vehicle: string;
  image: string | null;
  featured: string;
}

export interface MemberResponse {
  content: {
    record: number;
    result: Member[];
  };
}

export interface MemberPayload {
  chapter: string | number;
  limit: number;
  offset: number;
}

export interface EventItem {
  id: string;
  chapter_id: string;
  chapter: string;
  code: string;
  name: string;
  dates: string;
  time: string;
  desc: string;
  image: string;
  fee: number;
  minimum_participants: string;
  type: number;
  type_desc: string;
  done: number;
  done_desc: string;
}

export interface EventDetail extends EventItem {
  point: string;
  merchant_cost: number;
  cost1: number;
  cost2: number;
  allow_merchant: number;
  allow_public: number;
}

export interface EventIndexPayload {
  chapter: string;
  status: string;
  type: string;
  date: string;
  limit: number;
  offset: number;
}

export interface EventIndexResponse {
  content: {
    record: number;
    result: EventItem[];
  };
}

export interface EventDetailResponse {
  content: EventDetail;
}

export interface PartnerPayload {
  limit: number;
  offset: number;
  category: string;
  city: string;
}

export interface PartnerResponse {
  content: {
    image_url: string;
    record: number;
    result: PartnerItem[];
  };
}

export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  cp: string;
  npwp: string;
  address: string;
  city_name: string;
  phone1: string;
  phone2: string;
  email: string;
  website: string;
  coordinate: string;
  zip: string;
  notes: string;
  image: string | null;
  created: string;
  updated: string | null;
  deleted: null;
}

export interface PartnerDetail {
  limit: number;
  offset: number;
}

export interface PartnerDetailResponse {
  content: {
    image_url: string;
    result: PartnerItem;
  }
}

export interface PartnerCityResponse {
  content: {
    record: number;
    result: PartnerCityname[];
  }
}

export interface PartnerCategoryResponse {
  content: {
    record: number;
    result: PartnerCategory[];
  }
}

export interface PartnerCityname {
  city_name: string;
}

export interface PartnerCategory {
  category: string;
}


export interface PressRelaseResponse {
  content: {
    record: number;
    result: PressRelase[];
  }
}

export interface PressRelase {
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
  publish?: string;
  front: string;
  permalink: string;
}