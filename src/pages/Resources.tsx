
import React, { useState } from 'react';
import { Search, Filter, BookOpen, FileText, Video, Download, X } from 'lucide-react';
import Layout from '../components/Layout';
import ResourceCard from '../components/ResourceCard';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample data
  const resources = [
    {
      id: '1',
      title: 'Understanding Sensory Processing in Autism',
      description: 'A comprehensive guide to understanding and managing sensory sensitivities for individuals with ASD.',
      category: 'Education',
      imageUrl: 'https://images.unsplash.com/photo-1516727003284-a96541e51e7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      readTime: '8 min read',
      downloadable: true,
    },
    {
      id: '2',
      title: 'Social Skills Development Techniques',
      description: 'Practical exercises and approaches to help develop and enhance social interaction skills.',
      category: 'Skill Building',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
      readTime: '10 min read',
      downloadable: true,
    },
    {
      id: '3',
      title: 'Guide for Parents: Supporting Your Child with ASD',
      description: 'Helpful strategies and advice for parents to effectively support their children with autism spectrum disorder.',
      category: 'Parenting',
      imageUrl: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      readTime: '15 min read',
      downloadable: true,
    },
    {
      id: '4',
      title: 'ASD in the Workplace: Accommodations and Strategies',
      description: 'Information for employers and employees about creating inclusive workplaces for individuals with ASD.',
      category: 'Employment',
      imageUrl: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      readTime: '12 min read',
      downloadable: true,
    },
    {
      id: '5',
      title: 'Communication Techniques for Nonverbal Individuals',
      description: 'Alternative communication methods and tools for nonverbal individuals with autism spectrum disorder.',
      category: 'Communication',
      imageUrl: 'https://images.unsplash.com/photo-1573166953836-c078a5e717ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      readTime: '9 min read',
      downloadable: true,
    },
    {
      id: '6',
      title: 'Understanding Autism Spectrum Disorder',
      description: 'An introductory guide to autism spectrum disorder, its characteristics, and common experiences.',
      category: 'Education',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      readTime: '7 min read',
      downloadable: true,
    },
    {
      id: '7',
      title: 'Visual Supports and Structured Learning',
      description: 'How to use visual supports and structured learning approaches to assist individuals with ASD.',
      category: 'Skill Building',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      readTime: '11 min read',
      downloadable: true,
    },
    {
      id: '8',
      title: 'Navigating the Education System with ASD',
      description: 'Information for parents and educators about educational rights, IEPs, and accommodations for students with ASD.',
      category: 'Education',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      readTime: '14 min read',
      downloadable: true,
    },
  ];

  const categories = ['All', 'Education', 'Skill Building', 'Parenting', 'Employment', 'Communication'];

  // Filter resources based on search and category
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = !searchTerm || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || 
      resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Resource Library</h1>
            <p className="text-muted-foreground max-w-3xl">
              Access educational materials, articles, and guides designed specifically for the ASD community. 
              Our resources cover a wide range of topics related to autism spectrum disorder.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary focus-ring bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <select
                  className="appearance-none w-full pl-4 pr-10 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary focus-ring bg-background"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <Filter size={18} className="text-muted-foreground" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex space-x-2">
                <button className={`px-3 py-1.5 text-sm rounded-full transition-colors ${selectedCategory === 'All' ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/80'}`} onClick={() => setSelectedCategory('All')}>
                  All
                </button>
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${selectedCategory === category ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/80'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="text-sm text-primary flex items-center hover:text-primary/80 transition-colors ml-auto"
                >
                  Clear filters <X size={14} className="ml-1" />
                </button>
              )}
            </div>
          </div>

          {/* Featured Resources */}
          {searchTerm === '' && selectedCategory === 'All' && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {resources.slice(0, 2).map((resource) => (
                  <ResourceCard key={resource.id} {...resource} />
                ))}
              </div>
            </div>
          )}

          {/* Resource Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-spectrum-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Educational Guides</h3>
              <p className="text-muted-foreground mb-4">Comprehensive information about ASD, sensory processing, and more.</p>
              <button onClick={() => setSelectedCategory('Education')} className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                Browse guides
              </button>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-spectrum-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Practical Resources</h3>
              <p className="text-muted-foreground mb-4">Tools, exercises, and techniques for skill development and daily life.</p>
              <button onClick={() => setSelectedCategory('Skill Building')} className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                Explore resources
              </button>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                <Video className="text-spectrum-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multimedia Library</h3>
              <p className="text-muted-foreground mb-4">Videos, interactive tutorials, and visual learning materials.</p>
              <button className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                View library
              </button>
            </div>
          </div>

          {/* All Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {searchTerm || selectedCategory !== 'All' 
                ? `Search Results (${filteredResources.length})` 
                : 'All Resources'}
            </h2>
            
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} {...resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search size={24} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No resources found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Try adjusting your search or filters to find more resources.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
