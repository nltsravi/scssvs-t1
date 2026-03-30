import { ContactContent } from '@/components/pages/ContactContent';
import { getDictionary } from '@/lib/dictionaries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to Shastra Vidya Sthanam for inquiries, admissions, or support.',
};

export default function Contact() {
  const dictionary = getDictionary('en');
  return <ContactContent dictionary={dictionary} />;
}
