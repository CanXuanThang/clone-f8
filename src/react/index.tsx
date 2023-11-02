import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '../modules/module-theme/components';
import AppRouter from '../modules/screens';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
