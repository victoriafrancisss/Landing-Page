'use client';

const LOGOS = [
  { name: 'Python', src: 'https://cdn.simpleicons.org/python' },
  { name: 'Google Sheets', src: 'https://cdn.simpleicons.org/googlesheets' },
  { name: 'Excel', src: 'https://cdn.simpleicons.org/microsoftexcel' },
  { name: 'Xero', src: 'https://cdn.simpleicons.org/xero' },
  { name: 'QuickBooks', src: 'https://cdn.simpleicons.org/quickbooks' },
];

export function PoweredByCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-2" aria-label="Powered by">
      <div
        className="flex w-max animate-powered-by items-center shrink-0 gap-12"
        style={{ maxWidth: 'none' }}
      >
        {[1, 2, 3].map((set) => (
          <div key={set} className="flex items-center gap-12 shrink-0">
            {LOGOS.map((logo, i) => (
              <span key={`${set}-${logo.name}`} className="flex items-center gap-12 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto object-contain opacity-50 grayscale brightness-150 transition-all duration-300 ease-out hover:opacity-100 hover:grayscale-0 hover:brightness-100"
                  width={80}
                  height={32}
                />
                {i < LOGOS.length - 1 && (
                  <span className="w-px h-4 bg-[#404040] flex-shrink-0" aria-hidden />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
