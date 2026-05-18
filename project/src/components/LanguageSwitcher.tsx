import { useState } from 'react';

const LANGS = [
  { code: 'uk', label: 'УКР', flag: '\u{1F1FA}\u{1F1E6}' },
  { code: 'ru', label: 'РУС', flag: '\u{1F1F7}\u{1F1FA}' },
];

export default function LanguageSwitcher() {
  const [active, setActive] = useState('uk');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-1 px-1.5 py-1.5 bg-black/60 backdrop-blur-md border border-zinc-800 rounded-full">
        {LANGS.map(lang => (
          <button
            key={lang.code}
            onClick={() => setActive(lang.code)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
              active === lang.code
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
            {active === lang.code && (
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse ml-0.5" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
