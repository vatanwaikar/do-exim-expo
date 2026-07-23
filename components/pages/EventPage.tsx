'use client';

import { motion } from 'framer-motion';
import { PageShell } from './PageShell';
import { CalendarDays, Clock3, Users, Sparkles, Globe, Award } from 'lucide-react';

const agendaItems = [
  { time: '09:00', title: 'Opening Keynote', detail: 'Trade leadership conversation with global industry pioneers.' },
  { time: '10:45', title: 'Automation Showcase', detail: 'Live demonstrations from robotics and smart factory leaders.' },
  { time: '13:30', title: 'Panel: Market Access', detail: 'Strategic sourcing, export growth and market expansion.' },
  { time: '15:45', title: 'Networking Roundtables', detail: 'Curated B2B meetups with international delegations.' },
];

const highlights = [
  { icon: Globe, title: 'Global Reach', description: 'Connect with decision makers from 50+ countries.' },
  { icon: Users, title: 'Executive Presence', description: 'Premium audience of buyers, suppliers and investors.' },
  { icon: Sparkles, title: 'Live Innovation', description: 'Experience breakthrough technologies on the expo floor.' },
  { icon: Award, title: 'Thought Leadership', description: 'Insights from speakers shaping international trade.' },
];

export default function EventPage() {
  return (
    <PageShell
      eyebrow="Event"
      title="A premium conference stage for global trade leadership"
      description="The Event page brings together agenda, networking and keynote sessions in a sophisticated, expandable design built for world-class exhibition experiences."
      ctaLabel="Register for Event"
      ctaHref="/register"
    >
      <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.85fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Event Overview</p>
            <h2 className="text-3xl font-semibold text-white">Curated programming for trade, innovation and partnerships.</h2>
            <p className="max-w-2xl text-white/70 leading-7">
              The Event section blends conference agenda, live demonstrations and networking with a premium visual identity. Built for future expansion, each block can become a managed admin section.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 p-5 border border-white/10">
                <div className="flex items-center gap-3 text-[#f4a933]"><CalendarDays className="w-5 h-5" /><span className="text-sm uppercase tracking-[0.24em]">Timeline</span></div>
                <p className="mt-3 text-sm text-white/70">See the session flow from opening to closing day.</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5 border border-white/10">
                <div className="flex items-center gap-3 text-[#f4a933]"><Clock3 className="w-5 h-5" /><span className="text-sm uppercase tracking-[0.24em]">Schedule</span></div>
                <p className="mt-3 text-sm text-white/70">Designed for high-value attendee engagement and seamless transitions.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#11203a] p-6">
            <div className="space-y-4">
              <div className="rounded-3xl bg-[#081320] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#f4a933]/70">Opening Ceremony</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Welcome to the international showcase</h3>
                <p className="mt-2 text-sm text-white/70">A spectacular launch designed to unite exhibitors, buyers and global leaders.</p>
              </div>
              <div className="rounded-3xl bg-[#081320] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#f4a933]/70">Closing Ceremony</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Closing with momentum</h3>
                <p className="mt-2 text-sm text-white/70">Wrap up with investment highlights, partnership awards and next-step programming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/90 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.28)]">
          <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Event Agenda</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Premium agenda highlights</h3>
          <div className="mt-8 space-y-3">
            {agendaItems.map((item) => (
              <div key={item.time} className="rounded-3xl border border-white/10 bg-[#091723] p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-white">{item.time}</span>
                  <span className="text-sm uppercase tracking-[0.2em] text-[#f4a933]/80">Session</span>
                </div>
                <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/90 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.28)]">
          <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Conference Highlights</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Designed for elite impact</h3>
          <div className="mt-8 grid gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-[#091723] p-5">
                <div className="flex items-center gap-3 text-[#f4a933]"><item.icon className="w-5 h-5" /><span className="text-base font-semibold text-white">{item.title}</span></div>
                <p className="mt-3 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          { title: 'Networking Events', description: 'Structured sessions designed to create meaningful global business connections.' },
          { title: 'Key Sessions', description: 'Deep dive panels covering automation, logistics, trade policy and investment.' },
          { title: 'Timeline & Schedule', description: 'Immersive programming built for premium attendee experience.' },
        ].map((item) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-[#091723] p-6"
          >
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
            <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
          </motion.article>
        ))}
      </section>
    </PageShell>
  );
}
