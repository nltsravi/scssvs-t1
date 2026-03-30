"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { navTranslations } from '@/lib/dictionaries';

export default function Header() {
  const pathname = usePathname() || '/';
  const lang = pathname.startsWith('/ta') ? 'ta' : pathname.startsWith('/sa') ? 'sa' : 'en';
  const nav = navTranslations[lang as keyof typeof navTranslations];
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const router = useRouter();

  const handleLanguageSwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    let newPath = pathname;
    if (lang !== 'en') {
      newPath = pathname.replace(`/${lang}`, '') || '/';
    }
    if (newLang !== 'en') {
      newPath = `/${newLang}${newPath === '/' ? '' : newPath}`;
    }
    router.push(newPath || '/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950 px-4 md:px-6 shadow-sm">
      <div className="flex h-16 md:h-20 items-center justify-between mx-auto max-w-7xl">
        <Link href={`${prefix}/`} className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Shastra Vidya Sthanam Logo" width={50} height={50} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-orange-200" />
          <span className="font-bold text-lg md:text-xl text-orange-800 tracking-tight">Shastra Vidya Sthanam</span>
        </Link>
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          <Link href={`${prefix}/`} className="text-sm font-medium hover:text-orange-600 transition-colors">{nav.home}</Link>
          <Link href={`${prefix}/about`} className="text-sm font-medium hover:text-orange-600 transition-colors">{nav.about}</Link>
          <Link href={`${prefix}/projects`} className="text-sm font-medium hover:text-orange-600 transition-colors">{nav.projects}</Link>
          <Link href={`${prefix}/contact`} className="text-sm font-medium hover:text-orange-600 transition-colors">{nav.contact}</Link>
          
          <div className="ml-4 border-l pl-4 dark:border-gray-800">
            <select 
              value={lang}
              title="Select language"
              aria-label="Select language"
              onChange={handleLanguageSwitch}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
            >
              <option value="en">English</option>
              <option value="ta">தமிழ்</option>
              <option value="sa">संस्कृतम्</option>
            </select>
          </div>
        </nav>
        
        <div className="md:hidden flex items-center gap-4">
          <select 
              value={lang} 
              title="Select language"
              aria-label="Select language"
              onChange={handleLanguageSwitch}
              className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="ta">TA</option>
              <option value="sa">SA</option>
          </select>
          <button className="p-2 text-gray-600" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
