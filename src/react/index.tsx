import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@module-theme/components';
import AppRouter from '@module-global/screens';
import { Provider } from 'react-redux';
import { reduxStore } from '@module-global/redux';

const queryClient = new QueryClient();

function App() {
    return (
        <Provider store={reduxStore}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <AppRouter />
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
