import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — DevPortfolio" },
      { name: "description", content: "Learn about my journey as a developer, my tech stack, and what makes me tick." },
      { property: "og:title", content: "About Me — DevPortfolio" },
      { property: "og:description", content: "Learn about my journey as a developer, my tech stack, and what makes me tick." },
    ],
  }),
  component: AboutPage,
});

const skills = [
  { name: "React", color: "bg-fun-cyan text-white" },
  { name: "TypeScript", color: "bg-fun-purple text-white" },
  { name: "Node.js", color: "bg-fun-green text-white" },
  { name: "Python", color: "bg-fun-yellow text-foreground" },
  { name: "PostgreSQL", color: "bg-fun-pink text-white" },
  { name: "Tailwind CSS", color: "bg-fun-cyan text-white" },
  { name: "Next.js", color: "bg-foreground text-background" },
  { name: "Docker", color: "bg-fun-purple text-white" },
  { name: "AWS", color: "bg-fun-orange text-white" },
  { name: "Git", color: "bg-fun-pink text-white" },
  { name: "GraphQL", color: "bg-fun-green text-white" },
  { name: "Redis", color: "bg-destructive text-white" },
];

const timeline = [
  { year: "2024", emoji: "🚀", title: "Senior Developer", desc: "Leading frontend architecture at a growing startup." },
  { year: "2022", emoji: "⭐", title: "Full-Stack Developer", desc: "Built scalable web apps for enterprise clients." },
  { year: "2020", emoji: "💡", title: "Junior Developer", desc: "Started my career building React applications." },
  { year: "2019", emoji: "🎓", title: "CS Degree", desc: "Graduated with a Computer Science degree." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          About <span className="gradient-text">Me</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The story behind the code ✨
        </p>
      </div>

      {/* Bio */}
      <div className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm sm:flex-row sm:items-start">
        <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-fun-purple to-fun-pink text-5xl shadow-lg">
          🧑‍💻
        </div>
        <div>
          <h2 className="text-2xl font-bold">Hey, I'm Alex! 👋</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I'm a full-stack developer with a passion for building beautiful, performant web applications. I love working with modern JavaScript frameworks, and I'm always exploring new technologies. When I'm not coding, you'll find me hiking, gaming, or contributing to open source. I believe great software should be both functional and delightful! 🎉
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Tech Stack 🛠️
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              className={`${skill.color} rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:scale-110 cursor-default border-none`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">
          My Journey 🗺️
        </h2>
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-2xl">
                {item.emoji}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary">{item.year}</span>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
