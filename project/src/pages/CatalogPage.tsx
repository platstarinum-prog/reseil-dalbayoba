import ProductCatalog from '../components/ProductCatalog';
import type { Product } from '../components/ProductCatalog';
import bapeTee from '../data/products/bape-tiger-tee.json';
import supremeBoxLogo from '../data/products/supreme-box-logo.json';
import jordan1 from '../data/products/nike-air-jordan-1.json';
import offWhiteBelt from '../data/products/off-white-belt.json';
import yeezy700 from '../data/products/yeezy-700.json';
import palaceJacket from '../data/products/palace-skateboards-jacket.json';

const PRODUCTS: Product[] = [
  { id: 'bape-tiger-tee', ...bapeTee, category: bapeTee.category as Product['category'] },
  { id: 'supreme-box-logo', ...supremeBoxLogo, category: supremeBoxLogo.category as Product['category'] },
  { id: 'nike-air-jordan-1', ...jordan1, category: jordan1.category as Product['category'] },
  { id: 'off-white-belt', ...offWhiteBelt, category: offWhiteBelt.category as Product['category'] },
  { id: 'yeezy-700', ...yeezy700, category: yeezy700.category as Product['category'] },
  { id: 'palace-skateboards-jacket', ...palaceJacket, category: palaceJacket.category as Product['category'] },
];

export default function CatalogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <ProductCatalog products={PRODUCTS} />
    </main>
  );
}
