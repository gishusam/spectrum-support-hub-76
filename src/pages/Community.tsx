
import React, { useState } from 'react';
import { Search, Users, MessageCircle, Clock, User, Heart, MessageSquare, Share } from 'lucide-react';
import Layout from '../components/Layout';

const Community = () => {
  const [activeTab, setActiveTab] = useState('forums');

  // Sample data
  const forums = [
    {
      id: '1',
      name: 'Parents Support Group',
      description: 'A space for parents and caregivers to share experiences and support each other.',
      members: 1240,
      posts: 324,
      lastActive: '5 minutes ago',
    },
    {
      id: '2',
      name: 'Adults with ASD',
      description: 'Discussion group for adults on the autism spectrum to connect and share experiences.',
      members: 875,
      posts: 211,
      lastActive: '1 hour ago',
    },
    {
      id: '3',
      name: 'Therapy Techniques & Tips',
      description: 'Share and discuss various therapy approaches and techniques that have been helpful.',
      members: 690,
      posts: 178,
      lastActive: '3 hours ago',
    },
    {
      id: '4',
      name: 'Sensory Processing',
      description: 'Discussion about sensory processing challenges and strategies for managing them.',
      members: 542,
      posts: 145,
      lastActive: '12 hours ago',
    },
    {
      id: '5',
      name: 'Education & IEPs',
      description: 'Support and advice for navigating the education system and IEP processes.',
      members: 928,
      posts: 256,
      lastActive: '1 day ago',
    },
  ];

  const discussions = [
    {
      id: '1',
      title: 'Strategies for managing sensory overload in public places',
      author: 'Sarah M.',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      time: '2 hours ago',
      likes: 24,
      comments: 18,
      preview: "I've been struggling with sensory overload when visiting busy places like shopping malls. Does anyone have techniques that have worked for them? Lately I've tried...",
      tags: ['Sensory Processing', 'Self Care'],
    },
    {
      id: '2',
      title: 'Success story: My son\'s progress with social skills therapy',
      author: 'Michael T.',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      time: '1 day ago',
      likes: 56,
      comments: 32,
      preview: "I wanted to share a positive experience we've had with a new social skills program. After six months, we've seen significant improvements in...",
      tags: ['Success Stories', 'Therapy'],
    },
    {
      id: '3',
      title: 'Resources for adults recently diagnosed with ASD',
      author: 'Jamie L.',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      time: '3 days ago',
      likes: 42,
      comments: 27,
      preview: "I was recently diagnosed with ASD as an adult (I'm 34), and I'm looking for resources specifically geared toward adults. Most of what I find seems to be focused on children...",
      tags: ['Adult Diagnosis', 'Resources'],
    },
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Virtual Support Group Meeting',
      date: 'Tomorrow, 7:00 PM EST',
      attendees: 18,
      description: 'Weekly support group meeting for parents and caregivers.',
    },
    {
      id: '2',
      title: 'Q&A Session with Dr. Lisa Johnson',
      date: 'Saturday, June 12, 2:00 PM EST',
      attendees: 45,
      description: 'Live Q&A session with renowned ASD specialist about sensory processing strategies.',
    },
    {
      id: '3',
      title: 'Workshop: Communication Techniques',
      date: 'Monday, June 14, 6:30 PM EST',
      attendees: 32,
      description: 'Interactive workshop on effective communication strategies for individuals with ASD.',
    },
  ];

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Community</h1>
            <p className="text-muted-foreground max-w-3xl">
              Connect with others in the ASD community. Share experiences, 
              ask questions, and find support in our moderated forums and discussion groups.
            </p>
          </div>

          {/* Community Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-white shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-4">Community at a Glance</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-spectrum-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-spectrum-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">4,280</p>
                    <p className="text-sm text-muted-foreground">Community Members</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-spectrum-100 rounded-full flex items-center justify-center mr-3">
                    <MessageCircle className="text-spectrum-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">12</p>
                    <p className="text-sm text-muted-foreground">Active Forums</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-spectrum-100 rounded-full flex items-center justify-center mr-3">
                    <Clock className="text-spectrum-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">3</p>
                    <p className="text-sm text-muted-foreground">Upcoming Events</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 p-6 rounded-xl bg-gradient-to-br from-spectrum-500 to-spectrum-600 text-white shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Welcome to Our Community</h3>
              <p className="mb-4">
                Our community forums are moderated safe spaces designed to connect, 
                share experiences, and support each other on our journeys with autism spectrum disorder.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-white" size={16} />
                  </div>
                  <p className="text-sm">Connect with others who understand your experiences</p>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <MessageCircle className="text-white" size={16} />
                  </div>
                  <p className="text-sm">Ask questions and share insights in a supportive environment</p>
                </div>
              </div>
              <button className="mt-6 px-4 py-2 bg-white text-spectrum-600 rounded-md hover:bg-white/90 transition-colors focus-ring">
                Join The Community
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('forums')}
                className={`pb-4 px-1 relative ${
                  activeTab === 'forums'
                    ? 'text-primary font-medium border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Forums
              </button>
              <button
                onClick={() => setActiveTab('discussions')}
                className={`pb-4 px-1 relative ${
                  activeTab === 'discussions'
                    ? 'text-primary font-medium border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Recent Discussions
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`pb-4 px-1 relative ${
                  activeTab === 'events'
                    ? 'text-primary font-medium border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Upcoming Events
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary focus-ring bg-background"
              />
            </div>
          </div>

          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {forums.map((forum) => (
                  <div key={forum.id} className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">{forum.name}</h3>
                    <p className="text-muted-foreground mb-4">{forum.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex space-x-4">
                        <div className="flex items-center">
                          <Users size={16} className="text-muted-foreground mr-1" />
                          <span>{forum.members} members</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle size={16} className="text-muted-foreground mr-1" />
                          <span>{forum.posts} posts</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock size={16} className="mr-1" />
                        <span>Active {forum.lastActive}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus-ring">
                        Join Forum
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="animate-fade-in space-y-6">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <img
                      src={discussion.authorAvatar}
                      alt={discussion.author}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">{discussion.author}</p>
                      <p className="text-xs text-muted-foreground">{discussion.time}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
                  <p className="text-muted-foreground mb-4">{discussion.preview}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {discussion.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                        <Heart size={18} className="mr-1" />
                        <span>{discussion.likes}</span>
                      </button>
                      <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                        <MessageSquare size={18} className="mr-1" />
                        <span>{discussion.comments}</span>
                      </button>
                    </div>
                    <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                      <Share size={18} className="mr-1" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-center mt-8">
                <button className="px-6 py-2 border border-border rounded-md hover:bg-secondary transition-colors focus-ring">
                  Load More Discussions
                </button>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-6 rounded-xl bg-white shadow-sm border border-border hover:shadow-md transition-shadow">
                    <div className="px-3 py-1 inline-block mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {event.date}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <User size={16} className="mr-1" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus-ring">
                        Attend
                      </button>
                      <button className="px-3 py-2 border border-border rounded-md hover:bg-secondary transition-colors focus-ring">
                        Remind Me
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button className="px-6 py-2 border border-border rounded-md hover:bg-secondary transition-colors focus-ring">
                  View All Events
                </button>
              </div>
            </div>
          )}

          {/* Community Guidelines */}
          <div className="mt-12 p-6 rounded-xl bg-secondary/50 border border-border">
            <h3 className="text-lg font-semibold mb-4">Community Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground mb-4">
                  Our community is dedicated to providing a safe, supportive space for everyone. 
                  Please remember to:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-primary/10 rounded-full text-primary text-center mr-2 flex-shrink-0">✓</span>
                    <span>Treat all members with respect and empathy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-primary/10 rounded-full text-primary text-center mr-2 flex-shrink-0">✓</span>
                    <span>Keep discussions constructive and supportive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-primary/10 rounded-full text-primary text-center mr-2 flex-shrink-0">✓</span>
                    <span>Respect privacy and confidentiality</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground mb-4">
                  Our moderators are here to help ensure our community remains a positive environment. 
                  If you have any concerns, please contact our moderation team.
                </p>
                <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus-ring">
                  Contact Moderators
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
