import { useState } from 'react';
import ProductCatalog from '../components/ProductCatalog';

// ИСПРАВЛЕНО: Читаем из реальной папки 'products', которая видна на скриншоте
const modules = import.meta.glob('../data/products/*.json', { eager: true }) as Record<string, any>;

const loadedProducts = Object.values(modules).map((mod: any) => {
  const data = mod.default ? mod.default : mod;
  
  return {
    id: String(data.id || Math.random().toString()),
    // Подстраиваем под поля, которые реально есть в твоих файлах
    name: String(data.name || 'Без назви'),
    brand: String(data.brand || '5AM'),
    price: Number(data.price || 0),
    imageUrl: String(data.image || '/images/uploads/default.jpg'),
    sizes: String(data.sizes || 'S, M, L, XL'),
    seller_tg: String(data.seller_tg || '5am_store_official'),
    condition: String(data.condition || 'New'),
    sold: Boolean(data.sold || false)
  };
}) as any[];

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
              Каталог порожній.
            </p>
          </div>
        </div>
      ) : (
        <ProductCatalog products={products} />
      )}
    </div>
  );
}
