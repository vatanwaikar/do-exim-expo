import Link from 'next/link';

export const metadata = {
  title: 'Exhibit – DoExim Expo',
  description: 'Explore the premium exhibit experience at DoExim Expo.',
};

export default function Page() {
  return (
    <main className="bg-[#081320] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/95 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Exhibit</p>
            <h1 className="text-4xl font-semibold text-white">Explore exhibit pathways for premium trade exposure</h1>
            <p className="max-w-3xl text-white/70 leading-8">
              Use the Exhibit menu to explore tailored pages for Why Exhibit, Plan Your Expo, Sponsorship, Gallery and dedicated industry zones.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Why Exhibit', href: '/exhibit/why-exhibit' },
              { label: 'Plan Your Expo', href: '/exhibit/plan-your-expo' },
              { label: 'Sponsorship', href: '/exhibit/sponsorship' },
              { label: 'Gallery', href: '/exhibit/gallery' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-3xl border border-white/10 bg-[#091723] px-6 py-6 text-white hover:bg-white/5 transition">
                <h2 className="text-xl font-semibold">{item.label}</h2>
                <p className="mt-2 text-sm text-white/70">Explore this premium exhibit path and see how to maximize your event presence.</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
