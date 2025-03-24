
import React from 'react';
import { Star, Video, Calendar, MapPin } from 'lucide-react';

interface TherapistCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
  location: string;
  available: boolean;
}

const TherapistCard: React.FC<TherapistCardProps> = ({
  id,
  name,
  specialty,
  rating,
  imageUrl,
  location,
  available
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <div className="aspect-w-16 aspect-h-9 bg-secondary">
        <img
          src={imageUrl || 'https://via.placeholder.com/400x300?text=Therapist'}
          alt={name}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{specialty}</p>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={16} className="mr-2" />
            {location}
          </div>
          
          <div className="flex items-center text-sm">
            <div className={`mr-2 w-2 h-2 rounded-full ${available ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <span className="text-muted-foreground">
              {available ? 'Available for new patients' : 'Limited availability'}
            </span>
          </div>
        </div>
        
        <div className="mt-5 flex space-x-2">
          <button className="flex items-center justify-center px-3 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus-ring">
            <Calendar size={16} className="mr-2" />
            Schedule
          </button>
          <button className="flex items-center justify-center px-3 py-2 text-sm border border-border rounded-md hover:bg-secondary transition-colors focus-ring">
            <Video size={16} className="mr-2" />
            Video Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;
