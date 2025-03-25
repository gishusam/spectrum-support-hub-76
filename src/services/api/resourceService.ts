
import { apiClient, ApiResponse } from './apiClient';
import { API_CONFIG } from '../../config/api.config';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  readTime?: string;
  content?: string;
  tags?: string[];
  downloadable?: boolean;
  downloadUrl?: string;
  datePublished?: string;
  author?: string;
}

export interface ResourceCategory {
  id: string;
  name: string;
  description?: string;
  count?: number;
}

export interface ResourceSearchParams {
  category?: string;
  tags?: string[];
  keyword?: string;
  page?: number;
  limit?: number;
}

/**
 * Service for resource-related API calls
 */
export const resourceService = {
  /**
   * Get list of resources with optional filtering
   */
  getResources: async (params?: ResourceSearchParams): Promise<ApiResponse<Resource[]>> => {
    const queryParams = params 
      ? '?' + new URLSearchParams(
          Object.entries(params)
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [key, Array.isArray(value) ? value.join(',') : String(value)])
        ).toString()
      : '';
    
    return apiClient.get<Resource[]>(`${API_CONFIG.ENDPOINTS.RESOURCES.LIST}${queryParams}`);
  },

  /**
   * Get resource details by ID
   */
  getResourceById: async (id: string): Promise<ApiResponse<Resource>> => {
    return apiClient.get<Resource>(API_CONFIG.ENDPOINTS.RESOURCES.DETAILS(id));
  },

  /**
   * Get resource categories
   */
  getCategories: async (): Promise<ApiResponse<ResourceCategory[]>> => {
    return apiClient.get<ResourceCategory[]>(API_CONFIG.ENDPOINTS.RESOURCES.CATEGORIES);
  },
};
