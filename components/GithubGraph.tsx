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
                    light: ['#bfc9b7', '#477222'],
                    dark: ['#222', '#b5e48c'],
                }}
            />
        </section>
    )
}
