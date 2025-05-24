'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DateIdea, DateCategory, dateIdeas } from '../data/dateIdeas';
import { cn } from '../lib/utils';
import Navigation from '../components/Navigation';
import { useTranslation } from '../lib/i18n';

const categories: { label: string; value: DateCategory }[] = [
  { label: 'Indoor', value: 'Indoor' },
  { label: 'Outdoor', value: 'Outdoor' },
  { label: 'Creative', value: 'Creative' },
  { label: 'Quick', value: 'Quick' },
  { label: 'Free', value: 'Free' },
  { label: 'Budget', value: 'Budget' },
  { label: 'Premium', value: 'Premium' },
];

export default function Home() {
  const { t, locale, changeLanguage } = useTranslation();
  const [selectedCategories, setSelectedCategories] = useState<DateCategory[]>([]);
  const [currentIdea, setCurrentIdea] = useState<DateIdea | null>(null);

  const toggleCategory = (category: DateCategory) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getRandomIdea = () => {
    const filteredIdeas = dateIdeas.filter(idea =>
      selectedCategories.length === 0 ||
      selectedCategories.every(category => idea.categories.includes(category))
    );

    if (filteredIdeas.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    return filteredIdeas[randomIndex];
  };

  const handleShuffle = () => {
    const newIdea = getRandomIdea();
    setCurrentIdea(newIdea);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-16">
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-purple-800 mb-6"
          >
            {t('common.findDate')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-12"
          >
            {t('common.selectPreferences')}
          </motion.p>

          {/* Language Switcher */}
          <div className="mb-8">
            <button
              onClick={() => changeLanguage(locale === 'en' ? 'tr' : 'en')}
              className="px-4 py-2 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition-colors"
            >
              {locale === 'en' ? '🇹🇷 Türkçe' : '🇬🇧 English'}
            </button>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleCategory(category.value)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  selectedCategories.includes(category.value)
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-purple-600 hover:bg-purple-100'
                )}
              >
                {t(`categories.${category.value.toLowerCase()}`)}
              </motion.button>
            ))}
          </div>

          {/* Shuffle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShuffle}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {t('common.shuffleButton')}
          </motion.button>

          {/* Date Idea Card */}
          {currentIdea && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6"
            >
              <h2 className="text-2xl font-bold text-purple-800 mb-4">
                {t(`dateIdeas.${currentIdea.id}.title`)}
              </h2>
              <p className="text-gray-600 mb-4">
                {t(`dateIdeas.${currentIdea.id}.description`)}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>📍 {currentIdea.location}</span>
                <span>💰 {currentIdea.estimated_cost}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {currentIdea.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs"
                  >
                    {t(`categories.${category.toLowerCase()}`)}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </section>
      </main>
    </>
  );
} 