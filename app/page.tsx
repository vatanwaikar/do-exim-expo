'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Zap, Calendar, MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  viewport: { once: true },
};

const tickerItems = [
  '500+ Exhibitors',
  '50+ Countries',
  '10,000+ Visitors',
  '$50M+ Trade Value',
  '80+ Workshops',
  '3 Days of Networking',
];

export default function Home() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="px-4 pt-24 pb-4 md:pt-28">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground">
            {/* World map backdrop */}
            <div className="absolute inset-0 opacity-40">
              <Image
                src="/images/world-dots.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
            </div>

            {/* Animated route arcs */}
            <svg
              className="absolute inset-0 w-full h-full opacity-70"
              viewBox="0 0 1200 600"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              {[
                'M120,420 C400,180 760,140 1080,300',
                'M180,300 C450,460 820,420 1040,180',
                'M100,220 C380,300 700,520 1120,440',
              ].map((d, i) => (
                <g key={i}>
                  <path d={d} stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="6 8" />
                  <motion.circle
                    r="4"
                    fill="var(--color-accent)"
                    initial={{ offsetDistance: '0%' }}
                    animate={{ offsetDistance: '100%' }}
                    transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ offsetPath: `path("${d}")` } as React.CSSProperties}
                  />
                </g>
              ))}
            </svg>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center px-6 py-14 md:px-12 md:py-20">
              {/* Copy */}
              <div className="space-y-7">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-primary-foreground/80">Global Trade Summit · March 15&ndash;17, 2025</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="font-serif text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight text-balance"
                >
                  Where the world&apos;s
                  <span className="block text-accent italic">import &amp; export</span>
                  leaders connect
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed"
                >
                  The premier international B2B platform for global commerce. Meet 500+ exhibitors
                  from 50+ countries and build partnerships that move markets.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Link href="/register/exhibitor">
                    <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-accent text-accent-foreground rounded-sm font-semibold hover:bg-accent/90 transition-colors">
                      Register as Exhibitor
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/register/visitor">
                    <button className="w-full sm:w-auto px-7 py-3 border border-primary-foreground/30 text-primary-foreground rounded-sm font-medium hover:bg-primary-foreground/10 transition-colors">
                      Register as Visitor
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-primary-foreground/60"
                >
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    March 15&ndash;17, 2025
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    International Convention Center
                  </span>
                </motion.div>
              </div>

              {/* Duotone image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-[4/5] max-h-[520px] rounded-xl overflow-hidden border border-primary-foreground/15 shadow-2xl">
                  <Image
                    src="/images/hero-port.png"
                    alt="International shipping port with container cranes at dusk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">Live Trade Hub</p>
                    <p className="font-serif text-lg">Global commerce, one destination</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stat ticker */}
            <div className="relative border-t border-primary-foreground/10 bg-primary-foreground/5 overflow-hidden">
              <div className="flex whitespace-nowrap py-4 animate-marquee">
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <span key={i} className="flex items-center text-sm text-primary-foreground/70">
                    <span className="mx-6 font-medium">{item}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Why DoExim
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground text-balance">
              Everything you need to expand your global trade network
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Connect with verified suppliers and buyers from over 50 countries in one unified platform.',
              },
              {
                icon: Users,
                title: 'Direct Partnerships',
                description: 'Meet decision-makers face-to-face and establish meaningful, lasting business relationships.',
              },
              {
                icon: Zap,
                title: 'Market Insights',
                description: 'Access industry trends, market data, and exclusive business intelligence reports.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative p-8 rounded-lg border border-border bg-card hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-20 md:py-28 px-4 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Registration
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground text-balance">
              Choose the pass that fits your goals
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              { title: 'Exhibitor', price: 'From $2,500', link: '/register/exhibitor', features: ['Booth space', 'Marketing support', 'Networking access'] },
              { title: 'Visitor', price: 'Free', link: '/register/visitor', features: ['Full floor access', 'Networking events', 'Complimentary meals'], featured: true },
              { title: 'Sponsor', price: 'Custom', link: '/register/sponsor', features: ['Premium visibility', 'Branded materials', 'VIP benefits'] },
              { title: 'Workshop', price: 'Variable', link: '/register/workshop', features: ['Training sessions', 'Expert speakers', 'Certificates'] },
            ].map((type, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`flex flex-col rounded-lg p-6 transition-all bg-card ${
                  type.featured
                    ? 'border-2 border-accent shadow-lg'
                    : 'border border-border hover:border-accent/60'
                }`}
              >
                {type.featured && (
                  <span className="self-start mb-3 text-xs font-semibold uppercase tracking-wider text-accent-foreground bg-accent px-2.5 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-xl font-medium text-foreground mb-1">{type.title}</h3>
                <p className="text-2xl font-semibold text-foreground mb-5">
                  {type.price}
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {type.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={type.link}>
                  <button
                    className={`w-full py-2.5 rounded-sm text-sm font-semibold transition-colors ${
                      type.featured
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    Register
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground px-6 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute inset-0 opacity-25">
              <Image src="/images/world-dots.png" alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <motion.div {...fadeInUp} className="relative space-y-6">
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-balance">
                Ready to transform your trade business?
              </h2>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                Join thousands of importers and exporters shaping the future of global commerce at DoExim Expo 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link href="/register/exhibitor">
                  <button className="w-full sm:w-auto px-7 py-3 bg-accent text-accent-foreground rounded-sm font-semibold hover:bg-accent/90 transition-colors">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-7 py-3 border border-primary-foreground/30 text-primary-foreground rounded-sm font-medium hover:bg-primary-foreground/10 transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
