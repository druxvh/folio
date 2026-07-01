"use client";

import { motion } from "motion/react"
import { TextAnimate } from "@/registry/magicui/text-animate";
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
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <item.icon size={18} />
                  </motion.span>
                  <TextAnimate animation="blurIn" startOnView={false} as="p" delay={0.8} duration={2} className="text-[15px] italic  hover:underline hover:text-accent-green">
                    {item.label}
                  </TextAnimate>
                </Link>
              ) : (
                <span
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <item.icon size={18} />
                  </motion.span>
                  <TextAnimate animation="blurIn" startOnView={false} as="p" delay={0.8} duration={2} className="text-[15px] italic">
                    {item.label}
                  </TextAnimate>
                </span>
              ),
            )}
          </div>

          <TechStack />

          <TextAnimate animation="blurIn" startOnView={false} as="p" delay={1.3} duration={2} className="text-foreground">
            {portfolioData.bio}
          </TextAnimate>
          <TextAnimate animation="blurIn" startOnView={false} as="p" delay={1.3} duration={2} className="text-foreground">
            {portfolioData.workbio}
          </TextAnimate>
          <TextAnimate animation="blurIn" startOnView={false} as="p" delay={1.3} duration={2} className="text-foreground">
            {portfolioData.projectbio}
          </TextAnimate>

          <nav className="w-full flex gap-3 text-muted-foreground text-sm">
            <Link
              href={portfolioData.socials["medium"].href}
              target="_blank"
              className="underline hover:text-accent-green"
            >
              <TextAnimate animation="blurIn" startOnView={false} as="span" delay={1.6} duration={2}>
                blog
              </TextAnimate>
            </Link>
            <Link
              href={portfolioData.socials["x"].href}
              target="_blank"
              className="underline hover:text-accent-green"
            >
              <TextAnimate animation="blurIn" startOnView={false} as="span" delay={1.6} duration={2}>
                thoughts
              </TextAnimate>
            </Link>
            <Link
              href={
                "https://docs.google.com/document/d/1ez1vy6_mXmDwIGqmA85IX3B2BEr6ex0uyYQb5Lww4B4/edit?usp=sharing"
              }
              target="_blank"
              className="underline hover:text-accent-green"
            >
              <span className="flex items-center">
                <TextAnimate animation="blurIn" startOnView={false} as="span" delay={1.6} duration={2}>
                  resume
                </TextAnimate>
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.3, delay: 1.6 }}
                >
                  <ArrowUpRightIcon size={16} />
                </motion.span>
              </span>
            </Link>
          </nav>
        </section>
      </div>

      <HorizontalLine />
    </div>
  );
}
