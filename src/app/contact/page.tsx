import { getDictionary, navTranslations } from '@/lib/dictionaries';

export function ContactContent({ dictionary }: { dictionary: ReturnType<typeof getDictionary> }) {
  const { address, trust, phone } = dictionary.contact;
  const nav = navTranslations.en; // fallback for form strings if needed

  return (
    <div className="py-20 md:py-32 bg-white dark:bg-gray-950 min-h-screen border-t">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {address} <br/>
            {trust} <br/>
            Phone: {phone}
          </p>
        </div>
        
        <div className="bg-orange-50 dark:bg-gray-900 p-8 md:p-12 rounded-3xl border border-orange-100 dark:border-gray-800 shadow-sm">
          <form className="flex flex-col gap-6" action="https://formspree.io/f/placeholder" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input type="text" id="name" name="name" required className="flex h-12 w-full rounded-md border border-input bg-white dark:bg-gray-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" id="email" name="email" required className="flex h-12 w-full rounded-md border border-input bg-white dark:bg-gray-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" required rows={5} className="flex min-h-[120px] w-full rounded-md border border-input bg-white dark:bg-gray-950 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="How can we help you?"></textarea>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="inline-flex w-full md:w-auto items-center justify-center rounded-md bg-orange-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const dictionary = getDictionary('en');
  return <ContactContent dictionary={dictionary} />;
}
