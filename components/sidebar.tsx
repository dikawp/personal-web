"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { House, User, Phone, FolderGit, FileBadge, Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { VscVerifiedFilled } from "react-icons/vsc";
import Image from "next/image";

export const Sidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    // Jangan render sebelum mounted untuk menghindari hydration mismatch
    if (!mounted) return null;

    return (
        <>
            {/* MOBILE NAVBAR */}
            <div
                className="flex md:hidden items-center justify-between p-4 text-white dark:text-gray-900 
                      fixed top-0 left-0 right-0 z-50 transition-colors duration-500 backdrop-blur-md"
            >
                {/* Left */}
                <div className="flex items-center gap-2">
                    <Image
                        width={32}
                        height={32}
                        src="/image/foto_prib.JPG"
                        alt="Foto Pribadi"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium">Ramadika Wijaya</span>
                    <span>
                        <VscVerifiedFilled size={20} className="text-blue-500" />
                    </span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-2 rounded-full transition-colors duration-500"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors duration-500"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* SIDEBAR */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        key="sidebar"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 left-0 w-60 h-screen z-40 p-6 shadow-xl pt-16 
                       bg-gray-900/90 dark:bg-gray-100/90 transition-colors duration-500 backdrop-blur-md md:hidden"
                    >
                        <SidebarContent
                            pathname={pathname}
                            theme={theme}
                            setTheme={setTheme}
                            onClose={() => setIsOpen(false)}
                        />
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* DESKTOP SIDEBAR */}
            <aside className="hidden md:flex flex-col w-60 p-6 h-screen sticky top-0 transition-colors duration-500 backdrop-blur-md">
                <SidebarContent pathname={pathname} theme={theme} setTheme={setTheme} />
            </aside>

            {/* BACKDROP */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

interface SidebarContentProps {
    pathname: string | null;
    theme: string | undefined;
    setTheme: (theme: string) => void;
    onClose?: () => void;
}

// Extracted content biar DRY
function SidebarContent({
    pathname,
    theme,
    setTheme,
    onClose,
}: SidebarContentProps) {
    const menuItems = [
        { name: "Home", icon: <House size={18} />, path: "/" },
        { name: "About", icon: <User size={18} />, path: "/about" },
        { name: "Projects", icon: <FolderGit size={18} />, path: "/projects" },
        { name: "Certificate", icon: <FileBadge size={18} />, path: "/certificate" },
        { name: "Contact", icon: <Phone size={18} />, path: "/contact" },
    ];

    return (
        <>
            <div className="my-5 flex flex-col items-center">
                <Image
                    src="/image/foto_prib.JPG"
                    alt="Foto Pribadi"
                    width={80}
                    height={80}
                    className="hidden md:block w-20 h-20 object-cover rounded-full 
                     border-2 border-white dark:border-gray-800 transition-colors duration-500"
                />
                <Link
                    href="/"
                    className="hidden md:block text-xl font-medium mt-3 dark:text-gray-900 transition-colors duration-500"
                >
                    Ramadika Wijaya
                </Link>
                <Link
                    href="https://github.com/dikawp"
                    className="md:hidden text-sm mt-1 ms-2 text-gray-400 dark:text-gray-600 transition-colors duration-500"
                >
                    @dikawp
                </Link>
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="hidden md:block bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 p-2 rounded-full mt-3 transition-colors duration-500"
                >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </div>

            <hr className="mb-5 border-t-1 border-gray-500" />

            <nav>
                <ul className="space-y-1">
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onClose}
                            className="cursor-target"
                        >
                            <Link
                                href={item.path}
                                className={`flex items-center gap-3 px-2 py-3 rounded-lg transition-all duration-300 group 
                           ${pathname === item.path
                                        ? "text-white dark:text-gray-900 bg-gray-700 dark:bg-gray-300"
                                        : "text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-300"
                                    }`}
                            >
                                <span className="group-hover:scale-110 transition-transform duration-200">
                                    {item.icon}
                                </span>
                                <span className="font-medium text-sm">{item.name}</span>
                                <motion.span
                                    className="ml-auto opacity-0 group-hover:opacity-100"
                                    initial={{ x: -10 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    →
                                </motion.span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <hr className="my-5 border-t-1 border-gray-500" />

            <div className="text-gray-400 dark:text-gray-600 text-sm text-center transition-colors duration-500">
                <div className="flex justify-between mb-4">
                    <Link href="mailto:ramadika380@gmail.com">
                        <SiGmail size={24} className="ms-2 hover:text-slate-400 cursor-target" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ramadika-wijaya-poetra-s-9b9b74221/">
                        <FaLinkedin size={24} className="ms-2 hover:text-slate-400 cursor-target" />
                    </Link>
                    <Link href="https://instagram.com/dikawp_16">
                        <FaInstagram size={24} className="ms-2 hover:text-slate-400 cursor-target" />
                    </Link>
                    <Link href="https://github.com/dikawp">
                        <FaGithub size={24} className="ms-2 hover:text-slate-400 cursor-target" />
                    </Link>
                </div>
                <p>© 2025 Ramadika Wijaya</p>
                <p>All rights reserved.</p>
            </div>
        </>
    );
}
