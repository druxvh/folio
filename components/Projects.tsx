'use client'

import Link from "next/link"
import HorizontalLine from "./ui/horizontal-line"
import { useState } from "react";
import clsx from "clsx";
import { ArrowSquareOutIcon, GlobeSimpleIcon, ListDashesIcon, SquaresFourIcon } from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio-data";
import Image from "next/image";
import type { Project } from "@/types";


export default function Projects() {
    const [columnSwitch, setColumnSwitch] = useState<boolean>(false);

    const openProject = (project: Project) => {
        // prefer demo, fallback to repo, otherwise do nothing
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
                    <h2 className="py-4">Projects</h2>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setColumnSwitch(false)}
                            className={clsx("cursor-pointer", {
                                "text-accent-green": columnSwitch === false,
                            })}
                        >
                            <ListDashesIcon size={20} className="hover:text-accent-green" />
                        </button>
                        <button
                            onClick={() => setColumnSwitch(true)}
                            className={clsx("cursor-pointer", {
                                "text-accent-green": columnSwitch,
                            })}
                        >
                            <SquaresFourIcon size={20} className="hover:text-accent-green" />
                        </button>
                    </div>
                </div>
                <HorizontalLine />
            </div>

            <div className={clsx("grid grid-cols-1 gap-3 space-y-4 text-sm", {
                "grid-cols-2": columnSwitch,
            })}>
                {portfolioData.projects.map((project: Project) => (
                    <div
                        key={project.id}
                        role="link"
                        tabIndex={0}
                        onClick={() => openProject(project)}
                        onKeyDown={(e) => onKeyActivate(e, project)}
                        className="group w-full h-full rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b5e48c]/30 cursor-pointer"
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
                            <h2 className="text-foreground font-medium italic transition-transform duration-300 group-hover:text-accent-green group-hover:underline">{project.title}</h2>
                            <div className="flex items-center gap-2">
                                <Link href={project.repo || "#"} target="_blank" className="text-muted-foreground hover:text-accent-green">
                                    <ArrowSquareOutIcon size={16} />
                                </Link>

                                <Link href={project.demo || "#"} target="_blank" className="text-muted-foreground hover:text-accent-green">
                                    <GlobeSimpleIcon size={16} />
                                </Link>
                            </div>

                        </div>
                        <p className="mt-2 text-foreground/90">{project.short}</p>
                    </div>
                ))}

            </div>
            <HorizontalLine />
        </section>
    )
}
