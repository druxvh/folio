"use client";

import { motion } from "motion/react"
import { TextAnimate } from "@/registry/magicui/text-animate";
import { portfolioData } from "@/data/portfolio-data";
import { capitalize } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.3, delay: 2.9 }}
      className="flex flex-col gap-3 py-8 text-muted-foreground/90 text-xs sm:text-sm"
    >
      <div className="flex gap-5 items-center justify-center">
        {Object.values(portfolioData.socials)
          .slice(0, 4)
          .map((social) => (
            <Link
              key={social.label}
              href={social.href || "#"}
              target="_blank"
              className="hover:underline hover:text-accent-green"
            >
              <TextAnimate animation="blurIn" startOnView={false} as="span" delay={2.9} duration={2}>
                {capitalize(social.label)}
              </TextAnimate>
            </Link>
          ))}
      </div>
      <TextAnimate animation="blurIn" startOnView={false} as="p" delay={3.1} duration={2} className="text-center">
        © 2026 Druavh Mahajan. All rights reserved.
      </TextAnimate>
    </motion.footer>
  );
}
