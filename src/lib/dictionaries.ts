import english from '../../public/content/english.json';
import tamil from '../../public/content/tamil.json';
import sanskrit from '../../public/content/sanskrit.json';

const dictionaries = {
  en: english,
  ta: tamil,
  sa: sanskrit,
};

export const getDictionary = (locale: string) => {
  return dictionaries[locale as keyof typeof dictionaries] || dictionaries.en;
};

export const navTranslations = {
  en: { home: "Home", about: "About Us", projects: "Projects", contact: "Contact Us" },
  ta: { home: "முகப்பு", about: "எங்களை பற்றி", projects: "திட்டங்கள்", contact: "தொடர்புக்கு" },
  sa: { home: "गृहम्", about: "अस्माकं विषये", projects: "कार्यक्रमा:", contact: "सम्पर्क:" },
};
