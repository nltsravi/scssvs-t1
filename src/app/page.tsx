import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, School } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';

export function HomeContent({ dictionary }: { dictionary: ReturnType<typeof getDictionary> }) {
  const { home, about, projects } = dictionary;

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-32 bg-orange-50 dark:bg-gray-900 border-b overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-sm text-orange-800 dark:bg-orange-900/30 dark:border-orange-800 dark:text-orange-200 mb-4">
              {home.subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
              {home.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {home.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="inline-flex items-center justify-center rounded-md bg-orange-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                {home.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center rounded-md border border-input bg-background border-orange-200 hover:bg-orange-50 dark:hover:bg-gray-800 dark:border-gray-700 px-8 py-3 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {about.mission}
              </p>
              <Link href="/about" className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center">
                Read our full history
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-orange-50 dark:bg-gray-900 p-8 rounded-2xl border border-orange-100 dark:border-gray-800 shadow-sm relative">
              <School className="w-12 h-12 text-orange-400 mb-6 opacity-80" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">Our Activities & Programs</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                Discover the various ways we work to preserve and share traditional knowledge.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {projects.slice(0, 3).map((p: { title: string, description: string }, i: number) => (
              <div key={i} className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                  {i === 0 ? <BookOpen /> : i === 1 ? <GraduationCap /> : <School />}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
              View all programs <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const dictionary = getDictionary('en');
  return <HomeContent dictionary={dictionary} />;
}
