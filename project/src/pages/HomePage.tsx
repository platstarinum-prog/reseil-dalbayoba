import { Link } from 'react-router-dom';
import bapeTee from '../data/products/bape-tiger-tee.json';
import supremeBoxLogo from '../data/products/supreme-box-logo.json';
import jordan1 from '../data/products/nike-air-jordan-1.json';
import offWhiteBelt from '../data/products/off-white-belt.json';
import yeezy700 from '../data/products/yeezy-700.json';
import palaceJacket from '../data/products/palace-skateboards-jacket.json';
import review1 from '../data/reviews/review-1.json';
import review2 from '../data/reviews/review-2.json';
import review3 from '../data/reviews/review-3.json';
import review4 from '../data/reviews/review-4.json';
import ProductCard from '../components/ProductCard';

const FEATURED = [bapeTee, supremeBoxLogo, jordan1, offWhiteBelt, yeezy700, palaceJacket];
const REVIEWS = [review1, review2, review3, review4];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-black to-black" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-zinc-600 font-mono text-xs tracking-[0.3em] uppercase mb-6">STREETWEAR RESELL УКРАЇНА</p>

          <h1 className="text-white font-black text-7xl md:text-9xl tracking-tighter leading-[0.85] mb-8">
            5<span className="text-zinc-600">AM</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-12">
            Перевірені оригінали. Supreme, BAPE, Off-White, Nike та інші — все в одному місці.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/catalog"
              className="group flex items-center gap-3 px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-lg hover:bg-zinc-100 transition-all active:scale-[0.98]"
            >
              Переглянути каталог
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="transition-transform group-hover:translate-x-0.5">
                <path d="M6.5 3.5L11 8l-4.5 4.5L5.5 11l3-3-3-3z"/>
              </svg>
            </Link>
            <a
              href="https://t.me/5amstore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 border border-zinc-800 text-zinc-400 font-medium text-sm rounded-lg hover:border-zinc-600 hover:text-white transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.03 9.561c-.148.667-.54.833-1.092.518l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 14.26l-2.96-.924c-.643-.202-.657-.643.136-.953l11.57-4.462c.537-.194 1.006.131.656.148z"/>
              </svg>
              Telegram
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-zinc-700 font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-3">ОБРАНЕ</p>
            <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight leading-none">
              Нові надходження
            </h2>
          </div>
          <Link
            to="/catalog"
            className="text-zinc-500 font-mono text-xs tracking-wider hover:text-white transition-colors hidden sm:block"
          >
            ВСІ ТОВАРИ &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {FEATURED.filter(p => !p.sold).slice(0, 4).map((product, i) => (
            <ProductCard
              key={i}
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

        <Link
          to="/catalog"
          className="mt-8 block text-center text-zinc-500 font-mono text-xs tracking-wider hover:text-white transition-colors sm:hidden"
        >
          ВСІ ТОВАРИ &rarr;
        </Link>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Товарів продано' },
            { value: '100%', label: 'Оригінали' },
            { value: '24г', label: 'Підтримка' },
            { value: 'НП', label: 'Доставка по Україні' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-white font-black text-3xl md:text-4xl tracking-tight mb-1">{stat.value}</p>
              <p className="text-zinc-600 font-mono text-xs tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews preview */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-3">ВІДГУКИ</p>
            <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight leading-none">
              Нам довіряють
            </h2>
          </div>
          <Link
            to="/reviews"
            className="text-zinc-500 font-mono text-xs tracking-wider hover:text-white transition-colors hidden sm:block"
          >
            ВСІ ВІДГУКИ &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {REVIEWS.slice(0, 2).map((review, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#fff" className="opacity-90">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed flex-1">{review.text}</p>
              <div className="border-t border-zinc-800/60 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{review.author}</p>
                  <p className="text-zinc-600 font-mono text-xs">{review.item}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">
                  {review.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-white font-black text-4xl md:text-5xl tracking-tight leading-none mb-4">
            Готовий до покупки?
          </h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto mb-8">
            Напиши нам в Telegram — підберемо товар, відповімо на питання, організуємо доставку.
          </p>
          <a
            href="https://t.me/5amstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-lg hover:bg-zinc-100 transition-all active:scale-[0.98]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.03 9.561c-.148.667-.54.833-1.092.518l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 14.26l-2.96-.924c-.643-.202-.657-.643.136-.953l11.57-4.462c.537-.194 1.006.131.656.148z"/>
            </svg>
            Написати в Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-sm tracking-tight">5AM</span>
            <span className="text-zinc-700 font-mono text-[10px] tracking-widest uppercase">STORE</span>
          </div>
          <p className="text-zinc-700 font-mono text-[10px] tracking-wider">
            &copy; {new Date().getFullYear()} 5AM STORE. ВСІ ПРАВА ЗАХИЩЕНІ.
          </p>
        </div>
      </footer>
    </div>
  );
}
