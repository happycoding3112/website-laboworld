import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT } from "../lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/laboworld-logo.jpeg" alt="Laboworld" className="h-10 w-auto rounded" />
              <span className="font-heading text-lg font-bold text-foreground">LABOWORLD</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Supplying high-quality laboratory chemicals, instruments, and consumables since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/products" as const, label: "Products" },
                { to: "/about" as const, label: "About Us" },
                { to: "/contact" as const, label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              Products
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Laboratory Chemicals</span>
              <span>Instruments</span>
              <span>Glassware</span>
              <span>Consumables</span>
              <span>Spectrophotometers</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary" />
                <span>{CONTACT.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary" />
                <span>{CONTACT.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-primary" />
                <span>{CONTACT.hoursShort}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Laboworld India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
