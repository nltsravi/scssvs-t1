import { AboutContent } from '@/components/pages/AboutContent';
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

export const generateStaticParams = () => {
  return [{ lang: 'ta' }, { lang: 'sa' }];
};

export default async function LangAbout({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  return <AboutContent dictionary={dictionary} />;
}
