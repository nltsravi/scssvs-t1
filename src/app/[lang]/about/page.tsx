import { AboutContent } from '@/app/about/page';
import { getDictionary } from '@/lib/dictionaries';

export const generateStaticParams = () => {
  return [{ lang: 'ta' }, { lang: 'sa' }];
};

export default async function LangAbout({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  return <AboutContent dictionary={dictionary} />;
}
