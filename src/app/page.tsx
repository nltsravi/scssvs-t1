import { HomeContent } from '@/components/pages/HomeContent';
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Shastra Vidya Sthanam. A traditional institution preserving spiritual knowledge.',
};

export default function Home() {
  const dictionary = getDictionary('en');
  return <HomeContent dictionary={dictionary} />;
}
