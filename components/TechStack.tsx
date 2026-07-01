"use client";

import { TextAnimate } from "@/registry/magicui/text-animate";

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
            <TextAnimate animation="blurIn" startOnView={false} as="h3" delay={1.1} duration={2} className="font-semibold text-foreground text-sm shrink-0">
              {category}
            </TextAnimate>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {items.map((item) => (
                <TextAnimate
                  key={item}
                  animation="blurIn" startOnView={false}
                  as="span"
                  delay={1.2} duration={2}
                  className="text-sm text-accent-green hover:text-accent-green/90 transition-colors"
                >
                  {item}
                </TextAnimate>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
