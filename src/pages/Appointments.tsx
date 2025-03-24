
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, CheckCircle, User, Clipboard, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Sample data
  const upcomingAppointments = [
    {
      id: '1',
      therapist: 'Dr. Sarah Johnson',
      therapistImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      date: 'June 10, 2023',
      time: '3:00 PM - 4:00 PM',
      type: 'Video Session',
    },
    {
      id: '2',
      therapist: 'Dr. Michael Chen',
      therapistImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      date: 'June 17, 2023',
      time: '2:30 PM - 3:30 PM',
      type: 'Video Session',
    },
  ];

  const availableSlots = [
    '9:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '1:00 PM - 2:00 PM',
    '2:30 PM - 3:30 PM',
    '4:00 PM - 5:00 PM',
  ];

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
  };

  return (
    <Layout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Appointments</h1>
            <p className="text-muted-foreground max-w-3xl">
              Schedule, manage, and attend your therapy sessions. Our secure platform 
              allows you to book appointments and join video sessions with specialized therapists.
            </p>
          </div>

          {/* Upcoming Appointments */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Upcoming Appointments</h2>
            
            {upcomingAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="glass-card rounded-xl overflow-hidden animate-fade-in">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <img
                          src={appointment.therapistImage}
                          alt={appointment.therapist}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <p className="font-medium">{appointment.therapist}</p>
                          <p className="text-sm text-muted-foreground">ASD Specialist & Behavioral Therapist</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <CalendarIcon size={18} className="text-muted-foreground mr-2" />
                          <span>{appointment.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={18} className="text-muted-foreground mr-2" />
                          <span>{appointment.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Video size={18} className="text-muted-foreground mr-2" />
                          <span>{appointment.type}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus-ring">
                          Join Session
                        </button>
                        <button className="px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors focus-ring">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <CalendarIcon size={24} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No upcoming appointments</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  You don't have any scheduled appointments. Use the scheduler below to book a session.
                </p>
              </div>
            )}
          </div>

          {/* Schedule New Appointment */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Schedule New Appointment</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step 1: Select Therapist */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-spectrum-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-spectrum-600 font-medium">1</span>
                  </div>
                  <h3 className="font-medium">Select a Therapist</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 rounded-lg border-2 border-primary bg-primary/5 flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                      alt="Dr. Sarah Johnson"
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div className="flex-grow">
                      <p className="font-medium">Dr. Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">ASD Specialist</p>
                    </div>
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  
                  <div className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors flex items-center cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt="Dr. Michael Chen"
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">Dr. Michael Chen</p>
                      <p className="text-xs text-muted-foreground">Child & Teen ASD Counselor</p>
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors flex items-center cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt="Dr. Emily Rodriguez"
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">Dr. Emily Rodriguez</p>
                      <p className="text-xs text-muted-foreground">Speech & Language Pathologist</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2: Select Date */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-spectrum-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-spectrum-600 font-medium">2</span>
                  </div>
                  <h3 className="font-medium">Select a Date</h3>
                </div>
                
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {/* This would be a proper calendar component in a real app */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    <div className="text-xs text-muted-foreground">Su</div>
                    <div className="text-xs text-muted-foreground">Mo</div>
                    <div className="text-xs text-muted-foreground">Tu</div>
                    <div className="text-xs text-muted-foreground">We</div>
                    <div className="text-xs text-muted-foreground">Th</div>
                    <div className="text-xs text-muted-foreground">Fr</div>
                    <div className="text-xs text-muted-foreground">Sa</div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: 30 }, (_, i) => {
                      const day = i + 1;
                      const isSelected = selectedDate && day === selectedDate.getDate();
                      const isAvailable = day > 5; // Just an example, days 1-5 not available
                      
                      return (
                        <button
                          key={day}
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-colors ${
                            isSelected
                              ? 'bg-primary text-white'
                              : isAvailable
                              ? 'hover:bg-primary/10'
                              : 'text-muted-foreground/50 cursor-not-allowed'
                          }`}
                          disabled={!isAvailable}
                          onClick={() => handleDateClick(new Date(2023, 5, day))}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {selectedDate && (
                  <div className="mt-4 text-center p-2 bg-primary/10 rounded-md text-sm">
                    Selected: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                )}
              </div>
              
              {/* Step 3: Select Time */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-spectrum-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-spectrum-600 font-medium">3</span>
                  </div>
                  <h3 className="font-medium">Select a Time Slot</h3>
                </div>
                
                {selectedDate ? (
                  <div className="space-y-2">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        className={`w-full p-3 rounded-lg border text-left transition-colors ${
                          selectedSlot === slot
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50 hover:bg-primary/5'
                        }`}
                        onClick={() => handleSlotSelect(slot)}
                      >
                        <div className="flex items-center">
                          <Clock size={18} className="text-muted-foreground mr-2" />
                          <span>{slot}</span>
                          {selectedSlot === slot && (
                            <CheckCircle size={18} className="text-primary ml-auto" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    Please select a date first to view available time slots.
                  </div>
                )}
                
                {selectedDate && selectedSlot && (
                  <button className="w-full mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors focus-ring">
                    Confirm Appointment
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white shadow-sm border border-border">
                <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                  <User className="text-spectrum-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Select a Therapist</h3>
                <p className="text-muted-foreground">
                  Browse our directory of specialized therapists and select one that matches your needs.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-white shadow-sm border border-border">
                <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                  <CalendarIcon className="text-spectrum-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Schedule a Session</h3>
                <p className="text-muted-foreground">
                  Choose from available dates and times that work best for your schedule.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-white shadow-sm border border-border">
                <div className="w-12 h-12 bg-spectrum-100 rounded-full flex items-center justify-center mb-4">
                  <Video className="text-spectrum-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Join Your Session</h3>
                <p className="text-muted-foreground">
                  Connect to your session via our secure video platform at your scheduled time.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white shadow-sm border border-border">
                <h3 className="font-medium mb-2">How long are therapy sessions?</h3>
                <p className="text-muted-foreground">
                  Standard therapy sessions are 60 minutes long. Your therapist may recommend shorter or longer 
                  sessions based on your specific needs.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-white shadow-sm border border-border">
                <h3 className="font-medium mb-2">Can I cancel or reschedule an appointment?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel or reschedule up to 24 hours before your appointment without any fee. 
                  Late cancellations may be subject to a fee depending on the therapist's policy.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-white shadow-sm border border-border">
                <h3 className="font-medium mb-2">What technology do I need for video sessions?</h3>
                <p className="text-muted-foreground">
                  You'll need a device with a camera and microphone (computer, tablet, or smartphone), 
                  a stable internet connection, and a private, quiet space for your session.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-white shadow-sm border border-border">
                <h3 className="font-medium mb-2">Are my therapy sessions confidential?</h3>
                <p className="text-muted-foreground">
                  Yes, all therapy sessions are completely confidential. Our platform uses end-to-end 
                  encryption to ensure your privacy and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appointments;
