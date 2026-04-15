import { createFileRoute } from "@tanstack/react-router";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Laboworld India" },
      { name: "description", content: "Get in touch with Laboworld India for laboratory chemical and instrument inquiries. Located in Nallasopara, Maharashtra." },
      { property: "og:title", content: "Contact Us — Laboworld India" },
      { property: "og:description", content: "Reach out for quotes, product inquiries, or support. We're here to help." },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Shop No. 1, Sai Siddhi, Nallasopara (W), Palghar, Maharashtra, India – 401203" },
  { icon: Phone, label: "Phone", value: "+91 93269 XXXXX" },
  { icon: Mail, label: "Email", value: "laboworldindia@gmail.com" },
  { icon: Clock, label: "Hours", value: "Monday – Saturday: 9:00 AM – 7:00 PM" },
];

function ContactPage() {
  useScrollAnimate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="scroll-animate mb-16 text-center">
          <h1 className="font-heading text-4xl font-extrabold text-foreground md:text-5xl">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Have a question or need a quote? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="scroll-animate glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                  <Send size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">Send us a Message</h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="Inquiry about..."
                    className="w-full rounded-lg border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-lg border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="scroll-animate glass-card flex items-start gap-4 rounded-xl p-6">
                <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                  <info.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                    {info.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="scroll-animate glass-card flex h-48 items-center justify-center rounded-xl">
              <div className="text-center text-muted-foreground">
                <MapPin size={32} className="mx-auto mb-2 text-primary/50" />
                <p className="text-sm">Nallasopara (W), Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
