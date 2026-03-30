import { BookOpen, GraduationCap, School } from 'lucide-react';
import { getDictionary, navTranslations } from '@/lib/dictionaries';

export function ProjectsContent({ dictionary }: { dictionary: ReturnType<typeof getDictionary> }) {
  const { projects } = dictionary;

  return (
    <div className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Our Projects & Activities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our programs dedicated to the rigorous study of Shastras and Vedas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p: { title: string, description: string }, i: number) => (
            <div key={i} className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-orange-100 dark:border-gray-800 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-8 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                {i % 3 === 0 ? <BookOpen /> : i % 3 === 1 ? <GraduationCap /> : <School />}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{p.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const dictionary = getDictionary('en');
  return <ProjectsContent dictionary={dictionary} />;
}
