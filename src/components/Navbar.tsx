import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/products" as const, label: "Products" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/laboworld-logo.jpeg"
            alt="Laboworld Logo"
            className="h-12 w-auto rounded"
          />
          <span className="font-heading text-xl font-bold tracking-tight">
            <span className="text-primary">LABO</span><span className="text-accent">WORLD</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
              activeProps={{ className: "!text-primary bg-primary/10" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
          >
            Get Quote
          </Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/98 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                activeProps={{ className: "!text-primary bg-primary/10" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-lg bg-accent px-5 py-3 text-center text-base font-semibold text-accent-foreground"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
