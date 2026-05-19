import ProductCard from './ProductCard';

// Определяем структуру продукта здесь, чтобы не было ошибок импорта
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  sizes: string;
  imageUrl: string;
  seller_tg: string;
  condition?: string;
  sold?: boolean;
}

interface Props {
  products: Product[];
}

// Теперь этот компонент ТОЛЬКО отображает товары. 
// Вся логика фильтрации теперь живет в CatalogPage.tsx
export default function ProductCatalog({ products }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
}
