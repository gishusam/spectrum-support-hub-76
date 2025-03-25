
import React from 'react';
import { Calendar, Clock, Search, Calendar as CalendarIcon, MessageCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import TherapistsList from '@/components/TherapistsList';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}</h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening with your care
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Button>
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Find Therapist
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your next therapy sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <CalendarIcon className="mt-0.5 h-5 w-5 text-primary" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Session with Dr. Emma Johnson</p>
                    <div className="flex text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      Tomorrow at 10:00 AM
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">Reschedule</Button>
                    </div>
                  </div>
                </div>

                <NavLink to="/appointments" className="block text-sm text-primary hover:underline mt-2">
                  View all appointments
                </NavLink>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Resources for You</CardTitle>
              <CardDescription>Curated content for your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="rounded-md border p-3">
                  <h4 className="text-sm font-medium">Understanding ASD</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    A guide for parents and caregivers
                  </p>
                </div>
                <div className="rounded-md border p-3">
                  <h4 className="text-sm font-medium">Sensory Regulation Strategies</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Techniques for daily management
                  </p>
                </div>
                <NavLink to="/resources" className="block text-sm text-primary hover:underline mt-2">
                  Explore all resources
                </NavLink>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Community Activity</CardTitle>
              <CardDescription>Recent discussions and events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rounded-md border p-4">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">New discussion in Parents Support</p>
                    <p className="text-xs text-muted-foreground">
                      "Tips for school transitions..."
                    </p>
                  </div>
                </div>
                <NavLink to="/community" className="block text-sm text-primary hover:underline mt-2">
                  Join community discussions
                </NavLink>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Therapists</h2>
          <TherapistsList featured={true} limit={3} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
