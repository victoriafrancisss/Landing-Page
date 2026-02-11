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
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12" aria-label="Powered by">
      {LOGOS.map((logo, i) => (
        <span key={logo.name} className="flex items-center gap-8 sm:gap-12">
          <img
            src={logo.src}
            alt={logo.name}
            className="h-8 w-auto object-contain opacity-60 grayscale transition-all duration-300 ease-out hover:opacity-100 hover:grayscale-0"
            width={80}
            height={32}
          />
          {i < LOGOS.length - 1 && (
            <span className="w-px h-4 sm:h-5 bg-[#404040] flex-shrink-0" aria-hidden />
          )}
        </span>
      ))}
    </div>
  );
}
