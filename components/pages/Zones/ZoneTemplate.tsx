'use client';

import { ReactNode } from 'react';
import { PageShell } from '../PageShell';

interface ZoneTemplateProps {
  title: string;
  subtitle: string;
  overview: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel: string;
  children?: ReactNode;
}

export function ZoneTemplate({ title, subtitle, overview, bullets, ctaHref, ctaLabel, children }: ZoneTemplateProps) {
  return (
    <PageShell
      eyebrow="Zones"
      title={title}
      description={subtitle}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
    >
      <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-white">{title}</h2>
            <p className="text-white/70 leading-7">{overview}</p>
          </div>
          <div className="rounded-3xl bg-[#081320] p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white">Zone highlights</h3>
            <ul className="mt-5 space-y-3 text-white/70">
              {bullets.map((item) => (
                <li key={item} className="rounded-3xl bg-white/5 p-4">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {children}
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#091723] p-6 text-white/70">Premium product demos for automation buyers.</div>
        <div className="rounded-3xl border border-white/10 bg-[#091723] p-6 text-white/70">Dedicated exhibitor support for zone activation.</div>
      </section>
    </PageShell>
  );
}
