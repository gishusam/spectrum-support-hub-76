
import React from 'react';
import { BookOpen, Download, Clock } from 'lucide-react';

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  readTime?: string;
  downloadable?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  title,
  description,
  category,
  imageUrl,
  readTime = '5 min read',
  downloadable = false,
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      {imageUrl && (
        <div className="aspect-w-16 aspect-h-9 bg-secondary">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-40"
          />
        </div>
      )}
      <div className="p-5">
        <div className="inline-block px-2 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {category}
        </div>
        
        <h3 className="text-lg font-semibold text-foreground line-clamp-2">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock size={16} className="mr-1" />
            {readTime}
          </div>
          
          <div className="flex space-x-2">
            <button className="flex items-center justify-center px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus-ring">
              <BookOpen size={16} className="mr-2" />
              Read
            </button>
            
            {downloadable && (
              <button className="flex items-center justify-center px-2 py-1.5 text-sm border border-border rounded-md hover:bg-secondary transition-colors focus-ring">
                <Download size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
