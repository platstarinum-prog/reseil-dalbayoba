import { useState } from 'react';
import ProductCatalog from '../components/ProductCatalog';
import type { Product } from '../components/ProductCatalog';

// Выносим сборку модулей на самый верх файла. Vite соберёт все JSON-ы ещё при компиляции.
const modules = import.meta.glob('../data/products/*.json', { eager: true });

// Превращаем объект модулей в плоский массив объектов товаров
const loadedProducts = Object.values(modules).map((mod: any) => {
  return mod.default ? mod.default : mod;
}) as Product[];

export default function CatalogPage() {
  // Передаем готовый массив в стейт. Если папка products/ пустая, сюда прилетит просто []
  const [products] = useState<Product[]>(loadedProducts);

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16">
      {products.length === 0 ? (
        <div>
          {/* Сначала выведем красивый минималистичный заголовок, чтобы страница не была совсем голой */}
          <div className="mb-10">
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-3">КАТАЛОГ</p>
            <h1 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-none uppercase">
              КОЛЕКЦІЯ
            </h1>
          </div>
          {/* Заглушка, если товаров в админке пока нет */}
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-900 rounded-xl">
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase">
              Каталог порожній. Додайте товари через адмін-панель.
            </p>
          </div>
        </div>
      ) : (
        // Если товары есть (из админки создался хотя бы один JSON) — рендерим твой каталог
        <ProductCatalog products={products} />
      )}
    </div>
  );
}
