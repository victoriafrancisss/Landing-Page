'use client';

const LOGOS = [
  { name: 'Excel', src: 'https://www.vectorlogo.zone/logos/microsoft_excel/microsoft_excel-icon.svg' },
  { name: 'Google Sheets', src: 'https://www.vectorlogo.zone/logos/google_sheets/google_sheets-icon.svg' },
  { name: 'Python', src: 'https://www.vectorlogo.zone/logos/python/python-icon.svg' },
  { name: 'Xero', src: 'https://www.vectorlogo.zone/logos/xero/xero-icon.svg' },
  { name: 'QuickBooks', src: 'https://cdn.worldvectorlogo.com/logos/quickbooks.svg' },
] as const;

export function InfiniteMarquee() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-[#262626] py-6 bg-[#050505]"
      aria-label="Finance stack we work with"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee items-center shrink-0 px-4">
        {[1, 2].map((set) => (
          <div key={set} className="flex items-center gap-8 shrink-0">
            {LOGOS.map((logo) => (
              <div
                key={`${set}-${logo.name}`}
                className="group flex h-[35px] shrink-0 items-center justify-center transition-all duration-300"
                role="img"
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt=""
                  className="h-[35px] w-auto max-w-[100px] object-contain object-center opacity-50 transition-all duration-300 group-hover:opacity-100"
                  style={{ height: 35, width: 'auto', objectFit: 'contain' }}
                  width={100}
                  height={35}
                  onError={(e) => {
                    e.currentTarget.style.visibility = 'hidden';
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
