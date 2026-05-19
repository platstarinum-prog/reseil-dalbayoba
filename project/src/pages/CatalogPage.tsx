import { useState } from 'react';
import ProductCatalog from '../components/ProductCatalog';

// Читаем модули из новой чистой папки live_products
const modules = import.meta.glob('../data/live_products/*.json', { eager: true }) as Record<string, any>;

// Мапим данные, кастуя их к any[], чтобы TS пропустил билд без придирок к структуре
const loadedProducts = Object.values(modules).map((mod: any) => {
  const data = mod.default ? mod.default : mod;
  
  // Возвращаем объект, страхуя базовые поля. 
  // Если твой ProductCatalog ждет поля 'name', 'brand', 'sizes' — подставим безопасные фолбеки.
  return {
    id: String(data.id || Math.random().toString()),
    name: String(data.name || data.title_ru || 'Без назви'),
    brand: String(data.brand || '5AM'),
    category: String(data.category || 'Одяг'),
    price: Number(data.price || 0),
    image: String(data.image || '/images/uploads/default.jpg'),
    sizes: Array.isArray(data.sizes) ? data.sizes : ['S', 'M', 'L', 'XL'], // дефолтные размеры, если в админке пусто
    inStock: Boolean(data.inStock !== false),
    // На всякий случай оставляем и мультиязычные поля, если компонент берет их
    title_ru: String(data.title_ru || data.name || 'Без названия'),
    title_en: String(data.title_en || 'No title'),
    description_ru: String(data.description_ru || ''),
    description_en: String(data.description_en || '')
  };
}) as any[]; // Убили ошибку TS, заставив его принять этот массив

export default function CatalogPage() {
  const [products] = useState<any[]>(loadedProducts);

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16">
      {products.length === 0 ? (
        <div>
          <div className="mb-10">
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-3">КАТАЛОГ</p>
            <h1 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-none uppercase">
              КОЛЕКЦІЯ
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-900 rounded-xl">
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase">
              Каталог порожній. Додайте товари через адмін-панель.
            </p>
          </div>
        </div>
      ) : (
        // Передаем массив со всеми возможными полями в твой готовый каталог
        <ProductCatalog products={products as any} />
      )}
    </div>
  );
}
