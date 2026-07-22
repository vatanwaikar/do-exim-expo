'use client'

import { Header } from '@/components/header'
import { Clock } from 'lucide-react'

export default function Schedule() {
  const days = [
    {
      date: 'March 15, 2025',
      day: 'Day 1: Opening',
      events: [
        { time: '09:00 - 10:00', title: 'Opening Ceremony', speaker: 'Industry Leaders', location: 'Main Hall' },
        { time: '10:15 - 12:00', title: 'Keynote: Future of Global Trade', speaker: 'Dr. James Smith', location: 'Main Hall' },
        { time: '12:00 - 13:30', title: 'Networking Lunch', location: 'Conference Center' },
        { time: '14:00 - 15:30', title: 'Workshop: Export Fundamentals', speaker: 'Expert Panel', location: 'Room A' },
        { time: '14:00 - 15:30', title: 'Workshop: Import Regulations', speaker: 'Legal Experts', location: 'Room B' },
        { time: '16:00 - 17:30', title: 'Exhibition Hall Opening', location: 'Exhibition Floor' },
      ]
    },
    {
      date: 'March 16, 2025',
      day: 'Day 2: Connections',
      events: [
        { time: '09:00 - 10:30', title: 'Workshop: Digital Trade Solutions', speaker: 'Tech Innovators', location: 'Room A' },
        { time: '09:00 - 10:30', title: 'Workshop: Payment Methods in Trade', speaker: 'Finance Experts', location: 'Room B' },
        { time: '11:00 - 12:00', title: 'Panel Discussion: Market Trends', location: 'Main Hall' },
        { time: '12:30 - 13:30', title: 'Lunch Break', location: 'Conference Center' },
        { time: '14:00 - 16:00', title: 'One-on-One B2B Meetings', location: 'Meeting Rooms' },
        { time: '16:30 - 18:00', title: 'Evening Networking Reception', location: 'VIP Lounge' },
      ]
    },
    {
      date: 'March 17, 2025',
      day: 'Day 3: Closing',
      events: [
        { time: '09:00 - 10:30', title: 'Workshop: Logistics & Shipping', speaker: 'Supply Chain Experts', location: 'Room A' },
        { time: '09:00 - 10:30', title: 'Workshop: Customs Compliance', speaker: 'Compliance Officers', location: 'Room B' },
        { time: '11:00 - 12:00', title: 'Case Studies: Success Stories', location: 'Main Hall' },
        { time: '12:30 - 13:30', title: 'Closing Lunch', location: 'Conference Center' },
        { time: '14:00 - 15:00', title: 'Awards & Recognition', location: 'Main Hall' },
        { time: '15:30 - 17:00', title: 'Closing Ceremony & Farewell', location: 'Main Hall' },
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Event Schedule</h1>
            <p className="text-lg opacity-90">March 15-17, 2025 | International Convention Center</p>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {days.map((daySchedule, dayIdx) => (
                <div key={dayIdx} className="border-l-4 border-secondary pl-8">
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-secondary">{daySchedule.date}</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary">{daySchedule.day}</h2>
                  </div>

                  <div className="space-y-4">
                    {daySchedule.events.map((event, eventIdx) => (
                      <div key={eventIdx} className="bg-card rounded-xl border border-border p-6 hover:border-secondary transition-colors">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <Clock className="text-secondary" size={24} />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-foreground text-lg">{event.title}</p>
                                <p className="text-sm text-secondary font-medium">{event.time}</p>
                              </div>
                              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                                {event.location}
                              </span>
                            </div>
                            {event.speaker && (
                              <p className="text-sm text-muted-foreground">Speaker: {event.speaker}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Info */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-8">Important Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Venue Details</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">Location:</strong> International Convention Center</li>
                  <li><strong className="text-foreground">Address:</strong> 123 Trade Street, Convention City</li>
                  <li><strong className="text-foreground">Parking:</strong> Free parking available on-site</li>
                  <li><strong className="text-foreground">Accessibility:</strong> Full accessibility for disabled guests</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Attendee Guidelines</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong className="text-foreground">Check-in:</strong> 08:00 AM each day</li>
                  <li><strong className="text-foreground">Dress Code:</strong> Business attire</li>
                  <li><strong className="text-foreground">Badge Required:</strong> Display badge at all times</li>
                  <li><strong className="text-foreground">Meals:</strong> Complimentary meals provided</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
