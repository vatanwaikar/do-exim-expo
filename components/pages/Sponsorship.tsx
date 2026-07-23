'use client';

import { PageShell } from './PageShell';
import { Trophy, Sparkles, TrendingUp } from 'lucide-react';

const sponsorBenefits = [
  { title: 'Brand prominence', description: 'Elevated visibility across all expo communications and premium zones.', icon: Trophy },
  { title: 'Audience access', description: 'Connect with the right buyers through dedicated sponsorship channels.', icon: TrendingUp },
  { title: 'Exclusive content', description: 'Feature your brand in keynote showcases and executive sessions.', icon: Sparkles },
];

export default function Sponsorship() {
  return (
    <PageShell
      eyebrow="Exhibit"
      title="Sponsorship packages built for premium visibility"
      description="Position your brand at the center of DoExim Expo through tailored sponsorship offerings for maximum impact." 
      ctaLabel="Apply Now"
      ctaHref="/register/exhibitor"
    >
      <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Sponsorship</p>
            <h2 className="text-3xl font-semibold text-white">Sponsorship that raises your market profile</h2>
            <p className="text-white/70 leading-7">
              Premium sponsorship works with our event ecosystem to deliver high-impact brand storytelling, buyer engagement and executive visibility.
            </p>
          </div>
          <div className="rounded-3xl bg-[#081320] p-6 border border-white/10">
            <ul className="space-y-4">
              {sponsorBenefits.map((item) => (
                <li key={item.title} className="rounded-3xl bg-white/5 p-5">
                  <div className="flex items-center gap-3 text-[#f4a933]"><item.icon className="w-5 h-5" /></div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-7">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          { title: 'Brand zones', content: 'Create premium branded touchpoints within targeted expo areas.' },
          { title: 'Digital exposure', content: 'Amplify your presence across event marketing and digital visitor journeys.' },
          { title: 'Lead generation', content: 'Capture the most qualified opportunities with structured sponsorship programs.' },
        ].map((card) => (
          <div key={card.title} className="rounded-3xl border border-white/10 bg-[#091723] p-6">
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">{card.content}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
