import Image from 'next/image';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/world-dots.png" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-balance max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
