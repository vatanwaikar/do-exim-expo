import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8 bg-background min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <p className="font-serif text-7xl md:text-8xl font-medium text-accent">404</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Page Not Found</h1>
        </div>

        <p className="text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
