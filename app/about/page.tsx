'use client'

import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="About the expo"
        title="Connecting global import & export professionals since 2020"
        description="DoExim Expo is where ambitious businesses meet the partners, markets, and ideas that move trade forward."
      />

      {/* Mission */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                DoExim Expo is dedicated to fostering international trade and commerce by creating a premier platform where businesses can connect, learn, and grow together.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We bring together thousands of exhibitors, buyers, and professionals from over 50 countries to explore new markets, establish partnerships, and discover innovative solutions in import and export industries.
              </p>
              <div className="space-y-3">
                {[
                  'Facilitate meaningful business connections',
                  'Showcase innovative products and services',
                  'Foster knowledge sharing and learning',
                  'Support global trade growth',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/about-trade.png"
                alt="Business professionals networking at a trade exhibition"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 sm:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-12">Our History</h2>
          <div className="space-y-8">
            {[
              { year: '2020', title: 'Founded', desc: 'DoExim Expo launched with 200 exhibitors and 3,000 visitors' },
              { year: '2021', title: 'Expansion', desc: 'Grew to 350 exhibitors with participants from 35 countries' },
              { year: '2022', title: 'Growth', desc: 'Reached 450 exhibitors and 8,000 visitors from 45 countries' },
              { year: '2024', title: 'Global Leader', desc: 'Became the largest regional import/export trade show' },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-sm bg-primary">
                    <span className="font-serif font-semibold text-primary-foreground">{milestone.year}</span>
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Integrity', desc: 'We conduct business with honesty, transparency, and ethical practices.' },
              { title: 'Innovation', desc: 'We embrace new ideas and technologies to improve the trading experience.' },
              { title: 'Community', desc: 'We foster a supportive network where businesses grow together.' },
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                  <span className="font-serif font-semibold text-accent">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-12 text-center">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Exhibitors' },
              { number: '10K+', label: 'Visitors' },
              { number: '50+', label: 'Countries' },
              { number: '$50M+', label: 'Trade Value' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-medium text-accent mb-2">{stat.number}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
