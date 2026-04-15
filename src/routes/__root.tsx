import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LoadingScreen } from "../components/LoadingScreen";
import { ThemeProvider } from "../hooks/useTheme";

import appCss from "../styles.css?url";

const fontsCss = "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary font-heading">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Laboworld India — Laboratory Chemicals & Instruments" },
      { name: "description", content: "Supplying high-quality laboratory chemicals, instruments, glassware, and consumables across India since 2020." },
      { property: "og:title", content: "Laboworld India — Laboratory Chemicals & Instruments" },
      { property: "og:description", content: "Supplying high-quality laboratory chemicals, instruments, glassware, and consumables across India since 2020." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Laboworld India — Laboratory Chemicals & Instruments" },
      { name: "twitter:description", content: "Supplying high-quality laboratory chemicals, instruments, glassware, and consumables across India since 2020." },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", href: "/laboworld-logo.jpeg", type: "image/jpeg" },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: fontsCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
