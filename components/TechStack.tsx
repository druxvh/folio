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
    <section className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex gap-4 flex-wrap items-start ">
            <h3 className="font-semibold text-foreground text-sm ">
              {category}
            </h3>{" "}
            <div className="h-full flex flex-wrap items-center justify-center gap-2 ">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-accent-green hover:text-accent-green/90 transition-colors "
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
