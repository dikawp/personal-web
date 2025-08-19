'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { certificates } from '@/lib/certificate';

export const CertificateSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-12 md:mt-5"
    >
      <h1 className="text-2xl font-medium mb-2">Certificate</h1>
      <p className="text-sm text-slate-300 dark:text-slate-600">
        A selected showcase of certificates and badges I have obtained during my academic and professional journey.
      </p>
      <hr className="border-t border-dashed border-gray-400 my-5" />

      {/* Grid Certificate */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative flex flex-col bg-slate-800 dark:bg-slate-200 rounded-md overflow-hidden shadow-md cursor-target"
            onClick={() => window.open(cert.link, "_blank")}
          >
            {/* Gambar */}
            <div className="relative w-full h-44 overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              />

              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500 ease-in-out will-change-opacity">
                <span className="text-white text-sm font-medium tracking-wide">
                  Show Credential →
                </span>
              </div>
            </div>

            {/* Konten */}
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="text-sm font-bold">{cert.title}</h4>
              <p className="text-sm text-gray-400 line-clamp-1">
                {cert.publisher}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (opsional) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <Image
              src={selectedImage}
              alt="Certificate"
              width={1200}
              height={800}
              className="rounded-lg object-contain w-full h-auto"
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};
