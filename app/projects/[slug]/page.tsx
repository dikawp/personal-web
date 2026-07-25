"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/project";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import { MainContent } from "@/components/main-content";

interface Props {
    params: Promise<{ slug: string }>;
}

export default function ProjectDetail({ params }: Props) {
    const { slug } = React.use(params);
    const project = projects.find((p) => p.slug === slug);
    const router = useRouter();

    if (!project) return notFound();

    const renderBackButton = () => (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 ">
            <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 transition cursor-target"
            >
                <FaArrowLeft />
                Back
            </button>
        </motion.div>
    );

    const renderHeader = () => (
        <header className="mb-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-3xl font-bold">
                    {project.title}
                </h1>
                <p className="mt-2 leading-relaxed">
                    {project.description}
                </p>
            </motion.div>
        </header>
    );

    const renderProjectImage = () => (
        <div className="relative w-full h-[250px] md:h-auto md:aspect-video overflow-hidden rounded-md bg-slate-200 shadow dark:bg-slate-900">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain hover:scale-[1.02] transition-transform duration-300"
                />
            </motion.div>
        </div>
    );

    const renderProjectAction = (
        href: string | undefined,
        label: string,
        icon: React.ReactNode
    ) => {
        const className =
            "w-full px-4 py-3 flex items-center justify-center gap-2 rounded-lg bg-slate-300 dark:bg-slate-950 text-sm font-medium shadow transition";

        if (!href) {
            return (
                <button
                    type="button"
                    disabled
                    className={`${className} cursor-not-allowed opacity-50`}
                >
                    {icon} {label}
                </button>
            );
        }

        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} cursor-target hover:shadow-md`}
            >
                {icon} {label}
            </a>
        );
    };

    const renderProjectLinks = () => (
        <motion.aside
            className="flex h-full flex-col justify-between gap-8 rounded-md border border-slate-300 p-5 dark:border-slate-800"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        >
            <div>
                <h2 className="text-lg font-semibold mb-4">Project Links</h2>
                <div className="space-y-3">
                    {renderProjectAction(project.demo, "Live Demo", <BsRocketTakeoff />)}
                    {renderProjectAction(project.github, "GitHub", <FaGithub />)}
                </div>
            </div>
        </motion.aside>
    );

    const renderTechnologies = () => (
        <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className="text-lg font-semibold mb-4">
                Technologies :
            </h2>
            <div className="flex gap-4 text-3xl">
                {project.tech.map((icon, i) => (
                    <span key={i} className="hover:scale-110 transition-transform">
                        {icon}
                    </span>
                ))}
            </div>
        </motion.div>
    );

    return (
        <MainContent >
            <section className="max-w-6xl mx-auto md:px-6 md:py-12">
                {renderBackButton()}
                {renderHeader()}
                <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.9fr)]">
                    <div>
                        {renderProjectImage()}
                        {renderTechnologies()}
                    </div>
                    {renderProjectLinks()}
                </div>
            </section>
        </MainContent>
    );
}
