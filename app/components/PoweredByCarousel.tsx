'use client';

const ICON_CLASS = "h-8 w-auto fill-current text-gray-500 transition-colors duration-300";

export function PoweredByCarousel() {
  const LogoSet = () => (
    <>
      {/* Python */}
      <div className="flex flex-col items-center gap-2 group cursor-default shrink-0">
        <svg role="img" viewBox="0 0 24 24" className={`${ICON_CLASS} group-hover:text-[#3776AB]`} xmlns="http://www.w3.org/2000/svg" aria-label="Python">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
        </svg>
        <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">Python</span>
      </div>

      <span className="w-px h-4 bg-[#404040] flex-shrink-0" aria-hidden />

      {/* Google Sheets */}
      <div className="flex flex-col items-center gap-2 group cursor-default shrink-0">
        <svg role="img" viewBox="0 0 24 24" className={`${ICON_CLASS} group-hover:text-[#34A853]`} xmlns="http://www.w3.org/2000/svg" aria-label="Google Sheets">
          <path d="M12.007 0H4.51c-.83 0-1.506.666-1.506 1.487V22.5c0 .83.666 1.5 1.506 1.5h15.003c.83 0 1.487-.67 1.487-1.5V6.763l-9.003-6.763zm-.745 9.01h6.75l-6.75-5.26v5.26zm6.735 9.75H6.002v-2.25h12.004v2.25zm-.008-3.75H6.002v-2.25h12.004v2.25zm0-3.75H6.002v-2.25h12.004v2.25z" />
        </svg>
        <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">Sheets</span>
      </div>

      <span className="w-px h-4 bg-[#404040] flex-shrink-0" aria-hidden />

      {/* Excel */}
      <div className="flex flex-col items-center gap-2 group cursor-default shrink-0">
        <svg role="img" viewBox="0 0 24 24" className={`${ICON_CLASS} group-hover:text-[#217346]`} xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Excel">
          <path d="M23 1.5l-13.68 2.65v15.7L23 22.5V1.5zM12.75 19l-4.58-2.6-1.57.85L5.75 19V5l.85 1.75 1.57.85 4.58-2.6v14zM10.83 8.78L9.4 11.2 11 13.5h-2.1l-1.05-1.7-1.05 1.7H4.7l1.6-2.3-1.45-2.42h2.1l.9 1.63.9-1.63h2.08z" />
        </svg>
        <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">Excel</span>
      </div>

      <span className="w-px h-4 bg-[#404040] flex-shrink-0" aria-hidden />

      {/* Xero */}
      <div className="flex flex-col items-center gap-2 group cursor-default shrink-0">
        <svg role="img" viewBox="0 0 24 24" className={`${ICON_CLASS} group-hover:text-[#13B5EA]`} xmlns="http://www.w3.org/2000/svg" aria-label="Xero">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.585 14.655c-1.485 0-2.69-1.206-2.69-2.689 0-1.485 1.207-2.691 2.69-2.691 1.485 0 2.69 1.207 2.69 2.691s-1.207 2.689-2.69 2.689zM7.53 14.644c-.099 0-.192-.041-.267-.116l-2.043-2.04-2.052 2.047c-.069.068-.16.108-.258.108-.202 0-.368-.166-.368-.368 0-.099.04-.191.111-.263l2.04-2.05-2.038-2.047c-.075-.069-.113-.162-.113-.261 0-.203.166-.366.368-.366.098 0 .188.037.258.105l2.055 2.048 2.048-2.045c.069-.071.162-.108.26-.108.211 0 .375.165.375.366 0 .098-.029.188-.104.258l-2.056 2.055 2.055 2.051c.068.069.104.16.104.258 0 .202-.165.368-.365.368h-.01zm8.017-4.591c-.796.101-.882.476-.882 1.404v2.787c0 .202-.165.366-.366.366-.203 0-.367-.165-.368-.366v-4.53c0-.204.16-.366.362-.366.166 0 .316.125.346.289.27-.209.6-.317.93-.317h.105c.195 0 .359.165.359.368 0 .201-.164.352-.375.359 0 0-.09 0-.164.008l.053-.002zm-3.091 2.205H8.625c0 .019.003.037.006.057.02.105.045.211.083.31.194.531.765 1.275 1.829 1.29.33-.003.631-.086.9-.229.21-.12.391-.271.525-.428.045-.058.09-.112.12-.168.18-.229.405-.186.54-.083.164.135.18.391.045.57l-.016.016c-.21.27-.435.495-.689.66-.255.164-.525.284-.811.345-.33.09-.645.104-.975.06-1.095-.135-2.01-.93-2.28-2.01-.06-.21-.09-.42-.09-.645 0-.855.421-1.695 1.125-2.205.885-.615 2.085-.66 3-.075.63.405 1.035 1.021 1.185 1.771.075.419-.21.794-.734.81l.068-.046zm6.129-2.223c-1.064 0-1.931.865-1.931 1.931 0 1.064.866 1.931 1.931 1.931s1.931-.867 1.931-1.931c0-1.065-.866-1.933-1.931-1.933v.002zm0 2.595c-.367 0-.666-.297-.666-.666 0-.367.3-.665.666-.665.367 0 .667.299.667.665 0 .369-.3.667-.667.666zm-8.04-2.603c-.91 0-1.672.623-1.886 1.466v.03h3.776c-.203-.855-.973-1.494-1.891-1.494v-.002z" />
        </svg>
        <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">Xero</span>
      </div>

      <span className="w-px h-4 bg-[#404040] flex-shrink-0" aria-hidden />

      {/* QuickBooks */}
      <div className="flex flex-col items-center gap-2 group cursor-default shrink-0">
        <svg role="img" viewBox="0 0 24 24" className={`${ICON_CLASS} group-hover:text-[#2CA01C]`} xmlns="http://www.w3.org/2000/svg" aria-label="QuickBooks">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z" />
        </svg>
        <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">QuickBooks</span>
      </div>
    </>
  );

  return (
    <div className="relative w-full overflow-hidden py-2" aria-label="Powered by">
      <div
        className="flex w-max animate-powered-by items-center shrink-0 gap-12"
        style={{ maxWidth: 'none' }}
      >
        {[1, 2, 3].map((set) => (
          <div key={set} className="flex items-center gap-12 shrink-0">
            <LogoSet />
          </div>
        ))}
      </div>
    </div>
  );
}
