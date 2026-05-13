import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Delivery: React.FC = () => {
  const { language, t } = useLanguage();

  const zones = [
    'Manfuhah', 'Azizia', 'Shifa', 'Old Chanaya', 'New Chanaya', 'No. 24', 'Batha', 'Atika', 'Surroundings'
  ];

  const bnZones = [
    'মানফুহাহ', 'আজিজিয়া', 'শিফা', 'পুরাতন চানায়া', 'নতুন চানায়া', '২৪ নম্বর', 'বাথা', 'আতিকা', 'পার্শ্ববর্তী এলাকা'
  ];

  return (
    <div className="bg-brand-cream min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-20 h-20 bg-brand-orange rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-lg shadow-brand-orange/20">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <h1 className={cn("text-5xl sm:text-7xl font-serif text-brand-green mb-8", language === 'bn' && "font-bn text-8xl")}>
              {t('delivery.title')}
            </h1>
            <p className={cn("text-brand-green/70 text-lg sm:text-xl max-w-2xl mx-auto", language === 'bn' && "font-bn text-2xl")}>
              {language === 'en' 
                ? 'We operate a proprietary fleet to ensure the highest standards of safety and freshness from our farm to your kitchen.'
                : 'আমাদের নিজস্ব ডেলিভারি ব্যবস্থা খামার থেকে রান্নাঘর পর্যন্ত সর্বোচ্চ নিরাপত্তা এবং সতেজতা নিশ্চিত করে।'}
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-md p-10 sm:p-12 rounded-[4rem] shadow-2xl border border-brand-green/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
              <h2 className={cn("text-2xl font-bold text-brand-green flex items-center gap-4", language === 'bn' && "font-bn text-3xl")}>
                <MapPin className="w-8 h-8 text-brand-orange" />
                {t('delivery.free_zones')}
              </h2>
              <span className={cn("px-4 py-2 bg-bd-green text-white text-[10px] font-black uppercase tracking-widest rounded-full", language === 'bn' && "font-bn text-xs normal-case tracking-normal")}>
                {language === 'en' ? 'FREE OF COST' : 'বিনামূল্যে'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {(language === 'en' ? zones : bnZones).map((zone) => (
                <div key={zone} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-brand-orange group-hover:scale-150 transition-transform" />
                  <span className={cn("font-bold text-brand-green/80", language === 'bn' && "font-bn text-lg")}>{zone}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-brand-green rounded-[2.5rem] text-brand-cream flex items-center justify-between shadow-xl shadow-brand-green/20">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-1 ml-1">{language === 'en' ? 'OUR HUB' : 'আমাদের অবস্থান'}</p>
                <p className={cn("text-2xl font-serif font-bold italic", language === 'bn' && "font-bn text-3xl not-italic")}>Muzammia, Riyadh</p>
              </div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <InfoCard 
              icon={<Clock className="w-8 h-8 text-brand-orange" />}
              title={language === 'en' ? 'Rapid Response' : 'দ্রুত সেবা'}
              desc={language === 'en' 
                ? 'Standard same-day delivery for all orders confirmed before 10:00 AM.' 
                : 'সকাল ১০:০০টার আগে নিশ্চিত হওয়া অর্ডারের জন্য একই দিনে ডেলিভারি দেওয়া হয়।'}
            />
            <InfoCard 
              icon={<ShieldCheck className="w-8 h-8 text-brand-orange" />}
              title={language === 'en' ? 'Cold Chain' : 'কোল্ড চেইন ব্যবস্থাপনা'}
              desc={language === 'en' 
                ? 'Your poultry remains strictly within safety temperature margins throughout transit.' 
                : 'পরিবহনের পুরো সময়ে আপনার হাঁস-মুরগি নিরাপদ তাপমাত্রার ব্যবধানে রাখা হয়।'}
            />
            <div className="bg-brand-orange p-12 rounded-[4rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className={cn("text-3xl font-serif font-bold mb-4", language === 'bn' && "font-bn text-4xl")}>
                  {language === 'en' ? 'Special Requests?' : 'বিশেষ অনুরোধ?'}
                </h3>
                <p className={cn("text-white/80 mb-10 max-w-sm text-lg", language === 'bn' && "font-bn text-xl")}>
                  {language === 'en' 
                    ? 'Need delivery at a specific hour? Talk to us directly.' 
                    : 'নির্দিষ্ট সময়ে ডেলিভারি প্রয়োজন? সরাসরি আমাদের সাথে কথা বলুন।'}
                </p>
                <a href="https://wa.me/966553972396" className={cn("inline-block bg-white text-brand-orange px-10 py-5 rounded-3xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-orange/20", language === 'bn' && "font-bn normal-case text-base tracking-normal")}>
                   WHATSAPP ORDER
                </a>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => {
  const { language } = useLanguage();
  return (
    <div className="flex gap-8 p-10 bg-white/80 backdrop-blur-sm rounded-[3rem] border border-brand-green/10 shadow-sm">
      <div className="w-16 h-16 bg-brand-green/5 rounded-2xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className={cn("text-xl font-bold text-brand-green mb-3", language === 'bn' && "font-bn text-2xl")}>{title}</h3>
        <p className={cn("text-brand-green/60 leading-relaxed font-medium", language === 'bn' && "font-bn text-lg")}>{desc}</p>
      </div>
    </div>
  );
};
