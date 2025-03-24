
import React, { useState } from 'react';
import { Search, Filter, MapPin, X } from 'lucide-react';
import Layout from '../components/Layout';
import TherapistCard from '../components/TherapistCard';

const Therapists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    specialty: '',
    availability: false,
    remote: false,
  });
  
  // Sample data
  const therapists = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'ASD Specialist & Behavioral Therapist',
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      location: 'San Francisco, CA (Remote Available)',
      available: true,
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Child & Teen ASD Counselor',
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      location: 'New York, NY (Remote Available)',
      available: true,
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Speech & Language Pathologist',
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      location: 'Chicago, IL',
      available: false,
    },
    {
      id: '4',
      name: 'Dr. James Wilson',
      specialty: 'Behavioral & Cognitive Therapist',
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      location: 'Austin, TX (Remote Available)',
      available: true,
    },
    {
      id: '5',
      name: 'Dr. Lisa Park',
      specialty: 'ASD & Sensory Processing Specialist',
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      location: 'Boston, MA (Remote Available)',
      available: true,
    },
    {
      id: '6',
      name: 'Dr. Robert Thompson',
      specialty: 'Adult ASD Counselor',
      rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      location: 'Seattle, WA',
      available: false,
    },
  ];

  const specialties = [
    'All Specialties',
    'ASD Specialist',
    'Behavioral Therapist',
    'Speech Pathologist',
    'Sensory Processing',
    'Child & Teen',
    'Adult Counselor',
  ];

  const handleSpecialtyChange = (specialty: string) => {
    setFilters({
      ...filters,
      specialty: specialty === 'All Specialties' ? '' : specialty,
    });
  };

  const toggleFilter = (filter: 'availability' | 'remote') => {
    setFilters({
      ...filters,
      [filter]: !filters[filter],
    });
  };

  const clearFilters = () => {
    setFilters({
      specialty: '',
      availability: false,
      remote: false,
    });
  };

  // Filter therapists based on search and filters
  const filteredTherapists = therapists.filter((therapist) => {
    const matchesSearch = !searchTerm || 
      therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) || 
      therapist.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = !filters.specialty || 
      therapist.specialty.includes(filters.specialty);
    
    const matchesAvailability = !filters.availability || therapist.available;
    
    const matchesRemote = !filters.remote || 
      therapist.location.toLowerCase().includes('remote');
    
    return matchesSearch && matchesSpecialty && matchesAvailability && matchesRemote;
  });

  const activeFiltersCount = 
    (filters.specialty ? 1 : 0) + 
    (filters.availability ? 1 : 0) + 
    (filters.remote ? 1 : 0);

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Find Specialized Therapists</h1>
            <p className="text-muted-foreground max-w-3xl">
              Connect with therapists who specialize in autism spectrum disorder. 
              Use filters to find the perfect match for your specific needs.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, specialty, or location"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary focus-ring bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <select
                  className="appearance-none w-full pl-4 pr-10 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary focus-ring bg-background"
                  value={filters.specialty}
                  onChange={(e) => handleSpecialtyChange(e.target.value)}
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Filter size={18} className="text-muted-foreground" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="available"
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  checked={filters.availability}
                  onChange={() => toggleFilter('availability')}
                />
                <label htmlFor="available" className="ml-2 text-sm">
                  Available for new patients
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remote"
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  checked={filters.remote}
                  onChange={() => toggleFilter('remote')}
                />
                <label htmlFor="remote" className="ml-2 text-sm">
                  Remote sessions available
                </label>
              </div>
              
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary flex items-center hover:text-primary/80 transition-colors"
                >
                  Clear filters <X size={14} className="ml-1" />
                </button>
              )}
              
              <div className="flex-grow text-right text-sm text-muted-foreground">
                {filteredTherapists.length} therapists found
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredTherapists.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTherapists.map((therapist) => (
                <TherapistCard key={therapist.id} {...therapist} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Search size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-2">No therapists found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your search or filters to find more therapists.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Therapists;
