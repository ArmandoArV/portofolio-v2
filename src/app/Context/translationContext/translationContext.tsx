import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLanguage } from '../languageContext/languageContext';

interface TranslationContextProps {
    t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

interface TranslationProviderProps {
    children: React.ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
    const { language } = useLanguage();
    const [currentTranslations, setCurrentTranslations] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const loadTranslations = async () => {
            if (!language || !language.label) {
                console.error('Language label is undefined!');
                return;
            }

            console.log('Loading translations for:', language.label); // Add this log

            try {
                const translations = await import(`../../languageJsons/${language.label}.json`);
                setCurrentTranslations(translations);
            } catch (error) {
                console.error(`Error loading translations for ${language.label}:`, error);
            }
        };

        loadTranslations();
    }, [language]);

    const t = (key: string) => {
        return currentTranslations[key] || key; // Return the key if translation is missing
    };

    return (
        <TranslationContext.Provider value={{ t }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
