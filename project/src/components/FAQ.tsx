import { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
}

export default function FAQ({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <div className="mb-10">
        <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mb-3">ПИТАННЯ</p>
        <h1 className="text-white font-black text-5xl md:text-6xl tracking-tight leading-none">
          FAQ
        </h1>
      </div>

      <div className="max-w-2xl flex flex-col gap-1">
        {items.map((item, i) => (
          <div key={i} className="border border-zinc-800/80 rounded-xl overflow-hidden bg-zinc-950">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-zinc-900/50 transition-colors cursor-pointer"
            >
              <span className={`text-sm font-medium transition-colors ${open === i ? 'text-white' : 'text-zinc-300'}`}>
                {item.question}
              </span>
              <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-200 ${open === i ? 'border-white text-white rotate-45' : 'border-zinc-700 text-zinc-500'}`}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 1v8M1 5h8"/>
                </svg>
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96' : 'max-h-0'}`}>
              <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/60 pt-4">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
