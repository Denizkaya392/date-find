'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import { useTranslation } from '@/app/lib/i18n';

export default function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const handleEggClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 4) {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      
      <main className="container mx-auto px-4 pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-4 text-purple-800">
            {t('contact.title')}
          </h1>
          <p className="text-center text-gray-600 mb-8">
            {t('contact.description')}
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              {t('contact.form.submit')}
            </motion.button>

            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-600 text-center"
                >
                  {t('contact.form.success')}
                </motion.p>
              )}
              {formStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-600 text-center"
                >
                  {t('contact.form.error')}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </main>

      {/* Easter Egg */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        whileHover={{ opacity: 0.5, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleEggClick}
        className="fixed bottom-4 right-4 cursor-pointer"
      >
        <span className="text-2xl">🥚</span>
      </motion.div>

      {/* Hidden Message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="text-2xl font-bold text-pink-500">
              I love you Karolina ❤️ 🐸
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 