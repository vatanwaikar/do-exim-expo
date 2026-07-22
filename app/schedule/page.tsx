'use client'

import { PageHero } from '@/components/page-hero'
import { Clock, MapPin } from 'lucide-react'

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
    <main className="bg-background">
      <PageHero
        eyebrow="March 15-17, 2025"
        title="Event Schedule"
        description="Three days of keynotes, workshops, and B2B meetings at the International Convention Center."
      />

      {/* Schedule */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {days.map((daySchedule, dayIdx) => (
              <div key={dayIdx}>
                <div className="mb-8 flex items-baseline gap-4">
                  <span className="font-serif text-5xl font-medium text-accent leading-none">
                    {String(dayIdx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{daySchedule.date}</p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground">{daySchedule.day}</h2>
                  </div>
                </div>

                <div className="space-y-3 border-l border-border pl-6 sm:pl-8">
                  {daySchedule.events.map((event, eventIdx) => (
                    <div key={eventIdx} className="relative bg-card rounded-lg border border-border p-6 hover:border-accent transition-colors">
                      <span className="absolute -left-[calc(1.5rem+5px)] sm:-left-[calc(2rem+5px)] top-8 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                        <div>
                          <p className="font-semibold text-foreground text-lg">{event.title}</p>
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-accent font-medium">
                            <Clock size={14} /> {event.time}
                          </p>
                          {event.speaker && (
                            <p className="mt-2 text-sm text-muted-foreground">Speaker: {event.speaker}</p>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium whitespace-nowrap">
                          <MapPin size={12} /> {event.location}
                        </span>
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
      <section className="py-16 sm:py-24 bg-muted/40 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-foreground mb-8">Important Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Venue Details</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground font-medium">Location:</strong> International Convention Center</li>
                <li><strong className="text-foreground font-medium">Address:</strong> 123 Trade Street, Convention City</li>
                <li><strong className="text-foreground font-medium">Parking:</strong> Free parking available on-site</li>
                <li><strong className="text-foreground font-medium">Accessibility:</strong> Full accessibility for disabled guests</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Attendee Guidelines</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground font-medium">Check-in:</strong> 08:00 AM each day</li>
                <li><strong className="text-foreground font-medium">Dress Code:</strong> Business attire</li>
                <li><strong className="text-foreground font-medium">Badge Required:</strong> Display badge at all times</li>
                <li><strong className="text-foreground font-medium">Meals:</strong> Complimentary meals provided</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
