import { ProjectsContent } from '@/app/projects/page';
import { getDictionary } from '@/lib/dictionaries';

export const generateStaticParams = () => {
  return [{ lang: 'ta' }, { lang: 'sa' }];
};

export default async function LangProjects({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  return <ProjectsContent dictionary={dictionary} />;
}
