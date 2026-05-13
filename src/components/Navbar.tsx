import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/order', label: t('nav.order') },
    { to: '/delivery', label: t('nav.delivery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                  <span className="text-brand-cream font-bold text-xl">S</span>
                </div>
              </div>
              <span className={cn(
                "font-serif text-xl font-bold text-brand-green hidden sm:block",
                language === 'bn' && "font-bn text-2xl"
              )}>
                {language === 'en' ? 'Saudi Farm & Incubator' : 'সৌদি খামার অ্যান্ড ইনকিউবেটর'}
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-xs font-bold uppercase tracking-widest transition-colors hover:text-brand-orange",
                    isActive ? "text-brand-orange" : "text-brand-green",
                    language === 'bn' && "font-bn text-lg normal-case"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-green/10 bg-brand-green/5 hover:bg-brand-green/10 transition-colors uppercase text-[10px] font-black"
                title="Change Language"
              >
                <span>{language === 'en' ? 'ENG | বাং' : 'বাং | ENG'}</span>
              </button>
              
              <Link
                to="/order"
                className={cn(
                  "bg-brand-green text-white px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-brand-green/90 transition-all shadow-lg shadow-brand-green/20",
                  language === 'bn' && "font-bn text-sm normal-case"
                )}
              >
                {t('common.order_now')}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full border border-slate-200 transition-colors"
            >
              <Globe className="w-5 h-5 text-slate-500" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-3 rounded-xl text-lg font-medium transition-colors",
                      isActive ? "bg-orange-50 text-brand-orange" : "text-slate-600",
                      language === 'bn' && "font-bn text-xl"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4">
                <Link
                  to="/order"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-green text-white py-4 rounded-xl font-bold text-lg"
                >
                  {t('common.order_now')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
