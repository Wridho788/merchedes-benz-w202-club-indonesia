// API Base URL
export const API_BASE_URL = "/api/proxy";

// API Endpoints
export const API_ENDPOINTS = {
  SLIDER_WEBSITE: "/slider/index_website/13",
  ARTICLE_INDEX_WEBSITE: "/article/index_website",
  CHAPTER_GET_BY_ID: "/chapter/get_by_id",
  MEMBER: '/customer',
  EVENT_INDEX_WEBSITE: '/event/index_website',
  EVENT_GET_BY_ID: '/event/get_by_id_website',
  PARTNER:'/partner',
  SPONSORSHIP: '/partner/sponsorship',
  PARTNER_GET_BY_ID: '/partner/get/',
  PARTNER_CITY: '/partner/city',
  PARTNER_CATEGORY: '/partner/category',
  GET_PERMALINK: 'article/get_by_permalink/',
  MEMBER_ADD: '/customer/add',
  REQ_OTP: '/customer/req_otp',
  VERIFY: '/customer/verify/',
  GET_CITY: '/city/get_city',
  GET_CHAPTER: '/chapter/get_by_id/13',
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
  MEDIA_COVERAGE: 32,
} as const;
