import { getDictionary } from '@/lib/dictionaries';

export function AboutContent({ dictionary }: { dictionary: ReturnType<typeof getDictionary> }) {
  const { about } = dictionary;

  return (
    <div className="py-20 md:py-32 bg-white dark:bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-12 text-center">
          {about.title}
        </h1>
        
        <div className="space-y-16">
          <section className="bg-orange-50 dark:bg-gray-900 p-8 md:p-12 rounded-3xl border border-orange-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-orange-800 dark:text-orange-400">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.mission}
            </p>
          </section>

          <section className="bg-orange-50 dark:bg-gray-900 p-8 md:p-12 rounded-3xl border border-orange-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-orange-800 dark:text-orange-400">Our Vision</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.vision}
            </p>
          </section>

          <section className="p-4 md:p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our History</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {about.history}
            </p>
          </section>

          <section className="p-4 md:p-8 border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Founder</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {about.founder}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const dictionary = getDictionary('en');
  return <AboutContent dictionary={dictionary} />;
}
