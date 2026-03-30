"use client";

import { BookOpen, GraduationCap, School } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { motion } from 'framer-motion';

export function ProjectsContent({ dictionary }: { dictionary: ReturnType<typeof getDictionary> }) {
  const { projects } = dictionary;

  return (
    <div className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <SectionHeading 
          title="Our Activities & Projects" 
          subtitle="Explore the comprehensive list of curriculum subjects, workshops, and sabhas we host." 
          className="items-center text-center mx-auto"
        />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16"
        >
          {projects.map((p: { title: string, description: string }, i: number) => (
            <AnimatedCard 
              key={i} 
              title={p.title} 
              description={p.description} 
              icon={i % 3 === 0 ? <BookOpen /> : i % 3 === 1 ? <GraduationCap /> : <School />}
              delay={i}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  const dictionary = getDictionary('en');
  return <ProjectsContent dictionary={dictionary} />;
}
