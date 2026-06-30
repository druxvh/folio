'use client'

import { useTheme } from "next-themes"
import GitHubCalendar from "react-github-calendar"

export default function GithubGraph() {
    const { resolvedTheme } = useTheme()
    return (
        <section className="lg:py-2 react-github-calendar">
            <GitHubCalendar
                username="druxvh"
                blockSize={8}
                fontSize={10}
                blockRadius={10}
                colorScheme={resolvedTheme === 'light' ? 'light' : 'dark'}
                transformData={data => data.filter(x => x.count > 0)}
                theme={{
                    light: ['#1a3a2a', '#a3e635'],
                    dark: ['#0f1a0f', '#a3e635'],
                }}
            />
        </section>
    )
}
