import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevPortfolio — Developer & Engineer" },
      { name: "description", content: "Hi! I'm a developer who builds colorful, fun, and functional web experiences." },
      { property: "og:title", content: "DevPortfolio — Developer & Engineer" },
      { property: "og:description", content: "Hi! I'm a developer who builds colorful, fun, and functional web experiences." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="float-animation absolute left-[10%] top-[15%] text-5xl opacity-60">🟣</div>
        <div className="float-animation-delayed absolute right-[15%] top-[20%] text-4xl opacity-50">🔵</div>
        <div className="float-animation-slow absolute left-[20%] bottom-[25%] text-6xl opacity-40">🟡</div>
        <div className="float-animation absolute right-[10%] bottom-[30%] text-3xl opacity-50">🩷</div>
        <div className="float-animation-delayed absolute left-[50%] top-[10%] text-4xl opacity-30">✨</div>
        <div className="float-animation-slow absolute right-[35%] bottom-[15%] text-5xl opacity-40">💎</div>
      </div>

      <section className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32 lg:py-40">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
          <span>👋</span> Hey there, welcome!
        </div>

        <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          I build things for the{" "}
          <span className="gradient-text">web</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Full-stack developer who loves turning ideas into colorful, delightful, and performant digital experiences. Let's create something awesome together! 🎨
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-200 hover:scale-105 fun-shadow-purple"
          >
            🚀 View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/30 bg-card px-7 py-3.5 text-sm font-bold text-foreground shadow-sm transition-all duration-200 hover:scale-105 hover:border-primary/60"
          >
            ✉️ Get in Touch
          </Link>
        </div>

        {/* Quick stats */}
        <div className="mt-20 grid w-full max-w-lg grid-cols-3 gap-6">
          {[
            { number: "5+", label: "Years Exp", color: "text-fun-purple" },
            { number: "30+", label: "Projects", color: "text-fun-pink" },
            { number: "10+", label: "Tech Stack", color: "text-fun-cyan" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-extrabold ${stat.color} sm:text-4xl`}>{stat.number}</div>
              <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
