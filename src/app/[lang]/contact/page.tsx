import { ContactContent } from '@/app/contact/page';
import { getDictionary } from '@/lib/dictionaries';

export const generateStaticParams = () => {
  return [{ lang: 'ta' }, { lang: 'sa' }];
};

export default async function LangContact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  
  return <ContactContent dictionary={dictionary} />;
}
