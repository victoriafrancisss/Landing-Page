'use client';

const LOGOS = [
  { name: 'Excel', src: '/logos/excel.svg' },
  { name: 'Python', src: '/logos/python.svg' },
  { name: 'Google Sheets', src: '/logos/google-sheets.svg' },
  { name: 'Xero', src: '/logos/xero.svg' },
  { name: 'QuickBooks', src: '/logos/quickbooks.svg' },
];

export function PoweredByCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-2" aria-label="Powered by">
      <div
        className="flex w-max animate-powered-by items-center shrink-0 gap-12 sm:gap-20"
        style={{ maxWidth: 'none' }}
      >
        {[1, 2, 3].map((set) => (
          <div key={set} className="flex items-center gap-12 sm:gap-20 shrink-0">
            {LOGOS.map((logo) => (
              <div
                key={`${set}-${logo.name}`}
                className="flex h-14 w-28 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-110 hover:opacity-100 opacity-85"
                role="img"
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt=""
                  className="h-12 w-24 object-contain object-center"
                  width={96}
                  height={48}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
