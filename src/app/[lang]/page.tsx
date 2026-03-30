import { HomeContent } from '@/app/page';
import { getDictionary } from '@/lib/dictionaries';

export const generateStaticParams = () => {
  return [{ lang: 'ta' }, { lang: 'sa' }];
};

export default async function LangHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  return <HomeContent dictionary={dictionary} />;
}
