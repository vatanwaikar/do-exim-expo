'use client';

import { motion } from 'framer-motion';

interface FormLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function FormLayout({ title, description, children }: FormLayoutProps) {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Registration
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-lg p-8 shadow-sm"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}
