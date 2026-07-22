'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { id: 1, title: 'Expo Floor Overview', category: 'Venue', src: '/images/gallery-1.png' },
  { id: 2, title: 'Networking Lounge', category: 'Venue', src: '/images/gallery-2.png' },
  { id: 3, title: 'Main Stage', category: 'Events', src: '/images/gallery-3.png' },
  { id: 4, title: 'Exhibition Area', category: 'Venue', src: '/images/gallery-4.png' },
  { id: 5, title: 'Conference Hall', category: 'Events', src: '/images/gallery-5.png' },
  { id: 6, title: 'Business Meeting Space', category: 'Venue', src: '/images/gallery-6.png' },
];

export default function Gallery() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Gallery
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-4 tracking-tight">
            Moments from the Floor
          </h1>
          <p className="text-lg text-muted-foreground">Explore highlights from previous exhibitions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-lg border border-border hover:border-accent/60 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  {image.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-foreground">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
