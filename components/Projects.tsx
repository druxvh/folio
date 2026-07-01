'use client'

import { motion } from "motion/react"
import { TextAnimate } from "@/registry/magicui/text-animate";
import Link from "next/link"
import HorizontalLine from "./ui/horizontal-line"
import { useState, useEffect } from "react";
import clsx from "clsx";
import { ArrowSquareOutIcon, GlobeSimpleIcon, ListDashesIcon, SquaresFourIcon } from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio-data";
import Image from "next/image";
import type { Project } from "@/types";


export default function Projects() {
    const [columnSwitch, setColumnSwitch] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const openProject = (project: Project) => {
        const url = project.demo || project.repo;
        if (!url) return;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const onKeyActivate = (e: React.KeyboardEvent, project: Project) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProject(project);
        }
    };

    return (
        <section className="flex flex-col gap-3 lg:gap-5">
            <div>
                <HorizontalLine />
                <div className="flex items-center justify-between">
                    <TextAnimate animation="blurIn" startOnView={false} as="h2" delay={2.2} duration={2} className="py-4">
                      Projects
                    </TextAnimate>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.3, delay: 2.2 }}
                        className="flex items-center gap-2"
                    >
                        <button
                            onClick={() => setColumnSwitch(false)}
                            className={clsx("cursor-pointer transition-all duration-300 ease-out", {
                                "text-accent-green": columnSwitch === false,
                            })}
                        >
                            <ListDashesIcon size={20} className="hover:text-accent-green transition-colors" />
                        </button>
                        <button
                            onClick={() => setColumnSwitch(true)}
                            className={clsx("cursor-pointer transition-all duration-300 ease-out", {
                                "text-accent-green": columnSwitch,
                            })}
                        >
                            <SquaresFourIcon size={20} className="hover:text-accent-green transition-colors" />
                        </button>
                    </motion.div>
                </div>
                <HorizontalLine />
            </div>

            <div className={clsx("grid grid-cols-1 gap-3 space-y-4 text-sm transition-all duration-500 ease-out", {
                "grid-cols-2": columnSwitch,
                "opacity-0 translate-y-4": !isLoaded,
                "opacity-100 translate-y-0": isLoaded,
            })}>
                {portfolioData.projects.map((project: Project) => (
                    <div
                        key={project.id}
                        role="link"
                        tabIndex={0}
                        onClick={() => openProject(project)}
                        onKeyDown={(e) => onKeyActivate(e, project)}
                        className="group w-full h-full rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/30 cursor-pointer"
                        aria-label={`Open ${project.title}`}
                    >
                        <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            width={1280}
                            height={720}
                            quality={100}
                            priority={true}
                            className="w-full object-cover aspect-video h-fit rounded-sm mb-3 transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="flex items-center justify-between">
                            <TextAnimate animation="blurIn" startOnView={false} as="h2" delay={2.5} duration={2} className="text-foreground font-medium italic transition-transform duration-300 group-hover:text-accent-green group-hover:underline">
                              {project.title}
                            </TextAnimate>
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.3, delay: 2.5 }}
                                className="flex items-center gap-2"
                            >
                                <Link href={project.repo || "#"} target="_blank" className="text-muted-foreground hover:text-accent-green">
                                    <ArrowSquareOutIcon size={16} />
                                </Link>

                                <Link href={project.demo || "#"} target="_blank" className="text-muted-foreground hover:text-accent-green">
                                    <GlobeSimpleIcon size={16} />
                                </Link>
                            </motion.div>

                        </div>
                        <TextAnimate animation="blurIn" startOnView={false} as="p" delay={2.6} duration={2} className="mt-2 text-foreground/90">
                          {project.short}
                        </TextAnimate>
                    </div>
                ))}

            </div>
            <HorizontalLine />
        </section>
    )
}
