'use client';

import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import { useTranslation } from '../../lib/i18n';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-16">
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">
              {t('about.title')}
            </h1>
            
            <p className="text-lg text-gray-600 mb-12 text-center">
              {t('about.description')}
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">
                {t('about.mission')}
              </h2>
              <p className="text-gray-600">
                {t('about.missionText')}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">
                {t('about.features')}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  {t('about.feature1')}
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  {t('about.feature2')}
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  {t('about.feature3')}
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  {t('about.feature4')}
                </li>
              </ul>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
} 