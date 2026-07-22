'use client'

import { Header } from '@/components/header'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (idx: number) => {
    const newOpen = new Set(openItems)
    if (newOpen.has(idx)) {
      newOpen.delete(idx)
    } else {
      newOpen.add(idx)
    }
    setOpenItems(newOpen)
  }

  const faqs = [
    {
      category: 'General',
      items: [
        {
          q: 'When and where is DoExim Expo held?',
          a: 'DoExim Expo is held annually on March 15-17, 2025 at the International Convention Center. The event runs from 09:00 AM to 05:00 PM each day.'
        },
        {
          q: 'Who should attend DoExim Expo?',
          a: 'The expo is ideal for import/export professionals, business owners, traders, manufacturers, suppliers, logistics providers, and anyone interested in international commerce.'
        },
        {
          q: 'Is registration required?',
          a: 'Yes, pre-registration is recommended but walk-in registrations are also accepted on-site. Pre-registration is free for visitors and helps us manage venue capacity better.'
        },
      ]
    },
    {
      category: 'Exhibitors',
      items: [
        {
          q: 'What are the booth options available?',
          a: 'We offer three booth sizes: Small (3x3m) at $2,500, Medium (6x6m) at $5,000, and Large (9x9m) at $10,000. All booths include basic setup, electricity, and signage.'
        },
        {
          q: 'What is included in booth rental?',
          a: 'Booth rental includes the space, basic setup, electricity connection, company signage, and 2 complimentary staff passes. Additional services like flooring, furniture, and extra passes are available at additional cost.'
        },
        {
          q: 'How do I register as an exhibitor?',
          a: 'Visit the Exhibitor Registration page, fill in your company details, select your booth size, and submit. Our team will contact you within 24 hours to confirm your registration and arrange payment.'
        },
      ]
    },
    {
      category: 'Visitors',
      items: [
        {
          q: 'Is there an entry fee for visitors?',
          a: 'No, entry to DoExim Expo is completely free for registered visitors. You only need to pre-register or register on-site.'
        },
        {
          q: 'What should I bring to the expo?',
          a: 'Bring your registration badge, business cards, and a notebook or device for taking notes. Professional business attire is recommended.'
        },
        {
          q: 'Will meals be provided?',
          a: 'Yes, complimentary breakfast, lunch, and refreshments are provided throughout the event for all registered attendees.'
        },
      ]
    },
    {
      category: 'Sponsorships',
      items: [
        {
          q: 'What sponsorship levels are available?',
          a: 'We offer three sponsorship levels: Gold ($25,000), Silver ($15,000), and Bronze ($5,000). Each level comes with different benefits including booth space, branding opportunities, and networking events.'
        },
        {
          q: 'What benefits do sponsors receive?',
          a: 'Benefits vary by level and include exhibition booth, logo placement on website and materials, branded merchandise, speaking opportunities, VIP networking events, and media mentions.'
        },
        {
          q: 'Can sponsorship be customized?',
          a: 'Yes, we can work with sponsors to create custom packages that meet their specific marketing and business objectives. Contact our sponsorship team for more details.'
        },
      ]
    },
    {
      category: 'Workshops',
      items: [
        {
          q: 'Are workshops included in registration?',
          a: 'Yes, all workshops are included with your registration. You can attend multiple workshops based on your interest and schedule.'
        },
        {
          q: 'What topics are covered in workshops?',
          a: 'Topics include Export Fundamentals, Import Regulations, Digital Trade Solutions, International Payment Methods, Customs Compliance, and Market Research & Analysis.'
        },
        {
          q: 'Do workshops require pre-registration?',
          a: 'While pre-registration is helpful for planning, you can also sign up for workshops on the day of the event depending on availability.'
        },
      ]
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg opacity-90">Find answers to common questions about DoExim Expo</p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h2 className="text-2xl font-bold text-primary mb-6">{section.category}</h2>
                  <div className="space-y-3">
                    {section.items.map((item, itemIdx) => {
                      const uniqueIdx = sectionIdx * 100 + itemIdx
                      const isOpen = openItems.has(uniqueIdx)
                      return (
                        <div
                          key={itemIdx}
                          className="bg-card rounded-xl border border-border overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(uniqueIdx)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-foreground text-left">{item.q}</h3>
                            <ChevronDown
                              className={`flex-shrink-0 text-secondary transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              size={20}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 py-4 border-t border-border bg-muted/30">
                              <p className="text-muted-foreground">{item.a}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Didn't find your answer?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Feel free to reach out to our support team for additional questions
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
