
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Users, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import TherapistCard from '../components/TherapistCard';
import ResourceCard from '../components/ResourceCard';

const Index = () => {
  // Sample data
  const featuredTherapists = [
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
  ];

  const featuredResources = [
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
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 pb-20 mb-12 bg-gradient-to-br from-spectrum-50 to-spectrum-100 rounded-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Specialized Support for the Autism Spectrum Community
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Connect with specialized therapists, join supportive communities, and access educational resources tailored for individuals with ASD.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NavLink to="/therapists" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus-ring">
                Find a Therapist
              </NavLink>
              <NavLink to="/community" className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors focus-ring">
                Join Our Community
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">How SpectrumConnect Helps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                <Search className="text-spectrum-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Find Specialists</h3>
              <p className="text-muted-foreground">Search and connect with therapists specialized in autism spectrum care.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-spectrum-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Sessions</h3>
              <p className="text-muted-foreground">Book appointments online and attend secure video therapy sessions.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-spectrum-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Join Communities</h3>
              <p className="text-muted-foreground">Connect with others in moderated forums and discussion groups.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-spectrum-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Access Resources</h3>
              <p className="text-muted-foreground">Explore our library of educational materials specific to autism spectrum needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Therapists */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Therapists</h2>
            <NavLink to="/therapists" className="text-primary flex items-center hover:text-primary/80 transition-colors">
              View all <ArrowRight size={16} className="ml-1" />
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTherapists.map((therapist) => (
              <TherapistCard key={therapist.id} {...therapist} />
            ))}
            
            <div className="glass-card rounded-xl flex flex-col items-center justify-center p-8 text-center bg-spectrum-50 border border-spectrum-100">
              <Search size={32} className="text-spectrum-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Find More Specialists</h3>
              <p className="text-muted-foreground mb-4">Discover therapists specialized in autism spectrum care in your area.</p>
              <NavLink to="/therapists" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Search Directory
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Educational Resources</h2>
            <NavLink to="/resources" className="text-primary flex items-center hover:text-primary/80 transition-colors">
              Browse library <ArrowRight size={16} className="ml-1" />
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
            
            <div className="glass-card rounded-xl flex flex-col items-center justify-center p-8 text-center bg-spectrum-50 border border-spectrum-100">
              <BookOpen size={32} className="text-spectrum-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Explore Our Library</h3>
              <p className="text-muted-foreground mb-4">Access guides, articles, and educational materials tailored for the ASD community.</p>
              <NavLink to="/resources" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                View All Resources
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community CTA */}
      <section className="py-12 mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-spectrum-500 to-spectrum-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Supportive Community</h2>
              <p className="text-lg opacity-90 mb-8">
                Connect with others on similar journeys, share experiences, and find support in our moderated forums designed specifically for the ASD community.
              </p>
              <NavLink to="/community" className="px-6 py-3 bg-white text-spectrum-600 rounded-lg hover:bg-white/90 transition-colors focus-ring inline-block">
                Explore Community Forums
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
