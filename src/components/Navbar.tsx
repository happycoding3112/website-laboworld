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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-3 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 md:px-5 ${
          scrolled
            ? "border-border bg-background/88 shadow-lg shadow-foreground/5 backdrop-blur-xl"
            : "border-white/10 bg-background/48 backdrop-blur-md"
        }`}
      >
        <Link to="/" className="group flex items-center gap-3" aria-label="Laboworld home">
          <img
            src="/laboworld-logo.jpeg"
            alt="Laboworld Logo"
            className="h-11 w-auto rounded-md ring-1 ring-border transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-heading text-xl font-bold tracking-tight leading-none">
            <span className="text-primary">LABO</span><span className="text-accent">WORLD</span>
            <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">India</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-foreground/78 transition-all hover:bg-primary/10 hover:text-primary"
              activeProps={{ className: "!text-primary bg-primary/10 shadow-sm shadow-primary/10" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/15 transition-all hover:-translate-y-0.5 hover:brightness-110"
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
            className="rounded-lg border border-border bg-background/70 p-2 text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-lg border border-border bg-background/94 shadow-xl shadow-foreground/10 backdrop-blur-xl md:hidden">
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
              className="mt-2 rounded-lg bg-accent px-5 py-3 text-center text-base font-semibold text-accent-foreground shadow-lg shadow-accent/15"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
