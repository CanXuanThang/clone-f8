import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@module-theme/components';
import AppRouter from '@module-global/screens';

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
