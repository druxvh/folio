import { PortfolioType } from "@/types";
import { CertificateIcon, EnvelopeSimpleIcon, MapPinIcon } from "@phosphor-icons/react";

export const portfolioData: PortfolioType = {
    name: "Druavh Mahajan",
    displayName: "Druavh",
    title: "Web developer — minimal, pragmatic, build-by-doing",
    shortTagline: "I build web apps, learn by doing, and keep everything as minimal as possible.",
    bio: "Hi, I'm Druavh Mahajan. I build web apps, learn by doing, and keep everything as minimal as possible.",

    contact: [
        {
            icon: MapPinIcon,
            label: "Jammu, J&K, India",
            href: null,
        },
        {
            icon: CertificateIcon,
            label: "BCA from Manipal University Jaipur (DOE)",
            href: null,
        },
        {
            icon: EnvelopeSimpleIcon,
            label: "heydruavh@gmail.com",
            href: "mailto:heydruavh@gmail.com",
        },
    ],

    socials: {
        github: {
            label: "github",
            href: "https://github.com/druxvh",
        },
        linkedin: {
            label: "linkedin",
            href: "https://linkedin.com/in/druavh",
        },
        x: {
            label: "x",
            href: "https://x.com/druxvh",
        },
        email: {
            label: "email",
            href: "mailto:heydruavh@gmail.com",
        },
        website: {
            label: "website",
            href: "https://druavh.me"
        },
        medium: {
            label: "medium",
            href: "https://druavh.medium.com"
        },
    },

    education: [
        {
            degree: "BCA",
            school: "Manipal University Jaipur (DOE)",
            duration: "2021 – 2025",
        }
    ],

    projects: [
        {
            id: "qforms",
            title: "qforms",
            short: "Drag-and-drop form builder with validation, reusable components, and multi-field support.",
            details: "A lightweight (TypeScript) forms project—fast prototyping with reusable inputs.",
            stack: ["TypeScript", "React"],
            repo: "https://github.com/druxvh/quick-forms",
            demo: "https://qforms.in",
            featured: false,
            image: {
                src: "/project/qforms.jpg",
                alt: "QForms project",
            }
        },
        {
            id: "brokebros",
            title: "brokebros",
            short: "Streaming-style app for exploring trending, top-rated, and regional movies & shows.",
            details: "A Next.js based fullstack movie app.",
            stack: ["Next.js", "TypeScript"],
            repo: "https://github.com/druxvh/brokebros",
            demo: "https://brokebros.vercel.app",
            featured: false,
            image: {
                src: "/project/brokebros.jpg",
                alt: "Brokebros project",
            }
        },
        {
            id: "ai-summarizer",
            title: "quick summarizer",
            short: "AI-powered summarizer converting long notes into clean, structured colorful bullet points.",
            details: "Next.js app using AI tools for streaming summaries and a minimal colorful card UI.",
            stack: ["Next.js", "TypeScript", "ShadCN UI", "Gemini"],
            repo: "https://github.com/druxvh/ai-summarizer",
            demo: "https://quicksummarizer.vercel.app",
            featured: false,
            image: {
                src: "/project/quick-summarizer.jpg",
                alt: "AI summarizer project",
            }
        },
        {
            id: "quick-2-do",
            title: "quick-2-do",
            short: "A modern minimal to-do app built while learning Next.js 15.",
            details: "A focused productivity app with minimal UI & efficient UX.",
            stack: ["Next.js", "JavaScript"],
            repo: "https://github.com/druxvh/quick-2-do",
            demo: "https://quick-2-do.vercel.app",
            featured: false,
            image: {
                src: "/project/quick-2-do.jpg",
                alt: "quick2do project",
            }
        },
    ],

    highlights: [
        "Building small, production-ready web apps.",
        "Focus on minimal UI, pragmatic features and performance.",
        "Open-source projects: qforms, ai-summarizer, brokebros, quick-2-do"
    ],

    writing: [],
};
