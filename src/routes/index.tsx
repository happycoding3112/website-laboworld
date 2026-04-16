import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import { FlaskConical, Microscope, TestTubes, ChevronDown, ArrowRight, Star, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Molecule3D } from "../components/Molecule3D";
import { FloatingAtoms3D } from "../components/FloatingAtoms3D";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  useScrollAnimate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background-img.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        {/* Ambient 3D molecule centerpiece */}
        <Molecule3D className="absolute inset-0 z-0 opacity-70 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <FlaskConical size={16} />
            Trusted Laboratory Partner Since 2020
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight heading-gradient md:text-6xl lg:text-7xl">
            Your Complete Laboratory Solutions Provider
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            High-quality chemicals, precision instruments, glassware, and consumables — 
            everything your laboratory needs, delivered with excellence.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-primary/25 hover:shadow-xl"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/50 bg-accent/10 px-8 py-4 text-base font-semibold text-accent transition-all hover:bg-accent/20"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce z-10">
          <ChevronDown size={28} className="text-muted-foreground" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card/50 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { value: "500+", label: "Products" },
            { value: "200+", label: "Clients" },
            { value: "50+", label: "Brands" },
            { value: "5+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label} className="scroll-animate text-center">
              <div className="font-heading text-3xl font-extrabold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="relative py-24 overflow-hidden">
        <FloatingAtoms3D className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="scroll-animate mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold heading-gradient md:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Comprehensive laboratory solutions from chemicals to precision instruments.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FlaskConical, title: "Lab Chemicals", desc: "Analytical & research-grade reagents from top brands." },
              { icon: Microscope, title: "Instruments", desc: "Precision lab instruments for accurate measurements." },
              { icon: TestTubes, title: "Glassware", desc: "Borosilicate glassware — beakers, flasks, pipettes & more." },
            ].map((item) => (
              <div key={item.title} className="scroll-animate glass-card rounded-xl p-8">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="scroll-animate mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="scroll-animate mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold heading-gradient md:text-4xl">
              Client Testimonials
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Dr. Rajesh Sharma", role: "Research Scientist", text: "Laboworld has been our trusted partner for lab supplies. Consistent quality and timely delivery every time." },
              { name: "Priya Mehta", role: "Lab Manager, Pharma Co.", text: "Excellent range of chemicals and glassware. Their team is always helpful and responsive to our specific requirements." },
              { name: "Amit Patel", role: "Quality Control Head", text: "We've been sourcing from Laboworld for 3 years. Competitive pricing and genuine products — highly recommended." },
            ].map((t) => (
              <div key={t.name} className="scroll-animate glass-card rounded-xl p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="scroll-animate mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <HelpCircle size={16} />
              FAQ
            </div>
            <h2 className="font-heading text-3xl font-bold heading-gradient md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <Accordion type="single" collapsible className="scroll-animate space-y-4">
            {[
              {
                question: "What types of laboratory products do you supply?",
                answer: "We offer a comprehensive range including laboratory chemicals, analytical instruments, precision glassware, consumables, safety equipment, and much more. Our catalog covers everything from basic lab essentials to specialized research equipment."
              },
              {
                question: "Do you provide bulk orders for institutions?",
                answer: "Yes, we specialize in bulk orders for universities, hospitals, research institutions, and industrial laboratories. We offer competitive pricing and customized solutions for large-scale requirements."
              },
              {
                question: "What is your delivery coverage?",
                answer: "We provide pan-India delivery to all major cities and towns. Our logistics network ensures safe and timely delivery of your orders with proper handling of sensitive laboratory equipment and chemicals."
              },
              {
                question: "Are your products certified and genuine?",
                answer: "Absolutely. We only source from authorized manufacturers and distributors. All our products come with proper certifications, quality assurance documents, and manufacturer warranties where applicable."
              },
              {
                question: "How can I request a quote?",
                answer: "You can request a quote by filling out our contact form, emailing us at info@laboworld.in, or calling our sales team. Please provide details about your requirements, and we'll respond with a customized quote within 24 hours."
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <Molecule3D className="absolute inset-0 z-0 opacity-25 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="scroll-animate glass-card rounded-2xl p-12">
            <h2 className="font-heading text-3xl font-bold heading-gradient md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Contact us today for a custom quote or to learn more about our products and services.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:brightness-110"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
