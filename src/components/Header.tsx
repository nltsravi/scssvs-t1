"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { navTranslations } from '@/lib/dictionaries';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: `${prefix}/`, label: nav.home },
    { href: `${prefix}/about`, label: nav.about },
    { href: `${prefix}/projects`, label: nav.projects },
    { href: `${prefix}/contact`, label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/90 dark:bg-gray-950/90 px-4 md:px-6 shadow-sm transition-all">
      <div className="flex h-16 md:h-20 items-center justify-between mx-auto max-w-7xl relative">
        <Link href={`${prefix}/`} className="flex items-center gap-2 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm">
          <Image src="/logo.jpg" alt="Shastra Vidya Sthanam Logo" width={50} height={50} className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border border-orange-200" priority />
          <span className="font-extrabold text-lg md:text-xl text-orange-800 tracking-tight hidden sm:block">Shastra Vidya Sthanam</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center" aria-label="Desktop Navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold hover:text-orange-600 dark:hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 px-2 py-1 rounded-sm">
              {link.label}
            </Link>
          ))}
          
          <div className="ml-4 border-l pl-4 dark:border-gray-800">
            <select 
              value={lang}
              title="Select language"
              aria-label="Select language"
              onChange={handleLanguageSwitch}
              className="bg-transparent text-sm font-semibold text-gray-700 dark:text-gray-300 focus:outline-none cursor-pointer hover:bg-orange-50 dark:hover:bg-gray-800 p-1 rounded-md transition-colors"
            >
              <option value="en">English (EN)</option>
              <option value="ta">தமிழ் (TA)</option>
              <option value="sa">संस्कृतम् (SA)</option>
            </select>
          </div>
        </nav>
        
        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" 
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile View Sheet */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" 
                aria-hidden="true"
              />
              <motion.nav 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-gray-950 shadow-2xl z-40 flex flex-col pt-24 px-6 gap-6 md:hidden border-l border-gray-100 dark:border-gray-800"
                aria-label="Mobile Navigation"
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-orange-600 transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-4 flex flex-col">
                  <span className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">Language / மொழி</span>
                  <select 
                      value={lang} 
                      title="Select language"
                      aria-label="Select language"
                      onChange={handleLanguageSwitch}
                      className="w-full bg-orange-50 dark:bg-gray-900 border border-orange-100 dark:border-gray-800 text-base font-medium text-gray-800 dark:text-gray-200 p-3 rounded-lg focus:outline-none cursor-pointer"
                    >
                      <option value="en">English (EN)</option>
                      <option value="ta">தமிழ் (TA)</option>
                      <option value="sa">संस्कृतम् (SA)</option>
                  </select>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
