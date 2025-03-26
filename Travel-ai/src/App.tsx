import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Preferences } from './components/Preferences';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div>
                    <h1 className="text-left font-bold text-3xl leading-14">
                        {t('home.welcome-title.small')} <br />{' '}
                        <span className=" text-5xl"> {t('home.welcome-title.big')}</span>
                    </h1>
                </div>
                <Preferences />
            </ThemeProvider>
        </>
    );
}

export default App;
