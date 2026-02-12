'use client';

const LOGOS = [
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Google Sheets', inline: true },
  { name: 'Excel', inline: true },
  { name: 'Xero', src: 'https://cdn.worldvectorlogo.com/logos/xero-1.svg' },
  { name: 'QuickBooks', src: 'https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg' },
];

const ICON_CLASS = "h-8 w-auto object-contain opacity-50 grayscale transition-all duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0";

function LogoIcon({ logo }: { logo: (typeof LOGOS)[0] }) {
  if (logo.name === 'Google Sheets') {
    return (
      <svg role="img" viewBox="0 0 24 24" className={ICON_CLASS} xmlns="http://www.w3.org/2000/svg" aria-label="Google Sheets">
        <path d="M12.007 0H4.51c-.83 0-1.506.666-1.506 1.487V22.5c0 .83.666 1.5 1.506 1.5h15.003c.83 0 1.487-.67 1.487-1.5V6.763l-9.003-6.763zm-.745 9.01h6.75l-6.75-5.26v5.26zm6.735 9.75H6.002v-2.25h12.004v2.25zm-.008-3.75H6.002v-2.25h12.004v2.25zm0-3.75H6.002v-2.25h12.004v2.25z" fill="#34A853" />
      </svg>
    );
  }
  if (logo.name === 'Excel') {
    return (
      <svg role="img" viewBox="0 0 24 24" className={ICON_CLASS} xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Excel">
        <path d="M23 1.5l-13.68 2.65v15.7L23 22.5V1.5zM12.75 19l-4.58-2.6-1.57.85L5.75 19V5l.85 1.75 1.57.85 4.58-2.6v14zM10.83 8.78L9.4 11.2 11 13.5h-2.1l-1.05-1.7-1.05 1.7H4.7l1.6-2.3-1.45-2.42h2.1l.9 1.63.9-1.63h2.08z" fill="#217346" />
      </svg>
    );
  }
  return (
    <img
      src={logo.src!}
      alt={logo.name}
      className={ICON_CLASS}
      width={80}
      height={32}
    />
  );
}

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
                  <LogoIcon logo={logo} />
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
