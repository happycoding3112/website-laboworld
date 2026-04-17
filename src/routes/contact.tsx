import { createFileRoute } from "@tanstack/react-router";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import { useTheme } from "../hooks/useTheme";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { CONTACT, WEB3FORMS_ACCESS_KEY } from "../lib/constants";

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
const RATE_LIMIT_MS = 30_000; // 30 seconds between submissions

const contactInfo = [
  { icon: MapPin, label: "Address", value: CONTACT.address },
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: Mail, label: "Email", value: CONTACT.email },
  { icon: Clock, label: "Hours", value: CONTACT.hours },
];

function ContactPage() {
  useScrollAnimate();
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lastSubmitTime = useRef(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side rate limiting
    const now = Date.now();
    if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
      setError("Please wait before submitting again.");
      return;
    }

    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — if the hidden field is filled, it's a bot
    if (formData.get("botcheck")) {
      setSubmitted(true);
      setLoading(false);
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setError("Contact form is not configured. Please contact us via email.");
      setLoading(false);
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    // Build a descriptive email subject line
    const name = formData.get("name") || "Someone";
    const topic = formData.get("Inquiry Subject") || "General Inquiry";
    formData.append("subject", `Laboworld Inquiry: ${topic} — from ${name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setError(`Server error (${response.status}). Please try again later.`);
        return;
      }

      const result = await response.json();
      if (result.success) {
        lastSubmitTime.current = Date.now();
        console.log("Contact form submitted successfully:", result);
        setSubmitted(true);
        form.reset();
      } else {
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="scroll-animate mb-16 text-center">
          <h1 className="font-heading text-4xl font-extrabold heading-gradient md:text-5xl">
            Get In Touch
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

                {/* Honeypot field — hidden from real users, catches bots */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                {/* Web3Forms email customization */}
                <input type="hidden" name="from_name" value="Laboworld India Website" />
                <input type="hidden" name="replyto" value="email" />

                {error && (
                  <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                    <input
                      required
                      name="email"
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
                    name="Inquiry Subject"
                    type="text"
                    placeholder="Inquiry about..."
                    className="w-full rounded-lg border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Phone (optional)</label>
                  <input
                    name="Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-lg border border-border bg-input/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  {loading ? "Sending..." : "Send Message"}
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

            {/* Google Maps */}
            <div className="scroll-animate glass-card overflow-hidden rounded-xl">
              <iframe
                title="Laboworld India Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9104292545658!2d73.82590189999999!3d18.487716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5f3884d71d%3A0x83207133a4233cbc!2sLABOWORLD%20PRIVATE%20LIMITED%20(Dealers%20In%20Laboratory%20Chemicals%2C%20Instruments%2C%20Glassware%20and%20Consumables.!5e0!3m2!1sen!2sdk!4v1776386638754!5m2!1sen!2sdk"
                width="100%"
                height="220"
                style={{ border: 0, filter: theme === "dark" ? "invert(1) hue-rotate(180deg) contrast(0.9) brightness(0.9)" : "none" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
