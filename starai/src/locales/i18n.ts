import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const languages = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'zh', label: '中文' },
];

export async function initI18n() {
    const resources: Record<string, any> = {};
    for (const lang of languages) {
        const translation = await import(`./lang/${lang.code}.json`);
        resources[lang.code] = { translation: translation.default };
    }

    await i18n.use(initReactI18next).init({
        resources,
        lng: 'vi',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

    return i18n;
}

export default i18n;
