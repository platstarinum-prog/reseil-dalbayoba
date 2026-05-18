import { useState, useEffect } from 'react';
import ProductCatalog from '../components/ProductCatalog';
import type { Product } from '../components/ProductCatalog';

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Автоматически импортируем все JSON файлы из твоей родной папки в src
    const modules = import.meta.glob('../data/products/*.json', { eager: true });
    
    const loadedProducts = Object.values(modules).map((mod: any) => {
      return mod.default ? mod.default : mod;
    });

    setProducts(loadedProducts);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase animate-pulse">
          Завантаження каталогу...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16">
      <ProductCatalog products={products} />
    </div>
  );
}
