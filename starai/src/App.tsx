import './App.css';
import { Preferences } from './components/Preferences';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import AppRoutes from './routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <AppRoutes />
                    <Preferences />
                    <Toaster position="bottom-left" expand={true} richColors />
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
