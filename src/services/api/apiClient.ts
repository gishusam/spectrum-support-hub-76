
import { API_CONFIG, AUTH_STORAGE_KEYS } from '../../config/api.config';

/**
 * Interface for API response
 */
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  message?: string;
  statusCode?: number;
}

/**
 * API Client for handling requests to the backend
 */
class ApiClient {
  private baseUrl: string;
  
  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  /**
   * Get authentication headers
   */
  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  }

  /**
   * Handle API error responses
   */
  private async handleError(response: Response): Promise<ApiResponse> {
    let errorData: any = {};
    
    try {
      errorData = await response.json();
    } catch (e) {
      errorData = { message: 'Unknown error occurred' };
    }

    // Handle 401 Unauthorized - attempt to refresh token
    if (response.status === 401) {
      const refreshed = await this.refreshToken();
      if (refreshed) {
        // Retry the original request with new token
        return { error: 'auth/retry', statusCode: 401 };
      } else {
        // Logout user if refresh fails
        this.logout();
        return { error: 'auth/session-expired', message: 'Your session has expired. Please login again.', statusCode: 401 };
      }
    }

    return {
      error: errorData.error || `error/${response.status}`,
      message: errorData.message || 'An error occurred',
      statusCode: response.status,
    };
  }

  /**
   * Make an API request
   */
  public async request<T = any>(
    endpoint: string, 
    method: string = 'GET', 
    body?: any, 
    customHeaders?: HeadersInit
  ): Promise<ApiResponse<T>> {
    try {
      const headers = {
        ...this.getAuthHeaders(),
        ...(customHeaders || {}),
      };

      const config: RequestInit = {
        method,
        headers,
        credentials: 'include',
        ...(body ? { body: JSON.stringify(body) } : {}),
      };

      const response = await fetch(`${this.baseUrl}${endpoint}`, config);

      if (!response.ok) {
        return this.handleError(response);
      }

      // Handle empty responses (like 204 No Content)
      if (response.status === 204) {
        return { statusCode: 204 };
      }

      const data = await response.json();
      return { data, statusCode: response.status };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        error: 'error/network',
        message: 'Network error. Please check your connection.',
      };
    }
  }

  /**
   * GET request helper
   */
  public async get<T = any>(endpoint: string, customHeaders?: HeadersInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'GET', undefined, customHeaders);
  }

  /**
   * POST request helper
   */
  public async post<T = any>(endpoint: string, data?: any, customHeaders?: HeadersInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'POST', data, customHeaders);
  }

  /**
   * PUT request helper
   */
  public async put<T = any>(endpoint: string, data?: any, customHeaders?: HeadersInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'PUT', data, customHeaders);
  }

  /**
   * PATCH request helper
   */
  public async patch<T = any>(endpoint: string, data?: any, customHeaders?: HeadersInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'PATCH', data, customHeaders);
  }

  /**
   * DELETE request helper
   */
  public async delete<T = any>(endpoint: string, customHeaders?: HeadersInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, 'DELETE', undefined, customHeaders);
  }

  /**
   * Login user and store tokens
   */
  public async login(email: string, password: string): Promise<ApiResponse> {
    const response = await this.post(API_CONFIG.ENDPOINTS.AUTH.LOGIN, { email, password });
    
    if (response.data) {
      localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, response.data.access_token);
      localStorage.setItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN, response.data.refresh_token);
      localStorage.setItem(AUTH_STORAGE_KEYS.USER_DATA, JSON.stringify(response.data.user));
    }
    
    return response;
  }

  /**
   * Register a new user
   */
  public async register(userData: any): Promise<ApiResponse> {
    return this.post(API_CONFIG.ENDPOINTS.AUTH.REGISTER, userData);
  }

  /**
   * Refresh auth token
   */
  public async refreshToken(): Promise<boolean> {
    const refreshToken = localStorage.getItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
    
    if (!refreshToken) {
      return false;
    }

    try {
      const response = await this.post(API_CONFIG.ENDPOINTS.AUTH.REFRESH, { refresh_token: refreshToken });
      
      if (response.data?.access_token) {
        localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, response.data.access_token);
        return true;
      }
      
      return false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Logout user and clear storage
   */
  public logout(): void {
    localStorage.removeItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(AUTH_STORAGE_KEYS.USER_DATA);
    
    // Make logout request to invalidate tokens on server
    this.post(API_CONFIG.ENDPOINTS.AUTH.LOGOUT).catch(e => console.error('Logout error:', e));
  }

  /**
   * Get current user data
   */
  public getCurrentUser(): any {
    const userData = localStorage.getItem(AUTH_STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  }

  /**
   * Check if user is authenticated
   */
  public isAuthenticated(): boolean {
    return !!localStorage.getItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
  }
}

// Export a singleton instance
export const apiClient = new ApiClient();
