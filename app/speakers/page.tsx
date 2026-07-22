'use client'

import { PageHero } from '@/components/page-hero'

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
    <main className="bg-background">
      <PageHero
        eyebrow="Speakers"
        title="Featured Speakers"
        description="Learn from industry leaders and trade experts shaping the future of global commerce."
      />

      {/* Speakers Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, idx) => (
              <div key={idx} className="group bg-card rounded-lg border border-border overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300">
                <div className="h-40 bg-primary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,var(--accent)_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative w-24 h-24 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center">
                    <span className="font-serif text-3xl font-medium text-accent">
                      {speaker.name.split(' ')[0][0]}{speaker.name.split(' ')[1][0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{speaker.name}</h3>
                  <p className="text-sm text-accent font-medium mb-1">{speaker.title}</p>
                  <p className="text-xs text-muted-foreground mb-4">{speaker.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{speaker.bio}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Topic</p>
                    <p className="text-sm text-foreground font-medium">{speaker.topic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-muted/40 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground mb-4">Hear from the Experts</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for inspiring talks and valuable insights from industry leaders.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/register/visitor" className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-accent/90 transition-colors">
              Register as Visitor
            </a>
            <a href="/register/workshop" className="px-8 py-3 border border-primary text-primary font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">
              Register for Workshop
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
