'use client'

import { Header } from '@/components/header'

export default function Speakers() {
  const speakers = [
    {
      name: 'Dr. James Smith',
      title: 'Global Trade Director',
      company: 'International Commerce Inc.',
      bio: 'Leading expert with 20+ years in international trade and export management.',
      topic: 'Future of Global Trade'
    },
    {
      name: 'Sarah Johnson',
      title: 'Supply Chain Specialist',
      company: 'LogisticsWorld Solutions',
      bio: 'Specializes in optimizing global supply chains and logistics operations.',
      topic: 'Logistics & Shipping in Modern Trade'
    },
    {
      name: 'Rajesh Patel',
      title: 'Customs & Compliance Expert',
      company: 'Global Trade Consultants',
      bio: 'Expert in international customs regulations and trade compliance.',
      topic: 'Customs Compliance Essentials'
    },
    {
      name: 'Marie Chen',
      title: 'Digital Trade Innovator',
      company: 'TechTrade Solutions',
      bio: 'Pioneer in digital transformation of international commerce.',
      topic: 'Digital Solutions in Trade'
    },
    {
      name: 'Michael Thompson',
      title: 'Finance & Payment Expert',
      company: 'International Finance Group',
      bio: 'Expert in international payment methods and trade financing.',
      topic: 'Payment Methods in International Trade'
    },
    {
      name: 'Elena Rodriguez',
      title: 'Market Research Director',
      company: 'Global Insights Research',
      bio: 'Provides market intelligence and analysis for emerging economies.',
      topic: 'Market Trends & Opportunities'
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Featured Speakers</h1>
            <p className="text-lg opacity-90">Learn from industry leaders and trade experts</p>
          </div>
        </section>

        {/* Speakers Grid */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden hover:border-secondary hover:shadow-lg transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-secondary/30 flex items-center justify-center">
                      <span className="text-3xl font-bold text-secondary opacity-70">
                        {speaker.name.split(' ')[0][0]}{speaker.name.split(' ')[1][0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">{speaker.name}</h3>
                    <p className="text-sm text-secondary font-medium mb-2">{speaker.title}</p>
                    <p className="text-xs text-muted-foreground mb-4">{speaker.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{speaker.bio}</p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-secondary font-semibold">Topic</p>
                      <p className="text-sm text-foreground font-medium">{speaker.topic}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Hear from the Experts</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us for inspiring talks and valuable insights from industry leaders
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/register/visitor" className="px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity">
                Register as Visitor
              </a>
              <a href="/register/workshop" className="px-8 py-3 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all">
                Register for Workshop
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
