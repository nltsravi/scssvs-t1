import { ProjectsContent } from '@/components/pages/ProjectsContent';
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Activities',
};

export const generateStaticParams = () => {
  return [{ lang: 'ta' }, { lang: 'sa' }];
};

export default async function LangProjects({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  return <ProjectsContent dictionary={dictionary} />;
}
