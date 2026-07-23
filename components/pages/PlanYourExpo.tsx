'use client';

import { PageShell } from './PageShell';
import { CalendarDays, LayoutDashboard, Sparkles } from 'lucide-react';

const highlights = [
  { title: 'Booth planning', detail: 'Design a premium presence with curated floor strategy.', icon: LayoutDashboard },
  { title: 'Visitor flow', detail: 'Deliver an exceptional experience across the expo zones.', icon: CalendarDays },
  { title: 'Curated sessions', detail: 'Align your showcase with buyer networking and keynote timings.', icon: Sparkles },
];

export default function PlanYourExpo() {
  return (
    <PageShell
      eyebrow="Exhibit"
      title="Plan your expo presence with precision"
      description="Build a memorable, premium exhibition experience with tailored booth planning, customer flow and sponsorship support." 
      ctaLabel="View Exhibit Gallery"
      ctaHref="/exhibit/gallery"
    >
      <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Strategy</p>
            <h2 className="text-3xl font-semibold text-white">Every element of your expo plan is built to impress</h2>
            <p className="text-white/70 leading-7">
              The planning experience combines premium design, audience insights, and operational support so your exhibition delivers maximum brand impact.
            </p>
          </div>
          <div className="rounded-3xl bg-[#081320] p-6 border border-white/10">
            <ul className="space-y-4 text-white/70">
              {highlights.map((item) => (
                <li key={item.title} className="rounded-3xl bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-[#f4a933]"><item.icon className="w-5 h-5" /></div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-[#091723] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
        <h3 className="text-2xl font-semibold text-white">Premium event support</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            'Custom booth layouts with premium finish',
            'Dedicated planning support and logistics guidance',
            'Collaborative marketing for visitor attraction',
          ].map((item) => (
            <div key={item} className="rounded-3xl bg-white/5 p-5 border border-white/10 text-white/70">{item}</div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
