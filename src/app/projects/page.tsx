import { ProjectsContent } from '@/components/pages/ProjectsContent';
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Activities',
  description: 'Explore our curriculum spanning Veda, Vyakarana, Nyaya, and Vedanta alongside frequent workshops and sabhas.',
};

export default function Projects() {
  const dictionary = getDictionary('en');
  return <ProjectsContent dictionary={dictionary} />;
}
