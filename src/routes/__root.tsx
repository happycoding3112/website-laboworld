import { useState } from "react";
import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

import appCss from "../styles.css?url";

const navLinks = [
  { to: "/" as const, label: "Home", emoji: "🏠" },
  { to: "/about" as const, label: "About", emoji: "👋" },
  { to: "/projects" as const, label: "Projects", emoji: "🚀" },
  { to: "/contact" as const, label: "Contact", emoji: "✉️" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-extrabold gradient-text">
          {"<Dev />"}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-primary/10 text-primary" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground hover:bg-muted" }}
                className="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
              >
                <span className="mr-1.5">{link.emoji}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "bg-primary/10 text-primary" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mr-2">{link.emoji}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevPortfolio. Built with 💜
        </p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-fun-purple" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-fun-cyan" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-fun-pink" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-extrabold gradient-text">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Oops! This page ran away 🏃‍♂️
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DevPortfolio — Developer & Engineer" },
      { name: "description", content: "A colorful developer portfolio showcasing projects, skills, and experience." },
      { name: "author", content: "Developer" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" },
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
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
