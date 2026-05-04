"use client";

import { useState } from 'react';
import { getDictionary, navTranslations } from '@/lib/dictionaries';
import { motion } from 'framer-motion';

export function ContactContent({ dictionary }: { dictionary: ReturnType<typeof getDictionary> }) {
  const { address, trust } = dictionary.contact;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission flow
    setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        alert("Message Sent successfully!");
    }, 1500);
  };

  return (
    <div className="py-24 md:py-32 bg-white dark:bg-gray-950 min-h-screen border-t">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <address className="text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto not-italic leading-relaxed p-6 bg-orange-50 dark:bg-gray-900 rounded-3xl border border-orange-100 dark:border-gray-800">
            <strong>{trust}</strong><br/>
            {address} <br/>
            <span className="mt-4 block font-semibold text-orange-800 dark:text-orange-400">
              Phone:{' '}
              <a href="https://wa.me/919677066635" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +91 9677066635
              </a>
              {', '}
              <a href="https://wa.me/919092712352" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +91 9092712352
              </a>
            </span>
          </address>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white dark:bg-gray-950 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl shadow-orange-900/5 mx-auto max-w-2xl"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} aria-label="Contact Form" noValidate>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Full Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                aria-required="true"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="flex h-14 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-base text-gray-900 dark:text-gray-100 ring-offset-white transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="John Doe" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email Address <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                aria-required="true"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="flex h-14 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-base text-gray-900 dark:text-gray-100 ring-offset-white transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50" 
                placeholder="john@example.com" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Message <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                required 
                aria-required="true"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                rows={5} 
                className="flex min-h-[150px] w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-base text-gray-900 dark:text-gray-100 ring-offset-white transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 resize-y" 
                placeholder="How can we help you?"
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-600/20 transition-all hover:bg-orange-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default function Contact() {
  const dictionary = getDictionary('en');
  return <ContactContent dictionary={dictionary} />;
}
