import { createContext, useContext, useEffect, useState } from 'react';
import { updateUserLanguage, updateUserTheme } from '@/services/user/userService';
import i18n from '@/locales/i18n';

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    userId: string | null;
    role: string | null;
    language: string | null;
    theme: string | null;
    login: (
        token: string,
        userId: string,
        role: string,
        language: string,
        theme: string
    ) => Promise<void>;
    logout: () => void;
    updateTheme: (theme: string) => void;
    updateLanguage: (language: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [language, setLanguage] = useState<string | null>(null);
    const [theme, setTheme] = useState<string | null>(null);
    const [isI18nReady, setIsI18nReady] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const storedUserId = localStorage.getItem('userId');
        const storedRole = localStorage.getItem('role');
        const storedLanguage = localStorage.getItem('language');
        const storedTheme = localStorage.getItem('theme');

        setIsAuthenticated(!!token);
        setUserId(storedUserId);
        setRole(storedRole);
        setLanguage(storedLanguage);
        setTheme(storedTheme);

        const syncLanguage = async () => {
            if (storedLanguage && storedLanguage !== i18n.language) {
                await i18n.changeLanguage(storedLanguage);
            }
            setIsI18nReady(true);
            setIsLoading(false);
        };

        syncLanguage();
    }, []);

    if (!isI18nReady) {
        return null;
    }

    const login = async (
        token: string,
        userId: string,
        role: string,
        language: string,
        theme: string
    ) => {
        localStorage.setItem('accessToken', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('role', role);
        localStorage.setItem('language', language);
        localStorage.setItem('theme', theme);

        setIsAuthenticated(true);
        setUserId(userId);
        setRole(role);
        setLanguage(language);
        setTheme(theme);

        if (language && language !== i18n.language) {
            await i18n.changeLanguage(language);
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        localStorage.removeItem('language');
        localStorage.removeItem('theme');

        setIsAuthenticated(false);
        setUserId(null);
        setRole(null);
        setLanguage(null);
        setTheme(null);
    };

    const updateTheme = async (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (userId) {
            const success = await updateUserTheme(userId, newTheme);
            if (!success) {
                console.error('Failed to update user theme on server');
            }
        }
    };

    const updateLanguage = async (newLanguage: string) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
        if (newLanguage !== i18n.language) {
            await i18n.changeLanguage(newLanguage);
        }
        if (userId) {
            const success = await updateUserLanguage(userId, newLanguage);
            if (!success) {
                console.error('Failed to update user language on server');
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                isLoading,
                userId,
                role,
                language,
                theme,
                login,
                logout,
                updateTheme,
                updateLanguage,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
