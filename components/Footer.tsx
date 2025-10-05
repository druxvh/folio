'use client'

import { portfolioData } from '@/data/portfolio-data'
import { capitalize } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="flex flex-col gap-3 py-8 text-muted-foreground/90 text-xs sm:text-sm">
            <div className="flex gap-5 items-center justify-center">
                {Object.values(portfolioData.socials)
                    .slice(0, 4) // Limit to first 4 socials
                    .map(social => (
                        <Link key={social.label} href={social.href || '#'} target="_blank" className='hover:underline hover:text-[#b5e48c]/90'>
                            {capitalize(social.label)}
                        </Link>
                    ))}
            </div>
            <p className="text-center">© 2025 Druavh Mahajan. All rights reserved.</p>
        </footer>
    )
}
