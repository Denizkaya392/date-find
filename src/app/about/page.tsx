'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-16">
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
          >
            <h1 className="text-3xl font-bold text-purple-800 mb-6">About Date-Find</h1>
            <p className="text-gray-600 mb-4">
              Date-Find is a fun and creative way to discover new date ideas for couples. Whether you&apos;re looking for something
              spontaneous, budget-friendly, or a special occasion, we&apos;ve got you covered!
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to help couples create memorable experiences together without the stress of planning. Simply select
              your preferences, and let us surprise you with unique date ideas tailored to your interests.
            </p>
            <h2 className="text-xl font-semibold text-purple-700 mt-8 mb-4">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Choose your preferences from our filter options</li>
              <li>Click the Shuffle button to get a random date idea</li>
              <li>Explore the suggested activity with your partner</li>
              <li>Keep shuffling to discover more ideas!</li>
            </ol>
          </motion.div>
        </section>
      </main>
    </>
  );
} 