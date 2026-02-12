'use client';

const LOGOS = [
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Google Sheets', src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_2020_Logo.svg' },
  { name: 'Excel', src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
  { name: 'Xero', src: 'https://cdn.worldvectorlogo.com/logos/xero-1.svg' },
  { name: 'QuickBooks', src: 'https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg' },
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
                <div className="group flex flex-col items-center gap-3 cursor-default">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 w-auto object-contain opacity-50 transition-opacity duration-300 ease-out group-hover:opacity-100"
                    width={80}
                    height={32}
                  />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600 transition-colors duration-300 ease-out group-hover:text-white">
                    {logo.name}
                  </span>
                </div>
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
