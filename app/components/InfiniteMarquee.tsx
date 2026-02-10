'use client';

const LOGOS = [
  { name: 'Excel', src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
  { name: 'Python', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Google Sheets', src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_2020_Logo.svg' },
  { name: 'QuickBooks', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/QuickBooks_logo.svg' },
  { name: 'Xero', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Xero_software_logo.svg' },
  { name: 'SQL', src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
] as const;

export function InfiniteMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-[#262626] py-6 bg-[#050505]" aria-label="Finance stack we work with">
      <div className="flex w-max animate-marquee items-center gap-12 shrink-0 px-4">
        {[1, 2].map((set) => (
          <div key={set} className="flex items-center gap-12 shrink-0">
            {LOGOS.map((logo) => (
              <div
                key={`${set}-${logo.name}`}
                className="group flex h-12 shrink-0 items-center justify-center transition-all duration-300"
                role="img"
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt=""
                  className="h-12 w-auto max-w-[120px] object-contain object-center grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  width={120}
                  height={48}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
