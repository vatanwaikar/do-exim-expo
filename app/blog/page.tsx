'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Export Trends for 2025',
    excerpt: 'Discover the emerging trends shaping the global export market this year.',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    category: 'Market Insights',
  },
  {
    id: 2,
    title: 'Navigating International Customs Regulations',
    excerpt: 'A comprehensive guide to customs compliance across major markets.',
    author: 'Michael Chen',
    date: 'January 10, 2025',
    category: 'Compliance',
  },
  {
    id: 3,
    title: 'Digital Trade Solutions Transforming B2B',
    excerpt: 'How technology is revolutionizing import/export business processes.',
    author: 'Emma Davis',
    date: 'January 5, 2025',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'Building Sustainable Supply Chains',
    excerpt: 'Environmental considerations in modern international trade.',
    author: 'Alex Rodriguez',
    date: 'December 28, 2024',
    category: 'Sustainability',
  },
];

export default function Blog() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-light">Insights & Updates</h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Latest news and insights from the global trade community
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-card border border-border rounded-sm hover:border-accent/50 transition-colors cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-sm">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-medium group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-foreground/60 text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-foreground/50">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-foreground/50">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                <button className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
