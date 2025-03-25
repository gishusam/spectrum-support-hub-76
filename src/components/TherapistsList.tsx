
import React, { useEffect } from 'react';
import { useApi } from '../hooks/useApi';
import { therapistService, Therapist } from '../services/api/therapistService';
import TherapistCard from './TherapistCard';

interface TherapistsListProps {
  featured?: boolean;
  limit?: number;
}

const TherapistsList: React.FC<TherapistsListProps> = ({ 
  featured = false, 
  limit = 6 
}) => {
  const { data, isLoading, error, execute } = useApi<Therapist[]>(
    therapistService.getTherapists,
    { showErrorToast: true }
  );

  useEffect(() => {
    execute({ limit, available: featured ? true : undefined });
  }, [execute, featured, limit]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(featured ? 2 : limit).fill(0).map((_, i) => (
          <div key={i} className="h-96 rounded-xl bg-secondary animate-pulse"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 border border-border rounded-lg">
        <p className="text-muted-foreground">Unable to load therapists at this time.</p>
        <button 
          onClick={() => execute({ limit, available: featured ? true : undefined })}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  const therapists = data || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {therapists.map((therapist) => (
        <TherapistCard key={therapist.id} {...therapist} />
      ))}
      
      {featured && (
        <div className="glass-card rounded-xl flex flex-col items-center justify-center p-8 text-center bg-spectrum-50 border border-spectrum-100">
          <Search size={32} className="text-spectrum-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Find More Specialists</h3>
          <p className="text-muted-foreground mb-4">Discover therapists specialized in autism spectrum care in your area.</p>
          <NavLink to="/therapists" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Search Directory
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TherapistsList;
