"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export function AnimatedCard({ title, description, icon, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-2xl shadow-sm border border-orange-50 dark:border-gray-800 hover:shadow-lg transition-shadow group flex flex-col h-full ring-1 ring-transparent hover:ring-orange-200 dark:hover:ring-orange-900/50"
    >
      <div className="bg-orange-50 dark:bg-orange-900/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-orange-100 dark:border-orange-950">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 flex-grow leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
