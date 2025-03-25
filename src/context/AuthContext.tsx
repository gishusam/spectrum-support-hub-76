
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from '../services/api/apiClient';
import { AUTH_STORAGE_KEYS } from '../config/api.config';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  register: async () => false,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      const userData = localStorage.getItem(AUTH_STORAGE_KEYS.USER_DATA);
      if (userData) {
        try {
          setUser(JSON.parse(userData));
          // Verify token is still valid
          const response = await apiClient.get(API_CONFIG.ENDPOINTS.AUTH.ME);
          if (response.error) {
            // Token invalid - clear auth state
            setUser(null);
            apiClient.logout();
          } else if (response.data) {
            // Update user data if it has changed
            setUser(response.data);
            localStorage.setItem(AUTH_STORAGE_KEYS.USER_DATA, JSON.stringify(response.data));
          }
        } catch (e) {
          console.error('Error initializing auth state:', e);
          setUser(null);
          apiClient.logout();
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    const response = await apiClient.login(email, password);

    if (response.error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: response.message || "Invalid email or password",
      });
      setIsLoading(false);
      return false;
    }

    setUser(response.data.user);
    toast({
      title: "Welcome back!",
      description: `You are now logged in as ${response.data.user.name}`,
    });
    setIsLoading(false);
    return true;
  };

  const register = async (userData: any): Promise<boolean> => {
    setIsLoading(true);
    const response = await apiClient.register(userData);

    if (response.error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: response.message || "Could not create account",
      });
      setIsLoading(false);
      return false;
    }

    toast({
      title: "Account created",
      description: "Your account has been created successfully. You can now log in.",
    });
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    apiClient.logout();
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Protected route component
export const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : null;
};
