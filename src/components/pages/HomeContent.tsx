"use client";

import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, School } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCard } from '@/components/ui/AnimatedCard';

export function HomeContent({ dictionary }: { dictionary: ReturnType<typeof getDictionary> }) {
  const { home, about, projects } = dictionary;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-48 min-h-[85vh] flex items-center justify-center border-b overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/scssvs-t1" : ""}/svs-hero.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-950/90 via-gray-950/70 to-gray-900/60 mix-blend-multiply" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-orange-500/30 bg-black/40 px-4 py-1.5 text-sm font-medium text-orange-200 shadow-sm backdrop-blur-md"
            >
              {home.subtitle}
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-xl shadow-black">
              {home.title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed font-medium drop-shadow-md shadow-black">
              {home.heroDescription}
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
            >
              <Link href="/projects" className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange-900/40 transition-all hover:-translate-y-0.5 hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
                {home.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/about" className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-white/30 bg-black/30 backdrop-blur-md px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {about.mission}
              </p>
              <Link href="/about" className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 rounded-sm">
                Read our full history
                <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-orange-50 dark:bg-gray-900 p-8 md:p-10 rounded-3xl border border-orange-100 dark:border-gray-800 shadow-sm relative overflow-hidden"
            >
              <School className="w-16 h-16 text-orange-400 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vision</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                {about.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Preview Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeading 
            title="Our Activities & Programs" 
            subtitle="Discover the various ways we work to preserve and share traditional knowledge." 
          />
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {projects.slice(0, 3).map((p: { title: string, description: string }, i: number) => (
              <AnimatedCard 
                key={i} 
                title={p.title} 
                description={p.description} 
                icon={i === 0 ? <BookOpen /> : i === 1 ? <GraduationCap /> : <School />}
                delay={i}
              />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link href="/projects" className="inline-flex items-center justify-center rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 px-6 py-3 text-base font-semibold text-gray-900 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-orange-600 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
              View all programs 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const dictionary = getDictionary('en');
  return <HomeContent dictionary={dictionary} />;
}
