'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white font-bold text-sm group-hover:shadow-lg transition-shadow">
            D
          </div>
          <span className="text-sm font-semibold text-foreground hidden sm:inline">DoExim Expo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
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
            className="relative group"
            onMouseEnter={() => setActiveDropdown('register')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Register
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>

            <AnimatePresence>
              {activeDropdown === 'register' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-sm shadow-lg overflow-hidden"
                >
                  {registerItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors border-b border-border/50 last:border-b-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/admin">
            <button className="px-4 py-2 text-sm font-medium bg-foreground text-primary-foreground rounded-sm hover:shadow-lg transition-shadow">
              Admin
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-sm transition-colors"
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
            className="md:hidden border-t border-border/50 bg-card"
          >
            <div className="px-4 py-4 space-y-2">
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

              <div className="py-2 border-t border-border/50">
                <p className="px-3 py-2 text-xs font-semibold text-foreground/50 uppercase tracking-wider">Register</p>
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

              <div className="pt-2 border-t border-border/50">
                <Link
                  href="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-medium bg-foreground text-primary-foreground rounded-sm hover:shadow-lg transition-shadow"
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
