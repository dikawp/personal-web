import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Sidebar } from "@/components/sidebar";
import ClientWrapper from "@/app/clientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DKWP | Personal Portfolio",
  description:
    "Explore DKWP’s portfolio: a fullstack web developer skilled in Next.js, React, and Tailwind CSS.",
  keywords: [
    "DKWP",
    "Portfolio",
    "Fullstack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Ramadika Wijaya" }],
  creator: "DIKAWP",
  publisher: "DIKAWP",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/image/logo.ico",
    apple: "/image/logo.png",
    shortcut: "/image/logo.png",
  },
  openGraph: {
    title: "DKWP | Personal Portfolio",
    description: "Showcasing DKWP’s projects, experience, and skills as a fullstack web developer.",
    url: "https://dikawp.vercel.app/",
    siteName: "Ramadika Wijaya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dikawp.vercel.app/image/OG.png", // taruh gambar di public/image/preview.png
        width: 1200,
        height: 630,
        alt: "DKWP Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DKWP | Personal Portfolio",
    description:
      "Discover DKWP’s journey as a fullstack web developer specializing in modern web technologies.",
    images: ["https://dikawp.vercel.app/image/OG.png"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen md:mx-44">
            <Sidebar />
            <main className="flex-1 pt-16 md:pt-0">
              <ClientWrapper>
                {children}
              </ClientWrapper>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
