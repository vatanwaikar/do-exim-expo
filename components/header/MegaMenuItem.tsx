'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface MegaMenuItemProps {
  href: string;
  label: string;
  description: string;
}

export function MegaMenuItem({ href, label, description }: MegaMenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl border border-white/10 bg-[#11203a]/80 p-4 hover:bg-[#142845] transition"
    >
      <Link href={href} className="group block">
        <div className="flex items-center justify-between gap-3">
          <span className="text-base font-semibold text-white">{label}</span>
          <ArrowRight className="w-4 h-4 text-[#f4a933] opacity-0 group-hover:opacity-100 transition" />
        </div>
        <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
      </Link>
    </motion.div>
  );
}
