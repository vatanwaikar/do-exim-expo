'use client'

import { Header } from '@/components/header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">Get in touch with our team</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  details: 'info@doexim.com',
                  desc: 'Email us anytime'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  details: '+1-800-EXPO-123',
                  desc: 'Call us during business hours'
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  details: '123 Trade Street',
                  desc: 'Convention City, State 12345'
                },
              ].map((contact, idx) => (
                <div key={idx} className="bg-card rounded-xl border border-border p-8 text-center hover:border-secondary transition-colors">
                  <div className="inline-block w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <contact.icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{contact.title}</h3>
                  <p className="font-semibold text-secondary mb-2">{contact.details}</p>
                  <p className="text-sm text-muted-foreground">{contact.desc}</p>
                </div>
              ))}
            </div>

            {/* Contact Form and Hours */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl border border-border p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  
                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-900 font-semibold">Thank you! We&apos;ll get back to you soon.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message..."
                        rows={5}
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Hours and Info */}
              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="text-secondary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-3">Business Hours</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Monday - Friday</strong><br />09:00 AM - 06:00 PM</p>
                        <p><strong className="text-foreground">Saturday</strong><br />10:00 AM - 04:00 PM</p>
                        <p><strong className="text-foreground">Sunday</strong><br />Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 rounded-xl border border-secondary p-8">
                  <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/register/exhibitor" className="text-secondary hover:underline">Exhibitor Registration</a></li>
                    <li><a href="/register/visitor" className="text-secondary hover:underline">Visitor Registration</a></li>
                    <li><a href="/register/sponsor" className="text-secondary hover:underline">Sponsorship</a></li>
                    <li><a href="/faq" className="text-secondary hover:underline">FAQ</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
