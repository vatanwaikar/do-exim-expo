'use client';

import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent rounded-sm flex items-center justify-center text-accent-foreground font-serif font-semibold text-lg">
                D
              </div>
              <span className="font-serif text-lg font-semibold">
                DoExim<span className="text-accent"> Expo</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              The premier international platform connecting global import &amp; export professionals.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</Link></li>
              <li><Link href="/schedule" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Schedule</Link></li>
              <li><Link href="/speakers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Speakers</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Register */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Register</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/register/exhibitor" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Exhibitor</Link></li>
              <li><Link href="/register/visitor" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Visitor</Link></li>
              <li><Link href="/register/sponsor" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Sponsor</Link></li>
              <li><Link href="/register/workshop" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Workshop</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li>
                <a
                  href="mailto:info@doexim.com"
                  className="inline-flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  info@doexim.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-5 mb-10">
          <p className="font-serif text-lg">Ready to join the 2025 summit?</p>
          <Link
            href="/register/visitor"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-sm text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Get your pass
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-sm">© 2025 DoExim Expo. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Privacy</a>
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Terms</a>
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
