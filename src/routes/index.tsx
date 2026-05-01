import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Beaker,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  FlaskConical,
  HelpCircle,
  Microscope,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  TestTubes,
  Truck,
} from "lucide-react";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { FloatingAtoms3D } from "../components/FloatingAtoms3D";
import { LabShowcase3D } from "../components/LabShowcase3D";
import { Molecule3D } from "../components/Molecule3D";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const heroSignals = [
  { label: "Products", value: "500+", detail: "chemicals, instruments, and supplies" },
  { label: "Clients", value: "200+", detail: "research, education, and industry" },
  { label: "Brands", value: "50+", detail: "trusted manufacturers" },
];

const supplyMetrics = [
  { label: "Chemicals", value: "92%", width: "92%" },
  { label: "Glassware", value: "86%", width: "86%" },
  { label: "Instruments", value: "78%", width: "78%" },
];

const stats = [
  { value: "500+", label: "Products" },
  { value: "200+", label: "Clients" },
  { value: "50+", label: "Brands" },
  { value: "5+", label: "Years" },
];

const offerings = [
  {
    icon: FlaskConical,
    title: "Lab Chemicals",
    desc: "Analytical & research-grade reagents from top brands.",
    meta: "Reagents, solvents, acids",
  },
  {
    icon: Microscope,
    title: "Instruments",
    desc: "Precision lab instruments for accurate measurements.",
    meta: "Meters, balances, hot plates",
  },
  {
    icon: TestTubes,
    title: "Glassware",
    desc: "Borosilicate glassware - beakers, flasks, pipettes & more.",
    meta: "Beakers, flasks, pipettes",
  },
  {
    icon: Beaker,
    title: "Consumables",
    desc: "Essential lab consumables to keep your laboratory running smoothly.",
    meta: "Filters, gloves, tubes",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Share Requirements",
    text: "Tell us what products, grades, quantities, or instruments your laboratory needs.",
  },
  {
    icon: ShieldCheck,
    title: "Get Product Options",
    text: "We help match your requirement with suitable brands, pack sizes, and availability.",
  },
  {
    icon: PackageCheck,
    title: "Order Preparation",
    text: "Products are prepared with proper handling for chemicals, glassware, and sensitive equipment.",
  },
  {
    icon: Truck,
    title: "Delivery Support",
    text: "We coordinate timely delivery and support for laboratories across India.",
  },
];

const qualitySignals = [
  "Genuine products from trusted sources",
  "Bulk orders for institutions",
  "Repair and servicing support",
  "Competitive pricing",
  "Quality assurance documents",
  "Responsive customer service",
];

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Research Scientist",
    text: "Laboworld has been our trusted partner for lab supplies. Consistent quality and timely delivery every time.",
  },
  {
    name: "Priya Mehta",
    role: "Lab Manager, Pharma Co.",
    text: "Excellent range of chemicals and glassware. Their team is always helpful and responsive to our specific requirements.",
  },
  {
    name: "Amit Patel",
    role: "Quality Control Head",
    text: "We've been sourcing from Laboworld for 3 years. Competitive pricing and genuine products - highly recommended.",
  },
];

const faqs = [
  {
    question: "What types of laboratory products do you supply?",
    answer:
      "We offer a comprehensive range including laboratory chemicals, analytical instruments, precision glassware, consumables, safety equipment, and much more. Our catalog covers everything from basic lab essentials to specialized research equipment.",
  },
  {
    question: "Do you provide bulk orders for institutions?",
    answer:
      "Yes, we specialize in bulk orders for universities, hospitals, research institutions, and industrial laboratories. We offer competitive pricing and customized solutions for large-scale requirements.",
  },
  {
    question: "What is your delivery coverage?",
    answer:
      "We provide pan-India delivery to all major cities and towns. Our logistics network ensures safe and timely delivery of orders with proper handling of laboratory equipment and chemicals.",
  },
  {
    question: "Are your products certified and genuine?",
    answer:
      "Absolutely. We only source from authorized manufacturers and distributors. Our products come with proper certifications, quality assurance documents, and manufacturer warranties where applicable.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can request a quote by filling out our contact form, emailing us, or calling our sales team. Please provide details about your requirements, and we'll respond with a customized quote.",
  },
];

function HomePage() {
  useScrollAnimate();

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[92svh] overflow-hidden pb-16 pt-40 md:pt-44 lg:pb-20 lg:pt-44">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background-img.jpeg')" }}
        />
        <div className="hero-scrim absolute inset-0" />
        <LabShowcase3D className="pointer-events-none absolute inset-y-0 right-[-42%] z-0 w-[145%] opacity-60 sm:right-[-32%] md:right-[-24%] lg:right-[-14%] lg:w-[72%] lg:opacity-70" />
        <div className="lab-grid-mask absolute inset-0 z-0" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(340px,0.96fr)] lg:items-center">
          <div className="max-w-3xl">
            <div className="hero-enter inline-flex items-center gap-3 rounded-lg border border-primary/25 bg-background/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-md">
              <span className="signal-dot" />
              Trusted Laboratory Partner Since 2020
            </div>

            <h1 className="hero-enter hero-enter-delay-1 mt-7 font-heading text-4xl font-extrabold leading-[1.02] tracking-tight heading-gradient md:text-6xl lg:text-7xl">
              Your Complete Laboratory Solutions Provider
            </h1>

            <p className="hero-enter hero-enter-delay-2 mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              High-quality chemicals, precision instruments, glassware, and consumables - everything your laboratory needs, delivered with excellence.
            </p>

            <div className="hero-enter hero-enter-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/45 bg-accent/10 px-7 py-4 text-base font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/18"
              >
                Get a Quote
                <Sparkles size={18} />
              </Link>
            </div>

            <div className="hero-enter hero-enter-delay-3 mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div key={signal.label} className="rounded-lg border border-border bg-background/58 p-4 shadow-sm backdrop-blur-md">
                  <div className="font-heading text-2xl font-extrabold text-foreground">{signal.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{signal.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{signal.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-enter hero-enter-delay-2 glass-card scan-beam rounded-lg p-5 md:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Lab Supply Snapshot</p>
                <h2 className="mt-1 font-heading text-2xl font-bold text-foreground">Product Availability</h2>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-3 text-primary">
                <Microscope size={24} />
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {supplyMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{metric.label}</span>
                    <span className="text-muted-foreground">{metric.value}</span>
                  </div>
                  <div className="metric-bar">
                    <span style={{ width: metric.width }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-background/42 p-4">
                <div className="text-2xl font-extrabold text-accent">24h</div>
                <div className="mt-1 text-xs text-muted-foreground">Quote response target</div>
              </div>
              <div className="rounded-lg border border-border bg-background/42 p-4">
                <div className="text-2xl font-extrabold text-primary">India</div>
                <div className="mt-1 text-xs text-muted-foreground">Delivery coverage</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 animate-scroll-bounce">
          <ChevronDown size={28} className="text-muted-foreground" />
        </div>
      </section>

      <section className="relative border-y border-border bg-card/60 py-8 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="scroll-animate rounded-lg border border-border bg-background/46 px-4 py-5 text-center" style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="font-heading text-3xl font-extrabold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <FloatingAtoms3D className="pointer-events-none absolute inset-0 z-0 opacity-45" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="scroll-animate mb-14 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <FlaskConical size={16} />
              Products & Services
            </div>
            <h2 className="font-heading text-3xl font-bold heading-gradient md:text-5xl">What We Offer</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Comprehensive laboratory solutions from chemicals to precision instruments.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item, index) => (
              <div key={item.title} className="scroll-animate glass-card product-card rounded-lg p-7" style={{ transitionDelay: `${index * 85}ms` }}>
                <div className="product-icon mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <item.icon size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                <div className="mt-5 rounded-lg border border-border bg-secondary/40 px-3 py-2 text-xs font-medium text-muted-foreground">
                  {item.meta}
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate mt-12 flex justify-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-5 py-3 font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/15">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band relative overflow-hidden border-y border-border py-24">
        <div className="lab-grid-mask absolute inset-0" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="scroll-animate relative min-h-[360px] overflow-hidden rounded-lg border border-border bg-background/30 lg:min-h-[460px]">
            <LabShowcase3D className="absolute inset-0" variant="panel" />
          </div>

          <div>
            <div className="scroll-animate mb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                <ClipboardCheck size={16} />
                Procurement Flow
              </div>
              <h2 className="font-heading text-3xl font-bold heading-gradient md:text-5xl">From Inquiry to Delivery</h2>
              <p className="mt-4 text-muted-foreground">
                We help laboratories source the right products with clear communication and dependable delivery support.
              </p>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="scroll-animate glass-card process-card rounded-lg p-5" style={{ transitionDelay: `${index * 85}ms` }}>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <step.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="scroll-animate lg:sticky lg:top-28">
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <ShieldCheck size={16} />
                Why Choose Us
              </div>
              <h2 className="font-heading text-3xl font-bold heading-gradient md:text-5xl">Quality, Reliability, Trust</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                We are committed to genuine products, competitive pricing, and exceptional customer service for every laboratory we support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {qualitySignals.map((signal, index) => (
                <div key={signal} className="scroll-animate glass-card rounded-lg p-5" style={{ transitionDelay: `${index * 65}ms` }}>
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <CircleCheck size={20} />
                  </div>
                  <p className="font-medium text-foreground">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="scroll-animate mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold heading-gradient md:text-5xl">Client Testimonials</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Trusted by laboratories, research teams, and quality control departments.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="scroll-animate glass-card rounded-lg p-7" style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm leading-6 text-muted-foreground">"{testimonial.text}"</p>
                <div className="mt-6 border-t border-border pt-5">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="scroll-animate mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <HelpCircle size={16} />
              FAQ
            </div>
            <h2 className="font-heading text-3xl font-bold heading-gradient md:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Find answers to common questions about our products and services.</p>
          </div>

          <Accordion type="single" collapsible className="scroll-animate space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="glass-card rounded-lg border-none px-6">
                <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24">
        <Molecule3D className="pointer-events-none absolute inset-0 z-0 opacity-25" />
        <div className="lab-grid-mask absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="scroll-animate inline-flex items-center gap-2 rounded-lg border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            <Sparkles size={16} />
            Get Started
          </div>
          <h2 className="scroll-animate mt-6 font-heading text-3xl font-bold heading-gradient md:text-5xl">Ready to Get Started?</h2>
          <p className="scroll-animate mx-auto mt-4 max-w-2xl text-muted-foreground">
            Contact us today for a custom quote or to learn more about our products and services.
          </p>
          <div className="scroll-animate mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-xl shadow-accent/20 transition-all hover:-translate-y-0.5 hover:brightness-110">
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-8 py-4 font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/15">
              Browse Catalog <FlaskConical size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
