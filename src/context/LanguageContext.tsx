import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.order': 'Order',
    'nav.delivery': 'Delivery',
    'nav.contact': 'Contact',
    'hero.title': 'Fresh Duck & Deshi Chicken Delivered to Your Door',
    'hero.subtitle': 'Premium quality poultry, raised with care, delivered fresh across Riyadh.',
    'hero.cta.whatsapp': 'Order on WhatsApp',
    'hero.cta.order': 'See Foods',
    'hero.deal': 'Grand Opening Deal: Buy 5 Ducks for only 200 SAR!',
    'lang.selection.title': 'Welcome to Saudi Farm & Incubator',
    'lang.selection.subtitle': 'Please select your preferred language to continue',
    'product.duck.name': 'Fresh Duck',
    'product.duck.desc': 'Hand-picked premium ducks, processed fresh daily.',
    'product.chicken.name': 'Deshi Chicken',
    'product.chicken.desc': 'Authentic home-grown taste, high protein, fresh meat.',
    'product.turkey.name': 'Ready-to-Cook Turkey',
    'product.turkey.desc': 'Perfect for family gatherings and special occasions.',
    'product.price.duck': '5 pcs / 200 SAR (1100g+)',
    'order.title': 'Place Your Order',
    'order.whatsapp.title': 'Quick WhatsApp Order',
    'order.whatsapp.desc': 'Click below to send us a message directly.',
    'order.form.title': 'Full Order Form',
    'order.form.name': 'Full Name',
    'order.form.phone': 'Phone Number',
    'order.form.product': 'Select Product',
    'order.form.quantity': 'Quantity',
    'order.form.area': 'Delivery Area',
    'order.form.date': 'Preferred Delivery Date',
    'order.form.notes': 'Special Notes',
    'order.form.submit': 'Submit & Order via WhatsApp',
    'order.form.total': 'Total Price',
    'delivery.title': 'Delivery Information',
    'delivery.free_zones': 'Free Delivery Zones',
    'delivery.location': 'Our Location: Muzammia',
    'contact.title': 'Contact Us',
    'contact.whatsapp_only': 'WhatsApp Only: 0553972396 (No calls)',
    'contact.bulk': 'Bulk discounts available for hotels and restaurants.',
    'footer.rights': 'All Rights Reserved.',
    'common.order_now': 'Order Now',
  },
  bn: {
    'nav.home': 'হোম',
    'nav.products': 'পণ্যসমূহ',
    'nav.order': 'অর্ডার',
    'nav.delivery': 'ডেলিভারি',
    'nav.contact': 'যোগাযোগ',
    'hero.title': 'তাজা হাঁস এবং দেশি মুরগি আপনার দরজায়',
    'hero.subtitle': 'সেরা মানের হাঁস-মুরগি, যত্নে লালন-পালন করা, রিয়াদ জুড়ে তাজা সরবরাহ।',
    'hero.cta.whatsapp': 'হোয়াটসঅ্যাপে অর্ডার করুন',
    'hero.cta.order': 'খাবার দেখুন',
    'hero.deal': 'উদ্বোধনী অফার: ৫টি হাঁস মাত্র ২০০ রিয়ালে!',
    'lang.selection.title': 'সৌদি খামার অ্যান্ড ইনকিউবেটরে স্বাগতম',
    'lang.selection.subtitle': 'চালিয়ে যেতে আপনার পছন্দের ভাষা নির্বাচন করুন',
    'product.duck.name': 'তাজা হাঁস',
    'product.duck.desc': 'প্রতিদিন তাজা প্রসেস করা সেরা মানের হাঁস।',
    'product.chicken.name': 'দেশি মুরগি',
    'product.chicken.desc': 'খাঁটি দেশি স্বাদ, উচ্চ প্রোটিন সম্পন্ন তাজা মাংস।',
    'product.turkey.name': 'রান্নার জন্য প্রস্তুত টার্কি',
    'product.turkey.desc': 'পারিবারিক অনুষ্ঠান এবং বিশেষ অনুষ্ঠানের জন্য উপযুক্ত।',
    'product.price.duck': '৫ পিস / ২০০ রিয়াল (১১০০ গ্রাম+)',
    'order.title': 'আপনার অর্ডার দিন',
    'order.whatsapp.title': 'সরাসরি হোয়াটসঅ্যাপে অর্ডার',
    'order.whatsapp.desc': 'সরাসরি আমাদের মেসেজ পাঠাতে নিচে ক্লিক করুন।',
    'order.form.title': 'অর্ডার ফর্ম',
    'order.form.name': 'আপনার নাম',
    'order.form.phone': 'ফোন নম্বর',
    'order.form.product': 'পণ্য নির্বাচন করুন',
    'order.form.quantity': 'পরিমাণ',
    'order.form.area': 'ডেলিভারি এলাকা',
    'order.form.date': 'কাঙ্ক্ষিত ডেলিভারি তারিখ',
    'order.form.notes': 'বিশেষ নোট (যদি থাকে)',
    'order.form.submit': 'সাবমিট এবং হোয়াটসঅ্যাপে ক্লিক করুন',
    'order.form.total': 'মোট দাম',
    'delivery.title': 'ডেলিভারি তথ্য',
    'delivery.free_zones': 'ফ্রি ডেলিভারি এলাকাগুলি',
    'delivery.location': 'আমাদের অবস্থান: মুজাম্মিয়া',
    'contact.title': 'যোগাযোগ করুন',
    'contact.whatsapp_only': 'শুধুমাত্র হোয়াটসঅ্যাপ: ০৫৫৩৯৭২৩৯৬ (কল গ্রহণ করা হয় না)',
    'contact.bulk': 'হোটেল এবং রেস্টুরেন্টের জন্য পাইকারি অফার পাওয়া যাচ্ছে।',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
    'common.order_now': 'অর্ডার করুন',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('app_lang') as Language) || 'en';
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    localStorage.setItem('app_lang', language);
    document.documentElement.lang = language;
    if (language === 'bn') {
      document.body.classList.add('font-bn');
    } else {
      document.body.classList.remove('font-bn');
    }
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
