'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Users, Sparkles, CalendarDays, Handshake, Globe } from 'lucide-react';

interface BuyerSellerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BuyerSellerModal({ open, onOpenChange }: BuyerSellerModalProps) {
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
                className="fixed left-1/2 top-1/2 z-[60] w-[min(98vw,980px)] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/10 bg-[#081320] p-6 shadow-[0_40px_110px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 sm:pb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#f4a933]/80">Buyer Seller Meet</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">Global Matchmaking Experience</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                      Join a premium networking showcase designed for buyers and sellers to build strategic partnerships.
                    </p>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="rounded-full border border-white/10 bg-white/5 p-3 text-white hover:bg-white/10 transition"
                      aria-label="Close buyer seller modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="grid gap-6 py-6 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="space-y-6">
                    <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                      <div className="flex items-center gap-3 text-[#f4a933]">
                        <Users className="w-5 h-5" />
                        <p className="text-sm uppercase tracking-[0.3em]">Focused Networking</p>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-white">Curated meetings with global partners</h3>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        Enable real connections across industry segments through structured meetups, targeted introductions, and executive networking lounges.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { icon: Globe, title: 'International Buyers', detail: 'Connect with verified buyers from 40+ countries.' },
                        { icon: Handshake, title: 'Quality Leads', detail: 'Access vetted procurement and decision-making teams.' },
                        { icon: CalendarDays, title: 'Scheduled Meetups', detail: 'Plan your agenda with high-value business sessions.' },
                        { icon: Sparkles, title: 'Premium Format', detail: 'Enjoy a polished, world-class exchange experience.' },
                      ].map((card) => (
                        <div key={card.title} className="rounded-3xl bg-[#0f1d31] p-5 border border-white/10">
                          <card.icon className="w-6 h-6 text-[#f4a933]" />
                          <h4 className="mt-4 text-lg font-semibold text-white">{card.title}</h4>
                          <p className="mt-2 text-sm leading-6 text-white/70">{card.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[#11203a] p-6 border border-white/10">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#f4a933]/80">Event Experience</p>
                      <div className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white">Invitation Only</div>
                    </div>
                    <ul className="mt-6 space-y-4 text-white/70 text-sm">
                      <li className="rounded-3xl bg-white/5 p-4">
                        <span className="font-semibold text-white">Premium matchmaking sessions</span>
                        <p className="mt-2">Structured meetings connect you with the right partners quickly.</p>
                      </li>
                      <li className="rounded-3xl bg-white/5 p-4">
                        <span className="font-semibold text-white">VIP networking lounge</span>
                        <p className="mt-2">Private spaces for C-suite introductions and high-value conversations.</p>
                      </li>
                      <li className="rounded-3xl bg-white/5 p-4">
                        <span className="font-semibold text-white">Market intelligence briefings</span>
                        <p className="mt-2">Group sessions designed to highlight the latest international trade opportunities.</p>
                      </li>
                    </ul>
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
