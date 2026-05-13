import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, CheckCircle2, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const Products: React.FC = () => {
  const { language, t } = useLanguage();

  const products = [
    {
      id: 'duck',
      name: t('product.duck.name'),
      desc: t('product.duck.desc'),
      price: '200 SAR',
      units: t('product.price.duck'),
      details: language === 'en' ? ['1100g+ per piece', 'Freshly processed', '100% Halal'] : ['১১০০ গ্রাম+ প্রতি পিস', 'তাজা প্রসেস করা', '১০০% হালাল'],
      image: 'https://www.agrimart.com.bd/assets/uploads/products/2023/1697014340.jpg',
      tag: language === 'en' ? 'Most Popular' : 'সবচেয়ে জনপ্রিয়'
    },
    
  ];

  return (
    <div className="bg-brand-cream min-h-screen py-20 relative overflow-hidden">
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
              {language === 'en' ? 'OUR CATALOG' : 'আমাদের ক্যাটালগ'}
            </span>
            <h1 className={cn("text-5xl sm:text-7xl font-serif text-brand-green mb-6", language === 'bn' && "font-bn text-8xl")}>
              {t('nav.products')}
            </h1>
            <p className={cn("text-brand-green/70 text-lg sm:text-xl max-w-2xl mx-auto", language === 'bn' && "font-bn text-2xl")}>
              {language === 'en' 
                ? 'Only the finest selection of farm-fresh poultry, cleaned and delivered with premium standards.'
                : 'সেরা খামারের হাঁস-মুরগির চমৎকার কালেকশন, যা প্রিমিয়াম মান বজায় রেখে পরিষ্কার এবং সরবরাহ করা হয়।'}
            </p>
          </motion.div>
        </header>

        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row gap-16 items-center",
                index % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 w-full relative">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-brand-green/10 shadow-2xl">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 via-transparent to-transparent" />
                </div>
                {product.tag && (
                  <div className="absolute -top-6 -right-6 bg-brand-orange text-white text-[10px] font-black px-6 py-3 rounded-2xl uppercase tracking-[0.2em] shadow-xl z-20">
                    {product.tag}
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-10">
                <div>
                  <h2 className={cn("text-4xl sm:text-6xl font-serif text-brand-green mb-6", language === 'bn' && "font-bn text-7xl")}>
                    {product.name}
                  </h2>
                  <div className="inline-flex flex-col items-start px-6 p-4 bg-brand-orange/5 border border-brand-orange/10 rounded-2xl mb-8">
                    <span className="text-brand-orange font-black text-2xl tracking-tighter">{product.price}</span>
                    <span className={cn("text-[10px] font-bold text-brand-orange uppercase tracking-widest opacity-60", language === 'bn' && "font-bn text-xs normal-case tracking-normal")}>
                      {product.units}
                    </span>
                  </div>
                  <p className={cn("text-brand-green/70 text-lg leading-relaxed", language === 'bn' && "font-bn text-2xl")}>
                    {product.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-brand-green/5">
                      <div className="w-2 h-2 rounded-full bg-brand-orange" />
                      <span className={cn("font-bold text-brand-green/80 text-sm", language === 'bn' && "font-bn text-lg")}>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/order"
                    className={cn("inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20", language === 'bn' && "font-bn")}
                  >
                    <ShoppingCart className="w-6 h-6" />
                    {t('common.order_now')}
                  </Link>
                  <a
                    href="https://wa.me/966553972396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn("inline-flex items-center justify-center gap-3 bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-green/90 transition-all shadow-xl shadow-brand-green/20", language === 'bn' && "font-bn")}
                  >
                    <MessageCircle className="w-6 h-6" />
                    {language === 'en' ? 'ORDER VIA WHATSAPP' : 'হোয়াটসঅ্যাপে অর্ডার করুন'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
