import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Tag, Smartphone, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-brand-cream min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={cn(
              "inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded",
              language === 'bn' && "font-bn text-base tracking-normal"
            )}>
              {language === 'en' ? 'AVAILABLE 24/7' : '২৪/৭ উপলব্ধ'}
            </span>
            <h1 className={cn("text-5xl sm:text-7xl font-serif text-brand-green mb-8", language === 'bn' && "font-bn text-8xl")}>
              {t('contact.title')}
            </h1>
            <p className={cn("text-brand-green/70 text-lg sm:text-xl max-w-2xl mx-auto", language === 'bn' && "font-bn text-2xl")}>
              {language === 'en' 
                ? 'The fastest way to reach our farm management office. We prioritize WhatsApp communication.'
                : 'আমাদের খামার ব্যবস্থাপনা অফিসের সাথে যোগাযোগ করার দ্রুততম উপায়। আমরা হোয়াটসঅ্যাপ যোগাযোগকে অগ্রাধিকার দিই।'}
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-md p-10 sm:p-20 rounded-[5rem] shadow-2xl border border-brand-green/10 flex flex-col justify-center"
          >
            <div>
              <h2 className={cn("text-4xl font-serif text-brand-green mb-12", language === 'bn' && "font-bn text-5xl")}>
                {language === 'en' ? 'Get in Touch' : 'যোগাযোগ করুন'}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">WhatsApp Only</p>
                  <p className="text-3xl font-black text-brand-green">0553972396</p>
                  <p className={cn("text-sm text-brand-green/50 font-bold", language === 'bn' && "font-bn text-base")}>
                    {t('contact.whatsapp_only')}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">Bulk Supply</p>
                  <p className={cn("text-lg font-bold text-brand-green leading-snug", language === 'bn' && "font-bn text-xl")}>
                    {t('contact.bulk')}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">Farm Location</p>
                  <p className={cn("text-lg font-bold text-brand-green", language === 'bn' && "font-bn text-xl")}>
                    Muzammia, Riyadh, Saudi Arabia
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">Connect</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-brand-green text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><Instagram className="w-6 h-6" /></a>
                    <a href="#" className="w-12 h-12 bg-white border border-brand-green/10 text-brand-green rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><Mail className="w-6 h-6" /></a>
                  </div>
                </div>
              </div>
              
              <div className="mt-20">
                <a
                  href="https://wa.me/966553972396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-flex items-center justify-center gap-4 bg-brand-green text-white px-12 py-6 rounded-3xl font-black uppercase text-sm tracking-widest hover:bg-brand-green/90 transition-all shadow-2xl shadow-brand-green/30", language === 'bn' && "font-bn normal-case tracking-normal text-lg")}
                >
                  <MessageCircle className="w-7 h-7" />
                  WHATSAPP US NOW
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick FAQ/Sidebar Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-brand-orange p-12 rounded-[5rem] shadow-2xl text-white flex flex-col justify-between overflow-hidden relative"
          >
            <div className="relative z-10">
              <h3 className={cn("text-3xl font-serif font-bold mb-10", language === 'bn' && "font-bn text-4xl")}>
                {language === 'en' ? 'Common Inquiries' : 'সাধারণ জিজ্ঞাসা'}
              </h3>
              <div className="space-y-10">
                <div>
                  <h5 className="font-black text-[10px] uppercase tracking-widest text-white/50 mb-3">
                    {language === 'en' ? 'TIMELINE' : 'সময়সীমা'}
                  </h5>
                  <p className={cn("text-lg font-bold leading-relaxed", language === 'bn' && "font-bn text-xl")}>
                    {language === 'en' 
                      ? 'Same-day delivery is guaranteed for orders before 10 AM.' 
                      : 'সকাল ১০টার আগের অর্ডারের জন্য একই দিনে ডেলিভারি নিশ্চিত।'}
                  </p>
                </div>
                <div>
                  <h5 className="font-black text-[10px] uppercase tracking-widest text-white/50 mb-3">
                    {language === 'en' ? 'PAYMENT' : 'পেমেন্ট'}
                  </h5>
                  <p className={cn("text-lg font-bold leading-relaxed", language === 'bn' && "font-bn text-xl")}>
                    {language === 'en' 
                      ? 'We accept Cash and Network cards on delivery.' 
                      : 'আমরা ডেলিভারির সময় নগদ এবং নেটওয়ার্ক কার্ড গ্রহণ করি।'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-white/10 rounded-[2.5rem] border border-white/10 relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">OPERATIONS</p>
              <p className="text-3xl font-black italic font-serif">08 - 21:00</p>
            </div>

            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
