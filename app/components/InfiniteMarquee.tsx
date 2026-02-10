'use client';

const LOGOS = [
  { name: 'Python', slug: 'python' },
  { name: 'Excel', slug: 'microsoftexcel' },
  { name: 'SQL', slug: 'mysql' },
  { name: 'Google Sheets', slug: 'googlesheets' },
  { name: 'Stripe', slug: 'stripe' },
] as const;

const CDN_BASE = 'https://cdn.simpleicons.org';

export function InfiniteMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-[#262626] py-6 bg-[#050505]" aria-label="Technologies we work with">
      <div className="flex w-max animate-marquee items-center gap-16 px-4">
        {[1, 2].map((set) => (
          <div key={set} className="flex items-center gap-16 shrink-0">
            {LOGOS.map((logo) => (
              <div
                key={`${set}-${logo.slug}`}
                className="group flex items-center justify-center transition-all duration-300"
                role="img"
                aria-label={logo.name}
              >
                <img
                  src={`${CDN_BASE}/${logo.slug}/71717A`}
                  alt=""
                  className="h-8 w-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert sm:h-9 md:h-10"
                  width={120}
                  height={40}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
