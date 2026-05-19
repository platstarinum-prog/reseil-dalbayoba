import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext({
  lang: 'ua',
  setLang: (lang: string) => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('ua');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
