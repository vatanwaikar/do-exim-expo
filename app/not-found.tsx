import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="text-6xl font-light text-accent">404</p>
          <h1 className="text-4xl md:text-5xl font-light">Page Not Found</h1>
        </div>
        
        <p className="text-lg text-foreground/60">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white rounded-sm hover:shadow-lg transition-shadow">
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
