'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { id: 1, title: 'Expo Floor Overview', category: 'Venue' },
  { id: 2, title: 'Networking Lounge', category: 'Venue' },
  { id: 3, title: 'Main Stage', category: 'Events' },
  { id: 4, title: 'Exhibition Area', category: 'Venue' },
  { id: 5, title: 'Conference Hall', category: 'Events' },
  { id: 6, title: 'Business Meeting Space', category: 'Venue' },
];

export default function Gallery() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-light mb-4">Gallery</h1>
          <p className="text-lg text-foreground/60">Explore highlights from previous exhibitions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-sm border border-border hover:border-accent/50 transition-colors cursor-pointer"
            >
              <div className="relative h-64 bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="text-center text-foreground/40">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm">{image.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground">{image.title}</h3>
                <p className="text-sm text-foreground/50">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
