'use client';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ImArrowUpRight2 } from "react-icons/im";
import { SiGmail } from 'react-icons/si';

const contacts = [
  {
    title: "Get in Touch",
    desc: "Feel free to drop me an email for questions or potential projects.",
    icon: <SiGmail className="text-white text-4xl" />,
    link: "mailto:ramadika380@gmail.com",
    btn: "Go to Gmail",
    bg: "from-red-500 to-red-700",
  },
  {
    title: "Follow My Story",
    desc: "Stay updated with my latest moments and ideas.",
    icon: <FaInstagram className="text-white text-4xl" />,
    link: "https://instagram.com/dikawp_16",
    btn: "Go to Instagram",
    bg: "from-pink-500 via-purple-500 to-yellow-500",
  },
  {
    title: "Professional Network",
    desc: "Let’s connect and grow together in a professional space.",
    icon: <FaLinkedin className="text-white text-4xl" />,
    link: "https://www.linkedin.com/in/ramadika-wijaya-poetra-s-9b9b74221/",
    btn: "Go to Linkedin",
    bg: "from-sky-500 to-blue-700",
  },
  {
    title: "Discover My Code",
    desc: "Check out my projects and open-source contributions.",
    icon: <FaGithub className="text-white text-4xl" />,
    link: "https://github.com/dikawp",
    btn: "Go to Github",
    bg: "from-slate-700 to-slate-900",
  },
];


export const ContactSection = () => {
  return (
    
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-12 md:mt-5"
    >
      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">Contact</h1>
      <p className="mb-8">Let&apos;s get in touch</p>
      <hr className="border-t border-dashed border-gray-400 my-5" />

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 item">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-target relative rounded-sm p-4 flex flex-col justify-between bg-gradient-to-r ${c.bg} text-white hover:scale-[1.02] transition-transform`}
          >
            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
              <p className="text-sm opacity-80">{c.desc}</p>
            </div>

            {/* Button & Icon */}
            <div className="flex items-center justify-between mt-4">
              <span className="bg-white text-black text-sm px-3 py-2 rounded-md font-medium hover:opacity-80">
                {c.btn} <ImArrowUpRight2 className="inline ml-1" />
              </span>
              {c.icon}
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
};
