import { useParams, usePathname, useRouter } from 'next/navigation';
import enTranslations from '../locales/en.json';
import trTranslations from '../locales/tr.json';

const translations = {
  en: enTranslations,
  tr: trTranslations,
};

export type Language = 'en' | 'tr';

export function useTranslation() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  
  const locale = (params?.locale as Language) || 'en';
  
  const t = (key: string) => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const changeLanguage = (newLocale: Language) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return {
    t,
    locale,
    changeLanguage,
  };
} 