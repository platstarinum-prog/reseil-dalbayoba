import ProductCard from './ProductCard';
import { Product } from './types'; // Убедись, что тип Product вынесен в отдельный файл

interface Props {
  products: Product[];
}

export default function ProductCatalog({ products }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product} // Передаем все свойства разом
        />
      ))}
    </div>
  );
}
