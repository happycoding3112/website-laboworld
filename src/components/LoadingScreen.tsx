export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center text-center">
        {/* Wordmark with shimmer */}
        <h1 className="font-heading text-5xl font-bold mb-12 heading-shimmer">
          LABOWORLD
        </h1>

        {/* Beaker loader */}
        <div className="beaker-loader">
          <svg viewBox="0 0 100 120" width="80" height="96" fill="none">
            {/* Beaker outline */}
            <path
              d="M 30 15 L 30 45 L 15 100 Q 15 110 25 110 L 75 110 Q 85 110 85 100 L 70 45 L 70 15"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
              className="text-foreground/70"
            />
            <line x1="25" y1="15" x2="75" y2="15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/70" />

            {/* Liquid (clipped) */}
            <defs>
              <clipPath id="beaker-clip">
                <path d="M 30 45 L 17 100 Q 17 108 25 108 L 75 108 Q 83 108 83 100 L 70 45 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#beaker-clip)">
              <rect x="10" y="55" width="80" height="60" className="beaker-liquid" />
              {/* Bubbles */}
              <circle cx="35" cy="100" r="3" className="bubble bubble-1" />
              <circle cx="50" cy="100" r="2" className="bubble bubble-2" />
              <circle cx="62" cy="100" r="2.5" className="bubble bubble-3" />
              <circle cx="42" cy="100" r="1.5" className="bubble bubble-4" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
