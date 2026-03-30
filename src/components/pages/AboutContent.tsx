"use client";

import { getDictionary } from '@/lib/dictionaries';
import { motion } from 'framer-motion';

export function AboutContent({ dictionary }: { dictionary: ReturnType<typeof getDictionary> }) {
  const { about } = dictionary;

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="py-20 md:py-32 bg-white dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-16 text-center"
        >
          {about.title}
        </motion.h1>
        
        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="space-y-12 md:space-y-16"
        >
          <motion.section variants={itemVars} className="bg-orange-50/50 dark:bg-gray-900 p-8 md:p-12 rounded-3xl border border-orange-100/50 dark:border-gray-800 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-extrabold mb-6 text-orange-800 dark:text-orange-400">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.mission}
            </p>
          </motion.section>

          <motion.section variants={itemVars} className="bg-orange-50/50 dark:bg-gray-900 p-8 md:p-12 rounded-3xl border border-orange-100/50 dark:border-gray-800 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-extrabold mb-6 text-orange-800 dark:text-orange-400">Our Vision</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.vision}
            </p>
          </motion.section>

          <motion.section variants={itemVars} className="p-4 md:p-8">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white border-b pb-4 dark:border-gray-800">Our History</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {about.history}
            </p>
          </motion.section>

          <motion.section variants={itemVars} className="p-4 md:p-8 border-t border-gray-100 dark:border-gray-800 pt-16">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white border-b pb-4 dark:border-gray-800">Founder</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {about.founder}
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}

export default function About() {
  const dictionary = getDictionary('en');
  return <AboutContent dictionary={dictionary} />;
}
