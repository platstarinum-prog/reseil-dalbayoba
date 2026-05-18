interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  sizes: string;
  imageUrl: string;
  seller_tg: string;
  condition?: string;
  sold?: boolean;
}

export default function ProductCard({
  name,
  brand,
  price,
  sizes,
  imageUrl,
  seller_tg,
  condition,
  sold = false,
}: ProductCardProps) {
  return (
    <div className={`group relative flex flex-col bg-zinc-950 border border-zinc-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:-translate-y-0.5 ${sold ? 'opacity-50' : ''}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {sold && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <span className="text-white font-mono text-xs tracking-widest uppercase border border-white/30 px-3 py-1.5 rounded-full">
              Продано
            </span>
          </div>
        )}
        {!sold && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <a
              href={`https://t.me/${seller_tg.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-xs font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.069l-2.03 9.561c-.148.667-.54.833-1.092.518l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 14.26l-2.96-.924c-.643-.202-.657-.643.136-.953l11.57-4.462c.537-.194 1.006.131.656.148z"/>
              </svg>
              Написати
            </a>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-0.5">{brand}</p>
            <h3 className="text-white font-medium text-sm leading-snug truncate">{name}</h3>
          </div>
          <span className="shrink-0 text-white font-bold text-base">
            {price.toLocaleString('uk-UA')} <span className="text-zinc-400 font-normal text-xs">грн</span>
          </span>
        </div>

        <div className="flex items-center gap-2 pt-1 border-t border-zinc-800/60">
          <span className="text-zinc-500 font-mono text-xs">{sizes}</span>
          {condition && (
            <>
              <span className="text-zinc-700">&bull;</span>
              <span className="text-zinc-500 font-mono text-xs">{condition}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
