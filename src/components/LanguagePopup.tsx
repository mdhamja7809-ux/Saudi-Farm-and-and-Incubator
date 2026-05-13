import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const LanguagePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const hasSelected = localStorage.getItem('app_lang_selected');
    if (!hasSelected) {
      setIsOpen(true);
    }
  }, []);

  const handleSelect = (lang: 'en' | 'bn') => {
    setLanguage(lang);
    localStorage.setItem('app_lang_selected', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-green/40 backdrop-blur-3xl p-4 sm:p-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-[40px] shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col"
          >
            <div className="p-8 sm:p-16 text-center">
              <div className="w-20 h-20 bg-brand-green rounded-full mx-auto mb-8 flex items-center justify-center text-white text-3xl font-serif font-bold animate-pulse shadow-lg shadow-brand-green/20">
                D
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-brand-green mb-3">
                Welcome / স্বাগতম
              </h2>
              <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-12">
                Select Your Language / আপনার ভাষা নির্বাচন করুন
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <button
                  onClick={() => handleSelect('en')}
                  className="group relative border-2 border-brand-green/5 hover:border-brand-green p-10 rounded-[2.5rem] transition-all bg-brand-cream/50 flex flex-col items-center gap-6"
                >
                  <span className="text-5xl transition-transform group-hover:scale-125 duration-500">🇬🇧</span>
                  <span className="text-xl font-bold text-brand-green">English</span>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <button
                  onClick={() => handleSelect('bn')}
                  className="group relative border-2 border-brand-green/5 hover:border-bd-green p-10 rounded-[2.5rem] transition-all bg-brand-cream/50 flex flex-col items-center gap-6 font-bn"
                >
                  <span className="text-5xl transition-transform group-hover:scale-125 duration-500">🇧🇩</span>
                  <span className="text-xl font-bold text-brand-green">বাংলা</span>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-bd-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
