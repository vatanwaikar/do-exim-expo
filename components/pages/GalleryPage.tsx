'use client';

import { PageShell } from './PageShell';
import { Image, Sparkles, Globe } from 'lucide-react';

const galleryHighlights = [
  { title: 'Immersive spaces', description: 'Premium halls designed for high-impact product demonstrations.', icon: Image },
  { title: 'Curated experiences', description: 'Showcase your brand in a polished, gallery-style exhibition setting.', icon: Sparkles },
  { title: 'Global ambience', description: 'A world-class event identity that supports international business connections.', icon: Globe },
];

export default function GalleryPage() {
  return (
    <PageShell
      eyebrow="Exhibit"
      title="Explore the gallery of premium expo experiences"
      description="A showcase of the design, ambience and high-end visitor journey that makes DoExim Expo stand apart." 
      ctaLabel="Plan Your Expo"
      ctaHref="/exhibit/plan-your-expo"
    >
      <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Gallery</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Premium visuals for exhibition success</h2>
            <p className="mt-4 text-white/70 leading-7">
              Experience the atmosphere, stage settings, and brand moments that make a visit to DoExim Expo unforgettable.
            </p>
          </div>
          <div className="grid gap-4">
            {galleryHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl bg-[#091723] p-6 border border-white/10">
                <div className="flex items-center gap-3 text-[#f4a933]"><item.icon className="w-5 h-5" /></div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {['Premium lounge visuals', 'Interactive floor moments', 'Global business storytelling'].map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-[#091723] p-6 text-white/70">{item}</div>
        ))}
      </section>
    </PageShell>
  );
}
