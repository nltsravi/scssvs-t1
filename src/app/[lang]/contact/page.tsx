import { ContactContent } from '@/components/pages/ContactContent';
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export const generateStaticParams = () => {
  return [{ lang: 'ta' }, { lang: 'sa' }];
};

export default async function LangContact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  return <ContactContent dictionary={dictionary} />;
}
