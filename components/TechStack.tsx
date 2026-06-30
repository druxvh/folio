"use client";

export default function TechStack() {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "C++"],
    Frontend: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    "State & Data": ["Zustand", "TanStack Query", "Zod"],
    Backend: ["Node.js", "Bun", "Express", "Socket.IO", "REST APIs"],
    "Database & ORM": ["PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
    "AI & Automation": ["LLM APIs", "AI SDKs", "RAG workflows"],
    Tools: ["Git", "GitHub", "ESLint", "Prettier"],
  };

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-4">
            <h3 className="font-semibold text-foreground text-sm shrink-0">
              {category}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-accent-green hover:text-accent-green/90 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
