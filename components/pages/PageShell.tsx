'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface PageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, description, ctaLabel, ctaHref, children }: PageShellProps) {
  return (
    <main className="bg-[#081320] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#f4a933]/80">{eyebrow}</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
              <p className="max-w-2xl text-lg leading-8 text-white/70">{description}</p>
              <Link href={ctaHref} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f4a933] via-[#d99b3a] to-[#f4a933] px-6 py-3 text-sm font-semibold text-[#081320] shadow-[0_18px_60px_rgba(244,169,51,0.32)] transition hover:brightness-105">
                {ctaLabel}
              </Link>
            </div>
            <div className="rounded-[28px] bg-gradient-to-br from-[#12233f] via-[#081320] to-[#081320] p-6 shadow-2xl ring-1 ring-white/5">
              <div className="space-y-5">
                <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#f4a933]/80">Event Essentials</p>
                  <div className="mt-4 space-y-3 text-sm text-white/70">
                    <p>World-class attendee curation.</p>
                    <p>Premium sponsorship pathways.</p>
                    <p>Global buyer-seller matchmaking.</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-sm uppercase tracking-[0.25em] text-[#f4a933]/80">Why this experience</p>
                  <div className="mt-4 space-y-3 text-sm text-white/70">
                    <p>Designed for executive-level networking.</p>
                    <p>Curated sessions across automation and trade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-10">{children}</section>
      </div>
    </main>
  );
}
