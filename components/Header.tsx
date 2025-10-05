"use client"

import { portfolioData } from "@/data/portfolio-data"
import { GithubLogoIcon, XLogoIcon } from "@phosphor-icons/react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <h1 className="font-semibold text-foreground text-xl">{portfolioData.displayName}</h1>
            <div className="flex gap-3">
                <Link href={portfolioData.socials["x"].href} target="_blank" className="text-foreground/90 hover:text-[#b5e48c]">
                    <XLogoIcon size={21} />
                </Link>
                <Link href={portfolioData.socials["github"].href} target="_blank" className="text-foreground/90 hover:text-[#b5e48c]">
                    <GithubLogoIcon size={21} />
                </Link>
            </div>
        </header>
    )
}
