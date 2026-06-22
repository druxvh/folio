"use client";

import Link from "next/link";
import HorizontalLine from "./ui/horizontal-line";
import Header from "./Header";
import { portfolioData } from "@/data/portfolio-data";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import TechStack from "./TechStack";

export default function Overview() {
  return (
    <div className="">
      <HorizontalLine />

      <div className="py-4">
        <Header />

        <section className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-2">
            {portfolioData.contact.map((item, index) =>
              item.href ? (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon size={18} />
                  <p className="text-[15px] italic  hover:underline hover:text-accent-green">
                    {item.label}
                  </p>
                </Link>
              ) : (
                <span
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon size={18} />
                  <p className="text-[15px] italic">{item.label}</p>
                </span>
              ),
            )}
          </div>

          <TechStack />

          <p className="text-foreground">{portfolioData.bio}</p>
          <p className="text-foreground">{portfolioData.workbio}</p>
          <p className="text-foreground">{portfolioData.projectbio}</p>

          <nav className="w-full flex gap-3 text-muted-foreground text-sm">
            <Link
              href={portfolioData.socials["medium"].href}
              target="_blank"
              className="underline hover:text-accent-green"
            >
              blog
            </Link>
            <Link
              href={portfolioData.socials["x"].href}
              target="_blank"
              className="underline hover:text-accent-green"
            >
              thoughts
            </Link>
            <Link
              href={
                "https://docs.google.com/document/d/1ez1vy6_mXmDwIGqmA85IX3B2BEr6ex0uyYQb5Lww4B4/edit?usp=sharing"
              }
              target="_blank"
              className="underline hover:text-accent-green"
            >
              <span className="flex items-center">
                resume <ArrowUpRightIcon size={16} />
              </span>
            </Link>
          </nav>
        </section>
      </div>

      <HorizontalLine />
    </div>
  );
}
