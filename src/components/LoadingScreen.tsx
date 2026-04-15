export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center text-center">
        {/* Logo Text */}
        <h1 className="font-heading text-5xl font-bold mb-10 animate-pulse-text">
          <span className="text-primary">LABO</span>
          <span className="text-accent">WORLD</span>
        </h1>

        {/* Dual-ring Spinner */}
        <div className="loader-spinner" />
      </div>
    </div>
  );
}
