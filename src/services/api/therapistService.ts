
import { apiClient, ApiResponse } from './apiClient';
import { API_CONFIG } from '../../config/api.config';

export interface Therapist {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
  location: string;
  available: boolean;
  bio?: string;
  education?: string[];
  experience?: string;
  languages?: string[];
  insuranceAccepted?: string[];
  sessionPrice?: number;
  sessionDuration?: number;
}

export interface TherapistSearchParams {
  specialty?: string;
  location?: string;
  rating?: number;
  available?: boolean;
  keyword?: string;
  page?: number;
  limit?: number;
}

/**
 * Service for therapist-related API calls
 */
export const therapistService = {
  /**
   * Get list of therapists with optional filtering
   */
  getTherapists: async (params?: TherapistSearchParams): Promise<ApiResponse<Therapist[]>> => {
    const queryParams = params 
      ? '?' + new URLSearchParams(
          Object.entries(params)
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [key, String(value)])
        ).toString()
      : '';
    
    return apiClient.get<Therapist[]>(`${API_CONFIG.ENDPOINTS.THERAPISTS.LIST}${queryParams}`);
  },

  /**
   * Get therapist details by ID
   */
  getTherapistById: async (id: string): Promise<ApiResponse<Therapist>> => {
    return apiClient.get<Therapist>(API_CONFIG.ENDPOINTS.THERAPISTS.DETAILS(id));
  },

  /**
   * Search therapists by keyword
   */
  searchTherapists: async (keyword: string): Promise<ApiResponse<Therapist[]>> => {
    return apiClient.get<Therapist[]>(`${API_CONFIG.ENDPOINTS.THERAPISTS.SEARCH}?q=${encodeURIComponent(keyword)}`);
  },
};
