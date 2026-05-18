import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';

type Category = 'Одяг' | 'Взуття' | 'Аксесуари';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: Category;
  sizes: string;
  imageUrl: string;
  seller_tg: string;
  condition?: string;
  sold?: boolean;
}

const FILTERS = [
  { id: 'all', label: 'Все' },
  { id: 'Одяг', label: 'Одяг' },
  { id: 'Взуття', label: 'Взуття' },
  { id: 'Аксесуари', label: 'Аксесуари' },
  { id: 'new', label: 'Нові' },
  { id: 'used', label: 'Б/У' },
  { id: 'SUPREME', label: 'Supreme' },
  { id: 'sold', label: 'Продані' },
];

interface Props {
  products: Product[];
}

export default function ProductCatalog({ products }: Props) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    switch (activeFilter) {
      case 'all':
        return products.filter(p => !p.sold);
      case 'Одяг':
      case 'Взуття':
      case 'Аксесуари':
        return products.filter(p => p.category === activeFilter && !p.sold);
      case 'new':
        return products.filter(p => p.condition === 'Відмінний' && !p.sold);
      case 'used':
        return products.filter(p => p.condition === 'Б/У' && !p.sold);
      case 'SUPREME':
        return products.filter(p => p.brand.toUpperCase() === 'SUPREME' && !p.sold);
      case 'sold':
        return products.filter(p => p.sold);
      default:
        return products;
    }
  }, [products, activeFilter]);

  return (
    <div>
      <div className="mb-10">
        <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-3">КАТАЛОГ</p>
        <div className="flex items-baseline gap-4">
          <h1 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-none">
            Всі товари
          </h1>
          <span className="text-zinc-600 font-mono text-sm">
            {filtered.length} позицій
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border ${
              activeFilter === filter.id
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              sizes={product.sizes}
              imageUrl={product.imageUrl}
              seller_tg={product.seller_tg}
              condition={product.condition}
              sold={product.sold}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <p className="text-zinc-700 font-mono text-xs tracking-widest uppercase mb-2">ПУСТО</p>
          <p className="text-zinc-500 text-sm">Немає товарів у цій категорії</p>
        </div>
      )}
    </div>
  );
}
