'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { MegaMenuItem } from './MegaMenuItem';
import { ChevronRight } from 'lucide-react';

interface MegaMenuProps {
  open: boolean;
  leftItems: Array<{ label: string; href: string; description: string }>;
  zoneItems: Array<{ label: string; href: string }>;
  onClose: () => void;
}

export function MegaMenu({ open, leftItems, zoneItems }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.18 }}
          className="absolute left-0 top-full mt-3 w-[calc(100vw-4rem)] max-w-3xl rounded-[28px] border border-white/10 bg-[#091823cc] shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl p-5"
        >
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#f4a933]/80">Exhibit</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Premium exhibition guidance</h3>
                </div>
                <div className="rounded-full bg-[#0f213c] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#f4a933]">
                  Explore
                </div>
              </div>

              <div className="space-y-3">
                {leftItems.map((item) => (
                  <MegaMenuItem key={item.href} href={item.href} label={item.label} description={item.description} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[#f4a933]/80">Zones</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Curated industry domains</h3>
              </div>

              <div className="grid gap-2">
                {zoneItems.map((zone) => (
                  <Link
                    key={zone.href}
                    href={zone.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f1d31] px-4 py-3 text-sm text-white/80 transition hover:border-[#f4a933]/40 hover:bg-white/5"
                  >
                    <span>{zone.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#f4a933] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
