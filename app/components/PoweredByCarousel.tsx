'use client';

const LOGOS = [
  { name: 'Python', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Google Sheets', src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_2020_Logo.svg' },
  { name: 'Excel', src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
  { name: 'Xero', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Xero_software_logo.svg' },
  { name: 'QuickBooks', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/QuickBooks_logo.svg' },
];

export function PoweredByCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-2" aria-label="Powered by">
      <div
        className="flex w-max animate-powered-by items-center shrink-0 gap-8 sm:gap-12"
        style={{ maxWidth: 'none' }}
      >
        {[1, 2, 3].map((set) => (
          <div key={set} className="flex items-center gap-8 sm:gap-12 shrink-0">
            {LOGOS.map((logo, i) => (
              <span key={`${set}-${logo.name}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
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
        ))}
      </div>
    </div>
  );
}
