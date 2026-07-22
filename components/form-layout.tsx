'use client';

import { motion } from 'framer-motion';

interface FormLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function FormLayout({ title, description, children }: FormLayoutProps) {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">{title}</h1>
          <p className="text-lg text-foreground/60">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-sm p-8"
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
}
