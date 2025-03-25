
import React from 'react';
import { Calendar, Clock, Users, PieChart, MessageCircle, ClipboardList } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TherapistDashboard = () => {
  const { user } = useAuth();

  // Mock data
  const upcomingAppointments = [
    { id: 1, patient: 'Alex Smith', time: '10:00 AM', date: 'Today', status: 'Confirmed' },
    { id: 2, patient: 'Jamie Davis', time: '2:30 PM', date: 'Today', status: 'Confirmed' },
    { id: 3, patient: 'Riley Johnson', time: '9:15 AM', date: 'Tomorrow', status: 'Pending' },
  ];

  return (
    <Layout>
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, Dr. {user?.name}</h1>
            <p className="text-muted-foreground mt-1">
              Your therapy practice dashboard
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button variant="outline">
              <ClipboardList className="mr-2 h-4 w-4" />
              Patient Records
            </Button>
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Manage Schedule
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-muted-foreground mr-2" />
                <div className="text-2xl font-bold">24</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                +2 this month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Weekly Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                <div className="text-2xl font-bold">12</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                3 sessions today
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Session Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                <div className="text-2xl font-bold">45m</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                +5m from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <PieChart className="h-5 w-5 text-muted-foreground mr-2" />
                <div className="text-2xl font-bold">98%</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Based on feedback
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Today's Appointments</CardTitle>
              <CardDescription>
                Manage your upcoming sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell className="font-medium">{appointment.patient}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          appointment.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-4">
                <NavLink to="/appointments" className="text-sm text-primary hover:underline">
                  View all appointments
                </NavLink>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Engagement</CardTitle>
              <CardDescription>
                Recent activity in support forums
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">New question in ASD Support</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        "Advice on sensory-friendly activities..."
                      </p>
                      <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-primary">
                        Respond
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Discussion in Parents Group</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        "School accommodation strategies..."
                      </p>
                      <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-primary">
                        Respond
                      </Button>
                    </div>
                  </div>
                </div>
                <NavLink to="/community" className="block text-sm text-primary hover:underline mt-2">
                  View all community activity
                </NavLink>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TherapistDashboard;
