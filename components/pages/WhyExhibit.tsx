'use client';

import { PageShell } from './PageShell';
import { Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';

const benefits = [
  { title: 'Global visibility', detail: 'Reach buyers from around the world with featured expo placement.' },
  { title: 'Strategic outreach', detail: 'Engage high-value visitors through curated presentations and networking.' },
  { title: 'Brand elevation', detail: 'Position your company as an innovation leader in the trade ecosystem.' },
];

export default function WhyExhibit() {
  return (
    <PageShell
      eyebrow="Exhibit"
      title="Why exhibit at DoExim Expo?"
      description="A premium exhibition platform created to amplify your brand, deepen buyer relationships, and deliver measurable trade outcomes."
      ctaLabel="Explore Sponsorship"
      ctaHref="/exhibit/sponsorship"
    >
      <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Benefits</p>
            <h2 className="text-3xl font-semibold text-white">Exhibitor success starts with premium positioning</h2>
            <p className="text-white/70 leading-7">
              From bespoke exposure packages to zone-specific experiences, DoExim Expo delivers a tailored stage for companies that want to lead the global trade conversation.
            </p>
          </div>
          <div className="rounded-3xl bg-[#081320] p-6 border border-white/10">
            <div className="space-y-4">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-3xl bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-[#f4a933]"><Sparkles className="w-5 h-5" /></div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { title: 'Why Exhibit', content: 'Strategic access to buyers, investors, and enterprise customers.' },
          { title: 'Plan Your Expo', content: 'A dedicated programme to build your premium live experience.' },
          { title: 'Gallery', content: 'Showcase your presence through curated visuals and brand storytelling.' },
        ].map((card) => (
          <div key={card.title} className="rounded-3xl border border-white/10 bg-[#091723] p-6">
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm text-white/70 leading-7">{card.content}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
