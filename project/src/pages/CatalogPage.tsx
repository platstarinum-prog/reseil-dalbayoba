import { useState, useMemo } from 'react';
import ProductCatalog from '../components/ProductCatalog';

const modules = import.meta.glob('../data/products/*.json', { eager: true }) as Record<string, any>;

const loadedProducts = Object.values(modules).map((mod: any) => {
  const data = mod.default ?? mod;
  return {
    ...data,
    id: data.id ?? Math.random().toString(36).slice(2),
    category: data.category ?? 'Інше', // Гарантируем, что категория есть
    seller_tg: String(data.seller_tg ?? '5am_store_official'),
    imageUrl: String(data.imageUrl ?? ''),
    sizes: String(data.sizes ?? ''),
    sold: Boolean(data.sold),
  };
});

export default function CatalogPage() {
  const [products] = useState<any[]>(loadedProducts);
  const [activeCat, setActiveCat] = useState('Всі');

  // Получаем уникальные категории из товаров + добавляем 'Всі'
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['Всі', ...Array.from(cats)];
  }, [products]);

  // Фильтруем товары
  const filteredProducts = useMemo(() => {
    return activeCat === 'Всі' 
      ? products 
      : products.filter(p => p.category === activeCat);
  }, [activeCat, products]);

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16">
      <div className="mb-12">
        <h1 className="text-white font-black text-5xl uppercase mb-8">Колекція</h1>
        
        {/* Панель категорій */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 border text-xs uppercase tracking-widest transition-all duration-300 ${
                activeCat === cat 
                  ? 'bg-white text-black border-white' 
                  : 'border-zinc-900 text-zinc-500 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="flex items-center justify-center py-20 border border-dashed border-zinc-900 rounded-xl">
          <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase">
            Товарів у цій категорії поки немає.
          </p>
        </div>
      ) : (
        <ProductCatalog products={filteredProducts} />
      )}
    </div>
  );
}
