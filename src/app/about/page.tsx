import { AboutContent } from '@/components/pages/AboutContent';
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, vision, history, and the founder of Shastra Vidya Sthanam.',
};

export default function About() {
  const dictionary = getDictionary('en');
  return <AboutContent dictionary={dictionary} />;
}
