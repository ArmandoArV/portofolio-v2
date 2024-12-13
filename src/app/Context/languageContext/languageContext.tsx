import React, { createContext, useContext, useState, useEffect } from 'react';
import { ILanguages } from '@/app/interfaces/ILanguages';
import { languages } from '@/app/constants';

interface LanguageContextProps {
  language: ILanguages;
  setLanguage: (language: ILanguages) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<ILanguages>(() => {
    try {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      return savedLanguage ? JSON.parse(savedLanguage) : languages[0];
    } catch {
      console.error('Failed to parse saved language from localStorage');
      return languages[0];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('selectedLanguage', JSON.stringify(language));
    } catch {
      console.error('Failed to save language to localStorage');
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};