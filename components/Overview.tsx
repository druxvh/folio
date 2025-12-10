'use client'

import Link from "next/link"
import HorizontalLine from "./ui/horizontal-line"
import Header from "./Header"
import { portfolioData } from "@/data/portfolio-data"
import { ArrowSquareOutIcon, ArrowUpRightIcon } from "@phosphor-icons/react"

export default function Overview() {
    return (
        <div className="">
            <HorizontalLine />

            <div className="py-4">
                <Header />

                <section className="flex flex-col gap-5 mt-5">

                    <div className="flex flex-col gap-2">
                        {portfolioData.contact.map((item, index) => (
                            item.href ? (
                                <Link key={index} href={item.href} className="flex items-center gap-2 text-muted-foreground">
                                    <item.icon size={18} />
                                    <p className="text-[15px] italic  hover:underline hover:text-accent-green">
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
                    <p className="text-foreground">
                        I&apos;m currently working on
                        {" "}
                        <Link
                            target="_blank"
                            href={'https://qforms.in'}
                            className="italic  hover:underline focus:underline active:underline text-accent-green inline-flex  justify-center gap-1 "
                        >
                            qforms.in <ArrowSquareOutIcon size={'12px'} />
                        </Link>
                        {" "}
                        which is a simple drag-n-drop form builder app for people who prefer simplicity.
                    </p>

                    <nav className="w-full flex gap-3 text-muted-foreground text-sm">
                        <Link href={portfolioData.socials["medium"].href} target="_blank" className="underline hover:text-accent-green">blog</Link>
                        <Link href={portfolioData.socials["x"].href} target="_blank" className="underline hover:text-accent-green">thoughts</Link>
                        <Link href={'/resume.pdf'} target="_blank" className="underline hover:text-accent-green">
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
