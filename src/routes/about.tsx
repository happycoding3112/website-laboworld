import { createFileRoute } from "@tanstack/react-router";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import { Eye, Target, Lightbulb, Users, Package, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Laboworld India" },
      { name: "description", content: "Learn about Laboworld India — supplying quality lab chemicals, instruments, and consumables since 2020. 500+ products, 200+ clients, 50+ brands." },
      { property: "og:title", content: "About Us — Laboworld India" },
      { property: "og:description", content: "Our story, mission, and commitment to quality laboratory supply since 2020." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useScrollAnimate();

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="scroll-animate mb-16 text-center">
          <h1 className="font-heading text-4xl font-extrabold heading-gradient md:text-5xl">
            About Laboworld
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Your trusted partner for laboratory supplies, committed to quality and reliability.
          </p>
        </div>

        {/* Story */}
        <div className="scroll-animate glass-card mx-auto mb-20 max-w-4xl rounded-2xl p-10">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Established in <strong className="text-primary">2020</strong>, Laboworld India was founded with a vision to
            become the most reliable and comprehensive laboratory supply partner in India. We understand
            the critical importance of quality in laboratory work, which is why we source only from
            trusted manufacturers and brands.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From analytical reagents to precision instruments, we provide everything a modern laboratory
            needs. Our commitment to competitive pricing, genuine products, and exceptional customer
            service has earned us the trust of over 200 clients across research labs, educational
            institutions, and pharmaceutical companies.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { icon: Package, value: "500+", label: "Products", color: "text-primary" },
            { icon: Users, value: "200+", label: "Happy Clients", color: "text-accent" },
            { icon: Award, value: "50+", label: "Trusted Brands", color: "text-primary" },
            { icon: Target, value: "5+", label: "Years of Service", color: "text-accent" },
          ].map((stat) => (
            <div key={stat.label} className="scroll-animate glass-card rounded-xl p-6 text-center">
              <stat.icon size={28} className={`mx-auto mb-3 ${stat.color}`} />
              <div className="font-heading text-3xl font-extrabold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision / Mission / Motto */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Eye,
              title: "Our Vision",
              text: "To be the most trusted and accessible laboratory supply company in India, empowering scientific progress through quality products and services.",
            },
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide the highest quality laboratory chemicals, instruments, and consumables at competitive prices with exceptional customer service and timely delivery.",
            },
            {
              icon: Lightbulb,
              title: "Our Motto",
              text: "Quality. Reliability. Trust. — Three pillars that guide every decision we make and every product we supply to our valued clients.",
            },
          ].map((card) => (
            <div key={card.title} className="scroll-animate glass-card rounded-xl p-8 text-center">
              <div className="mx-auto mb-5 inline-flex rounded-xl bg-primary/10 p-4">
                <card.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
