'use client';
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Github, Instagram } from 'lucide-react';

export function AboutSection() {
    const experiences = [
        // Freelance
        {
            title: "Web Developer Freelance",
            company: "CV Anugerah Sukses Sejahtera",
            logo: "/image/anugerah.webp",
            date: "Jun 2025 - Jul 2025",
            type: "Freelance",
            typeColor: "dark:bg-purple-100 dark:text-purple-800 bg-purple-900 text-purple-200",
            bullets: [
                "Developed B2C websites using Laravel framework with responsive UI and optimized backend structure",
                "Integrated Midtrans payment gateway to enable secure and seamless online transactions",
                "Collaborated with clients to gather requirements and ensure timely project delivery"
            ],
        },

        // Internship
        {
            title: ".NET Developer (MSIB Batch 6)",
            company: "Badan Pendapatan Daerah Kota Surabaya",
            logo: "/image/pemkot.webp",
            date: "Jan 2024 - Jul 2024",
            type: "Internship",
            typeColor: "dark:bg-green-100 dark:text-green-800 bg-green-900 text-green-200",
            bullets: [
                "Developed 'Sistem Pemberkasan' web application using MVC.NET, reducing document processing time by 30%",
                "Built a log viewer app integrated with Bapenda’s API to improve monitoring efficiency",
                "Contributed to the development of a help desk feature for the Surabaya Tax application"
            ],
        },

        // Project
        {
            title: "Mobile App Developer (Capstone Project)",
            company: "Telkom University Surabaya",
            logo: "/image/telkom.webp",
            date: "Oct 2023 - Dec 2023",
            type: "Project",
            typeColor: "dark:bg-yellow-100 dark:text-yellow-800 bg-yellow-900 text-yellow-200",
            bullets: [
                "Developed a B2C Furniture mobile app (InshanityGoods) using React Native and Firebase (Firestore)",
                "Worked in a SCRUM team to slice UI screens and integrate Firebase features",
                "Integrated Midtrans payment gateway to support online transactions"
            ],
        },

        // Organizational
        {
            title: "Secretary of Website Development Division",
            company: "UKM Coder Telkom University Surabaya",
            logo: "/image/coder.webp",
            date: "Dec 2022 - Nov 2023",
            type: "Organizational",
            typeColor: "dark:bg-blue-100 dark:text-blue-800 bg-blue-900 text-blue-200",
            bullets: [
                "Coordinated a team of developers to execute organizational website projects from planning to deployment",
                "Assisted in recruitment of 20+ new members through screening and onboarding",
                "Organized monthly mentoring sessions to improve members’ technical skills"
            ],
        },
        {
            title: "Head of Venue and Logistic Division",
            company: "Student Start-up Competition PLAYBOX Season 4",
            logo: "/image/playbox.webp",
            date: "Jan 2023 - Aug 2023",
            type: "Organizational",
            typeColor: "dark:bg-blue-100 dark:text-blue-800 bg-blue-900 text-blue-200",
            bullets: [
                "Led a 5-member logistics team to prepare event venues and equipment ahead of schedule",
                "Ensured that equipment and venues were ready before event day",
                "Coordinated with other divisions to ensure smooth execution attended by 150+ participants"
            ],
        },
        {
            title: "PIC of Public Relations Division",
            company: "Workshop WAOW Season 3 - Front End Development: ReactJS",
            logo: "/image/coder.webp",
            date: "Sep 2022 - Oct 2022",
            type: "Organizational",
            typeColor: "dark:bg-blue-100 dark:text-blue-800 bg-blue-900 text-blue-200",
            bullets: [
                "Led a PR team to secure sponsorship partners, contributing to event funding",
                "Served as Liaison Officer for 50+ participants, ensuring positive participant experience",
                "Coordinated outreach with partner organizations to expand event visibility"
            ],
        },
        {
            title: "Member of Public Relations Division",
            company: "Student Start-up Competition PLAYBOX Season 3",
            logo: "/image/playbox.webp",
            date: "Mar 2022 - Aug 2022",
            type: "Organizational",
            typeColor: "dark:bg-blue-100 dark:text-blue-800 bg-blue-900 text-blue-200",
            bullets: [
                "Sent sponsorship proposals to companies, successfully acquiring event funding",
                "Acted as moderator in a main session, engaging with speakers and audience",
                "Served as Liaison Officer for participants to ensure smooth communication"
            ],
        }
    ];

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='mb-12 md:mt-5 dark:text-slate-800'>
                <h1 className='text-2xl'>About Me</h1>
                <hr className="border-t-1 border-dashed border-gray-400 my-4" />
                <p className='mb-4'>Hello! I&apos;m Ramadika Wijaya Poetra Subijanto, an Information Systems graduate from Telkom University Surabaya, earning Cumlaude honors with a GPA of 3.71/4.00.</p>
                <p className='mb-4'>I&apos;m a passionate fullstack developer with experience in building B2C web and mobile applications using Laravel, React Native, and .NET, alongside Firebase and SQL for data management. I&apos;m also skilled in integrating secure payment gateways like Midtrans to ensure smooth, user-friendly transactions.</p>
                <p>I enjoy creating solutions that are functional, intuitive, and impactful&mdash;covering both clean, engaging user interfaces and reliable backend systems. With strong leadership and organizational skills, I thrive in collaborative environments and am driven by continuous learning and innovation.</p>
            </motion.section>

            <hr className="border-t-1 border-dashed border-gray-400 mb-8" />
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-12 md:mt-5"
            >
                <h1 className="text-2xl mb-6 text-gray-100 dark:text-gray-900">Experience</h1>

                <div className="space-y-4">
                    {experiences.map((exp, idx) => (
                        <Card
                            key={idx}
                            className="rounded-md bg-slate-800 dark:bg-slate-200 border-slate-700 dark:border-slate-400 hover:shadow-lg transition-shadow"
                        >
                            <CardHeader className="pb-2">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-gray-600 dark:border-gray-300"
                                        />
                                        <div>
                                            <CardTitle className="text-base sm:text-lg text-gray-100 dark:text-gray-900">
                                                {exp.title}
                                            </CardTitle>
                                            <CardDescription className="mt-1 text-sm text-gray-400 dark:text-gray-600">
                                                {exp.company} • {exp.date}
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className={`hidden md:block text-sm self-start sm:self-auto mt-2 sm:mt-0 ${exp.typeColor}`}
                                    >
                                        {exp.type}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="ms-16 pt-0">
                                <details className="group text-xs">
                                    <summary className="cursor-target w-fit text-gray-300 dark:text-gray-700 hover:text-gray-100 dark:hover:text-gray-900 transition-colors">
                                        View Responsibilities
                                    </summary>
                                    <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-300 dark:text-gray-700">
                                        {exp.bullets.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </details>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.section>

            <hr className="border-t-1 border-dashed border-gray-400 my-8" />

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
            >
                <Card className="bg-slate-800 dark:bg-slate-200 border-slate-700 dark:border-slate-400">
                    <CardContent className="p-2">
                        <div className="grid grid-cols-4 gap-5">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/ramadika-wijaya-poetra-s-9b9b74221/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
                            >
                                <Linkedin className="w-5 h-5 text-gray-300 dark:text-gray-700 mb-1.5" />
                                <span className="text-xs text-center text-gray-300 dark:text-gray-700">LinkedIn</span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:ramadika380@gmail.com"
                                className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
                            >
                                <Mail className="w-5 h-5 text-gray-300 dark:text-gray-700 mb-1.5" />
                                <span className="text-xs text-center text-gray-300 dark:text-gray-700">Email</span>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/dikawp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
                            >
                                <Github className="w-5 h-5 text-gray-300 dark:text-gray-700 mb-1.5" />
                                <span className="text-xs text-center text-gray-300 dark:text-gray-700">GitHub</span>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/dikawp_16/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-gray-300 dark:text-gray-700 mb-1.5" />
                                <span className="text-xs text-center text-gray-300 dark:text-gray-700">Instagram</span>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </motion.section>
        </>
    )
}
