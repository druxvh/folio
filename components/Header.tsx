"use client"

import { motion } from "motion/react"
import { TextAnimate } from "@/registry/magicui/text-animate"
import { portfolioData } from "@/data/portfolio-data"
import { GithubLogoIcon, XLogoIcon } from "@phosphor-icons/react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <TextAnimate animation="blurIn" startOnView={false} as="h1" delay={0.35} duration={2} className="font-semibold text-foreground text-xl">
                {portfolioData.displayName}
            </TextAnimate>
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex gap-3"
            >
                <Link href={portfolioData.socials["x"].href} target="_blank" className="text-foreground/90 hover:text-accent-green">
                    <XLogoIcon size={21} />
                </Link>
                <Link href={portfolioData.socials["github"].href} target="_blank" className="text-foreground/90 hover:text-accent-green">
                    <GithubLogoIcon size={21} />
                </Link>
            </motion.div>
        </header>
    )
}
