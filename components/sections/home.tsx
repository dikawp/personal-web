'use client';
import { motion } from 'framer-motion';
import { FaNodeJs, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPhp,
    SiPython,
    SiTypescript,
    SiLaravel,
    SiReact,
    SiDotnet,
    SiBootstrap,
    SiTailwindcss,
    SiMysql,
    SiFirebase,
    SiFigma,
    SiExpo,
    SiRoboflow,
    SiGit,
    SiNextdotjs,
    SiVite
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandCSharp, TbBrandNpm } from "react-icons/tb"
import { MapPinHouse, User, Briefcase, Award, Mail, LayoutPanelLeft } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { projects } from "@/lib/project";

export const HomeSection = () => {
    const skills = [
        { name: "HTML", icon: SiHtml5, colors: "from-orange-500 to-red-500" },
        { name: "CSS", icon: SiCss3, colors: "from-blue-400 to-blue-600" },
        { name: "JavaScript", icon: SiJavascript, colors: "from-yellow-300 to-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, colors: "from-blue-300 to-blue-500" },
        { name: "PHP", icon: SiPhp, colors: "from-indigo-400 to-indigo-600" },
        { name: "C#", icon: TbBrandCSharp, colors: "from-green-400 to-green-600" },
        { name: "Python", icon: SiPython, colors: "from-yellow-400 to-yellow-600" },
        { name: "Laravel", icon: SiLaravel, colors: "from-red-400 to-red-600" },
        { name: "React", icon: SiReact, colors: "from-cyan-400 to-blue-500" },
        { name: "Next JS", icon: SiNextdotjs, colors: "from-gray-200 to-gray-400" },
        { name: "Framer Motion", icon: TbBrandFramerMotion, colors: "from-yellow-400 to-orange-500" },
        { name: ".NET", icon: SiDotnet, colors: "from-purple-500 to-indigo-600" },
        { name: "Bootstrap", icon: SiBootstrap, colors: "from-purple-400 to-purple-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, colors: "from-cyan-300 to-cyan-500" },
        { name: "Node JS", icon: FaNodeJs, colors: "from-green-300 to-green-500" },
        { name: "Vite", icon: SiVite, colors: "from-pink-300 to-purple-500" },
        { name: "SQL", icon: SiMysql, colors: "from-blue-500 to-blue-700" },
        { name: "Firebase", icon: SiFirebase, colors: "from-yellow-400 to-orange-500" },
        { name: "Figma", icon: SiFigma, colors: "from-pink-400 to-purple-500" },
        { name: "Roboflow", icon: SiRoboflow, colors: "from-blue-400 to-blue-500" },
        { name: "Expo", icon: SiExpo, colors: "from-gray-400 to-gray-600" },
        { name: "npm", icon: TbBrandNpm, colors: "from-red-500 to-red-500" },
        { name: "Git", icon: SiGit, colors: "from-orange-500 to-red-500" },
        { name: "Github", icon: FaGithub, colors: "from-slate-500 to-slate-500" },
    ];

    const sections = [
        {
            icon: Briefcase,
            title: "Project Showcase",
            desc: "Showcasing projects that combine creativity with practical solutions.",
            colors: "from-indigo-500 to-blue-500",
            href: "/projects",
        },
        {
            icon: User,
            title: "About Me",
            desc: "A quick look at my background, skills, and passions.",
            colors: "from-pink-500 to-rose-500",
            href: "/about",
        },
        {
            icon: Award,
            title: "Certificates",
            desc: "Highlights of achievements from courses and events.",
            colors: "from-amber-500 to-orange-500",
            href: "/certificate",
        },
        {
            icon: Mail,
            title: "Contact",
            desc: "Reach out for opportunities, ideas, or collaborations.",
            colors: "from-violet-500 to-purple-500",
            href: "/contact",
        },
    ];

    return (
        <>
            {/* About */}
            <motion.section
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12 md:mt-5"
            >
                <h1 className="text-2xl md:text-3xl">Hi, I'm Ramadika Wijaya P.S</h1>
                <div className="md:flex gap-4 my-3">
                    <div className="flex mb-3 md:mb-0">
                        <MapPinHouse size={24} strokeWidth={2} />
                        <p className="text-gray-400 ms-2">Based in Surabaya, Indonesia</p>
                    </div>
                    <div className="flex">
                        <FaCode size={24} />
                        <p className="text-gray-400 ms-2">Full-stack Website Developer</p>
                    </div>
                </div>
                <p className="leading-8 dark:text-gray-500">
                    Fresh graduate in Information Systems from Telkom University Surabaya, graduating Cumlaude with a GPA of 3.71/4.00. Experienced in developing B2C web and mobile applications using Laravel, React Native, and .NET, Skilled in integrating payment gateways, collaborating within Agile/SCRUM teams, and delivering responsive, user-centered solutions. Proven leadership through active involvement in student organizations and event management.
                </p>
                <div className="flex items-center gap-2 mt-3">
                    <a href="/CV-2(3).pdf">
                        <Button variant="outline" className="bg-slate-900 dark:bg-slate-300 cursor-target">
                            Download CV
                        </Button>
                    </a>
                    <Link href="https://github.com/dikawp">
                        <FaGithub size={30} className="ms-2 hover:text-slate-400 cursor-target" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ramadika-wijaya-poetra-s-9b9b74221/">
                        <FaLinkedin size={30} className="ms-2 hover:text-slate-400 cursor-target" />
                    </Link>
                </div>
                <hr className='my-10' />
            </motion.section>

            {/* Skills */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-14"
            >
                <div className="flex items-center mb-8">
                    <FaCode size={24} />
                    <h2 className="text-2xl md:text-2xl font-semibold ms-2">Skills</h2>
                </div>

                <div className="grid grid-cols-6 gap-4">
                    {skills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                                className="group"
                            >
                                <Card className="bg-transparent shadow-none border-0 md:bg-slate-800 md:dark:bg-slate-200 md:border md:shadow-sm md:border-slate-700 md:dark:border-slate-400 md:hover:border-slate-600 transition-all duration-300">
                                    <CardContent className="p-2 md:p-4 text-center">
                                        <motion.div
                                            whileHover={{
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: { duration: 0.5 },
                                            }}
                                            className={`mx-auto bg-gradient-to-br ${skill.colors} inline-block p-2 rounded-full`}
                                        >
                                            <IconComponent size={24} />
                                        </motion.div>
                                        {/* Teks hanya muncul di md ke atas */}
                                        <p className="hidden md:block text-[11px] font-medium text-slate-200 dark:text-slate-900">
                                            {skill.name}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>

            <hr className='my-10' />

            {/* Featured */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center mb-8">
                    <LayoutPanelLeft strokeWidth={2.5} />
                    <h2 className="text-2xl md:text-3xl font-semibold ms-2">Featured Sections</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {sections.map((sec, index) => (
                        <motion.div
                            key={sec.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className={`
                                ${index === 0 ? "md:col-span-4 md:row-span-2" : ""}
                                ${index === 1 ? "md:col-span-2 md:row-span-1" : ""}
                                ${index === 2 ? "md:col-span-2 md:row-span-1" : ""}
                                ${index === 3 ? "md:col-span-6 md:row-span-1" : ""}
                                h-full
                            `}
                        >
                            {/* Card wrapper link → redirect ke /projects */}
                            <Link href={sec.href || "/projects"} className="block h-full cursor-target">
                                <Card className="bg-slate-800 dark:bg-slate-200 border-slate-700 dark:border-slate-400 hover:border-slate-600 transition-all duration-300 h-full flex flex-col justify-between">
                                    <CardHeader className="flex flex-col items-start space-y-2 pb-1">
                                        <motion.div
                                            whileHover={{
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: { duration: 0.5 },
                                            }}
                                            className={`p-2 bg-gradient-to-br ${sec.colors} inline-block rounded-full text-white`}
                                        >
                                            <sec.icon size={24} />
                                        </motion.div>
                                        <CardTitle className="text-slate-200 dark:text-slate-900 group-hover:text-white dark:group-hover:text-black transition-colors">
                                            {sec.title}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="pt-0 flex flex-col h-full">
                                        <p className="text-sm text-slate-400 dark:text-slate-700 group-hover:text-slate-200 dark:group-hover:text-black transition-colors">
                                            {sec.desc}
                                        </p>

                                        {/* Project Showcase special case */}
                                        {sec.title === "Project Showcase" && (
                                            <div className="hidden mt-6 md:grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {projects.slice(0, 2).map((project) => {
                                                    const router = useRouter();
                                                    return (
                                                        <div
                                                            key={project.slug}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                router.push(`/projects/${project.slug}`);
                                                            }}
                                                            className="cursor-target"
                                                        >
                                                            <img
                                                                src={project.image}
                                                                alt={project.title}
                                                                className="rounded-lg h-[160] border border-slate-700 dark:border-slate-400 hover:scale-105 transition-transform duration-300"
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </>
    );
};
