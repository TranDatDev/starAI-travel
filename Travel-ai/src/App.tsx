import './App.css';
import { Preferences } from './components/Preferences';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import AppRoutes from './routes/AppRoutes';
import { Helmet } from 'react-helmet-async';
function App() {
    return (
        <>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <AppRoutes />
                <Preferences />
                <Toaster position="bottom-left" expand={true} richColors />
            </ThemeProvider>
        </>
    );
}

export default App;
