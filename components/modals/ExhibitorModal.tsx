'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Download, ArrowRight, Briefcase, BarChart3, Map, Sparkles } from 'lucide-react';

interface ExhibitorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExhibitorModal({ open, onOpenChange }: ExhibitorModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#081320]/80 backdrop-blur-xl" />
        <AnimatePresence>
          {open ? (
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.24 }}
                className="fixed left-1/2 top-1/2 z-[60] w-[min(98vw,1080px)] -translate-x-1/2 -translate-y-1/2 rounded-[36px] border border-white/10 bg-[#081320] p-6 shadow-[0_48px_120px_rgba(0,0,0,0.55)]"
              >
                <div className="flex items-start justify-between gap-4 pb-4 sm:pb-6 border-b border-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#f4a933]/80">Exhibitor Insights</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">Exhibitor Information</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                      A premium presentation of DoExim Expo exhibitor advantages, booth opportunities, and audience reach.
                    </p>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="rounded-full border border-white/10 bg-white/5 p-3 text-white hover:bg-white/10 transition"
                      aria-label="Close exhibitor modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="grid gap-6 py-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-6">
                    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-[#f4a933]/80">Brand Showcase</p>
                          <h3 className="mt-2 text-xl font-semibold text-white">DoExim Expo exhibitor story</h3>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f4a933]">
                          <Sparkles className="w-4 h-4" /> Premium
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/70">
                        Showcase your innovation on the global stage, attract qualified buyers, and align your brand with the world-class exhibition ecosystem.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { icon: BarChart3, title: 'Why Exhibit?', description: 'Position your company in front of international buyers and decision makers.' },
                        { icon: Briefcase, title: 'Booth Categories', description: 'Premium, deluxe, and custom spaces designed for high-impact engagement.' },
                        { icon: Map, title: 'Floor Plan Preview', description: 'Navigate premium zones and place your stand in the ideal visitor flow.' },
                        { icon: Sparkles, title: 'Industries Covered', description: 'Robotics, automation, AI, packaging, material handling and more.' },
                      ].map((item) => (
                        <div key={item.title} className="rounded-3xl bg-[#0f1d31] p-5 border border-white/10">
                          <item.icon className="w-6 h-6 text-[#f4a933]" />
                          <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
                          <p className="mt-2 text-sm leading-6 text-white/70">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-3xl bg-[#11203a] p-6 border border-white/10">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#f4a933]/80">Statistics</p>
                      <div className="mt-5 grid gap-4">
                        {[
                          { value: '500+', label: 'Exhibitors' },
                          { value: '50+', label: 'Countries' },
                          { value: '10,000+', label: 'Visitors' },
                        ].map((stat) => (
                          <div key={stat.label} className="rounded-3xl bg-white/5 p-4">
                            <p className="text-3xl font-semibold text-white">{stat.value}</p>
                            <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#f4a933]/80">Pricing Highlights</p>
                      <div className="mt-4 space-y-4 text-sm text-white/70">
                        <p>Early access packages with premium corner placement.</p>
                        <p>Custom sponsorship bundles to amplify your launch.</p>
                        <p>Flexible booth sizes with turnkey support.</p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4a933] px-5 py-3 text-sm font-semibold text-[#081320] transition hover:brightness-105">
                        Become an Exhibitor
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                        <Download className="w-4 h-4 text-[#f4a933]" />
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          ) : null}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
