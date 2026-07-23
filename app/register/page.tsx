import Link from 'next/link';

export const metadata = {
  title: 'Register – DoExim Expo',
  description: 'Register for DoExim Expo and choose the best package for your participation.',
};

export default function Page() {
  return (
    <main className="bg-[#081320] text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/10 bg-[#0d1b2a]/95 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f4a933]/80">Registration</p>
            <h1 className="text-4xl font-semibold text-white">Choose the premium registration path that suits you</h1>
            <p className="max-w-3xl text-white/70 leading-8">
              Take the next step with a visitor, exhibitor, sponsor or workshop registration option designed for global commerce professionals.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Visitor', href: '/register/visitor' },
              { label: 'Exhibitor', href: '/register/exhibitor' },
              { label: 'Sponsor', href: '/register/sponsor' },
              { label: 'Workshop', href: '/register/workshop' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-3xl border border-white/10 bg-[#091723] px-6 py-6 text-white hover:bg-white/5 transition">
                <h2 className="text-xl font-semibold">{item.label}</h2>
                <p className="mt-2 text-sm text-white/70">Register under the package designed for your goals and market stage.</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
