import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';
import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <I18nextProvider i18n={i18n}>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </I18nextProvider>
    </StrictMode>
);
