"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
