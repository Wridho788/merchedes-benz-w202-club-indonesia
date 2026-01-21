// API Base URL
export const API_BASE_URL = "/api/proxy";

// API Endpoints
export const API_ENDPOINTS = {
  SLIDER_WEBSITE: "/slider/index_website/13",
  ARTICLE_INDEX_WEBSITE: "/article/index_website",
  CHAPTER_GET_BY_ID: "/chapter/get_by_id",
  MEMBER: '/customer'
} as const;

// Chapter ID constant
export const CHAPTER_ID = 13;

// Category IDs
export const CATEGORIES = {
  HISTORY: 28,
  REGIONAL_ACTIVITY: 30,
  CLUB_EVENT: 24,
  PRESS_RELEASE: 29,
  FEATURED_MEMBER: 31,
} as const;
