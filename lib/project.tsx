import { RiFirebaseFill, RiHtml5Fill, RiCss3Fill, RiJavascriptFill } from "react-icons/ri";
import { SiExpo, SiLaravel, SiBootstrap, SiPhp, SiFigma, SiReact, SiDotnet, SiTailwindcss, SiPython, SiRoboflow, SiFlask, SiNextdotjs  } from 'react-icons/si';
import { ChevronsUp } from 'lucide-react';
import { TbBrandMysql, TbBrandCSharp } from "react-icons/tb";
import { LuBird } from 'react-icons/lu';

export const projects = [
  {
    slug: 'compro-rajawali',
    title: 'Company Profile - PT. RAJAWALI CHAKTI UTAMA',
    description: 'company profile website for PT. Rajawali Chakti Utama, a construction services company based in Surabaya, Indonesia. Built with Laravel and Tailwind CSS for a modern and responsive design.',
    image: '/projects/compro.webp',
    tech: [
      <SiLaravel key="nextjs" />,
      <SiTailwindcss key="tailwind" />,
    ],
    link: '/projects/compro-rajawali',
    demo: 'https://ptrcu.com/',
  },
  {
    slug: 'kana-learning',
    title: 'Kana Learning',
    description: 'Kana Learning is a web application designed to help users learn the Kana writing system used in the Japanese language. It provides interactive lessons, quizzes, and resources to facilitate effective learning.',
    image: '/projects/kana.webp',
    tech: [
      <SiNextdotjs key="nextjs" />,
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
    ],
    link: '/projects/kana-learning',
    demo: 'https://kanalearn.vercel.app/',
  },
  {
    slug: 'sistem-sekolah',
    title: 'Sistem Administrasi Pembayaran Sekolah',
    description: 'A web-based system for managing school payment administration, featuring structured payment records and financial recap reports.',
    image: '/projects/siaps.webp',
    tech: [
      <SiPhp key="php" />,
      <SiLaravel key="laravel" />,
      <TbBrandMysql key="mysql" />,
      <SiBootstrap key="bootstrap" />,
    ],
    link: '/projects/sistem-sekolah'
  },
  {
    slug: 'helpdesk',
    title: 'Help Desk - Surabaya Tax',
    description: 'Help Desk is a web application designed to assist users in managing and resolving issues related to Surabaya Tax services. It provides a platform for users to submit inquiries, track their status, and receive assistance from support staff.',
    image: '/projects/helpdesk.webp',
    tech: [
      <TbBrandCSharp key="csharp" />,
      <SiDotnet key=".net" />,
      <TbBrandMysql key="mysql" />,
      <LuBird key="tawkto" />,
    ],
    link: '/projects/helpdesk'
  },
  {
    slug: 'log-viewer',
    title: 'Log Viewer',
    description: 'Log Viewer is a web application designed to help users view and analyze log files efficiently, providing features for searching, filtering, and visualizing log data.',
    image: '/projects/log.webp',
    tech: [
      <TbBrandCSharp key="csharp" />,
      <SiDotnet key=".net" />,
      <TbBrandMysql key="mysql" />,
    ],
    link: '/projects/log-viewer'
  },
  {
    slug: 'personal-website',
    title: 'Personal Website V1',
    description: 'This is the old version of my personal website, showcasing my portfolio and skills. It is built with Next.js and Tailwind CSS, providing a responsive and modern design.',
    image: '/projects/porto.webp',
    tech: [
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
    ],
    link: '/projects/personal-website',
    demo: 'https://dikawp.github.io/dkwp/'
  },
  {
    slug: 'sistem-pemberkasan',
    title: 'Sistem Pemberkasan',
    description: 'Sistem Pemberkasan is a web application designed to manage and organize documents efficiently, providing features for uploading, searching, and categorizing files.',
    image: '/projects/pemberkasan.webp',
    tech: [
      <TbBrandCSharp key="csharp" />,
      <SiDotnet key=".net" />,
      <TbBrandMysql key="mysql" />,
    ],
    link: '/projects/sistem-pemberkasan'
  },
  {
    slug: 'Pandu-object-detection',
    title: 'Sistem Deteksi Toilet Ramah Disabilitas',
    description: 'This dummy project is built with Roboflow and Flask to practice neural networks and object detection, simulating the detection of accessibility features like toilets and grab bars.',
    image: '/projects/pandu.webp',
    tech: [
      <SiPython key="python" />,
      <SiFlask key="flask" />,
      <SiRoboflow key="roboflow" />,
    ],
    link: '/projects/Pandu-object-detection',
    github: 'https://github.com/dikawp/flask-roboflow'
  },
  {
    slug: 'inshanity-goods',
    title: 'Inshanity Goods - B2C Mobile App',
    description: 'InshanityGoods is a B2C mobile application focused on selling furniture. The app is integrated with Midtrans as its payment gateway, ensuring secure and seamless transactions.',
    image: '/projects/inshanity.webp',
    tech: [
      <SiReact key="react" />,
      <ChevronsUp key="gluestack" />,
      <RiFirebaseFill key="firebase" />,
      <SiExpo key="expo" />
    ],
    link: '/projects/inshanity-goods',
    github: 'https://github.com/dikawp/InshanityGoods-B2C'
  },
  {
    slug: 'sitodo',
    title: 'SiToDo - Task Management Website',
    description: 'SiTodo is a Laravel and SQL-based task management platform that helps teams create workspaces, assign tasks, and collaborate efficiently in a single, organized environment',
    image: '/projects/sitodo.webp',
    tech: [
      <SiPhp key="php" />,
      <SiLaravel key="laravel" />,
      <SiBootstrap key="bootsrap" />,
      <TbBrandMysql key="MySql" />
    ],
    link: '/projects/sitodo',
    github: 'https://github.com/dikawp/SIToDo-TaskManagement'
  },
  {
    slug: 'gn-shoppu',
    title: 'Gn Shoppu - UI Design',
    description: 'GnShoppu is a UI/UX concept design for a mobile application that adopts the B2C (Business-to-Customer) model.',
    image: '/projects/gnshop.webp',
    tech: [
      <SiFigma key="figma" />,
    ],
    link: '/projects/gn-shoppu'
  },
  {
    slug: 'bandai',
    title: 'Bandai - Landing Page',
    description: 'This website is a sliced and redesigned version of Bandai Namco’s landing page, focusing on modern and responsive UI',
    image: '/projects/bandai.webp',
    tech: [
      <RiHtml5Fill key="html" />,
      <RiCss3Fill key="css" />,
      <RiJavascriptFill key="js" />
    ],
    link: '/projects/bandai',
    demo: 'https://dikawp.github.io/uts-bandai/'
  },
];
