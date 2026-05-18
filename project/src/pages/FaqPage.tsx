import { useState, useEffect } from 'react';
import FAQ, { FaqItem } from '../components/FAQ';

export default function FaqPage() {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/faq.json')
      .then((res) => res.json())
      .then((data) => {
        setFaqItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження FAQ:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase animate-pulse">
          Завантаження питань...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16">
      <FAQ items={faqItems} />
    </div>
  );
}
