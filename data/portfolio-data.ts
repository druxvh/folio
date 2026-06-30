import { PortfolioType } from "@/types";
import {
  CertificateIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react";

export const portfolioData: PortfolioType = {
  name: "Druavh Mahajan",
  displayName: "Druavh",
  title: "Web developer - minimal, pragmatic, build-by-doing",
  bio: "Hi, I'm Druavh Mahajan. I am a full-stack developer focused on minimal, high-performance web apps. I build with an open-source mindset, clean code, and a philosophy of learning by doing.",
  workbio:
    "At XRise AI, I build full stack software for various industries and enterprises. We create custom AI tools and workflows that cut manual work, lift productivity, and push revenue higher. I focus on making backend AI logic useful through ui interfaces teams actually want to use.",
  projectbio:
    "On the side, I build practical tools. I created lazyman, an open-source remote PC controller for mobile, and I'm currently developing qforms which is a modern, seamless alternative to Google Forms for creators and small businesses.",
  contact: [
    {
      icon: MapPinIcon,
      label: "Jammu, J&K, India",
      href: null,
    },
    {
      icon: BriefcaseIcon,
      label: "Full Stack Developer at XRise AI",
      href: null,
    },
    {
      icon: CertificateIcon,
      label: "BCA from Manipal University Jaipur",
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
      href: "https://druavh.me",
    },
    medium: {
      label: "medium",
      href: "https://druavh.medium.com",
    },
  },

  education: [
    {
      degree: "BCA",
      school: "Manipal University Jaipur (DOE)",
      duration: "2021 – 2026",
    },
  ],

  projects: [
    {
      id: "lazyman",
      title: "lazyman",
      short:
        "PC remote controller - control your PC from your mobile using trackpad and keyboard via WebSockets.",
      details:
        "Real-time PC control application built with WebSockets for seamless mobile to desktop communication.",
      stack: ["WebSockets", "TypeScript", "React"],
      repo: "https://github.com/druxvh/lazyman",
      demo: "https://drxlazyman.vercel.app",
      featured: false,
      image: {
        src: "/project/lazyman.png",
        alt: "Lazyman project",
      },
    },
    {
      id: "qforms",
      title: "qforms",
      short:
        "Modern simple form builder for small businesses and creators with validation logic and multi-field support.",
      details:
        "A lightweight, modern form builder designed for creators and small businesses - fast prototyping with reusable inputs.",
      stack: ["TypeScript", "React"],
      repo: "https://github.com/druxvh/quick-forms",
      demo: "https://qforms.in",
      featured: false,
      image: {
        src: "/project/qforms.jpg",
        alt: "QForms project",
      },
    },
    {
      id: "brokebros",
      title: "brokebros",
      short:
        "Streaming-style app for exploring trending, top-rated, and regional movies & shows.",
      details: "A Next.js based fullstack movie app.",
      stack: ["Next.js", "TypeScript"],
      repo: "https://github.com/druxvh/brokebros",
      demo: "https://brokebros.vercel.app",
      featured: false,
      image: {
        src: "/project/brokebros.jpg",
        alt: "Brokebros project",
      },
    },
    {
      id: "ai-summarizer",
      title: "quick summarizer",
      short:
        "AI-powered summarizer converting long notes into clean, structured colorful bullet points.",
      details:
        "Next.js app using AI tools for streaming summaries and a minimal colorful card UI.",
      stack: ["Next.js", "TypeScript", "ShadCN UI", "Gemini"],
      repo: "https://github.com/druxvh/ai-summarizer",
      demo: "https://quicksummarizer.vercel.app",
      featured: false,
      image: {
        src: "/project/quick-summarizer.jpg",
        alt: "AI summarizer project",
      },
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
      },
    },
  ],

  highlights: [
    "Building small, production-ready web apps.",
    "Focus on minimal UI, pragmatic features and performance.",
    "Open-source projects: qforms, ai-summarizer, brokebros, quick-2-do",
  ],

  writing: [],
};
