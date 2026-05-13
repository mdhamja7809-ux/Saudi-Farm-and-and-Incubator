import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-green/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
              <span className="text-2xl font-black text-brand-green">S.F&I</span>
            </Link>
            <p className={cn("text-brand-green/60 leading-relaxed text-sm max-w-xs", language === 'bn' && "font-bn text-lg")}>
              {language === 'en' 
                ? 'Premium poultry farm fresh from Muzammia, Riyadh. Dedicated to quality and absolute hygiene.' 
                : 'রিয়াদের মুজাম্মিয়া থেকে সরাসরি খামারের প্রিমিয়াম হাঁস-মুরগি। গুণগত মান এবং সর্বোচ্চ পরিচ্ছন্নতার প্রতি আমরা দায়বদ্ধ।'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">EXPLORE</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/" className="text-brand-green/60 hover:text-brand-green font-bold text-sm transition-colors">{t('nav.home')}</Link>
                <Link to="/products" className="text-brand-green/60 hover:text-brand-green font-bold text-sm transition-colors">{t('nav.products')}</Link>
                <Link to="/delivery" className="text-brand-green/60 hover:text-brand-green font-bold text-sm transition-colors">{t('nav.delivery')}</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">CONTACT</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/contact" className="text-brand-green/60 hover:text-brand-green font-bold text-sm transition-colors">{t('nav.contact')}</Link>
                <Link to="/order" className="text-brand-green/60 hover:text-brand-green font-bold text-sm transition-colors">{t('nav.order')}</Link>
              </nav>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 md:text-right">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">ADDRESS</h4>
            <p className="text-brand-green font-bold text-sm">Muzammia, Riyadh, KSA</p>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="w-10 h-10 bg-brand-green/5 text-brand-green rounded-xl flex items-center justify-center hover:bg-brand-green hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="https://wa.me/966553972396" className="w-10 h-10 bg-brand-green/5 text-brand-green rounded-xl flex items-center justify-center hover:bg-brand-green hover:text-white transition-all"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-green/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-green/40">
            © {year} Saudi Farm & Incubator. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
