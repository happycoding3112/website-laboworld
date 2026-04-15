import { createFileRoute } from "@tanstack/react-router";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import { FlaskConical, Microscope, TestTubes, Beaker, Scan, Wrench } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Services — Laboworld India" },
      { name: "description", content: "Browse laboratory chemicals, instruments, glassware, consumables, spectrophotometers, and repair services from Laboworld India." },
      { property: "og:title", content: "Products & Services — Laboworld India" },
      { property: "og:description", content: "Complete laboratory supply catalog — chemicals, instruments, glassware, consumables, and more." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    icon: FlaskConical,
    title: "Laboratory Chemicals",
    desc: "High-purity analytical and research-grade reagents, solvents, and acids from leading brands including Merck, SRL, Fisher Scientific, and Rankem.",
    items: ["Reagents & Solvents", "Acids & Bases", "Indicators", "Standards"],
  },
  {
    icon: Microscope,
    title: "Lab Instruments",
    desc: "Precision instruments for every laboratory need — from basic measurements to advanced analytical work.",
    items: ["pH Meters", "Balances", "Hot Plates", "Stirrers"],
  },
  {
    icon: TestTubes,
    title: "Glassware",
    desc: "Premium borosilicate glassware built to withstand rigorous laboratory conditions. Available in all standard sizes.",
    items: ["Beakers & Flasks", "Pipettes", "Burettes", "Condensers"],
  },
  {
    icon: Beaker,
    title: "Consumables",
    desc: "Essential lab consumables to keep your laboratory running smoothly and efficiently every day.",
    items: ["Filter Papers", "Gloves", "Petri Dishes", "Tubes"],
  },
  {
    icon: Scan,
    title: "Spectrophotometers",
    desc: "UV-Vis and specialty spectrophotometers for precise absorbance and transmittance measurements.",
    items: ["UV-Vis", "Single Beam", "Double Beam", "Accessories"],
  },
  {
    icon: Wrench,
    title: "Repair & Servicing",
    desc: "Expert repair and annual maintenance services for all major laboratory instrument brands.",
    items: ["Calibration", "AMC Plans", "On-Site Repair", "Spare Parts"],
  },
];

function ProductsPage() {
  useScrollAnimate();

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="scroll-animate mb-16 text-center">
          <h1 className="font-heading text-4xl font-extrabold text-foreground md:text-5xl">
            Our <span className="gradient-text">Products & Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything your laboratory needs — from basic consumables to advanced analytical instruments.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.title} className="scroll-animate glass-card group rounded-xl p-8">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <product.icon size={32} className="text-primary" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground">{product.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
