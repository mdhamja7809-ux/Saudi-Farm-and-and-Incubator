import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Plus, Minus, CreditCard, Calculator, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db as firebaseDb } from '../services/firebase';

export const Order: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    productType: 'Duck',
    quantity: 5,
    deliveryArea: '',
    deliveryDate: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const areas = [
    'Manfuhah', 'Azizia', 'Shifa', 'Old Chanaya', 'New Chanaya', 'No. 24', 'Batha', 'Atika', 'Surroundings'
  ];

  const bnAreas: Record<string, string> = {
    'Manfuhah': 'মানফুহাহ',
    'Azizia': 'আজিজিয়া',
    'Shifa': 'শিফা',
    'Old Chanaya': 'পুরাতন চানায়া',
    'New Chanaya': 'নতুন চানায়া',
    'No. 24': '২৪ নম্বর',
    'Batha': 'বাথা',
    'Atika': 'আতিকা',
    'Surroundings': 'পার্শ্ববর্তী এলাকা'
  };

  const prices = {
    'Duck': 40,
    'Deshi Chicken': 35,
    'Turkey': 250
  };

  const totalPrice = useMemo(() => {
    return prices[formData.productType as keyof typeof prices] * formData.quantity;
  }, [formData.productType, formData.quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const orderData = {
        ...formData,
        totalPrice,
        createdAt: serverTimestamp(),
      };
      await addDoc(collection(firebaseDb, 'orders'), orderData);

      const areasString = language === 'en' ? formData.deliveryArea : bnAreas[formData.deliveryArea];
      const message = language === 'en' 
        ? `*New Order from Website*\n\nName: ${formData.customerName}\nPhone: ${formData.phoneNumber}\nProduct: ${formData.productType}\nQuantity: ${formData.quantity}\nArea: ${areasString}\nTotal: ${totalPrice} SAR`
        : `*নতুন অর্ডার (ওয়েবসাইট)*\n\nনাম: ${formData.customerName}\nফোন: ${formData.phoneNumber}\nপণ্য: ${formData.productType}\nপরিমাণ: ${formData.quantity}\nএলাকা: ${areasString}\nমোট দাম: ${totalPrice} রিয়াল`;

      window.open(`https://wa.me/966553972396?text=${encodeURIComponent(message)}`, '_blank');
    } catch (error) {
      console.error("Order error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-cream min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl p-8 sm:p-20 rounded-[5rem] shadow-2xl border border-brand-green/10"
        >
          <div className="text-center mb-16">
            <h1 className={cn("text-5xl sm:text-7xl font-serif text-brand-green mb-6", language === 'bn' && "font-bn text-8xl")}>
              {t('order.title')}
            </h1>
            <p className={cn("text-brand-green/70 text-lg sm:text-xl max-w-md mx-auto", language === 'bn' && "font-bn text-2xl")}>
              {language === 'en' 
                ? 'Fresh poultry straight to your door. Fill details to confirm order.'
                : 'তাজা হাঁস-মুরগি সরাসরি আপনার দরজায়। অর্ডার নিশ্চিত করতে তথ্য পূরণ করুন।'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <InputGroup label={t('order.form.name')}>
                <input
                  required
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b-2 border-brand-green/10 focus:border-brand-orange outline-none py-4 text-brand-green font-bold text-lg transition-all"
                />
              </InputGroup>

              <InputGroup label={t('order.form.phone')}>
                <input
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="055XXXXXXX"
                  className="w-full bg-transparent border-b-2 border-brand-green/10 focus:border-brand-orange outline-none py-4 text-brand-green font-bold text-lg transition-all"
                />
              </InputGroup>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <InputGroup label={t('order.form.product')}>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-brand-green/10 focus:border-brand-orange outline-none py-4 text-brand-green font-bold text-lg transition-all appearance-none cursor-pointer"
                >
                  <option value="Duck">{t('product.duck.name')}</option>
                  <option value="Deshi Chicken">{t('product.chicken.name')}</option>
                  <option value="Turkey">{t('product.turkey.name')}</option>
                </select>
              </InputGroup>

              <InputGroup label={t('order.form.quantity')}>
                <div className="flex items-center gap-8 py-2 border-b-2 border-brand-green/10">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                    className="w-10 h-10 rounded-full border-2 border-brand-green/10 flex items-center justify-center hover:bg-brand-green/5 transition-all text-brand-green font-black"
                  >
                    -
                  </button>
                  <span className="text-2xl font-black text-brand-green min-w-[2rem] text-center">{formData.quantity}</span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                    className="w-10 h-10 rounded-full border-2 border-brand-green/10 flex items-center justify-center hover:bg-brand-green/5 transition-all text-brand-green font-black"
                  >
                    +
                  </button>
                </div>
              </InputGroup>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <InputGroup label={t('order.form.area')}>
                <select
                  name="deliveryArea"
                  value={formData.deliveryArea}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-brand-green/10 focus:border-brand-orange outline-none py-4 text-brand-green font-bold text-lg transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Area</option>
                  {areas.map(area => (
                    <option key={area} value={area}>{language === 'en' ? area : bnAreas[area]}</option>
                  ))}
                </select>
              </InputGroup>

              <InputGroup label={t('order.form.date')}>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-brand-green/10 focus:border-brand-orange outline-none py-4 text-brand-green font-bold text-lg transition-all"
                />
              </InputGroup>
            </div>

            <div className="pt-12 flex flex-col items-center gap-12 border-t border-brand-green/5">
              <div className="text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-green/30 mb-2 block">Total Estimation</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black text-brand-orange tracking-tighter">{totalPrice}</span>
                  <span className="text-2xl font-black text-brand-orange/60 font-serif italic">SAR</span>
                </div>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "w-full sm:w-auto min-w-[320px] bg-brand-green text-white px-12 py-7 rounded-[2rem] font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-green/30 disabled:opacity-50 flex items-center justify-center gap-4",
                  language === 'bn' && "font-bn normal-case tracking-normal text-2xl"
                )}
              >
                {isSubmitting ? 'PROCESSING...' : t('order.form.submit')}
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-green/30 ml-1">
      {label}
    </label>
    {children}
  </div>
);
