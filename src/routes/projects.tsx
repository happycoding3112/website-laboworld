import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — DevPortfolio" },
      { name: "description", content: "Check out my latest projects — from full-stack web apps to open source tools." },
      { property: "og:title", content: "Projects — DevPortfolio" },
      { property: "og:description", content: "Check out my latest projects — from full-stack web apps to open source tools." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "CloudSync Dashboard",
    desc: "A real-time analytics dashboard for cloud infrastructure monitoring with live charts and alerting.",
    tags: ["React", "TypeScript", "D3.js", "WebSocket"],
    color: "from-fun-purple to-fun-pink",
    shadow: "fun-shadow-purple",
    emoji: "☁️",
  },
  {
    title: "TaskFlow",
    desc: "A collaborative project management tool with drag-and-drop boards, real-time updates, and team chat.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    color: "from-fun-cyan to-fun-green",
    shadow: "fun-shadow-cyan",
    emoji: "📋",
  },
  {
    title: "PixelPal",
    desc: "An AI-powered image editing tool with smart filters, background removal, and batch processing.",
    tags: ["Python", "FastAPI", "React", "OpenCV"],
    color: "from-fun-pink to-fun-orange",
    shadow: "fun-shadow-pink",
    emoji: "🎨",
  },
  {
    title: "DevNotes",
    desc: "A minimalist markdown note-taking app with code snippets, tags, and full-text search.",
    tags: ["React", "SQLite", "Electron", "CodeMirror"],
    color: "from-fun-yellow to-fun-green",
    shadow: "fun-shadow-cyan",
    emoji: "📝",
  },
  {
    title: "ShopEasy",
    desc: "A modern e-commerce platform with cart management, Stripe payments, and order tracking.",
    tags: ["Next.js", "Stripe", "Redis", "Docker"],
    color: "from-fun-purple to-fun-cyan",
    shadow: "fun-shadow-purple",
    emoji: "🛍️",
  },
  {
    title: "FitTracker",
    desc: "A fitness tracking app with workout logging, progress charts, and social challenges.",
    tags: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    color: "from-fun-orange to-fun-pink",
    shadow: "fun-shadow-pink",
    emoji: "💪",
  },
];

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Things I've built and shipped 🚢
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${project.shadow}`}
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.color} text-2xl shadow-md`}>
              {project.emoji}
            </div>
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full text-xs font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-3 border-t border-border pt-4">
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                <Github size={14} /> Code
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
