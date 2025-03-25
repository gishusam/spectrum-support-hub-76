
/**
 * API Configuration for SpectrumConnect
 */
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      REFRESH: '/auth/refresh',
      LOGOUT: '/auth/logout',
      ME: '/auth/me',
    },
    THERAPISTS: {
      LIST: '/therapists',
      DETAILS: (id: string) => `/therapists/${id}`,
      SEARCH: '/therapists/search',
    },
    APPOINTMENTS: {
      LIST: '/appointments',
      CREATE: '/appointments',
      DETAILS: (id: string) => `/appointments/${id}`,
      CANCEL: (id: string) => `/appointments/${id}/cancel`,
    },
    RESOURCES: {
      LIST: '/resources',
      DETAILS: (id: string) => `/resources/${id}`,
      CATEGORIES: '/resources/categories',
    },
    COMMUNITY: {
      FORUMS: '/community/forums',
      DISCUSSIONS: '/community/discussions',
      POSTS: (forumId: string) => `/community/forums/${forumId}/posts`,
      POST_DETAILS: (postId: string) => `/community/posts/${postId}`,
      CREATE_POST: (forumId: string) => `/community/forums/${forumId}/posts`,
      EVENTS: '/community/events',
    },
  },
};

/**
 * Authentication storage keys
 */
export const AUTH_STORAGE_KEYS = {
  ACCESS_TOKEN: 'spectrum_access_token',
  REFRESH_TOKEN: 'spectrum_refresh_token',
  USER_DATA: 'spectrum_user_data',
};

