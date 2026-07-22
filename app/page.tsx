'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Zap, Sparkles } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  viewport: { once: true },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 md:pt-40 md:pb-0 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          {/* Badge */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-border bg-white/50 backdrop-blur-sm hover:border-accent/50 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/70">Global Trade Summit 2025</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight leading-tight text-foreground"
          >
            Connect with the global
            <span className="block text-accent italic font-light mt-2">
              import & export leaders
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Experience the premier international platform for B2B trade. Network with 500+ exhibitors from 50+ countries. Build partnerships that transform your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link href="/register/exhibitor">
              <button className="group relative px-8 py-3 bg-foreground text-primary-foreground rounded-sm font-medium text-base overflow-hidden transition-all hover:shadow-lg">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Register as Exhibitor
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
            <Link href="/register/visitor">
              <button className="px-8 py-3 border-2 border-foreground text-foreground rounded-sm font-medium text-base hover:bg-foreground hover:text-primary-foreground transition-all">
                Register as Visitor
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 pt-16 border-t border-border/50"
          >
            {[
              { number: '500+', label: 'Exhibitors' },
              { number: '10K+', label: 'Expected Visitors' },
              { number: '50+', label: 'Countries' },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl md:text-4xl font-light text-foreground">{stat.number}</div>
                <div className="text-xs md:text-sm text-foreground/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-foreground">Why Join DoExim Expo?</h2>
            <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
              Everything you need to expand your global trade network and discover new business opportunities
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Connect with suppliers and buyers from over 50 countries in one unified platform.'
              },
              {
                icon: Users,
                title: 'Direct Partnerships',
                description: 'Meet decision-makers and establish meaningful business relationships face-to-face.'
              },
              {
                icon: Zap,
                title: 'Market Insights',
                description: 'Access industry trends, market data, and exclusive business intelligence reports.'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="space-y-4 p-8 rounded-sm border border-border hover:border-accent/50 transition-colors group bg-white"
              >
                <feature.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-medium text-foreground">{feature.title}</h3>
                <p className="text-foreground/60 font-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-20 md:py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-foreground">Choose Your Registration</h2>
            <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
              Select the registration type that best fits your business goals
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: 'Exhibitor',
                price: 'From $2,500',
                link: '/register/exhibitor',
                features: ['Booth space', 'Marketing', 'Networking access']
              },
              {
                title: 'Visitor',
                price: 'Free',
                link: '/register/visitor',
                features: ['Full access', 'Networking events', 'Free attendance']
              },
              {
                title: 'Sponsor',
                price: 'Custom',
                link: '/register/sponsor',
                features: ['Premium visibility', 'Branded materials', 'VIP benefits']
              },
              {
                title: 'Workshop',
                price: 'Variable',
                link: '/register/workshop',
                features: ['Training sessions', 'Expert speakers', 'Certificates']
              }
            ].map((type, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="border border-border rounded-sm p-6 hover:border-accent/50 transition-all group cursor-pointer bg-white"
              >
                <h3 className="text-lg font-medium text-foreground mb-2">{type.title}</h3>
                <p className="text-accent font-light mb-4">{type.price}</p>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, j) => (
                    <li key={j} className="text-sm text-foreground/60 font-light">{feature}</li>
                  ))}
                </ul>
                <Link href={type.link}>
                  <button className="w-full py-2 border border-foreground text-foreground rounded-sm text-sm font-medium hover:bg-foreground hover:text-primary-foreground transition-all">
                    Register
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light">Ready to Transform Your Trade Business?</h2>
            <p className="text-lg font-light opacity-80 mt-4">
              Join thousands of importers and exporters at DoExim Expo 2025
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link href="/register/exhibitor">
              <button className="px-8 py-3 bg-primary-foreground text-foreground rounded-sm font-medium text-base hover:shadow-lg transition-all">
                Get Started Today
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-sm font-medium text-base hover:bg-primary-foreground hover:text-foreground transition-all">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
