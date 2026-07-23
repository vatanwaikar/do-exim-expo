'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { ExhibitorButton } from './ExhibitorButton';
import { BuyerSellerButton } from './BuyerSellerButton';
import { RegisterButton } from './RegisterButton';
import { ExhibitorModal } from '@/components/modals/ExhibitorModal';
import { BuyerSellerModal } from '@/components/modals/BuyerSellerModal';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Event', href: '/event' },
];

const exhibitItems = [
  { label: 'Why Exhibit', href: '/exhibit/why-exhibit', description: 'Discover the benefits of exhibiting at DoExim Expo.' },
  { label: 'Plan Your Expo', href: '/exhibit/plan-your-expo', description: 'Build a premium booth strategy for maximum impact.' },
  { label: 'Sponsorship', href: '/exhibit/sponsorship', description: 'Position your brand at the center of the global trade stage.' },
  { label: 'Gallery', href: '/exhibit/gallery', description: 'Preview the immersive expo environment and premium experience.' },
];

const zoneItems = [
  { label: 'Robotics Zone', href: '/zones/robotics' },
  { label: 'Machine Vision Zone', href: '/zones/machine-vision' },
  { label: 'Quality Inspection Zone', href: '/zones/quality-inspection' },
  { label: 'Assembly Automation Zone', href: '/zones/assembly-automation' },
  { label: 'Innovation & Startup Zone', href: '/zones/innovation-startup' },
  { label: 'Industrial IoT Zone', href: '/zones/industrial-iot' },
  { label: 'AI & Smart Factory Zone', href: '/zones/ai-smart-factory' },
  { label: 'Packaging Automation Zone', href: '/zones/packaging-automation' },
  { label: 'Material Handling Zone', href: '/zones/material-handling' },
  { label: 'Process Automation Zone', href: '/zones/process-automation' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [mobileExhibitOpen, setMobileExhibitOpen] = useState(false);
  const [isExhibitorOpen, setIsExhibitorOpen] = useState(false);
  const [isBuyerSellerOpen, setIsBuyerSellerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeRoute = useMemo(() => {
    if (!pathname) return null;
    if (pathname.startsWith('/event')) return '/event';
    if (pathname.startsWith('/about')) return '/about';
    if (pathname.startsWith('/exhibit') || pathname.startsWith('/zones')) return '/exhibit';
    return null;
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        isScrolled ? 'bg-[#081320cc] border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-20 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="DoExim Expo Home">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#f4a933] to-[#e9c066] shadow-[0_18px_50px_rgba(244,169,51,0.3)] flex items-center justify-center text-[#081320] font-semibold text-lg tracking-tight">
              DE
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#f4a933]/90 font-semibold">DoExim Expo</p>
              <p className="text-lg font-semibold text-white">International Trade Show</p>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-7">
            <div className="flex items-center gap-5">
              {navItems.map((item) => {
                const isActive = activeRoute === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-[#f4a933]' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div
                className="relative"
                onMouseEnter={() => setIsMegaOpen(true)}
                onMouseLeave={() => setIsMegaOpen(false)}
              >
                <button
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    activeRoute === '/exhibit' ? 'text-[#f4a933]' : 'text-white/70 hover:text-white'
                  }`}
                  aria-expanded={isMegaOpen}
                  type="button"
                >
                  Exhibit
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMegaOpen ? 'rotate-180' : ''}`} />
                </button>

                <MegaMenu open={isMegaOpen} leftItems={exhibitItems} zoneItems={zoneItems} onClose={() => setIsMegaOpen(false)} />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ExhibitorButton onClick={() => setIsExhibitorOpen(true)} />
              <BuyerSellerButton onClick={() => setIsBuyerSellerOpen(true)} />
              <RegisterButton href="/register" />
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="xl:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden border-t border-white/10 bg-[#081320ee] backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/5 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}

              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => setMobileExhibitOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 transition"
                >
                  Exhibit
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileExhibitOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileExhibitOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3 overflow-hidden"
                    >
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#f4a933]/80 mb-3">Exhibit</p>
                        <div className="space-y-2">
                          {exhibitItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-2xl px-3 py-2 text-sm text-white/70 hover:bg-[#112138] hover:text-white transition"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#f4a933]/80 mb-3">Zones</p>
                        <div className="grid grid-cols-2 gap-2">
                          {zoneItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-2xl bg-[#0d1b2a] px-3 py-2 text-sm text-white/70 hover:bg-[#12213d] hover:text-white transition"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setIsExhibitorOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full rounded-full bg-gradient-to-r from-[#f4a933] via-[#d99f53] to-[#d2912a] px-4 py-3 text-sm font-semibold text-[#081320] shadow-[0_15px_35px_rgba(244,169,51,0.24)] transition hover:brightness-105"
                >
                  Exhibitors
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsBuyerSellerOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Buyer Seller Meet
                </button>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-[#f4a933] px-4 py-3 text-center text-sm font-semibold text-[#081320] shadow-[0_15px_35px_rgba(244,169,51,0.22)] transition hover:brightness-105"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ExhibitorModal open={isExhibitorOpen} onOpenChange={setIsExhibitorOpen} />
      <BuyerSellerModal open={isBuyerSellerOpen} onOpenChange={setIsBuyerSellerOpen} />
    </header>
  );
}
