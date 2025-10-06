'use client'

import Link from "next/link"
import HorizontalLine from "./ui/horizontal-line"
import Header from "./Header"
import { portfolioData } from "@/data/portfolio-data"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

export default function Overview() {
    return (
        <div className="">
            <HorizontalLine />

            <div className="py-4">
                <Header />

                <section className="flex flex-col gap-5 mt-5">
                    {/* <span className="text-sm text-muted-foreground">developer</span> */}

                    <div className="flex flex-col gap-2">
                        {portfolioData.contact.map((item, index) => (
                            item.href ? (
                                <Link key={index} href={item.href} className="flex items-center gap-2 text-muted-foreground">
                                    <item.icon size={18} />
                                    <p className="text-[15px] italic  hover:underline hover:text-[#b5e48c]/90">
                                        {item.label}
                                    </p>
                                </Link>
                            ) : (
                                <span key={index} className="flex items-center gap-2 text-muted-foreground">
                                    <item.icon size={18} />
                                    <p className="text-[15px] italic">
                                        {item.label}
                                    </p>
                                </span>
                            )
                        ))}
                    </div>

                    <p className="text-foreground">
                        {portfolioData.bio}
                    </p>

                    <nav className="w-full flex gap-3 text-muted-foreground text-sm">
                        <Link href={portfolioData.socials["medium"].href} target="_blank" className="underline hover:text-[#b5e48c]/90">blog</Link>
                        <Link href={portfolioData.socials["x"].href} target="_blank" className="underline hover:text-[#b5e48c]/90">thoughts</Link>
                        <Link href={'/resume.pdf'} target="_blank" className="underline hover:text-[#b5e48c]/90">
                            <span className="flex items-center">
                                resume <ArrowUpRightIcon size={16} />
                            </span>
                        </Link>
                    </nav>
                </section>
            </div>

            <HorizontalLine />
        </div>
    )
}
