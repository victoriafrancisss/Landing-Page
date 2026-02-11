'use client';

const BRANDS = ['Excel', 'Python', 'Google Sheets', 'Xero', 'QuickBooks'];

export function PoweredByCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-2" aria-label="Powered by">
      <div
        className="flex w-max animate-powered-by items-center shrink-0 gap-12 sm:gap-20"
        style={{ maxWidth: 'none' }}
      >
        {[1, 2, 3].map((set) => (
          <div key={set} className="flex items-center gap-12 sm:gap-20 shrink-0">
            {BRANDS.map((brand) => (
              <span
                key={`${set}-${brand}`}
                className="text-base sm:text-lg font-medium text-[#A1A1AA] whitespace-nowrap transition-all duration-300 ease-out hover:text-white hover:scale-105"
              >
                {brand}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
