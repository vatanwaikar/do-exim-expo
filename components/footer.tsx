'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-foreground text-white mt-20 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DoExim Expo</h3>
            <p className="text-white/60 text-sm">Global Trade Connection Platform</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/60 hover:text-white transition">About</Link></li>
              <li><Link href="/schedule" className="text-white/60 hover:text-white transition">Schedule</Link></li>
              <li><Link href="/speakers" className="text-white/60 hover:text-white transition">Speakers</Link></li>
              <li><Link href="/gallery" className="text-white/60 hover:text-white transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Register */}
          <div>
            <h4 className="font-semibold mb-4">Register</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/register/exhibitor" className="text-white/60 hover:text-white transition">Exhibitor</Link></li>
              <li><Link href="/register/visitor" className="text-white/60 hover:text-white transition">Visitor</Link></li>
              <li><Link href="/register/sponsor" className="text-white/60 hover:text-white transition">Sponsor</Link></li>
              <li><Link href="/register/workshop" className="text-white/60 hover:text-white transition">Workshop</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-white/60 hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition">Contact</Link></li>
              <li><a href="mailto:info@doexim.com" className="text-white/60 hover:text-white transition">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">© 2025 DoExim Expo. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white/60 transition">Privacy</a>
              <a href="#" className="text-white/40 hover:text-white/60 transition">Terms</a>
              <a href="#" className="text-white/40 hover:text-white/60 transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
