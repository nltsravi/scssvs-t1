import { HomeContent } from '@/components/pages/HomeContent';
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export const generateStaticParams = () => {
  return [{ lang: 'ta' }, { lang: 'sa' }];
};

export default async function LangHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  return <HomeContent dictionary={dictionary} />;
}
