import type { ElementType } from "react";

export type IconComponent = ElementType

export type ProjectImage = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

export type SocialLink = {
    label: string;
    href: string;
};

export type ContactItem = {
    icon: IconComponent;
    label: string;
    href?: string | null;
};

export type Project = {
    id: string;
    title: string;
    short: string;
    image: ProjectImage;
    details?: string;
    stack?: string[];
    repo?: string;
    demo?: string;
    featured?: boolean;
};

export type EducationItem = {
    degree: string;
    school: string;
    duration?: string;
    note?: string;
};

export type PortfolioType = {

    name: string;
    displayName: string;
    title: string;
    shortTagline: string;
    bio: string;

    contact: ContactItem[]

    socials: {
        github: SocialLink;
        linkedin: SocialLink;
        x: SocialLink;
        email: SocialLink;
        website: SocialLink;
        medium: SocialLink;
    };

    education?: EducationItem[];

    projects: Project[];
    highlights?: string[];
    writing?: never[];
}