
import { useState, useCallback } from 'react';
import { useToast } from './use-toast';
import { ApiResponse } from '../services/api/apiClient';

export interface UseApiOptions {
  showErrorToast?: boolean;
  showSuccessToast?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

type ApiFunction<T, P> = (params: P) => Promise<ApiResponse<T>>;

/**
 * Custom hook for making API calls with handling for loading, errors, and success states
 */
export function useApi<T = any, P = any>(
  apiFunction: ApiFunction<T, P>,
  options: UseApiOptions = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const defaultOptions: UseApiOptions = {
    showErrorToast: true,
    showSuccessToast: false,
    ...options,
  };

  const execute = useCallback(
    async (params: P, customOptions?: UseApiOptions) => {
      const currentOptions = { ...defaultOptions, ...customOptions };
      setIsLoading(true);
      setError(null);

      try {
        const response = await apiFunction(params);

        if (response.error) {
          setError(response.message || response.error);
          if (currentOptions.showErrorToast) {
            toast({
              variant: "destructive",
              title: "Error",
              description: currentOptions.errorMessage || response.message || "An error occurred",
            });
          }
          setIsLoading(false);
          return { success: false, response };
        }

        setData(response.data || null);
        
        if (currentOptions.showSuccessToast && currentOptions.successMessage) {
          toast({
            title: "Success",
            description: currentOptions.successMessage,
          });
        }
        
        setIsLoading(false);
        return { success: true, response };
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
        setError(errorMessage);
        
        if (currentOptions.showErrorToast) {
          toast({
            variant: "destructive",
            title: "Error",
            description: currentOptions.errorMessage || errorMessage,
          });
        }
        
        setIsLoading(false);
        return { success: false, error: errorMessage };
      }
    },
    [apiFunction, defaultOptions, toast]
  );

  return {
    data,
    isLoading,
    error,
    execute,
  };
}
