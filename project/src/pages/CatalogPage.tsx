import { useState } from 'react';
import ProductCatalog from '../components/ProductCatalog';
import type { Product } from '../components/ProductCatalog';

// Сканируем только НОВУЮ папку live_products. Старая папка products/ игнорируется сборщиком.
// Используем allowEmpty: true, чтобы Vite не ругался, если папки еще нет физически в Git
const modules = import.meta.glob('../data/live_products/*.json', { eager: true, allowEmpty: true });

// Превращаем импортированные модули в массив объектов товаров
const loadedProducts = Object.values(modules).map((mod: any) => {
  return mod.default ? mod.default : mod;
}) as Product[];

export default function CatalogPage() {
  const [products] = useState<Product[]>(loadedProducts);

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16">
      {products.length === 0 ? (
        <div>
          {/* Минималистичный заголовок */}
          <div className="mb-10">
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-3">КАТАЛОГ</p>
            <h1 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-none uppercase">
              КОЛЕКЦІЯ
            </h1>
          </div>
          {/* Заглушка, пока в админке пусто */}
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-900 rounded-xl">
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase">
              Каталог порожній. Додайте товари через адмін-панель.
            </p>
          </div>
        </div>
      ) : (
        // Если через админку создали товар — рендерим каталог
        <ProductCatalog products={products} />
      )}
    </div>
  );
}
