'use client'

import GitHubCalendar from "react-github-calendar"

export default function GithubGraph() {
    return (
        <section className="lg:py-2 react-github-calendar">
            <GitHubCalendar
                username="druxvh"
                blockSize={8}
                fontSize={10}
                blockRadius={10}
                colorScheme="dark"
                transformData={data => data.filter(x => x.count > 0)}
                theme={{
                    light: ['hsl(0, 0%, 92%)', 'firebrick'],
                    dark: ['#222', '#b5e48c'],
                }}
            />
        </section>
    )
}
