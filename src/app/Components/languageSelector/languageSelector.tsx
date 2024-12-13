import { languages } from "@/app/constants";
import { useLanguage } from "@/app/Context/languageContext/languageContext";

export const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = languages.find(({ label }) => label === event.target.value);
        if (selectedLanguage) {
            setLanguage(selectedLanguage);
        }
    };

    return (
        <div>
            <label htmlFor="language-selector">Select Language:</label>
            <select
                id="language-selector"
                value={language.label}
                onChange={handleChange}
                aria-label="Language Selector"
            >
                {languages.length === 0 ? (
                    <option value="">No languages available</option>
                ) : (
                    languages.map(({ label, name }) => (
                        <option key={label} value={label}>
                            {name}
                        </option>
                    ))
                )}
            </select>
        </div>
    );
};
