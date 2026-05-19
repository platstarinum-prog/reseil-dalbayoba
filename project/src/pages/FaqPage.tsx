import { useState } from 'react';
import FAQ from '../components/FAQ';
// Импортируем JSON напрямую, Vite сам вшьет актуальные данные в билд
import faqData from '../data/faq.json';

export default function FaqPage() {
  // Кастуем к any, чтобы TS не ругался, если файл пустой или отформатирован как строка
  const rawItems = (faqData as any)?.items || [];

  // Мапим мультиязычные поля из админки в обычные question/answer для твоего компонента
  const formattedFaqItems = Array.isArray(rawItems)
    ? rawItems.map((item: any) => ({
        question: item.question_ru || item.question_en || '',
        answer: item.answer_ru || item.answer_en || ''
      }))
    : [];

  const [faqItems] = useState<any[]>(formattedFaqItems);

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16">
      {faqItems.length === 0 ? (
        <div>
          {/* Аккуратный минималистичный заголовок */}
          <div className="mb-10">
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-3">FAQ</p>
            <h1 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-none uppercase">
              Часті питання
            </h1>
          </div>
          {/* Заглушка, если вопросов еще нет */}
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-900 rounded-xl">
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase">
              Список питань порожній. Додайте їх через адмін-панель.
            </p>
          </div>
        </div>
      ) : (
        // Если вопросы есть — рендерим твой родной компонент
        <FAQ items={faqItems} />
      )}
    </div>
  );
}
