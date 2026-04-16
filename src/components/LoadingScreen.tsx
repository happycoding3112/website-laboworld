export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-heading text-5xl font-bold mb-12 heading-shimmer tracking-tight">
          LABOWORLD
        </h1>

        {/* Atom orbit loader */}
        <div className="atom-loader" aria-label="Loading">
          <div className="atom-nucleus" />
          <div className="atom-orbit atom-orbit-1">
            <span className="atom-electron" />
          </div>
          <div className="atom-orbit atom-orbit-2">
            <span className="atom-electron" />
          </div>
          <div className="atom-orbit atom-orbit-3">
            <span className="atom-electron" />
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground tracking-widest uppercase">
          Preparing your lab
        </p>
      </div>
    </div>
  );
}
