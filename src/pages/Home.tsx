import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="overflow-hidden relative min-h-screen">
      {/* Mesh Background */}
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />

      {/* Marquee Deal Banner */}
      <div className="h-10 bg-brand-orange text-white flex items-center overflow-hidden whitespace-nowrap border-t border-black/5 z-20 relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className={cn("flex items-center gap-20 px-10 font-bold text-sm tracking-wide lowercase", language === 'bn' && "font-bn text-lg normal-case")}
        >
          <span>{t('hero.deal')} • WHATSAPP: 0553972396 • FREE DELIVERY</span>
          <span>{t('hero.deal')} • WHATSAPP: 0553972396 • FREE DELIVERY</span>
          <span>{t('hero.deal')} • WHATSAPP: 0553972396 • FREE DELIVERY</span>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={cn(
                "inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded",
                language === 'bn' && "font-bn text-base tracking-normal"
              )}>
                {language === 'en' ? 'Authentic Riyadh Selection' : 'রিয়াদের আসল পছন্দ'}
              </span>
              <h1 className={cn(
                "text-5xl sm:text-6xl lg:text-8xl font-serif leading-[1.05] text-brand-green mb-8",
                language === 'bn' && "font-bn leading-[1.2] text-7xl"
              )}>
                {language === 'en' ? (
                  <>Freshness from Farm <br/><span className="italic text-brand-orange font-serif">Straight to Home.</span></>
                ) : (
                  <>{t('hero.title')}</>
                )}
              </h1>
              <p className={cn(
                "text-[#1B3022]/70 text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0",
                language === 'bn' && "font-bn text-2xl"
              )}>
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/order"
                  className={cn(
                    "flex items-center justify-center gap-3 bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20 w-full sm:w-auto",
                    language === 'bn' && "font-bn"
                  )}
                >
                  {t('hero.cta.order')}
                </Link>
                <a
                  href="https://wa.me/966553972396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center gap-3 border-2 border-brand-green text-brand-green px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-green/5 transition-all w-full sm:w-auto uppercase tracking-tighter",
                    language === 'bn' && "font-bn normal-case tracking-normal"
                  )}
                >
                  {t('hero.cta.whatsapp')}
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="grid grid-cols-1 gap-4">
              <ProductFeaturedCard 
                title={t('product.duck.name')}
                price="200 SAR"
                desc="5 Pieces / 1100g+ Avg Weight."
                iconColor="bg-brand-green/10"
                iconText="D"
                lang={language}
              />
              <ProductFeaturedCard 
                title={t('product.chicken.name')}
                price="65 SAR"
                desc="Standard Weight. Organic & Healthy."
                iconColor="bg-brand-orange/10"
                iconText="C"
                lang={language}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Delivery Zones Banner in Home */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-brand-green text-brand-cream p-8 sm:p-12 rounded-[3rem] shadow-2xl flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h4 className={cn("text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-50", language === 'bn' && "font-bn tracking-normal text-base opacity-70")}>
                {t('delivery.free_zones')}
              </h4>
              <div className={cn("grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm font-bold opacity-90", language === 'bn' && "font-bn text-lg")}>
                <div>• Manfuhah</div>
                <div>• Azizia</div>
                <div>• Shifa</div>
                <div>• Batha</div>
                <div>• Atika</div>
                <div>• Old Chanaya</div>
              </div>
            </div>
            <div className="w-full lg:w-px h-px lg:h-20 bg-brand-cream/20" />
            <div className="text-center lg:text-left">
              <p className={cn("text-brand-orange font-serif italic text-2xl mb-2", language === 'bn' && "font-bn not-italic")}>
                {language === 'en' ? 'Direct Farm Fresh Delivery' : 'সরাসরি খামার থেকে তাজা ডেলিভারি'}
              </p>
              <p className="opacity-60 text-xs uppercase tracking-widest">{t('delivery.location')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductFeaturedCard = ({ title, price, desc, iconColor, iconText, lang }: { title: string, price: string, desc: string, iconColor: string, iconText: string, lang: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-sm border border-brand-green/10 p-6 rounded-3xl flex items-center gap-6 shadow-sm hover:shadow-xl transition-all"
    >
      <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0", iconColor)}>
        <span className="text-brand-green font-black text-3xl">{iconText}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <h3 className={cn("text-xl font-bold text-brand-green truncate", lang === 'bn' && "font-bn text-2xl")}>{title}</h3>
          <span className="text-brand-orange font-black whitespace-nowrap ml-4">{price}</span>
        </div>
        <p className={cn("text-xs text-gray-500 mb-4", lang === 'bn' && "font-bn text-base")}>{desc}</p>
        <Link to="/order" className={cn("text-[10px] font-black text-white bg-bd-green px-4 py-2 rounded-lg inline-block uppercase tracking-wider", lang === 'bn' && "font-bn normal-case text-xs")}>
          ORDER NOW
        </Link>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => {
  const { language } = useLanguage();
  return (
    <div className="p-10 rounded-3xl bg-brand-cream border border-slate-100 hover:shadow-xl transition-all group">
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className={cn("text-xl font-bold text-brand-green mb-4", language === 'bn' && "font-bn text-2xl")}>{title}</h3>
      <p className={cn("text-slate-500 leading-relaxed", language === 'bn' && "font-bn text-lg")}>{desc}</p>
    </div>
  );
};

const ProductCard = ({ title, price, image, badge }: { title: string, price: string, image: string, badge?: string }) => {
  const { language, t } = useLanguage();
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
      <div className="relative aspect-square">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        {badge && (
          <div className="absolute top-6 left-6 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {badge}
          </div>
        )}
      </div>
      <div className="p-8">
        <h3 className={cn("text-xl font-bold text-brand-green mb-2", language === 'bn' && "font-bn text-2xl")}>{title}</h3>
        <p className="text-brand-orange font-bold text-lg mb-6">{price}</p>
        <Link 
          to="/order" 
          className={cn("block w-full text-center bg-slate-100 text-slate-800 py-4 rounded-2xl font-bold hover:bg-brand-green hover:text-white transition-all", language === 'bn' && "font-bn")}
        >
          {t('common.order_now')}
        </Link>
      </div>
    </div>
  );
};
