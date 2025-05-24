'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../lib/i18n';

export default function Navigation() {
  const pathname = usePathname();
  const { t, locale } = useTranslation();

  const isActive = (path: string) => {
    return pathname === `/${locale}${path}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="text-xl font-bold text-purple-800">
            Date-Find
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href={`/${locale}`}
              className={`text-sm font-medium transition-colors ${
                isActive('') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              {t('navigation.home')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              {t('navigation.about')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              {t('navigation.contact')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 