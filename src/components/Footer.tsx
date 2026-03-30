"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary, navTranslations } from '@/lib/dictionaries';

export default function Footer() {
  const pathname = usePathname() || '/';
  const lang = pathname.startsWith('/ta') ? 'ta' : pathname.startsWith('/sa') ? 'sa' : 'en';
  const dictionary = getDictionary(lang);
  const { address, phone } = dictionary.contact;
  const nav = navTranslations[lang as keyof typeof navTranslations];
  const prefix = lang === 'en' ? '' : `/${lang}`;

  return (
    <footer className="w-full bg-orange-50 dark:bg-gray-900 border-t py-10 md:py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-bold text-xl text-orange-800">Shastra Vidya Sthanam</div>
          <p className="text-sm text-gray-500 max-w-sm text-center md:text-left">
            {address} <br/>
            Phone: {phone}
          </p>
        </div>
        
        <nav className="flex gap-4 md:gap-6">
          <Link href={`${prefix}/`} className="text-sm hover:underline text-gray-600 transition-colors">{nav.home}</Link>
          <Link href={`${prefix}/about`} className="text-sm hover:underline text-gray-600 transition-colors">{nav.about}</Link>
          <Link href={`${prefix}/projects`} className="text-sm hover:underline text-gray-600 transition-colors">{nav.projects}</Link>
          <Link href={`${prefix}/contact`} className="text-sm hover:underline text-gray-600 transition-colors">{nav.contact}</Link>
        </nav>
      </div>
      
      <div className="mt-8 border-t pt-8 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500">© 2026 Shastra Vidya Sthanam. All rights reserved.</p>
      </div>
    </footer>
  );
}
