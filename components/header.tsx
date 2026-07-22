'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About', href: '/about' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const registerItems = [
    { label: 'Exhibitor', href: '/register/exhibitor' },
    { label: 'Visitor', href: '/register/visitor' },
    { label: 'Sponsor', href: '/register/sponsor' },
    { label: 'Workshop', href: '/register/workshop' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center text-accent-foreground font-serif font-semibold text-lg group-hover:rotate-3 transition-transform">
            D
          </div>
          <span className="font-serif text-lg font-semibold text-foreground tracking-tight">
            DoExim<span className="text-accent"> Expo</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* Register Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('register')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Register
              <ChevronDown
                className={`w-4 h-4 transition-transform ${activeDropdown === 'register' ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === 'register' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full right-0 pt-3 w-52"
                >
                  <div className="bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                    {registerItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 hover:text-foreground transition-colors border-b border-border/60 last:border-b-0 group/item"
                      >
                        {item.label}
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/admin">
            <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors">
              Admin
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-sm transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-card overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted rounded-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 mt-2 border-t border-border/60">
                <p className="px-3 py-2 text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                  Register
                </p>
                {registerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted rounded-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-2 mt-2 border-t border-border/60">
                <Link
                  href="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm text-center hover:bg-primary/90 transition-colors"
                >
                  Admin Panel
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
