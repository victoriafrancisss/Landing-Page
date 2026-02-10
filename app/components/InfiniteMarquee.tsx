'use client';

const LOGOS = [
  { name: 'Python', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Excel', src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
  { name: 'Google Sheets', src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_2020_Logo.svg' },
  { name: 'SQL', src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
  { name: 'Stripe', src: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
] as const;

export function InfiniteMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-[#262626] py-6 bg-[#050505]" aria-label="Technologies we work with">
      <div className="flex w-max animate-marquee items-center gap-16 px-4">
        {[1, 2].map((set) => (
          <div key={set} className="flex items-center gap-16 shrink-0">
            {LOGOS.map((logo) => (
              <div
                key={`${set}-${logo.name}`}
                className="group flex items-center justify-center transition-all duration-300"
                role="img"
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt=""
                  className="h-8 w-auto object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 sm:h-9 md:h-10"
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
