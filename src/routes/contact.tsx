import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DevPortfolio" },
      { name: "description", content: "Want to work together? Drop me a message and let's chat!" },
      { property: "og:title", content: "Contact — DevPortfolio" },
      { property: "og:description", content: "Want to work together? Drop me a message and let's chat!" },
    ],
  }),
  component: ContactPage,
});

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-fun-cyan" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-fun-pink" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", color: "hover:text-fun-purple" },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I'd love to hear from you! 💌
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-5">
        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:col-span-3">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-5xl">🎉</div>
              <h2 className="mt-4 text-xl font-bold">Message sent!</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks for reaching out. I'll get back to you soon!
              </p>
              <Button
                variant="outline"
                className="mt-6 rounded-xl"
                onClick={() => setSubmitted(false)}
              >
                Send another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                  className="mt-1.5 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  maxLength={255}
                  className="mt-1.5 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hi! 👋"
                  required
                  maxLength={1000}
                  rows={5}
                  className="mt-1.5 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-xl py-3 font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                size="lg"
              >
                <Send size={16} className="mr-2" />
                Send Message 🚀
              </Button>
            </form>
          )}
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-4 sm:col-span-2">
          <h2 className="text-lg font-bold">Or find me here 👇</h2>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${s.color}`}
            >
              <s.icon size={20} />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
